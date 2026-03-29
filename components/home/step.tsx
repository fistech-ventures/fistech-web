import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Step() {
  return (
    <section className="py-6 md:py-8 lg:py-10 xl:py-16 px-4 md:px-0">
      <div className="flex items-center gap-2 md:gap-0">
        <div className="hidden sm:block bg-foreground/10 h-px w-full"></div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full  bg-foreground/5 py-1 px-6 rounded-lg md:rounded-full gap-4 md:gap-8 border border-foreground/5">
          <h4 className="text-sm md:text-base font-normal text-foreground text-center md:text-left leading-relaxed text-nowrap">
            Take the First Step Toward Startup Success.
          </h4>

          <Link
            href="tel:+9902577576980"
            className="text-sm md:text-base font-medium text-foreground underline decoration-1 underline-offset-4 flex items-center gap-2 whitespace-nowrap hover:opacity-70 transition-opacity"
          >
            <Phone size={16} className="text-foreground/70" />
            +99 (0) 257 757 6980
          </Link>
        </div>

        <div className="hidden sm:block bg-foreground/10 h-px w-full"></div>
      </div>
    </section>
  );
}
