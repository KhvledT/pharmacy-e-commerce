import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import teamMember1 from '@/assets/imgs/landingPage/team1.png';
import teamMember2 from '@/assets/imgs/landingPage/team2.png';
import teamMember3 from '@/assets/imgs/landingPage/team3.png';

interface TeamMember {
  id: number;
  role: string;
  name: string;
  credentials: string;
  experience: string;
  image: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      role: 'Chief Pharmacist',
      name: 'Dr. Emily Roberts',
      credentials: 'PharmD',
      experience: 'Work experience - 15 years',
      image: teamMember1.src,
    },
    {
      id: 2,
      role: 'Medical Advisor',
      name: 'Dr. Michael Chang',
      credentials: 'MD',
      experience: 'Work experience - 12 years',
      image: teamMember2.src,
    },
    {
      id: 3,
      role: 'Director of Health Services',
      name: 'Lisa Davis',
      credentials: 'RN, BSN',
      experience: 'Work experience - 8 years',
      image: teamMember3.src,
    },
  ];

  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-start gap-6 md:gap-10 mb-12 md:mb-16">
          {/* Left Column - Label */}
          <div className="flex justify-start pl-5">
            <p className="text-pink-600 font-semibold text-base md:text-lg whitespace-nowrap pt-6">
              Team
            </p>
          </div>

          {/* Right Column - Heading + Text + Button */}
          <div className="flex flex-row lg:items-center lg:justify-between gap-6 px-5">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                The Heart of Our <br /> Pharmacy
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Meet the People Behind the Care
              </p>
            </div>

            {/* All Services Button */}
            <div className="lg:shrink-0">
              <Link
                href="/services"
                className="inline-flex items-center justify-center w-30 h-30 sm:w-35 sm:h-35 md:w-48 md:h-48 rounded-full border-2 border-[#EDEDED] hover:text-white hover:bg-[#1053D4] hover:border-[#062a6e] hover:shadow-2xl transition-all duration-300 font-medium text-xs sm:text-base md:text-lg"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:pl-[7%] ">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group cursor-pointer bg-white rounded-b-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 max-w-[700px] "
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square mx-auto bg-gray-200 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Member Info */}
              <div className="p-5 text-center">
                <p className="text-gray-500 text-sm md:text-base mb-2">
                  {member.role}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                  {member.name}, {member.credentials}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {member.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
