import React from 'react';
import { Users, Settings, GraduationCap, HeadphonesIcon, Code, Database } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: 'Consulting',
      description: 'Strategic guidance to optimize your lead generation and sales processes for maximum ROI.',
      details: [
        'Lead generation strategy development',
        'Sales process optimization',
        'Technology stack assessment',
        'Performance benchmarking',
        'ROI analysis and forecasting',
        'Best practices implementation'
      ],
      deliverables: [
        'Comprehensive strategy document',
        'Implementation roadmap',
        'Performance metrics framework',
        'Ongoing strategic support'
      ],
      timeline: '2-4 weeks'
    },
    {
      icon: Settings,
      title: 'Implementation',
      description: 'End-to-end setup and configuration of OctaLeads to match your specific business requirements.',
      details: [
        'Platform configuration',
        'Data integration setup',
        'Workflow automation',
        'Custom field mapping',
        'User account provisioning',
        'Security configuration'
      ],
      deliverables: [
        'Fully configured platform',
        'Integrated data sources',
        'Automated workflows',
        'User training materials'
      ],
      timeline: '1-3 weeks'
    },
    {
      icon: GraduationCap,
      title: 'Training',
      description: 'Comprehensive training programs to ensure your team maximizes the value of OctaLeads.',
      details: [
        'Platform fundamentals',
        'Advanced feature training',
        'Best practices workshops',
        'Role-specific training',
        'Certification programs',
        'Ongoing education'
      ],
      deliverables: [
        'Training materials',
        'Video tutorials',
        'Certification badges',
        'Knowledge base access'
      ],
      timeline: '1-2 weeks'
    },
    {
      icon: HeadphonesIcon,
      title: 'Support',
      description: '24/7 technical support and customer success services to ensure continuous platform optimization.',
      details: [
        '24/7 technical support',
        'Dedicated success manager',
        'Regular health checks',
        'Performance monitoring',
        'Issue resolution',
        'Feature updates'
      ],
      deliverables: [
        'Support ticket system',
        'Regular check-in calls',
        'Performance reports',
        'Optimization recommendations'
      ],
      timeline: 'Ongoing'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored development services to extend OctaLeads functionality for your unique requirements.',
      details: [
        'Custom integrations',
        'API development',
        'Workflow customization',
        'Report customization',
        'Third-party connectors',
        'Mobile applications'
      ],
      deliverables: [
        'Custom code solutions',
        'API documentation',
        'Testing reports',
        'Deployment guides'
      ],
      timeline: '4-12 weeks'
    },
    {
      icon: Database,
      title: 'Data Migration',
      description: 'Secure and efficient migration of your existing data to OctaLeads with zero data loss.',
      details: [
        'Data assessment and mapping',
        'Migration planning',
        'Data cleansing',
        'Secure transfer protocols',
        'Validation and testing',
        'Rollback procedures'
      ],
      deliverables: [
        'Migration plan',
        'Data quality report',
        'Migrated datasets',
        'Validation reports'
      ],
      timeline: '1-4 weeks'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional
              <span className="text-blue-600"> Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert services to help you implement, optimize, and maximize the value of your OctaLeads investment. From strategy to execution, we're here to ensure your success.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-blue-600 font-medium">Timeline: {service.timeline}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                  <ul className="space-y-1">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="text-blue-700 text-sm">
                        • {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful outcomes for every engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understand your business goals, challenges, and requirements' },
              { step: '02', title: 'Planning', description: 'Develop a customized strategy and implementation plan' },
              { step: '03', title: 'Execution', description: 'Implement solutions with regular progress updates' },
              { step: '04', title: 'Optimization', description: 'Monitor performance and continuously optimize results' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Support Tiers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the level of support that matches your needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Standard',
                price: 'Included',
                features: ['Email support', 'Knowledge base', 'Community forum', 'Basic training materials']
              },
              {
                name: 'Premium',
                price: '$500/month',
                features: ['Priority support', 'Phone support', 'Dedicated success manager', 'Advanced training', 'Monthly reviews']
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                features: ['24/7 support', 'On-site training', 'Custom development', 'SLA guarantee', 'Dedicated team']
              }
            ].map((tier, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 ${index === 1 ? 'ring-2 ring-blue-600' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-6">{tier.price}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-6 py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                  index === 1 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {index === 2 ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our experts help you maximize your success with OctaLeads. Schedule a consultation today.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-200">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;