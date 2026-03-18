"use client";

import { Button } from "@/components/ui/button";

type ProjectArchiveFiltersProps = {
  filters: string[];
  activeFilter: string;
  onChange: (value: string) => void;
};

export function ProjectArchiveFilters({
  filters,
  activeFilter,
  onChange,
}: ProjectArchiveFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
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
          {filter}
        </Button>
      ))}
    </div>
  );
}
