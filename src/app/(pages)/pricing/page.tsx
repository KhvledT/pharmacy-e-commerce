"use client";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faQuestion } from '@fortawesome/free-solid-svg-icons';
import ComingSoonModal from '@/components/ui/ComingSoonModal';

export default function PricingPage() {
  const [showModal, setShowModal] = useState(false);
  const pricingPlans = [
    {
      name: 'Basic',
      price: '0',
      period: 'Free',
      description: 'Perfect for occasional purchases',
      features: [
        'Access to all products',
        'Standard delivery (5-7 days)',
        'Email support',
        'Product information',
        'Order tracking',
      ],
      notIncluded: [
        'Free shipping',
        'Priority support',
        'Exclusive discounts',
      ],
      buttonText: 'Get Started',
      buttonStyle: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
      popular: false,
    },
    {
      name: 'Premium',
      price: '9.99',
      period: 'per month',
      description: 'Best for regular customers',
      features: [
        'All Basic features',
        'Free shipping on all orders',
        'Express delivery (2-3 days)',
        'Priority customer support',
        '10% discount on all products',
        'Early access to new products',
        'Monthly health newsletter',
      ],
      notIncluded: [],
      buttonText: 'Choose Premium',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      popular: true,
    },
    {
      name: 'Family',
      price: '19.99',
      period: 'per month',
      description: 'Ideal for families and groups',
      features: [
        'All Premium features',
        'Up to 5 family members',
        'Same-day delivery available',
        'Dedicated account manager',
        '15% discount on all products',
        'Free health consultations',
        'Medication reminders',
        'Personalized health plans',
      ],
      notIncluded: [],
      buttonText: 'Choose Family',
      buttonStyle: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. Your benefits will continue until the end of your billing period.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee on all subscription plans. If you\'re not satisfied, contact us for a full refund.',
    },
    {
      question: 'How does free shipping work?',
      answer: 'Premium and Family plan members get free shipping on all orders, regardless of order value. Basic members get free shipping on orders over $50.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.',
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No, the price you see is the price you pay. There are no hidden fees or additional charges.',
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we work with most major insurance providers. Contact us to verify your coverage.',
    },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing Plans</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Choose the perfect plan for your healthcare needs
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-4 ring-blue-600 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <button 
                    onClick={() => setShowModal(true)}
                    className={`w-full py-3 rounded-full font-semibold transition-colors ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
                <div className="px-8 pb-8">
                  <div className="border-t pt-6">
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 opacity-50">
                          <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-3 h-0.5 bg-gray-400"></div>
                          </div>
                          <span className="text-gray-500 line-through">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare Plans
            </h2>
            <p className="text-gray-600 text-lg">
              See what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-900 font-bold">Feature</th>
                  <th className="px-6 py-4 text-center text-gray-900 font-bold">Basic</th>
                  <th className="px-6 py-4 text-center text-gray-900 font-bold">Premium</th>
                  <th className="px-6 py-4 text-center text-gray-900 font-bold">Family</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ['Product Access', true, true, true],
                  ['Standard Delivery', true, true, true],
                  ['Email Support', true, true, true],
                  ['Free Shipping', false, true, true],
                  ['Express Delivery', false, true, true],
                  ['Priority Support', false, true, true],
                  ['Product Discounts', false, '10%', '15%'],
                  ['Same-day Delivery', false, false, true],
                  ['Health Consultations', false, false, true],
                  ['Family Members', '1', '1', '5'],
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-gray-900 font-medium">{row[0]}</td>
                    {[1, 2, 3].map((col) => (
                      <td key={col} className="px-6 py-4 text-center">
                        {typeof row[col] === 'boolean' ? (
                          row[col] ? (
                            <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <div className="w-5 h-0.5 bg-gray-300 mx-auto"></div>
                          )
                        ) : (
                          <span className="text-gray-700">{row[col]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Got questions? We've got answers
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faQuestion} className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8">
            Our team is here to help you choose the right plan
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
}

