import { Lightbulb, ListTodo, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";

const links = [
  {
    to: "/",
    label: "Create Idea",
    icon: Sparkles,
  },
  {
    to: "/ideas",
    label: "Idea Library",
    icon: ListTodo,
  },
];

export function Sidebar() {
  return (
    <aside className="panel sticky top-4 z-20 flex h-fit flex-col gap-8 p-5 lg:w-[280px]">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/80 via-brand-cyan/80 to-brand-emerald/80 shadow-lg shadow-cyan-500/20">
          <Lightbulb className="h-6 w-6 text-slate-950" />
        </div>
        <div>
          <p className="text-lg font-extrabold tracking-tight text-white">IdeaSpark</p>
          <p className="text-sm text-slate-400">AI startup analysis</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white",
                isActive && "bg-white/10 text-white shadow-inner shadow-white/5"
              )
            }
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-brand-blue/10 to-transparent p-4">
        <p className="text-sm font-semibold text-white">Sharp, clean founder workflow</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Capture startup ideas, review AI-backed traction signals, and keep your best concepts organized.
        </p>
      </div>
    </aside>
  );
}
