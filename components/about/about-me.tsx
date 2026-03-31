"use client";
import React, { useRef } from "react";
import SectionTag from "../shared/section-tag";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLHeadingElement>(null);
  const tickerLeftRef = useRef<HTMLDivElement>(null);
  const tickerRightRef = useRef<HTMLDivElement>(null);

  const tickerItems = [
    "MARKETING",
    "USER EXPERIENCE",
    "BRANDING DESIGN",
    "UI/UX DESIGN",
    "DIGITAL EXPERIENCES",
    "PROFESSIONAL",
  ];

  useGSAP(() => {
    // Counter
    gsap.from(counterRef.current, {
      innerText: 0,
      duration: 2,
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 85%",
      },
    });

    const initMarquee = (
      el: HTMLDivElement | null,
      direction: number 
    ) => {
      if (!el) return;

      const rollWidth = el.scrollWidth / 3;

      const animation = gsap.to(el, {
        x: -rollWidth,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      animation.timeScale(direction);

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity() / 100);
          const scrollDir = self.direction; 

          gsap.to(animation, {
            timeScale: direction * scrollDir * (1 + velocity),
            duration: 1,
            ease: "power2.out",
          });
        },
      });
    };

    initMarquee(tickerLeftRef.current, 1);

    initMarquee(tickerRightRef.current, -1);
  }, { scope: containerRef });

  return (
    <section
      className="pt-20 md:pt-32 pb-40 overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto text-center relative z-20 mb-20">
        <SectionTag sectiontag="About Us" />

        <h2 className="section-title max-w-5xl mx-auto py-10 font-medium">
          I’m a product designer with 08 years+ of experience helping startups.
          My focus is on UX, UI, and design systems that scale.
        </h2>

        <img
          src="/images/about/signature.png"
          alt="signature"
          className="mx-auto mb-16 h-12 md:h-20 object-contain"
        />

        <div className="w-72 h-96 md:w-[320px] md:h-105 border border-foreground
         rounded-full mx-auto flex flex-col justify-center items-center  backdrop-blur-sm shadow-xl">
          <h3 className="text-9xl md:text-[160px] font-bold text-black flex items-start leading-none">
            <span ref={counterRef}>5</span>
            <span className="text-4xl md:text-5xl mt-6">+</span>
          </h3>
          <h5 className="text-xl md:text-2xl font-semibold text-black mt-2">
            years of experience
          </h5>
        </div>
      </div>

      <div className="relative flex flex-col mt-40">
        {/* BLACK RIBBON */}
        <div className="bg-black py-10 lg:-rotate-10 -rotate-30 w-[200%] -translate-x-[30%] z-20 shadow-2xl">
          <div
            ref={tickerLeftRef}
            className="flex whitespace-nowrap gap-16 items-center w-max"
          >
            {[...tickerItems, ...tickerItems, ...tickerItems].map(
              (item, i) => (
                <React.Fragment key={`bl-${i}`}>
                  <span className="text-white text-3xl font-black uppercase tracking-tighter">
                    {item}
                  </span>
                  <span className="text-gray-600 text-5xl font-light">
                    ✦
                  </span>
                </React.Fragment>
              )
            )}
          </div>
        </div>

        {/* WHITE RIBBON */}
        <div className="bg-white py-10 lg:rotate-15 rotate-40 w-[300%] -translate-x-[30%] z-10 shadow-xl border-y border-black/10 -mt-16 md:-mt-24">
          <div
            ref={tickerRightRef}
            className="flex whitespace-nowrap gap-16 items-center w-max"
          >
            {[...tickerItems, ...tickerItems, ...tickerItems].map(
              (item, i) => (
                <React.Fragment key={`wh-${i}`}>
                  <span className="text-black text-3xl font-black uppercase tracking-tighter">
                    {item}
                  </span>
                  <span className="text-gray-300 text-5xl font-light">
                    ✦
                  </span>
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}