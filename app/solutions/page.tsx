import CollaborateSection from "@/components/contact/collaborate";
import WhatWeDo from "@/components/home/what-we-do";
import Whoweare from "@/components/home/whoweare";
import PageHeadline from "@/components/shared/page-headline";
import ParallaxHeroImage from "@/components/shared/parallax-hero-image";
import React from "react";
import fs from "fs";
import path from "path";

export default function SolutionsPage() {
  const dir = path.join(process.cwd(), "public/images/clients");
  const logos = fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g|svg|webp)$/i.test(f));

  return (
    <div>
      <PageHeadline headline="Solutions" />
      <ParallaxHeroImage
        imageSrc="/images/service/solution-bg.webp"
        imageAlt="Solution"
      />
      <Whoweare logos={logos}/>
      <WhatWeDo />
      <CollaborateSection />
    </div>
  );
}
