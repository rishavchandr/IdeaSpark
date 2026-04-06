import { cn } from "../../utils/cn";

const variants = {
  neutral: "bg-white/5 text-slate-200",
  success: "bg-emerald-500/15 text-emerald-200",
  warning: "bg-amber-500/15 text-amber-200",
  danger: "bg-rose-500/15 text-rose-200",
  info: "bg-cyan-400/15 text-cyan-200",
};

export function Badge({ children, variant = "neutral", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
