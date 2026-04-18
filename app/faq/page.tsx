import FAQSection from "@/components/shared/faq";
import PageHeadline from "@/components/shared/page-headline";
import ParallaxHeroImage from "@/components/shared/parallax-hero-image";
import { generateFAQMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import React from "react";
import { generateFaqSchema, toJsonLd } from "@/lib/schema";
import { faqs } from "@/data/faq";

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
