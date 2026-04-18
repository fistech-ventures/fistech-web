import AboutMe from "@/components/about/about-me";
import Service from "@/components/about/service";
import Whatwedo from "@/components/about/what-we-do";
import WorkTogether from "@/components/about/work-together";
import FAQSection from "@/components/shared/faq";
import PageHeadline from "@/components/shared/page-headline";
import ParallaxHeroImage from "@/components/shared/parallax-hero-image";
import TestimonialSection from "@/components/shared/testimonial-section";
import { faqs } from "@/data/faq";
import { generateAboutMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = generateAboutMetadata();

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
      <FAQSection faqs={faqs} />
      <WorkTogether />
    </div>
  );
}
