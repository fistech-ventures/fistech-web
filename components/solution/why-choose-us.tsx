"use client";

import React from "react";
import { ISolution } from "@/types";
import { ArrowRight } from "lucide-react";
import CTAButton from "../shared/cta";

export default function WhyChooseUs({
  whyChooseUs,
}: {
  whyChooseUs?: ISolution["whyChooseUs"];
}) {
  const items = whyChooseUs?.content ?? [];

  return (
    <div className="relative w-full py-10 md:py-20 xl:py-32">
      {/* Video background */}
      <video
        src="/solution-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover hidden md:block"
        style={{ zIndex: 0 }}
      />

      {/* Mobile fallback */}
      <div
        className="absolute inset-0 bg-neutral-950 md:hidden"
        style={{ zIndex: 0 }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.68) 55%, rgba(0,0,0,0.90) 100%)",
        }}
      />

      {/* Page content */}
      <div
        className="relative flex flex-col px-5 sm:px-10 md:px-14 lg:px-20 py-10 md:py-14"
        style={{ zIndex: 2 }}
      >
        {/* Top row — headline + description + CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-12">
          <div>
            <p className="mb-3 text-base font-semibold uppercase tracking-[0.25em] text-white/40">
              Why choose us
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black leading-[0.92] tracking-tight text-white">
              We build
              <br />
              <span
                style={{
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.85)",
                  WebkitTextFillColor: "transparent",
                }}
              >
                differently.
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="max-w-lg description text-white/50 md:text-right">
              {whyChooseUs?.description}
            </p>
            <CTAButton btnText="Contact Us" href="/contact" isDark />
          </div>
        </div>

        {/* Thin rule */}
        <div className="my-10 md:my-14 lg:my-18 h-px w-full bg-white/10" />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="why-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 px-6 md:px-9 lg:px-10 py-9 md:py-14 lg:py-20 transition-all duration-500 hover:border-white/40"
              style={{
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                background: "rgba(255,255,255,0.055)",
                animationDelay: `${i * 100}ms`,
              }}
            >
              {/* Gradient glow effect on hover */}
              <div
                className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-60 blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.2) 50%, rgba(236,72,153,0.3) 100%)",
                }}
              />

              {/* Inner highlight glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.12) 0%, transparent 65%)",
                }}
              />

              {/* Number badge with gradient */}
              <span className="mb-4 block text-base md:text-lg lg:text-2xl font-bold tabular-nums transition-all duration-500 group-hover:scale-110 text-secondary">
                0{i + 1}
              </span>

              <div className="flex-1 relative z-10">
                <h3 className="mb-2 item-title leading-snug text-white transition-colors duration-500 group-hover:text-cyan-100">
                  {item.title}
                </h3>
                <p className="description text-white/50 transition-colors duration-500 group-hover:text-white/70">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 mt-5 flex items-center">
                <div className="h-px flex-1 bg-linear-to-r from-secondary/10 to-transparent transition-all duration-500 group-hover:from-secondary/40 group-hover:to-transparent" />
                <ArrowRight
                  size={14}
                  className="ml-3 text-secondary/30 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-secondary"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .why-card {
            opacity: 0;
            transform: translateY(40px) scale(0.97);
            animation: card-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
        }
        @keyframes card-in {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
