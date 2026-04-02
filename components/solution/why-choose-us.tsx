"use client";

import { Solution } from "@/types";
import { Flower, PocketKnife } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import CTAButton from "../shared/cta";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs({
  whyChooseUs,
}: {
  whyChooseUs?: Solution["whyChooseUs"];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsWrapper = cardsWrapperRef.current;

    if (!section || !cardsWrapper) return;

    const ctx = gsap.context(() => {
      // ── Responsive: only animate on tablet+ (768px+) ──────────────────
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          const cards = gsap.utils.toArray<HTMLElement>(
            cardsWrapper.querySelectorAll(".why-card"),
          );
          if (cards.length === 0) return;

          // Initial state
          gsap.set(cards, {
            opacity: 0,
            y: 60,
            scale: 0.97,
            transformOrigin: "center bottom",
          });

          // ── Phase 1: entrance animation ──────────────────────────────
          const entranceTl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 30%",
              scrub: 0.6,
            },
          });

          entranceTl.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            ease: "power2.out",
          });

          // ── Phase 2: pinned scroll — stop when last card centers ─────
          //
          // Target: last card's top aligns with 50vh.
          // Distance to travel = (cardsWrapper top relative to section top)
          //   + last card offsetTop within wrapper
          //   - (50vh - last card height / 2)
          //
          const lastCard = cards[cards.length - 1];
          const wrapperOffsetTop = cardsWrapper.offsetTop; // wrapper top relative to section
          const lastCardOffsetTop = lastCard.offsetTop; // last card top in wrapper
          const lastCardHeight = lastCard.offsetHeight;
          const viewportCenter = window.innerHeight / 2;

          // Total upward travel = distance until last card center == viewport center
          const scrollDistance =
            wrapperOffsetTop +
            lastCardOffsetTop +
            lastCardHeight / 2 -
            viewportCenter;

          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${Math.max(scrollDistance, 200)}`,
              pin: true,
              pinSpacing: true,
              scrub: 0.8,
              anticipatePin: 1,
            },
          });

          scrollTl.to(cards, {
            y: () => -scrollDistance,
            stagger: { each: 0.04, from: "start" },
            ease: "none",
          });

          // Marquee + description fade at 60% progress
          scrollTl.to(
            [marqueeRef.current, descRef.current],
            { opacity: 0, y: -24, ease: "power1.in" },
            0.6,
          );

          // CTA fades at 40% progress
          scrollTl.to(
            ctaRef.current,
            { opacity: 0, y: 20, ease: "power1.in" },
            0.4,
          );
        },

        // ── Mobile: no animation, reset any inline styles ──────────────
        "(max-width: 767px)": function () {
          const cards = gsap.utils.toArray<HTMLElement>(
            cardsWrapper.querySelectorAll(".why-card"),
          );
          gsap.set(cards, { clearProps: "all" });
        },
      });
    }, section);

    return () => ctx.revert();
  }, [whyChooseUs]);

  return (
    // overflow-x-hidden here + on a parent wrapper stops horizontal scrollbar
    // without clipping the pin spacer that ScrollTrigger injects
    <div className="overflow-x-hidden">
      <section ref={sectionRef} className="relative w-full h-screen py-10">
        {/* ── Background video ── */}
        <video
          src="/solution-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />

        {/* ── Marquee ── */}
        <div ref={marqueeRef} className="relative z-10">
          <Marquee
            className="main-headline text-white! xl:pt-12 lg:pt-10 md:pt-8 pt-6"
            speed={100}
            gradient={false}
          >
            {/* Consistent gap via margin on each item */}
            <span className="mx-4">Why Choose Us</span>
            <Flower className="mx-4 shrink-0" />
            <span className="mx-4">Why We Different</span>
            <Flower className="mx-4 shrink-0" />
            <span className="mx-4">Why Choose Us</span>
            <Flower className="mx-4 shrink-0" />
            <span className="mx-4">Why We Different</span>
            <Flower className="mx-4 shrink-0" />
          </Marquee>
        </div>

        {/* ── Main content ── */}
        <div className="relative max-w-6xl mx-auto px-4 z-10">
          <p
            ref={descRef}
            className="max-w-lg description ms-auto pt-12 lg:pt-16 xl:pt-20 text-white/60"
          >
            {whyChooseUs?.description}
          </p>

          <div
            ref={cardsWrapperRef}
            className="grid grid-cols-1 md:grid-cols-2 items-start md:gap-x-12 xl:gap-x-44 gap-y-10 lg:gap-y-40 mt-10"
          >
            {whyChooseUs?.content.map((item, index: number) => (
              <div
                key={index}
                className="why-card bg-white flex-1 px-5 xl:px-10 py-10 xl:py-20 lg:even:mt-40 will-change-transform"
              >
                <PocketKnife size={70} className="mb-20" />
                <div className="space-y-4">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div ref={ctaRef} className="flex justify-center mt-10">
            <CTAButton btnText="Contact Us" href="/contact" />
          </div>
        </div>
      </section>
    </div>
  );
}
