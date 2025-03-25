
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import Edinburgh from '@/pages/Edinburgh';
import Glasgow from '@/pages/Glasgow';
import Liverpool from '@/pages/Liverpool';
import Manchester from '@/pages/Manchester';
import Birmingham from '@/pages/Birmingham';
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
