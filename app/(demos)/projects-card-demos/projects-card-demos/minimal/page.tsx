import { ArchiveCardDemoGrid } from "@/components/projects/archive-card-demo-grid";
import { Project, getProjectBySlug } from "@/lib/projects-data";

const demoSlugs = [
  "bhsi-risk-classification-system",
  "deep-research-workflow",
  "healthcare-readmission-risk-mlops-pipeline",
  "langgraph-autonomous-task-agent",
  "customer-churn-modelling",
  "used-vehicle-pricing-valuation-model",
];

export default function MinimalProjectsCardDemoPage() {
  const projects = demoSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => Boolean(project));

  return <ArchiveCardDemoGrid projects={projects} variant="minimal" />;
}
