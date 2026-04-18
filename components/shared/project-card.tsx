"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IProject } from "@/types"; // Import your existing interface
import ImgWaterMark from "./image-watermark";
import Image from "next/image";

interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const button = buttonRef.current;

      if (!container || !button) return;

      // Initial state for the custom cursor button
      gsap.set(button, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });

      const moveButton = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(button, {
          x: x,
          y: y,
          duration: 0.6,
          ease: "power3.out",
        });
      };

      const handleMouseEnter = () => {
        gsap.to(button, {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          scale: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power3.in",
        });
      };

      container.addEventListener("mousemove", moveButton);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", moveButton);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef },
  );

  // Extracting year and location cleanly for the badges
  const projectYear = project.date.split("-")[0];
  const cleanLocation = project.location.split("(")[0].trim();

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Interactive Image Container */}
      <Link
        href={`/projects/${project.slug}`}
        ref={containerRef}
        className="relative block aspect-[4/2.7] overflow-hidden rounded-2xl cursor-none group"
      >
        <div className="w-full h-full">
          <Image
            width={2000}
            height={1000}
            priority
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <ImgWaterMark />
        </div>

        {/* Floating "View Details" follows cursor */}
        <div
          ref={buttonRef}
          className="pointer-events-none absolute top-0 left-0 z-20 flex items-center justify-center w-40 h-16 bg-white rounded-full shadow-xl"
        >
          <span className="text-black font-bold uppercase text-[10px] tracking-[0.2em]">
            View Details
          </span>
        </div>
      </Link>

      {/* Project Metadata */}
      <div className="flex flex-col gap-2 px-2 pt-2">
        <h3 className="item-title">{project.title}</h3>

        <div className="flex flex-wrap gap-2">
          {project.categories.slice(0, 2).map((cat) => (
            <span key={cat} className="tag">
              {cat}
            </span>
          ))}
          {/* Date and Location badge */}
          <span className="tag">
            {projectYear} — {cleanLocation}
          </span>
        </div>
      </div>
    </div>
  );
}
