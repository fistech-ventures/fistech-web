"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { testimonials } from "@/data/testimonials";
import { Testimonial } from "@/types";
import TestimonialCard from "./testimonial-card";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: for cleaner icons

export default function TestimonialSection() {
  // 1. Get the emblaApi from the hook
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });

  // 2. Define the click handlers using useCallback for performance
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="max-w-7xl px-4 mx-auto section-gap overflow-x-hidden">
      <div className="text-center max-w-xl mx-auto space-y-4 mb-10 md:mb-16">
        <h2 className="section-title">Testimonials</h2>
        <p className="description text-gray-600">
          We helped us focus on what mattered, and their ideas consistently
          pushed our business forward.
        </p>
      </div>

      <div className="embla cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="embla__container flex gap-5">
          {testimonials.map((item: Testimonial, index: number) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <TestimonialCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* 3. Functional Slider Controls */}
      <div className="flex items-center justify-center gap-6 mt-12">
        <div className="flex gap-4 items-center">
          {/* Previous Button */}
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Center Branding/Rating (Matching image_3193e1.jpg) */}
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

          {/* Next Button */}
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
