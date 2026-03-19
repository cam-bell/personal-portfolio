"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type React from "react";
import Link from "next/link";
import { tier1Projects, tier2Projects, type Project } from "@/lib/projects-data";
import * as Dialog from "@radix-ui/react-dialog";
import * as Collapsible from "@radix-ui/react-collapsible";
import {
  SiPython,
  SiReact,
  SiFastapi,
  SiPostgresql,
  SiGooglecloud,
  SiDocker,
  SiTypescript,
  SiHuggingface,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiLangchain,
  SiMlflow,
  SiScikitlearn,
  SiAmazon,
  SiJavascript,
  SiGooglebigquery,
  SiGithubactions,
  SiNumpy,
  SiPandas,
  SiRoboflow,
  SiStreamlit,
  SiGraphql,
} from "react-icons/si";

// Technology mapping with icons and brand colors
const getTechDetails = (techName: string) => {
  const techMap: Record<
    string,
    { icon: any; color: string; category: string }
  > = {
    // Languages
    Python: { icon: SiPython as any, color: "#3776ab", category: "Language" },
    TypeScript: {
      icon: SiTypescript as any,
      color: "#3178c6",
      category: "Language",
    },
    JavaScript: {
      icon: SiJavascript as any,
      color: "#f7df1e",
      category: "Language",
    },

    // Backend / API
    FastAPI: { icon: SiFastapi as any, color: "#009688", category: "Backend" },

    // Frontend
    React: { icon: SiReact as any, color: "#61dafb", category: "Frontend" },
    "Next.js": { icon: SiReact, color: "#FFFFFF", category: "Frontend" },

    // Cloud / Infra
    "Google Cloud": {
      icon: SiGooglecloud as any,
      color: "#4285f4",
      category: "Cloud",
    },
    AWS: { icon: SiAmazon as any, color: "#ff9900", category: "Cloud" },
    Docker: { icon: SiDocker as any, color: "#2496ed", category: "DevOps" },
    BigQuery: {
      icon: SiGooglebigquery as any,
      color: "#4285f4",
      category: "Database",
    },
    PostgreSQL: {
      icon: SiPostgresql as any,
      color: "#336791",
      category: "Database",
    },
    TimescaleDB: { icon: SiPostgresql, color: "#336791", category: "Database" },
    "GitHub Actions": {
      icon: SiGithubactions as any,
      color: "#2088ff",
      category: "DevOps",
    },

    // Ai / ML
    HuggingFace: {
      icon: SiHuggingface as any,
      color: "#ff9a00",
      category: "AI/ML",
    },
    PyTorch: { icon: SiPytorch as any, color: "#ee4c2c", category: "AI/ML" },
    TensorFlow: {
      icon: SiTensorflow as any,
      color: "#ff6f00",
      category: "AI/ML",
    },
    "scikit-learn": {
      icon: SiScikitlearn as any,
      color: "#f7931e",
      category: "AI/ML",
    },
    Pandas: { icon: SiPandas as any, color: "#FFD43B", category: "Data" },
    NumPy: { icon: SiNumpy as any, color: "#013243", category: "Data" },
    Plotly: { icon: SiPandas, color: "#2D2D6B", category: "Data Viz" },
    "Vector Search": { icon: null, color: "#6366f1", category: "AI/ML" },
    FAISS: {
      icon: null, // custom import/Iconify SVG
      color: "#4A2FBD", // deep purple to convey vector search + research
      category: "AI/ML",
    },
    Streamlit: {
      icon: SiStreamlit as any, // from react-icons / simple-icons
      color: "#FF4B4B", // official Streamlit brand colour:contentReference[oaicite:0]{index=0}
      category: "AI/ML",
    },

    // Agent / LLM Infrastructure
    "OpenAI Agents SDK": { icon: null, color: "#10a37f", category: "AI/ML" },
    LangChain: {
      icon: SiLangchain as any,
      color: "#1c3c3c",
      category: "AI/ML",
    },
    LangGraph: {
      icon: SiGraphql as any, // use graph/network icon (e.g., react-icons/si SiGraph or FaProjectDiagram)
      color: "#0A66C2", // blueish to match “graph / orchestration” semantics
      category: "AI/ML",
    },
    DeepSeek: { icon: null, color: "#FF6B6B", category: "AI/ML" },
    Gemini: { icon: null, color: "#4285F4", category: "AI/ML" },
    "Gemini Pro": { icon: null, color: "#4285f4", category: "AI/ML" },
    Groq: { icon: null, color: "#2088FF", category: "AI/ML" },
    Serper: { icon: null, color: "#09A3D5", category: "AI/ML" },

    // ML Orchestration / Patterns
    MCP: { icon: null, color: "#7F3FBF", category: "AI/ML" },
    Gradio: { icon: null, color: "#ff6b6b", category: "AI/ML" },
    asyncio: { icon: null, color: "#3776ab", category: "Language" },

    // NLP
    spaCy: { icon: null, color: "#09a3d5", category: "NLP" },
    KeyBERT: { icon: null, color: "#8b5cf6", category: "NLP" },
    BERT: { icon: null, color: "#8b5cf6", category: "NLP" },
    RoBERTa: { icon: null, color: "#8b5cf6", category: "NLP" },
    VADER: { icon: null, color: "#f59e0b", category: "NLP" },
    LaBSE: { icon: null, color: "#3b82f6", category: "NLP" },

    // Vision
    YOLOv8: { icon: SiOpencv as any, color: "#ff6b6b", category: "AI/ML" },
    YOLOv11: { icon: SiOpencv as any, color: "#ff6b6b", category: "AI/ML" },
    OpenCV: { icon: SiOpencv as any, color: "#5c3ee8", category: "AI/ML" },
    Roboflow: { icon: SiRoboflow as any, color: "#ff3d00", category: "AI/ML" },
    "Object Detection": { icon: null, color: "#ef4444", category: "AI/ML" },
    GroundingDINO: { icon: null, color: "#f97316", category: "AI/ML" },

    // MLOps
    MLflow: { icon: SiMlflow as any, color: "#0194e2", category: "MLOps" },
    Hydra: { icon: null, color: "#8b5cf6", category: "MLOps" },
    "W&B": { icon: null, color: "#ffbe00", category: "MLOps" },

    // Sales & APIs
    SendGrid: { icon: null, color: "#0088CC", category: "API" },
    Pydantic: { icon: null, color: "#4C51BF", category: "API" },

    // Testing
    Pytest: { icon: null, color: "#0ea5e9", category: "Testing" },
    Playwright: {
      icon: null,
      color: "#F23030", // official Playwright brand red:contentReference[oaicite:1]{index=1}
      category: "Testing",
    },
  };

  return (
    techMap[techName] || { icon: null, color: "#64748b", category: "Other" }
  );
};

