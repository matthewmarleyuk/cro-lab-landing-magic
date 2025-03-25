
import React from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import LiverpoolServices from '@/components/LiverpoolServices';
import LiverpoolAbout from '@/components/LiverpoolAbout';
import LiverpoolTestimonials from '@/components/LiverpoolTestimonials';
import LiverpoolCTA from '@/components/LiverpoolCTA';

const Liverpool = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <LiverpoolAbout />
        <LiverpoolServices />
        <LiverpoolTestimonials />
        <LiverpoolCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Liverpool;
