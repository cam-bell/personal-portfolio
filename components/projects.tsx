"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Capstone Project – Cloud Cost & Sustainability Advisor",
    description:
      "A web platform that helps small and medium-sized enterprises (SMEs) migrate to the cloud by comparing pricing and carbon emissions across AWS, GCP, and Azure. Includes real-time cloud service data, usage-based calculators, and sustainability insights.",
    techStack: ["React", "Python", "FastAPI", "PostgreSQL", "Google Cloud", "Docker"],
    githubUrl: "https://github.com/cam-bell/Capstone",
    liveUrl: "#",
    image: "/images/cloud-migration-dashboard.png",
  },
  {
    title: "Corporate Project – BHSI Risk Classification System",
    description:
      "Built a risk classification microservice for Berkshire Hathaway Specialty Insurance to automate D&O policy assessments.",
    techStack: ["FastAPI", "Python", "BigQuery", "Google Cloud", "Gemini Pro", "LangChain", "Vector Search"],
    githubUrl: "https://github.com/cam-bell/Capstone",
    liveUrl: "#",
    image: "/images/risk-assessment-top.png",
  },
  {
    title: "SignLearn – Real-Time ASL Detection Game",
    description:
      "Built a computer vision game that teaches American Sign Language using YOLOv8 and a 1,000+ image dataset. Achieved 90% mAP@0.5 with real-time webcam detection, live feedback, and 2 gamified modes. Deployed with React, FastAPI, and Roboflow pipeline.",
    techStack: ["YOLOv8", "Python", "FastAPI", "React", "TypeScript", "Roboflow", "OpenCV"],
    githubUrl: "https://github.com/cam-bell/Capstone",
    liveUrl: "#",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "NLP Review Analyzer – Cross-Platform Sentiment & Emotion Analysis",
    description:
      "Built a multilingual NLP system that analyzes reviews from IMDb, Trustpilot, Steam, and Google Play. Uses HuggingFace transformers and KeyBERT for sentiment, emotion, and keyword extraction with 0% error rate across 239 reviews.",
    techStack: ["Python", "HuggingFace", "spaCy", "KeyBERT", "LaBSE", "VADER", "BERT", "RoBERTa"],
    githubUrl: "https://github.com/cam-bell/NLP-Review-Analyzer",
    liveUrl: "#",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Swimming Pool Detection from Aerial Imagery (YOLOv11)",
    description:
      "Built a YOLOv11 object detection model to identify swimming pools from aerial images. Achieved 95.5% mAP after 30 epochs using transfer learning on a custom-labeled dataset with GroundingDINO + Roboflow.",
    techStack: ["YOLOv11", "GroundingDINO", "Roboflow", "Object Detection", "Python", "OpenCV"],
    githubUrl: "https://github.com/cam-bell/NLP-Review-Analyzer",
    liveUrl: "#",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "MLOps – Diabetes Readmission Prediction Pipeline",
    description:
      "Built a modular, production-ready MLOps system for hospital readmission prediction using CI/CD, Hydra, MLflow, and W&B. Deployed a FastAPI service with real-time inference and Dockerized environment.",
    techStack: ["Python", "scikit-learn", "MLflow", "Hydra", "FastAPI", "W&B", "Docker", "GitHub Actions", "Pytest"],
    githubUrl: "https://github.com/henryaschke/ML_AI_G_3",
    liveUrl: "#",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in software development, data science, and problem-solving
            across various domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild={project.liveUrl !== "#"}>
                      {project.liveUrl !== "#" ? (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      ) : (
                        <>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