// Enhanced Tech Badge Component with icons and colors
const EnhancedTechBadge = ({ tech }: { tech: string }) => {
  const techDetails = getTechDetails(tech);
  const TechIcon = techDetails.icon;
  const categoryColor = getTechCategoryColor(tech);
  const hasIcon = TechIcon !== null;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="inline-block"
    >
      <Badge
        variant="outline"
        className={`
          text-xs font-medium px-2.5 py-1
          border-opacity-30 hover:border-opacity-60
          transition-all duration-200 cursor-default
          ${hasIcon ? "pl-2 pr-2.5" : ""}
          ${categoryColor || ""}
        `}
        style={{
          borderColor: `${techDetails.color}40`,
          color: techDetails.color,
          backgroundColor: `${techDetails.color}08`,
        }}
      >
        <div className="flex items-center gap-1.5">
          {hasIcon && (
            <TechIcon
              className="w-3.5 h-3.5 flex-shrink-0"
              style={{ color: techDetails.color }}
            />
          )}
          <span>{tech}</span>
        </div>
      </Badge>
    </motion.div>
  );
};

// Category-based color classes for technologies without icons
const getTechCategoryColor = (techName: string): string => {
  const techDetails = getTechDetails(techName);
  const { category, color } = techDetails;

  // If we have a brand color, use it with opacity
  if (color && color !== "#64748b") {
    return "";
  }

  // Otherwise use category-based colors
  const categoryColors: Record<string, string> = {
    Frontend: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    Backend: "text-teal-400 border-teal-400/30 bg-teal-400/10",
    Language: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    "AI/ML": "text-purple-400 border-purple-400/30 bg-purple-400/10",
    Database: "text-indigo-400 border-indigo-400/30 bg-indigo-400/10",
    Cloud: "text-sky-400 border-sky-400/30 bg-sky-400/10",
    DevOps: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    MLOps: "text-pink-400 border-pink-400/30 bg-pink-400/10",
    NLP: "text-violet-400 border-violet-400/30 bg-violet-400/10",
    Data: "text-orange-400 border-orange-400/30 bg-orange-400/10",
    Testing: "text-lime-400 border-lime-400/30 bg-lime-400/10",
  };

  return (
    categoryColors[category] ||
    "text-slate-300 border-slate-600/30 bg-slate-800/30"
  );
};

