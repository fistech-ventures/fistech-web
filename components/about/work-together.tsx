import Link from "next/link";
import React from "react";

export default function WorkTogether() {
  return (
    <section className="py-12 md:py-20 bg-black border-b-2 border-gray-800 px-4">
      <div className="container mx-auto">
        <h4 className="text-2xl md:text-4xl font-medium text-center text-white">
          Let’s Collaborate!
        </h4>

        <h2 className="font-medium text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-center py-8 md:py-10 ">
          Work Together
        </h2>

        <div className="flex justify-center">
          <Link
            href="mailto:info@fistech.org"
            className="py-4 px-6 md:py-5 md:px-10 rounded-full bg-[#1e1e1e] text-lg md:text-2xl font-medium hover:bg-secondary hover:text-black transition-colors duration-300 ease-in-out cursor-pointer text-white"
          >
            info@fistech.org
          </Link>
        </div>
      </div>
    </section>
  );
}
