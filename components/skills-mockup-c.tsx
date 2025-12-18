"use client";

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

const coreSkills = [
  {
    name: "Python",
    icon: SiPython,
    color: "#3776ab",
    description: "Primary language for AI/ML",
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    color: "#ff6f00",
    description: "Deep learning framework expertise",
  },
  {
    name: "PyTorch",
    icon: SiPytorch,
    color: "#ee4c2c",
    description: "Research & production ML models",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    description: "Production database systems",
  },
  {
    name: "AWS",
    icon: SiAmazon,
    color: "#ff9900",
    description: "Cloud infrastructure & deployment",
  },
  {
    name: "React/Next.js",
    icon: SiReact,
    color: "#61dafb",
    description: "Full-stack web applications",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "#009688",
    description: "High-performance API development",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ed",
    description: "Containerization & MLOps",
  },
];

const broaderSkills = [
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "SQL", icon: SiMysql, color: "#4479a1" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#f7931e" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Matplotlib", icon: MatplotlibIcon, color: "#11557c" },
  { name: "Seaborn", icon: SeabornIcon, color: "#4a7c7e" },
  { name: "MLflow", icon: SiMlflow, color: "#0194e2" },
  { name: "Hugging Face", icon: SiHuggingface, color: "#ff9a00" },
  { name: "LangChain", icon: SiLangchain, color: "#1c3c3c" },
  { name: "OpenAI APIs", icon: SiOpenai, color: "#412991" },
  { name: "Redis", icon: SiRedis, color: "#dc382d" },
  { name: "SQLite", icon: SiSqlite, color: "#003b57" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "BigQuery", icon: SiGooglebigquery, color: "#4285f4" },
  { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
  { name: "Node.js/Express", icon: SiNodedotjs, color: "#339933" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4fc08d" },
  { name: "GCP", icon: SiGooglecloud, color: "#4285f4" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088ff" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "DVC", icon: SiDvc, color: "#13adc7" },
  { name: "Weights & Biases", icon: SiWeightsandbiases, color: "#ffbe00" },
  { name: "Git/GitHub", icon: SiGit, color: "#f05032" },
  { name: "VS Code", icon: SiJupyter, color: "#007acc" },
  { name: "Jupyter", icon: SiJupyter, color: "#f37626" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37" },
  { name: "Figma", icon: SiFigma, color: "#f24e1e" },
];

export function SkillsMockupC() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950"
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
            A strategic overview of my technical capabilities, organized by
            depth of expertise and focus areas.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Core Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                Core Expertise
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Technologies I use daily and have deep experience with. These
                form the foundation of my AI engineering capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer border border-slate-700/50 hover:border-primary/50 hover:shadow-lg backdrop-blur-sm">
                    <skill.icon
                      className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                      style={{ color: skill.color }}
                    />
                    <div className="flex-1">
                      <div className="font-medium text-white group-hover:text-blue-100 transition-colors">
                        {skill.name}
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                        {skill.description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Broader Exposure Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2 text-green-400">
                Broader Exposure
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Additional technologies I've worked with and can quickly adapt
                to new projects. Demonstrates versatility and continuous
                learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {broaderSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 text-sm hover:bg-slate-700/50 transition-all duration-200 cursor-pointer group border border-slate-700/50 hover:border-primary/50 backdrop-blur-sm"
                >
                  <skill.icon
                    className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                    style={{ color: skill.color }}
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {coreSkills.length}
              </div>
              <div className="text-sm text-slate-300">Core Technologies</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {broaderSkills.length}
              </div>
              <div className="text-sm text-slate-300">Additional Skills</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {coreSkills.length + broaderSkills.length}
              </div>
              <div className="text-sm text-slate-300">Total Technologies</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
