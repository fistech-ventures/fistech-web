"use client";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CasecaseStudyCardProps = {
  caseStudy: {
    caseStudyId: string;
    slug: string;
    hero: {
      mainImage: string;
    };
    metadata: {
      title: string;
      publishDate: string;
      readingTime: string;
    };
  };
};

export default function CasecaseStudyCard({
  caseStudy,
}: CasecaseStudyCardProps) {
  const imageRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (!imageRef.current) return;

    const img = imageRef.current.querySelector("img");

    if (!img) return;

    gsap.set(img, { scale: 1.2 });

    gsap.to(img, {
      scale: 1,
      duration: 1.2,
      ease: "power3.out",

      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);
  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <article className="group cursor-pointer">
        <div
          ref={imageRef}
          className="relative aspect-16/10 overflow-hidden rounded-xl bg-gray-100"
        >
          <Image
            width={2000}
            height={1000}
            src={caseStudy.hero.mainImage}
            alt={caseStudy.metadata.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Arrow Button */}
          <div className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center opacity-0 -translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg">
            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-black" />
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 text-sm md:text-base font-medium text-gray-500">
          <span>
            {new Date(caseStudy.metadata.publishDate).toLocaleDateString(
              "en-GB",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              },
            )}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span>{caseStudy.metadata.readingTime}</span>
        </div>

        <h3 className="mt-4 item-title">{caseStudy.metadata.title}</h3>
      </article>
    </Link>
  );
}
