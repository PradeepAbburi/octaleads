import React, { useEffect } from 'react';


const Education: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Back Button under Navbar */}
      <div className="pt-20 pb-4">
        <button
          className="px-4 py-2 bg-orange-100 text-orange-700 rounded hover:bg-orange-200 transition shadow"
          onClick={() => window.location.href = '/'}
        >
           Back to Home
        </button>
      </div>
      <h1 className="text-4xl font-bold text-orange-700 mb-4">Education</h1>
      <p className="text-lg text-gray-700 mb-6">Learning management systems and educational platform development. See our work in EdTech, student engagement, and platform features.</p>
      <div className="bg-orange-50 rounded-xl p-6 mb-4 shadow">
        <h2 className="text-2xl font-semibold text-orange-600 mb-2">Demo Data</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Case Study: School B increased engagement by 50%</li>
          <li>Service: Custom LMS platform</li>
          <li>Testimonial: "Octalead transformed our classrooms!"</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
