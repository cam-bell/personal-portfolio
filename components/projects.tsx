"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Zap, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Capstone Project – Cloud Cost & Sustainability Advisor",
    description:
      "A web platform that helps small and medium-sized enterprises (SMEs) migrate to the cloud by comparing pricing and carbon emissions across AWS, GCP, and Azure. Includes real-time cloud service data, usage-based calculators, and sustainability insights.",
    techStack: [
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Google Cloud",
      "Docker",
    ],
    githubUrl: "https://github.com/cam-bell/Capstone",
    liveUrl: "#",
    image: "/images/cloud-migration-dashboard.png",
    category: "Full-Stack",
  },
  {
    title: "Corporate Project – BHSI Risk Classification System",
    description:
      "Built a risk classification microservice for Berkshire Hathaway Specialty Insurance to automate D&O policy assessments.",
    techStack: [
      "FastAPI",
      "Python",
      "BigQuery",
      "Google Cloud",
      "Gemini Pro",
      "LangChain",
      "Vector Search",
    ],
    githubUrl: "https://github.com/cam-bell/bhsi-risk-assessment-platform",
    liveUrl: "#",
    image: "/images/risk-assessment-top.png",
    category: "AI/ML",
  },
  {
    title: "SignLearn – Real-Time ASL Detection Game",
    description:
      "Built a computer vision game that teaches American Sign Language using YOLOv8 and a 1,000+ image dataset. Achieved 90% mAP@0.5 with real-time webcam detection, live feedback, and 2 gamified modes. Deployed with React, FastAPI, and Roboflow pipeline.",
    techStack: [
      "YOLOv8",
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Roboflow",
      "OpenCV",
    ],
    githubUrl: "https://github.com/sophiaecl/ASL-CV-Backend",
    liveUrl: "#",
    image: "/images/sign-learn.png",
    category: "Computer Vision",
  },
  {
    title: "NLP Review Analyzer – Cross-Platform Sentiment & Emotion Analysis",
    description:
      "Built a multilingual NLP system that analyzes reviews from IMDb, Trustpilot, Steam, and Google Play. Uses HuggingFace transformers and KeyBERT for sentiment, emotion, and keyword extraction with 0% error rate across 239 reviews.",
    techStack: [
      "Python",
      "HuggingFace",
      "spaCy",
      "KeyBERT",
      "LaBSE",
      "VADER",
      "BERT",
      "RoBERTa",
    ],
    githubUrl: "https://github.com/felixhommels/reviews-group-nlp",
    liveUrl: "#",
    image: "/images/review-analyzer.png",
    category: "NLP",
  },
  {
    title: "Swimming Pool Detection from Aerial Imagery (YOLOv11)",
    description:
      "Built a YOLOv11 object detection model to identify swimming pools from aerial images. Achieved 95.5% mAP after 30 epochs using transfer learning on a custom-labeled dataset with GroundingDINO + Roboflow.",
    techStack: [
      "YOLOv11",
      "GroundingDINO",
      "Roboflow",
      "Object Detection",
      "Python",
      "OpenCV",
    ],
    githubUrl: "https://github.com/cam-bell/NLP-Review-Analyzer",
    liveUrl: "#",
    image: "/images/pool-detection.jpeg",
    category: "Computer Vision",
  },
  {
    title: "MLOps – Diabetes Readmission Prediction Pipeline",
    description:
      "Built a modular, production-ready MLOps system for hospital readmission prediction using CI/CD, Hydra, MLflow, and W&B. Deployed a FastAPI service with real-time inference and Dockerized environment.",
    techStack: [
      "Python",
      "scikit-learn",
      "MLflow",
      "Hydra",
      "W&B",
      "Docker",
      "GitHub Actions",
      "Pytest",
    ],
    githubUrl: "https://github.com/kollie/mlops-project-ci",
    liveUrl: "#",
    image: "/images/mlops.png",
    category: "MLOps",
  },
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Featured Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6 leading-tight">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of cutting-edge projects spanning machine learning,
            computer vision, NLP, and full-stack development. Each project
            demonstrates modern AI engineering practices and production-ready
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isHovered = hoveredProject === project.title;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group"
              >
                <Card
                  className={`
                    h-full flex flex-col overflow-hidden
                    transition-all duration-500 ease-out
                    ${
                      isHovered
                        ? "shadow-2xl shadow-primary/20 scale-[1.02] border-primary/20"
                        : "shadow-lg hover:shadow-xl"
                    }
                  `}
                >
                  {/* Project Image with Overlay */}
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className={`
                        w-full h-full object-cover transition-all duration-700
                        ${isHovered ? "scale-110" : "scale-100"}
                      `}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant="secondary"
                        className="backdrop-blur-sm bg-background/80"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="flex-grow space-y-3">
                    <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>

                    {/* Tech Stack Badges - Simple style under title */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 8).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 8 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.techStack.length - 8} more
                        </Badge>
                      )}
                    </div>

                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`
                          w-full transition-all duration-300
                          ${
                            isHovered
                              ? "bg-primary text-primary-foreground border-primary"
                              : ""
                          }
                        `}
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                      {/* TODO: Uncomment when live demos are ready
                      <Button
                        size="sm"
                        className="flex-1 transition-all duration-300 hover:shadow-lg hover:scale-105"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or learning more about these projects?
          </p>
          <Button size="lg" className="group">
            <Brain className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
