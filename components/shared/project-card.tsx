"use client";

import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import Link from "next/link";
import Image from "next/image";
import { IProject } from "@/types";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ImgWaterMark from "./image-watermark";
import ScrollTrigger from "gsap/ScrollTrigger";


interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const containerRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const img = container.querySelector("img");
      if (!img) return;

      gsap.set(img, { scale: 1.2 });

      const anim = gsap.to(img, {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      return () => {
        anim.scrollTrigger?.kill();
        anim.kill();
      };
    },
    { scope: containerRef },
  );

  const projectYear = project.date.split("-")[0];
  const cleanLocation = project.location.split("(")[0].trim();

  return (
    <div className="flex flex-col gap-3 w-full">
      <Link
        href={`/projects/${project.slug}`}
        ref={containerRef}
        className="relative block aspect-[4/2.7] overflow-hidden rounded-2xl"
      >
        <div className="w-full h-full">
          <Image
            width={2000}
            height={1000}
            priority
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <ImgWaterMark />
        </div>
      </Link>

      {/* Metadata */}
      <div className="flex flex-col gap-2 px-2 pt-2">
        <h3 className="item-title">{project.title}</h3>

        <div className="flex flex-wrap gap-2">
          {project.categories.slice(0, 2).map((cat) => (
            <span key={cat} className="tag">
              {cat}
            </span>
          ))}

          <span className="tag">
            {projectYear} — {cleanLocation}
          </span>
        </div>
      </div>
    </div>
  );
}
