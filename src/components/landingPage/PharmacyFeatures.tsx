import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCreditCard, faGift, faHeadset } from '@fortawesome/free-solid-svg-icons';

export default function PharmacyFeatures() {
  const features = [
    {
      icon: faTruck,
      title: 'Free Shipping',
      subtitle: 'Order Over $600'
    },
    {
      icon: faCreditCard,
      title: 'Quick Payment',
      subtitle: '100% Secure'
    },
    {
      icon: faGift,
      title: 'Big Cashback',
      subtitle: 'Over 50% Cashback'
    },
    {
      icon: faHeadset,
      title: '24/7 Support',
      subtitle: 'Ready for You'
    }
  ];

  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex justify-center">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <FontAwesomeIcon 
                    icon={feature.icon} 
                    className="text-blue-600 w-8 h-8"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}