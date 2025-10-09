import React from 'react';
import Link from 'next/link';

const QuickLinks = [
    { title: 'About Us', href: '/about' },
    { title: 'Our Products', href: '/products' },
    { title: 'Our Team', href: '/team' },
    { title: 'Contact Us', href: '/contact' },
];

const ProductCategories = [
    'Office & IT Supplies',
    'Workwear & PPE',
    'Branded Merchandise',
    'Hotline: 08188337782', // Placeholder for a dedicated link
];

/**
 * Footer component with company info, quick links, and a newsletter sign-up area.
 */
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-10">
                    
                    {/* Column 1: Company Description */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <div className="flex items-center space-x-2 text-2xl font-extrabold text-blue-400">
                            SKLD Integrated Services
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            SKLD Integrated Services is the leading trading and manufacturing company in Nigeria. With over 24 years of experience in delivering exceptional products and services.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {QuickLinks.map((link) => (
                                <li key={link.title}>
                                    <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition duration-150 text-sm">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Product & Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Product Categories</h3>
                        <ul className="space-y-2">
                            {ProductCategories.map((item) => (
                                <li key={item} className="text-gray-400 text-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>Copyright &copy; 2024 SKLD Integrated Services. All Rights Reserved.</p>
                    <div className="space-x-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-blue-400">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}