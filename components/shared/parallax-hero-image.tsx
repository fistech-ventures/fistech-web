"use client";

import gsap from "gsap";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


interface IProps {
  imageSrc: string;
  imageAlt: string;
}

export default function ParallaxHeroImage({ imageSrc, imageAlt }: IProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        yPercent: 30, // The distance it travels
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative h-[60vh] w-full overflow-hidden"
    >
      <div
        ref={imageRef}
        /* We make this container much taller (140%) and offset it (-20%).
           This provides the "hidden" image data that will be revealed during scroll.
        */
        className="absolute -top-[20%] left-0 h-[140%] w-full"
      >
        <Image
          width={3000}
          height={2000}
          src={imageSrc}
          alt={imageAlt}
          className="object-cover h-[60vh] w-full"
        />
      </div>
    </div>
  );
}
