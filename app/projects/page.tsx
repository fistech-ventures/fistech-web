import ProjectsSection from "@/components/home/projects-section";
import PageHeadline from "@/components/shared/page-headline";
import { projects } from "@/data/projects";
import React from "react";

export default function ProjectsPage() {
  return (
    <main>
      <PageHeadline headline="Global Projects" />
      <ProjectsSection projects={projects} showHeadline={false} />
    </main>
  );
}
