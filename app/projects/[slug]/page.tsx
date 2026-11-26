import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import ProjectDetail from "../_components/project-detail";
import { projects } from "../project-data";

const projectRouteAliases: Record<string, string> = {
  breakout: "arkanoid",
};

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    ...projects.map(({ slug }) => ({ slug })),
    ...Object.keys(projectRouteAliases).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const projectSlug = projectRouteAliases[slug] ?? slug;
  const project = projects.find((item) => item.slug === projectSlug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} | Anjana Thummodara`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectSlug = projectRouteAliases[slug];

  if (projectSlug) {
    redirect(`/projects/${projectSlug}`);
  }

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
