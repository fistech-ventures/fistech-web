"use client";

import React from "react";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const hideNavAndFooter = [
    `/${currentLocale}/auth/login`,
    `/${currentLocale}/auth/signup`,
  ];

  return (
    <>
      {!hideNavAndFooter.includes(pathname) && <Navbar />}
      {children}
      {!hideNavAndFooter.includes(pathname) && <Footer />}
    </>
  );
}
