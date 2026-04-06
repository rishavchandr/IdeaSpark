import { Badge } from "../../components/ui/Badge";
import { StatCard } from "../../components/ui/StatCard";

export function HeroPanel() {
  return (
    <section className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
      <div className="panel relative overflow-hidden p-6 sm:p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-emerald/10" />
        <div className="relative">
          <Badge variant="info">AI-Powered Founder Tool</Badge>
          <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Turn startup concepts into structured insight in a single flow.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            IdeaSpark helps you pressure-test ideas with instant AI analysis, so you can spot traction signals,
            risks, and product direction before you build.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
        <StatCard
          label="Workflow"
          value="Submit -> Analyze"
          hint="A focused path for quick validation"
          accentClass="bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/80 to-brand-cyan/0"
        />
        <StatCard
          label="Output"
          value="7 insight blocks"
          hint="Summary, market, competitors, score, and more"
          accentClass="bg-gradient-to-r from-brand-blue/0 via-brand-blue/80 to-brand-blue/0"
        />
        <StatCard
          label="Library"
          value="Saved history"
          hint="Return to earlier ideas and compare quality"
          accentClass="bg-gradient-to-r from-brand-emerald/0 via-brand-emerald/80 to-brand-emerald/0"
        />
      </div>
    </section>
  );
}
