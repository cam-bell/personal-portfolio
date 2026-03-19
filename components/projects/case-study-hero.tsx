import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project, isProjectLinkAvailable } from "@/lib/projects-data";

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-glass backdrop-blur-xl md:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_35%)]" />
      <div className="relative z-10">
        <Button variant="ghost" size="sm" className="mb-6 px-0 text-slate-300 hover:text-white" asChild>
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
            Back to archive
          </Link>
        </Button>

        <div className="flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="border-white/10 bg-slate-950/80 text-slate-100"
          >
            {project.archiveGroup}
          </Badge>
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/10 text-primary"
          >
            {project.year}
          </Badge>
          <Badge
            variant="outline"
            className="border-white/10 bg-white/[0.04] text-slate-200"
          >
            {project.role}
          </Badge>
          {project.status ? (
            <Badge
              variant="outline"
              className="border-amber-400/30 bg-amber-400/10 text-amber-200"
            >
              {project.status}
            </Badge>
          ) : null}
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              {project.homepageSummary}
            </p>
            <p className="mt-4 max-w-3xl text-slate-400 leading-7">
              {project.description}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
              Key Outcomes
            </p>
            <div className="mt-4 space-y-3">
              {(project.caseStudy?.outcomes ?? project.outcomes ?? []).map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-200">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {isProjectLinkAvailable(project.githubUrl) ? (
                <Button variant="outline" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    View code
                  </a>
                </Button>
              ) : null}
              {isProjectLinkAvailable(project.liveUrl) ? (
                <Button asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live demo
                  </a>
                </Button>
              ) : null}
              {isProjectLinkAvailable(project.colabUrl) ? (
                <Button variant="outline" asChild>
                  <a
                    href={project.colabUrl ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open Colab
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
