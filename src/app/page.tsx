import Hero from "@/components/landingPage/hero";
import PharmacyFeatures from "@/components/landingPage/PharmacyFeatures";
import PharmacyBanner from "@/components/landingPage/banner"; 
import NewProducts from "@/components/landingPage/newProducts";
import WhyUs from "@/components/landingPage/whyUs";
import ServicesSection from "@/components/landingPage/services";
import PopularProducts from "@/components/landingPage/popularProducts";
import Team from "@/components/landingPage/team";
import CarouselSection from "@/components/landingPage/carouselSection";
import Facts from "@/components/landingPage/factsSection";
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
