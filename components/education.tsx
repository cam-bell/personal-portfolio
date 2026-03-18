"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Calendar,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Masters in Computer Science and Business Technology",
    institution: "IE School of Science and Technology",
    location: "Madrid, Spain",
    period: "Sep 2024 - Jul 2025",
    label: "Featured degree",
    summary:
      "This is where business grounding became technical capability. The degree sharpened my ability to build applied AI systems, production-minded ML workflows, and software tied to real operational value.",
    highlights: [
      "GenAI, NLP, deep learning, and MLOps applied in practice.",
      "From experimentation to production with cloud and engineering foundations.",
      "Ownership beyond coursework through representative and community roles.",
    ],
    focusAreas: [
      "Generative AI",
      "NLP",
      "Deep Learning",
      "MLOps",
      "Computer Vision",
      "Software Engineering",
    ],
    leadership: [
      "Class Representative",
      "Community Engagement Representative",
      "Tech & Innovation Club Events Officer (2025)",
    ],
  },
  {
    degree: "Bachelor of Science, Management",
    institution: "University of Bristol",
    location: "Bristol, United Kingdom",
    period: "Sep 2017 - Jul 2020",
    label: "Business foundation",
    summary:
      "Established the commercial grounding behind my technical work: strategy, finance, stakeholder fluency, and a practical view of how technology creates value.",
    highlights: [
      "Developed the business and finance lens behind later product and AI decisions.",
      "Learned to translate abstract strategy into structured analysis and clear communication.",
    ],
    focusAreas: [
      "Project Management",
      "Consultancy Project",
      "The Digital Economy",
      "Strategic Finance",
      "Management Science",
    ],
    leadership: [
      "Parent Mentor - EFM Society",
      "Member - EFM Society football team",
    ],
  },
];

const featuredEducation = education[0];
const supportingEducation = education[1];

export function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden scroll-mt-24 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950 py-20 sm:scroll-mt-28"
    >
      <div className="absolute inset-0 bg-aurora-soft opacity-45 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
      <div className="absolute left-0 top-16 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.08),transparent_38%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-slate-400">
            Academic Foundation
          </p>
          <h2 className="mt-6 font-serif text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Where the technical pivot became real
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Education is not a background detail in the story. It is the point
            where business grounding, leadership, and technical ambition
            converged into applied AI engineering.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.82fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card overflow-hidden rounded-[2rem] border-white/10 shadow-[0_30px_90px_rgba(2,8,23,0.55)]">
              <CardContent className="p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="rounded-full bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-200 hover:bg-cyan-400/10">
                    {featuredEducation.label}
                  </Badge>
                  <span className="text-xs uppercase tracking-[0.28em] text-slate-500">
                    Academic chapter
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
                      {featuredEducation.period}
                    </p>
                    <h3 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                      {featuredEducation.degree}
                    </h3>
                    <p className="mt-3 text-xl text-slate-300">
                      {featuredEducation.institution}
                    </p>
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_280px]">
                  <div>
                    <p className="text-base leading-8 text-slate-200">
                      {featuredEducation.summary}
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                      {featuredEducation.highlights.map((highlight, index) => (
                        <div
                          key={highlight}
                          className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
                        >
                          <p className="text-xs uppercase tracking-[0.26em] text-slate-500">
                            {index === 0
                              ? "AI Systems"
                              : index === 1
                                ? "Deployment Thinking"
                                : "Leadership"}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-300">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <MapPin className="h-4 w-4 text-cyan-200" />
                      <span>{featuredEducation.location}</span>
                    </div>

                    <div className="mt-6">
                      <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                        <Award className="h-3.5 w-3.5 text-cyan-200" />
                        Core Disciplines
                      </h4>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {featuredEducation.focusAreas.map((area) => (
                          <Badge
                            key={area}
                            variant="outline"
                            className="rounded-full border-cyan-300/15 bg-cyan-300/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-cyan-100/90"
                          >
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 border-t border-white/10 pt-6">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                        Leadership
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {featuredEducation.leadership.map((role) => (
                          <li
                            key={role}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.04] shadow-[0_22px_70px_rgba(2,8,23,0.45)]">
              <CardContent className="p-7 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge
                    variant="outline"
                    className="rounded-full border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300"
                  >
                    {supportingEducation.label}
                  </Badge>
                  <span className="text-xs uppercase tracking-[0.26em] text-slate-500">
                    Earlier chapter
                  </span>
                </div>

                <p className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-500">
                  {supportingEducation.period}
                </p>
                <h3 className="mt-3 text-3xl font-semibold leading-tight text-white">
                  {supportingEducation.degree}
                </h3>
                <p className="mt-2 text-lg text-slate-300">
                  {supportingEducation.institution}
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="h-4 w-4" />
                  {supportingEducation.location}
                </p>

                <p className="mt-6 text-sm leading-7 text-slate-300">
                  {supportingEducation.summary}
                </p>

                <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                  {supportingEducation.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-300"
                    >
                      <ArrowRight className="mt-1 h-4 w-4 text-slate-500" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Why This Matters
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Business grounding
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Strategy, finance, and stakeholder fluency from Bristol.
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Technical specialization
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Applied AI, ML systems, and production-minded engineering
                    from IE.
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Leadership thread
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Evidence of ownership beyond coursework, carried across both
                    environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Calendar className="h-4 w-4" />
                <span>Selected focus areas</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {supportingEducation.focusAreas.map((area) => (
                  <Badge
                    key={area}
                    variant="outline"
                    className="rounded-full border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300"
                  >
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
