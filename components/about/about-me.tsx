"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { solutions } from "@/data/solutions";
import SectionTag from "../shared/section-tag";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const tickerLeftRef = useRef<HTMLDivElement>(null);
  const tickerRightRef = useRef<HTMLDivElement>(null);

  const tickerItems = solutions.map((item) => item.title);

  useGSAP(
    () => {
      // 1. Reveal Text Animation
      const textEl = textRef.current;
      if (textEl) {
        gsap.fromTo(
          textEl,
          { clipPath: "inset(0 0% 0 0)" },
          {
            clipPath: "inset(0 100% 0 0)",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "top 10%",
              scrub: true,
            },
          },
        );
      }

      // 2. Marquee Animations
      const leftEl = tickerLeftRef.current;
      const rightEl = tickerRightRef.current;

      if (!leftEl || !rightEl) return;

      const leftWidth = leftEl.scrollWidth / 3;
      const rightWidth = rightEl.scrollWidth / 3;

      // Left ticker — moves left
      const leftAnim = gsap.fromTo(
        leftEl,
        { x: 0 },
        {
          x: -leftWidth,
          duration: 25,
          repeat: -1,
          ease: "none",
        },
      );

      // Right ticker — moves right (opposite direction)
      const rightAnim = gsap.fromTo(
        rightEl,
        { x: -rightWidth },
        {
          x: 0,
          duration: 25,
          repeat: -1,
          ease: "none",
        },
      );

      // Scroll speed boost
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const speed = gsap.utils.clamp(1, 5, Math.abs(velocity / 500));

          if (
            leftAnim &&
            typeof leftAnim.isActive === "function" &&
            leftAnim.isActive()
          ) {
            gsap.to(leftAnim, {
              timeScale: speed,
              duration: 1,
              ease: "power3.out",
              overwrite: true,
            });
          }
          if (
            rightAnim &&
            typeof rightAnim.isActive === "function" &&
            rightAnim.isActive()
          ) {
            gsap.to(rightAnim, {
              timeScale: speed,
              duration: 1,
              ease: "power3.out",
              overwrite: true,
            });
          }
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      className="pt-20 md:pt-32 pb-40 overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto text-center relative z-20 mb-20">
        <SectionTag sectiontag="About Us" />
        <div className="relative">
          <h2 className="section-title max-w-5xl mx-auto py-10 font-medium text-black">
            We Focus on Outcomes, Fistech is about 5+ years of engineering ideas
            into impactful digital businesses and helping them scale.
          </h2>

          <h2
            ref={textRef}
            className="section-title max-w-5xl mx-auto py-10 font-medium text-gray-400 absolute inset-0"
            style={{ clipPath: "inset(0 0% 0 0)" }}
          >
            We Focus on Outcomes, Fistech is about 5+ years of engineering ideas
            into impactful digital businesses and helping them scale.
          </h2>
        </div>

        <Image
          src="/images/about/signature.png"
          alt="signature"
          width={100}
          height={100}
          className="mx-auto mb-16 h-12 md:h-20 object-contain"
        />

        <div className="w-72 h-96 md:w-[320px] md:h-105 border border-foreground rounded-full mx-auto flex flex-col justify-center items-center backdrop-blur-sm shadow-xl">
          <h3 className="text-9xl md:text-[160px] font-bold text-black flex items-start leading-none">
            <span>5</span>
            <span className="text-4xl md:text-5xl mt-6">+</span>
          </h3>
          <h5 className="text-xl md:text-2xl font-semibold text-black mt-2">
            years of experience
          </h5>
        </div>
      </div>

      {/* MARQUEE SECTION */}
      <div className="relative flex flex-col mt-40">
        {/* Left Ticker (Black) */}
        <div className="bg-black lg:py-10 py-5 lg:-rotate-[10deg] -rotate-[30deg] w-[200%] -translate-x-[30%] z-20 shadow-2xl">
          <div
            ref={tickerLeftRef}
            className="flex whitespace-nowrap gap-16 items-center w-max"
          >
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <React.Fragment key={`bl-${i}`}>
                <span className="text-white lg:text-3xl text-xl font-black uppercase tracking-tighter">
                  {item}
                </span>
                <span className="text-gray-600 text-5xl font-light">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Ticker (White) */}
        <div className="bg-white lg:py-10 py-5 lg:rotate-[15deg] rotate-[40deg] w-[300%] -translate-x-[30%] z-10 shadow-xl border-y border-black/10 -mt-16 md:-mt-24">
          <div
            ref={tickerRightRef}
            className="flex whitespace-nowrap gap-16 items-center w-max"
          >
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <React.Fragment key={`wh-${i}`}>
                <span className="text-black lg:text-3xl text-xl font-black uppercase tracking-tighter">
                  {item}
                </span>
                <span className="text-gray-300 text-5xl font-light">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
