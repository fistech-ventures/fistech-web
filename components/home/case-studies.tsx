"use client";

import gsap from "gsap";
import React from "react";
import CTAButton from "../shared/cta";
import { useRef, useEffect } from "react";
import SectionTag from "../shared/section-tag";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CASE_STUDIES } from "@/data/case-studies";
import CasecaseStudyCard from "../shared/case-study-card";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const text = titleRef.current.querySelector(".mask-text");

    gsap.to(text, {
      y: "0%",
      duration: 2,
      ease: "power4.out",

      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-2 lg:mb-10 text-center">
          <SectionTag sectiontag="Case Studies" />
          <h2
            ref={titleRef}
            className="section-title max-w-4xl mx-auto py-5 text-center"
          >
            <span className="mask-wrapper">
              <span className="mask-text">
                Works and Case Studies Highlighting our expertise.
              </span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.slice(0, 2).map((caseStudy) => (
            <CasecaseStudyCard
              key={caseStudy.caseStudyId}
              caseStudy={caseStudy}
            />
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <CTAButton btnText="Read All Case Studies" href="/case-studies" />
        </div>
      </div>
    </section>
  );
}
