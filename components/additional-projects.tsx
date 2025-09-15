"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, FileText } from "lucide-react"
import { motion } from "framer-motion"

const additionalProjects = [
  {
    title: "Gapminder Global Trends – Regression & K-Means Clustering",
    description:
      "Analyzed 50+ years of global development data using visual analytics, linear regression, and clustering. Uncovered patterns across GDP, life expectancy, and population trends with animated storytelling.",
    githubUrl: "#",
    colabUrl: null,
    techStack: ["pandas", "seaborn", "plotly", "regression", "clustering", "visual storytelling"],
  },
  {
    title: "KNN Classifier – Breast Cancer Detection",
    description:
      "Developed a full scikit-learn pipeline to classify breast cancer cases with 94.2% test accuracy. Tuned `k` using cross-validation and visualized error curves for model complexity.",
    githubUrl: "#",
    colabUrl: null,
    techStack: ["KNN", "scikit-learn", "classification", "pipelines", "data preprocessing"],
  },
  {
    title: "XGBoost vs Logistic Regression – Diabetes Prediction",
    description:
      "Trained and benchmarked XGBoost and Logistic Regression on an imbalanced diabetes dataset. Achieved 75.3% with XGBoost and 81.2% with Logistic Regression, recommending the simpler model.",
    githubUrl: "#",
    colabUrl: null,
    techStack: ["XGBoost", "logistic regression", "model comparison", "GridSearchCV"],
  },
  {
    title: "Used Car Price Prediction – Multi-Country Regression",
    description:
      "Built a regression model to predict used car prices across 8 countries using 100K listings. Cleaned outliers, engineered features, and tuned tree-based models (Random Forest, Gradient Boosting) to reach R² = 0.867 and MAE ≈ €2,660.",
    githubUrl: "#",
    colabUrl: null,
    techStack: ["pandas", "scikit-learn", "Random Forest", "Gradient Boosting", "ANOVA"],
  },
  {
    title: "Customer Churn Classifier – Gradient Boosting + SMOTE",
    description:
      "Built a churn prediction model using stratified 5-fold CV, SMOTE, and Gradient Boosting. Achieved 93.2% accuracy and F1 = 0.926, improving baseline accuracy by +8.2 percentage points.",
    githubUrl: "#",
    colabUrl: null,
    techStack: ["scikit-learn", "SMOTE", "Gradient Boosting", "classification", "stratified CV"],
  },
]

export function AdditionalProjects() {
  return (
    <section id="additional-projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Additional Projects / Coursework</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            A selection of smaller projects, labs, and coursework demonstrating breadth of skills and experimentation
            across software engineering, AI/ML, and data science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {additionalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300 border-muted">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1">
                    {project.techStack?.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Button variant="outline" size="sm" className="flex-1 text-xs bg-transparent" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.githubUrl === "#" && (
                      <Button variant="outline" size="sm" className="flex-1 text-xs bg-transparent" disabled>
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    )}
                    {project.colabUrl && project.colabUrl !== "#" && (
                      <Button variant="outline" size="sm" className="flex-1 text-xs bg-transparent" asChild>
                        <a href={project.colabUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="mr-1 h-3 w-3" />
                          Colab
                        </a>
                      </Button>
                    )}
                    {project.colabUrl === "#" && (
                      <Button variant="outline" size="sm" className="flex-1 text-xs bg-transparent" disabled>
                        <FileText className="mr-1 h-3 w-3" />
                        Colab
                      </Button>
                    )}
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
