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
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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

// Domain color mapping for category badges
const getDomainColor = (domain: string) => {
  const domainColors: Record<string, string> = {
    Analytics: "bg-blue-500/20 border-blue-500/40 text-blue-400",
    Healthcare: "bg-green-500/20 border-green-500/40 text-green-400",
    Business: "bg-purple-500/20 border-purple-500/40 text-purple-400",
    CV: "bg-amber-500/20 border-amber-500/40 text-amber-400",
    NLP: "bg-violet-500/20 border-violet-500/40 text-violet-400",
  };
  return (
    domainColors[domain] || "bg-slate-500/20 border-slate-500/40 text-slate-400"
  );
};

export function AdditionalProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState(
    null as (typeof courseworkProjects)[number] | null,
  );
  const visibleProjects = showAll
    ? courseworkProjects
    : courseworkProjects.slice(0, 6);

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
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-7">
              A curated collection of smaller projects, labs, and coursework
              showcasing
              <span className="text-primary font-semibold">
                {" "}
                breadth of experimentation, fundamentals and statistical
                reasoning
              </span>{" "}
              across AI/ML and data science domains.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
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
                className="group flex"
              >
                <Card className="h-full glass-card backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-500 flex flex-col relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/10">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  <div className="absolute inset-[1px] rounded-lg bg-slate-900/50 backdrop-blur-sm" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Header with Pattern Background */}
                    <div className="relative h-20 overflow-hidden">
                      {/* Pattern Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 opacity-50" />
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                          backgroundSize: "24px 24px",
                        }}
                      />

                      {/* Domain Category Badge */}
                      {project.domain && (
                        <div className="absolute top-2 right-2 z-20">
                          <Badge
                            variant="outline"
                            className={`text-xs px-2 py-0.5 backdrop-blur-md border ${getDomainColor(
                              project.domain,
                            )}`}
                          >
                            {project.domain}
                          </Badge>
                        </div>
                      )}

                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="p-3 rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-sm"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ProjectIcon className="h-8 w-8 text-primary" />
                        </motion.div>
                      </div>
                    </div>

                    <CardHeader className="pb-3 pt-4 flex-shrink-0">
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
                        className="mt-2 text-xs text-primary/80 hover:text-primary transition-colors"
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

        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            onClick={() => setShowAll((prev) => !prev)}
            className="border-white/10 text-slate-200 hover:text-white hover:border-white/30"
          >
            {showAll ? "Show fewer experiments" : "Browse all experiments"}
          </Button>
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
                  {activeProject.domain && (
                    <Badge
                      variant="outline"
                      className={`text-xs px-2 py-0.5 backdrop-blur-md border ${getDomainColor(
                        activeProject.domain,
                      )}`}
                    >
                      {activeProject.domain}
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
