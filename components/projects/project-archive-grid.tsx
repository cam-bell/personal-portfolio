"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Project, archiveGroups } from "@/lib/projects-data";
import { ProjectArchiveFilters } from "@/components/projects/project-archive-filters";
import { ProjectArchiveCard } from "@/components/projects/project-archive-card";

export function ProjectArchiveGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filters = useMemo(() => ["All", ...archiveGroups], []);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "All" || project.archiveGroup === activeFilter;

      const searchableText = [
        project.title,
        project.preview,
        project.homepageSummary,
        project.archiveGroup,
        project.category,
        project.role,
        ...(project.techStack ?? []),
        ...(project.tags ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery.length === 0 ||
        searchableText.includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, projects, query]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <ProjectArchiveFilters
          filters={filters}
          activeFilter={activeFilter}
          onChange={setActiveFilter}
        />

        <div className="relative w-full lg:max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects, tools, or domains"
            className="border-white/10 bg-white/[0.04] pl-10 text-slate-100 placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectArchiveCard key={project.slug} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.03] px-6 py-12 text-center">
          <p className="text-lg font-medium text-white">No projects match that view.</p>
          <p className="mt-2 text-sm text-slate-400">
            Try a broader filter or remove the search term.
          </p>
        </div>
      ) : null}
    </div>
  );
}
