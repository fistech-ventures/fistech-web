import CollaborateSection from "@/components/contact/collaborate";
import WhatWeDo from "@/components/home/what-we-do";
import Whoweare from "@/components/home/whoweare";
import PageHeadline from "@/components/shared/page-headline";
import ParallaxHeroImage from "@/components/shared/parallax-hero-image";
import React from "react";

export default function SolutionsPage() {
  return (
    <div>
      <PageHeadline headline="Solutions" />
      <ParallaxHeroImage
        imageSrc="/images/service/solution-bg.webp"
        imageAlt="Solution"
      />
      <Whoweare />
      <WhatWeDo />
      <CollaborateSection />
    </div>
  );
}
