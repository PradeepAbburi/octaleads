import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'VP of Sales',
      company: 'TechCorp',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'OctaLeads transformed our lead generation process. We saw a 300% increase in qualified leads within the first month.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'InnovateX',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The AI-powered lead scoring is incredible. It helps us focus on prospects with the highest conversion potential.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder & CEO',
      company: 'GrowthLab',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Implementation was seamless, and the ROI was immediate. Our sales team loves the automated workflows.',
      rating: 5
    },
    {
      name: 'David Park',
      role: 'Head of Growth',
      company: 'ScaleUp',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Best investment we made for our business. The analytics and insights have been game-changing.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Sales Manager',
      company: 'NextGen',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Customer support is outstanding. They helped us customize the platform to fit our unique needs perfectly.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Business Development',
      company: 'ProTech',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The multi-channel engagement features help us reach prospects where they are most active.',
      rating: 5
    }
  ];

  return (
  <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-200 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Loved by Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers are saying about their success with OctaLeads
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white border border-blue-100 rounded-xl p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <p className="text-gray-700 mb-6 text-lg italic">“OctaLeads transformed our startup with a stunning, high-performance website. The team’s expertise in modern web technologies exceeded our expectations. Our conversion rates increased by 300% within just 3 months.”</p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-blue-600 mr-1" />
              ))}
            </div>
            <div>
              <h4 className="font-semibold text-black">Sarah Johnson</h4>
              <p className="text-blue-600 text-sm">Founder at TechFlow Solutions</p>
            </div>
          </div>
          <div className="bg-white border border-blue-100 rounded-xl p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <p className="text-gray-700 mb-6 text-lg italic">“As an e-commerce business, we needed a scalable platform that could handle our growth. OctaLeads delivered a custom solution that’s both beautiful and powerful. Our sales team is closing more deals than ever.”</p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-blue-600 mr-1" />
              ))}
            </div>
            <div>
              <h4 className="font-semibold text-black">Michael Chen</h4>
              <p className="text-blue-600 text-sm">CEO at EcoStore Pro</p>
            </div>
          </div>
          <div className="bg-white border border-blue-100 rounded-xl p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <p className="text-gray-700 mb-6 text-lg italic">“The UI/UX design work from OctaLeads is exceptional. They created an intuitive learning platform that our students love. The mobile-first approach has significantly improved our user engagement.”</p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-blue-600 mr-1" />
              ))}
            </div>
            <div>
              <h4 className="font-semibold text-black">Emily Rodriguez</h4>
              <p className="text-blue-600 text-sm">Marketing Director at EduTech Innovations</p>
            </div>
          </div>
        </div>

        {/* ...removed stats section per user request... */}
      </div>
    </section>
  );
};

export default Testimonials;