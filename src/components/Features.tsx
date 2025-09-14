
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ShoppingCart, HeartPulse, GraduationCap, DollarSign, Home } from 'lucide-react';

const industries = [
	{
		icon: <Briefcase size={32} className="text-blue-400" />,
		title: 'Startups & SMEs',
		description: 'Scalable web solutions for growing businesses and innovative startups.',
		button: 'Learn More',
		color: 'bg-blue-900'
	},
	{
		icon: <ShoppingCart size={32} className="text-pink-400" />,
		title: 'E-commerce',
		description: 'Custom online stores and marketplace solutions for retail businesses.',
		button: 'Learn More',
		color: 'bg-pink-900'
	},
	{
		icon: <HeartPulse size={32} className="text-green-400" />,
		title: 'Healthcare',
		description: 'HIPAA-compliant web applications and patient management systems.',
		button: 'Learn More',
		color: 'bg-green-900'
	},
	{
		icon: <GraduationCap size={32} className="text-orange-400" />,
		title: 'Education',
		description: 'Learning management systems and educational platform development.',
		button: 'Learn More',
		color: 'bg-orange-900'
	},
	{
		icon: <DollarSign size={32} className="text-yellow-400" />,
		title: 'Finance & Fintech',
		description: 'Secure financial applications and banking platform solutions.',
		button: 'Learn More',
		color: 'bg-yellow-900'
	},
	{
		icon: <Home size={32} className="text-purple-400" />,
		title: 'Real Estate',
		description: 'Property management systems and real estate platform development.',
		button: 'Learn More',
		color: 'bg-purple-900'
	}
];

const Features: React.FC = () => {
	return (
		<section id="features" className="py-20 bg-gradient-to-br from-blue-50 via-blue-200 to-blue-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
						Industry <span className="text-blue-600">Expertise</span>
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
					{industries.map((industry, idx) => {
						// Generate route path from title
						const route = `/industries/${industry.title.replace(/\s|&/g, '').replace(/[^a-zA-Z0-9]/g, '')}`;
						return (
							<Link to={route} key={idx} className="no-underline">
								<div
									className="bg-white/80 backdrop-blur-lg border border-blue-100 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer relative overflow-hidden"
								>
									{/* Blurred colored shape behind icon */}
									<div className={`absolute -top-6 -left-6 w-24 h-24 rounded-full ${industry.color} opacity-30 blur-2xl z-0`}></div>
									<div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 z-10 shadow-lg`} style={{ background: 'rgba(255,255,255,0.7)' }}>
										{industry.icon}
									</div>
									<h3 className="text-xl font-semibold text-black mb-2 text-center z-10">{industry.title}</h3>
									<p className="text-gray-600 mb-6 text-center z-10">{industry.description}</p>
									<button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-8 py-2 rounded-full font-semibold text-md shadow-lg hover:scale-105 hover:from-blue-600 hover:to-blue-800 transition-all duration-200 z-10">
										{industry.button}
									</button>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Features;