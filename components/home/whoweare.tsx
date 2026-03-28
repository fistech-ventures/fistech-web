import React from "react";
import SectionTag from "../shared/section-tag";
import CTAButton from "../shared/cta";
import Link from "next/link";
import { Send } from "lucide-react";

export default function Whoweare() {
  return (
    <section className="lg:py-20 py-10">
      <div className="container mx-auto">
        <SectionTag sectiontag="Who We Are" />
        <h2 className="section-title text-center max-w-6xl mx-auto">
          We are not just an agency—we are your strategic partner creative
          collaborator, & technology guide on your heading-image startup
          journey.
        </h2>
        <div className="flex justify-center items-center gap-9 mt-15">
          <CTAButton btnText="Discover Us" href="/"/>
          <div className="flex gap-5 items-center">
            <div className="bg-secondary w-15 h-15 rounded-full flex justify-center items-center cursor-pointer">
              <Send className="animate-bounce" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-[#999999] text-base font-medium">
                To More Inquiry
              </h4>
              <Link
                href="tel:+9902577576980"
                className="text-xl font-medium text-foreground underline"
              >
                +99 (0) 257 757 6980
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
