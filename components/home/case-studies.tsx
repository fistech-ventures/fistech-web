"use client";

import React from "react";
import SectionTag from "../shared/section-tag";
import { CASE_STUDIES } from "@/data/case-studies";
import CTAButton from "../shared/cta";
import CasecaseStudyCard from "../shared/case-study-card";

export default function CaseStudies() {
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 lg:mb-10 text-center">
          <SectionTag sectiontag="Case Studies" />
          <h2 className="section-title max-w-4xl mx-auto py-5 text-center">
            Recent work and case studies that highlight our expertise
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
