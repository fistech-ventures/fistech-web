"use client";
import Image from "next/image";
import { Testimonial } from "@/types";
import RatingStars from "./rating-stars";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TestimonialCardProps {
  item: Testimonial;
}

export default function TestimonialCard({ item }: TestimonialCardProps) {
  const maxLength = 105;
  const isLong = item.description.length > maxLength;
  let displayText = item.description;
  if (isLong) {
    const lastSpace = item.description.lastIndexOf(" ", maxLength);
    displayText = item.description.substring(0, lastSpace > 0 ? lastSpace : maxLength) + "... ";
  }

  return (
    <div className="relative group shrink-0 w-full rounded-2xl p-6 md:p-8 flex flex-col h-full shadow-sm border border-gray-100 bg-[#f9fafb] hover:shadow-md transition-shadow">
      <div className="text-blue-600 text-6xl font-serif leading-none h-8 mb-4">
        &ldquo;
      </div>

      <div className="grow mb-6">
        <p className="lg:text-xl leading-normal lg:mb-10 mb-3 text-justify text-gray-800">
          {displayText}
          {isLong && (
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-blue-600 cursor-pointer font-medium text-lg hover:underline inline ml-1">
                  Read more
                </button>
              </DialogTrigger>
              <DialogContent className="flex flex-col w-[95vw] max-h-[90vh] sm:max-w-150 lg:max-w-225 bg-white p-6 md:p-10 rounded-2xl">
                <DialogHeader className="shrink-0">
                  <DialogTitle className="text-blue-600 text-6xl font-serif leading-none h-8 mb-4">&ldquo;</DialogTitle>
                </DialogHeader>
                <div className="mt-4 overflow-y-auto grow pr-2 lg:text-xl leading-normal text-justify text-gray-800">
                  {item.description}
                </div>
              <div className="shrink-0 flex items-center justify-between mt-8 pt-6 border-t border-gray-100 mb-4">
                <Image
                  width={300}
                  height={300}
                  src={item.businessLogo}
                  alt="Company Logo"
                  className="w-24 h-12 object-contain object-left"
                />
                <RatingStars rating={item.rating} />
              </div>
              <div className="shrink-0 flex items-center gap-4">
                <Image
                  width={60}
                  height={60}
                  src={item.profileImage || "/images/home/clientsprofile.png"}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h4 className="font-bold text-[#1A1A1A] text-lg leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium mt-1">
                    {item.title}
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
        </p>
      </div>

      <div className="mt-auto">
        <div className="mb-4 pb-4 border-b border-gray-100 flex items-center justify-between">
          <Image
            width={300}
            height={300}
            src={item.businessLogo}
            alt="Company Logo"
            className="w-20 md:w-24 h-10 object-contain object-left"
          />
          <RatingStars rating={item.rating} />
        </div>

        <div className="flex items-center gap-4">
          <Image
            width={60}
            height={60}
            src={item.profileImage || "/images/home/clientsprofile.png"}
            alt={item.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h4 className="font-bold text-[#1A1A1A] text-lg leading-tight">
              {item.name}
            </h4>
            <p className="text-sm text-gray-500 font-medium mt-1">
              {item.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
