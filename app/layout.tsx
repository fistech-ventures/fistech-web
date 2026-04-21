import "./globals.css";
import { Archivo, Kanit } from "next/font/google";
import SmoothScrollProvider from "@/provider/smooth-scroll-provider";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { Metadata } from "next";
import { generateHomeMetadata } from "@/lib/metadata";
import {
  generateOrganisationSchema,
  generateWebsiteSchema,
  toJsonLd,
} from "@/lib/schema";
import GoogleAnalytics from "@/components/analytics/google-analytics";
import { Suspense } from "react";
import PageViewTracker from "@/components/analytics/page-view-tracker";
import GsapInit from "@/components/shared/gsap-init";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = generateHomeMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(generateOrganisationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(generateWebsiteSchema()),
          }}
        />
      </head>
      <body
        className={`${archivo.className} ${kanit.variable} antialiased overflow-x-hidden`}
      >
        <GsapInit />
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
