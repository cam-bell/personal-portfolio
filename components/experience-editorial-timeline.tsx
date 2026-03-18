"use client";

import { Badge } from "@/components/ui/badge";

const milestones = [
  {
    year: "2022",
    role: "Financial Advisory Intern",
    company: "Hargreaves Lansdown",
    theme: "Finance",
    summary:
      "Built a foundation in structured analysis, workflow improvement, and communicating recommendations in high-accountability environments.",
    detail:
      "This chapter matters because it shows rigor before code. You were already operating in analytical systems, improving processes, and presenting work to senior decision makers.",
  },
  {
    year: "2022",
    role: "Innovation Intern",
    company: "United Utilities",
    theme: "Innovation",
    summary:
      "Moved closer to ambiguity by standardising process assets and translating innovation work into reusable operational systems.",
    detail:
      "This is the shift from analysis into change-making. The role signals process design, systems thinking, and the ability to make cross-functional work more legible.",
  },
  {
    year: "2023",
    role: "Hackathon Participant",
    company: "Lloyds Banking Group x Bright Network",
    theme: "Product",
    summary:
      "Turned strategy into an interface-led concept for Net Zero SMEs, connecting benchmarking, sustainability, and user-facing flows.",
    detail:
      "This chapter introduces product instincts. It shows that you were not only evaluating ideas, but framing user problems and shaping concepts that could be built.",
  },
  {
    year: "2024",
    role: "Co-Founder",
    company: "FinPlan MVP Bootcamp",
    theme: "Venture",
    summary:
      "Combined finance context, startup thinking, and GenAI ambition into a product concept shaped by market sizing and investor narrative.",
    detail:
      "This is the clearest bridge role. It fuses your earlier business fluency with technical direction and makes the transition into product and engineering feel earned.",
  },
  {
    year: "2024",
    role: "Datathon Participant",
    company: "EDP Energy Forecasting",
    theme: "Data",
    summary:
      "Built and compared time-series models on 118k+ observations, cutting error by 47% against baseline performance.",
    detail:
      "Here the profile becomes visibly technical. The emphasis moves from framing and strategy into model evaluation, quantitative rigor, and measurable performance.",
  },
  {
    year: "2025",
    role: "Instructor & Developer",
    company: "React Native Bootcamp",
    theme: "Leadership",
    summary:
      "Closed the arc by building and teaching, guiding 50 students through app development with real implementation tools.",
    detail:
      "This final chapter shows technical leadership rather than just technical participation. You are not only building, but creating confidence and momentum for others.",
  },
];

export function ExperienceEditorialTimeline() {
  const activeMilestone = milestones[3];

  return (
    <section className="min-h-screen bg-[#f7f4ee] text-slate-900">
      <div className="border-b border-slate-300/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
          <div className="text-3xl font-semibold tracking-tight text-slate-950">
            Cameron
          </div>
          <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.28em] text-slate-500 md:flex">
            <span>Business</span>
            <span>Innovation</span>
            <span>Product</span>
            <span className="rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-900">
              Journey
            </span>
            <span>Tech</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 lg:px-10 lg:pt-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            Experience
          </p>
          <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-slate-950 sm:text-7xl lg:text-8xl">
            The bridge into tech.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            A chapter-based timeline that frames business, finance, innovation,
            and leadership roles as deliberate steps toward technical delivery.
          </p>
        </div>

        <div className="mt-20 hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-4 h-px bg-slate-300/80" />
            <div className="grid grid-cols-6 gap-6">
              {milestones.map((milestone, index) => {
                const isActive = index === 3;
                return (
                  <div key={`${milestone.year}-${milestone.role}`} className="pt-0">
                    <div
                      className={`relative z-10 h-8 w-8 rounded-full border-2 ${
                        isActive
                          ? "border-slate-950 bg-slate-950"
                          : "border-slate-400 bg-[#f7f4ee]"
                      }`}
                    />
                    <div className="mt-14">
                      <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                        {milestone.year}
                      </p>
                      <h3 className="mt-4 text-[30px] font-semibold leading-tight text-slate-950">
                        {milestone.role}
                      </h3>
                      <p className="mt-3 text-xl text-slate-500">
                        {milestone.company}
                      </p>
                      <p className="mt-6 max-w-[18rem] text-base leading-8 text-slate-600">
                        {isActive ? milestone.detail : milestone.summary}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:hidden">
          {milestones.map((milestone, index) => {
            const isActive = index === 3;
            return (
              <div
                key={`${milestone.year}-${milestone.role}-mobile`}
                className="border-t border-slate-300/70 pt-6"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`h-4 w-4 rounded-full ${
                      isActive ? "bg-slate-950" : "bg-slate-300"
                    }`}
                  />
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                    {milestone.year}
                  </p>
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-slate-950">
                  {milestone.role}
                </h3>
                <p className="mt-2 text-lg text-slate-500">{milestone.company}</p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {isActive ? milestone.detail : milestone.summary}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid gap-10 border-t border-slate-300/70 pt-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
              Featured Chapter
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
              The moment business context and technical ambition fully connect.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              The active state is doing the narrative work here. One role gets
              the extra depth, while the rest stay concise enough to preserve the
              calm, premium feel of the layout.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-300/80 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <Badge
              variant="outline"
              className="rounded-full border-slate-300 bg-[#f4efe6] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-600"
            >
              {activeMilestone.theme}
            </Badge>
            <p className="mt-5 text-sm uppercase tracking-[0.28em] text-slate-400">
              {activeMilestone.year}
            </p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight text-slate-950">
              {activeMilestone.role}
            </h3>
            <p className="mt-2 text-xl text-slate-500">{activeMilestone.company}</p>
            <p className="mt-6 text-base leading-8 text-slate-700">
              {activeMilestone.detail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
