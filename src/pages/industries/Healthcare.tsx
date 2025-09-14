import React, { useEffect } from 'react';


const Healthcare: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Back Button under Navbar */}
      <div className="pt-20 pb-4">
        <button
          className="px-4 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200 transition shadow"
          onClick={() => window.location.href = '/'}
        >
           Back to Home
        </button>
      </div>
      <h1 className="text-4xl font-bold text-green-700 mb-4">Healthcare</h1>
      <p className="text-lg text-gray-700 mb-6">HIPAA-compliant web applications and patient management systems. Discover our healthcare solutions, compliance, and client results.</p>
      <div className="bg-green-50 rounded-xl p-6 mb-4 shadow">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">Demo Data</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Case Study: Clinic A improved patient management</li>
          <li>Service: HIPAA-compliant portal</li>
          <li>Testimonial: "Octalead keeps our data safe!"</li>
        </ul>
      </div>
    </div>
  );
};

export default Healthcare;
