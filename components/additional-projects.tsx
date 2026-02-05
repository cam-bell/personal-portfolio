"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  FileText,
  ExternalLink,
  Sparkles,
  BarChart3,
  Brain,
  TrendingUp,
  Car,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import useHorizontalScroll from "@/lib/useHorizontalScroll";
import { courseworkProjects } from "@/lib/projects-data";

// Icon mapping function based on project keywords
const getProjectIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("regression") || lowerTitle.includes("prediction")) {
    return TrendingUp;
  }
  if (
    lowerTitle.includes("classifier") ||
    lowerTitle.includes("classification") ||
    lowerTitle.includes("detection")
  ) {
    return Brain;
  }
  if (lowerTitle.includes("churn")) {
    return Users;
  }
  if (lowerTitle.includes("car")) {
    return Car;
  }
  // Default for data analysis/visualization projects
  return BarChart3;
};

// Primary badge color mapping (what it teaches)
const getPrimaryBadgeColor = (badge: string) => {
  const primaryColors: Record<string, string> = {
    Classification: "bg-cyan-500/20 border-cyan-500/40 text-cyan-400",
    Regression: "bg-orange-500/20 border-orange-500/40 text-orange-400",
    "Time-Series": "bg-pink-500/20 border-pink-500/40 text-pink-400",
    NLP: "bg-violet-500/20 border-violet-500/40 text-violet-400",
    "Computer Vision": "bg-amber-500/20 border-amber-500/40 text-amber-400",
  };
  return (
    primaryColors[badge] || "bg-slate-500/20 border-slate-500/40 text-slate-400"
  );
};

// Secondary badge color mapping (domain)
const getSecondaryBadgeColor = (domain: string) => {
  const domainColors: Record<string, string> = {
    Healthcare: "bg-green-500/20 border-green-500/40 text-green-400",
    Finance: "bg-emerald-500/20 border-emerald-500/40 text-emerald-400",
    Business: "bg-purple-500/20 border-purple-500/40 text-purple-400",
    Energy: "bg-yellow-500/20 border-yellow-500/40 text-yellow-400",
    Analytics: "bg-blue-500/20 border-blue-500/40 text-blue-400",
    "Data Ethics": "bg-indigo-500/20 border-indigo-500/40 text-indigo-400",
  };
  return (
    domainColors[domain] || "bg-slate-500/20 border-slate-500/40 text-slate-400"
  );
};

