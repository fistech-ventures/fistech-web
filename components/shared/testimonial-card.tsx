import React from "react";
import { Quote } from "lucide-react";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  item: Testimonial;
  index: number;
}

export default function TestimonialCard({ item, index }: TestimonialCardProps) {
  return (
    // Added 'group' and 'relative' for the popup positioning
    <div
      className={`relative group shrink-0 w-full rounded-xl p-4 md:p-6 flex flex-col h-full shadow-sm border border-transparent hover:border-gray-200 transition-colors ${index % 2 === 0 ? "bg-[#E9E9E9]" : "bg-white"}`}
    >
      {/* Full Description Popup */}
      <div className="absolute inset-x-0 bottom-full mb-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
        <div className="bg-gray-900 text-white text-sm p-4 rounded-lg shadow-xl border border-gray-700 mx-2">
          {item.description}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45"></div>
        </div>
      </div>

      <div className="text-gray-400 mb-8">
        <Quote size={48} fill="currentColor" className="opacity-70" />
      </div>

      <p className="description leading-normal lg:mb-10 mb-5 grow text-justify line-clamp-6">
        {item.description}
      </p>

      <div className="mb-8 pt-8 border-t border-gray-300/60">
        <img
          src={item.businessLogo}
          alt="Logo"
          className="h-7 w-auto object-contain"
        />
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
