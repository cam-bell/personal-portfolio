import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project, ProjectSection } from "@/lib/projects-data";
import { CaseStudyHero } from "@/components/projects/case-study-hero";
import { CaseStudySection } from "@/components/projects/case-study-section";
import { ArchitectureDiagramTabs } from "@/components/projects/architecture-diagram-tabs";

const buildFallbackSection = (
  paragraph: string | undefined,
  bullets?: string[],
): ProjectSection | undefined => {
  const paragraphs = paragraph ? [paragraph] : [];
  if (!paragraphs.length && !(bullets?.length ?? 0)) {
    return undefined;
  }

  return {
    paragraphs,
    bullets,
  };
};

export function CaseStudyLayout({
  project,
  relatedProjects,
}: {
  project: Project;
  relatedProjects: Project[];
}) {
  const caseStudy = project.caseStudy;
  const problemSection =
    caseStudy?.problem ??
    buildFallbackSection(project.highlights?.problem ?? project.description);
  const approachSection =
    caseStudy?.approach ??
    buildFallbackSection(
      project.highlights?.solution ?? project.preview ?? project.homepageSummary,
    );
  const implementationSection =
    caseStudy?.implementation ??
    buildFallbackSection(project.highlights?.architecture, project.techStack);
  const resultsSection =
    caseStudy?.results ??
    buildFallbackSection(
      "This project is presented as a concise technical overview rather than a full-length narrative case study.",
      project.outcomes ?? project.highlights?.metrics,
    );
  const lessonsSection = caseStudy?.lessons;
  const diagrams = caseStudy?.diagrams ?? [];

  return (
    <main className="min-h-screen bg-slate-950 pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <CaseStudyHero project={project} />

        <CaseStudySection
          eyebrow="Context"
          title="Problem and Context"
          section={problemSection}
        />

        <CaseStudySection
          eyebrow="Approach"
          title="Approach and Architecture"
          section={approachSection}
        />

        {diagrams.length ? (
          <section className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-glass backdrop-blur-xl md:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-primary">
              Diagrams
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              System Diagrams
            </h2>
            <p className="mt-4 text-slate-300 leading-7">
              Static diagrams included with the project to show architecture,
              workflow, and data movement at a glance.
            </p>
            <div className="mt-6">
              <ArchitectureDiagramTabs diagrams={diagrams} />
            </div>
          </section>
        ) : null}

        <CaseStudySection
          eyebrow="Implementation"
          title="Implementation Details"
          section={implementationSection}
        />

        <CaseStudySection
          eyebrow="Results"
          title="Results and Tradeoffs"
          section={resultsSection}
        />

        <CaseStudySection
          eyebrow="Lessons"
          title="Lessons and Next Steps"
          section={lessonsSection}
        />

        <section className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-glass backdrop-blur-xl md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-primary">
                Explore More
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Related Projects
              </h2>
              <p className="mt-3 max-w-2xl text-slate-300 leading-7">
                Browse adjacent work from the same archive group or jump back to
                the project archive.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4" />
                Back to archive
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.slug}
                href={`/projects/${relatedProject.slug}`}
                className="group rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:border-primary/30 hover:bg-primary/5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {relatedProject.archiveGroup}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-primary">
                  {relatedProject.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {relatedProject.homepageSummary}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-primary">
                  Open case study
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
