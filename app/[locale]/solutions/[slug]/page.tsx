import PageHeadline from "@/components/shared/page-headline";
import SolutionHeading from "@/components/solution/solution-heading";
import { SERVICES_DATA } from "@/data/service";
import React from "react";

export default async function SolutionDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const solution = SERVICES_DATA.find((item) => item.slug === slug);

  return (
    <>
      <PageHeadline isSolution headline={solution?.meta.title || "Solution Details"} />
      {/* <SolutionHeading headline={solution?.meta.title || "Solution Details"} /> */}
    </>
  );
}
