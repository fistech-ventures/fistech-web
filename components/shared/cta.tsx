import Link from "next/link";
import React from "react";

export default function CTAButton({
  btnText,
  href,
  isSecondary = false,
  isDark = false,
}: {
  btnText: string;
  href: string;
  isSecondary?: boolean;
  isDark?: boolean;
}) {
  const base =
    "text-xs lg:text-sm font-bold uppercase tracking-wider cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out border-none";

  const variant = isDark
    ? "py-3.5 px-4 md:py-4 md:px-5 lg:py-4 lg:px-6 xl:py-5 xl:px-8 bg-transparent text-white ring-2 ring-white"
    : isSecondary
      ? "py-1 px-2 md:py-2 md:px-4 lg:py-2 lg:px-4 xl:py-2 xl:px-5 bg-white text-foreground"
      : "py-3.5 px-4 md:py-4 md:px-5 lg:py-4 lg:px-6 xl:py-5 xl:px-8 bg-foreground text-white";

  const hoverTextColor = isDark ? "text-black" : "text-foreground";

  return (
    <Link
      href={href}
      className="group relative inline-block overflow-visible rounded-full"
    >
      <button className={`${base} ${variant} rounded-full`}>
        <span
          className={`absolute inset-0 rounded-full ${isDark ? "bg-white" : "bg-secondary"} transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0`}
        />
        <span className="relative block overflow-hidden">
          <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
            {btnText}
          </span>
          <span
            className={`absolute inset-0 block translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 ${hoverTextColor}`}
          >
            {btnText}
          </span>
        </span>
      </button>
    </Link>
  );
}
