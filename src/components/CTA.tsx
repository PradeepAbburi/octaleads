import { Mail, User, Building } from 'lucide-react';
import React, { useState } from 'react';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
  <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Get Started with OctaLeads?
          </h2>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-white border border-blue-100 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <User className="absolute left-3 top-3 text-blue-600" size={20} />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-blue-100 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    required
                  />
                </div>
                <div className="relative">
                  <Building className="absolute left-3 top-3 text-blue-600" size={20} />
                  <input
                    type="text"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-blue-100 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    required
                  />
                </div>
              </div>
              <div className="relative mb-6">
                <Mail className="absolute left-3 top-3 text-blue-600" size={20} />
                <input
                  type="email"
                  placeholder="Business Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-blue-100 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200"
              >
                Get Started
              </button>
            </form>
          ) : (
            <div className="bg-white border border-blue-100 rounded-xl p-8 text-center">
              <p className="text-blue-600 text-lg font-semibold mb-4">Thank you for your interest!</p>
              <p className="text-gray-700">We'll be in touch shortly to get you started. Check your email for next steps.</p>
            </div>
          )}
        </div>

        {/* ...removed company logos per user request... */}
      </div>
    </section>
  );
};

export default CTA;