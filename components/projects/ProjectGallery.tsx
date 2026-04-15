"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface IProps {
  imageOneSrc: string;
  imageTwoSrc: string;
  mainImageSrc: string;
  imageAlt?: string;
}

export default function ProjectGallery({
  imageOneSrc,
  imageTwoSrc,
  mainImageSrc,
  imageAlt = "Project Gallery Placeholder",
}: IProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const containers = gsap.utils.toArray<HTMLElement>(".parallax-container");

      containers.forEach((container) => {
        const img = container.querySelector(".parallax-img");

        if (img) {
          gsap.to(img, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="w-full flex flex-col section-gap">
      <div className="px-2 sm:px-4">
        <div className="flex flex-col lg:flex-row w-full aspect-4/1.5">
          <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-full p-1 sm:p-2 lg:p-3">
            <div className="relative w-full h-full overflow-hidden parallax-container">
              <div className="absolute -top-[20%] left-0 h-[140%] w-full parallax-img">
                <img
                  src={imageOneSrc}
                  alt={`${imageAlt} Side 1`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Image 2 Box */}
          <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-full p-1 sm:p-2 lg:p-3">
            <div className="relative w-full h-full overflow-hidden parallax-container">
              <div className="absolute -top-[20%] left-0 h-[140%] w-full parallax-img">
                <img
                  src={imageTwoSrc}
                  alt={`${imageAlt} Side 2`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 1 Full-Width Parallax Image */}
        <div className="w-full h-[60vh] md:h-[80vh] xl:h-[90vh] p-1 sm:p-2 lg:p-3">
          <div className="relative w-full h-full overflow-hidden parallax-container">
            <div className="absolute -top-[40%] left-0 h-[140%] w-full parallax-img">
              <img
                src={mainImageSrc}
                alt={`${imageAlt} Main`}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
