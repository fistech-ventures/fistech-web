import React from "react";
import SectionTag from "../shared/section-tag";

export default function Whatwedo() {
  return (
    <section className="py-10 ">
      <div className="container mx-auto relative">
        <SectionTag sectiontag="What We Do" />
        <h2 className="section-title max-w-4xl mx-auto py-10 font-medium text-center">
          Strategy & design to content & technology — I turn also your vision
          into reality.
        </h2>
        <div className="absolute top-35 left-50">
          <img src="/images/about/ball.png" alt="ball" />
        </div>
      </div>
    </section>
  );
}
