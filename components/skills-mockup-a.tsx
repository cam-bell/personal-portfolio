"use client";

import Image from "next/image";
import type { CSSProperties, ComponentType } from "react";
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
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color: string;
};

type CapabilityGroup = {
  title: string;
  eyebrow: string;
  summary: string;
  impact: string;
  icon: ComponentType<{ className?: string }>;
  skills: SkillItem[];
};

const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Agent Systems",
    eyebrow: "Orchestration",
    summary:
      "I structure multi-step AI flows with typed state, tool calling, and reliable handoffs between models and services.",
    impact: "Designed for workflows that need coordination, validation, and operational control.",
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
    eyebrow: "Applied AI",
    summary:
      "From experimentation to evaluation, I work across training stacks, traditional ML, and model-adaptation workflows.",
    impact: "Useful when projects move between research prototypes and production-adjacent delivery.",
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
    eyebrow: "Storage & Retrieval",
    summary:
      "I work with structured data, retrieval layers, and analytical stores that support both model pipelines and product features.",
    impact: "Built for systems that need context, state, and measurable outputs.",
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
    eyebrow: "Interfaces & APIs",
    summary:
      "I package AI capabilities into usable products with modern backend and frontend tooling across web apps and internal tools.",
    impact: "Focused on moving from isolated models to systems people can actually use.",
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
    eyebrow: "Cloud & MLOps",
    summary:
      "I deploy, version, and monitor technical work with cloud, container, and experiment management tools.",
    impact: "Enough platform depth to make prototypes more repeatable and delivery more dependable.",
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
    eyebrow: "Delivery Tools",
    summary:
      "The day-to-day tooling I use for debugging, experimentation, testing, and shipping work cleanly.",
    impact: "Less glamorous than models, but essential for consistent execution.",
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

const featuredCapability = capabilityGroups[0];
const totalSkills = capabilityGroups.reduce((count, group) => count + group.skills.length, 0);

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
          className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_320px] lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-slate-400">
              Technical Depth
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Built Around Capabilities,
              <span className="block text-cyan-200">Not Just Tool Lists</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              The stack below reflects how I actually work across the archive:
              orchestrating agents, building applications around models, and
              shipping systems that need data, infrastructure, and operational
              clarity.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <Badge className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-slate-200 hover:bg-white/5">
                {totalSkills} selected tools
              </Badge>
              <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
              <span>{capabilityGroups.length} capability tracks</span>
              <ArrowRight className="h-4 w-4 text-slate-500" />
              <span>research to production-adjacent delivery</span>
            </div>
          </div>

          <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.04] shadow-[0_30px_90px_rgba(2,8,23,0.55)] backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Credential
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    AWS Cloud Practitioner
                  </p>
                </div>
              </div>

              <a
                href="https://www.credly.com/share/fed34534-1c50-42d0-8f9f-a268bf2da30b"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-cyan-200/30"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60">
                    <Image
                      src={AWSBadgeImage}
                      alt="AWS Certified Cloud Practitioner badge"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <p className="text-sm leading-7 text-slate-300">
                      Formal cloud fundamentals layered into the broader AI and
                      delivery stack shown here.
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.24em] text-cyan-200">
                      View credential
                    </p>
                  </div>
                </div>
              </a>
            </CardContent>
          </Card>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card overflow-hidden rounded-[2rem] border-white/10 shadow-[0_30px_90px_rgba(2,8,23,0.55)]">
              <CardContent className="p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="rounded-full bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-200 hover:bg-cyan-400/10">
                    Featured capability
                  </Badge>
                  <span className="text-xs uppercase tracking-[0.28em] text-slate-500">
                    {featuredCapability.eyebrow}
                  </span>
                </div>

                <h3 className="mt-8 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  {featuredCapability.title}
                </h3>
                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200">
                  {featuredCapability.summary}
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                  {featuredCapability.impact}
                </p>

                <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      Plan
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Define state, roles, and decision points clearly before
                      model calls multiply complexity.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      Control
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Add structure, validation, and tool boundaries so the
                      system behaves predictably.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      Deliver
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Package the workflow into interfaces and services that can
                      support real operating use.
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {featuredCapability.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200"
                    >
                      <skill.icon className="h-4 w-4" style={{ color: skill.color }} />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Card className="rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_60px_rgba(2,8,23,0.42)] backdrop-blur-xl">
              <CardContent className="p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Operating style
                </p>
                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Systems over isolated demos
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      The stack is selected to connect models, data, interfaces,
                      and deployment instead of treating them as separate tracks.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Breadth with a center of gravity
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      The strongest bias is toward agentic systems, applied AI,
                      and product-facing technical delivery.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_60px_rgba(2,8,23,0.42)] backdrop-blur-xl">
              <CardContent className="p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Archive link
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  These tools appear because they show up in actual project
                  work. Some are primary build choices, others surface in the
                  archive where they support experiments, integrations, or
                  delivery layers.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.22em] text-slate-400">
                  <span>LLM systems</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                  <span>applied ML</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                  <span>full-stack delivery</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
                        {group.eyebrow}
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
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {group.impact}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-200"
                      >
                        <skill.icon className="h-4 w-4" style={{ color: skill.color }} />
                        <span>{skill.name}</span>
                      </div>
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
