
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Hero } from '@/components/ui/animated-hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Tools from '@/components/Tools';
import Results from '@/components/Results';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = 'CRO Agency - The CRO Lab';
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'The CRO Lab helps businesses optimize their websites to convert more visitors into customers through scientific testing and data analysis.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="-mt-16">
          <About />
        </div>
        <Services />
        <Testimonials />
        <Process />
        <Tools />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
