"use client";

import React, { useState, useEffect } from "react";
import { Play, X } from "lucide-react";

const ProjectDiscovery = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Lock background scrolling when the modal is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    // Cleanup function to ensure scrolling is restored if component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  return (
    <section className="py-24 bg-white text-gray-900 overflow-hidden font-sans">
      {/* Header Block */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-black">
            Design is a Matters
          </h2>
          <p className="text-xl md:text-2xl font-medium text-gray-800 italic opacity-90">
            &ldquo; Lume Studio approached us with a need to modernize their identity and connect with a younger audience.&rdquo;
          </p>
        </div>
      </div>

      <div className="w-full h-[2px] bg-gray-100  mx-auto mb-20" />

      {/* Main Grid */}
      <div className="container mx-auto px-4 ">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Masked Image with Play Button */}
          <div className="relative w-full aspect-[2/1]">
            {/* SVG Clip Path Definition With a Gap */}
            <svg width="0" height="0" className="absolute hidden">
              <defs>
                <clipPath id="do-shape-mask" clipPathUnits="objectBoundingBox">
                  {/* Left "D" shape - exact straight edge and semi-circle */}
                  <rect x="0" y="0" width="0.25" height="1" />
                  <ellipse cx="0.25" cy="0.5" rx="0.25" ry="0.5" />
                  {/* Right "O" shape - scaled down slightly and moved right to create a gap */}
                  <ellipse cx="0.76" cy="0.5" rx="0.24" ry="0.48" />
                </clipPath>
              </defs>
            </svg>

            <div 
              className="absolute inset-0 w-full h-full relative group"
              style={{ clipPath: "url(#do-shape-mask)", WebkitClipPath: "url(#do-shape-mask)" }}
            >
              {/* Static Background Image instead of video */}
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="People on benchmarking"
                className="w-full h-full object-cover rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              
              {/* Play Button Overlay positioned exactly in the center of the right "O" shape */}
              <div 
                onClick={() => setIsVideoOpen(true)}
                className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-[#c6ff00] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ease-out hover:scale-110 cursor-pointer z-10"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-black fill-black ml-1 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-12">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
              Lume Studio approached us with a need to modernize their identity and connect with a younger audience. Our team crafted a bold branding strategy, digital design, and launch campaign that brought their vision.
            </p>

            <ul className="space-y-4 text-base md:text-lg font-bold text-gray-900 tracking-wide">
              <li className="flex items-center gap-3">
                <span className="text-xl leading-none">+</span> Brand Strategy
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl leading-none">+</span> Logo Design & Identity
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl leading-none">+</span> Typography & Color Palette
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl leading-none">+</span> Creative Storytelling
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl leading-none">+</span> Art direction
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-12 pt-8">
              {/* Stat 1 */}
              <div className="flex items-start gap-3">
                <div className="flex items-start tracking-tighter text-gray-950 font-semibold" style={{ fontSize: '5rem', lineHeight: '0.9' }}>
                  96
                  <span className="text-3xl font-bold mt-2 ml-1">%</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-900 max-w-[100px] mt-2">
                  SEO Optimized<br />Content
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-3">
                <div className="flex items-start tracking-tighter text-gray-950 font-semibold" style={{ fontSize: '5rem', lineHeight: '0.9' }}>
                  98
                  <span className="text-3xl font-bold mt-2 ml-1">%</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-900 max-w-[100px] mt-2">
                  Customer<br />Retention Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          {/* Click background to close */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setIsVideoOpen(false)}
          />
          
          <div className="relative w-[90vw] h-[85vh] md:h-[90vh] bg-black overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Standard Auto-playing Video */}
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDiscovery;