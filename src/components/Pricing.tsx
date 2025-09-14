import React, { useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        '1,000 leads per month',
        'Basic lead scoring',
        'Email support',
        '2 team members',
        'Standard integrations',
        'Basic analytics'
      ],
      buttonText: 'Start Free Trial',
      isPopular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 149,
      annualPrice: 119,
      features: [
        '5,000 leads per month',
        'Advanced AI lead scoring',
        'Priority support',
        '10 team members',
        'Premium integrations',
        'Advanced analytics',
        'Automated workflows',
        'A/B testing'
      ],
      buttonText: 'Start Free Trial',
      isPopular: true
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations',
      monthlyPrice: 399,
      annualPrice: 319,
      features: [
        'Unlimited leads',
        'Custom AI models',
        'Dedicated success manager',
        'Unlimited team members',
        'Custom integrations',
        'White-label options',
        'Advanced automation',
        'Custom reporting',
        'SLA guarantee'
      ],
      buttonText: 'Contact Sales',
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. Start with our free plan or get a 14-day trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.isPopular
                  ? 'border-blue-600 shadow-xl scale-105'
                  : 'border-gray-200 shadow-sm hover:shadow-lg'
              } transition-all duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star size={16} className="mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500 text-lg">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-green-50 rounded-full">
            <Zap size={20} className="text-green-600 mr-2" />
            <span className="text-green-800 font-medium">
              30-day money-back guarantee on all plans
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;