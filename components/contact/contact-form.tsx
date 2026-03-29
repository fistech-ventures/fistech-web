"use client";

import React, { useState } from "react";
import CTAButton from "../shared/cta";

export default function ContactForm() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    "Web Development",
    "UI/UX Design",
    "Digital Marketing",
    "Branding & Creative Art",
    "SaaS Application",
    "Motion Design",
    "3D Art & Direction",
    "Product Design",
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest],
    );
  };

  return (
    <section className="bg-white border-y">
      <div className="py-5 md:py-7 lg:py-12 xl:py-16 px-5 md:px-16 lg:px-24 xl:px-32 max-w-4xl border-x mx-auto space-y-12">
        {/* 1. Interests Section */}
        <div className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
            I&apos;m Interested with in...
          </h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {interests.map((item) => (
              <button
                key={item}
                onClick={() => toggleInterest(item)}
                className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ${
                  selectedInterests.includes(item)
                    ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Form Fields Section */}
        <form className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 lg:gap-x-8 gap-y-4 md:gap-y-6 xl:gap-y-7">
          {/* Full Name */}
          <div className="">
            <label className="text-lg font-medium text-foreground">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Mr. Daniel Robert"
              className="w-full bg-[#F2F2F2] border-none rounded-xl px-6 py-4 text-gray-700 focus:ring-2 focus:ring-gray-200 transition-all outline-none mt-1 lg:mt-2"
            />
          </div>

          {/* Email Address */}
          <div className="">
            <label className="text-lg font-medium text-foreground">
              Email Address
            </label>
            <input
              type="email"
              placeholder="info@example.com"
              className="w-full bg-[#F2F2F2] border-none rounded-xl px-6 py-4 text-gray-700 focus:ring-2 focus:ring-gray-200 transition-all outline-none mt-1 lg:mt-2"
            />
          </div>

          {/* Phone Number */}
          <div className="">
            <label className="text-lg font-medium text-foreground">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+1 (234) 567-580"
              className="w-full bg-[#F2F2F2] border-none rounded-xl px-6 py-4 text-gray-700 focus:ring-2 focus:ring-gray-200 transition-all outline-none mt-1 lg:mt-2"
            />
          </div>

          {/* Company */}
          <div className="">
            <label className="text-lg font-medium text-foreground">
              Company
            </label>
            <input
              type="text"
              placeholder="Onetrack Express"
              className="w-full bg-[#F2F2F2] border-none rounded-xl px-6 py-4 text-gray-700 focus:ring-2 focus:ring-gray-200 transition-all outline-none mt-1 lg:mt-2"
            />
          </div>

          {/* Message (Spans full width on desktop) */}
          <div className="md:col-span-2">
            <label className="text-lg font-medium text-foreground">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write a short note"
              className="w-full bg-[#F2F2F2] border-none rounded-2xl px-6 py-5 text-gray-700 focus:ring-2 focus:ring-gray-200 transition-all outline-none mt-1 lg:mt-2 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <CTAButton btnText="Submit Inquiry" href="/" />
          </div>
        </form>
      </div>
    </section>
  );
}
