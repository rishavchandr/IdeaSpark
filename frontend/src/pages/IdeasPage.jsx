import { SectionCard } from "../components/ui/SectionCard";
import { IdeaList } from "../modules/ideas/IdeaList";
import { useIdeas } from "../hooks/useIdeas";

export function IdeasPage() {
  const { data, isLoading, error, setData } = useIdeas();

  return (
    <SectionCard
      title="Saved Startup Ideas"
      description="Your previously analyzed ideas live here for quick review and comparison."
    >
      <IdeaList ideas={data} isLoading={isLoading} error={error} onIdeasChange={setData} />
    </SectionCard>
  );
}
