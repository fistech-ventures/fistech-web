import React from "react";
import SectionTag from "../shared/section-tag";
import Image from "next/image";

export default function Whatwedo() {
  return (
    <section className="py-10 ">
      <div className="container mx-auto relative">
        <SectionTag sectiontag="What We Do" />
        <h2
          className="section-title max-w-4xl mx-auto py-10 font-medium text-center"
          style={{ fontFamily: "var(--font-kanit)" }}
        >
          Strategy & design to content & technology — I turn also your vision
          into reality.
        </h2>
        <div className="absolute top-35 left-50">
          <Image width={150} height={150} src="/images/about/ball.png" alt="ball" />
        </div>
      </div>
    </section>
  );
}
