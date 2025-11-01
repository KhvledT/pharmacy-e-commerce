import Image from 'next/image';
import services1 from '@/assets/imgs/landingPage/Services1.jpg';
import services2 from '@/assets/imgs/landingPage/Services2.jpg';
import services3 from '@/assets/imgs/landingPage/Services3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPills, 
  faTruck, 
  faUserMd, 
  faHeartbeat, 
  faPhone, 
  faShieldAlt,
  faClipboardCheck,
  faHome
} from '@fortawesome/free-solid-svg-icons';

export default function ServicesPage() {
  const mainServices = [
    {
      image: services1,
      title: 'Prescription Services',
      description: 'Fast and reliable prescription filling with expert pharmacist consultation. We ensure accuracy and safety in every prescription.',
    },
    {
      image: services2,
      title: 'Home Delivery',
      description: 'Convenient delivery service bringing your medications and healthcare products right to your doorstep.',
    },
    {
      image: services3,
      title: 'Health Consultation',
      description: 'Professional healthcare advice from our licensed pharmacists and medical experts available 24/7.',
    },
  ];

  const additionalServices = [
    {
      icon: faPills,
      title: 'Medication Management',
      description: 'Comprehensive medication reviews and management to ensure optimal treatment outcomes.',
    },
    {
      icon: faTruck,
      title: 'Express Delivery',
      description: 'Same-day and next-day delivery options available for urgent medication needs.',
    },
    {
      icon: faUserMd,
      title: 'Pharmacist Consultation',
      description: 'One-on-one consultations with experienced pharmacists for personalized care.',
    },
    {
      icon: faHeartbeat,
      title: 'Health Monitoring',
      description: 'Regular health check-ups and monitoring services for chronic conditions.',
    },
    {
      icon: faPhone,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your healthcare questions and concerns.',
    },
    {
      icon: faShieldAlt,
      title: 'Insurance Processing',
      description: 'We handle all insurance claims and paperwork for a hassle-free experience.',
    },
    {
      icon: faClipboardCheck,
      title: 'Prescription Refills',
      description: 'Easy online prescription refill service with automatic reminders.',
    },
    {
      icon: faHome,
      title: 'Home Healthcare',
      description: 'Specialized home healthcare products and equipment delivery services.',
    },
  ];

  const benefits = [
    'Licensed and certified pharmacists',
    'Quality assured medications',
    'Competitive pricing',
    'Secure and confidential',
    'Easy online ordering',
    'Multiple payment options',
  ];

  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional healthcare services designed with you in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Healthcare Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need for your health and wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={service.icon} className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-600 text-white rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Services?
                </h2>
                <p className="text-blue-100 text-lg mb-6">
                  We're committed to providing the highest quality healthcare services 
                  with a focus on patient safety, convenience, and satisfaction.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 text-gray-900">
                <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
                <p className="text-gray-600 mb-6">
                  Experience the convenience of modern pharmacy services. 
                  Browse our products or contact us for personalized assistance.
                </p>
                <div className="space-y-3">
                  <a
                    href="/products"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Browse Products
                  </a>
                  <a
                    href="/contact"
                    className="block w-full bg-gray-200 text-gray-900 text-center py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Simple steps to get your medications delivered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Browse Products', description: 'Find the medications you need' },
              { step: '2', title: 'Add to Cart', description: 'Select quantity and add to cart' },
              { step: '3', title: 'Checkout', description: 'Complete your order securely' },
              { step: '4', title: 'Delivery', description: 'Receive at your doorstep' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

