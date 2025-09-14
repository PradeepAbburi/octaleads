import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    icon: "🟦",
    title: "TechFlow Solutions",
    duration: "8 weeks",
    teamSize: "6 developers",
    industry: "SaaS & Project Management",
    challenge:
      "A growing startup needed a scalable project management platform to handle their expanding team and complex client projects.",
    solution:
      "We developed a comprehensive SaaS platform with real-time collaboration, advanced analytics, and workflow automation features.",
    results: [
      "300% increase in team productivity",
      "10,000+ active users within 6 months",
      "50% reduction in project delays",
      "95% client satisfaction rate",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Socket.io"],
    metrics: [
      { label: "Users", value: "10,000+" },
      { label: "Productivity", value: "300%" },
      { label: "Satisfaction", value: "95%" },
    ],
    featured: true,
  },
  {
    icon: "🟩",
    title: "EcoStore Pro",
    duration: "12 weeks",
    teamSize: "8 developers",
    industry: "E-commerce & Sustainability",
    challenge:
      "An eco-friendly retail business needed a modern e-commerce platform that could handle high traffic and provide excellent user experience.",
    solution:
      "We built a sustainable e-commerce platform with advanced inventory management, customer analytics, and mobile optimization.",
    results: [
      "200% increase in online sales",
      "15,000+ products managed efficiently",
      "40% improvement in conversion rate",
      "60% reduction in cart abandonment",
    ],
    technologies: ["Next.js", "Stripe", "MongoDB", "Vercel", "Redis"],
    metrics: [
      { label: "Sales", value: "200%" },
      { label: "Conversion", value: "40%" },
      { label: "Products", value: "15,000+" },
    ],
    featured: false,
  },
  {
    icon: "🟥",
    title: "Healthcare Plus",
    duration: "10 weeks",
    teamSize: "10 developers",
    industry: "Healthcare & Patient Care",
    challenge:
      "A healthcare provider needed a HIPAA-compliant platform to streamline patient care and improve communication.",
    solution:
      "We developed a secure healthcare platform with patient portal, appointment booking, and secure communication features.",
    results: [
      "95% patient satisfaction rate",
      "5,000+ patients served",
      "30% reduction in appointment no-shows",
      "50% improvement in appointment scheduling efficiency",
    ],
    technologies: ["React", "Python", "PostgreSQL", "HIPAA Compliant", "AWS"],
    metrics: [
      { label: "Satisfaction", value: "95%" },
      { label: "No Shows", value: "30%" },
      { label: "Patients", value: "5,000+" },
    ],
    featured: false,
  },
];

