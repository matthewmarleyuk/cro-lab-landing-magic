
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import ContactFAQ from '@/components/ContactFAQ';

const Contact = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Contact - The CRO Lab';
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with The CRO Lab for a free consultation about your conversion rate optimization needs.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ContactHero />
        <ContactForm />
        <Testimonials />
        <Process />
        <ContactFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
