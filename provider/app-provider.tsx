import SmoothScrollProvider from "./smooth-scroll.provider";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SmoothScrollProvider>
        <Navbar />
        {children}
        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
