"use client";

import React, { useRef } from "react";
import SectionTag from "../shared/section-tag";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Whatwedo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const el = textRef.current;
      if (!el) return;

      gsap.fromTo(
        el,
        {
          clipPath: "inset(0 0% 0 0)",
        },
        {
          ease: "none",
          clipPath: "inset(0 100% 0 0)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
            end: "bottom 90%",
            scrub: 1.5,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section className="py-10" ref={containerRef}>
      <div className="container mx-auto relative">
        <SectionTag sectiontag="What We Do" />

        <div className="relative">
          <h2 className="section-title max-w-4xl mx-auto py-10 font-medium text-center text-black">
            From strategy and design to content and technology — we scale your
            vision into a market-leading reality.
          </h2>

          <h2
            ref={textRef}
            className="section-title max-w-4xl mx-auto py-10 font-medium text-center text-gray-400 absolute inset-0"
            style={{
              clipPath: "inset(0 0% 0 0)",
            }}
          >
            From strategy and design to content and technology — we scale your
            vision into a market-leading reality.
          </h2>
        </div>

        <div className="absolute top-35 left-50">
          <Image
            width={150}
            height={150}
            src="/images/about/ball.png"
            alt="ball"
          />
        </div>
      </div>
    </section>
  );
}
