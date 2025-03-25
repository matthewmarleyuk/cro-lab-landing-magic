
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import ContactFAQ from '@/components/ContactFAQ';
import Testimonials from '@/components/Testimonials';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactFAQ />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
