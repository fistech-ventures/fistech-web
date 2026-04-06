import React from "react";
import { Quote } from "lucide-react";
import { Testimonial } from "@/types";
import RatingStars from "./rating-stars";

interface TestimonialCardProps {
  item: Testimonial;
  index: number;
}

export default function TestimonialCard({ item, index }: TestimonialCardProps) {
  return (
    <div
      className={`relative group  shrink-0 w-full rounded-xl p-4 md:p-6 flex flex-col h-full shadow-sm border border-secondary hover:border-gray-200 ${index % 2 === 0 ? "bg-[#E9E9E9]" : "bg-white"}`}
    >
      {/* Full Description Popup — overlays the card from the top */}
      <div className="absolute top-0 left-0 rounded-xl w-full z-50 flex items-start opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto backdrop-blur-xl bg-white/30">
        <div className="w-full rounded-xl p-5 text-black text-base border-2 border-secondary text-justify leading-relaxed overflow-y-auto">
          {item.description}
        </div>
      </div>

      <div className="text-gray-400 mb-8">
        <Quote size={48} fill="currentColor" className="opacity-70" />
      </div>

      <p className="lg:text-xl leading-normal lg:mb-10 mb-5 grow text-justify line-clamp-6">
        {item.description}
      </p>

      <div className="mb-4 pt-4 border-t border-gray-300/60 flex items-center justify-between">
        <img
          src={item.businessLogo}
          alt="Logo"
          className="w-20 md:w-28 h-14 md:h-18 object-contain"
        />
        <RatingStars rating={item.rating} />
      </div>

      <div className="flex items-center gap-4">
        <img
          src={item.profileImage}
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
