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
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [emailCopied, setEmailCopied] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
      // Try to open email client
      window.location.href = `mailto:${email}`;

      // Fallback: copy to clipboard after a short delay
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

  const floatingIcons = [
    { Icon: Code, delay: 0, x: 10, y: 20 },
    { Icon: Database, delay: 0.5, x: 85, y: 15 },
    { Icon: Brain, delay: 1, x: 15, y: 80 },
    { Icon: Sparkles, delay: 1.5, x: 80, y: 75 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Interactive cursor trail */}
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating Tech Icons */}
          <div className="relative mb-8">
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
              <motion.div
                key={index}
                className="absolute text-blue-400/40"
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                }}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
            ))}
          </div>

          {/* Main Title with Gradient */}
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Cameron Bell
          </motion.h1>

          {/* Subtitle with Typewriter Effect */}
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-sans font-medium tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="inline-block font-mono text-blue-300">
              AI Engineer
            </span>
            <motion.span
              className="mx-2 text-blue-400 font-mono"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              |
            </motion.span>
            <span className="inline-block">
              Machine Learning & Data Science
            </span>
            <br />
            <span className="text-lg sm:text-xl text-blue-200/80 font-sans font-light">
              MSc Computer Science & Business Technology
            </span>
          </motion.h2>

          {/* Description with Staggered Animation */}
          <motion.p
            className="text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-sans font-normal text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about building{" "}
            <motion.span
              className="text-blue-300 font-mono font-semibold bg-blue-500/10 px-2 py-1 rounded"
              whileHover={{ scale: 1.05 }}
            >
              intelligent systems
            </motion.span>{" "}
            that bridge cutting-edge AI research with real-world applications.
            Skilled in developing{" "}
            <motion.span
              className="text-blue-300 font-mono font-semibold bg-blue-500/10 px-2 py-1 rounded"
              whileHover={{ scale: 1.05 }}
            >
              machine learning models
            </motion.span>
            , data pipelines, and full-stack AI solutions that drive business
            impact.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-sans font-medium"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>

            <div className="flex items-center gap-4">
              {/* LinkedIn Button */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/cameronsobell/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>

              {/* GitHub Button */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://github.com/cam-bell"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>

              {/* Email Button */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                  onClick={handleEmailClick}
                  title={emailCopied ? "Email copied!" : "Send email"}
                  aria-label={
                    emailCopied ? "Email copied to clipboard" : "Email"
                  }
                >
                  {emailCopied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Mail className="h-4 w-4" />
                  )}
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-sm font-mono font-medium tracking-wide">
                Explore My Work
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="h-6 w-6 group-hover:text-blue-400 transition-colors duration-300" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
