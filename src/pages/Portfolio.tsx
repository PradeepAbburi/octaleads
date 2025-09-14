
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const portfolioStats = [
  { icon: "🚀", value: "100+", label: "Projects Delivered" },
  { icon: "👍", value: "95%", label: "Client Satisfaction" },
  { icon: "🕒", value: "24/7", label: "Support Available" },
  { icon: "🌐", value: "15+", label: "Industries Served" },
];

const portfolioItems = [
  {
    title: "TechFlow Solutions",
    subtitle: "SaaS Platform",
    description:
      "A comprehensive project management platform with real-time collaboration, analytics, and automation features.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    features: [
      "Real-time Collaboration",
      "Advanced Analytics",
      "Workflow Automation",
      "Mobile App",
    ],
    results: [
      "300% increase in team productivity",
      "50% reduction in project delays",
      "10,000+ active users",
    ],
    links: [
      { label: "View Live", url: "#" },
      { label: "Code", url: "#" },
    ],
    color: "blue",
  },
  {
    title: "EcoStore Pro",
    subtitle: "E-commerce Platform",
    description:
      "A sustainable e-commerce platform with advanced inventory management, customer analytics, and mobile optimization.",
    technologies: ["Next.js", "Stripe", "MongoDB", "Vercel"],
    features: [
      "Payment Processing",
      "Inventory Management",
      "Customer Analytics",
      "Mobile Optimization",
    ],
    results: [
      "200% increase in sales",
      "40% improvement in conversion rate",
      "15,000+ products managed",
    ],
    links: [
      { label: "View Live", url: "#" },
      { label: "Code", url: "#" },
    ],
    color: "green",
  },
  {
    title: "Healthcare Plus",
    subtitle: "Healthcare Platform",
    description:
      "A HIPAA-compliant healthcare platform with patient portal, appointment booking, and secure communication.",
    technologies: ["React", "Python", "PostgreSQL", "HIPAA Compliant"],
    features: [
      "Patient Portal",
      "Appointment Booking",
      "Secure Messaging",
    ],
    results: [
      "95% patient satisfaction",
      "30% reduction in no-shows",
      "5,000+ patients served",
    ],
    links: [
      { label: "View Live", url: "#" },
      { label: "Code", url: "#" },
    ],
    color: "red",
  },
  {
    title: "EduLearn Hub",
    subtitle: "Education Platform",
    description:
      "A learning management system with course creation, student progress tracking, and interactive assessments.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    features: [
      "Course Creation",
      "Progress Tracking",
      "Interactive Assessments",
    ],
    results: [
      "80% improvement in student engagement",
      "20% increase in completion rates",
      "2,000+ active students",
    ],
    links: [
      { label: "View Live", url: "#" },
      { label: "Code", url: "#" },
    ],
    color: "purple",
  },
  {
    title: "FinTech Pro",
    subtitle: "Financial Platform",
    description:
      "A secure financial platform with real-time trading, portfolio management, and advanced analytics.",
    technologies: ["Angular", "Java", "Oracle", "Kubernetes"],
    features: [
      "Real-time Trading",
      "Portfolio Management",
      "Risk Analytics",
      "API Integration",
    ],
    results: [
      "99.9% uptime",
      "50% faster trade execution",
      "1M+ transactions processed",
    ],
    links: [
      { label: "View Live", url: "#" },
      { label: "Code", url: "#" },
    ],
    color: "yellow",
  },
  {
    title: "RealEstate Connect",
    subtitle: "Real Estate Platform",
    description:
      "A comprehensive real estate platform with property listings, virtual tours, and lead management.",
    technologies: ["React", "Django", "PostgreSQL", "AWS"],
    features: [
      "Property Listings",
      "Virtual Tours",
      "Lead Management",
      "Analytics Dashboard",
    ],
    results: [
      "150% increase in lead generation",
      "60% improvement in conversion rate",
      "500+ properties listed",
    ],
    links: [
      { label: "View Live", url: "#" },
      { label: "Code", url: "#" },
    ],
    color: "indigo",
  },
];

