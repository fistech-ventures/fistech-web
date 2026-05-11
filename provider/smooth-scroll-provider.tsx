"use client";

import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Observer);
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Observer } from "gsap/Observer";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  useGSAP(() => {
    let smoother = ScrollSmoother.get();

    if (!smoother) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
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
      
      ScrollTrigger.refresh();
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
