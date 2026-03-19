import { ProjectSection } from "@/lib/projects-data";

type CaseStudySectionProps = {
  eyebrow?: string;
  title: string;
  section?: ProjectSection;
};

export function CaseStudySection({
  eyebrow,
  title,
  section,
}: CaseStudySectionProps) {
  if (!section) {
    return null;
  }

  return (
    <section className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-glass backdrop-blur-xl md:p-8">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.24em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-5 space-y-4 text-slate-300">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="leading-7">
            {paragraph}
          </p>
        ))}
      </div>
      {section.bullets?.length ? (
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {section.bullets.map((bullet) => (
            <div
              key={bullet}
              className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-6 text-slate-200"
            >
              {bullet}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
