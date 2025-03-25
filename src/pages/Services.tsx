
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import ServicesShowcase from '@/components/ServicesShowcase';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import ServicesCTA from '@/components/ServicesCTA';
import ServicesFAQ from '@/components/ServicesFAQ';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesShowcase />
        <Testimonials />
        <Process />
        <ServicesFAQ />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
