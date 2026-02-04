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
  ExternalLink,
  Zap,
  Brain,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type React from "react";
import Link from "next/link";
import { tier1Projects, tier2Projects } from "@/lib/projects-data";
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
} from "react-icons/si";

// Technology mapping with icons and brand colors
const getTechDetails = (techName: string) => {
  const techMap: Record<
    string,
    { icon: any; color: string; category: string }
  > = {
    React: { icon: SiReact as any, color: "#61dafb", category: "Frontend" },
    Python: { icon: SiPython as any, color: "#3776ab", category: "Language" },
    FastAPI: { icon: SiFastapi as any, color: "#009688", category: "Backend" },
    PostgreSQL: {
      icon: SiPostgresql as any,
      color: "#336791",
      category: "Database",
    },
    "Google Cloud": {
      icon: SiGooglecloud as any,
      color: "#4285f4",
      category: "Cloud",
    },
    Docker: { icon: SiDocker as any, color: "#2496ed", category: "DevOps" },
    TypeScript: {
      icon: SiTypescript as any,
      color: "#3178c6",
      category: "Language",
    },
    YOLOv8: { icon: SiOpencv as any, color: "#ff6b6b", category: "AI/ML" },
    YOLOv11: { icon: SiOpencv as any, color: "#ff6b6b", category: "AI/ML" },
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
    OpenCV: { icon: SiOpencv as any, color: "#5c3ee8", category: "AI/ML" },
    Roboflow: { icon: SiRoboflow as any, color: "#ff3d00", category: "AI/ML" },
    LangChain: {
      icon: SiLangchain as any,
      color: "#1c3c3c",
      category: "AI/ML",
    },
    MLflow: { icon: SiMlflow as any, color: "#0194e2", category: "MLOps" },
    "scikit-learn": {
      icon: SiScikitlearn as any,
      color: "#f7931e",
      category: "AI/ML",
    },
    AWS: { icon: SiAmazon as any, color: "#ff9900", category: "Cloud" },
    JavaScript: {
      icon: SiJavascript as any,
      color: "#f7df1e",
      category: "Language",
    },
    BigQuery: {
      icon: SiGooglebigquery as any,
      color: "#4285f4",
      category: "Database",
    },
    "GitHub Actions": {
      icon: SiGithubactions as any,
      color: "#2088ff",
      category: "DevOps",
    },
    "Gemini Pro": { icon: null, color: "#4285f4", category: "AI/ML" },
    "Vector Search": { icon: null, color: "#6366f1", category: "AI/ML" },
    "Object Detection": { icon: null, color: "#ef4444", category: "AI/ML" },
    spaCy: { icon: null, color: "#09a3d5", category: "NLP" },
    KeyBERT: { icon: null, color: "#8b5cf6", category: "NLP" },
    BERT: { icon: null, color: "#8b5cf6", category: "NLP" },
    RoBERTa: { icon: null, color: "#8b5cf6", category: "NLP" },
    VADER: { icon: null, color: "#f59e0b", category: "NLP" },
    LaBSE: { icon: null, color: "#3b82f6", category: "NLP" },
    GroundingDINO: { icon: null, color: "#f97316", category: "AI/ML" },
    Pytest: { icon: null, color: "#0ea5e9", category: "Testing" },
    Hydra: { icon: null, color: "#8b5cf6", category: "MLOps" },
    "W&B": { icon: null, color: "#ffbe00", category: "MLOps" },
    Pandas: { icon: SiPandas as any, color: "#150458", category: "Data" },
    NumPy: { icon: SiNumpy as any, color: "#013243", category: "Data" },
    Gradio: { icon: null, color: "#ff6b6b", category: "AI/ML" },
    "OpenAI Agents SDK": { icon: null, color: "#10a37f", category: "AI/ML" },
    asyncio: { icon: null, color: "#3776ab", category: "Language" },
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
        style={
          hasIcon
            ? {
                borderColor: `${techDetails.color}40`,
                color: techDetails.color,
                backgroundColor: `${techDetails.color}08`,
              }
            : undefined
        }
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

const ProjectCard = ({
  project,
  index,
  variant,
  isHovered,
  isTechStackExpanded,
  onHoverStart,
  onHoverEnd,
  onToggleTechStack,
}: {
  project: (typeof tier1Projects)[number];
  index: number;
  variant: "primary" | "secondary";
  isHovered: boolean;
  isTechStackExpanded: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onToggleTechStack: (e: React.MouseEvent) => void;
}) => {
  const primaryTech = project.techStack.slice(0, 5);
  const additionalTech = project.techStack.slice(5);
  const isSecondary = variant === "secondary";

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
            className={`absolute -inset-[2px] rounded-lg bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-md opacity-60 pointer-events-none ${
              isSecondary ? "opacity-40" : ""
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.4, 0.6] }}
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
                  : "shadow-2xl shadow-primary/20 scale-[1.05] border-primary/40"
                : "hover:shadow-xl hover:border-slate-600/50"
            }
          `}
        >
          <div
            className={`relative ${
              isSecondary ? "aspect-[16/9]" : "aspect-[16/10]"
            } bg-slate-900/60 overflow-hidden rounded-lg`}
          >
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
            className={`space-y-2.5 ${isSecondary ? "pb-3 pt-3" : "pb-4 pt-4"} flex-shrink-0`}
          >
            <CardTitle
              className={`leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2 ${
                isSecondary ? "text-lg" : ""
              }`}
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

            <CardDescription className="text-slate-300 leading-6 text-sm line-clamp-3">
              {project.description}
            </CardDescription>
          </CardHeader>

          <div className="flex-grow" />

          <CardContent className={`space-y-4 flex-shrink-0 ${isSecondary ? "pt-0" : ""}`}>
            <div className="flex gap-3 pt-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={
                  project.liveUrl && project.liveUrl !== "#" ? "flex-1" : "w-full"
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

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [expandedTechStack, setExpandedTechStack] = useState<string | null>(
    null
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950 relative overflow-hidden"
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
          className="text-center mb-16 overflow-visible"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6 leading-normal pb-1">
            Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-7">
            A showcase of cutting-edge projects spanning machine learning,
            computer vision, NLP, and full-stack development. Each project
            demonstrates modern AI engineering practices and production-ready
            solutions.
          </p>
        </motion.div>

        <div className="space-y-10">
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-aurora mb-3">
              Tier 1 — Core Identity
            </h3>
            <p className="text-slate-300 max-w-3xl">
              LLM-powered systems and applied ML platforms with orchestration,
              reliability, and ML-in-the-loop workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {tier1Projects.map((project, index) => {
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
                    setExpandedTechStack(
                      isTechStackExpanded ? null : project.title
                    );
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-14 space-y-8">
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-aurora mb-2">
              Tier 2 — Supporting Depth
            </h3>
            <p className="text-slate-400 max-w-3xl">
              Strong supporting projects that add breadth without diluting the
              core systems narrative.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {tier2Projects.map((project, index) => {
              const isHovered = hoveredProject === project.title;
              const isTechStackExpanded = expandedTechStack === project.title;

              return (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  variant="secondary"
                  isHovered={isHovered}
                  isTechStackExpanded={isTechStackExpanded}
                  onHoverStart={() => setHoveredProject(project.title)}
                  onHoverEnd={() => setHoveredProject(null)}
                  onToggleTechStack={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    setExpandedTechStack(
                      isTechStackExpanded ? null : project.title
                    );
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-300 mb-6">
            Interested in collaborating or learning more about these projects?
          </p>
          <Button size="lg" className="group" asChild>
            <Link href="/projects">
              <Brain className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
