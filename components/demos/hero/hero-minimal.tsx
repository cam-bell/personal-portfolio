"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function HeroMinimal() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Minimalist Title */}
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-display font-light mb-8 text-slate-900 dark:text-white tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Cameron Bell
          </motion.h1>

          {/* Simple Subtitle */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-sans font-light mb-4">
              AI Engineer
            </p>
            <div className="w-24 h-px bg-slate-300 dark:bg-slate-600 mx-auto"></div>
          </motion.div>

          {/* Clean Description */}
          <motion.p
            className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed font-sans font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building intelligent systems that bridge cutting-edge AI research with real-world applications.
          </motion.p>

          {/* Minimalist CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-sans font-medium px-8 py-3"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
            
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="icon" asChild className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                <a href="https://www.linkedin.com/in/cameronsobell/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                <a href="https://github.com/cam-bell" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                <a href="mailto:cameronsobell@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Simple Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="group flex flex-col items-center gap-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-mono font-medium tracking-wider">SCROLL</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
