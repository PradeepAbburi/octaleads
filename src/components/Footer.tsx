import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Integrations', 'API', 'Security'],
    Company: ['About', 'Careers', 'Press', 'Blog', 'Partners'],
    Resources: ['Help Center', 'Documentation', 'Guides', 'Webinars', 'Community'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Compliance']
  };

  const socialLinks = [ 
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
  <footer className="relative bg-slate-900 border-t border-gray-900 py-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-4xl font-bold text-white mb-2">
              OctaLeads
            </span>
            <p className="text-gray-400 max-w-xs text-center md:text-left mb-4">
              Professional website development agency specializing in custom web solutions, e-commerce platforms, and digital marketing strategies that drive business growth.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-md hover:bg-blue-700 transition-all duration-200">
                Ready to get started?
              </button>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold text-md hover:bg-blue-700 transition-all duration-200">
                Request a demo
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Website Development</li>
                <li>E-commerce Solutions</li>
                <li>UI/UX Design</li>
                <li>Digital Marketing</li>
                <li>SEO Optimization</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Business Websites</li>
                <li>E-commerce Platforms</li>
                <li>SaaS Applications</li>
                <li>Mobile-First Design</li>
                <li>Progressive Web Apps</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Technology</li>
                <li>Healthcare</li>
                <li>Finance</li>
                <li>Retail</li>
                <li>Real Estate</li>
                <li>Education</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>hello@octaleads.com</li>
                <li>+91-8522-938-999</li>
                <li>Hyderabad, India</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row md:items-center md:justify-between text-gray-400 text-sm">
          <p>&copy; 2025 OctaLeads. All rights reserved. | CIN: U80904AP2020NPL153258</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Sitemap</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Cookie Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Security</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;