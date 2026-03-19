import { SkillsMockupA } from "@/components/skills-mockup-a";

export default function SkillsHybridPreviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <section className="border-b border-white/10 bg-slate-950/95">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-slate-500">
              Preview
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Hybrid Skills Mockup
            </h1>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This page previews the recruiter-first hybrid of the live skills
              section. It mirrors the current component without changing any of
              the other demo routes.
            </p>
          </div>
        </div>
      </section>

      <SkillsMockupA />
    </main>
  );
}
