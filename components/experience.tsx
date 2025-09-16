"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Instructor & Developer",
    company: "React Native Bootcamp",
    location: "IE University",
    period: "Mar 2025",
    description:
      "Delivered 3-day bootcamp to 50 students, teaching cross-platform app development with Expo, Firebase, and React Navigation.",
    technologies: ["React Native", "Expo", "React Navigation"],
  },
  {
    title: "Co-Founder",
    company: "Tech Venture MVP Bootcamp – FinPlan",
    location: "IE University",
    period: "Oct 2024",
    description:
      "Built GenAI-powered financial platform; led investment strategy, market sizing, and startup pitch to industry mentors.",
    technologies: ["OpenAI API", "Python", "Financial Modelling"],
  },
  {
    title: "Datathon Participant",
    company: "EDP - Energy Forecasting",
    location: "Remote",
    period: "Nov 2024",
    description:
      "Built and compared time-series models on 118k+ energy observations, reducing forecasting error by 47% vs baseline.",
    technologies: ["Python", "ARIMA", "SARIMAX", "Prophet", "Pandas"],
  },
  {
    title: "Hackathon Participant",
    company: "Lloyds Banking Group – Bright Network Reboot Hackathon",
    location: "Remote",
    period: "Jul 2023",
    description:
      "Proposed Net Zero SME portal; pitched sustainability UI prototype, benchmarking tools for carbon tracking and reporting.",
    technologies: ["Figma", "Cloud Tools", "Sustainability Modeling"],
  },
  {
    title: "Virtual Internship – Technology",
    company: "Bright Network",
    location: "Remote",
    period: "Jul 2023",
    description:
      "Completed multi-company tech programme; built IoT/AI prototype with Figma wireframes, cloud blueprints, and QA checklists.",
    technologies: ["Figma", "IoT", "AI Prototyping", "Cloud Architecture"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Work & Experience
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            My professional journey in software development and data science,
            from freelancing to leading development teams.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"></div>

                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  } ml-12 md:ml-0`}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
