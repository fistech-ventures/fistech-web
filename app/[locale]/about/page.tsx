import AboutMe from "@/components/about/about-me";
import PageHeadline from "@/components/shared/page-headline";
import ParallaxHeroImage from "@/components/shared/parallax-hero-image";
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
    </div>
  );
}
