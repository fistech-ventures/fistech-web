import React from "react";
import CTAButton from "../shared/cta";
import { MoveDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data/constant";

export default function Banner() {
  return (
    <section className="lg:max-h-[calc(100vh-50px)] flex items-center my-4">
      <div
        className="container mx-auto rounded-3xl overflow-visible"
        style={{
          background: `radial-gradient(circle at 15% 90%, rgba(168, 85, 247, 0.25) 0%, rgba(229, 231, 235, 0) 50%), #F3F4F6`,
        }}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 lg:pl-14 pb-6 md:pb-8 lg:pb-20 lg:text-left pt-24 md:pt-32 lg:pt-28 px-3 lg:px-0">
            <div className="max-w-xl lg:mt-20 mt-0">
              <h1 className="main-headline flex flex-wrap items-center gap-2 pr-5 lg:pr-0">
                <span>Create</span>
                <video
                  autoPlay
                  loop
                  muted
                  className="inline-block w-24 md:w-36 h-12 md:h-16 object-cover rounded-full"
                >
                  <source src="/banner-video.mp4" type="video/mp4" />
                </video>
                <span>Execute Accelerate Digital Growth.</span>
              </h1>
              <p className="description lg:py-8 py-6">
                Improving efficiency, designing uniquely, and executing
                strategic plans to support consistent startup growth.
              </p>
              <div className="flex flex-col md:flex-row gap-5 lg:mt-12">
                <div className="flex flex-col sm:flex-row gap-4 lg:items-center justify-center lg:justify-start">
                  <CTAButton
                    btnText="Get Your Free Consultation"
                    href="/contact"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  {socialLinks.map((social, i) => (
                    <Link
                      key={i}
                      href={social.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 xl:w-12 h-10 xl:h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-secondary hover:text-black transition-all"
                    >
                      <social.Icon size={18} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5 relative">
            <Image
              width={1000}
              height={1000}
              src="/images/home/homebanner.png"
              alt="homebanner"
              className="rounded-2xl w-full object-cover min-h-62.5 h-full"
            />

            <div className="absolute -bottom-8 right-8 lg:bottom-auto lg:right-auto lg:top-1/2 lg:-translate-y-1/2 lg:-left-20 z-20 shrink-0">
              <div className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40 group cursor-pointer shrink-0">
                <div className="absolute inset-0 bg-secondary rounded-full flex items-center justify-center border-foreground border shadow-2xl">
                  <div className="text-black animate-bounce">
                    <MoveDown size={20} className="lg:w-6 lg:h-6" />
                  </div>
                </div>

                <svg
                  className="absolute inset-0 w-full h-full animate-spin-slow group-hover:pause"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="text-[10px] uppercase font-bold tracking-[0.22em] fill-black">
                    <textPath xlinkHref="#circlePath">
                      -Fistech Ventures - Estd:2026
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
