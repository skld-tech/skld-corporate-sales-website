"use client"

import React, { useState } from 'react';

// Data for the Features sidebar
const featuresData = [
  { 
    id: 1, 
    title: 'Quality Services', 
    icon: 'M13 10V3L4 14h7v7l9-11h-7z', // Lightning bolt icon (representing quality/speed)
    content: "We provide high-quality, tailored procurement solutions across multiple critical sectors, ensuring reliable and on-time delivery."
  },
  { 
    id: 2, 
    title: 'Valuable Ideas', 
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', // Checkmark icon (representing ideas/solutions)
    content: "Our experienced team offers valuable insights and customized strategies to optimize your supply chain and procurement process."
  },
  { 
    id: 3, 
    title: 'Budget Friendly', 
    icon: 'M12 8c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zM12 17.5V18m0-11.5V6', // Dollar/Budget icon
    content: "We focus on cost-effective solutions without compromising on product quality or service reliability, keeping your budget in mind."
  },
];

/**
 * AboutAndFeatures component mirroring image_2638a6.jpg.
 */
export default function AboutAndFeatures() {
    const [activeFeature, setActiveFeature] = useState(featuresData[0]);

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                    
                    {/* Column 1: Feature Sidebar/Interaction */}
                    <div className="lg:col-span-1 mb-10 lg:mb-0">
                        <div className="space-y-4">
                            {featuresData.map((feature) => (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveFeature(feature)}
                                    className={`w-full text-left p-4 rounded-lg transition duration-300 flex items-center shadow-lg
                                        ${activeFeature.id === feature.id 
                                            ? 'bg-blue-600 text-white transform scale-[1.02]' 
                                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                        }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                                    </svg>
                                    <span className="text-lg font-semibold">{feature.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Display content for the active feature on mobile */}
                        <div className="mt-8 p-4 lg:hidden bg-blue-50 rounded-lg border-l-4 border-blue-600 text-gray-700">
                            <h3 className="text-xl font-bold mb-2">{activeFeature.title}</h3>
                            <p className="text-sm">{activeFeature.content}</p>
                        </div>
                    </div>
                    
                    {/* Column 2: Main About Us Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Title and Intro */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
                                ABOUT US
                            </p>
                            <h2 className="text-4xl font-bold text-gray-800 leading-snug">
                                Reliable Procurement for <span className="text-purple-600">Critical Sectors</span>
                            </h2>
                        </div>
                        
                        {/* Main Body Text */}
                        <p className="text-gray-600 text-lg">
                            SKLD Integrated Services Ltd partners with organizations across Oil & Gas, Engineering & Construction, Healthcare, Hospitality, and Logistics to simplify procurement and deliver value where it matters most—on the ground.
                        </p>
                        
                        <p className="text-gray-600 text-lg">
                            For over 25 years, we’ve supported businesses with reliable access to essential operational supplies—from **IT hardware, office equipment, and branded stationery** to **workwear, uniforms, safety gear, and custom-branded merchandise**. We understand that each sector operates in a unique environment, and we tailor our solutions to fit those realities.
                        </p>

                        {/* Sector Specific Bullet Points */}
                        <div className="space-y-4 text-gray-700">
                            <h3 className="text-xl font-semibold mt-6 text-gray-800">Sector-Specific Solutions:</h3>
                            <ul className="list-disc list-inside space-y-3 pl-4">
                                <li>
                                    <strong className="text-gray-900">Oil & Gas / Energy:</strong> Flame retardant coveralls, industrial-grade PPE, rugged IT equipment, and offshore-compliant supplies.
                                </li>
                                <li>
                                    <strong className="text-gray-900">Healthcare:</strong> Scrubs, medical consumables, hygiene solutions, and secure office systems for administrative staff.
                                </li>
                                <li>
                                    <strong className="text-gray-900">Transportation & Logistics:</strong> Driver gear, fleet branding, logistics admin support tools, and custom safety kits.
                                </li>
                            </ul>
                        </div>
                        
                        <p className="text-lg font-semibold italic text-gray-800 pt-4">
                            Let's build something reliable together!
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
