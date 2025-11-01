import Image from 'next/image';
import team1 from '@/assets/imgs/landingPage/team1.png';
import team2 from '@/assets/imgs/landingPage/team2.png';
import team3 from '@/assets/imgs/landingPage/team3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUsers, faAward, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Pharmacist',
      image: team1,
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Clinical Director',
      image: team2,
    },
    {
      name: 'Dr. Emily Williams',
      role: 'Healthcare Consultant',
      image: team3,
    },
  ];

  const values = [
    {
      icon: faHeart,
      title: 'Patient-Centered Care',
      description: 'We prioritize your health and well-being above all else, providing personalized pharmaceutical care.',
    },
    {
      icon: faUsers,
      title: 'Expert Team',
      description: 'Our team of licensed pharmacists and healthcare professionals are here to serve you.',
    },
    {
      icon: faAward,
      title: 'Quality Products',
      description: 'We source only the highest quality medications and healthcare products from trusted manufacturers.',
    },
    {
      icon: faShieldAlt,
      title: 'Safety First',
      description: 'Your safety is our priority. All products are verified and meet strict quality standards.',
    },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted partner in health and wellness for over 20 years
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, affordable, and high-quality pharmaceutical products and services 
                to our community. We are committed to improving health outcomes through expert guidance, 
                reliable products, and compassionate care.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading pharmacy e-commerce platform, recognized for excellence in customer 
                service, innovation in healthcare delivery, and our unwavering commitment to patient 
                safety and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={value.icon} className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experienced healthcare professionals dedicated to your well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <div className="text-blue-100">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Products Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join thousands of satisfied customers who trust us with their health needs
          </p>
          <a
            href="/products"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </section>
    </main>
  );
}

