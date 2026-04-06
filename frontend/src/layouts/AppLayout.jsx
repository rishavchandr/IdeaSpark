import { Outlet } from "react-router-dom";
import { Sidebar } from "../modules/navigation/Sidebar";
import { Header } from "../modules/navigation/Header";

export function AppLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:80px_80px] opacity-[0.08]" />
      <div className="pointer-events-none absolute left-10 top-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl animate-pulseSoft" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-emerald/10 blur-3xl animate-float" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 lg:flex-row lg:px-8">
        <Sidebar />
        <main className="flex-1">
          <Header />
          <div className="pb-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
