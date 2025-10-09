import React from 'react';
import Link from 'next/link';

/**
 * Hero component for the main banner, inspired by image_26380d.jpg
 */
export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto h-screen flex items-center justify-start text-white pt-16">

      {/* Content Container */}
      <div className="">
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg font-semibold uppercase tracking-wider text-blue-400 mb-2">
          TRUST AND CLIENT FOCUS
        </p>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
          Quality <span className="text-blue-500">IT</span> and office <br />
          supplies
        </h1>

        {/* Description */}
        <p className="max-w-lg text-lg text-gray-300 mb-10">
          Procurement support and supply solutions tailored to your sector—from Oil & Gas to Healthcare.
        </p>

        {/* Call to Action Button */}
        <Link href="/contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 uppercase tracking-wider">
           Download Catalogue
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </Link>
      </div>

      {/* WhatsApp Floating Icon (Often used in screenshots, adding as a subtle element) */}
      <a href="https://wa.me/2348188337782" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 left-6 z-50 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.039 2C6.549 2 2.128 6.545 2.128 12.015c0 1.621.398 3.208 1.157 4.673l-1.189 4.359 4.546-1.186c1.378.736 2.924 1.134 4.497 1.134 5.49 0 9.916-4.545 9.916-10.015S17.529 2 12.039 2zm4.721 14.502c-.222.404-.712.553-1.116.331-.634-.349-1.944-1.205-2.257-1.314-.23-.075-.403-.06-.576.15-.173.226-.667.887-.803 1.059-.136.173-.272.193-.502.062-.23-.131-1.018-.375-1.933-1.184-1.116-.948-1.859-2.203-2.071-2.585-.213-.383-.021-.588.188-.797.182-.182.403-.433.585-.644.182-.212.24-.396.366-.626.126-.23.063-.435-.034-.645-.097-.212-.871-2.091-1.192-2.871-.321-.779-.64-.672-.872-.672-.23 0-.5.062-.767.062-.268 0-1.282.383-1.748.887-.465.503-1.026 1.487-1.026 3.635 0 2.147 1.055 4.228 1.503 4.795.448.567 2.083 3.321 4.981 4.548 2.898 1.226 2.898.818 3.428.769.53-.049 1.733-.709 1.984-1.478.25-0.769.25-1.284.172-1.477-.078-.194-.287-.308-.507-.423z"/>
        </svg>
      </a>
    </section>
  );
}
