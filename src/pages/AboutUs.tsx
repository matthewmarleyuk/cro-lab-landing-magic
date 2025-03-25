
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import AboutExperience from '@/components/AboutExperience';
import AboutIndustries from '@/components/AboutIndustries';
import AboutGlobal from '@/components/AboutGlobal';
import Testimonials from '@/components/Testimonials';
import ServicesCTA from '@/components/ServicesCTA';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="bg-background">
        <AboutHero />
        <AboutExperience />
        <AboutIndustries />
        <AboutGlobal />
        <Testimonials />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
