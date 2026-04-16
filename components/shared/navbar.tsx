"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Mail, X, Menu, Asterisk, ChevronRight } from "lucide-react";
import CTAButton from "./cta";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const navRef = useRef(null);
  const menuRef = useRef(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useGSAP(() => {
    gsap.to(navRef.current, {
      y: isVisible ? 0 : -100,
      duration: 0.5,
      ease: "power4.out",
    });
  }, [isVisible]);

  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(menuRef.current, {
          x: 0,
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.7,
          ease: "expo.out",
        });
        gsap.fromTo(
          menuItemsRef.current,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            delay: 0.2,
            ease: "power2.out",
          },
        );
      } else {
        gsap.to(menuRef.current, {
          x: "110%",
          opacity: 0,
          pointerEvents: "none",
          duration: 0.5,
          ease: "expo.in",
        });
      }
    },
    { scope: menuRef, dependencies: [isOpen] },
  );

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Company", path: "/about" },
    { name: "Solution", path: "/solutions" },
    { name: "Portfolio", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-40 bg-transparent transition-all duration-300 py-2 md:py-4 lg:py-6"
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-x-16 lg:pl-10 pl-5">
            <Link href="/">
              <div className="flex flex-col leading-none cursor-pointer">
                <Image
                  width={300}
                  height={100}
                  src="/logo-p.png"
                  alt="Fistech Logo"
                  className="lg:w-40 md:w-30 sm:w-25 w-18 h-20 object-contain"
                />
              </div>
            </Link>

            <div
              className="hidden md:flex items-center gap-2 text-foreground/60 text-[13px] font-medium uppercase tracking-wider"
              style={{ fontFamily: "var(--font-kanit)" }}
            >
              <Asterisk size={14} className="text-black" />
              <span>Based on Europe, USA & UK</span>
            </div>
          </div>

          <div className="flex items-center gap-4 pr-5">
            <CTAButton
              btnText="Let's Talk"
              href="/contact"
              isSecondary={true}
            />

            <button
              onClick={() => setIsOpen(true)}
              className={`p-3 border ${pathname == "/" ? "lg:text-white" : "lg:text-foreground"} rounded-full hover:rotate-90 duration-500 ease-in-out cursor-pointer hover:bg-secondary hover:text-foreground`}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* The Menu */}
      <div
        ref={menuRef}
        className="fixed top-6 right-6 z-50 w-[90%] max-w-105 bg-white rounded-[2.5rem] shadow-2xl p-10 flex flex-col border border-gray-100 translate-x-[110%] opacity-0"
      >
        <div className="flex justify-end items-center gap-4 mb-6">
          <button
            onClick={closeMenu}
            className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col space-y-2 mb-12">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.path}
              onClick={closeMenu}
              ref={(el) => {
                menuItemsRef.current[i] = el;
              }}
              className="flex items-center justify-between py-4 border-b border-gray-50 group transition-all"
            >
              <span className="text-2xl font-bold text-gray-900 group-hover:translate-x-2 transition-transform duration-300">
                {link.name}
              </span>
              <ChevronRight
                size={20}
                className="text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all"
              />
            </a>
          ))}
        </div>

        <div className="mt-auto pt-8 border-t border-gray-100">
          <p className="text-gray-400 font-bold text-[11px] uppercase tracking-[0.2em] mb-6">
            Contact Info
          </p>
          <div className="space-y-6">
            <Link
              href="mailto:info@fistech.org"
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="bg-black p-3 rounded-full text-white group-hover:bg-[#D4FF70] group-hover:text-black transition-all">
                <Mail size={18} />
              </div>
              <span className="text-[15px] font-bold">info@fistech.org</span>
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-foreground/10 backdrop-blur-xs transition-opacity"
        />
      )}
    </>
  );
}
