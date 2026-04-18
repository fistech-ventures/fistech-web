/* eslint-disable @typescript-eslint/no-explicit-any */
import { projects } from "@/data/projects";
import ProjectDiscovery from "@/components/projects/ProjectDiscovery";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectImpact from "@/components/projects/ProjectImpact";
import { notFound } from "next/navigation";
import PageHeadline from "@/components/shared/page-headline";
import { Metadata } from "next";
import { generateProjectMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }

  return generateProjectMetadata(project, {
    path: `/projects/${slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Find project
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  // Extract sections safely
  const visionSection = project.sections?.find(
    (s) => s.type === "vision",
  ) as any;
  const solutionSection = project.sections?.find(
    (s) => s.type === "solution",
  ) as any;
  const metricsSection = project.sections?.find(
    (s) => s.type === "metrics",
  ) as any;

  let nextProjectIdx = projects.findIndex((p) => p.slug === slug) + 1;
  let prevProjectIdx = projects.findIndex((p) => p.slug === slug) - 1;

  if (prevProjectIdx < 0) prevProjectIdx = projects.length - 1;

  if (nextProjectIdx >= projects.length) nextProjectIdx = 0;

  const nextProjectTitle =
    projects.find((p) => p.slug === projects[nextProjectIdx]?.slug)?.title ||
    "Next Project";
  const prevProjectTitle =
    projects.find((p) => p.slug === projects[prevProjectIdx]?.slug)?.title ||
    "Previous Project";

  const nextProjectSlug =
    projects.find((p) => p.slug === projects[nextProjectIdx]?.slug)?.slug ||
    "next-project";
  const prevProjectSlug =
    projects.find((p) => p.slug === projects[prevProjectIdx]?.slug)?.slug ||
    "previous-project";

  return (
    <div className="">
      <PageHeadline headline={project.title} isProject={true} />
      <ProjectHero
        title={project.title}
        categories={project.categories || []}
        client={project.client || "Confidential"}
        date={project.date || ""}
        websiteUrl={project.websiteUrl || ""}
        heroImage={project.heroImage || ""}
        gallery={project.gallery || []}
      />
      <ProjectDiscovery
        visionData={visionSection}
        imageSrc={project.gallery?.[3] || project.heroImage}
      />
      <ProjectGallery
        imageOneSrc={project.gallery?.[4]}
        imageTwoSrc={project.gallery?.[5]}
        mainImageSrc={project.gallery?.[6]}
        imageAlt={`${project.title} Gallery Images`}
      />
      <ProjectImpact
        solutionData={solutionSection}
        metricsData={metricsSection}
        nextProjectSlug={nextProjectSlug}
        prevProjectSlug={prevProjectSlug}
        nextProjectTitle={nextProjectTitle}
        prevProjectTitle={prevProjectTitle}
      />
    </div>
  );
}
