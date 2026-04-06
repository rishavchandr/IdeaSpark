import { SectionCard } from "../components/ui/SectionCard";
import { HeroPanel } from "../modules/dashboard/HeroPanel";
import { IdeaForm } from "../modules/dashboard/IdeaForm";

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <HeroPanel />
      <SectionCard
        title="Submit a Startup Idea"
        description="Enter a title and a concise product description to generate AI-backed startup analysis."
      >
        <IdeaForm />
      </SectionCard>
    </div>
  );
}
