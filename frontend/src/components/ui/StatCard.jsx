export function StatCard({ label, value, hint, accentClass }) {
  return (
    <div className="panel-muted relative overflow-hidden p-4">
      <div className={`absolute inset-x-0 top-0 h-px ${accentClass}`} />
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-3 text-2xl font-extrabold text-white">{value}</p>
      {hint ? <p className="mt-2 text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}