const Portfolio: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
  setShowArrow(rect.bottom > window.innerHeight && rect.top >= 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-blue-100 to-blue-300">
      {/* Hero Section - Consistent UI */}
  <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        {/* Gradient and blurred shapes */}
        <div className="absolute inset-0 z-0 w-full h-full animate-gradient bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 opacity-80"></div>
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
          <div className="absolute inset-0 w-full h-full bg-white/80 backdrop-blur-2xl"></div>
          <div className="absolute left-20 top-24 w-56 h-56 rounded-full bg-blue-200 opacity-60 blur-2xl"></div>
          <div className="absolute right-32 top-40 w-40 h-40 rounded-full bg-blue-400 opacity-50 blur-2xl"></div>
          <div className="absolute left-1/2 bottom-16 w-32 h-32 rounded-full bg-blue-300 opacity-40 blur-2xl"></div>
          <div className="absolute right-1/4 bottom-32 w-44 h-44 rounded-full bg-blue-100 opacity-50 blur-2xl"></div>
        </div>
        {/* Minimal Down Arrow at Bottom, only show when hero is fully visible */}
        {showArrow && (
          <div
            className="fixed left-1/2 bottom-6 z-20 -translate-x-1/2 cursor-pointer animate-bounce"
            onClick={() => {
              const nextSection = document.querySelector('.main-portfolio-section');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            aria-label="Scroll Down"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
  <div className="w-full max-w-4xl mx-auto px-4 py-52 text-center relative z-10">
          <h2 className="text-lg font-semibold mb-2 tracking-wide text-blue-600">Showcasing Excellence</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">Our Portfolio</h1>
    <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
            Explore our collection of successful web development projects, custom websites, and digital solutions that have transformed businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Link to="/casestudy" className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg border border-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-lg">View Case Studies</Link>
            <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg">Get Started</Link>
          </div>
        </div>
      </section>

  {/* Minimalistic Stats & Portfolio Cards Section */}
  <div className="main-portfolio-section bg-white py-16 px-4">
        <p className="text-center text-black mb-8 max-w-2xl mx-auto text-lg">
          Discover how we've transformed businesses through innovative web development, stunning design, and strategic digital solutions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {portfolioStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl border border-gray-200 py-8 hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-xl font-bold mb-1 text-gray-900">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Minimalistic Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {portfolioItems.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-blue-100 p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 bg-white/40 backdrop-blur-md shadow-lg hover:scale-105 hover:border-black">
              <div className="flex items-center mb-2">
                <span className={`inline-block w-6 h-6 rounded-full mr-2 bg-gray-200`} />
                <span className="text-xs font-semibold text-gray-500">{item.subtitle}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 leading-tight">{item.title}</h3>
              <p className="text-gray-700 mb-4 text-sm">{item.description}</p>
              <div className="mb-2">
                <span className="font-semibold text-gray-600">Technologies Used:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-gray-600">Key Features:</span>
                <ul className="list-disc ml-6 text-gray-700 text-xs">
                  {item.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-gray-600">Results Achieved:</span>
                <ul className="list-disc ml-6 text-green-600 text-xs">
                  {item.results.map((result, i) => (
                    <li key={i}>{result}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={item.links[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg font-semibold text-xs border border-blue-600 text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
                >
                  {item.links[0].label}
                </a>
                <a
                  href={item.links[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg font-semibold text-xs border border-gray-900 text-white bg-black hover:bg-gray-800 transition-all duration-200"
                >
                  {item.links[1].label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 py-16 px-4 text-center mt-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg text-gray-700 mb-8">Let's create something amazing together. Your next success story starts here.</p>
        <div className="flex justify-center gap-4">
          <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg">Start Your Project</Link>
          <Link to="/casestudies" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg border border-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-lg">View Case Studies</Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
