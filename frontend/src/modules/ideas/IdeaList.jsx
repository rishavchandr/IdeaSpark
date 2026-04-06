import { useState } from "react";
import { ArrowUpRight, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { ConfirmDialog } from "../../components/ui/ConfirmDialog";
import { EmptyState } from "../../components/ui/EmptyState";
import { ErrorMessage } from "../../components/ui/ErrorMessage";
import { LoaderCard } from "../../components/ui/LoaderCard";
import { removeIdea } from "../../services/ideaService";
import { formatDate } from "../../utils/formatDate";
import { getRiskVariant } from "../../utils/risk";

export function IdeaList({ ideas, isLoading, error, onIdeasChange }) {
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [deleteError, setDeleteError] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!selectedIdea?._id) return;

    setDeleteError("");
    try {
      setIsDeleting(true);
      await removeIdea(selectedIdea._id);
      onIdeasChange((currentIdeas) =>
        currentIdeas.filter((idea) => idea._id !== selectedIdea._id)
      );
      setSelectedIdea(null);
    } catch (deleteError) {
      setDeleteError(deleteError.message);
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="grid gap-4">
        <LoaderCard />
        <LoaderCard />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!ideas?.length) {
    return (
      <EmptyState
        title="No saved ideas yet"
        description="Create your first startup idea analysis from the dashboard and it will appear here instantly."
      />
    );
  }

  return (
    <>
      <div className="grid gap-4">
        {ideas.map((idea) => (
          <article
            key={idea._id}
            className="panel group relative overflow-hidden p-5 transition hover:border-cyan-400/20 hover:bg-white/[0.06] sm:p-6"
          >
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-70" />

            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="info">{formatDate(idea.createdAt)}</Badge>
                <Badge variant={getRiskVariant(idea.riskLevel)}>{idea.riskLevel || "Unknown Risk"}</Badge>
                <Badge>{idea.score ?? 0}/100 score</Badge>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  to={`/ideas/${idea._id}`}
                  aria-label={`View full analysis for ${idea.title}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 transition hover:border-cyan-400/30 hover:bg-white/10 hover:text-cyan-200"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Button
                  className="px-3"
                  variant="danger"
                  onClick={() => {
                    setDeleteError("");
                    setSelectedIdea(idea);
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-bold text-white">{idea.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">{idea.summary}</p>
            </div>
          </article>
        ))}
      </div>

      <ConfirmDialog
        isOpen={Boolean(selectedIdea)}
        title="Delete idea analysis?"
        description={
          selectedIdea
            ? `This will permanently remove "${selectedIdea.title}" from your saved ideas.`
            : ""
        }
        confirmLabel="Delete Idea"
        cancelLabel="Keep Idea"
        isLoading={isDeleting}
        error={deleteError}
        onConfirm={handleDelete}
        onCancel={() => {
          if (isDeleting) return;
          setDeleteError("");
          setSelectedIdea(null);
        }}
      />
    </>
  );
}
