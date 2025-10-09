import AboutAndFeatures from '@/components/sections/AboutAndFeatures';
import ClientsAndProjects from '@/components/sections/ClientsAndProjects';
import Hero from '@/components/sections/Hero';
import IndustriesCarousel from '@/components/sections/IndustriesCarousel';
import StatsCounter from '@/components/sections/StatsCounter';
// Future imports for sections based on the images:
// import StatsCounter from '@/components/sections/StatsCounter';
// import AboutAndFeatures from '@/components/sections/AboutAndFeatures';
// import IndustriesCarousel from '@/components/sections/IndustriesCarousel';
// import ClientsAndProjects from '@/components/sections/ClientsAndProjects';

/**
 * The main homepage component for SKLD Corporate Sales.
 */
export default function Home() {
  return (
    <div className="">
      
      {/* 1. Hero Section (Image 26380d.jpg) */}
      <Hero />
      <StatsCounter />
      <AboutAndFeatures />
      <IndustriesCarousel />
      <ClientsAndProjects />

      

    </div>
  );
}