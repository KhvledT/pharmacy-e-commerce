import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesImage1 from '@/assets/imgs/landingPage/Services1.jpg';
import ServicesImage2 from '@/assets/imgs/landingPage/Services2.jpg';
import ServicesImage3 from '@/assets/imgs/landingPage/Services3.jpg';

interface Service {
  id: number;
  number: string;
  title: string;
  image: string;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      id: 1,
      number: '01',
      title: 'Prescription Filling',
      image: ServicesImage1.src,
    },
    {
      id: 2,
      number: '02',
      title: 'Home Delivery',
      image: ServicesImage2.src,
    },
    {
      id: 3,
      number: '03',
      title: 'Health Consultations',
      image: ServicesImage3.src,
    },
  ];

  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-30 bg-[#1053D4]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-start gap-6 md:gap-10 mb-12 md:mb-16">
          {/* Left Small Column - Label */}
          <div className="flex justify-start pl-5">
            <p className="text-blue-200 font-medium text-base md:text-lg whitespace-nowrap pt-7">
              Services
            </p>
          </div>

          {/* Right Large Column - Heading + Text + Button */}
          <div className="flex flex-row lg:items-center lg:justify-between gap-6 px-5">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Comprehensive <br /> Pharmacy Services
              </h2>
              <p className="text-blue-100 text-base md:text-lg max-w-xl">
                Empowering pharmacies with complete online management tools.
              </p>
            </div>

            {/* All Services Button */}
            <div className="lg:shrink-0">
              <Link
                href="/services"
                className="inline-flex items-center justify-center w-30 h-30 sm:w-35 sm:h-35 md:w-48 md:h-48 rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium text-xs sm:text-base md:text-lg"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
          {services.map((service) => (
            <div key={service.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative w-8/9 aspect-[5/4] mx-auto rounded-2xl md:rounded-3xl overflow-hidden mb-3 md:mb-5 bg-blue-700">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Service Info */}
              <div className="flex items-center justify-center gap-3 md:gap-4">
                <span className="text-3xl md:text-4xl font-semibold text-white">
                  {service.number}
                </span>
                <span className="text-white text-xl md:text-2xl font-normal">/</span>
                <h3 className="text-xl md:text-2xl font-medium text-white">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
