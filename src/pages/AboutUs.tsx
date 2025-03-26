
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import AboutExperience from '@/components/AboutExperience';
import AboutIndustries from '@/components/AboutIndustries';
import AboutGlobal from '@/components/AboutGlobal';
import Testimonials from '@/components/Testimonials';
import ServicesCTA from '@/components/ServicesCTA';

const AboutUs = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About Us - The CRO Lab';
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about The CRO Lab, our mission, values, and experienced team of conversion rate optimization specialists.');
    }
  }, []);

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
