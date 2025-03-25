
import React from 'react';
import { useFadeIn } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ChevronRight, BarChart, CheckCircle } from 'lucide-react';

const LiverpoolCTA = () => {
  const { ref: ctaRef, isVisible: ctaVisible } = useFadeIn(0.1);

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ backgroundColor: '#270A56' }}></div>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-palette-magenta/20 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-palette-purple/20 filter blur-3xl -z-10"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div 
          ref={ctaRef}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 delay-300 transform ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6 bg-white">
            <BarChart className="h-8 w-8" style={{ color: '#270A56' }} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-balance">
            Ready to optimize your Liverpool website?
          </h2>
          
          <p className="text-lg text-white/90 mb-8 text-balance">
            Let our Liverpool CRO specialists help you convert more visitors into customers with data-driven optimization strategies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="flex items-center p-4 bg-white/10 rounded-lg">
              <CheckCircle className="h-5 w-5 text-palette-magenta mr-3 flex-shrink-0" />
              <span className="text-sm text-white">Liverpool-focused strategy</span>
            </div>
            <div className="flex items-center p-4 bg-white/10 rounded-lg">
              <CheckCircle className="h-5 w-5 text-palette-magenta mr-3 flex-shrink-0" />
              <span className="text-sm text-white">Proven local results</span>
            </div>
            <div className="flex items-center p-4 bg-white/10 rounded-lg">
              <CheckCircle className="h-5 w-5 text-palette-magenta mr-3 flex-shrink-0" />
              <span className="text-sm text-white">Liverpool team</span>
            </div>
          </div>
          
          <Button size="lg" className="rounded-full px-8 py-7 text-base bg-palette-magenta hover:bg-palette-magenta/90">
            Get Your Liverpool CRO Audit
            <ChevronRight className="ml-1 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiverpoolCTA;
