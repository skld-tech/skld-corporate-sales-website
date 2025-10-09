import React from 'react';
import Link from 'next/link';

// Data for client logos (using high-contrast placeholders)
const clients = [
    { name: 'Seplat Energy', logoUrl: 'https://placehold.co/120x60/3b82f6/ffffff?text=Seplat', link: '#' },
    { name: 'CAP Plc', logoUrl: 'https://placehold.co/120x60/10b981/ffffff?text=CAP', link: '#' },
    { name: 'UNICEF', logoUrl: 'https://placehold.co/120x60/9333ea/ffffff?text=UNICEF', link: '#' },
    { name: 'FanMilk', logoUrl: 'https://placehold.co/120x60/f59e0b/ffffff?text=FanMilk', link: '#' },
    { name: 'TSL Logistics', logoUrl: 'https://placehold.co/120x60/ef4444/ffffff?text=TSL', link: '#' },
    { name: 'May & Baker', logoUrl: 'https://placehold.co/120x60/6366f1/ffffff?text=M&B', link: '#' },
];

// Data for recent projects
const projects = [
    { 
        title: 'Corporate gifts supplies to Lafarge Africa', 
        category: 'DESIGN', 
        image: 'https://placehold.co/400x300/e0e7ff/1f2937?text=Lafarge+Project' 
    },
    { 
        title: 'Workwear supplied to TSL Logistics', 
        category: 'IDEAS / TECHNOLOGY', 
        image: 'https://placehold.co/400x300/bfdbfe/1f2937?text=TSL+Workwear' 
    },
    { 
        title: 'Tonners, Printers & ACs supplied to Fan Milk', 
        category: 'TECHNOLOGY', 
        image: 'https://placehold.co/400x300/c7d2fe/1f2937?text=FanMilk+Supplies' 
    },
];


/**
 * Clients and Projects component featuring client logos and recent project showcases.
 */
export default function ClientsAndProjects() {
    return (
        // Using a very light gray background to separate it from pure white sections 
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
                
                {/* 1. Client Logos Section */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
                        CLIENTELE
                    </p>
                    <h2 className="text-4xl font-bold text-gray-800 mb-10">
                        Some of our <span className="text-purple-600">Clients</span>
                    </h2>
                    
                    {/* Logo Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
                        {clients.map((client) => (
                            <div 
                                key={client.name} 
                                className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-0.5"
                            >
                                {/* Placeholder for Logo */}
                                <img 
                                    src={client.logoUrl} 
                                    alt={`${client.name} Logo`} 
                                    className="mx-auto h-12 w-auto object-contain" 
                                    // onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x60/cccccc/000000?text=LOGO" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="h-1 bg-gray-200 w-full max-w-lg mx-auto my-16 rounded-full" />
                
                {/* 2. Recent Projects Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    
                    {/* Intro Text Column */}
                    <div className="lg:col-span-1 space-y-4">
                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
                            WE MAKE CONNECTIONS
                        </p>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Recent <span className="text-purple-600">Projects</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            The credibility of our competencies can be validated by observing our portfolio of distinguished clients and the success stories we've delivered across various sectors.
                        </p>
                        <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg transition duration-300">
                            View Full Portfolio
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Project Cards Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        // onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/e0e7ff/1f2937?text=Project" }}
                                    />
                                </div>
                                <div className="p-5 space-y-2">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                                        {project.category}
                                    </p>
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
