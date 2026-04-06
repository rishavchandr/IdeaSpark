import {
  ArrowLeft,
  ChevronRight,
  Layers3,
  Radar,
  ShieldAlert,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { ErrorMessage } from "../../components/ui/ErrorMessage";
import { LoaderCard } from "../../components/ui/LoaderCard";
import { SectionCard } from "../../components/ui/SectionCard";
import { formatDate } from "../../utils/formatDate";
import { getRiskVariant } from "../../utils/risk";

export function IdeaDetailView({ idea, isLoading, error, ideaId }) {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="grid gap-4">
        <LoaderCard lines={5} />
        <LoaderCard lines={6} />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!idea) {
    return <ErrorMessage message="Idea not found." />;
  }

  return (
    <div className="space-y-6">
      <section className="panel relative overflow-hidden p-6 sm:p-7">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-emerald/10" />
        <div className="relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="info">{formatDate(idea.createdAt)}</Badge>
                <Badge variant={getRiskVariant(idea.riskLevel)}>{idea.riskLevel}</Badge>
                <Badge>{idea.score}/100 viability score</Badge>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {idea.title}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                {idea.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" onClick={() => navigate("/ideas")}>
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <MetricCard
              icon={Target}
              label="Risk Level"
              value={idea.riskLevel}
              hint="Overall execution and market risk"
            />
            <MetricCard
              icon={Radar}
              label="Viability Score"
              value={`${idea.score}/100`}
              hint="AI-estimated startup potential"
            />
            <MetricCard
              icon={Layers3}
              label="Competitors"
              value={`${idea.competitors?.length || 0}`}
              hint="Relevant products in the same space"
            />
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <SectionCard
            title="Target Customers"
            description="The most likely user groups who would feel this problem clearly and early."
          >
            <InfoList
              icon={Users}
              items={idea.customers}
              tone="cyan"
            />
          </SectionCard>

          <SectionCard
            title="Market Opportunities"
            description="Primary market categories and where the product can position itself."
          >
            <InfoList
              icon={Target}
              items={idea.market}
              tone="emerald"
            />
          </SectionCard>
        </div>

        <div className="space-y-6">
          <SectionCard
            title="Recommended MVP Stack"
            description="A practical first-pass tech stack suggested for a fast, lean build."
          >
            <div className="flex flex-wrap gap-2">
              {idea.techStack?.map((tech) => (
                <Badge
                  key={tech}
                  className="border border-white/10 bg-white/[0.06] px-3 py-1.5 text-slate-100"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </SectionCard>

          <SectionCard
            title="Competitor Landscape"
            description="Comparable solutions and the differentiation angle this idea may need."
          >
            <div className="space-y-3">
              {idea.competitors?.map((competitor) => (
                <div
                  key={competitor.name}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,15,32,0.98),rgba(4,9,22,0.92))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition hover:border-amber-300/20"
                >
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-amber-300/50 to-transparent opacity-70" />
                  <div className="absolute -right-10 top-0 h-24 w-24 rounded-full bg-amber-300/6 blur-2xl transition group-hover:bg-amber-300/10" />

                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[20px] border border-amber-300/12 bg-amber-300/10 text-amber-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <ShieldAlert className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-lg font-semibold tracking-tight text-white">
                          {competitor.name}
                        </p>
                        <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-slate-500 transition group-hover:text-amber-100">
                          <ChevronRight className="h-4 w-4" />
                        </span>
                      </div>
                      <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300/90">
                        {competitor.differentiation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value, hint }) {
  return (
    <div className="panel-muted p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-slate-200">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <p className="text-sm text-slate-400">{label}</p>
          <p className="text-xl font-bold text-white">{value}</p>
        </div>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{hint}</p>
    </div>
  );
}

function InfoList({ icon: Icon, items = [], tone = "cyan" }) {
  const tones = {
    cyan: {
      line: "via-cyan-300/65",
      icon: "border-cyan-300/15 bg-cyan-300/10 text-cyan-200",
      chip: "text-cyan-200",
    },
    emerald: {
      line: "via-emerald-300/65",
      icon: "border-emerald-300/15 bg-emerald-300/10 text-emerald-200",
      chip: "text-emerald-200",
    },
  };

  const toneStyle = tones[tone] || tones.cyan;

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item}
          className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,15,32,0.98),rgba(4,9,22,0.92))] p-5 transition hover:border-white/15"
        >
          <div className={`absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent ${toneStyle.line} to-transparent opacity-80`} />
          <div className="relative flex items-start gap-4">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[20px] border ${toneStyle.icon}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${toneStyle.chip}`}>
                Insight
              </p>
              <p className="mt-2 text-base leading-8 text-slate-300/90">{item}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
