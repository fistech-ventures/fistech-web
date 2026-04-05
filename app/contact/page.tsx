import CollaborateSection from "@/components/contact/collaborate";
import ContactForm from "@/components/contact/contact-form";
import MapSection from "@/components/contact/map-sectin";
import PageHeadline from "@/components/shared/page-headline";
import ParallaxHeroImage from "@/components/shared/parallax-hero-image";
import React from "react";

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
