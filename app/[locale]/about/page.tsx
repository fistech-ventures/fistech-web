import AboutMe from "@/components/about/about-me";
import Service from "@/components/about/service";
import Whatwedo from "@/components/about/what-we-do";
import WorkTogether from "@/components/about/work-together";
import PageHeadline from "@/components/shared/page-headline";
import ParallaxHeroImage from "@/components/shared/parallax-hero-image";
import TestimonialSection from "@/components/shared/testimonial-section";
import React from "react";

export default function AboutPage() {
  return (
    <div>
      <PageHeadline headline="About Us" />
      <ParallaxHeroImage
        imageSrc="/images/about/about-hero.png"
        imageAlt="Contact Image"
      />
      <AboutMe />
      <Whatwedo />
      <Service />
      <TestimonialSection />
      <WorkTogether />
    </div>
  );
}
