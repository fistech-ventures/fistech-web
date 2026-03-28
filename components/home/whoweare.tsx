import React from "react";
import SectionTag from "../shared/section-tag";
import CTAButton from "../shared/cta";
import Link from "next/link";
import { Send } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function Whoweare() {
  return (
    <section className="lg:pt-20 pt-10 border-b border-[#020202]/30 pb-16 lg:pb-20">
      <div className="container mx-auto px-4">
        <SectionTag sectiontag="Who We Are" />

        <h2 className="section-title text-center max-w-6xl mx-auto">
          We are not just an agency—we are your strategic partner, creative
          collaborator, & technology guide on your heading-image startup
          journey.
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mt-10 lg:mt-15">
          <CTAButton btnText="Discover Us" href="/" />

          <div className="flex gap-4 items-center">
            <div className="bg-secondary w-12 h-12 md:w-15 md:h-15 rounded-full flex justify-center items-center cursor-pointer">
              <Send size={20} className="animate-bounce" />
            </div>
            <div className="flex flex-col">
              <h4 className="text-[#999999] text-sm md:text-base font-medium">
                For More Inquiry
              </h4>
              <Link
                href="tel:+9902577576980"
                className="text-lg md:text-xl font-medium text-foreground underline decoration-1 underline-offset-4"
              >
                +99 (0) 257 757 6980
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-15">
          <h3 className="text-lg md:text-[22px] font-medium text-foreground text-center">
            We’ve 12K+ Trusted Clients Worldwide
          </h3>
        </div>

        <div className="mt-8 lg:mt-15 overflow-hidden">
          <Marquee speed={40} gradient={false} pauseOnHover={true}>
            <div className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="relative w-28 md:w-40 shrink-0 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img
                    src="/logo.svg"
                    alt="logo"
                    className="w-full h-auto object-contain"
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
