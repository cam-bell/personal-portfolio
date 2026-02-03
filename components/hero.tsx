"use client";

import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  Sparkles,
  Code,
  Database,
  Brain,
  Check,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

const floatingIcons = [
  { Icon: Code, delay: 0, x: 12, y: 14 },
  { Icon: Database, delay: 0.5, x: 82, y: 18 },
  { Icon: Brain, delay: 1, x: 16, y: 78 },
  { Icon: Sparkles, delay: 1.5, x: 78, y: 72 },
];

const particles = [
  { id: 1, x: 6, y: 12, size: 2, duration: 8, delay: 0 },
  { id: 2, x: 18, y: 26, size: 1, duration: 10, delay: 1.2 },
  { id: 3, x: 30, y: 18, size: 2, duration: 9, delay: 0.4 },
  { id: 4, x: 44, y: 32, size: 1, duration: 12, delay: 1.6 },
  { id: 5, x: 58, y: 20, size: 2, duration: 8.5, delay: 0.8 },
  { id: 6, x: 72, y: 30, size: 1, duration: 11, delay: 1.4 },
  { id: 7, x: 86, y: 22, size: 2, duration: 9.5, delay: 0.6 },
  { id: 8, x: 12, y: 62, size: 1, duration: 12.5, delay: 1.1 },
  { id: 9, x: 26, y: 72, size: 2, duration: 10.5, delay: 0.2 },
  { id: 10, x: 40, y: 66, size: 1, duration: 13, delay: 1.3 },
  { id: 11, x: 54, y: 74, size: 2, duration: 9, delay: 0.9 },
  { id: 12, x: 68, y: 64, size: 1, duration: 12, delay: 1.7 },
  { id: 13, x: 82, y: 70, size: 2, duration: 8.8, delay: 0.5 },
  { id: 14, x: 92, y: 58, size: 1, duration: 11.5, delay: 1.9 },
];

