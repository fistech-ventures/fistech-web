import React from "react";
import { Metadata } from "next";
import { faqs } from "@/data/faq";
import FAQSection from "@/components/shared/faq";
import AboutMe from "@/components/about/about-me";
import Service from "@/components/about/service";
import Whatwedo from "@/components/about/what-we-do";
import { generateAboutMetadata } from "@/lib/metadata";
import WorkTogether from "@/components/about/work-together";
import PageHeadline from "@/components/shared/page-headline";
import ParallaxHeroImage from "@/components/shared/parallax-hero-image";
import TestimonialSection from "@/components/shared/testimonial-section";

export const metadata: Metadata = generateAboutMetadata();

export default function AboutPage() {
  return (
    <div>
      <PageHeadline headline="About Us" />
      <ParallaxHeroImage
        imageSrc="/images/about/about.jpg"
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
