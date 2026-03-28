import Banner from "@/components/home/banner";
import ProjectHeadline from "@/components/home/project-headline";
import Whoweare from "@/components/home/whoweare";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fistech Ventures",
  description: "Global IT and Digital Solutions",
};

export default function Home() {
  return (
    <>
      <Banner />
      <Whoweare />
      <ProjectHeadline/>
    </>
  );
}
