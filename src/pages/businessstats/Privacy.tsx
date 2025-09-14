import React, { useEffect } from 'react';


const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Back Button under Navbar */}
      <div className="pt-20 pb-4">
        <button
          className="px-4 py-2 bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition shadow"
          onClick={() => window.location.href = '/'}
        >
           Back to Home
        </button>
      </div>
      <h1 className="text-4xl font-bold text-purple-700 mb-4">Privacy</h1>
      <p className="text-lg text-gray-700 mb-6">GDPR Compliant. Explore our privacy policies, compliance, and data handling standards.</p>
      <div className="bg-purple-50 rounded-xl p-6 mb-4 shadow">
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">Demo Data</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Compliance: GDPR</li>
          <li>Case Study: Data privacy implementation</li>
          <li>Testimonial: "Octalead protects our privacy!"</li>
        </ul>
      </div>
    </div>
  );
};

export default Privacy;
