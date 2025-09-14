import React from 'react';
import { Target, Brain, Mail, Database, Users, Zap, BarChart3 } from 'lucide-react';


const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Target,
      title: 'Lead Generation',
      description: 'Generate high-quality leads with our AI-powered prospecting tools and advanced targeting capabilities.',
      features: [
        'AI-powered lead scoring',
        'Multi-channel prospecting',
        'Real-time lead validation',
        'Custom lead filters',
        'Lead enrichment',
        'Automated follow-up'
      ],
      benefits: [
        '300% increase in qualified leads',
        '50% reduction in cost per lead',
        '75% faster lead qualification'
      ]
    },
    {
      icon: Brain,
      title: 'Sales Intelligence',
      description: 'Get deep insights into your prospects and customers with comprehensive sales intelligence data.',
      features: [
        'Company insights',
        'Contact information',
        'Technographic data',
        'Intent signals',
        'Competitive intelligence',
        'Market analysis'
      ],
      benefits: [
        '40% higher conversion rates',
        '60% shorter sales cycles',
        '25% increase in deal size'
      ]
    },
    {
      icon: Users,
      title: 'Account-Based Marketing',
      description: 'Target high-value accounts with personalized campaigns and coordinated sales efforts.',
      features: [
        'Account identification',
        'Stakeholder mapping',
        'Personalized campaigns',
        'Multi-touch sequences',
        'Account scoring',
        'ROI tracking'
      ],
      benefits: [
        '200% increase in account engagement',
        '150% higher deal values',
        '80% faster deal closure'
      ]
    },
    {
      icon: Database,
      title: 'Data Enrichment',
      description: 'Enhance your existing data with accurate, up-to-date information about your prospects and customers.',
      features: [
        'Contact enrichment',
        'Company data',
        'Social profiles',
        'Email verification',
        'Phone validation',
        'Data cleansing'
      ],
      benefits: [
        '95% data accuracy',
        '70% improvement in deliverability',
        '50% reduction in bounce rates'
      ]
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Create and execute targeted email campaigns that drive engagement and conversions.',
      features: [
        'Email templates',
        'A/B testing',
        'Automated sequences',
        'Personalization',
        'Deliverability optimization',
        'Performance analytics'
      ],
      benefits: [
        '45% higher open rates',
        '35% increase in click-through rates',
        '25% more conversions'
      ]
    },
    {
      icon: Zap,
      title: 'CRM Integration',
      description: 'Seamlessly integrate with your existing CRM and sales tools for a unified workflow.',
      features: [
        'Salesforce integration',
        'HubSpot connectivity',
        'Pipedrive sync',
        'Custom API connections',
        'Real-time data sync',
        'Workflow automation'
      ],
      benefits: [
        '90% reduction in manual data entry',
        '100% data consistency',
        '50% faster sales processes'
      ]
    },
    {
      icon: BarChart3,
      title: 'Marketing Automation',
      description: 'Automate your marketing processes and nurture leads through personalized customer journeys.',
      features: [
        'Lead nurturing',
        'Behavioral triggers',
        'Dynamic content',
        'Lead scoring',
        'Campaign automation',
        'Performance tracking'
      ],
      benefits: [
        '300% increase in lead nurturing efficiency',
        '50% higher lead-to-customer conversion',
        '40% reduction in marketing costs'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive
              <span className="text-blue-600"> Sales & Marketing Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to generate, qualify, and convert leads into customers. Our integrated platform provides end-to-end solutions for modern sales and marketing teams.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200">
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <solution.icon size={24} className="text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-blue-50 rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Key Benefits</h4>
                    <div className="space-y-4">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect OctaLeads with your existing tools and workflows for maximum efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Salesforce', 'HubSpot', 'Pipedrive', 'Slack', 'Zapier', 'Microsoft'].map((integration) => (
              <div key={integration} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-gray-700 font-semibold">{integration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your Sales & Marketing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose the solutions that fit your needs and start generating more qualified leads today.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;