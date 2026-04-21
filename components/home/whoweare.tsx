"use client";

import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";
import CTAButton from "../shared/cta";
import SplitText from "gsap/SplitText";
import Marquee from "react-fast-marquee";
import { contactInfo } from "@/data/constant";
import SectionTag from "../shared/section-tag";
import React, { useEffect, useRef } from "react";


interface WhoweareProps {
  logos: string[];
}

export default function Whoweare({ logos = [] }: WhoweareProps) {
  const email = contactInfo.find((item) => item.identifier === "email");

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const splitRef = useRef<SplitText | null>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const setup = () => {
      splitRef.current?.revert();

      splitRef.current = SplitText.create(titleRef.current as HTMLElement, {
        type: "chars,words,lines",
      });

      gsap.from(splitRef.current.chars, {
        x: 150,
        opacity: 0,
        duration: 0.7,
        ease: "power4",
        stagger: 0.04,
      });
    };

    setup();

    window.addEventListener("resize", setup);

    return () => {
      splitRef.current?.revert();
      window.removeEventListener("resize", setup);
    };
  }, []);

  return (
    <section className="lg:pt-20 pt-10 border-b border-[#020202]/30 pb-16 lg:pb-20">
      <div className="container mx-auto px-4">
        <SectionTag sectiontag="Who We Are" />

        <h2
          ref={titleRef}
          className="section-title text-center max-w-6xl mx-auto leading-tight"
        >
          Beyond an agency — we streamline efficiency, create distinctive
          <video
            autoPlay
            loop
            muted
            playsInline
            className="inline-block align-middle h-[1em] w-auto rounded-full mx-2"
          >
            <source src="/who-are.mp4" type="video/mp4" />
          </video>
          designs, and deliver strategies that grow startups
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mt-10 lg:mt-15">
          <CTAButton btnText="Discover Us" href="/about" isDark={false} />

          <div className="flex gap-4 items-center">
            <div className="bg-secondary w-12 h-12 md:w-15 md:h-15 rounded-full flex justify-center items-center cursor-pointer">
              <Link href={`mailto:${email?.value}`}>
                <Send className="w-6 h-6 md:w-8 md:h-8" />
              </Link>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[#999999] text-sm md:text-base font-medium">
                For More Inquiry
              </h4>
              <Link
                href={`mailto:${email?.value}`}
                className="text-lg md:text-xl font-medium hover:text-gray-400 transition-colors"
              >
                {email?.value}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-15">
          <h3 className="text-lg md:text-[22px] font-medium text-foreground text-center">
            We&apos;ve 100+ Trusted Clients Worldwide
          </h3>
        </div>

        <div className="mt-8 lg:mt-15 overflow-hidden">
          <Marquee speed={90} gradient={false} pauseOnHover direction="right">
            <div className="flex items-center gap-5 md:gap-16 pr-12 md:pr-20">
              {logos.map((file) => (
                <div
                  key={file}
                  className="relative w-20 md:w-28 h-14 md:h-18 p-2 shrink-0 border rounded-sm border-secondary"
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={`/images/clients/${file}`}
                    alt={file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
