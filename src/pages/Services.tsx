
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import ServicesShowcase from '@/components/ServicesShowcase';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import ServicesCTA from '@/components/ServicesCTA';
import ServicesCTAMobile from '@/components/ServicesCTAMobile';
import ServicesFAQ from '@/components/ServicesFAQ';
import { useIsMobile } from '@/hooks/use-mobile';

const Services = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Set page title
    document.title = 'Services - The CRO Lab';
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our conversion rate optimization services including A/B testing, user experience research, analytics, and more.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesShowcase />
        <Testimonials />
        <Process />
        {isMobile ? <ServicesCTAMobile /> : <ServicesCTA />}
        <ServicesFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
