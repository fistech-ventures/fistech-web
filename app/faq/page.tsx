import React from "react";
import { Metadata } from "next";
import { faqs } from "@/data/faq";
import FAQSection from "@/components/shared/faq";
import { generateFAQMetadata } from "@/lib/metadata";
import { generateFaqSchema, toJsonLd } from "@/lib/schema";
import PageHeadline from "@/components/shared/page-headline";
import ParallaxHeroImage from "@/components/shared/parallax-hero-image";

export const metadata: Metadata = generateFAQMetadata();

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(generateFaqSchema(faqs)) }}
      />
      <main>
        <PageHeadline headline="FAQ" />
        <ParallaxHeroImage
          imageSrc="/images/contact/contact-hero.webp"
          imageAlt="Faq Image"
        />
        <FAQSection faqs={faqs} isShowTitle={false} />
      </main>
    </>
  );
}
