import PageHeadline from "@/components/shared/page-headline";
import SolutionHero from "@/components/solution/solution-hero";
import WhyChooseUs from "@/components/solution/why-choose-us";
import { solutions } from "@/data/solutions";
import { generateSolutionMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import React from "react";

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

  return (
    <>
      <PageHeadline
        isSolution
        headline={solution?.title || "Solution Details"}
      />
      <SolutionHero hero={solution?.hero} />
      <WhyChooseUs whyChooseUs={solution?.whyChooseUs} />
    </>
  );
}