const statChips = [
  "6+ AI/ML systems built",
  "Hours → minutes Decision Time Automation",
  "30-50% LLM cost reduction via intelligent agent routing",
];

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [emailCopied, setEmailCopied] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -40]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEmailClick = async () => {
    const email = "cameronsobell@gmail.com";

    try {
      window.location.href = `mailto:${email}`;

      setTimeout(async () => {
        try {
          await navigator.clipboard.writeText(email);
          setEmailCopied(true);
          setTimeout(() => setEmailCopied(false), 2000);
        } catch (err) {
          console.log("Clipboard copy failed:", err);
        }
      }, 1000);
    } catch (err) {
      console.log("Email client failed to open:", err);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute -top-24 left-[-10%] h-[420px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.32),transparent_70%)] blur-3xl animate-aurora motion-reduce:animate-none" />
        <div className="absolute top-10 right-[-12%] h-[460px] w-[540px] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(14,165,233,0.28),transparent_70%)] blur-3xl animate-aurora motion-reduce:animate-none" />
        <div className="absolute bottom-[-20%] left-[20%] h-[520px] w-[600px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.2),transparent_70%)] blur-3xl animate-aurora motion-reduce:animate-none" />
        <div className="absolute inset-0 hero-noise opacity-40 mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0)_0%,rgba(2,6,23,0.7)_70%)]" />

        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-blue-300/30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={
                shouldReduceMotion
                  ? { opacity: 0.4 }
                  : {
                      y: [0, -18, 0],
                      opacity: [0.2, 0.8, 0.2],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: particle.duration,
                      repeat: Infinity,
                      delay: particle.delay,
                      ease: "easeInOut",
                    }
              }
            />
          ))}
        </div>

        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={
            shouldReduceMotion ? { opacity: 0.2 } : { scale: [1, 1.12, 1] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center"
        >
          <div className="text-center lg:text-left">
            <div className="relative mb-6">
              {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                  key={index}
                  className="absolute text-blue-300/40"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    shouldReduceMotion
                      ? { opacity: 0.4 }
                      : {
                          opacity: [0, 0.6, 0],
                          scale: [0, 1, 0],
                          rotate: [0, 180, 360],
                        }
                  }
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : {
                          duration: 6,
                          repeat: Infinity,
                          delay,
                          ease: "easeInOut",
                        }
                  }
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
              ))}
            </div>

            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-semibold mb-5 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Cameron Bell
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl text-slate-200/90 mb-8 font-sans font-medium leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="inline-block font-mono text-blue-200">
                AI Engineer
              </span>
              <motion.span
                className="mx-2 text-blue-300 font-mono"
                animate={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: [0, 1, 0] }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { duration: 1.6, repeat: Infinity }
                }
              >
                |
              </motion.span>
              <span className="inline-block">
                Agentic AI, LLM Orchestration & Machine Learning
              </span>
              <br />
              <span className="text-lg sm:text-xl text-blue-100/80 font-sans font-light">
                MSc Computer Science & Business Technology
              </span>
            </motion.h2>

            <motion.div
              className="max-w-3xl lg:max-w-none mb-10 font-sans text-slate-200/85"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <p className="text-lg sm:text-xl leading-relaxed">
                I build multi-agent systems that orchestrate LLMs, tools, and
                data pipelines to solve real operational problems.
              </p>
              <p className="mt-4 text-base sm:text-lg text-slate-200/70">
                Recent work spans multi-agent risk classification, autonomous
                research workflows, and LLM-driven trading simulations.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Agent orchestration",
                  "Structured LLM outputs",
                  "Observability",
                  "Full-stack deployment",
                ].map((item) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.35)] backdrop-blur"
                    whileHover={
                      shouldReduceMotion ? undefined : { scale: 1.02 }
                    }
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                    <span className="text-sm sm:text-base font-medium text-slate-100">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 text-white border border-white/10 backdrop-blur-md shadow-[0_0_24px_rgba(59,130,246,0.25)] hover:bg-white/15 hover:border-white/20 transition-all duration-300 font-sans font-medium"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/resume.pdf";
                    link.download = "Cameron_Bell_Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </motion.div>

              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={
                    shouldReduceMotion ? undefined : { scale: 1.06, rotate: 4 }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-11 w-11 border-blue-300/40 hover:border-blue-300 hover:bg-blue-500/10 shadow-[0_0_18px_rgba(59,130,246,0.15)] transition-all duration-300"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/cameronsobell/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={
                    shouldReduceMotion ? undefined : { scale: 1.06, rotate: 4 }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.85 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-11 w-11 border-blue-300/40 hover:border-blue-300 hover:bg-blue-500/10 shadow-[0_0_18px_rgba(59,130,246,0.15)] transition-all duration-300"
                    asChild
                  >
                    <a
                      href="https://github.com/cam-bell"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={
                    shouldReduceMotion ? undefined : { scale: 1.06, rotate: 4 }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-11 w-11 border-blue-300/40 hover:border-blue-300 hover:bg-blue-500/10 shadow-[0_0_18px_rgba(59,130,246,0.15)] transition-all duration-300"
                    onClick={handleEmailClick}
                    title={emailCopied ? "Email copied!" : "Send email"}
                    aria-label={emailCopied ? "Email copied" : "Email"}
                  >
                    {emailCopied ? (
                      <Check className="h-5 w-5 text-emerald-400" />
                    ) : (
                      <Mail className="h-5 w-5" />
                    )}
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToProjects}
                className="group flex flex-col items-center lg:items-start gap-2 text-slate-300 hover:text-white transition-colors duration-300"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
              >
                <span className="text-sm font-mono font-medium tracking-wide">
                  Explore My Work
                </span>
                <motion.div
                  animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                >
                  <ChevronDown className="h-6 w-6 group-hover:text-blue-300 transition-colors duration-300" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_24px_80px_rgba(15,23,42,0.55)] backdrop-blur-md"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -6, 0],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 via-cyan-300/10 to-transparent blur-2xl" />
                  <div className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full border border-white/20 bg-slate-900/60 shadow-[0_12px_40px_rgba(15,23,42,0.55)]">
                    <img
                      src="/avatar.png"
                      alt="Cameron Bell"
                      className="h-full w-full rounded-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="grid w-full gap-3">
                  {statChips.map((chip) => {
                    const [emphasis, ...rest] = chip.split(" ");
                    return (
                      <motion.div
                        key={chip}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-slate-100/85 shadow-[0_12px_36px_rgba(15,23,42,0.35)]"
                        whileHover={
                          shouldReduceMotion ? undefined : { scale: 1.02 }
                        }
                      >
                        <span className="mr-2 inline-flex items-center rounded-full border border-cyan-200/30 bg-cyan-500/10 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cyan-100">
                          {emphasis}
                        </span>
                        <span className="align-middle">
                          {rest.join(" ")}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
