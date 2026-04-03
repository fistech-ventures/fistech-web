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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsWrapper = cardsWrapperRef.current;
    const wrapper = wrapperRef.current;

    if (!section || !cardsWrapper || !wrapper) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          const cards = gsap.utils.toArray<HTMLElement>(
            cardsWrapper.querySelectorAll(".why-card"),
          );
          if (cards.length === 0) return;

          gsap.set(cards, {
            opacity: 0,
            y: 60,
            scale: 0.97,
            transformOrigin: "center bottom",
          });

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

          const lastCard = cards[cards.length - 1];
          const wrapperOffsetTop = cardsWrapper.offsetTop;
          const lastCardOffsetTop = lastCard.offsetTop;
          const lastCardHeight = lastCard.offsetHeight;
          const viewportCenter = window.innerHeight / 2;

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
              pin: wrapper,
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

          scrollTl.to(
            [marqueeRef.current, descRef.current],
            { opacity: 0, y: -24, ease: "power1.in" },
            0.6,
          );

          scrollTl.to(
            ctaRef.current,
            { opacity: 0, y: 20, ease: "power1.in" },
            0.4,
          );
        },

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
    <div ref={wrapperRef} className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        src="/solution-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        style={{ zIndex: 0 }}
      />

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/50 hidden md:block"
        style={{ zIndex: 1 }}
      />

      {/* ── Mobile fallback ── */}
      <div
        className="absolute inset-0 bg-gray-900 md:hidden"
        style={{ zIndex: 0 }}
      />

      <section
        ref={sectionRef}
        className="relative w-full h-full"
        style={{ zIndex: 2 }}
      >
        <div ref={marqueeRef} className="relative pt-10">
          <Marquee
            className="main-headline text-white! xl:pt-12 lg:pt-10 md:pt-8 pt-6"
            speed={100}
            gradient={false}
          >
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
        <div ref={ctaRef} className="flex justify-center mt-20 pb-10 z-50">
          <CTAButton btnText="Contact Us" href="/contact" isDark />
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
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
                className="why-card bg-white flex-1 px-5 xl:px-10 py-10 xl:py-20 lg:even:mt-40 will-change-transform rounded-xl shadow-2xl"
              >
                <PocketKnife size={70} className="mb-20 text-black" />
                <div className="space-y-4">
                  <h3 className="item-title text-black">{item.title}</h3>
                  <p className="description text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
