"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const railMilestones = [
  {
    year: "2022",
    label: "Finance",
    role: "Financial Advisory Intern",
    company: "Hargreaves Lansdown",
    summary:
      "Structured analysis, workflow improvement, and exposure to executive communication in a high-accountability financial environment.",
  },
  {
    year: "2022",
    label: "Innovation",
    role: "Innovation Intern",
    company: "United Utilities",
    summary:
      "Standardised process assets, improved internal clarity, and learned how to turn ambiguous work into reusable systems.",
  },
  {
    year: "2023",
    label: "Product",
    role: "Hackathon Participant",
    company: "Lloyds Banking Group x Bright Network",
    summary:
      "Started translating strategy into product concepts, user flows, and interface-led problem framing.",
  },
  {
    year: "2024",
    label: "Bridge Role",
    role: "Co-Founder",
    company: "FinPlan MVP Bootcamp",
    summary:
      "Brought business and finance context into a GenAI product concept shaped by market sizing, investor storytelling, and technical ambition.",
  },
  {
    year: "2024",
    label: "Data",
    role: "Datathon Participant",
    company: "EDP Energy Forecasting",
    summary:
      "Built forecasting models on 118k+ observations and improved performance by 47% against baseline.",
  },
  {
    year: "2025",
    label: "Leadership",
    role: "Instructor & Developer",
    company: "React Native Bootcamp",
    summary:
      "Ended the arc by building and teaching, guiding others through real technical implementation.",
  },
];

const featured = railMilestones[3];

export function ExperienceGlassStoryRail() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-aurora-soft opacity-50" />
      <div className="absolute inset-0 noise-overlay opacity-40" />
      <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
            Experience
          </p>
          <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            A story rail, not a stack of cards.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            This direction keeps the darker portfolio identity and glass
            treatment, but uses them with more restraint. One role carries the
            narrative focus while the rest form a paced progression beside it.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_30px_80px_rgba(2,8,23,0.45)]">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Story Rail
              </p>
              <div className="mt-8 space-y-8">
                {railMilestones.map((item, index) => {
                  const isActive = index === 3;
                  return (
                    <div
                      key={`${item.year}-${item.role}`}
                      className="grid grid-cols-[18px_1fr] gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className={`mt-1 h-3.5 w-3.5 rounded-full ${
                            isActive ? "bg-cyan-300" : "bg-slate-600"
                          }`}
                        />
                        {index < railMilestones.length - 1 && (
                          <div className="mt-2 h-full w-px bg-white/10" />
                        )}
                      </div>
                      <div className="pb-6">
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                          {item.year}
                        </p>
                        <p
                          className={`mt-2 text-lg font-semibold ${
                            isActive ? "text-white" : "text-slate-300"
                          }`}
                        >
                          {item.role}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.company}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            <Card className="glass-card overflow-hidden border-white/10 shadow-[0_30px_90px_rgba(2,8,23,0.55)]">
              <CardContent className="p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="rounded-full bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-200 hover:bg-cyan-400/10">
                    {featured.label}
                  </Badge>
                  <span className="text-xs uppercase tracking-[0.28em] text-slate-500">
                    Featured chapter
                  </span>
                </div>

                <p className="mt-8 text-sm uppercase tracking-[0.32em] text-slate-500">
                  {featured.year}
                </p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  {featured.role}
                </h2>
                <p className="mt-3 text-xl text-slate-300">{featured.company}</p>

                <p className="mt-8 max-w-3xl text-base leading-8 text-slate-200">
                  This role is the clearest hinge point in the narrative. It
                  combines business framing, financial context, startup
                  storytelling, and applied technical ambition in one place, so
                  the move into engineering no longer feels like a leap. It feels
                  like the next logical step.
                </p>

                <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      Before
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Business analysis, structured thinking, and stakeholder
                      communication.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      Bridge
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Product vision, commercial framing, and experimentation
                      with technical tooling.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      After
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Data science, application development, and technical
                      leadership.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              {railMilestones
                .filter((_, index) => index !== 3)
                .map((item) => (
                  <div
                    key={`${item.year}-${item.role}-summary`}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                        {item.year}
                      </p>
                      <Badge
                        variant="outline"
                        className="rounded-full border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300"
                      >
                        {item.label}
                      </Badge>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-slate-400">{item.company}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {item.summary}
                    </p>
                  </div>
                ))}
            </div>

            <div className="flex items-center gap-3 text-sm font-medium text-slate-400">
              <span>Business</span>
              <ArrowRight className="h-4 w-4" />
              <span>Innovation</span>
              <ArrowRight className="h-4 w-4" />
              <span>Product</span>
              <ArrowRight className="h-4 w-4" />
              <span>Technical Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
