import { useParams } from "react-router-dom";
import { IdeaDetailView } from "../modules/ideas/IdeaDetailView";
import { useIdeaDetail } from "../hooks/useIdeaDetail";

export function IdeaDetailPage() {
  const { ideaId } = useParams();
  const { data, isLoading, error } = useIdeaDetail(ideaId);

  return <IdeaDetailView idea={data} isLoading={isLoading} error={error} ideaId={ideaId} />;
}
