"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Download, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">Cameron Bell</h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
            AI Engineer | Machine Learning & Data Science <br />
            MSc Computer Science & Business Technology 
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about building intelligent systems that bridge cutting-edge AI research with real-world applications. Skilled in developing machine learning models, data pipelines, and full-stack AI solutions that drive business impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/cameronsobell/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/cam-bell" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <motion.button
            onClick={scrollToProjects}
            className="animate-bounce"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
