import React from "react";
import PageHeadline from "@/components/shared/page-headline";
import { CASE_STUDIES } from "@/data/case-studies";
import CasecaseStudyCard from "@/components/shared/case-study-card";

export default function CaseStudies() {
  return (
    <section className="py-12 md:py-20 lg:py-32 ">
      <PageHeadline headline="Case Studies" />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CASE_STUDIES.map((caseStudy) => (
            <CasecaseStudyCard
              key={caseStudy.caseStudyId}
              caseStudy={caseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
