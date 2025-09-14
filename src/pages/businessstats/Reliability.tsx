import React, { useEffect } from 'react';


const Reliability: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Back Button under Navbar */}
      <div className="pt-20 pb-4">
        <button
          className="px-4 py-2 bg-green-100 text-green-900 rounded hover:bg-green-200 transition shadow"
          onClick={() => window.location.href = '/'}
        >
           Back to Home
        </button>
      </div>
      <h1 className="text-4xl font-bold text-green-900 mb-4">Reliability</h1>
      <p className="text-lg text-gray-700 mb-6">24/7 Support. See how we ensure reliability, uptime, and customer support for our clients.</p>
      <div className="bg-green-50 rounded-xl p-6 mb-4 shadow">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">Demo Data</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Support: 24/7 customer service</li>
          <li>Case Study: Zero downtime for Client G</li>
          <li>Testimonial: "Octalead is always available!"</li>
        </ul>
      </div>
    </div>
  );
};

export default Reliability;
