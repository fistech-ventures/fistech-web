import Link from "next/link";
import React from "react";

export default function CTAButton({
  btnText,
  href,
  isSecondary = false,
}: {
  btnText: string;
  href: string;
  isSecondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-block overflow-hidden rounded-full"
    >
      <button
        className={`${isSecondary ? "py-1 px-2 md:py-2 md:px-4 lg:py-2 lg:px-4 xl:py-2 xl:px-5 bg-white text-foreground" : "py-3.5 px-4 md:py-4 md:px-5 lg:py-4 lg:px-6 xl:py-5 xl:px-8 bg-foreground text-white"} text-xs lg:text-sm font-semibold uppercase tracking-wider cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out border-none`}
      >
        <span className="absolute inset-0 bg-secondary transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0" />
        <span className="relative block overflow-hidden">
          <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
            {btnText}
          </span>
          <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 text-foreground">
            {btnText}
          </span>
        </span>
      </button>
    </Link>
  );
}
