export function LoaderCard({ lines = 4 }) {
  return (
    <div className="panel p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-6 w-44 rounded-full bg-white/10" />
        {Array.from({ length: lines }).map((_, index) => (
          <div key={index} className="h-4 rounded-full bg-white/5" />
        ))}
      </div>
    </div>
  );
}
