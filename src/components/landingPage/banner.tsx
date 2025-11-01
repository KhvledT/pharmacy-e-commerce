"use client";
import { useState } from "react";
import bannerDots from "@/assets/SVG/landingPage/bannerDots.svg";
import bannerImage from "@/assets/imgs/bannerImage.png";
import Image from "next/image";
import ComingSoonModal from "@/components/ui/ComingSoonModal";

export default function PharmacyBanner() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" my-10 mx-5 relative  overflow-hidden">
      <div className="p-10 max-w-7xl mx-auto bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl">
        {/* Container */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-center text-center lg:text-left gap-8 h-full">
          {/* Left Side - Text and Discount */}
          <div className="space-y-8 lg:space-y-20">
            <h2 className="text-white text-xl font-normal leading-relaxed max-w-md mx-auto lg:mx-0">
              Take the discount for the first<br />
              shopping on our website
            </h2>

            <div className="text-white text-2xl md:text-4xl font-semibold">
              30%
            </div>
          </div>

          {/* Right Side - Button and Dots */}
          <div className="flex flex-col items-center lg:items-end justify-between h-full gap-4 space-y-8 lg:space-y-20">
            {/* Decorative Dots - Top Right */}
            <div className="hidden lg:block">
              <Image src={bannerDots} alt="bannerDots" />
            </div>

            <button 
              onClick={() => setShowModal(true)}
              className="bg-white text-gray-900 px-12 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Banner Image - Centered */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-[50%] -translate-x-1/2 pointer-events-none scale-120 overflow-hidden">
        <Image
          src={bannerImage}
          alt="bannerImage"
          className=""
        />
      </div>
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
