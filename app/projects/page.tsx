"use client";

import { useMemo, useState } from "react";
import { allProjects } from "@/lib/projects-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Layers } from "lucide-react";
import { motion } from "framer-motion";

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
  const [activeProject, setActiveProject] = useState(
    null as (typeof allProjects)[number] | null
  );

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
        <div className="absolute inset-0 bg-aurora opacity-70 pointer-events-none" />
        <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Layers className="h-4 w-4" />
              Projects Archive
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-aurora mb-6 leading-normal pb-1">
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
                    ? "shadow-lg shadow-primary/30"
                    : "border-white/10 text-slate-300 hover:text-white hover:border-white/30"
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
                className="h-full flex flex-col overflow-hidden glass-card backdrop-blur-xl border border-white/10 shadow-glass"
              >
                <div className="relative aspect-[16/8] bg-slate-900/60 overflow-hidden rounded-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
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

                <CardHeader className="pb-2 pt-3 flex-shrink-0">
                  <CardTitle className="text-base leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-6 text-slate-300 line-clamp-2">
                    {project.preview ?? project.description}
                  </CardDescription>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="mt-2 text-xs text-primary/80 hover:text-primary transition-colors"
                  >
                    View details
                  </button>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
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
                        className="flex-1 text-[11px]"
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
                      <Button size="sm" className="flex-1 text-[11px]" asChild>
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

      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            aria-label="Close project details"
            onClick={() => setActiveProject(null)}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-3xl glass-card border border-white/10 shadow-glass rounded-2xl p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge
                    variant="secondary"
                    className="backdrop-blur-md bg-background/80 border-slate-700/50"
                  >
                    {activeProject.category}
                  </Badge>
                  {activeProject.tier && (
                    <Badge
                      variant="outline"
                      className="backdrop-blur-md bg-background/70 border-slate-600/50 text-slate-200 text-xs px-2 py-0.5"
                    >
                      {activeProject.tier}
                    </Badge>
                  )}
                  {activeProject.label && (
                    <Badge
                      variant="outline"
                      className="backdrop-blur-md bg-background/70 border-slate-600/50 text-slate-200 text-xs px-2 py-0.5"
                    >
                      {activeProject.label}
                    </Badge>
                  )}
                  {activeProject.status && (
                    <Badge
                      variant="outline"
                      className="backdrop-blur-md bg-background/70 border-amber-400/40 text-amber-200 text-xs px-2 py-0.5"
                    >
                      {activeProject.status}
                    </Badge>
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {activeProject.title}
                </h3>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveProject(null)}
                className="border-white/10 text-slate-200 hover:text-white hover:border-white/30"
              >
                Close
              </Button>
            </div>

            <p className="text-slate-300 leading-7 mt-2">
              {activeProject.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {activeProject.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs px-2 py-1 bg-primary/5 border-primary/20 text-primary"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {activeProject.githubUrl && activeProject.githubUrl !== "#" ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/10 text-slate-200 hover:text-white hover:border-white/30"
                  asChild
                >
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              ) : null}
              {activeProject.liveUrl && activeProject.liveUrl !== "#" ? (
                <Button size="sm" asChild>
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              ) : null}
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
