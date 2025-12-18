"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Layers } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: "Expert" },
      { name: "JavaScript/TypeScript", level: "Expert" },
      { name: "SQL", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
      { name: "Go", level: "Intermediate" },
      { name: "R", level: "Intermediate" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: [
      { name: "React/Next.js", level: "Expert" },
      { name: "Node.js/Express", level: "Expert" },
      { name: "FastAPI", level: "Advanced" },
      { name: "TensorFlow/PyTorch", level: "Advanced" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "Django", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", level: "Expert" },
      { name: "Docker", level: "Advanced" },
      { name: "AWS/GCP", level: "Advanced" },
      { name: "VS Code", level: "Expert" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "Terraform", level: "Intermediate" },
    ],
  },
  {
    title: "Databases & Data",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Redis", level: "Intermediate" },
      { name: "Pandas/NumPy", level: "Expert" },
      { name: "Apache Spark", level: "Intermediate" },
      { name: "Elasticsearch", level: "Intermediate" },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "Advanced":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & Tools
          </h2>
          <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life, from concept to
            deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <category.icon className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-3 rounded-lg border bg-card hover:shadow-sm transition-shadow"
                      >
                        <span className="font-medium text-sm">
                          {skill.name}
                        </span>
                        <Badge
                          variant="secondary"
                          className={`text-xs ${getLevelColor(skill.level)}`}
                        >
                          {skill.level}
                        </Badge>
                      </motion.div>
                    ))}
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
