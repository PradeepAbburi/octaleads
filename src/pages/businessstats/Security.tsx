import React, { useEffect } from 'react';


const Security: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Back Button under Navbar */}
      <div className="pt-20 pb-4">
        <button
          className="px-4 py-2 bg-blue-100 text-blue-900 rounded hover:bg-blue-200 transition shadow"
          onClick={() => window.location.href = '/'}
        >
           Back to Home
        </button>
      </div>
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Security</h1>
      <p className="text-lg text-gray-700 mb-6">ISO 27001 Certified. Learn about our security practices, certifications, and data protection measures.</p>
      <div className="bg-blue-50 rounded-xl p-6 mb-4 shadow">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Demo Data</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Certification: ISO 27001</li>
          <li>Case Study: Data breach prevention</li>
          <li>Testimonial: "Octalead secures our business!"</li>
        </ul>
      </div>
    </div>
  );
};

export default Security;
