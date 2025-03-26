
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import Edinburgh from '@/pages/Edinburgh';
import Glasgow from '@/pages/Glasgow';
import Liverpool from '@/pages/Liverpool';
import Manchester from '@/pages/Manchester';
import Birmingham from '@/pages/Birmingham';
import London from '@/pages/London';
import Contact from '@/pages/Contact';
import Services from '@/pages/Services';
import AboutUs from '@/pages/AboutUs';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import CookiePolicy from '@/pages/CookiePolicy';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/edinburgh" element={<Edinburgh />} />
      <Route path="/glasgow" element={<Glasgow />} />
      <Route path="/liverpool" element={<Liverpool />} />
      <Route path="/manchester" element={<Manchester />} />
      <Route path="/birmingham" element={<Birmingham />} />
      <Route path="/london" element={<London />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
