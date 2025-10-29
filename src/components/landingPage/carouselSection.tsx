import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import carosel1 from '@/assets/imgs/landingPage/carousel1.png';
import carouselDots from '@/assets/icons/carouselDots.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  age: string;
  image: string;
}

const CarouselSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Pharmacy Store is my go-to for over-the-counter medications and health products. They have a wide selection, and their website makes it easy to order online. The only improvement I'd suggest is expanding their beauty and skincare section.",
      name: 'Theresa J. Jones',
      age: '24 years old',
      image: carosel1.src,
    },
  ];

  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-start gap-6 md:gap-10 mb-12 md:mb-16">
          {/* Left Column - Label */}
          <div className="flex justify-start">
            <p className="text-pink-600 font-semibold text-base md:text-lg whitespace-nowrap pt-8">
              Review
            </p>
          </div>

          {/* Right Column - Heading + Text + Button */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Testimonials That<br />Inspire Us
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Real stories from people we've had the honor to serve
              </p>
            </div>

            {/* All Review Button */}
            <div className="lg:shrink-0 lg:pt-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-[#EDEDED] hover:text-white hover:bg-[#1053D4] hover:border-[#062a6e] hover:shadow-2xl transition-all duration-300 font-medium text-base md:text-lg"
              >
                All Review
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative lg:pl-[10%]">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 md:basis-1/2 lg:basis-full"
                >
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
                    <div className="flex-1 max-w-3xl">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-blue-600 flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={faQuoteLeft}
                            className="w-5 h-5 md:w-6 md:h-6 text-blue-600"
                          />
                        </div>
                      </div>

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
                    <div>
                        <Image src={carouselDots} alt='dots'/>
                    </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
