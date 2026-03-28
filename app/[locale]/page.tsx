import Banner from "@/components/home/banner";
import Whoweare from "@/components/home/whoweare";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fistech Ventures",
  description: "Global IT and Digital Solutions",
};

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <Banner />
      <Whoweare />
    </main>
  );
}
