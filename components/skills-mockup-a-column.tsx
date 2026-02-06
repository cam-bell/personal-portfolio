"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Brain,
  Database,
  Layers,
  Cloud,
  Wrench,
  Filter,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const categoryTitles = skillCategories.map((cat) => cat.title);

  const filteredCategories = selectedCategory
    ? skillCategories.filter((cat) => cat.title === selectedCategory)
    : skillCategories;

  return (
    <section
      id="skills"
      className="py-14 relative bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-aurora-soft opacity-60 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-aurora pb-2">
              Skills & Technologies
            </h2>
            <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
              Technologies and tools I use to build AI-powered solutions, from
              research to production deployment.
            </p>

            {/* Filter Toggle Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                size="sm"
                className="mb-6 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter Categories
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* Filter Pills */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap gap-2 justify-center mb-8"
                >
                  <Badge
                    variant={selectedCategory === null ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10 transition-colors duration-200"
                    onClick={() => setSelectedCategory(null)}
                  >
                    All Categories
                  </Badge>
                  {categoryTitles.map((title) => (
                    <Badge
                      key={title}
                      variant={
                        selectedCategory === title ? "default" : "outline"
                      }
                      className="cursor-pointer hover:bg-primary/10 transition-colors duration-200"
                      onClick={() => setSelectedCategory(title)}
                    >
                      {title}
                    </Badge>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory || "all"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-card backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg text-card-foreground group-hover:text-primary transition-colors duration-300">
                      <category.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
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
                          transition={{
                            duration: 0.3,
                            delay: skillIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-800/50 hover:scale-105 hover:shadow-lg hover:bg-primary/10 hover:border-primary/20 border border-slate-700/30 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                        >
                          {/* Animated background effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <skill.icon
                            className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300"
                            style={{ color: skill.color }}
                          />
                          <span className="text-sm text-slate-300 group-hover:text-foreground transition-colors duration-300 relative z-10">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">
                {skillCategories.reduce(
                  (acc, cat) => acc + cat.skills.length,
                  0,
                )}
              </div>
              <div className="text-sm text-slate-300">Total Technologies</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/20 to-transparent border border-border/50">
              <div className="text-3xl font-bold text-foreground mb-2">
                {skillCategories.length}
              </div>
              <div className="text-sm text-slate-300">Skill Categories</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-accent/20 to-transparent border border-border/50">
              <div className="text-3xl font-bold text-foreground mb-2">1+</div>
              <div className="text-sm text-slate-300">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
