"use client";

import gsap from "gsap";
gsap.registerPlugin(SplitText, ScrollTrigger);
import { useRef } from "react";
import { Testimonial } from "@/types";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import TestimonialCard from "./testimonial-card";
import { testimonials } from "@/data/testimonials";
import Marquee from "react-fast-marquee";

export default function TestimonialSection() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const splitRef = useRef<SplitText | null>(null);
  useGSAP(() => {
    if (!titleRef.current) return;

    splitRef.current?.revert();

    splitRef.current = SplitText.create(titleRef.current, {
      type: "chars,words",
    });

    const chars = splitRef.current.chars;

    const ctx = gsap.context(() => {
      gsap.from(chars, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: descRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    return () => {
      ctx.revert();
      splitRef.current?.revert();
    };
  }, []);

  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section className="max-w-7xl px-4 mx-auto section-gap overflow-hidden">
      <div className="text-center max-w-xl mx-auto space-y-4 mb-8 md:mb-16">
        <h2 ref={titleRef} className="section-title">
          Testimonials
        </h2>

        <p ref={descRef} className="description text-center text-gray-600">
          Helping Out People To Build New Relations For Growing Business.
        </p>
      </div>

      <div className="relative flex flex-col gap-6 md:gap-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee pauseOnHover={true} speed={30} direction="left" className="overflow-hidden">
          {firstRow.map((item: Testimonial, index: number) => (
            <div key={`row1-${index}`} className="mx-3 md:mx-4 w-[350px] md:w-[450px] h-[360px] md:h-[400px] flex py-2">
              <TestimonialCard item={item} />
            </div>
          ))}
        </Marquee>

        <Marquee pauseOnHover={true} speed={30} direction="right" className="overflow-hidden">
          {secondRow.map((item: Testimonial, index: number) => (
            <div key={`row2-${index}`} className="mx-3 md:mx-4 w-[350px] md:w-[450px] h-[360px] md:h-[400px] flex py-2">
              <TestimonialCard item={item} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
