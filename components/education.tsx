"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Masters in Computer Science and Business Technology",
    institution: "IE School of Science and Technology",
    location: "Madrid, Spain",
    period: "Sep 2024 - Jul 2025",
    description:
      "Combined advanced AI/ML engineering with business technology strategy. Gained hands-on experience building scalable ML systems, deploying models to production, and applying computer vision and NLP to real-world problems. Developed full-stack capabilities with modern cloud technologies.",
    modules: [
      "Generative AI",
      "NLP",
      "Deep Learning",
      "MLOps",
      "Machine Learning & AI",
      "Computer Vision",
      "Cloud Foundations",
      "Data Analytics",
      "Software Engineering",
      "JavaScript",
      "Operating Systems",
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
    description:
      "Established foundation in business strategy and management that revealed the transformative potential of technology. This understanding of business needs, market dynamics, and financial analysis informed my transition into AI/ML engineering, enabling development of solutions that bridge technical innovation and business outcomes.",
    modules: [
      "Project Management",
      "Consultancy Project",
      "The Digital Economy",
      "Strategic Finance",
      "Management Science",
    ],
    leadership: [
      "Parent Mentor - EFM Society (Economics, Finance, and Management)",
      "Member - EFM Society (Played for EFM football team)",
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
            Education
          </p>
          <h2 className="mt-6 font-serif text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Academic Foundation
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Academic foundation in computer science, AI/ML, and business
            technology, complemented by leadership roles and community
            engagement.
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
                <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-8">
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
                    <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                      <MapPin className="h-4 w-4 text-cyan-200" />
                      {featuredEducation.location}
                    </p>
                  </div>

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_300px]">
                  <div>
                    <p className="text-base leading-8 text-slate-200">
                      {featuredEducation.description}
                    </p>

                    <div className="mt-8">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                        Leadership Roles
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

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                    <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                      <Award className="h-3.5 w-3.5 text-cyan-200" />
                      Key Modules
                    </h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {featuredEducation.modules.map((module) => (
                        <Badge
                          key={module}
                          variant="outline"
                          className="rounded-full border-cyan-300/15 bg-cyan-300/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-cyan-100/90"
                        >
                          {module}
                        </Badge>
                      ))}
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
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {supportingEducation.period}
                </p>
                <h3 className="mt-3 text-3xl font-semibold leading-tight text-white">
                  {supportingEducation.degree}
                </h3>
                <p className="mt-2 text-lg text-slate-300">
                  {supportingEducation.institution}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="h-4 w-4" />
                  {supportingEducation.location}
                </p>

                <p className="mt-6 text-sm leading-7 text-slate-300">
                  {supportingEducation.description}
                </p>
              </CardContent>
            </Card>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Calendar className="h-4 w-4" />
                <span>Supporting details</span>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                  Key Modules
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {supportingEducation.modules.map((module) => (
                    <Badge
                      key={module}
                      variant="outline"
                      className="rounded-full border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300"
                    >
                      {module}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                  Leadership Roles
                </h4>
                <ul className="mt-4 space-y-3">
                  {supportingEducation.leadership.map((role) => (
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
