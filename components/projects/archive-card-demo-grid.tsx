import Link from "next/link";
import Image from "next/image";
import type { CSSProperties, ComponentType } from "react";
import {
  ArrowRight,
  ExternalLink,
  FileText,
  GitBranch,
  Github,
  Layers,
  Zap,
} from "lucide-react";
import {
  SiDocker,
  SiFastapi,
  SiGooglebigquery,
  SiGooglecloud,
  SiHuggingface,
  SiLangchain,
  SiMlflow,
  SiNextdotjs,
  SiOpenai,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPydantic,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiSqlite,
  SiStreamlit,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Project,
  getProjectPrimaryLink,
  isProjectLinkAvailable,
} from "@/lib/projects-data";

type DemoVariant =
  | "minimal"
  | "balanced"
  | "signal-first"
  | "minimal-tight"
  | "minimal-icons"
  | "minimal-short-titles";

const techIconMap: Record<
  string,
  { icon: unknown; color: string; label?: string }
> = {
  Python: { icon: SiPython, color: "#3776AB" },
  FastAPI: { icon: SiFastapi, color: "#00A98F" },
  BigQuery: { icon: SiGooglebigquery, color: "#4285F4" },
  "Google Cloud": { icon: SiGooglecloud, color: "#4285F4", label: "GCP" },
  "Gemini Pro": { icon: SiGooglecloud, color: "#8AB4F8", label: "Gemini" },
  LangChain: { icon: SiLangchain, color: "#2C6262" },
  LangGraph: { icon: GitBranch, color: "#38BDF8", label: "Graph" },
  Pydantic: { icon: SiPydantic, color: "#4C51BF" },
  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  "OpenAI Agents SDK": { icon: SiOpenai, color: "#FFFFFF", label: "OpenAI" },
  asyncio: { icon: Zap, color: "#38BDF8", label: "Async" },
  SQLite: { icon: SiSqlite, color: "#87CEEB" },
  "scikit-learn": { icon: SiScikitlearn, color: "#F7931E", label: "sklearn" },
  TensorFlow: { icon: SiTensorflow, color: "#FF6F00" },
  PyTorch: { icon: SiPytorch, color: "#EE4C2C" },
  OpenCV: { icon: SiOpencv, color: "#5C3EE8" },
  "HuggingFace": { icon: SiHuggingface, color: "#FFB800", label: "HF" },
  "Hugging Face": { icon: SiHuggingface, color: "#FFB800", label: "HF" },
  Streamlit: { icon: SiStreamlit, color: "#FF4B4B" },
  Pandas: { icon: SiPandas, color: "#FFD43B" },
  OpenAI: { icon: SiOpenai, color: "#FFFFFF" },
  MLflow: { icon: SiMlflow, color: "#0194E2" },
};

const getDemoTitle = (variant: DemoVariant) => {
  switch (variant) {
    case "minimal":
      return "Minimal";
    case "balanced":
      return "Balanced";
    case "signal-first":
      return "Recruiter Signal";
    case "minimal-tight":
      return "Minimal Tight";
    case "minimal-icons":
      return "Minimal Icons";
    case "minimal-short-titles":
      return "Minimal Short Titles";
  }
};

const getDemoDescription = (variant: DemoVariant) => {
  switch (variant) {
    case "minimal":
      return "Shortest card. No outcomes block. Strict clamping and a compact action rail.";
    case "balanced":
      return "Keeps one high-signal impact line while preserving a clean, scannable card.";
    case "signal-first":
      return "Emphasizes one recruiter-facing impact signal and ownership before the tech stack.";
    case "minimal-tight":
      return "Same content model as Minimal, but with tighter text clamps and stricter section heights.";
    case "minimal-icons":
      return "Replaces tech pills with a compact icon rail to reduce vertical space and keep cards cleaner.";
    case "minimal-short-titles":
      return "Uses shorter display titles for long project names while keeping the card otherwise minimal.";
  }
};

const getImpactSignal = (project: Project) =>
  project.outcomes?.[0] ?? project.highlights?.metrics?.[0] ?? null;

