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
import { Github, FileText, ExternalLink, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const additionalProjects = [
  {
    title: "Gapminder Global Trends – Regression & K-Means Clustering",
    description:
      "Analyzed 50+ years of global development data using visual analytics, linear regression, and clustering. Uncovered patterns across GDP, life expectancy, and population trends with animated storytelling.",
    githubUrl: "#",
    colabUrl: null,
    techStack: [
      "Pandas",
      "Seaborn",
      "plotly",
      "Regression",
      "Clustering",
      "Visual storytelling",
    ],
  },
  {
    title: "KNN Classifier – Breast Cancer Detection",
    description:
      "Developed a full scikit-learn pipeline to classify breast cancer cases with 94.2% test accuracy. Tuned `k` using cross-validation and visualized error curves for model complexity.",
    githubUrl: "#",
    colabUrl: null,
    techStack: [
      "KNN",
      "scikit-learn",
      "Classification",
      "Pipelines",
      "Data Preprocessing",
    ],
  },
  {
    title: "XGBoost vs Logistic Regression – Diabetes Prediction",
    description:
      "Trained and benchmarked XGBoost and Logistic Regression on an imbalanced diabetes dataset. Achieved 75.3% with XGBoost and 81.2% with Logistic Regression, recommending the simpler model.",
    githubUrl: "#",
    colabUrl: null,
    techStack: [
      "XGBoost",
      "Logistic Regression",
      "Model Comparison",
      "GridSearchCV",
    ],
  },
  {
    title: "Used Car Price Prediction – Multi-Country Regression",
    description:
      "Built a regression model to predict used car prices across 8 countries using 100K listings. Cleaned outliers, engineered features, and tuned tree-based models (Random Forest, Gradient Boosting) to reach R² = 0.867 and MAE ≈ €2,660.",
    githubUrl: "#",
    colabUrl: null,
    techStack: [
      "Pandas",
      "scikit-learn",
      "Random Forest",
      "Gradient Boosting",
      "ANOVA",
    ],
  },
  {
    title: "Customer Churn Classifier – Gradient Boosting + SMOTE",
    description:
      "Built a churn prediction model using stratified 5-fold CV, SMOTE, and Gradient Boosting. Achieved 93.2% accuracy and F1 = 0.926, improving baseline accuracy by +8.2 percentage points.",
    githubUrl: "#",
    colabUrl: null,
    techStack: [
      "scikit-learn",
      "SMOTE",
      "Gradient Boosting",
      "Classification",
      "Stratified CV",
    ],
  },
];

export function AdditionalProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="additional-projects"
      className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Additional Projects
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent mb-6">
              Coursework & Experiments
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A curated collection of smaller projects, labs, and coursework
              showcasing
              <span className="text-primary font-semibold">
                {" "}
                breadth of experimentation
              </span>{" "}
              across software engineering, AI/ML, and data science domains.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {additionalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 40, scale: 0.95 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group flex"
            >
              <Card className="h-full bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-primary/30 transition-all duration-500 flex flex-col relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/10">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="absolute inset-[1px] rounded-lg bg-slate-900/50 backdrop-blur-sm" />

                <div className="relative z-10 flex flex-col h-full">
                  <CardHeader className="pb-6 flex-shrink-0">
                    <CardTitle className="text-lg leading-tight font-semibold group-hover:text-primary transition-colors duration-300 mb-3">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 min-h-[4.5rem]">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 flex flex-col flex-grow">
                    {/* Visual Filler Area - Subtle pattern for empty space */}
                    <div className="flex-grow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-full h-full relative">
                        {/* Subtle geometric pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 rounded-lg" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-16 h-16 border border-primary/10 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 border border-primary/20 rounded-full flex items-center justify-center">
                              <div className="w-3 h-3 bg-primary/20 rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Badges - Bottom aligned, just above buttons */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack?.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={
                            isInView
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.8 }
                          }
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + techIndex * 0.05 + 0.3,
                          }}
                        >
                          <Badge
                            variant="outline"
                            className="text-xs px-3 py-1.5 bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group-hover:scale-105"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons - Always at bottom */}
                    <div className="flex gap-2">
                      {project.githubUrl && project.githubUrl !== "#" ? (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 text-xs bg-transparent hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 group-hover:scale-105"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <Github className="h-3 w-3" />
                            Code
                            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 text-xs bg-muted/50 border-muted text-muted-foreground cursor-not-allowed"
                          disabled
                        >
                          <Github className="mr-2 h-3 w-3" />
                          Code
                        </Button>
                      )}

                      {project.colabUrl && project.colabUrl !== "#" ? (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 text-xs bg-transparent hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300 group-hover:scale-105"
                          asChild
                        >
                          <a
                            href={project.colabUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <FileText className="h-3 w-3" />
                            Colab
                            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </a>
                        </Button>
                      ) : project.colabUrl === "#" ? (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 text-xs bg-muted/50 border-muted text-muted-foreground cursor-not-allowed"
                          disabled
                        >
                          <FileText className="mr-2 h-3 w-3" />
                          Colab
                        </Button>
                      ) : null}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
