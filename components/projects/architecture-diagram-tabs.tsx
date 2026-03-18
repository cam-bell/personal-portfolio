"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { ProjectDiagram } from "@/lib/projects-data";

export function ArchitectureDiagramTabs({
  diagrams,
}: {
  diagrams: ProjectDiagram[];
}) {
  if (!diagrams.length) {
    return null;
  }

  if (diagrams.length === 1) {
    const diagram = diagrams[0];

    return (
      <figure className="rounded-3xl border border-white/10 bg-slate-950/50 p-4">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
          <img
            src={diagram.src}
            alt={diagram.alt}
            className="w-full h-auto"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption className="mt-3 text-sm leading-6 text-slate-400">
          {diagram.caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <Tabs.Root defaultValue={diagrams[0].id} className="space-y-4">
      <Tabs.List className="flex gap-2 overflow-x-auto pb-2">
        {diagrams.map((diagram) => (
          <Tabs.Trigger
            key={diagram.id}
            value={diagram.id}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition data-[state=active]:border-primary/30 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            {diagram.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {diagrams.map((diagram) => (
        <Tabs.Content key={diagram.id} value={diagram.id}>
          <figure className="rounded-3xl border border-white/10 bg-slate-950/50 p-4">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
              <img
                src={diagram.src}
                alt={diagram.alt}
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-6 text-slate-400">
              {diagram.caption}
            </figcaption>
          </figure>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
