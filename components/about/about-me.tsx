"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { solutions } from "@/data/solutions";
import SectionTag from "../shared/section-tag";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const tickerLeftRef = useRef<HTMLDivElement>(null);
  const tickerRightRef = useRef<HTMLDivElement>(null);

  const tickerItems = solutions.map((item) => item.title);

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
          clipPath: "inset(0 100% 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 35%",
            scrub: true,
          },
        },
      );

      const initMarquee = (el: HTMLDivElement | null, direction: number) => {
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
              duration: 2,
              ease: "power3.out",
            });
          },
        });
      };

      initMarquee(tickerLeftRef.current, 1);
      initMarquee(tickerRightRef.current, -1);
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
            At Fistech Ventures, we merge 5+ years of product design expertise
            with scalable engineering to transform complex ideas into intuitive
            digital products. We don’t just design interfaces; we build the
            foundations for your growth.
          </h2>

          <h2
            ref={textRef}
            className="section-title max-w-5xl mx-auto py-10 font-medium text-gray-400 absolute inset-0"
            style={{
              clipPath: "inset(0 0% 0 0)",
            }}
          >
            At Fistech Ventures, we merge 5+ years of product design expertise
            with scalable engineering to transform complex ideas into intuitive
            digital products. We don’t just design interfaces; we build the
            foundations for your growth.
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
        <div className="bg-black lg:py-10 py-5 lg:-rotate-10 -rotate-30 w-[200%] -translate-x-[30%] z-20 shadow-2xl">
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

        <div className="bg-white lg:py-10 py-5 lg:rotate-15 rotate-40 w-[300%] -translate-x-[30%] z-10 shadow-xl border-y border-black/10 -mt-16 md:-mt-24">
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