export function AdditionalProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState(
    null as (typeof courseworkProjects)[number] | null,
  );
  const visibleProjects = courseworkProjects;

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const { canPrev, canNext, scrollNext, scrollPrev, onKeyDown } =
    useHorizontalScroll(scrollContainerRef);

  return (
    <section
      ref={ref}
      id="additional-projects"
      className="py-14 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-aurora-soft opacity-70 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Additional Projects
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-aurora mb-6">
              Applied Machine Learning Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Selected applied ML case studies demonstrating
              <span className="text-primary font-semibold">
                {" "}
                classification, regression, evaluation strategy,
              </span>{" "}
              and
              <span className="text-primary font-semibold">
                {" "}
                modelling trade-offs
              </span>{" "}
              across business and healthcare domains.
            </p>
          </div>
        </motion.div>
        {/* <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-7">
              A curated collection of smaller projects, labs, and coursework
              showcasing */}

        <div className="relative">
          <div
            id="projects-carousel"
            ref={scrollContainerRef}
            role="list"
            aria-label="Additional projects carousel"
            onKeyDown={onKeyDown}
            className="overflow-x-auto flex gap-6 py-2 snap-x snap-mandatory scroll-smooth -mx-4 px-4"
          >
            {visibleProjects.map((project, index) => {
              const ProjectIcon = getProjectIcon(project.title);
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 40, scale: 0.95 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  tabIndex={0}
                  onFocus={(e) =>
                    (e.currentTarget as HTMLElement).scrollIntoView({
                      behavior: "smooth",
                      inline: "center",
                      block: "nearest",
                    })
                  }
                  role="listitem"
                  className="group flex flex-none w-72 sm:w-80 md:w-96 snap-start"
                >
                  <Card className="h-full glass-card backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-500 flex flex-col relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/10">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    <div className="absolute inset-[1px] rounded-lg bg-slate-900/50 backdrop-blur-sm" />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon Header with Pattern Background */}
                      <div className="relative h-28 overflow-hidden">
                        {/* Pattern Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 opacity-50" />
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                            backgroundSize: "24px 24px",
                          }}
                        />

                        {/* Icon */}
                        <div className="absolute inset-0 flex flex-col items-center justify-start pt-2">
                          <motion.div
                            className="p-3 rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-sm"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ProjectIcon className="h-8 w-8 text-primary" />
                          </motion.div>

                          {/* Primary and Secondary Badges - Below Icon */}
                          <div className="flex flex-wrap gap-2 justify-center mt-3">
                            {project.primaryBadge && (
                              <Badge
                                variant="outline"
                                className={`text-xs px-2 py-0.5 backdrop-blur-md border ${getPrimaryBadgeColor(
                                  project.primaryBadge,
                                )}`}
                              >
                                {project.primaryBadge}
                              </Badge>
                            )}
                            {project.secondaryBadge && (
                              <Badge
                                variant="outline"
                                className={`text-xs px-2 py-0.5 backdrop-blur-md border ${getSecondaryBadgeColor(
                                  project.secondaryBadge,
                                )}`}
                              >
                                {project.secondaryBadge}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      <CardHeader className="pb-3 pt-4 flex-shrink-0 flex flex-col items-center text-center">
                        <CardTitle className="text-base leading-tight font-semibold group-hover:text-primary transition-colors duration-300 mb-2 line-clamp-2">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-6 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 line-clamp-2">
                          {project.preview ?? project.description}
                        </CardDescription>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveProject(project);
                          }}
                          className="mt-2 text-xs text-primary/80 hover:text-primary transition-colors mx-auto"
                        >
                          View details
                        </button>
                      </CardHeader>

                      <CardContent className="pt-0 flex flex-col flex-grow">
                        {/* Tech Stack Badges - Bottom aligned, just above buttons */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.techStack?.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={
                                isInView
                                  ? { opacity: 1, scale: 1 }
                                  : { opacity: 0, scale: 0.8 }
                              }
                              transition={{
                                duration: 0.3,
                                delay: index * 0.1 + techIndex * 0.05 + 0.3,
                              }}
                            >
                              <Badge
                                variant="outline"
                                className="text-xs px-3 py-1.5 bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group-hover:scale-105"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>

                        {/* Action Buttons - Always at bottom */}
                        <div className="flex gap-2">
                          {project.githubUrl && project.githubUrl !== "#" ? (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 text-[11px] bg-transparent hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 group-hover:scale-105"
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
                                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

                          {project.colabUrl && project.colabUrl !== "#" ? (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 text-[11px] bg-transparent hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300 group-hover:scale-105"
                              asChild
                            >
                              <a
                                href={project.colabUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                              >
                                <FileText className="h-3 w-3" />
                                Colab
                                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </a>
                            </Button>
                          ) : project.colabUrl === "#" ? (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 text-[11px] bg-muted/50 border-muted text-muted-foreground cursor-not-allowed"
                              disabled
                            >
                              <FileText className="mr-2 h-3 w-3" />
                              Colab
                            </Button>
                          ) : null}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Prev / Next controls */}
          <button
            type="button"
            onClick={() => scrollPrev()}
            disabled={!canPrev}
            aria-controls="projects-carousel"
            aria-label="Previous projects"
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-800/60 border border-white/10 text-slate-200 hover:bg-slate-800/80 transition ${
              !canPrev ? "opacity-40 pointer-events-none" : ""
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => scrollNext()}
            disabled={!canNext}
            aria-controls="projects-carousel"
            aria-label="Next projects"
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-800/60 border border-white/10 text-slate-200 hover:bg-slate-800/80 transition ${
              !canNext ? "opacity-40 pointer-events-none" : ""
            }`}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

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
            className="relative w-full max-w-2xl glass-card border border-white/10 shadow-glass rounded-2xl p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {activeProject.primaryBadge && (
                    <Badge
                      variant="outline"
                      className={`text-xs px-2 py-0.5 backdrop-blur-md border ${getPrimaryBadgeColor(
                        activeProject.primaryBadge,
                      )}`}
                    >
                      {activeProject.primaryBadge}
                    </Badge>
                  )}
                  {activeProject.secondaryBadge && (
                    <Badge
                      variant="outline"
                      className={`text-xs px-2 py-0.5 backdrop-blur-md border ${getSecondaryBadgeColor(
                        activeProject.secondaryBadge,
                      )}`}
                    >
                      {activeProject.secondaryBadge}
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
              {activeProject.techStack?.map((tech) => (
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
                    Code
                  </a>
                </Button>
              ) : null}
              {activeProject.colabUrl && activeProject.colabUrl !== "#" ? (
                <Button size="sm" asChild>
                  <a
                    href={activeProject.colabUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colab
                  </a>
                </Button>
              ) : null}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
