import fs from "fs";
import path from "path";
import React from "react";
import { Metadata } from "next";
import Whoweare from "@/components/home/whoweare";
import WhatWeDo from "@/components/home/what-we-do";
import { generateSolutionsMetadata } from "@/lib/metadata";
import PageHeadline from "@/components/shared/page-headline";
import CollaborateSection from "@/components/contact/collaborate";
import ParallaxHeroImage from "@/components/shared/parallax-hero-image";

export const metadata: Metadata = generateSolutionsMetadata();

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
      <Whoweare logos={logos} />
      <WhatWeDo />
      <CollaborateSection />
    </div>
  );
}
