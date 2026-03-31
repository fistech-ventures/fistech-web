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
  TrendingUp,
  Users,
  Palette,
  Layout,
  PenTool,
  Briefcase,
  FileText,
  User,
  Check,
  BarChart,
  LucideIcon,
} from "lucide-react";
import { Service as ServiceType } from "@/types";
import { SERVICES_DATA } from "@/data/service";

const IconMap: Record<string, LucideIcon> = {
  search: Search,
  layers: Layers,
  code: Code,
  rocket: Rocket,
  smartphone: Smartphone,
  heart: Heart,
  shield: Shield,
  "trending-up": TrendingUp,
  users: Users,
  palette: Palette,
  layout: Layout,
  "pen-tool": PenTool,
  tool: Briefcase,
  "file-text": FileText,
  user: User,
  check: Check,
  "bar-chart": BarChart,
};

export default function Service() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="bg-white">
      {SERVICES_DATA.map((service, index) => (
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
  service: ServiceType;
  isOpen: boolean;
  onClick: () => void;
}

function ServiceItem({ service, isOpen, onClick }: ServiceItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const iconKey = service.features[0]?.icon || "code";
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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10">
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
              <h3
                ref={titleRef}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-black transition-colors duration-300"
              >
                {service.hero.title}
              </h3>

              <div className="relative min-h-[30px] md:min-h-[40px] flex items-center">
                {isOpen ? (
                  <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl animate-in fade-in slide-in-from-top-2 duration-500">
                    {service.overview.description}
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2 animate-in fade-in duration-500">
                    {service.overview.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-black/10 text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/50 group-hover:text-white/40 group-hover:border-white/10 transition-colors"
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
