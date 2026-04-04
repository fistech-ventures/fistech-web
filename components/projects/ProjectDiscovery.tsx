"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Play, Plus, X } from "lucide-react";

interface VisionData {
  header: string;
  shortSummary: string;
  fullDescription: string;
  servicesProvided: string[];
}

interface ProjectDiscoveryProps {
  visionData: VisionData;
  imageSrc?: string;
  videoSrc?: string;
}

const ProjectDiscovery = ({
  visionData,
  imageSrc = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  videoSrc = "/solution-video.mp4",
}: ProjectDiscoveryProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  if (!visionData) return null;

  const modal = (
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={() => setIsVideoOpen(false)}
      />

      <div className="relative w-[90vw] h-[85vh] md:h-[90vh] bg-black overflow-hidden shadow-2xl z-10">
        {/* Close Button */}
        <button
          onClick={() => setIsVideoOpen(false)}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video */}
        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  return (
    <section className="section-gap text-foreground overflow-hidden">
      {/* Header Block */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">{visionData.header}</h2>
        <p className="description">{visionData.shortSummary}</p>
      </div>

      <div className="w-full h-0.5 bg-gray-100 mx-auto section-gap" />

      {/* Main Grid */}
      <div className="container mx-auto">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-24 items-center">
          <div className="relative w-full aspect-2/1">
            <div className="w-full h-full group">
              <img
                src={imageSrc}
                alt={visionData.header}
                className="w-full h-full object-cover rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-105"
              />

              <div
                onClick={() => setIsVideoOpen(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-[#c6ff00] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ease-out hover:scale-110 cursor-pointer z-10"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-black fill-black ml-1 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex-1 xl:space-y-6 lg:space-y-5 md:space-y-4 space-y-3 text-base lg:text-xl font-medium">
            <p className="description">{visionData.fullDescription}</p>
            <ul className="list-none! xl:space-y-3">
              {visionData.servicesProvided.map((item: string) => (
                <li key={item} className="flex items-center gap-2 capitalize">
                  <Plus size={12} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Portal Modal */}
      {isVideoOpen && mounted && createPortal(modal, document.body)}
    </section>
  );
};

export default ProjectDiscovery;
