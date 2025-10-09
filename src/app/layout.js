import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Use the Inter font, which is excellent for corporate sites
const inter = Inter({ subsets: ['latin'] });

// Metadata (Next.js standard)
export const metadata = {
  title: 'SKLD Corporate Sales - Reliable Procurement Solutions',
  description: 'SKLD Integrated Services: Reliable Procurement for Critical Sectors including Oil & Gas, Healthcare, and Transportation.',
};

/**
 * RootLayout component that wraps all pages.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply Inter font class globally */}
      <body className={inter.className}>
        <div className="">
          {/* Header remains fixed at the top */}
          <Header />
          
          {/* Main content area */}
          <main className="">
            {children}
          </main>
          
          {/* Footer is at the bottom */}
          <Footer />
        </div>
      </body>
    </html>
  );
}