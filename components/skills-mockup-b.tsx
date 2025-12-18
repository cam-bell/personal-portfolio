"use client";

import { useState } from "react";
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

const categories = [
  "All",
  "Languages",
  "AI/ML",
  "Databases",
  "Frameworks",
  "DevOps",
  "Tools",
];

const skills = [
  // Programming Languages
  { name: "Python", icon: SiPython, color: "#3776ab", cat: "Languages" },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#f7df1e",
    cat: "Languages",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178c6",
    cat: "Languages",
  },
  { name: "SQL", icon: SiMysql, color: "#4479a1", cat: "Languages" },

  // AI/ML & Data Science
  { name: "TensorFlow", icon: SiTensorflow, color: "#ff6f00", cat: "AI/ML" },
  { name: "PyTorch", icon: SiPytorch, color: "#ee4c2c", cat: "AI/ML" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#f7931e", cat: "AI/ML" },
  { name: "Pandas", icon: SiPandas, color: "#150458", cat: "AI/ML" },
  { name: "NumPy", icon: SiNumpy, color: "#013243", cat: "AI/ML" },
  { name: "Matplotlib", icon: MatplotlibIcon, color: "#11557c", cat: "AI/ML" },
  { name: "Seaborn", icon: SeabornIcon, color: "#4a7c7e", cat: "AI/ML" },
  { name: "MLflow", icon: SiMlflow, color: "#0194e2", cat: "AI/ML" },
  { name: "Hugging Face", icon: SiHuggingface, color: "#ff9a00", cat: "AI/ML" },
  { name: "LangChain", icon: SiLangchain, color: "#1c3c3c", cat: "AI/ML" },
  { name: "OpenAI APIs", icon: SiOpenai, color: "#412991", cat: "AI/ML" },

  // Data Engineering & Databases
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    cat: "Databases",
  },
  { name: "Redis", icon: SiRedis, color: "#dc382d", cat: "Databases" },
  { name: "SQLite", icon: SiSqlite, color: "#003b57", cat: "Databases" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1", cat: "Databases" },
  {
    name: "BigQuery",
    icon: SiGooglebigquery,
    color: "#4285f4",
    cat: "Databases",
  },
  { name: "Firebase", icon: SiFirebase, color: "#ffca28", cat: "Databases" },

  // Frameworks & Libraries
  { name: "FastAPI", icon: SiFastapi, color: "#009688", cat: "Frameworks" },
  {
    name: "Node.js/Express",
    icon: SiNodedotjs,
    color: "#339933",
    cat: "Frameworks",
  },
  { name: "React/Next.js", icon: SiReact, color: "#61dafb", cat: "Frameworks" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4fc08d", cat: "Frameworks" },

  // DevOps, Cloud & MLOps
  { name: "AWS", icon: SiAmazon, color: "#ff9900", cat: "DevOps" },
  { name: "GCP", icon: SiGooglecloud, color: "#4285f4", cat: "DevOps" },
  { name: "Docker", icon: SiDocker, color: "#2496ed", cat: "DevOps" },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    color: "#2088ff",
    cat: "DevOps",
  },
  { name: "Vercel", icon: SiVercel, color: "#000000", cat: "DevOps" },
  { name: "DVC", icon: SiDvc, color: "#13adc7", cat: "DevOps" },
  {
    name: "Weights & Biases",
    icon: SiWeightsandbiases,
    color: "#ffbe00",
    cat: "DevOps",
  },

  // Tools & Technologies
  { name: "Git/GitHub", icon: SiGit, color: "#f05032", cat: "Tools" },
  { name: "VS Code", icon: SiJupyter, color: "#007acc", cat: "Tools" },
  { name: "Jupyter", icon: SiJupyter, color: "#f37626", cat: "Tools" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37", cat: "Tools" },
  { name: "Figma", icon: SiFigma, color: "#f24e1e", cat: "Tools" },
];

export function SkillsMockupB() {
  const [active, setActive] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => active === "All" || skill.cat === active
  );

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950/20 to-slate-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Interactive showcase of my technical toolkit. Filter by category to
            explore specific areas.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Filter Buttons */}
          <motion.div
            className="flex gap-3 flex-wrap justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === category
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-neutral-700 text-gray-200 hover:bg-neutral-600 hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.02,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer group border border-slate-700/50 hover:border-primary/50 backdrop-blur-sm"
                >
                  <skill.icon
                    className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-200"
                    style={{ color: skill.color }}
                  />
                  <span className="text-xs text-center text-gray-300 group-hover:text-white transition-colors leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="text-center text-sm text-slate-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Showing {filteredSkills.length} of {skills.length} technologies
          </motion.div>
        </div>
      </div>
    </section>
  );
}
