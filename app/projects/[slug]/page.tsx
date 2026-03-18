import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getProjectSlugs,
  getRelatedProjects,
} from "@/lib/projects-data";
import { CaseStudyLayout } from "@/components/projects/case-study-layout";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getProjectSlugs();
}

export function generateMetadata({
  params,
}: ProjectPageProps): Metadata {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Cameron Bell`,
    description: project.homepageSummary,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project);

  return <CaseStudyLayout project={project} relatedProjects={relatedProjects} />;
}
