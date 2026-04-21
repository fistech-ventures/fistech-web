"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SectionTag from "../shared/section-tag";

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
            end: "bottom 80%",
            scrub: 2,
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
            We help businesses turn ideas into real products that grow, reach
            people, and perform in the real world.
          </h2>

          <h2
            ref={textRef}
            className="section-title max-w-4xl mx-auto py-10 font-medium text-center text-gray-400 absolute inset-0"
            style={{
              clipPath: "inset(0 0% 0 0)",
            }}
          >
            We help businesses turn ideas into real products that grow, reach
            people, and perform in the real world.
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
