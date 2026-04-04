/* eslint-disable @typescript-eslint/no-explicit-any */
import { projects } from "@/data/projects";
import ProjectDiscovery from "@/components/projects/ProjectDiscovery";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectImpact from "@/components/projects/ProjectImpact";
import { notFound } from "next/navigation";

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
        imageSrc={project.gallery?.[0] || project.heroImage}
      />
      <ProjectGallery
        imageOneSrc={
          project.gallery?.[1] ||
          "https://anio-wp.egenstheme.com/wp-content/uploads/2026/01/portfolio-dt-gallery-img5.webp"
        }
        imageTwoSrc={
          project.gallery?.[2] ||
          "https://anio-wp.egenstheme.com/wp-content/uploads/2026/01/portfolio-dt-gallery-img6.webp"
        }
        mainImageSrc={
          project.gallery?.[3] ||
          "https://anio-wp.egenstheme.com/wp-content/uploads/2026/01/portfolio-dt-gallery-img7.webp"
        }
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
