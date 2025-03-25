
import React from 'react';
import { useFadeIn } from '@/lib/animations';

const EdinburghClients = () => {
  const { ref: clientsRef, isVisible: clientsVisible } = useFadeIn(0.1);

  // Static list of Edinburgh clients
  const clients = [
    {
      name: "CodeBase Edinburgh",
      logo: "/lovable-uploads/a526d801-1e56-48c1-8d5e-4aae2709f5b6.png"
    },
    {
      name: "Edinburgh University",
      logo: "/lovable-uploads/16dde16b-05cc-4b2a-beef-ce09a18b3e32.png"
    },
    {
      name: "Edinburgh Chamber of Commerce",
      logo: "/lovable-uploads/9ee7aba2-861e-4c52-a572-b18e7b0b9ffa.png"
    },
    {
      name: "Princes Street Retail",
      logo: "/lovable-uploads/e4fe8ab7-1e91-442f-a993-7f443aba2a7a.png"
    },
    {
      name: "Edinburgh Tourism Group",
      logo: "/lovable-uploads/a58f1534-749d-48c5-b82b-e82f8b9cd0ae.png"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-palette-magenta text-white border border-palette-magenta">
            Trusted By Edinburgh Businesses
          </span>
          <h2 className="heading-lg mb-6">
            Edinburgh companies we've helped optimize
          </h2>
          <p className="body-md text-muted-foreground">
            We've worked with organizations across Edinburgh's diverse business landscape.
          </p>
        </div>
        
        <div 
          ref={clientsRef}
          className={`grid grid-cols-2 md:grid-cols-5 gap-8 items-center transition-all duration-700 delay-300 transform ${
            clientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {clients.map((client) => (
            <div 
              key={client.name} 
              className="flex items-center justify-center p-6 rounded-xl bg-white shadow-sm border hover:shadow-md transition-all duration-300"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-palette-yellow/5 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 rounded-full bg-palette-purple/5 filter blur-3xl -z-10"></div>
    </section>
  );
};

export default EdinburghClients;
