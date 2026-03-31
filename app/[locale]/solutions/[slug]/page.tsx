import React from "react";

export default async function SolutionDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <div></div>;
}
