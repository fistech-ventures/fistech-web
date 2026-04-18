import ProjectsSection from "@/components/home/projects-section";
import PageHeadline from "@/components/shared/page-headline";
import { projects } from "@/data/projects";
import { generateProjectsMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = generateProjectsMetadata();

export default function ProjectsPage() {
  return (
    <main>
      <PageHeadline headline="Global Projects" isProject={true} />
      <ProjectsSection projects={projects} showHeadline={false} />
    </main>
  );
}
