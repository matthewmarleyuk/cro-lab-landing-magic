
import React from 'react';
import { useFadeIn } from '@/lib/animations';
import { Container } from '@/components/ui/container';

const AboutHero = () => {
  const { ref, isVisible } = useFadeIn(0.1);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <Container>
        <div 
          ref={ref} 
          className={`text-center max-w-3xl mx-auto transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-palette-magenta text-white border border-palette-magenta">
            About Us
          </span>
          <h1 className="heading-lg mb-6">
            Meet the <span className="shimmer-text">CRO experts</span> behind your success
          </h1>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            We're a team of passionate conversion specialists with a proven track record of 
            transforming websites into high-performing conversion machines.
          </p>
        </div>
      </Container>
      
      {/* Background elements */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-palette-yellow/10 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-palette-purple/10 filter blur-3xl -z-10"></div>
    </section>
  );
};

export default AboutHero;
