"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Binary,
  Brain,
  Cloud,
  Code,
  Database,
  Layers,
  PlugZap,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import {
  SiAmazon,
  SiDocker,
  SiDvc,
  SiFastapi,
  SiGithubactions,
  SiGit,
  SiGooglebigquery,
  SiGooglecloud,
  SiGraphql,
  SiHuggingface,
  SiJupyter,
  SiLangchain,
  SiMlflow,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpenai,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPytorch,
  SiPytest,
  SiPython,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiStreamlit,
  SiTensorflow,
  SiTypescript,
  SiWeightsandbiases,
} from "react-icons/si";
import AWSBadgeImage from "@/public/images/aws-certified-cloud-practitioner.png";

type SkillItem = {
  name: string;
  icon: any;
  color: string;
};

type CapabilityGroup = {
  title: string;
  recruiterLabel: string;
  summary: string;
  icon: any;
  skills: SkillItem[];
};

const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Agent Systems",
    recruiterLabel: "LLM orchestration",
    summary:
      "I build multi-step AI workflows with structured state, tool use, and validation.",
    icon: Code,
    skills: [
      { name: "LangChain", icon: SiLangchain, color: "#2C6262" },
      { name: "LangGraph", icon: SiGraphql, color: "#0A66C2" },
      { name: "MCP", icon: PlugZap, color: "#38BDF8" },
      { name: "Pydantic", icon: ShieldCheck, color: "#4C51BF" },
      { name: "Asyncio", icon: Zap, color: "#3776AB" },
      { name: "OpenAI", icon: SiOpenai, color: "#FFFFFF" },
    ],
  },
  {
    title: "ML & Model Work",
    recruiterLabel: "Applied AI",
    summary:
      "Hands-on experience across model training, evaluation, experimentation, and adaptation workflows.",
    icon: Brain,
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFB800" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "MLflow", icon: SiMlflow, color: "#0194E2" },
    ],
  },
  {
    title: "Data Foundations",
    recruiterLabel: "Storage and retrieval",
    summary:
      "Structured data, analytical stores, and retrieval layers for product and model workflows.",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "BigQuery", icon: SiGooglebigquery, color: "#4285F4" },
      { name: "TimescaleDB", icon: SiPostgresql, color: "#5B76A7" },
      { name: "FAISS", icon: Binary, color: "#6D4AFF" },
    ],
  },
  {
    title: "Application Layer",
    recruiterLabel: "Product delivery",
    summary:
      "I turn AI systems into usable applications with backend APIs, web interfaces, and internal tools.",
    icon: Layers,
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "FastAPI", icon: SiFastapi, color: "#00A98F" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
    ],
  },
  {
    title: "Platform & Delivery",
    recruiterLabel: "Cloud and MLOps",
    summary:
      "Enough infrastructure depth to ship, version, monitor, and repeat technical work reliably.",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "DVC", icon: SiDvc, color: "#13ADC7" },
      { name: "Weights & Biases", icon: SiWeightsandbiases, color: "#FFBE00" },
    ],
  },
  {
    title: "Working Toolkit",
    recruiterLabel: "Execution tools",
    summary:
      "The tools I use for testing, debugging, experimentation, and day-to-day delivery.",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Pytest", icon: SiPytest, color: "#0EA5E9" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Pandas", icon: SiPandas, color: "#FFD43B" },
      { name: "NumPy", icon: SiNumpy, color: "#4DA6FF" },
    ],
  },
];

const featuredSkills = capabilityGroups
  .flatMap((group) => group.skills)
  .filter((skill) =>
    [
      "Python",
      "TypeScript",
      "OpenAI",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Docker",
      "AWS",
    ].includes(skill.name),
  );

const totalSkills = capabilityGroups.reduce(
  (count, group) => count + group.skills.length,
  0,
);

function SkillChip({ skill }: { skill: SkillItem }) {
  const Icon = skill.icon;

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-200">
      <Icon
        className="h-4 w-4"
        style={{ color: skill.color } as CSSProperties}
      />
      <span>{skill.name}</span>
    </div>
  );
}

export function SkillsMockupA() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950 py-20 scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="absolute inset-0 bg-aurora-soft opacity-45 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-35 pointer-events-none" />
      <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_260px] lg:items-end"
        >
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-slate-400">
              Technical Depth
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Skills & Technologies
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              The stack below reflects how I actually work across projects:
              orchestrating agents, building applications around models, and
              shipping systems that need data, infrastructure, and operational
              clarity.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <Badge className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-slate-200 hover:bg-white/5">
                {totalSkills} selected tools
              </Badge>
              <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
              <span>{capabilityGroups.length} grouped categories</span>
              <ArrowRight className="h-4 w-4 text-slate-500" />
              <span>LLM systems to full-stack delivery</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {featuredSkills.map((skill) => (
                <SkillChip key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <Card className="overflow-hidden rounded-[1.8rem] border-white/10 bg-white/[0.04] shadow-[0_24px_70px_rgba(2,8,23,0.45)] backdrop-blur-xl">
            <CardContent className="p-4">
              <a
                href="https://www.credly.com/share/fed34534-1c50-42d0-8f9f-a268bf2da30b"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 transition-colors duration-300 hover:border-cyan-200/30"
              >
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                      Credential
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      AWS Cloud Practitioner
                    </p>
                  </div>
                </div>

                <div className="relative mx-auto mt-4 aspect-[4/5] w-full max-w-[9.5rem] overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/70 shadow-[0_16px_40px_rgba(2,8,23,0.3)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
                  <Image
                    src={AWSBadgeImage}
                    alt="AWS Certified Cloud Practitioner badge"
                    fill
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <p className="mt-4 text-center text-[10px] uppercase tracking-[0.24em] text-cyan-200">
                  View credential
                </p>
              </a>
            </CardContent>
          </Card>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilityGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-200/20">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                        {group.recruiterLabel}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        {group.title}
                      </h3>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-200">
                      <group.icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    {group.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <SkillChip key={skill.name} skill={skill} />
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
