"use client";

import { useMemo, useState } from "react";
import { allProjects } from "@/lib/projects-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Layers } from "lucide-react";

const filters = [
  "All",
  "LLM/Agentic",
  "Applied ML",
  "MLOps",
  "NLP",
  "CV",
  "Full-Stack",
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return allProjects;
    }
    return allProjects.filter((project) =>
      project.tags?.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-slate-950">
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Layers className="h-4 w-4" />
              Projects Archive
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6 leading-normal pb-1">
              Applied AI Systems
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-7">
              A focused portfolio of LLM-powered systems and applied ML
              platforms that emphasize orchestration, reliability, and
              production-adjacent impact.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "shadow-lg shadow-primary/20"
                    : "border-slate-700/60 text-slate-300 hover:text-white"
                }
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredProjects.map((project) => (
              <Card
                key={`${project.title}-${project.tier ?? "misc"}`}
                className="h-full flex flex-col overflow-hidden backdrop-blur-md bg-slate-900/60 border-slate-700/50"
              >
                <div className="relative aspect-[16/10] bg-slate-900/60 overflow-hidden rounded-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-contain object-center brightness-105 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute top-3 right-3 z-10 flex flex-col items-end gap-2">
                    <Badge
                      variant="secondary"
                      className="backdrop-blur-md bg-background/80 border-slate-700/50"
                    >
                      {project.category}
                    </Badge>
                    {project.tier && (
                      <Badge
                        variant="outline"
                        className="backdrop-blur-md bg-background/70 border-slate-600/50 text-slate-200 text-xs px-2 py-0.5"
                      >
                        {project.tier}
                      </Badge>
                    )}
                    {project.label && (
                      <Badge
                        variant="outline"
                        className="backdrop-blur-md bg-background/70 border-slate-600/50 text-slate-200 text-xs px-2 py-0.5"
                      >
                        {project.label}
                      </Badge>
                    )}
                    {project.status && (
                      <Badge
                        variant="outline"
                        className="backdrop-blur-md bg-background/70 border-amber-400/40 text-amber-200 text-xs px-2 py-0.5"
                      >
                        {project.status}
                      </Badge>
                    )}
                  </div>
                </div>

                <CardHeader className="pb-3 pt-4 flex-shrink-0">
                  <CardTitle className="text-lg leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-6 text-slate-300 line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs px-2 py-1 bg-primary/5 border-primary/20 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-2">
                    {project.githubUrl && project.githubUrl !== "#" ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Github className="h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs bg-muted/50 border-muted text-muted-foreground cursor-not-allowed"
                        disabled
                      >
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </Button>
                    )}

                    {project.liveUrl && project.liveUrl !== "#" ? (
                      <Button size="sm" className="flex-1 text-xs" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Live
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
