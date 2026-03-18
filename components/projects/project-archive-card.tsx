import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  FileText,
  Github,
  Layers,
} from "lucide-react";
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
            {project.primaryBadge ?? project.archiveGroup}
          </p>
          <p className="mt-2 text-lg font-semibold text-white">
            {project.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProjectArchiveCard({ project }: { project: Project }) {
  const primaryLink = getProjectPrimaryLink(project);

  return (
    <Card className="glass-card border border-white/10 shadow-glass backdrop-blur-xl h-full overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-900/70">
        {project.image && project.image !== "/placeholder.svg" ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
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
          {project.primaryBadge ? (
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/10 text-primary"
            >
              {project.primaryBadge}
            </Badge>
          ) : null}
        </div>
      </div>

      <CardHeader className="space-y-3">
        <div className="space-y-1">
          <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
          <CardDescription className="text-primary">
            {project.role}
          </CardDescription>
        </div>
        <p className="text-sm leading-6 text-slate-300">
          {project.preview ?? project.homepageSummary}
        </p>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-white/10 bg-white/[0.03] text-slate-200"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="space-y-2">
          {project.outcomes?.slice(0, 2).map((outcome) => (
            <div
              key={outcome}
              className="flex items-start gap-2 text-sm leading-6 text-slate-300"
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{outcome}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href={`/projects/${project.slug}`}>
              Read case study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          {isProjectLinkAvailable(project.githubUrl) ? (
            <Button variant="outline" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          ) : null}

          {primaryLink && primaryLink.href !== project.githubUrl ? (
            <Button variant="outline" asChild>
              <a
                href={primaryLink.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {primaryLink.label === "Open Colab" ? (
                  <FileText className="h-4 w-4" />
                ) : (
                  <ExternalLink className="h-4 w-4" />
                )}
                {primaryLink.label}
              </a>
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
