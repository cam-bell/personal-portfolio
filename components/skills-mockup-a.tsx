"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Brain, Database, Layers, Cloud, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiSqlite,
  SiGooglecloud,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiHuggingface,
  SiOpenai,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAmazon,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiGit,
  SiJupyter,
  SiPostman,
  SiFigma,
  SiGooglebigquery,
  SiMlflow,
  SiDvc,
  SiWeightsandbiases,
  SiLangchain,
} from "react-icons/si";
import { MatplotlibIcon } from "./icons/MatplotlibIcon";
import { SeabornIcon } from "./icons/SeabornIcon";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "SQL", icon: SiMysql, color: "#4479a1" },
    ],
  },
  {
    title: "AI/ML & Data Science",
    icon: Brain,
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#ff6f00" },
      { name: "PyTorch", icon: SiPytorch, color: "#ee4c2c" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#f7931e" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Matplotlib", icon: MatplotlibIcon, color: "#11557c" },
      { name: "Seaborn", icon: SeabornIcon, color: "#4a7c7e" },
      { name: "MLflow", icon: SiMlflow, color: "#0194e2" },
      { name: "Hugging Face", icon: SiHuggingface, color: "#ff9a00" },
      { name: "LangChain", icon: SiLangchain, color: "#1c3c3c" },
      { name: "OpenAI APIs", icon: SiOpenai, color: "#412991" },
    ],
  },
  {
    title: "Data Engineering & Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redis", icon: SiRedis, color: "#dc382d" },
      { name: "SQLite", icon: SiSqlite, color: "#003b57" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "BigQuery", icon: SiGooglebigquery, color: "#4285f4" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: [
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Node.js/Express", icon: SiNodedotjs, color: "#339933" },
      { name: "React/Next.js", icon: SiReact, color: "#61dafb" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4fc08d" },
    ],
  },
  {
    title: "DevOps, Cloud & MLOps",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: SiAmazon, color: "#ff9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285f4" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088ff" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "MLflow", icon: SiMlflow, color: "#0194e2" },
      { name: "DVC", icon: SiDvc, color: "#13adc7" },
      { name: "Weights & Biases", icon: SiWeightsandbiases, color: "#ffbe00" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", icon: SiGit, color: "#f05032" },
      { name: "VS Code", icon: SiJupyter, color: "#007acc" },
      { name: "Jupyter", icon: SiJupyter, color: "#f37626" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "Figma", icon: SiFigma, color: "#f24e1e" },
    ],
  },
];

export function SkillsMockupA() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to build AI-powered solutions, from
            research to production deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-neutral-900 to-neutral-800 border-neutral-700 hover:border-neutral-600 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg text-white">
                    <category.icon className="h-5 w-5 text-blue-400" />
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
                        className="flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-700/50 hover:scale-105 hover:shadow-md hover:bg-neutral-600/50 transition-all duration-200 cursor-pointer group"
                      >
                        <skill.icon
                          className="w-5 h-5"
                          style={{ color: skill.color }}
                        />
                        <span className="text-sm text-gray-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
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
