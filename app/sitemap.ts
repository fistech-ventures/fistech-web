import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { ICaseStudy, ISolution } from "@/types";
import { CASE_STUDIES } from "@/data/case-studies";
import { solutions } from "@/data/solutions";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://fistechventures.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/solutions`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/case-studies`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: project.date ? new Date(project.date) : now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const solutionPages: MetadataRoute.Sitemap = solutions.map(
    (solution: ISolution) => ({
      url: `${SITE_URL}/solutions/${solution.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }),
  );

  const caseStudyPages: MetadataRoute.Sitemap = CASE_STUDIES.map(
    (cs: ICaseStudy) => ({
      url: `${SITE_URL}/case-studies/${cs.slug}`,
      lastModified: cs.metadata.publishDate
        ? new Date(cs.metadata.publishDate)
        : now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }),
  );

  return [...staticPages, ...projectPages, ...solutionPages, ...caseStudyPages];
}
