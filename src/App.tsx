
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import Edinburgh from '@/pages/Edinburgh';
import Glasgow from '@/pages/Glasgow';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/edinburgh" element={<Edinburgh />} />
        <Route path="/glasgow" element={<Glasgow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
