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
      // Find all elements marked as parallax containers
      const containers = gsap.utils.toArray<HTMLElement>('.parallax-container');
      
      containers.forEach((container) => {
        // The image to scrub is defined inside the container
        const img = container.querySelector('.parallax-img');
        
        if (img) {
          gsap.to(img, {
            yPercent: 30, // Distance traveled 
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
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="w-full flex flex-col pt-10 pb-16">
      <div className="px-2 py-3 sm:px-4 sm:py-5 lg:p-5">
        
        {/* Top Row: 2 Images (Single column on mobile/tablet, side-by-side on desktop) with Parallax */}
        <div className="flex flex-col lg:flex-row w-full lg:h-[40vh] xl:h-[60vh]">
          {/* Image 1 Box */}
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
            <div className="absolute -top-[20%] left-0 h-[140%] w-full parallax-img">
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
