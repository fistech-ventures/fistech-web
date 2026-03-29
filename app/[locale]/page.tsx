import Banner from "@/components/home/banner";
import ProjectsSection from "@/components/home/projects-section";
import Step from "@/components/home/step";
import WhatWeDo from "@/components/home/what-we-do";
import Whoweare from "@/components/home/whoweare";
import TestimonialSection from "@/components/shared/testimonial-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fistech Ventures",
  description: "Global IT and Digital Solutions",
};

export default function Home() {
  return (
    <>
      <Banner />
      <Whoweare />
      <ProjectsSection />
      <Step />
      <WhatWeDo />
      <TestimonialSection />
    </>
  );
}
