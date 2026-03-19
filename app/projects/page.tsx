import { Layers, Search } from "lucide-react";
import { getArchiveProjects } from "@/lib/projects-data";
import { ProjectArchiveGrid } from "@/components/projects/project-archive-grid";

export default function ProjectsPage() {
  const projects = getArchiveProjects();

  return (
    <main className="min-h-screen bg-slate-950 pb-16">
      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-aurora opacity-70 pointer-events-none" />
        <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-slate-300">
              <Layers className="h-4 w-4" />
              Projects Archive
            </div>
            <h1 className="mt-6 font-serif text-4xl leading-[0.98] text-white sm:text-5xl lg:text-6xl">
              Technical Case Studies and Project Archive
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore flagship agentic systems, supporting AI and ML projects,
              and coursework case studies.
            </p>
          </div>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-6 shadow-glass backdrop-blur-xl">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Discovery
                </p>
                <p className="text-base font-semibold text-white sm:text-lg">
                  Filter by archive group or search by project, tool, or domain
                </p>
              </div>
            </div>

            <ProjectArchiveGrid projects={projects} />
          </div>
        </div>
      </section>
    </main>
  );
}
