"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { testimonials } from "@/data/testimonials";
import { Testimonial } from "@/types";
import TestimonialCard from "./testimonial-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="max-w-7xl px-4 mx-auto section-gap overflow-hidden">
      <div className="text-center max-w-xl mx-auto space-y-4 mb-1 md:mb-16">
        <h2 ref={titleRef} className="section-title">
          Testimonials
        </h2>

        <p ref={descRef} className="description text-center text-gray-600">
          Helping Out People To Build New Relations For Growing Business.
        </p>
      </div>

      <div
        className="embla cursor-grab active:cursor-grabbing"
        ref={emblaRef}
        style={{ touchAction: "pan-y" }}
      >
        <div className="embla__container flex gap-5">
          {testimonials.map((item: Testimonial, index: number) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-h-0"
            >
              <TestimonialCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-12">
        <div className="flex gap-4 items-center">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-95 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex flex-col items-center px-4">
            <div className="flex gap-1 text-orange-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-[10px] font-extrabold uppercase text-black">
              {testimonials.length} Reviews
            </span>
          </div>

          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-95 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
