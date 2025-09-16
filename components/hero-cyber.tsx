"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown, Terminal, Code2, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroCyber() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const texts = [
    "AI Engineer",
    "ML Researcher", 
    "Data Scientist",
    "Tech Innovator"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < texts[textIndex].length) {
          setCurrentText(texts[textIndex].slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, texts]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0"
            style={{
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Cyber Title */}
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            CAMERON BELL
          </motion.h1>

          {/* Terminal-style Subtitle */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Terminal className="h-6 w-6 text-cyan-400" />
              <span className="text-cyan-400 font-mono text-lg">$ whoami</span>
            </div>
            <div className="text-2xl sm:text-3xl font-mono text-green-400">
              {currentText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-cyan-400"
              >
                |
              </motion.span>
            </div>
          </motion.div>

          {/* Cyber Description */}
          <motion.p
            className="text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-gray-300 font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-cyan-400">//</span> Building the future with{" "}
            <span className="text-green-400 font-semibold">intelligent systems</span>{" "}
            and <span className="text-purple-400 font-semibold">machine learning</span>{" "}
            solutions that drive innovation.
          </motion.p>

          {/* Cyber CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 border border-cyan-400/50 shadow-lg shadow-cyan-500/25 font-mono font-medium"
            >
              <Download className="mr-2 h-4 w-4" />
              ./download_resume.sh
            </Button>
            
            <div className="flex items-center gap-4">
              {[
                { href: "https://www.linkedin.com/in/cameronsobell/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/cam-bell", icon: Github, label: "GitHub" },
                { href: "mailto:cameronsobell@gmail.com", icon: Mail, label: "Email" }
              ].map(({ href, icon: Icon, label }, index) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300"
                    asChild
                  >
                    <a
                      href={href}
                      target={href.startsWith("mailto:") ? "_self" : "_blank"}
                      rel={href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cyber Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="group flex flex-col items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-sm font-mono font-medium tracking-wider">EXECUTE</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="h-6 w-6 group-hover:text-cyan-300 transition-colors duration-300" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
