"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CTAButton from "../shared/cta";
import React, { useState, useRef } from "react";
import SectionTag from "../shared/section-tag";
import { SERVICES_DATA } from "@/data/service";

export default function WhatWeDo() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      SERVICES_DATA.forEach((service) => {
        const content = containerRef.current?.querySelector(`.details-${service.id}`);
        const items = content?.querySelectorAll(".reveal-item");

        if (content) {
          if (hoveredId === service.id) {
            const tl = gsap.timeline();

            tl.to(content, {
              height: "auto",
              opacity: 1,
              duration: 0.8,
              ease: "expo.out",
            });

            if (items) {
              tl.fromTo(
                items,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
                "-=0.6" 
              );
            }
          } else {
            gsap.to(content, {
              height: 0,
              opacity: 0,
              duration: 0.4,
              ease: "expo.inOut",
              overwrite: true,
            });
          }
        }
      });
    },
    { dependencies: [hoveredId], scope: containerRef },
  );

  return (
    <section className="py-12 md:py-20 lg:py-30 bg-[#E8E8E8]" ref={containerRef}>
      <div className="container mx-auto px-4">
        <SectionTag sectiontag="What We Do" />

        <h2 className="section-title text-center max-w-6xl mx-auto mt-5 mb-10 lg:mb-16">
          We specialize in delivering flexible, scalable, and affordable
          services for startups.
        </h2>

        <div className="flex flex-col gap-4 md:gap-6 max-w-7xl mx-auto">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="bg-white px-6 py-8 md:px-14 md:py-12 rounded-[1.5rem] md:rounded-[2.5rem] w-full flex flex-col transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden cursor-pointer"
              >
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-30">
                    <div className="shrink-0 text-black">
                      <Icon size={40} className="md:w-12.5 md:h-12.5" strokeWidth={1.5} />
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4">
                      {/* TITLE AS LINK */}
                      <a href={service.link} className="group/title relative inline-block w-fit">
                        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight transition-colors duration-300 group-hover/title:text-black/70">
                          {service.title}
                        </h3>
                        {/* Underline for Title */}
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-500 ease-expo group-hover/title:w-full" />
                      </a>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 w-full md:w-auto">
                    <CTAButton btnText="Discover More" href={service.link} />
                  </div>
                </div>

                <div className={`details-${service.id} overflow-hidden h-0 opacity-0`}>
                  <div className="pt-8 md:pt-16 pb-4 flex flex-col items-center max-w-4xl mx-auto">
                    
                    <div className="reveal-item mb-6">
                      <p className="description">
                        {service.description}
                      </p>
                    </div>

                    <div className="reveal-item grid w-full grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 md:gap-8">
                      {service.images?.map((img, i) => (
                        <div
                          key={i}
                          className="group/img aspect-[1.4/1] overflow-hidden rounded-[1rem] bg-gray-100 shadow-sm md:rounded-[2rem]"
                        >
                          <img
                            src={img}
                            alt="Project snapshot"
                            className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover/img:scale-105 group-hover/img:grayscale-0"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}