
import React from 'react';
import { useFadeIn } from '@/lib/animations';
import { Container } from '@/components/ui/container';

const AboutHero = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn(0.1);
  const { ref: subtitleRef, isVisible: subtitleVisible } = useFadeIn(0.2);
  
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#F8F4F9] -z-10" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-palette-lilac/20 filter blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-palette-purple/10 filter blur-3xl -z-10" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            ref={titleRef}
            className={`transition-all duration-700 delay-100 transform ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-palette-navy">
              About <span className="shimmer-text">The CRO Lab</span>
            </h1>
          </div>
          
          <div 
            ref={subtitleRef}
            className={`transition-all duration-700 delay-200 transform ${
              subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-xl md:text-2xl text-palette-navy/80 mb-8 leading-relaxed max-w-3xl mx-auto text-balance">
              For 15 years, we've been optimizing conversions for brands that want to turn data into growth.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
