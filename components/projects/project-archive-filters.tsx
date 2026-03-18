"use client";

import { Button } from "@/components/ui/button";

type ProjectArchiveFiltersProps = {
  primaryFilters: string[];
  secondaryFilters?: string[];
  activeFilter: string;
  onChange: (value: string) => void;
};

const getFilterLabel = (filter: string) => {
  if (filter === "Coursework") {
    return "Applied ML Case Studies";
  }

  return filter;
};

export function ProjectArchiveFilters({
  primaryFilters,
  secondaryFilters = [],
  activeFilter,
  onChange,
}: ProjectArchiveFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {primaryFilters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            size="sm"
            onClick={() => onChange(filter)}
            className={
              activeFilter === filter
                ? "shadow-lg shadow-primary/25"
                : "border-white/10 text-slate-300 hover:border-white/30 hover:text-white"
            }
          >
            {getFilterLabel(filter)}
          </Button>
        ))}
      </div>

      {secondaryFilters.length ? (
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
            Capability Studies
          </p>
          {secondaryFilters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => onChange(filter)}
              className={
                activeFilter === filter
                  ? "shadow-lg shadow-primary/25"
                  : "border-white/10 text-slate-300 hover:border-white/30 hover:text-white"
              }
            >
              {getFilterLabel(filter)}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
