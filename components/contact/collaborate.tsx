import { MapPin, Phone, Send } from "lucide-react";
import React from "react";

export default function CollaborateSection() {
  const contactInfo = [
    {
      id: 1,
      title: "WhatsApp Number",
      value: "+880 1609 302239",
      href: "https://wa.me/+8801609302239",
      icon: Phone,
    },
    {
      id: 2,
      title: "Email Address",
      value: "info@fistech.org",
      href: "mailto:info@fistech.org",
      icon: Send,
    },
    {
      id: 3,
      title: "",
      value: "Cha 192, TB Gate, Mohakhali, Dhaka 1212, Bangladesh",
      href: "https://maps.google.com",
      icon: MapPin,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:py-32">
      <div className="max-w-6xl mx-auto text-center">
        {/* Aesthetic Badge */}
        <div>
          <span className="tag border border-gray-200 px-4 py-1.5 rounded-full text-sm font-medium">
            Let&apos;s Collaborate
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1A1A] mt-8 mb-16">
            Let&apos;s Build Something <br className="hidden md:block" /> Great
            Together!
          </h2>
        </div>

        {/* 2. Map the Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 lg:gap-12">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-3 lg:gap-5 md:text-left group"
              >
                {/* Icon Wrapper */}
                <div className="">
                  <Icon
                    className={`lg:w-8 lg:h-8 text-foreground transition-colors duration-300`}
                  />
                </div>
                {/* Text Content */}
                <div className="">
                  <p className="text-sm font-bold tracking-widest text-start">
                    {item.title}
                  </p>
                  {item.id === 3 ? (
                    <p className="text-base lg:text-xl font-bold text-[#1A1A1A] leading-tight">
                      {item.value}
                    </p>
                  ) : (
                    <a
                      href={item.href}
                      target={item.id === 1 ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block text-lg lg:text-xl font-bold text-[#1A1A1A] wrap-break-word"
                    >
                      {item.value}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
