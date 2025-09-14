import React, { useEffect } from 'react';


const Excellence: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Back Button under Navbar */}
      <div className="pt-20 pb-4">
        <button
          className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 transition shadow"
          onClick={() => window.location.href = '/'}
        >
           Back to Home
        </button>
      </div>
      <h1 className="text-4xl font-bold text-yellow-700 mb-4">Excellence</h1>
      <p className="text-lg text-gray-700 mb-6">98% Client Satisfaction. Discover our commitment to excellence, quality, and client feedback.</p>
      <div className="bg-yellow-50 rounded-xl p-6 mb-4 shadow">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-2">Demo Data</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Portfolio: 98% satisfaction rate</li>
          <li>Case Study: Project F exceeded expectations</li>
          <li>Testimonial: "Octalead is top quality!"</li>
        </ul>
      </div>
    </div>
  );
};

export default Excellence;
