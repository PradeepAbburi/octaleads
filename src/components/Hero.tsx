

import { Code2, MonitorSmartphone, Cpu, Cloud, Database } from 'lucide-react';



import React, { useRef, useEffect, useState } from 'react';
import GetStartedModal from './GetStartedModal';


const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [showArrow, setShowArrow] = useState(true);
  const [showModal, setShowModal] = useState(false);

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
  <section ref={heroRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-200 to-blue-400 relative overflow-hidden">
  {/* Whitish-Blue Gradient Background */}
  <div className="absolute inset-0 z-0 w-full h-full animate-gradient bg-gradient-to-br from-white via-blue-200 to-blue-400 opacity-80"></div>
      {/* White Blur BG with Blurred Shapes Behind Tech Icons */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        {/* Slightly less opaque white blurred background */}
        <div className="absolute inset-0 w-full h-full bg-white/70 backdrop-blur-2xl"></div>
        {/* Blurred blue shapes, slightly stronger */}
        <div className="absolute left-20 top-24 w-56 h-56 rounded-full bg-blue-200 opacity-50 blur-2xl"></div>
        <div className="absolute right-32 top-40 w-40 h-40 rounded-full bg-blue-300 opacity-40 blur-2xl"></div>
        <div className="absolute left-1/2 bottom-16 w-32 h-32 rounded-full bg-blue-200 opacity-30 blur-2xl"></div>
        <div className="absolute right-1/4 bottom-32 w-44 h-44 rounded-full bg-blue-100 opacity-40 blur-2xl"></div>
        {/* Tech icons above blurred shapes */}
        <div className="absolute left-10 top-20 animate-float-slow" style={{ zIndex: 2 }}>
          <Code2 size={48} color="#2563eb" />
        </div>
        <div className="absolute right-16 top-32 animate-float-fast" style={{ zIndex: 2 }}>
          <MonitorSmartphone size={48} color="#3b82f6" />
        </div>
        <div className="absolute left-1/2 bottom-10 animate-float-medium" style={{ zIndex: 2 }}>
          <Cpu size={48} color="#60a5fa" />
        </div>
        <div className="absolute right-1/4 bottom-20 animate-float-slow" style={{ zIndex: 2 }}>
          <Cloud size={48} color="#2563eb" />
        </div>
        <div className="absolute left-1/4 top-1/2 animate-float-medium" style={{ zIndex: 2 }}>
          <Database size={48} color="#3b82f6" />
        </div>
      </div>
      {/* Minimal Down Arrow at Bottom, only show when hero is fully visible */}
      {showArrow && (
        <div
          className="fixed left-1/2 bottom-6 z-20 -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={() => {
            const nextSection = document.querySelector('.main-home-section');
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
      <div className="w-full max-w-4xl mx-auto px-4 py-24 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
          Transform Your Business with <br />
          <span className="text-blue-600">Digital Excellence</span>
        </h1>
        <p className="text-xl text-blue-600 mb-8">
          Digital shortcuts to your success story
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Get Started
          </button>
          <button
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg border border-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-lg"
            onClick={() => {
              window.location.href = '/portfolio';
            }}
          >
            View Our Work
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">ISO</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">BSL</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">GDPR</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">24/7</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-2">
          <span className="text-blue-600 font-bold">★ 4.9/5</span>
          <span className="text-blue-700">Trusted by 1500+ Clients</span>
        </div>
      </div>
    {/* Popup Modal for Get Started */}
    <GetStartedModal show={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default Hero;