const ARCHITECTURE_PREVIEW_LIMIT = 170;

const getHighlightGridClassName = (count: number): string => {
  if (count <= 1) {
    return "grid grid-cols-1 gap-3";
  }

  if (count === 2) {
    return "grid grid-cols-1 sm:grid-cols-2 gap-3";
  }

  return "grid grid-cols-1 md:grid-cols-2 gap-3";
};

const ProjectCard = ({
  project,
  index,
  variant,
  isHovered,
  isTechStackExpanded,
  onHoverStart,
  onHoverEnd,
  onToggleTechStack,
  onOpenDetails,
}: {
  project: Project;
  index: number;
  variant: "primary" | "secondary";
  isHovered: boolean;
  isTechStackExpanded: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onToggleTechStack: (e: React.MouseEvent) => void;
  onOpenDetails: (trigger: HTMLButtonElement | null) => void;
}) => {
  const isSecondary = variant === "secondary";
  const visibleTechCount = 4;
  const primaryTech = project.techStack.slice(0, visibleTechCount);
  const additionalTech = project.techStack.slice(visibleTechCount);

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className={`group cursor-pointer h-full flex ${
        isSecondary ? "md:scale-[0.98]" : ""
      }`}
    >
      <div className="relative h-full flex-1">
        {isHovered && (
          <motion.div
            className={`absolute inset-0 rounded-lg bg-gradient-to-r from-primary/18 via-accent/18 to-primary/18 pointer-events-none ${
              isSecondary ? "opacity-35" : "opacity-45"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.45, 0.28, 0.45] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ zIndex: 0 }}
          />
        )}
        <Card
          className={`
            h-full flex flex-col overflow-hidden relative z-[1]
            backdrop-blur-xl glass-card border border-white/10 shadow-glass
            transition-all duration-500 ease-out
            ${
              isHovered
                ? isSecondary
                  ? "shadow-xl shadow-primary/10 scale-[1.02] border-primary/30"
                  : "shadow-xl shadow-primary/15 scale-[1.015] border-primary/35"
                : "hover:shadow-xl hover:border-slate-600/50"
            }
          `}
        >
          <div
            className={`relative ${
              isSecondary ? "aspect-[16/7]" : "aspect-[16/9]"
            } bg-slate-900/60 overflow-hidden rounded-lg`}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              sizes={
                isSecondary
                  ? "(min-width: 1024px) 33vw, 100vw"
                  : "(min-width: 1024px) 50vw, 100vw"
              }
              loading={isSecondary ? "lazy" : "eager"}
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
              {project.status && (
                <Badge
                  variant="outline"
                  className="backdrop-blur-md bg-background/70 border-amber-400/40 text-amber-200 text-xs px-2 py-0.5"
                >
                  {project.status}
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
            </div>

            <motion.div
              className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white text-sm font-medium flex items-center gap-2 drop-shadow-lg">
                  <ExternalLink className="h-4 w-4" />
                  View Project Details
                </div>
              </div>
            </motion.div>
          </div>

          <CardHeader
            className={`space-y-2 ${isSecondary ? "pb-2 pt-2" : "pb-2 pt-3"} flex-shrink-0`}
          >
            <CardTitle
              className={`leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2 ${
                !isSecondary ? "text-left" : ""
              } ${isSecondary ? "text-base" : "text-[1.05rem]"}`}
            >
              {project.title}
            </CardTitle>

            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {primaryTech.map((tech) => (
                  <EnhancedTechBadge key={tech} tech={tech} />
                ))}
              </div>

              {additionalTech.length > 0 && (
                <div className="space-y-2">
                  <motion.button
                    onClick={onToggleTechStack}
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-primary transition-colors duration-200"
                  >
                    {isTechStackExpanded ? (
                      <>
                        <ChevronUp className="h-3 w-3" />
                        Show less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-3 w-3" />+
                        {additionalTech.length} more technologies
                      </>
                    )}
                  </motion.button>

                  {isTechStackExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-wrap gap-2 pt-1"
                    >
                      {additionalTech.map((tech) => (
                        <EnhancedTechBadge key={tech} tech={tech} />
                      ))}
                    </motion.div>
                  )}
                </div>
              )}
            </div>

            <motion.div layout>
              <CardDescription
                className="text-slate-300 leading-6 text-sm line-clamp-2"
              >
                {project.preview ?? project.description}
              </CardDescription>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenDetails(e.currentTarget);
                }}
                className="mt-2 text-xs text-primary/80 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-sm"
              >
                View details
              </button>
            </motion.div>
          </CardHeader>

          <div className="flex-grow" />

          <CardContent
            className={`space-y-3 flex-shrink-0 ${isSecondary ? "pt-0" : "pt-0 pb-5"}`}
          >
            <div className="flex gap-3 pt-1.5">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={
                  project.liveUrl && project.liveUrl !== "#"
                    ? "flex-1"
                    : "w-full"
                }
              >
                <Button
                  variant="outline"
                  size="sm"
                  className={`
                    w-full transition-all duration-300
                    ${
                      isHovered
                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                        : "hover:bg-primary/10 hover:border-primary/50"
                    }
                  `}
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </motion.div>
              {project.liveUrl && project.liveUrl !== "#" && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button
                    size="sm"
                    className="w-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </motion.div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

const allProjects = [...tier1Projects, ...tier2Projects];

const featuredProjectTitles = [
  "BHSI Risk Classification System",
  "Deep Research Workflow",
  "Healthcare Readmission Risk MLOps Pipeline",
  "LangGraph Autonomous Task Agent (Sidekick)",
];

const featuredProjects = featuredProjectTitles
  .map((title) => allProjects.find((project) => project.title === title))
  .filter((project): project is Project => Boolean(project));

const featuredLabels = [
  "Agent systems",
  "Applied ML",
  "Production engineering",
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [expandedTechStack, setExpandedTechStack] = useState<string | null>(
    null,
  );
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lastTrigger, setLastTrigger] = useState<HTMLButtonElement | null>(
    null,
  );
  const [isArchitectureExpanded, setIsArchitectureExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const modalHighlights = useMemo(() => {
    if (!activeProject?.highlights) {
      return [];
    }

    const metrics = activeProject.highlights.metrics?.filter(Boolean) ?? [];
    const items = [
      {
        id: "problem",
        label: "Problem",
        value: activeProject.highlights.problem,
      },
      {
        id: "solution",
        label: "Solution",
        value: activeProject.highlights.solution,
      },
      {
        id: "architecture",
        label: "Architecture",
        value: activeProject.highlights.architecture,
      },
      {
        id: "metrics",
        label: "Metrics / Results",
        metrics,
      },
    ];

    return items.filter((item) => {
      if (item.id === "metrics") {
        return (item.metrics?.length ?? 0) > 0;
      }

      return Boolean(item.value?.trim());
    });
  }, [activeProject]);

  const closeDetails = () => {
    setActiveProject(null);
  };

  const openDetails = (project: Project, trigger: HTMLButtonElement | null) => {
    setLastTrigger(trigger);
    setActiveProject(project);
  };

  useEffect(() => {
    setIsArchitectureExpanded(false);
  }, [activeProject?.title]);

  return (
    <section
      id="projects"
      className="py-14 scroll-mt-24 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950 relative overflow-hidden sm:scroll-mt-28"
    >
      {/* Parallax background layers */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-aurora opacity-70 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        initial={{ y: 0 }}
        whileInView={{ y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        initial={{ y: 0 }}
        whileInView={{ y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 overflow-visible"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary mb-4">
            Selected Work
          </div>
          <h2 className="max-w-4xl text-3xl font-semibold text-white md:text-4xl leading-tight">
            AI systems shipped with product and engineering discipline
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
            Four projects that best show agent orchestration, applied ML, and
            production-oriented decision making. The full archive lives on the
            dedicated projects page.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {featuredLabels.map((label) => (
              <Badge
                key={label}
                variant="outline"
                className="border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-slate-300"
              >
                {label}
              </Badge>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {featuredProjects.map((project, index) => {
            const isHovered = hoveredProject === project.title;
            const isTechStackExpanded = expandedTechStack === project.title;

            return (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                variant="primary"
                isHovered={isHovered}
                isTechStackExpanded={isTechStackExpanded}
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
                onToggleTechStack={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  setExpandedTechStack(isTechStackExpanded ? null : project.title);
                }}
                onOpenDetails={(trigger) => openDetails(project, trigger)}
              />
            );
          })}
        </div>

        {/* Full Archive CTA */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 shadow-glass md:flex-row md:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
              Full archive
            </p>
            <p className="mt-1 text-base font-semibold text-white">
              Explore all projects, filters, and full write-ups on the
              dedicated page.
            </p>
          </div>
          <Button size="sm" className="group" asChild>
            <Link href="/projects">
              View all projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      <Dialog.Root
        open={Boolean(activeProject)}
        onOpenChange={(open) => {
          if (!open) {
            closeDetails();
          }
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm" />
          {activeProject ? (
            <Dialog.Content
              className="fixed inset-0 z-50 grid place-items-center p-4 focus:outline-none"
              onCloseAutoFocus={(event) => {
                if (lastTrigger) {
                  event.preventDefault();
                  lastTrigger.focus();
                }
              }}
            >
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-4xl max-h-[85vh] overflow-y-auto glass-card border border-white/10 shadow-glass rounded-2xl p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
                      {activeProject.status && (
                        <Badge
                          variant="outline"
                          className="backdrop-blur-md bg-background/70 border-amber-400/40 text-amber-200 text-xs px-2 py-0.5"
                        >
                          {activeProject.status}
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
                    </div>
                    <Dialog.Title className="text-2xl font-semibold text-white mb-2">
                      {activeProject.title}
                    </Dialog.Title>
                  </div>
                  <Dialog.Close asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/10 text-slate-200 hover:text-white hover:border-white/30"
                    >
                      Close
                    </Button>
                  </Dialog.Close>
                </div>

                <Dialog.Description className="text-slate-300 leading-7 mt-2">
                  {activeProject.description}
                </Dialog.Description>

                {modalHighlights.length > 0 ? (
                  <section className="mt-6 space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                      Key Highlights
                    </h4>
                    <div className={getHighlightGridClassName(modalHighlights.length)}>
                      {modalHighlights.map((item) => (
                        <article
                          key={item.id}
                          className="rounded-xl border border-white/10 bg-white/[0.03] p-4 min-h-[132px]"
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/90 mb-2">
                            {item.label}
                          </p>
                          {item.id === "metrics" ? (
                            <ul className="space-y-1.5 text-sm text-slate-200 leading-6">
                              {item.metrics?.map((metric) => (
                                <li key={metric} className="flex items-start gap-2">
                                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80" />
                                  <span>{metric}</span>
                                </li>
                              ))}
                            </ul>
                          ) : item.id === "architecture" &&
                            item.value &&
                            item.value.length > ARCHITECTURE_PREVIEW_LIMIT ? (
                            <Collapsible.Root
                              open={isArchitectureExpanded}
                              onOpenChange={setIsArchitectureExpanded}
                            >
                              <p className="text-sm text-slate-200 leading-6">
                                {isArchitectureExpanded
                                  ? item.value
                                  : `${item.value.slice(0, ARCHITECTURE_PREVIEW_LIMIT).trimEnd()}...`}
                              </p>
                              <Collapsible.Trigger asChild>
                                <button
                                  type="button"
                                  className="mt-2 text-xs text-primary/80 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                                >
                                  {isArchitectureExpanded ? "Show less" : "Show more"}
                                </button>
                              </Collapsible.Trigger>
                            </Collapsible.Root>
                          ) : (
                            <p className="text-sm text-slate-200 leading-6">{item.value}</p>
                          )}
                        </article>
                      ))}
                    </div>
                  </section>
                ) : null}

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
            </Dialog.Content>
          ) : null}
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
