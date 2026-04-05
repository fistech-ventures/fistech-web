"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CTAButton from "../shared/cta";
import React, { useState, useRef } from "react";
import SectionTag from "../shared/section-tag";
import {
  Search,
  Layers,
  Code,
  Rocket,
  Smartphone,
  Heart,
  Shield,
  Users,
  Palette,
  Layout,
  Briefcase,
  User,
  Check,
  BarChart,
  AppWindow,
  TabletSmartphone,
  Paintbrush,
} from "lucide-react";
import Link from "next/link";
import { solutions } from "@/data/service";
import { Solution } from "@/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconMap: Record<string, any> = {
  search: Search,
  layers: Layers,
  code: Code,
  rocket: Rocket,
  smartphone: Smartphone,
  heart: Heart,
  shield: Shield,
  web: AppWindow,
  users: Users,
  palette: Palette,
  layout: Layout,
  mobile: TabletSmartphone,
  tool: Briefcase,
  design: Paintbrush,
  user: User,
  check: Check,
  seo: BarChart,
};

export default function WhatWeDo() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      solutions.forEach((service: Solution) => {
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
          {solutions.map((service: Solution) => {
            const Icon = IconMap[service.icon.name] || Code;
            const serviceLink = `/solutions/${service.slug}`;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="bg-white px-8 py-6 md:px-16 md:py-10 rounded-3xl w-full flex flex-col transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] overflow-hidden"
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
                        <Link
                          href={serviceLink}
                          className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight relative before:absolute before:bg-foreground before:-bottom-2 before:left-0 before:h-1 before:w-0 hover:before:w-full before:duration-500"
                        >
                          {service.title}
                        </Link>
                        <div className="flex flex-wrap gap-2">
                          {service.keywords.map((keyword: string) => (
                            <span
                              key={keyword}
                              className="tag"
                            >
                              {keyword}
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
                  <div className="pt-5 pb-4 flex flex-col items-center max-w-4xl mx-auto">
                    <div className="reveal-item w-full mb-6">
                      <p className="description max-w-4xl mx-auto">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="reveal-item grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full">
                      {service.images.map((image, i) => (
                        <div
                          key={i}
                          className="group/img aspect-16/10 overflow-hidden rounded-2xl bg-[#F5F5F5]"
                        >
                          <img
                            src={image}
                            alt={`Service image ${i + 1}`}
                            className="h-full w-full object-cover  transition-all duration-1000 ease-out group-hover/img:scale-110"
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
