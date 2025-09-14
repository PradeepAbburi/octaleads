import React, { useState, useEffect, useRef } from 'react';
import GetStartedModal from './GetStartedModal';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Industries',
      hasDropdown: true,
      items: [
        { name: 'Technology', href: '/industries/technology' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Finance', href: '/industries/finance' },
        { name: 'Retail', href: '/industries/retail' },
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Education', href: '/industries/education' },
        { name: 'Real Estate', href: '/industries/real-estate' },
        { name: 'Food & Beverage', href: '/industries/food-beverage' },
        { name: 'Travel', href: '/industries/travel' },
        { name: 'Non-Profit', href: '/industries/non-profit' },
        { name: 'Legal', href: '/industries/legal' },
        { name: 'Consulting', href: '/industries/consulting' }
      ]
    },
    {
      name: 'Solutions',
      hasDropdown: true,
      items: [
        { name: 'Lead Generation', href: '/solutions/lead-generation' },
        { name: 'Sales Intelligence', href: '/solutions/sales-intelligence' },
        { name: 'Account-Based Marketing', href: '/solutions/account-based-marketing' },
        { name: 'Data Enrichment', href: '/solutions/data-enrichment' },
        { name: 'Email Marketing', href: '/solutions/email-marketing' },
        { name: 'CRM Integration', href: '/solutions/crm-integration' },
        { name: 'Marketing Automation', href: '/solutions/marketing-automation' }
      ]
    },
    {
      name: 'Services',
      hasDropdown: true,
      items: [
        { name: 'Consulting', href: '/services/consulting' },
        { name: 'Implementation', href: '/services/implementation' },
        { name: 'Training', href: '/services/training' },
        { name: 'Support', href: '/services/support' },
        { name: 'Custom Development', href: '/services/custom-development' },
        { name: 'Data Migration', href: '/services/data-migration' }
      ]
    },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Case Study', href: '/casestudy' },
  { name: 'Contact', href: '/contact' }
  ];

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  return (
    <>
      {/* Blurred overlay when dropdown is open */}
      {activeDropdown && (
        <div className="fixed inset-0 z-40 bg-white/40 backdrop-blur-md transition-all duration-300" />
      )}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                OctaLeads
              </a>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href || '#'}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown 
                        size={16} 
                        className={`ml-1 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </a>
                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-100 py-4 z-50">
                      <div className="grid grid-cols-2 gap-2">
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded-md"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                onClick={() => setShowModal(true)}
              >
                Get Started
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-100`}>
          <div className="px-4 py-6 space-y-4 max-h-96 overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href || '#'}
                  className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                  onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </a>
                {item.hasDropdown && (
                  <div className="ml-4 space-y-2">
                    {item.items?.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <button
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                onClick={() => setShowModal(true)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>
  <GetStartedModal show={showModal} onClose={() => setShowModal(false)} />
  </>
  );
};

export default Header;