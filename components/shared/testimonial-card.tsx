"use client";
import Image from "next/image";
import { Testimonial } from "@/types";
import RatingStars from "./rating-stars";
import React, { useState, useRef, useEffect } from "react";
import { Quote, ChevronDown, ChevronUp } from "lucide-react";

interface TestimonialCardProps {
  item: Testimonial;
  index: number;
}

export default function TestimonialCard({ item, index }: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      // scrollHeight > clientHeight means text is being cut off
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  }, [item.description]);

  return (
    <div
      className={`relative group shrink-0 w-full rounded-xl p-4 md:p-6 flex flex-col h-full shadow-sm border border-secondary hover:border-gray-200 ${
        index % 2 === 0 ? "bg-[#E9E9E9]" : "bg-white"
      }`}
    >
      {/* Hover overlay — desktop only */}
      <div className="hidden md:flex absolute top-0 left-0 rounded-xl w-full z-50 items-start opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto backdrop-blur-xl bg-white/30 invisible group-hover:visible">
        <div className="w-full rounded-xl p-5 text-black text-base border-2 border-secondary text-justify leading-relaxed max-h-full overflow-y-auto">
          {item.description}
        </div>
      </div>

      <div className="text-gray-400 mb-8">
        <Quote size={48} fill="currentColor" className="opacity-70" />
      </div>

      <div className="grow">
        <p
          ref={textRef}
          className={`lg:text-xl leading-normal lg:mb-10 mb-3 text-justify ${
            expanded ? "" : "line-clamp-6"
          }`}
        >
          {item.description}
        </p>

        {/* Only renders if text is actually clamped */}
        {isClamped && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="md:hidden flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors mb-4"
          >
            {expanded ? (
              <>
                Show less <ChevronUp size={16} />
              </>
            ) : (
              <>
                Read more <ChevronDown size={16} />
              </>
            )}
          </button>
        )}
      </div>

      <div className="mb-4 pt-4 border-t border-gray-300/60 flex items-center justify-between">
        <Image
          width={300}
          height={300}
          src={item.businessLogo}
          alt="Logo"
          className="w-20 md:w-28 h-14 md:h-18 object-contain"
        />
        <RatingStars rating={item.rating} />
      </div>

      <div className="flex items-center gap-4">
        <Image
          width={300}
          height={300}
          src={item.profileImage || ""}
          alt={item.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h4 className="font-bold text-[#1A1A1A] text-lg leading-tight">
            {item.name}, {item.country}
          </h4>
          <p className="text-sm text-gray-500 font-medium mt-1">{item.title}</p>
        </div>
      </div>
    </div>
  );
}
