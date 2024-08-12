import MyLogo from "@/components/brand/MyLogo";
import HeroSection from "@/components/marketing/HeroSection";
import MarketingNav from "@/components/marketing/MarketingNav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <MarketingNav />
      <HeroSection />
    </main>
  );
}
