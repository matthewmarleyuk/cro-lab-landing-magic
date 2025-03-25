
import React from 'react';
import { useFadeIn } from '@/lib/animations';
import { Container } from '@/components/ui/container';

const ServicesHero = () => {
  const { ref, isVisible } = useFadeIn(0.1);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <Container>
        <div 
          ref={ref} 
          className={`text-center max-w-3xl mx-auto transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-palette-magenta text-white border border-palette-magenta">
            Our Services
          </span>
          <h1 className="heading-lg mb-6">
            Comprehensive <span className="shimmer-text">CRO solutions</span> for ambitious businesses
          </h1>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            From conversion audits to personalized optimization strategies, we offer end-to-end services 
            designed to transform your website's performance and maximize your ROI.
          </p>
        </div>
      </Container>
      
      {/* Background elements */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-palette-yellow/10 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-palette-purple/10 filter blur-3xl -z-10"></div>
    </section>
  );
};

export default ServicesHero;
