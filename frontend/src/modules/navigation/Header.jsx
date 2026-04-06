import { useLocation } from "react-router-dom";
import { getPageMeta } from "../../utils/pageMeta";

export function Header() {
  const { pathname } = useLocation();
  const meta = getPageMeta(pathname);

  return (
    <header className="mb-6 flex flex-col gap-3 pt-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{meta.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {meta.title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          {meta.description}
        </p>
      </div>
    </header>
  );
}
