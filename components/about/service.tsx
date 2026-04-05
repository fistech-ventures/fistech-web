"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Plus,
  Search,
  Layers,
  Code,
  Rocket,
  Smartphone,
  Heart,
  Shield,
  Users,
  Palette,
  Layout,
  Briefcase,
  User,
  Check,
  BarChart,
  TabletSmartphone,
  AppWindow,
  Paintbrush,
} from "lucide-react";
import { solutions } from "@/data/service";
import { Solution } from "@/types";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconMap: Record<string, any> = {
  search: Search,
  layers: Layers,
  code: Code,
  rocket: Rocket,
  smartphone: Smartphone,
  heart: Heart,
  shield: Shield,
  web: AppWindow,
  users: Users,
  palette: Palette,
  layout: Layout,
  mobile: TabletSmartphone,
  tool: Briefcase,
  design: Paintbrush,
  user: User,
  check: Check,
  seo: BarChart,
};

export default function Service() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="bg-white">
      {solutions.map((service, index) => (
        <ServiceItem
          key={service.id}
          service={service}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </section>
  );
}

interface ServiceItemProps {
  service: Solution;
  isOpen: boolean;
  onClick: () => void;
}

function ServiceItem({ service, isOpen, onClick }: ServiceItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const iconKey = service.icon.name || "code";
  const Icon = IconMap[iconKey] || Code;

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    tl.to(
      bgRef.current,
      { height: "100%", opacity: 1, duration: 0.4, ease: "power2.out" },
      0,
    )
      .to(titleRef.current, { color: "#D4FF70", duration: 0.3 }, 0)
      .to(iconRef.current, { color: "#D4FF70", duration: 0.3 }, 0);

    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => tl.reverse();

    const el = containerRef.current;
    el?.addEventListener("mouseenter", handleMouseEnter);
    el?.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el?.removeEventListener("mouseenter", handleMouseEnter);
      el?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative group border-t border-black/10 last:border-b overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Animated Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-black opacity-0 z-0 pointer-events-none h-0 top-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 py-8 md:py-12 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10">
          {/* Content Block */}
          <div className="flex flex-col sm:flex-row items-start gap-5 md:gap-10 lg:gap-20 flex-1">
            {/* Responsive Icon Size */}
            <div
              ref={iconRef}
              className="shrink-0 text-black transition-colors duration-300"
            >
              <Icon
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                strokeWidth={1.2}
              />
            </div>

            <div className="flex flex-col gap-3 md:gap-5 w-full">
              {/* Responsive Text Sizes */}
              <Link href={`/solutions/${service.slug}`}>
                <h3
                  ref={titleRef}
                  className="inline text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-foreground duration-300 relative before:absolute before:bg-secondary before:-bottom-2 before:left-0 before:h-1 before:w-0 hover:before:w-full before:duration-500"
                >
                  {service.title}
                </h3>
              </Link>

              <div className="relative min-h-7.5 md:min-h-10 flex items-center">
                {isOpen ? (
                  <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl animate-in fade-in slide-in-from-top-2 duration-500">
                    {service.shortDescription}
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2 animate-in fade-in duration-500">
                    {service.keywords.map((tag: string) => (
                      <span
                        key={tag}
                        className="tag group-hover:text-white/40 group-hover:border-secondary/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Responsive Plus Button */}
          <div className="flex justify-end md:block shrink-0">
            <div
              className={`w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 z-20 ${
                isOpen
                  ? "rotate-45 bg-[#D4FF70] text-black border-transparent"
                  : "bg-white text-black group-hover:bg-white group-hover:border-transparent"
              }`}
            >
              <Plus
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                strokeWidth={2.5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
