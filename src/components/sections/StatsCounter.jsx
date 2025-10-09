import React from 'react';

// Data for the three main statistics
const statsData = [
    { value: '450', unit: '+', label: 'Products supplied' },
    { value: '645', unit: '+', label: 'happy clients from top organizations' },
    { value: '10', unit: '+', label: 'offices in 6 cities in Nigeria' },
];

/**
 * StatsCounter component displaying key company metrics.
 * Inspired by image_263908.jpg, featuring a prominent central metric.
 */
export default function StatsCounter() {
  return (
    // Outer section wrapper with a white background as requested
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Background Image Container */}
        <div 
          className="relative rounded-xl overflow-hidden shadow-2xl"
        //   style={{
        //     // Placeholder for a professional, handshake/city background
        //     backgroundImage: "url('https://placehold.co/1920x450/111827/ffffff?text=Professional+Corporate+Background')",
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //   }}
        >
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-gray-900"></div>
          
          {/* Stats Grid - Positioned relative to overlay */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 py-16 text-center">
            {statsData.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`p-6 sm:p-8 rounded-xl transition-all duration-500
                ${
                    // Applying the prominent white background to the central metric (index 1)
                    index === 1 
                        ? 'bg-white text-gray-900 shadow-2xl transform scale-105 mx-4 md:mx-0' 
                        : 'text-white/90 bg-transparent' // Other stats are subtle
                }`}
              >
                <div className={`text-6xl sm:text-7xl font-extrabold ${index === 1 ? 'text-purple-600' : 'text-blue-400'}`}>
                  {stat.value}<span className="text-4xl align-top ml-1">{stat.unit}</span>
                </div>
                <p className={`mt-3 text-lg font-medium tracking-wide ${index === 1 ? 'text-gray-600' : 'text-gray-300'}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
        
        <p className="mt-8 text-center text-gray-500 italic text-sm">
            We understand the importance of getting the right procurement partner to foster a well-equipped and optimal work environment.
        </p>

      </div>
    </section>
  );
}
