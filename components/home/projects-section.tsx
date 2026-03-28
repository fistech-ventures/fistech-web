import { projects } from "@/data/projects";
import { Project } from "@/types";
import React from "react";
import ProjectCard from "../shared/project-card";

export default function ProjectsSection() {
  return (
    <section className="py-6 md:py-8 lg:py-10 xl:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
