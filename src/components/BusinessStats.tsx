import React from 'react';
import { Link } from 'react-router-dom';

const stats = [
  {
    title: 'Success', value: '1500+', description: 'Projects Delivered',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80' // trophy
  },
  {
    title: 'Growth', value: '95%', description: 'Happy Clients',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80' // plant growing
  },
  {
    title: 'Excellence', value: '98%', description: 'Client Satisfaction',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' // medal
  },
  {
    title: 'Security', value: 'ISO 27001', description: 'Certified',
    img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=400&q=80' // lock
  },
  {
    title: 'Privacy', value: 'GDPR', description: 'Compliant',
  img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' // compliance (documents, checkmark)
  },
  {
    title: 'Reliability', value: '24/7', description: 'Support',
    img: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80' // clock
  },
];

const BusinessStats: React.FC = () => {
  return (
  <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-black">Trusted by </span>
            <span className="text-blue-600">Businesses </span>
            <span className="text-blue-600">Worldwide</span>
          </h2>
        </div>
        <div className="bg-white rounded-3xl p-8 flex flex-col gap-8 shadow-xl border border-blue-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Top row: Success, Growth, Excellence */}
              <Link to={`/businessstats/Success`} className="no-underline">
                <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6 flex flex-col justify-between min-h-[180px] cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">{stats[0].title}</h3>
                    <div className="text-blue-800 text-xl font-bold mb-1">{stats[0].value}</div>
                    <p className="text-gray-700 text-sm mb-2">{stats[0].description}</p>
                  </div>
                  <img src={stats[0].img} alt={stats[0].title} className="rounded-xl w-full h-20 object-cover" />
                </div>
              </Link>
              <Link to={`/businessstats/Growth`} className="no-underline">
                <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6 flex flex-col justify-between min-h-[180px] cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">{stats[1].title}</h3>
                    <div className="text-blue-800 text-xl font-bold mb-1">{stats[1].value}</div>
                    <p className="text-gray-700 text-sm mb-2">{stats[1].description}</p>
                  </div>
                  <img src={stats[1].img} alt={stats[1].title} className="rounded-xl w-full h-20 object-cover" />
                </div>
              </Link>
              <Link to={`/businessstats/Excellence`} className="no-underline">
                <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6 flex flex-col justify-between min-h-[180px] cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">{stats[2].title}</h3>
                    <div className="text-blue-800 text-xl font-bold mb-1">{stats[2].value}</div>
                    <p className="text-gray-700 text-sm mb-2">{stats[2].description}</p>
                  </div>
                  <img src={stats[2].img} alt={stats[2].title} className="rounded-xl w-full h-20 object-cover" />
                </div>
              </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Bottom row: Security (large), Privacy, Reliability */}
              <Link to={`/businessstats/Security`} className="no-underline col-span-2">
                <div className="bg-blue-100 rounded-2xl border border-blue-200 p-6 flex flex-col justify-between min-h-[220px] cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">{stats[3].title}</h3>
                    <div className="text-blue-800 text-xl font-bold mb-1">{stats[3].value}</div>
                    <p className="text-gray-700 text-sm mb-2">{stats[3].description}</p>
                  </div>
                  <img src={stats[3].img} alt={stats[3].title} className="rounded-xl w-full h-80 object-cover" />
                </div>
              </Link>
            <div className="flex flex-col gap-8">
              <Link to={`/businessstats/Privacy`} className="no-underline">
                <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6 flex flex-col justify-between min-h-[100px] cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">{stats[4].title}</h3>
                    <div className="text-blue-800 text-xl font-bold mb-1">{stats[4].value}</div>
                    <p className="text-gray-700 text-sm mb-2">{stats[4].description}</p>
                  </div>
                  <img src={stats[4].img} alt={stats[4].title} className="rounded-xl w-full h-16 object-cover" />
                </div>
              </Link>
              <Link to={`/businessstats/Reliability`} className="no-underline">
                <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6 flex flex-col justify-between min-h-[100px] cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">{stats[5].title}</h3>
                    <div className="text-blue-800 text-xl font-bold mb-1">{stats[5].value}</div>
                    <p className="text-gray-700 text-sm mb-2">{stats[5].description}</p>
                  </div>
                  <img src={stats[5].img} alt={stats[5].title} className="rounded-xl w-full h-16 object-cover" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStats;
