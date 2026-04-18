import { IProject } from "@/types";
import React from "react";
import ProjectCard from "../shared/project-card";
import ProjectHeadline from "./project-headline";
import CTAButton from "../shared/cta";

export default function ProjectsSection({
  projects,
  showHeadline = true,
}: {
  projects: IProject[];
  showHeadline?: boolean;
}) {
  return (
    <section className="py-6 md:py-8 lg:py-10 xl:py-16">
      <div className="container">
        {showHeadline && <ProjectHeadline />}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
          {projects.map((project: IProject) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {showHeadline && (
          <div className="flex justify-center  mt-5 md:my-10 lg:mt-20">
            <CTAButton btnText="Discover All Work" href="/projects" />
          </div>
        )}
      </div>
    </section>
  );
}
