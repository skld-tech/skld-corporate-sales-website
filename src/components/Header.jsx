import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mocking the SKLD logo as an SVG/Text for now
const SkldLogo = () => (
    <div className="">
        <img src='/companyLogo.png' className='h-10' />
    </div>
);

// Main Navigation Links
const navLinks = [
    { title: "About Us", href: "/about" },
    { title: "Our Products", href: "/products" },
    { title: "Our Team", href: "/team" },
    // { title: "Download Catalogue", href: "/catalogue" },
    { title: "Contact Us", href: "/contact" },
];

/**
 * Header component for site-wide navigation and contact info.
 */
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto shadow-md bg-white/95 backdrop-blur-sm">
      {/* Top Contact Bar */}
      <div className="bg-gray-800 text-white text-xs py-2 hidden lg:block">
        <div className=" px-4 sm:px-6 lg:px-8 flex justify-end space-x-6">
          <span className='border-r pr-4'>12 Oguntona Crescent, Gbagada Phase 1, Lagos</span>
          <span className='border-r pr-4'>corporate-sales@skld.ng</span>
          <span>08188337782</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/">
            <img src='/companyLogo.png' className='h-10' />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.title} href={link.href} className="text-gray-700 hover:text-blue-600 transition duration-150 font-medium">
                {link.title}
              </Link>
            ))}
            
          </div>

          <div className="hidden lg:flex items-center">
            {/* Get a Quote CTA Button */}
            <Link href="/quote" className="ml-4 flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              GET A QUOTE
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) - Not implemented, but essential for responsive design */}
          <button className="lg:hidden p-2 text-gray-700 hover:text-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}