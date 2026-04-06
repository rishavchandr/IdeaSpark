import { LoaderCircle } from "lucide-react";
import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-emerald text-slate-950 hover:shadow-lg hover:shadow-cyan-500/20",
  secondary: "bg-white/5 text-white hover:bg-white/10",
  ghost: "bg-transparent text-slate-300 hover:bg-white/5 hover:text-white",
  danger: "bg-rose-500/15 text-rose-200 hover:bg-rose-500/25",
};

export function Button({
  children,
  className,
  variant = "primary",
  isLoading = false,
  disabled = false,
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <LoaderCircle className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
