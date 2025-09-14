import React, { useEffect } from 'react';


const Ecommerce: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Back Button under Navbar */}
      <div className="pt-20 pb-4">
        <button
          className="px-4 py-2 bg-pink-100 text-pink-700 rounded hover:bg-pink-200 transition shadow"
          onClick={() => window.location.href = '/'}
        >
           Back to Home
        </button>
      </div>
      <h1 className="text-4xl font-bold text-pink-700 mb-4">E-commerce</h1>
      <p className="text-lg text-gray-700 mb-6">Custom online stores and marketplace solutions for retail businesses. Explore our e-commerce platforms, integrations, and success stories.</p>
      <div className="bg-pink-50 rounded-xl p-6 mb-4 shadow">
        <h2 className="text-2xl font-semibold text-pink-600 mb-2">Demo Data</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Case Study: Retailer Z increased sales by 200%</li>
          <li>Service: Marketplace integration</li>
          <li>Testimonial: "Octalead made our store seamless!"</li>
        </ul>
      </div>
    </div>
  );
};

export default Ecommerce;
