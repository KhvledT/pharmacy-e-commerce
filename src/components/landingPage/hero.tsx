import Image from "next/image";
import heroSVG from "@/assets/SVG/landingPage/heroSection.svg";

export default function HeroSection() {
  return (
    <>
      <section className="max-w-7xl mx-auto py-10 block">
        <Image src={heroSVG} alt="Hero section" priority />
      </section>
      {/* mobile screen */}
    </>
  );
}
