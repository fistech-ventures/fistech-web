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

export const metadata: Metadata = {
  title: "Fistech Ventures",
  description: "Global IT and Digital Solutions",
};

export default function Home() {
  const dir = path.join(process.cwd(), "public/images/clients");
  const logos = fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g|svg|webp)$/i.test(f));

  return (
    <>
      <Banner />
      <Whoweare logos={logos} />
      <ProjectsSection />
      <Step />
      <WhatWeDo />
      <TestimonialSection />
      <CaseStudies />
    </>
  );
}
