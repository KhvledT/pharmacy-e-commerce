"use client";
import React, { useState } from "react";
import Image from "next/image";
import carosel1 from "@/assets/imgs/landingPage/carousel1.png";
import carouselDots from "@/assets/icons/carouselDots.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ComingSoonModal from "@/components/ui/ComingSoonModal";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  age: string;
  image: string;
}

const CarouselSection = () => {
  const [showModal, setShowModal] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "Pharmacy Store is my go-to for over-the-counter medications and health products. They have a wide selection, and their website makes it easy to order online. The only improvement I'd suggest is expanding their beauty and skincare section.",
      name: "Thomas J. Miller",
      age: "27 years old",
      image: carosel1.src,
    },
    {
      id: 2,
      quote:
        "I’ve been ordering vitamins and supplements from Pharmacy Store for months now, and I’m always impressed by how fast they deliver. Great service and trustworthy products!",
      name: "Michael R. Carter",
      age: "31 years old",
      image: carosel1.src,
    },
    {
      id: 3,
      quote:
        "Customer support was really helpful when I had questions about a prescription refill. The process was simple and smooth. Definitely recommend their service!",
      name: "David K. Anderson",
      age: "29 years old",
      image: carosel1.src,
    },
    {
      id: 4,
      quote:
        "I found everything I needed for my family’s care at Pharmacy Store. Prices are fair and the quality is top-notch. Would love to see more organic options though!",
      name: "James L. Roberts",
      age: "33 years old",
      image: carosel1.src,
    },
    {
      id: 5,
      quote:
        "I love how user-friendly their website is. It’s easy to find what I’m looking for, and checkout takes just seconds. A great experience overall!",
      name: "Daniel P. Wilson",
      age: "35 years old",
      image: carosel1.src,
    },
    {
      id: 6,
      quote:
        "This is by far the best online pharmacy I’ve used. Everything arrives on time, well-packaged, and at good prices. Keep up the great work!",
      name: "Robert T. Collins",
      age: "30 years old",
      image: carosel1.src,
    },
  ];

  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-start gap-6 md:gap-10 mb-12 md:mb-16">
          {/* Left Column - Label */}
          <div className="flex justify-start pl-5">
            <p className="text-pink-600 font-semibold text-base md:text-lg whitespace-nowrap pt-8">
              Review
            </p>
          </div>

          {/* Right Column - Heading + Text + Button */}
          <div className="flex flex-row lg:items-center lg:justify-between gap-6 px-5">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Testimonials That
                <br />
                Inspire Us
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Real stories from people we've had the honor to serve
              </p>
            </div>

            {/* All Review Button */}
            <div className="lg:shrink-0 lg:pt-4">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center justify-center w-30 h-30 sm:w-35 sm:h-35 md:w-48 md:h-48 rounded-full border-2 border-[#EDEDED] hover:text-white hover:bg-[#1053D4] hover:border-[#062a6e] hover:shadow-2xl transition-all duration-300 font-medium text-xs sm:text-base md:text-lg"
              >
                All Review
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative lg:pl-[10%] pl-5">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full "
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 basis-full">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Left Side - Avatar */}
                    <div className="shrink-0">
                      <div className="relative w-20 h-20 md:w-25 md:h-25 rounded-full overflow-hidden bg-gray-200">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 112px, 144px"
                        />
                      </div>
                    </div>

                    {/* Right Side - Quote and Info */}
                    {/* Quote Icon */}
                    <div className="flex flex-row gap-4 lg:flex-col">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-blue-600 flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={faQuoteLeft}
                            className="w-5 h-5 md:w-6 md:h-6 text-blue-600"
                          />
                      </div>
                      <div className="flex-1 max-w-3x">
                        {/* Quote Text */}
                        <blockquote className="text-lg md:text-xl lg:text-2xl italic leading-[2] mb-10 max-w-[85%]">
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Author Info */}
                        <div>
                          <p className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                            {testimonial.name}
                          </p>
                          <p className="text-base md:text-lg text-gray-600">
                            {testimonial.age}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-5 pl-1">
                    <Image src={carouselDots} alt="dots" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default CarouselSection;
