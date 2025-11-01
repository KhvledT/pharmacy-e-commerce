import dynamic from 'next/dynamic';
import Hero from "@/components/landingPage/hero";
import PharmacyFeatures from "@/components/landingPage/PharmacyFeatures";

// Lazy load below-the-fold components
const PharmacyBanner = dynamic(() => import("@/components/landingPage/banner"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});
const NewProducts = dynamic(() => import("@/components/landingPage/newProducts"));
const WhyUs = dynamic(() => import("@/components/landingPage/whyUs"));
const ServicesSection = dynamic(() => import("@/components/landingPage/services"));
const PopularProducts = dynamic(() => import("@/components/landingPage/popularProducts"));
const Team = dynamic(() => import("@/components/landingPage/team"));
const CarouselSection = dynamic(() => import("@/components/landingPage/carouselSection"));
const Facts = dynamic(() => import("@/components/landingPage/factsSection"));

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Pharmacy Features Section */}
      <PharmacyFeatures />

      {/* Pharmacy Banner Section */}
      <PharmacyBanner />

      {/* New Products Section */}
      <NewProducts />

      {/* why us section */}
      <WhyUs />
      
      {/* Services */}
      <ServicesSection />  

      {/* popular products */}
      <PopularProducts />

      {/* Team */}
      <Team />

      {/* Facts */}
      <Facts />

      {/* carousel */}
      <CarouselSection />
    </>
  );
}
