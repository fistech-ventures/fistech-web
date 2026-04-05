import NotFoundContent from "@/components/application/not-found-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fistech Ventures",
  description: "Global IT and Digital Solutions",
};

export default async function GlobalNotFound() {
  return <NotFoundContent />;
}
