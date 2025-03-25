
import React from 'react';
import { useFadeIn } from '@/lib/animations';
import { Container } from '@/components/ui/container';

const AboutGlobal = () => {
  const { ref: contentRef, isVisible: contentVisible } = useFadeIn(0.1);
  const { ref: imageRef, isVisible: imageVisible } = useFadeIn(0.2);
  
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div
            ref={imageRef}
            className={`order-2 md:order-1 transition-all duration-700 delay-200 transform ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-palette-magenta/10 rounded-2xl z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Global CRO operations" 
                className="w-full h-auto rounded-2xl shadow-lg relative z-10"
              />
            </div>
          </div>
          
          <div
            ref={contentRef}
            className={`order-1 md:order-2 transition-all duration-700 delay-100 transform ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-palette-navy">
              Global Reach, Local Expertise
            </h2>
            
            <p className="text-lg text-palette-navy/80 mb-6 leading-relaxed">
              While our roots are firmly planted in the UK with offices in London, Manchester, 
              Edinburgh, and other major cities, our expertise extends worldwide.
            </p>
            
            <p className="text-lg text-palette-navy/80 mb-6 leading-relaxed">
              We've partnered with brands across Europe, North America, Asia, and Australia, 
              bringing our conversion optimization methodology to global audiences while 
              respecting cultural nuances and regional preferences.
            </p>
            
            <p className="text-lg text-palette-navy/80 mb-8 leading-relaxed">
              This global perspective, combined with our local knowledge, allows us to create 
              conversion strategies that resonate with audiences wherever they may be.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3 rounded-lg bg-palette-purple/5 text-center">
                <p className="font-semibold text-palette-purple">Europe</p>
              </div>
              <div className="p-3 rounded-lg bg-palette-purple/5 text-center">
                <p className="font-semibold text-palette-purple">North America</p>
              </div>
              <div className="p-3 rounded-lg bg-palette-purple/5 text-center">
                <p className="font-semibold text-palette-purple">Asia</p>
              </div>
              <div className="p-3 rounded-lg bg-palette-purple/5 text-center">
                <p className="font-semibold text-palette-purple">Australia</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutGlobal;
