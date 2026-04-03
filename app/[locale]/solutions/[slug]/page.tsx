import PageHeadline from "@/components/shared/page-headline";
import SolutionHero from "@/components/solution/solution-hero";
import WhyChooseUs from "@/components/solution/why-choose-us";
import { solutions } from "@/data/service";
import React from "react";

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
