import React, { useEffect } from 'react';


const StartupsSMEs: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Back Button under Navbar */}
      <div className="pt-20 pb-4">
        <button
          className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition shadow"
          onClick={() => window.location.href = '/'}
        >
           Back to Home
        </button>
      </div>
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Startups & SMEs</h1>
      <p className="text-lg text-gray-700 mb-6">Scalable web solutions for growing businesses and innovative startups. Learn more about our expertise, case studies, and services for startups and SMEs.</p>
      <div className="bg-blue-50 rounded-xl p-6 mb-4 shadow">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Demo Data</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Case Study: Startup X grew 300% in 1 year</li>
          <li>Service: MVP development for SMEs</li>
          <li>Testimonial: "Octalead helped us scale fast!"</li>
        </ul>
      </div>
    </div>
  );
};

export default StartupsSMEs;
