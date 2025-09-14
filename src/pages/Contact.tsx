
import React, { useState, useRef, useEffect } from "react";

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-blue-100">
      <button
        className="w-full text-left p-6 font-semibold text-blue-800 flex justify-between items-center focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <svg
          className={`h-5 w-5 transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-blue-50 text-blue-700 px-6 pb-6 pt-0 rounded-b-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(true);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
            setShowArrow(rect.bottom > window.innerHeight && rect.top >= 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div ref={heroRef} className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-300 relative pt-24">
    {/* Animated blurred shapes for background */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute left-20 top-24 w-56 h-56 rounded-full bg-blue-200 opacity-60 blur-2xl"></div>
      <div className="absolute right-32 top-40 w-40 h-40 rounded-full bg-blue-400 opacity-50 blur-2xl"></div>
      <div className="absolute left-1/2 bottom-16 w-32 h-32 rounded-full bg-blue-300 opacity-40 blur-2xl"></div>
      <div className="absolute right-1/4 bottom-32 w-44 h-44 rounded-full bg-blue-100 opacity-50 blur-2xl"></div>
    </div>

  {/* Hero Section */}
  <section className="min-h-screen flex flex-col items-center text-center text-black relative z-10 pt-40">
      <h2 className="text-lg mb-2 text-blue-700 font-semibold">Let's Build Something Amazing</h2>
      <h1 className="text-5xl font-bold mb-4 text-black">Get In Touch</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-900">Ready to transform your digital presence? Our team of experts is here to help you create innovative web solutions that drive growth and success.</p>
      <div className="flex justify-center gap-4 mb-4">
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg">Start Your Project</button>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg border border-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-lg">View Our Work</button>
      </div>
      {/* Minimal Down Arrow at Bottom, only show when hero is fully visible */}
      {showArrow && (
        <div
          className="fixed left-1/2 bottom-6 z-20 -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={() => {
            const nextSection = document.querySelector('.main-contact-section');
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
    </section>

  {/* Main Contact Section */}
  <section className="main-contact-section max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
      {/* Contact Form */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-blue-900">Start Your Project</h3>
        <p className="text-blue-700 mb-6">Ready to transform your online presence? Fill out the form below and we'll get back to you within 24 hours to discuss your project.</p>
        <form className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 flex flex-col gap-4 border border-blue-200">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1 text-blue-700">Full Name *</label>
              <input type="text" className="w-full border-2 border-blue-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition" placeholder="Enter your full name" required />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1 text-blue-700">Email Address *</label>
              <input type="email" className="w-full border-2 border-blue-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition" placeholder="Enter your email address" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-blue-700">Mobile Number *</label>
            <input type="tel" className="w-full border-2 border-blue-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition" placeholder="Enter your mobile number" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-blue-700">Message *</label>
            <textarea className="w-full border-2 border-blue-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition" rows={4} placeholder="Tell us about your project needs..." required></textarea>
          </div>
          <button type="submit" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-bold py-3 rounded-lg mt-2 shadow-lg hover:scale-105 hover:from-blue-600 hover:to-blue-800 transition-all duration-200">Send Message</button>
        </form>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-blue-900">Get in Touch</h3>
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-6 border border-blue-200">
          <div className="mb-4 flex flex-col gap-2">
            <span className="font-bold text-blue-800">Email Us</span>
            <a href="mailto:hello@octaleads.com" className="text-blue-600 font-semibold">hello@octaleads.com</a>
            <div className="text-blue-500 text-sm">Send us a message and we'll get back to you within 24 hours</div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <span className="font-bold text-blue-800">Phone</span>
            <a href="tel:+918522938999" className="text-blue-600 font-semibold">+91 8522-938-999</a>
            <div className="text-blue-500 text-sm">Call us for immediate assistance</div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <span className="font-bold text-blue-800">Visit Us</span>
            <span className="text-blue-600 font-semibold">4th Floor, T-Hub Foundation, Madhapur, Hyderabad, India</span>
            <div className="text-blue-500 text-sm">Schedule a meeting at our office</div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <span className="font-bold text-blue-800">Business Hours</span>
            <span className="text-blue-600 font-semibold">Mon-Fri: 9AM-6PM PST</span>
            <div className="text-blue-500 text-sm">We're available during these hours for immediate support</div>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <span className="font-bold text-blue-800">Need Immediate Help?</span>
            <span className="text-blue-700">For urgent inquiries or technical support, reach out to us directly.</span>
            <div className="flex gap-4 mt-2">
              <a href="tel:+918522938999" className="text-blue-600 font-semibold flex items-center gap-2" title="Call Now">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                <span className="hidden sm:inline">Call</span>
              </a>
              <a href="https://wa.me/918522938999" className="text-green-600 font-semibold flex items-center gap-2" title="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0012.07.01C5.41.01.01 5.41.01 12.07c0 2.13.56 4.21 1.62 6.05L.02 24l5.98-1.56a12.07 12.07 0 006.07 1.62c6.66 0 12.06-5.4 12.06-12.06 0-3.22-1.25-6.25-3.53-8.52zm-8.45 19.13c-1.97 0-3.91-.52-5.6-1.51l-.4-.23-3.55.93.95-3.46-.26-.42A10.07 10.07 0 012.01 12.07c0-5.56 4.51-10.07 10.07-10.07 2.7 0 5.23 1.05 7.14 2.96a9.97 9.97 0 012.94 7.11c0 5.56-4.51 10.07-10.07 10.07zm5.48-7.63c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.78-1.69-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.18-1.41-.07-.13-.27-.2-.57-.35z"/></svg>
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section with Dropdowns */}
    <section className="max-w-4xl mx-auto py-12 px-4 relative z-10">
      <h3 className="text-2xl font-bold mb-8 text-center text-blue-900">Frequently Asked Questions</h3>
      <div className="space-y-6">
        <FAQItem question="What services do you offer?">
          We provide comprehensive web development services including custom website development, e-commerce solutions, UI/UX design, digital marketing, and SEO optimization.
        </FAQItem>
        <FAQItem question="How long does a typical project take?">
          Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications can take 8-12 weeks. We'll provide a detailed timeline during consultation.
        </FAQItem>
        <FAQItem question="Do you provide ongoing support?">
          Yes, we offer various support packages including maintenance, updates, and technical support. We also provide training for your team to manage the website.
        </FAQItem>
        <FAQItem question="Do you work with international clients?">
          Absolutely! We work with clients worldwide and have experience serving businesses in various time zones. We're flexible with communication and project management.
        </FAQItem>
      </div>
    </section>

  </div>

  );
};

export default Contact;
