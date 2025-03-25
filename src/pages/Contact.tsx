
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import ContactFAQ from '@/components/ContactFAQ';
import Process from '@/components/Process';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ContactHero />
        <ContactForm />
        <Testimonials />
        <ContactFAQ />
        <Process />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
