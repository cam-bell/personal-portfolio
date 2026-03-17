"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export function Hero() {
  const [emailCopied, setEmailCopied] = useState(false);
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const contentY = useTransform(scrollY, [0, 320], [0, -28]);
  const contentOpacity = useTransform(scrollY, [0, 320], [1, 0.2]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Cameron_Bell_CV_AI_Engineer.pdf";
    link.download = "Cameron_Bell_AI_Engineer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      className="relative flex min-h-[calc(100vh-2rem)] items-center overflow-hidden bg-slate-950 pt-20 pb-10 sm:pt-24 sm:pb-12"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_34%),radial-gradient(circle_at_78%_22%,rgba(45,212,191,0.12),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_55%,#020617_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:84px_84px]" />
        <div className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,rgba(15,23,42,0.16),transparent)]" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-56 w-[42rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(15,23,42,0.08),transparent_70%)]" />
        <div className="hero-noise absolute inset-0 opacity-20 mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.74)_78%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.9fr)] lg:gap-14"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mx-auto flex max-w-xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <motion.div
              className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-cyan-100/85 backdrop-blur-md"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
              AI Engineer
              <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-flex" />
              <span className="hidden text-slate-300/80 sm:inline">
                MSc Computer Science & Business Technology
              </span>
            </motion.div>

            <motion.h1
              className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.6rem] lg:leading-[0.95]"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
            >
              Cameron Bell
            </motion.h1>

            <motion.h2
              className="mt-4 max-w-2xl text-xl font-medium leading-8 text-slate-100/92 sm:text-2xl lg:text-[1.75rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.26 }}
            >
              AI Engineer building agentic systems that turn operational
              complexity into decisive action.
            </motion.h2>

            <motion.p
              className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32 }}
            >
              I design multi-agent workflows that coordinate LLMs, tools, and ML
              production pipelines so teams can move from manual decision-making
              to reliable automation across research, risk, and execution-heavy
              environments.
            </motion.p>

            <motion.div
              className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center lg:justify-start"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="group h-11 bg-white px-5 text-sm font-semibold text-slate-950 shadow-[0_18px_48px_rgba(255,255,255,0.12)] transition-all duration-300 hover:bg-cyan-100"
                >
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  onClick={downloadResume}
                  className="h-11 border-white/15 bg-white/5 px-5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.58 }}
            >
              <Button
                variant="ghost"
                onClick={handleEmailClick}
                className="h-auto px-0 text-sm text-slate-300 hover:bg-transparent hover:text-white"
              >
                {emailCopied ? (
                  <Check className="mr-2 h-4 w-4 text-emerald-400" />
                ) : (
                  <Mail className="mr-2 h-4 w-4" />
                )}
                {emailCopied ? "Email copied" : "cameronsobell@gmail.com"}
              </Button>

              <div className="hidden h-4 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 rounded-full border-white/12 bg-white/5 text-slate-200 backdrop-blur-md hover:border-cyan-200/30 hover:bg-white/10 hover:text-white"
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

                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 rounded-full border-white/12 bg-white/5 text-slate-200 backdrop-blur-md hover:border-cyan-200/30 hover:bg-white/10 hover:text-white"
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
              </div>
            </motion.div>

            <motion.button
              onClick={scrollToProjects}
              className="group mt-10 hidden items-center gap-3 text-sm uppercase tracking-[0.24em] text-slate-400 transition-colors duration-300 hover:text-slate-100 lg:inline-flex"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72 }}
              whileHover={shouldReduceMotion ? undefined : { x: 4 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <span>Scroll for selected work</span>
              <motion.span
                animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </motion.button>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-[28rem] lg:max-w-[31rem]"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28 }}
          >
            <div className="absolute inset-x-[14%] top-8 h-14 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))] opacity-90" />

            <motion.div
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_90px_rgba(2,6,23,0.55)] backdrop-blur-md sm:p-4"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { y: [0, -7, 0], rotate: [0, -0.5, 0] }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
            >
              <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(103,232,249,0.14),transparent)]" />
              <div className="absolute inset-y-5 left-5 w-px bg-white/10" />
              <div className="absolute inset-y-5 right-5 w-px bg-white/10" />
              <div className="absolute inset-x-7 bottom-7 h-px bg-white/10" />

              <div className="relative rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.14),transparent_55%),linear-gradient(180deg,rgba(15,23,42,0.58),rgba(2,6,23,0.88))] p-4 sm:p-5">
                <div className="absolute left-6 top-6 text-[0.65rem] font-medium uppercase tracking-[0.26em] text-slate-400">
                  Portrait
                </div>

                <div className="relative mx-auto mt-9 aspect-[4/5] w-full max-w-[23rem] overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900/60 lg:max-w-[24rem]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.22),transparent_28%),linear-gradient(180deg,rgba(14,165,233,0.1),transparent_30%),linear-gradient(180deg,transparent_48%,rgba(2,6,23,0.44)_100%)]" />
                  <Image
                    src="/images/cameron-avatar.png"
                    alt="Portrait of Cameron Bell"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 40vw, 80vw"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
