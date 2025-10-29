import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import whyUsImage from '@/assets/imgs/landingPage/doctorImage.png';
import whyUsIcon1 from '@/assets/icons/whyUs1.svg';
import whyUsIcon2 from '@/assets/icons/whyUs2.svg';

interface Feature {
  id: number;
  icon: any;
  title: string;
  description: string;
}

const WhyUs = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: whyUsIcon1,
      title: 'Wide Product Range',
      description: 'Caring for every need, from wellness to recovery',
    },
    {
      id: 2,
      icon: whyUsIcon2,
      title: 'Quality Assurance',
      description: 'Because your health deserves nothing less than the best.',
    },
  ];

  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Content */}
          <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-start w-full">
            {/* Left Small Column - Label */}
            <div className="hidden lg:flex justify-start">
              <h3 className="text-pink-600 font-semibold text-lg md:text-xl whitespace-nowrap pt-3">
                Why Us
              </h3>
            </div>

            {/* Right Large Column - Main Text */}
            <div className="space-y-8 md:space-y-12">

            <div className="flex lg:hidden justify-start">
              <h3 className="text-pink-600 font-semibold text-lg md:text-xl whitespace-nowrap">
                Why Us
              </h3>
            </div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our Commitment to Quality
              </h2>

              {/* Features List */}
              <div className="space-y-10 md:space-y-12">
                {features.map((feature) => (
                  <div key={feature.id} className="flex gap-4 md:gap-6">
                    {/* Icon */}
                    <div className="shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-2xl flex items-center justify-center">
                        <Image src={feature.icon} alt={feature.title} width={35} height={35} />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 pt-2">
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gray-200 min-h-[450px] max-w-[450px] mx-auto">
              <Image
                src={whyUsImage}
                alt="Medical professionals"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
