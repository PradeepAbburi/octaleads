import React from 'react';
import { ArrowRight, Building2, Heart, DollarSign, Home, Factory, ShoppingCart, GraduationCap, Briefcase } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Technology',
      description: 'Drive growth for SaaS, software, and tech companies with targeted lead generation strategies.',
      features: ['Developer outreach', 'Technical decision makers', 'Product-led growth', 'API integrations'],
      caseStudy: '300% increase in qualified leads for a B2B SaaS platform'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Connect with healthcare professionals, medical device buyers, and healthcare administrators.',
      features: ['HIPAA compliance', 'Medical professionals', 'Healthcare facilities', 'Regulatory expertise'],
      caseStudy: '250% ROI for medical device manufacturer'
    },
    {
      icon: DollarSign,
      title: 'Financial Services',
      description: 'Reach financial advisors, wealth managers, and institutional investors with precision.',
      features: ['Compliance ready', 'Wealth management', 'Investment professionals', 'Risk assessment'],
      caseStudy: '400% increase in AUM for wealth management firm'
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Generate leads for real estate agents, property managers, and real estate investors.',
      features: ['Property data', 'Market analysis', 'Investor targeting', 'Geographic segmentation'],
      caseStudy: '500% increase in property inquiries'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Connect with procurement managers, plant operators, and industrial buyers.',
      features: ['Industrial contacts', 'Supply chain', 'Procurement teams', 'Technical specifications'],
      caseStudy: '350% growth in B2B manufacturing sales'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Scale your online business with targeted customer acquisition and retention strategies.',
      features: ['Customer segmentation', 'Behavioral targeting', 'Cart abandonment', 'Lifecycle marketing'],
      caseStudy: '200% increase in customer lifetime value'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Reach educators, administrators, and decision makers in educational institutions.',
      features: ['Educational contacts', 'Institution targeting', 'Academic calendars', 'Budget cycles'],
      caseStudy: '300% increase in educational software adoption'
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Generate leads for consulting, legal, accounting, and other professional service firms.',
      features: ['Professional networks', 'Service targeting', 'Referral programs', 'Thought leadership'],
      caseStudy: '400% growth in consulting engagements'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Industry-Specific
              <span className="text-blue-600"> Lead Generation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Tailored solutions for every industry. Our platform understands the unique challenges and opportunities in your sector.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <industry.icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{industry.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{industry.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <ArrowRight size={16} className="text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-800 font-medium">Case Study:</p>
                  <p className="text-blue-700">{industry.caseStudy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies in your industry who trust OctaLeads for their lead generation needs.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Industries;