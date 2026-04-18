import FAQSection from "@/components/shared/faq";
import PageHeadline from "@/components/shared/page-headline";
import ParallaxHeroImage from "@/components/shared/parallax-hero-image";
import { generateFAQMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = generateFAQMetadata();

export default function FAQPage() {
  return (
    <main>
      <PageHeadline headline="FAQ" />
      <ParallaxHeroImage
        imageSrc="/images/contact/contact-hero.webp"
        imageAlt="Faq Image"
      />
      <FAQSection isShowTitle={false} />
    </main>
  );
}
