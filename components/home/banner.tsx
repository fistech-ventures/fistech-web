import React from "react";
import CTAButton from "../shared/cta";
import { Facebook, Linkedin, MoveDown, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Banner() {
  const socialLinks = [
    { Icon: Facebook, path: "https://facebook.com/fistech" },
    { Icon: Twitter, path: "https://twitter.com/fistech" },
    { Icon: Linkedin, path: "https://linkedin.com/company/fistech" },
    { Icon: Youtube, path: "https://youtube.com/fistech" },
  ];
  return (
    <section className="lg:max-h-[calc(100vh-64px)] flex items-center overflow-hidden my-4 px-4">
      <div
        className="container mx-auto rounded-3xl overflow-visible"
        style={{
          background: `radial-gradient(circle at 15% 90%, rgba(168, 85, 247, 0.25) 0%, rgba(229, 231, 235, 0) 50%), #F3F4F6`,
        }}
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
          <div className="w-full lg:w-3/5 px-6 py-12 lg:py-20 text-center lg:text-left order-2 lg:order-1">
            <div className="max-w-xl mx-aut lg:mt-20 mt-0">
              <h1 className="main-headline text-3xl md:text-5xl lg:text-6xl font-bold">
                Design & Development for Startup.
              </h1>
              <p className="description lg:py-8 py-6">
                We provide tailored strategies, creative design, and rapid
                development for startups ready to grow fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <CTAButton btnText="Get Your Free Consultation" href="/contact" />
              </div>
              <div className="flex gap-4 mt-10 lg:justify-start justify-center">
                {socialLinks.map((social, i) => (
                  <Link
                    key={i}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center hover:bg-secondary hover:text-black transition-all"
                  >
                    <social.Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5 relative order-1 lg:order-2">
            <img
              src="/images/home/homebanner.png"
              alt="homebanner"
              className="rounded-2xl w-full object-cover min-h-62.5 h-full"
            />

            <div className="absolute -bottom-8 right-8 lg:bottom-auto lg:right-auto lg:top-1/2 lg:-translate-y-1/2 lg:-left-20 z-20">
              <div className="relative flex items-center justify-center w-24 h-24 md:w-32 lg:w-40 lg:h-40 group cursor-pointer">
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
                      Fistech Ventures Estd 2026
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
