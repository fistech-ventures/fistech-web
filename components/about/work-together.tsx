"use client";

import React, { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

export default function WorkTogether() {
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    fetch("/gift.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  const handleMouseEnter = () => {
    if (!lottieRef.current) return;
    // Re-enable looping in case it was turned off by a previous mouse leave
    if (lottieRef.current.animationItem) {
      lottieRef.current.animationItem.loop = true;
    }
    lottieRef.current.goToAndPlay(0, true);
  };

  const handleMouseLeave = () => {
    if (!lottieRef.current?.animationItem) return;
    lottieRef.current.animationItem.loop = false;
  };

  return (
    <section className="py-12 md:py-20 bg-black border-b-2 border-gray-800 px-4">
      <div className="container mx-auto">
        <div className="relative flex flex-col items-center justify-center">
          {animationData && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
              <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={true}
                autoplay={false}
                onComplete={() => {
                  lottieRef.current?.goToAndStop(0, true);
                  if (lottieRef.current?.animationItem) {
                    lottieRef.current.animationItem.loop = true;
                  }
                }}
                style={{ width: "600px", height: "1000px" }}
              />
            </div>
          )}

          <div className="relative z-10 flex flex-col items-center gap-10 py-20">
            <h4 className="text-4xl font-medium text-center text-white">
              Let&apos;s Collaborate!
            </h4>
            <h2 className="font-medium text-white xl:text-9xl lg:text-7xl md:text-6xl text-5xl text-center">
              Work Together
            </h2>
            <button
              className="py-5 px-10 rounded-full bg-[#1e1e1e] text-white text-2xl font-medium hover:bg-secondary hover:text-black duration-300 ease-in-out cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => window.location.href = "mailto:info@fistech.org"}
            >
              info@fistech.org
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