const CaseStudies: React.FC = () => {
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
    <div ref={heroRef} className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-300">
    {/* Header Section */}
    {/* Minimal Down Arrow at Bottom, only show when hero is fully visible */}
    {showArrow && (
      <div
        className="fixed left-1/2 bottom-6 z-20 -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => {
          const nextSection = document.querySelector('.main-casestudy-section');
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
    {/* Hero Section (Contact style) */}
  <div className="relative pt-24 pb-16">
      {/* Animated blurred shapes for background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-20 top-24 w-56 h-56 rounded-full bg-blue-200 opacity-60 blur-2xl"></div>
        <div className="absolute right-32 top-40 w-40 h-40 rounded-full bg-blue-400 opacity-50 blur-2xl"></div>
        <div className="absolute left-1/2 bottom-16 w-32 h-32 rounded-full bg-blue-300 opacity-40 blur-2xl"></div>
        <div className="absolute right-1/4 bottom-32 w-44 h-44 rounded-full bg-blue-100 opacity-50 blur-2xl"></div>
      </div>
  <section className="pt-32 pb-16 text-center text-black relative z-10">
        <h2 className="text-lg mb-2 text-blue-700 font-semibold">Real Results, Real Impact</h2>
        <h1 className="text-5xl font-bold mb-4 text-black">Case Studies</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-900">Discover how we've helped businesses achieve remarkable growth through innovative web development solutions. See the numbers, understand the process, and learn from our success stories.</p>
        <div className="flex justify-center gap-4 mb-4">
          <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg">Start Your Project</Link>
          <Link to="/portfolio" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg border border-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-lg">View Portfolio</Link>
        </div>
      </section>
    </div>

  {/* Success Metrics Section */}
  <section className="main-casestudy-section max-w-5xl mx-auto py-16 px-4">
      <div className="bg-blue-50 rounded-2xl shadow-lg px-8 py-10 mb-12">
        <h2 className="text-4xl font-bold text-center mb-4 text-black">Real Success Stories</h2>
        <p className="text-lg text-center text-blue-700">Explore detailed case studies showcasing how our web development solutions have transformed businesses and delivered measurable results.</p>
      </div>
      <div className="flex justify-center gap-12 mb-16">
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 rounded-full p-4 mb-2">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500"><circle cx="12" cy="12" r="10" strokeWidth="2" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">👥</text></svg>
          </div>
          <div className="font-bold text-xl">25,000+</div>
          <div className="text-sm text-[#666]">Users Impacted</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 rounded-full p-4 mb-2">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500"><circle cx="12" cy="12" r="10" strokeWidth="2" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">📈</text></svg>
          </div>
          <div className="font-bold text-xl">250%</div>
          <div className="text-sm text-[#666]">Average Growth</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 rounded-full p-4 mb-2">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500"><circle cx="12" cy="12" r="10" strokeWidth="2" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">💰</text></svg>
          </div>
          <div className="font-bold text-xl">$2M+</div>
          <div className="text-sm text-[#666]">Revenue Generated</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 rounded-full p-4 mb-2">
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500"><circle cx="12" cy="12" r="10" strokeWidth="2" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">⏱️</text></svg>
          </div>
          <div className="font-bold text-xl">12 weeks</div>
          <div className="text-sm text-[#666]">Average Timeline</div>
        </div>
      </div>

      {/* Case Study Cards */}
  <div className="grid grid-cols-1 gap-16">
        {caseStudies.map((cs, idx) => (
          <div
            key={cs.title}
            className="bg-white/95 rounded-3xl shadow-2xl border border-blue-200 p-10 flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-3xl hover:border-blue-500 mb-8"
            style={{ boxShadow: '0 8px 32px 0 rgba(60, 120, 200, 0.12)' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl drop-shadow-lg">{cs.icon}</div>
              <div className="font-bold text-2xl text-blue-900 drop-shadow">{cs.title}</div>
              <div className="ml-auto text-xs text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full shadow">
                {cs.featured ? "Featured Case Study" : idx === 1 ? "High Impact" : "Specialized"}
              </div>
            </div>
            <div className="flex gap-8 mb-4 text-base text-blue-700">
              <div><span className="font-bold text-blue-900">Duration</span>: {cs.duration}</div>
              <div><span className="font-bold text-blue-900">Team Size</span>: {cs.teamSize}</div>
              <div><span className="font-bold text-blue-900">Industry</span>: {cs.industry}</div>
            </div>
            <div className="grid grid-cols-1 gap-8 mb-4">
              <div>
                <div className="font-bold mb-2 text-blue-900">The Challenge</div>
                <div className="text-blue-700 mb-4">{cs.challenge}</div>
                <div className="font-bold mb-2 text-blue-900">Results Achieved</div>
                <ul className="list-disc pl-5 text-green-700 mb-4">
                  {cs.results.slice(0, 2).map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-bold mb-2 text-blue-900">Our Solution</div>
                <div className="text-blue-700 mb-4">{cs.solution}</div>
                <ul className="list-disc pl-5 text-green-700 mb-4">
                  {cs.results.slice(2).map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-bold text-blue-900 mb-1">Technologies Used</div>
              <div className="flex flex-wrap gap-2">
                {cs.technologies.map((tech) => (
                  <span key={tech} className="bg-blue-100 px-3 py-1 rounded-full text-xs font-semibold text-blue-700 shadow-sm hover:bg-blue-200 transition-colors duration-200 cursor-pointer">{tech}</span>
                ))}
              </div>
            </div>
            <div className="bg-blue-100 rounded-2xl p-4 flex gap-8 justify-between items-center mb-8 shadow">
              {cs.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="font-bold text-lg text-blue-700">{m.value}</div>
                  <div className="text-xs text-blue-600">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-auto pt-6">
              <Link
                to="/contact"
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-200 inline-block w-full text-center"
              >
                Start Your Success Story &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="max-w-5xl mx-auto py-16 px-4">
      <div className="bg-gradient-to-br from-blue-700 via-blue-900 to-blue-800 text-white rounded-2xl p-10 text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h2>
        <p className="mb-6 text-blue-100">Let's discuss your project and create a solution that delivers measurable results for your business.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-500">Start Your Project</button>
          <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-50">View Portfolio</button>
        </div>
      </div>
    </section>

    {/* Footer Section */}
    {/* Footer removed as requested */}
  </div>
);

}
export default CaseStudies;
