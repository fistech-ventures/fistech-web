import React from 'react';
import Link from 'next/link'; // For when you integrate real routing

const ProjectImpact = () => {
  return (
    <section className="py-24 bg-white text-gray-900 font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Top Text Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-32">
          
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
              Typography
            </h3>
            <div className="space-y-6 text-gray-700 font-medium leading-relaxed">
              <p>
                Typography sets the tone of your brand. Bold, modern fonts
                create impact for headings, while clean, readable fonts keep
                body text clear and professional.
              </p>
              <p>
                Bold and modern typefaces for headings help create strong
                impact and capture attention instantly.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
              Visual Content
            </h3>
            <div className="space-y-6 text-gray-700 font-medium leading-relaxed">
              <p>
                Visual hierarchy guides the eye through size, weight, color, and
                spacing — ensuring the most important content gets noticed
                first and builds user trust.
              </p>
              <p>
                Proper hierarchy avoids clutter, improves readability, and creates
                a logical flow that keeps users engaged.
              </p>
            </div>
          </div>
          
        </div>

        {/* Project Navigation Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mt-16 pt-8">
          
          {/* Previous Project */}
          <Link href="#" className="flex items-center gap-4 sm:gap-6 group cursor-pointer w-full sm:w-auto hover:opacity-80 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-black transition-colors group-hover:bg-gray-200 shrink-0">
              &lt; Prev
            </div>
            <span className="text-xl md:text-2xl font-medium tracking-tight text-black whitespace-nowrap">
              Monarch Studio
            </span>
          </Link>
          
          {/* Next Project */}
          <Link href="#" className="flex items-center justify-end gap-4 sm:gap-6 group cursor-pointer w-full sm:w-auto hover:opacity-80 transition-opacity">
            <span className="text-xl md:text-2xl font-medium tracking-tight text-black whitespace-nowrap text-right">
              Orbit Studio
            </span>
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-black transition-colors group-hover:bg-gray-200 shrink-0">
              Next &gt;
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ProjectImpact;