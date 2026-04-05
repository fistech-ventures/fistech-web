import Link from "next/link";
import React from "react";

export default function Step() {
  return (
    <section className="py-6 md:pb-8 lg:pb-10 xl:pb-30 px-4 md:px-0">
      <div className="flex items-center gap-2 md:gap-0">
        <div className="hidden sm:block bg-foreground/10 h-px w-full"></div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full  bg-foreground/5 py-1 px-6 rounded-lg md:rounded-full gap-4 md:gap-8 border border-foreground/5">
          <h4 className="text-sm md:text-base font-normal text-foreground text-center md:text-left leading-relaxed text-nowrap">
            Take the First Step Toward Startup Success.
          </h4>

          <Link
            href="mailto:info@fistech.org"
            className="text-lg md:text-xl font-medium hover:text-gray-400 transition-colors"
          >
            info@fistech.org
          </Link>
        </div>

        <div className="hidden sm:block bg-foreground/10 h-px w-full"></div>
      </div>
    </section>
  );
}
