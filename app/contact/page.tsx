import React from "react";
import { Metadata } from "next";
import { generateContactMetadata } from "@/lib/metadata";
import MapSection from "@/components/contact/map-sectin";
import ContactForm from "@/components/contact/contact-form";
import PageHeadline from "@/components/shared/page-headline";
import CollaborateSection from "@/components/contact/collaborate";
import ParallaxHeroImage from "@/components/shared/parallax-hero-image";

export const metadata: Metadata = generateContactMetadata();

export default function ContactPage() {
  return (
    <div>
      <PageHeadline headline="Contact Us" />
      <ParallaxHeroImage
        imageSrc="/images/contact/contact-hero.webp"
        imageAlt="Contact Image"
      />
      <CollaborateSection />
      <ContactForm />
      <MapSection />
    </div>
  );
}
