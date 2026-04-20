"use client";

import gsap from "gsap";
import { CheckCircle2 } from "lucide-react";
import React, { useRef, useEffect } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Create a timeline for the entrance
      const tl = gsap.timeline();

      tl.to(backdropRef.current, {
        opacity: 1,
        display: "flex",
        duration: 0.3,
      }).fromTo(
        contentRef.current,
        { scale: 0.8, y: 50, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.1",
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    // Exit animation
    const tl = gsap.timeline({
      onComplete: onClose,
    });

    tl.to(contentRef.current, {
      scale: 0.9,
      y: 20,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    }).to(backdropRef.current, {
      opacity: 0,
      duration: 0.2,
    });
  };

  if (!isOpen && !gsap.isTweening([backdropRef.current, contentRef.current]))
    return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-100 hidden items-center justify-center p-4 opacity-0 bg-black/40 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-foreground text-secondary">
            <CheckCircle2 size={48} />
          </div>

          <h3 className="mb-2 text-2xl font-bold text-[#1A1A1A]">
            Thanks for your message!
          </h3>
          <p className="text-gray-500">
            We have received your inquiry. Our team will contact you soon to
            discuss your project.
          </p>

          <button
            onClick={handleClose}
            className="mt-8 w-full rounded-full bg-secondary py-4 font-bold text-foreground active:scale-95 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
