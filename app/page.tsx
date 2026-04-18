import Banner from "@/components/home/banner";
import CaseStudies from "@/components/home/case-studies";
import ProjectsSection from "@/components/home/projects-section";
import Step from "@/components/home/step";
import WhatWeDo from "@/components/home/what-we-do";
import Whoweare from "@/components/home/whoweare";
import TestimonialSection from "@/components/shared/testimonial-section";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { projects } from "@/data/projects";
import { generateHomeMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateHomeMetadata();

export default function Home() {
  const dir = path.join(process.cwd(), "public/images/clients");
  const logos = fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g|svg|webp)$/i.test(f));

  return (
    <>
      <Banner />
      <Whoweare logos={logos} />
      <ProjectsSection projects={projects.slice(0, 4)} />
      <Step />
      <WhatWeDo />
      <TestimonialSection />
      <CaseStudies />
    </>
  );
}
