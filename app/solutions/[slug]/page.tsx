import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutions } from "@/data/solutions";
import { generateSolutionMetadata } from "@/lib/metadata";
import PageHeadline from "@/components/shared/page-headline";
import WhyChooseUs from "@/components/solution/why-choose-us";
import SolutionHero from "@/components/solution/solution-hero";
import {
  generateBreadcrumbSchema,
  generateSolutionSchema,
  toJsonLd,
} from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    return {
      title: "Solution Not Found",
      robots: { index: false, follow: false },
    };
  }

  return generateSolutionMetadata(solution, {
    path: `/solutions/${slug}`,
  });
}

export default async function SolutionDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) return notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(generateSolutionSchema(solution)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Solutions", href: "/solutions" },
              { name: solution.title, href: `/solutions/${slug}` },
            ]),
          ),
        }}
      />
      <PageHeadline
        isSolution
        headline={solution?.title || "Solution Details"}
      />
      <SolutionHero hero={solution?.hero} />
      <WhyChooseUs whyChooseUs={solution?.whyChooseUs} />
    </>
  );
}
