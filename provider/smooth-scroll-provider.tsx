"use client";

import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Observer);
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Observer } from "gsap/Observer";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  useEffect(() => {
    let smoother = ScrollSmoother.get();

    if (!smoother) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2.5,
        effects: true,
        normalizeScroll: true,
      });
    }

    const timeout = setTimeout(() => {
      if (!smoother) return;

      gsap.killTweensOf(smoother);

      gsap.to(smoother, {
        scrollTop: 0,
        duration: 1,
        ease: "power1.out",
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div id="smooth-wrapper" className="h-screen overflow-hidden">
      <div id="smooth-content" className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
