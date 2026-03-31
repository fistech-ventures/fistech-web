"use client";
import React from "react";
import SectionTag from "../shared/section-tag";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const CASE_STUDIES = [
  {
    id: 1,
    title: "The rise of human-centered design in digital strategy.",
    date: "9 January, 2026",
    readTime: "1 Min Read",
    imageUrl: "/images/service/service-image.png",
    slug: "human-centered-design",
  },
  {
    id: 2,
    title: "Why UX strategy is just as important as visual design.",
    date: "9 January, 2026",
    readTime: "1 Min Read",
    imageUrl: "/images/service/service-image.png",
    slug: "ux-strategy",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 lg:mb-20 text-center">
          <SectionTag sectiontag="Case Studies" />
          <h2 className="section-title max-w-4xl mx-auto py-10 font-medium text-center">
            Recent work and case studies that highlight our expertise.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CASE_STUDIES.map((study) => (
            <Link key={study.id} href={`/case-studies/${study.slug}`}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gray-100">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Arrow Button */}
                  <div className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center opacity-0 -translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-black" />
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-3 text-sm md:text-base font-medium text-gray-500">
                  <span>{study.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  <span>{study.readTime}</span>
                </div>

                <h3 className="mt-4 text-xl md:text-2xl lg:text-3xl font-medium leading-tight tracking-tight text-black transition-colors duration-300 group-hover:text-gray-600">
                  {study.title}
                </h3>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
