import { cn } from "../../utils/cn";

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "min-h-[140px] w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/10",
        className
      )}
      {...props}
    />
  );
}
