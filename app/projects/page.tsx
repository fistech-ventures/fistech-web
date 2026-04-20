import React from "react";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { generateProjectsMetadata } from "@/lib/metadata";
import PageHeadline from "@/components/shared/page-headline";
import ProjectsSection from "@/components/home/projects-section";

export const metadata: Metadata = generateProjectsMetadata();

export default function ProjectsPage() {
  return (
    <main>
      <PageHeadline headline="Global Projects" isProject={true} />
      <ProjectsSection projects={projects} showHeadline={false} />
    </main>
  );
}
