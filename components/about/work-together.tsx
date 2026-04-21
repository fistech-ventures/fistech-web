"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { contactInfo } from "@/data/constant";
import React, { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

export default function WorkTogether() {
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    fetch("/gift.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  useGSAP(
    () => {
      // 2. FIXED: Register inside hook for production stability
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          subRef.current,
          {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          buttonRef.current,
          {
            y: 40,
            opacity: 0, // Ensure opacity: 0 isn't getting stuck
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );
    },
    { scope: sectionRef },
  );

  const handleMouseEnter = () => {
    if (!lottieRef.current?.animationItem) return;
    lottieRef.current.animationItem.loop = true;
    lottieRef.current.goToAndPlay(0, true);
  };

  const handleMouseLeave = () => {
    if (!lottieRef.current?.animationItem) return;
    lottieRef.current.animationItem.loop = false;
  };

  const email = contactInfo.find((item) => item.identifier === "email");

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-20 bg-black border-b-2 border-gray-800 px-4"
    >
      <div className="container mx-auto">
        <div className="relative flex flex-col items-center justify-center">
          {animationData && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
              <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={true}
                autoplay={false}
                style={{ width: "600px", height: "1000px" }}
              />
            </div>
          )}

          <div className="relative z-10 flex flex-col items-center gap-10 py-20">
            <h4
              ref={titleRef}
              className="text-4xl font-medium text-center text-white"
            >
              Let&apos;s Collaborate!
            </h4>

            <h2
              ref={subRef}
              className="font-medium text-white xl:text-9xl lg:text-7xl md:text-6xl text-5xl text-center"
            >
              Work Together
            </h2>

            {/* 3. FIXED: Button styles for production */}
            <button
              ref={buttonRef}
              className="relative py-5 px-10 rounded-full text-white text-2xl font-medium transition-colors duration-300 ease-in-out cursor-pointer hover:bg-secondary hover:text-black z-20"
              style={{ backgroundColor: "#1e1e1e" }} // Forced inline style for critical BG
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => (window.location.href = `mailto:${email?.href}`)}
            >
              {email?.value || "Get in Touch"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
