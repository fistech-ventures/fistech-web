"use client";

import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ProjectHeadline() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const loop = gsap.to(".marquee-item", {
        xPercent: -100,
        repeat: -1,
        duration: 25,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const direction = self.direction;
          const scrollBoost = Math.min(Math.abs(velocity / 400), 15);
          const targetTimeScale = (1 + scrollBoost) * direction;

          gsap.to(loop, {
            timeScale: targetTimeScale,
            duration: 0.2,
            overwrite: true,
            ease: "power1.out",
          });

          if (scrollTimer.current) clearTimeout(scrollTimer.current);

          scrollTimer.current = setTimeout(() => {
            gsap.to(loop, {
              timeScale: direction,
              duration: 1.2,
              ease: "power2.out",
            });
          }, 100);
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  const StarIcon = () => (
    <div className="px-10 lg:px-20 shrink-0">
      <svg
        width="60"
        height="60"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12 lg:w-28 lg:h-28 text-[#E5E7EB]"
      >
        <path d="M12,14.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S13.38,14.5,12,14.5z M12,2c-0.55,0-1,0.45-1,1 c0,2.15,1,4,1,4s1-1.85,1-4C13,2.45,12.55,2,12,2z M12,22c0.55,0,1-0.45,1-1c0-2.15-1-4-1-4s-1,1.85-1,4C11,21.55,11.45,22,12,22z M22,12c0-0.55-0.45-1-1-1c-2.15,0-4,1-4,1s1.85,1,4,1C21.55,13,22,12.55,22,12z M2,12c0,0.55,0.45,1,1,1c2.15,0,4-1,4-1 s-1.85-1-4-1C2.45,11,2,11.45,2,12z" />
      </svg>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="pt-4 lg:pt-6 xl:pt-12 pb-15 overflow-hidden select-none bg-white flex items-center"
    >
      <div className="flex whitespace-nowrap">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="marquee-item flex items-center shrink-0">
            <h2 className="text-[70px] md:text-[130px] lg:text-[200px] font-black uppercase tracking-tighter text-[#E5E7EB]">
              Latest Work
            </h2>
            <StarIcon />
            <h2 className="text-[70px] md:text-[130px] lg:text-[200px] font-black uppercase tracking-tighter text-[#E5E7EB]">
              2023-2026
            </h2>
            <StarIcon />
          </div>
        ))}
      </div>
    </section>
  );
}
