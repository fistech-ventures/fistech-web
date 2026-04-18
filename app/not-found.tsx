import NotFoundContent from "@/components/application/not-found-content";
import { generateFallbackMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateFallbackMetadata();

export default async function GlobalNotFound() {
  return <NotFoundContent />;
}
