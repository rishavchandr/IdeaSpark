import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <div className="panel mx-auto mt-10 max-w-xl p-8 text-center">
      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">404</p>
      <h2 className="mt-4 text-3xl font-extrabold text-white">Page not found</h2>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        The page you are looking for does not exist. Return to the dashboard to create or review ideas.
      </p>
      <div className="mt-6">
        <Link to="/">
          <Button>Go to dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
