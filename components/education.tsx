"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";
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

export function Education() {
  return (
    <section
      id="education"
      className="py-14 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-aurora-soft opacity-60 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-aurora">
            Education
          </h2>
          <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Academic foundation in computer science, AI/ML, and business
            technology, complemented by leadership roles and community
            engagement.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-4">
          {/* Education Cards */}
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-500 shadow-glass">
                <CardHeader className="pb-1.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg md:text-xl mb-1">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-sm md:text-base font-medium text-primary mb-1.5">
                        {edu.institution}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {edu.period}
                        </div>
                        <span className="text-slate-500">•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex-shrink-0">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="!p-5 md:!p-6 !pt-1 !pb-4">
                  <div className="grid lg:grid-cols-2 gap-3 lg:gap-4 items-start">
                    {/* Description - Left Column */}
                    {edu.description && (
                      <div>
                        <p className="text-xs text-slate-300 leading-normal text-justify">
                          {edu.description}
                        </p>
                      </div>
                    )}

                    {/* Modules & Leadership - Right Column */}
                    <div className="space-y-2.5">
                      {/* Modules */}
                      <div>
                        <h4 className="text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
                          <Award className="h-3.5 w-3.5 text-primary" />
                          Key Modules
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.modules.map((module) => (
                            <Badge
                              key={module}
                              variant="outline"
                              className="text-[10px] px-2 py-0.5 bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/30 transition-all"
                            >
                              {module}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Leadership Roles */}
                      {edu.leadership.length > 0 && (
                        <div>
                          <h4 className="text-xs font-semibold text-slate-200 mb-1.5">
                            Leadership Roles
                          </h4>
                          <ul className="space-y-1">
                            {edu.leadership.map((role, roleIndex) => (
                              <li
                                key={roleIndex}
                                className="text-xs text-slate-300 flex items-start gap-1.5"
                              >
                                <span className="text-primary mt-0.5 text-[10px]">
                                  •
                                </span>
                                <span>{role}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
