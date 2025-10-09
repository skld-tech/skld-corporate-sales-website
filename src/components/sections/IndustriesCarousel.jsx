import React from 'react';
import Link from 'next/link';

const industries = [
    { 
        title: 'Oil & Gas / Energy', 
        description: 'Flame retardant coveralls, industrial-grade PPE, rugged IT equipment, and offshore-compliant supplies.',
        image: 'https://placehold.co/400x300/1e293b/ffffff?text=Oil+%26+Gas',
        gradient: 'from-blue-800 to-gray-900'
    },
    { 
        title: 'Healthcare', 
        description: 'Scrubs, medical consumables, hygiene solutions, and secure office systems for administrative staff.',
        image: 'https://placehold.co/400x300/4c0519/ffffff?text=Healthcare',
        gradient: 'from-red-800 to-gray-900'
    },
    { 
        title: 'Transport & Logistics', 
        description: 'Driver gear, fleet branding, logistics admin support tools, and custom safety kits.',
        image: 'https://placehold.co/400x300/064e3b/ffffff?text=Logistics',
        gradient: 'from-green-800 to-gray-900'
    },
    { 
        title: 'Engineering & Construction', 
        description: 'Durable workwear, safety boots, site consumables, tools, and visibility-enhancing branded apparel.',
        image: 'https://placehold.co/400x300/6d28d9/ffffff?text=Construction',
        gradient: 'from-purple-800 to-gray-900'
    },
];

/**
 * Industries We Serve component, featuring a dark background and a horizontal
 * scrollable section for industry cards (mimicking a carousel).
 */
export default function IndustriesCarousel() {
    return (
        // Dark background as requested
        <section className="bg-gray-900 text-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
                
                {/* Header and Description */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-end">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-2">
                            OUR SERVICES
                        </p>
                        <h2 className="text-5xl font-extrabold leading-tight text-white">
                            Industries <span className="text-purple-400">we serve</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-300 text-lg">
                            We understand the importance of getting the right procurement partner to foster a well-equipped and optimal work environment. As such, we are committed to delivering top-quality products that meet the highest standards of design, durability, and comfort.
                        </p>
                        <Link href="/contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.02] uppercase text-sm">
                            CONTACT US NOW
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Industry Cards (Horizontal Scrollable Carousel Mimic) */}
                <div className="flex overflow-x-hidden space-x-6 pb-6 -mx-4 sm:-mx-6 lg:-mx-8 pl-4 sm:pl-6 lg:pl-8">
                    {industries.map((industry, index) => (
                        <div 
                            key={index} 
                            className="flex-shrink-0 w-80 sm:w-96 rounded-xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700 hover:shadow-blue-500/50 transition duration-300 transform hover:-translate-y-1"
                        >
                            <div 
                                className={`h-48 bg-cover bg-center bg-gradient-to-t ${industry.gradient} relative`}
                                style={{ 
                                    backgroundImage: `url('${industry.image}')`,
                                    // Subtle dark overlay on the image part
                                    backgroundBlendMode: 'multiply' 
                                }}
                            >
                                {/* Text overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-black/40">
                                    <h3 className="text-3xl font-bold text-white mb-1">
                                        {industry.title}
                                    </h3>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {industry.description}
                                </p>
                                <Link href={`/industries/${industry.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors">
                                    View Solutions
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                    {/* Add an empty card for visual spacing at the end */}
                    <div className="flex-shrink-0 w-8 sm:w-16"></div> 
                </div>
            </div>
        </section>
    );
}
