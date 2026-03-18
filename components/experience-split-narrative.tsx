"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const storyPhases = [
  {
    id: "foundations",
    phase: "Phase 01",
    title: "Business & Finance Foundations",
    summary:
      "This chapter establishes commercial judgment first. The roles here signal fluency in stakeholders, analysis, and decision-making before the move into product and engineering.",
    chapters: [
      {
        period: "2022",
        title: "Financial Advisory Intern",
        company: "Hargreaves Lansdown",
        location: "Bristol, United Kingdom",
        impact:
          "Improved advisory review workflows and presented survey findings to senior leadership, combining operational discipline with executive communication.",
        bridge:
          "This phase demonstrates analytical thinking, structured problem solving, and comfort operating in high-accountability environments.",
        skills: ["Finance", "Analysis", "Executive Communication"],
      },
    ],
  },
  {
    id: "innovation",
    phase: "Phase 02",
    title: "Innovation & Leadership",
    summary:
      "The middle chapter shows movement from analysis into experimentation, influence, and ambiguity. This is where the story shifts from understanding systems to shaping them.",
    chapters: [
      {
        period: "2022",
        title: "Innovation Intern",
        company: "United Utilities",
        location: "Warrington, United Kingdom",
        impact:
          "Standardised process assets into reusable templates and presented innovation work to senior stakeholders to align execution across teams.",
        bridge:
          "This role adds process design, narrative clarity, and the ability to make complex work legible to non-technical decision makers.",
        skills: ["Innovation", "Process Design", "Stakeholder Alignment"],
      },
      {
        period: "2023",
        title: "Hackathon Participant",
        company: "Lloyds Banking Group x Bright Network",
        location: "Remote",
        impact:
          "Proposed a Net Zero SME portal and translated strategy into interface concepts, benchmarking flows, and sustainability tooling ideas.",
        bridge:
          "Here the story starts touching product thinking: framing user problems, structuring flows, and turning strategic requirements into something buildable.",
        skills: ["Product Thinking", "Strategy", "Prototyping"],
      },
    ],
  },
  {
    id: "building",
    phase: "Phase 03",
    title: "Building Toward Tech",
    summary:
      "The final chapter makes the transition explicit. The emphasis is no longer just ideas or leadership, but building, shipping, and teaching technical work.",
    chapters: [
      {
        period: "2024",
        title: "Co-Founder",
        company: "Tech Venture MVP Bootcamp - FinPlan",
        location: "IE University",
        impact:
          "Built a GenAI-powered financial product concept and led investment strategy, market sizing, and the startup pitch to mentors.",
        bridge:
          "This is the strongest connective role in the narrative because it fuses finance context, business framing, and applied technical ambition.",
        skills: ["Venture Building", "GenAI", "Commercial Strategy"],
      },
      {
        period: "2024",
        title: "Datathon Participant",
        company: "EDP - Energy Forecasting",
        location: "IE University",
        impact:
          "Built and compared time-series models on 118k+ observations, cutting forecasting error by 47% against the baseline.",
        bridge:
          "Now the profile moves decisively into technical credibility: quantitative rigor, model comparison, and measurable performance gains.",
        skills: ["Data Science", "Forecasting", "Model Evaluation"],
      },
      {
        period: "2025",
        title: "Instructor & Developer",
        company: "React Native Bootcamp",
        location: "IE University",
        impact:
          "Taught app development to 50 students while guiding implementation with Expo, Firebase, and React Navigation.",
        bridge:
          "This closes the arc with visible technical leadership: not just building, but teaching and creating confidence in others.",
        skills: ["Teaching", "Mobile Development", "Leadership"],
      },
    ],
  },
];

const principles = [
  "Group roles into story chapters instead of a flat timeline.",
  "Use short impact copy and a visible bridge-to-tech sentence.",
  "Let typography and spacing carry the hierarchy, not badge overload.",
];

export function ExperienceSplitNarrative() {
  return (
    <section className="relative overflow-hidden bg-stone-50 text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.06),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.08),transparent_24%)]" />
      <div className="relative">
        <section className="border-b border-slate-200/80 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-slate-500">
                Experience Blueprint
              </p>
              <h1 className="max-w-4xl font-serif text-5xl leading-none text-slate-950 sm:text-6xl lg:text-7xl">
                Split the career story into chapters, not isolated jobs.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                This direction is designed to show how business, finance,
                innovation, and leadership roles build naturally into technical
                work. It makes the bridge explicit without sounding defensive.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {principles.map((principle) => (
                <Card
                  key={principle}
                  className="border-slate-200/80 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
                >
                  <CardContent className="p-6">
                    <p className="text-sm leading-7 text-slate-700">
                      {principle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-24">
            {storyPhases.map((phase) => (
              <div
                key={phase.id}
                className="grid gap-12 border-t border-slate-200/70 pt-10 lg:grid-cols-[0.95fr_1.45fr]"
              >
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <p className="text-xs font-medium uppercase tracking-[0.32em] text-slate-400">
                    {phase.phase}
                  </p>
                  <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
                    {phase.title}
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
                    {phase.summary}
                  </p>
                </div>

                <div className="space-y-6">
                  {phase.chapters.map((chapter) => (
                    <Card
                      key={`${phase.id}-${chapter.title}`}
                      className="overflow-hidden border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
                    >
                      <CardContent className="p-0">
                        <div className="grid gap-0 md:grid-cols-[165px_1fr]">
                          <div className="border-b border-slate-200 bg-slate-50/80 p-6 md:border-b-0 md:border-r">
                            <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
                              {chapter.period}
                            </p>
                            <p className="mt-6 text-sm leading-7 text-slate-500">
                              {chapter.location}
                            </p>
                          </div>

                          <div className="p-6 sm:p-8">
                            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
                              {chapter.company}
                            </p>
                            <h3 className="mt-3 text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
                              {chapter.title}
                            </h3>

                            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
                              {chapter.impact}
                            </p>

                            <div className="mt-7 border-l border-slate-300 pl-5">
                              <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
                                Why It Matters
                              </p>
                              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                                {chapter.bridge}
                              </p>
                            </div>

                            <div className="mt-7 flex flex-wrap gap-2">
                              {chapter.skills.map((skill) => (
                                <Badge
                                  key={skill}
                                  variant="outline"
                                  className="rounded-full border-slate-300 bg-slate-50 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-600"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200/80 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-slate-400">
                Section Logic
              </p>
              <h2 className="mt-4 font-serif text-3xl text-slate-950 sm:text-4xl">
                The reader should leave with one clear impression.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                You did not pivot away from earlier experience. You built on it.
                Finance sharpened analysis, innovation roles built ambiguity
                tolerance, and leadership roles proved you can communicate and
                guide execution.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
              <span>Business</span>
              <ArrowRight className="h-4 w-4" />
              <span>Innovation</span>
              <ArrowRight className="h-4 w-4" />
              <span>Technical Delivery</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
