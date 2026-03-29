"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CTAButton from "../shared/cta";
import React, { useState, useRef } from "react";
import SectionTag from "../shared/section-tag";
import { SERVICES_DATA } from "@/data/service";
import {
  Search,
  Layers,
  Code,
  Rocket,
  Smartphone,
  Heart,
  Shield,
  TrendingUp,
  Users,
  Palette,
  Layout,
  PenTool,
  Briefcase,
  FileText,
  User,
  Check,
  BarChart,
} from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconMap: Record<string, any> = {
  search: Search,
  layers: Layers,
  code: Code,
  rocket: Rocket,
  smartphone: Smartphone,
  heart: Heart,
  shield: Shield,
  "trending-up": TrendingUp,
  users: Users,
  palette: Palette,
  layout: Layout,
  "pen-tool": PenTool,
  tool: Briefcase,
  "file-text": FileText,
  user: User,
  check: Check,
  "bar-chart": BarChart,
};

export default function WhatWeDo() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      SERVICES_DATA.forEach((service) => {
        const content = containerRef.current?.querySelector(
          `.details-${service.id}`,
        );
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
                { y: 40, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  stagger: 0.1,
                  ease: "power3.out",
                },
                "-=0.5",
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
    <section
      className="py-12 md:py-20 lg:py-32 bg-[#E8E8E8]"
      ref={containerRef}
    >
      <div className="container mx-auto px-4">
        <SectionTag sectiontag="What We Do" />

        <h2 className="section-title text-center max-w-4xl mx-auto mt-6 mb-12 lg:mb-20 text-3xl md:text-5xl font-bold leading-tight">
          We specialize in delivering flexible, scalable, and affordable
          services for startups.
        </h2>

        <div className="flex flex-col gap-5 max-w-7xl mx-auto">
          {SERVICES_DATA.map((service) => {
            const Icon = IconMap[service.features[0]?.icon] || Code;
            const serviceLink = `/services/${service.slug}`;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="bg-white px-8 py-10 md:px-16 md:py-14 rounded-[2rem] md:rounded-[3rem] w-full flex flex-col transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] overflow-hidden cursor-pointer"
              >
                {/* Fixed Header Layout */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-20 flex-1">
                    <div className="shrink-0 p-1">
                      <Icon
                        size={48}
                        className="text-black"
                        strokeWidth={1.2}
                      />
                    </div>

                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                          {service.hero.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.overview.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-4 py-1.5 rounded-full border border-black/10 text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <CTAButton btnText="DISCOVER MORE" href={serviceLink} />
                  </div>
                </div>

                {/* Expanded Content with Grid Layout from Screenshots */}
                <div
                  className={`details-${service.id} overflow-hidden h-0 opacity-0`}
                >
                  <div className="pt-12 md:pt-20 pb-4 flex flex-col items-center max-w-5xl mx-auto">
                    <div className="reveal-item w-full mb-12">
                      <p className="text-lg md:text-2xl text-gray-800 leading-relaxed max-w-4xl mx-auto">
                        {service.overview.description}
                      </p>
                    </div>

                    <div className="reveal-item grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full">
                      {service.overview.media.map((item, i) => (
                        <div
                          key={i}
                          className="group/img aspect-16/10 overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-[#F5F5F5]"
                        >
                          <img
                            src={item.url}
                            alt={item.alt}
                            className="h-full w-full object-cover grayscale transition-all duration-1000 ease-out group-hover/img:scale-110 group-hover/img:grayscale-0"
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
