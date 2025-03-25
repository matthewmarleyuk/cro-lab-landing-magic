import React from 'react';
import { useFadeIn } from '@/lib/animations';
const EdinburghClients = () => {
  const {
    ref: clientsRef,
    isVisible: clientsVisible
  } = useFadeIn(0.1);

  // Static list of Edinburgh clients
  const clients = [{
    name: "CodeBase Edinburgh",
    logo: "/lovable-uploads/a526d801-1e56-48c1-8d5e-4aae2709f5b6.png"
  }, {
    name: "Edinburgh University",
    logo: "/lovable-uploads/16dde16b-05cc-4b2a-beef-ce09a18b3e32.png"
  }, {
    name: "Edinburgh Chamber of Commerce",
    logo: "/lovable-uploads/9ee7aba2-861e-4c52-a572-b18e7b0b9ffa.png"
  }, {
    name: "Princes Street Retail",
    logo: "/lovable-uploads/e4fe8ab7-1e91-442f-a993-7f443aba2a7a.png"
  }, {
    name: "Edinburgh Tourism Group",
    logo: "/lovable-uploads/a58f1534-749d-48c5-b82b-e82f8b9cd0ae.png"
  }];
  return;
};
export default EdinburghClients;