const getDisplayTitle = (project: Project, variant: DemoVariant) => {
  if (variant !== "minimal-short-titles") {
    return project.title;
  }

  const shortTitles: Record<string, string> = {
    "healthcare-readmission-risk-mlops-pipeline":
      "Readmission Prediction MLOps",
    "used-vehicle-pricing-valuation-model": "Vehicle Pricing Model",
    "langgraph-autonomous-task-agent": "LangGraph Task Agent",
    "bhsi-risk-classification-system": "BHSI Risk Classification",
  };

  return shortTitles[project.slug] ?? project.title;
};

const usesIconTechRail = (variant: DemoVariant) => variant === "minimal-icons";
const usesTightSpacing = (variant: DemoVariant) => variant === "minimal-tight";
const usesMinimalFamily = (variant: DemoVariant) =>
  variant === "minimal" ||
  variant === "minimal-tight" ||
  variant === "minimal-icons" ||
  variant === "minimal-short-titles";

function ProjectImageFallback({ project }: { project: Project }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-primary/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_45%)]" />
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
          <Layers className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
            {project.archiveGroup}
          </p>
          <p className="mt-2 text-lg font-semibold text-white">
            {project.title}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectDemoCard({
  project,
  variant,
}: {
  project: Project;
  variant: DemoVariant;
}) {
  const primaryLink = getProjectPrimaryLink(project);
  const impactSignal = getImpactSignal(project);
  const displayTitle = getDisplayTitle(project, variant);
  const titleBlockClassName = usesTightSpacing(variant)
    ? "min-h-[3.5rem] space-y-1"
    : "min-h-[4rem] space-y-1";
  const summaryClassName = usesTightSpacing(variant)
    ? "min-h-[3.5rem] text-sm leading-6 text-slate-300 line-clamp-2"
    : "min-h-[4.5rem] text-sm leading-6 text-slate-300 line-clamp-3";
  const techBlockClassName = usesTightSpacing(variant)
    ? "flex min-h-[3.25rem] flex-wrap content-start gap-2"
    : "flex min-h-[4.5rem] flex-wrap content-start gap-2";
  const recognizableTech = project.techStack.filter((tech) => techIconMap[tech]);
  const secondaryActions = [
    isProjectLinkAvailable(project.githubUrl)
      ? {
          href: project.githubUrl,
          label: "Code",
          icon: Github,
        }
      : null,
    primaryLink && primaryLink.href !== project.githubUrl
      ? {
          href: primaryLink.href,
          label: primaryLink.label,
          icon: primaryLink.label === "Open Colab" ? FileText : ExternalLink,
        }
      : null,
  ].filter(Boolean) as Array<{
    href: string;
    label: string;
    icon: typeof Github;
  }>;

  return (
    <Card className="glass-card flex h-full flex-col overflow-hidden border border-white/10 shadow-glass backdrop-blur-xl">
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-900/70">
        {project.image && project.image !== "/placeholder.svg" ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <ProjectImageFallback project={project} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="border-white/10 bg-slate-950/80 text-slate-100"
          >
            {project.archiveGroup}
          </Badge>
          <Badge
            variant="outline"
            className="border-white/10 bg-slate-950/70 text-slate-200"
          >
            {project.year}
          </Badge>
        </div>
      </div>

      <CardHeader className="space-y-3">
        <div className="space-y-2">
          <div className="min-h-7">
            {project.primaryBadge ? (
              <Badge
                variant="outline"
                className="h-7 rounded-full border-primary/20 bg-primary/10 px-3 text-[11px] font-medium uppercase tracking-[0.18em] text-primary"
              >
                {project.primaryBadge}
              </Badge>
            ) : null}
          </div>

          <div className={titleBlockClassName}>
            <CardTitle className="line-clamp-2 text-xl leading-tight">
              {displayTitle}
            </CardTitle>
            <CardDescription className="line-clamp-1 text-primary">
              {project.role}
            </CardDescription>
          </div>
        </div>

        <p className={summaryClassName}>
          {project.preview ?? project.homepageSummary}
        </p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col space-y-5">
        {!usesMinimalFamily(variant) && impactSignal ? (
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
            <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
              {variant === "signal-first" ? "Hiring Signal" : "Impact"}
            </p>
            <p className="mt-2 min-h-[3rem] text-sm font-medium leading-6 text-slate-100">
              {impactSignal}
            </p>
          </div>
        ) : null}

        {usesIconTechRail(variant) ? (
          <div className="flex min-h-[3rem] items-center gap-2">
            {(recognizableTech.length ? recognizableTech : project.techStack)
              .slice(0, 3)
              .map((tech) => {
              const techIcon = techIconMap[tech];

              if (!techIcon) {
                return (
                  <div
                    key={tech}
                    className="group relative inline-flex"
                    aria-label={tech}
                  >
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-semibold uppercase text-slate-300">
                      {tech.slice(0, 2)}
                    </div>
                    <div className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-slate-950/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-200 opacity-0 shadow-lg transition-opacity duration-75 group-hover:opacity-100">
                      {tech}
                    </div>
                  </div>
                );
              }

              const Icon = techIcon.icon as ComponentType<{
                className?: string;
                style?: CSSProperties;
              }>;

              return (
                <div
                  key={tech}
                  className="group relative inline-flex"
                  aria-label={tech}
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <Icon className="h-4 w-4" style={{ color: techIcon.color }} />
                  </div>
                  <div className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-slate-950/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-200 opacity-0 shadow-lg transition-opacity duration-75 group-hover:opacity-100">
                    {techIcon.label ?? tech}
                  </div>
                </div>
              );
            })}
            {project.techStack.length > 3 ? (
              <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                +{project.techStack.length - 3}
              </span>
            ) : null}
          </div>
        ) : (
          <div className={techBlockClassName}>
            {project.techStack.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="inline-flex h-8 items-center rounded-full border border-white/10 bg-white/[0.03] px-3 text-[11px] font-medium leading-none whitespace-nowrap text-slate-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}

        <div className="mt-auto space-y-3 pt-2">
          <Button className="h-11 w-full justify-center" asChild>
            <Link href={`/projects/${project.slug}`}>
              Read case study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <div className="min-h-9">
            {secondaryActions.length ? (
              <div className="flex flex-wrap gap-2">
                {secondaryActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <Button
                      key={`${project.slug}-${action.label}`}
                      variant="outline"
                      size="sm"
                      className="h-9 flex-1 justify-center border-white/10 bg-transparent text-slate-200 hover:border-white/30 hover:bg-white/[0.04] hover:text-white"
                      asChild
                    >
                      <a
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="h-4 w-4" />
                        {action.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ArchiveCardDemoGrid({
  projects,
  variant,
}: {
  projects: Project[];
  variant: DemoVariant;
}) {
  return (
    <main className="min-h-screen bg-slate-950 pb-16">
      <section className="relative overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-aurora opacity-70 pointer-events-none" />
        <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-slate-300">
              <Layers className="h-4 w-4" />
              Card Demo
            </div>
            <h1 className="mt-6 font-serif text-4xl leading-[0.98] text-white sm:text-5xl lg:text-6xl">
              {getDemoTitle(variant)} Archive Cards
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {getDemoDescription(variant)}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button variant={variant === "minimal" ? "default" : "outline"} asChild>
                <Link href="/projects-card-demos/minimal">Minimal</Link>
              </Button>
              <Button variant={variant === "balanced" ? "default" : "outline"} asChild>
                <Link href="/projects-card-demos/balanced">Balanced</Link>
              </Button>
              <Button
                variant={variant === "signal-first" ? "default" : "outline"}
                asChild
              >
                <Link href="/projects-card-demos/signal-first">
                  Recruiter Signal
                </Link>
              </Button>
              <Button
                variant={variant === "minimal-tight" ? "default" : "outline"}
                asChild
              >
                <Link href="/projects-card-demos/minimal-tight">Minimal Tight</Link>
              </Button>
              <Button
                variant={variant === "minimal-icons" ? "default" : "outline"}
                asChild
              >
                <Link href="/projects-card-demos/minimal-icons">Minimal Icons</Link>
              </Button>
              <Button
                variant={
                  variant === "minimal-short-titles" ? "default" : "outline"
                }
                asChild
              >
                <Link href="/projects-card-demos/minimal-short-titles">
                  Short Titles
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectDemoCard
                key={`${variant}-${project.slug}`}
                project={project}
                variant={variant}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
