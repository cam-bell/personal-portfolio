"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function Hero3D() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <Card className="w-full h-[90vh] bg-black/[0.96] relative overflow-hidden border-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex h-full">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-100 to-blue-300 mb-6">
                Cameron Bell
              </h1>
              
              <h2 className="text-xl md:text-2xl text-blue-300 font-mono mb-4">
                AI Engineer
              </h2>
              
              <p className="text-lg text-neutral-300 max-w-lg mb-8 leading-relaxed">
                Passionate about building{" "}
                <span className="text-blue-300 font-mono font-semibold bg-blue-500/10 px-2 py-1 rounded">
                  intelligent systems
                </span>{" "}
                that bridge cutting-edge AI research with real-world applications.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 font-sans font-medium"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" asChild className="border-blue-400/50 hover:border-blue-400 hover:bg-blue-500/10">
                    <a href="https://www.linkedin.com/in/cameronsobell/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="border-blue-400/50 hover:border-blue-400 hover:bg-blue-500/10">
                    <a href="https://github.com/cam-bell" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="border-blue-400/50 hover:border-blue-400 hover:bg-blue-500/10">
                    <a href="mailto:cameronsobell@gmail.com">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <motion.button
                onClick={scrollToProjects}
                className="group flex flex-col items-start gap-2 text-neutral-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-mono font-medium tracking-wide">Explore My Work</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-6 w-6 group-hover:text-blue-400 transition-colors duration-300" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Right content - 3D Scene */}
          <div className="flex-1 relative">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
