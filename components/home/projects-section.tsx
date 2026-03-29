import { projects } from "@/data/projects";
import { Project } from "@/types";
import React from "react";
import ProjectCard from "../shared/project-card";
import ProjectHeadline from "./project-headline";
import CTAButton from "../shared/cta";

export default function ProjectsSection() {
  return (
    <section className="py-6 md:py-8 lg:py-10 xl:py-16">
      <div className="container">
        <ProjectHeadline />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex justify-center  mt-5 md:mt-10 lg:mt-20">
          <CTAButton  btnText="Discover All Projects" href="/projects"/>
        </div>
      </div>
    </section>
  );
}
