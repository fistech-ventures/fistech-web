import React from "react";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerNav = [
    {
      title: "Company",
      links: [
        { name: "Company", path: "/about" },
        { name: "Our Work", path: "/projects" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Solutions", path: "/solutions" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "FAQ", path: "/faq" },
      ],
    },
  ];
  const socialLinks = [
    { Icon: Facebook, path: "https://facebook.com/fistechventures" },
    { Icon: Twitter, path: "https://twitter.com/fistechventures" },
    { Icon: Linkedin, path: "https://linkedin.com/company/fistechventures" },
    { Icon: Youtube, path: "https://youtube.com/fistechventures" },
  ];

  return (
    <footer className="bg-black">
      <div className="container mx-auto text-white rounded-xl py-5 md:py-8 lg:py-14 px-4">
        {/* Top Section: Logo and Top Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-5 md:mb-8 lg:mb-12">
          <Link href="/" className="footer-fade">
            <Image
              width={300}
              height={100}
              src="/logo-s.png"
              alt="Anio Agency"
              className="h-20 w-40 mb-6 object-contain"
            />
          </Link>

          <div className="footer-fade flex flex-col md:items-center text-start md:text-center">
            <h4 className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-4">
              Office Location
            </h4>
            <Link href="/contact">
              <address className="not-italic text-lg md:text-xl font-medium leading-snug underline decoration-gray-600 underline-offset-4 cursor-pointer">
                Cha 192, TB Gate, Mohakhali, <br /> Dhaka, 1212, Bangladesh
              </address>
            </Link>
          </div>

          <div className="footer-fade flex flex-col md:items-end">
            <h4 className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-4">
              Contact Info
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="mailto:hello@anioagency.com"
                className="text-lg md:text-xl font-medium hover:text-gray-400 transition-colors"
              >
                info@fistech.org
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Section: CTA and Links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-5 md:mb-8 lg:mb-12">
          <div className="footer-fade">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-md">
              Starting a new project or want to collaborate with us?{" "}
              <Link
                href="/contact"
                className="text-[#D4FF70] underline underline-offset-8 decoration-2 hover:opacity-80 transition-opacity"
              >
                Lets talk
              </Link>
            </h2>

            {/* Centralized Social Rendering */}
            <div className="flex gap-4 mt-10">
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-secondary hover:text-black transition-all"
                >
                  <social.Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {footerNav.map((section) => (
            <div
              key={section.title}
              className="grid grid-cols-1 gap-3 footer-fade self-start lg:nth-[2]:text-center lg:last:text-end"
            >
              {section.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-base md:text-lg lg:text-2xl font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Section: Giant Text and Scroll Top */}
        <div className="relative border-t border-gray-800 pt-10 overflow-hidden">
          <h2 className="text-[10vw] font-black leading-none opacity-20 tracking-tighter uppercase select-none text-center">
            @{new Date().getFullYear()} FISTECH
          </h2>
        </div>
      </div>
    </footer>
  );
}
