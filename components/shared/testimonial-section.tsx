import { testimonials } from "@/data/testimonials";
import { Testimonial } from "@/types";
import React from "react";
import TestimonialCard from "./testimonial-card";

export default function TestimonialSection() {
  return (
    <section className="max-w-7xl px-2 mx-auto section-gap">
      <div className="text-center max-w-xl mx-auto space-y-2 mb-4 md:mb-6 lg:mb-12 xl:mb-16">
        <h2 className="section-title">Testimonials</h2>
        <p className="description">
          We helped us focus on what mattered, and their ideas consistently
          pushed our business forward.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
        {testimonials.map((item: Testimonial, index: number) => (
          <TestimonialCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
