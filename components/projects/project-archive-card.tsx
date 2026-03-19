import Image from "next/image";
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
    <Card className="glass-card h-full overflow-hidden border border-white/10 shadow-glass backdrop-blur-xl flex flex-col">
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
                className="h-7 rounded-full border-primary/20 bg-primary/8 px-3 text-[11px] font-medium uppercase tracking-[0.18em] text-primary"
              >
                {project.primaryBadge}
              </Badge>
            ) : null}
          </div>
          <div className="space-y-1">
            <CardTitle className="min-h-[3.5rem] line-clamp-2 text-xl leading-tight">
              {project.title}
            </CardTitle>
            <CardDescription className="min-h-[1.25rem] line-clamp-1 text-primary">
              {project.role}
            </CardDescription>
          </div>
        </div>
        <p className="min-h-[4.5rem] text-sm leading-6 text-slate-300 line-clamp-3">
          {project.preview ?? project.homepageSummary}
        </p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col space-y-5">
        <div className="flex min-h-[4.5rem] flex-wrap content-start gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="inline-flex h-8 items-center rounded-full border border-white/10 bg-white/[0.03] px-3 text-[11px] font-medium leading-none text-slate-200 whitespace-nowrap"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="min-h-[5.5rem] space-y-2">
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

        <div className="mt-auto space-y-3">
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
