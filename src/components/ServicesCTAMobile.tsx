
import React from 'react';
import { useFadeIn } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ChevronRight, BarChart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesCTAMobile = () => {
  const { ref: ctaRef, isVisible: ctaVisible } = useFadeIn(0.1);

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ backgroundColor: '#270A56' }}></div>
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-palette-magenta/20 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-palette-purple/20 filter blur-3xl -z-10"></div>
      
      <div className="mx-auto max-w-[90%] sm:max-w-[85%] relative z-10 py-8 bg-[#160457] rounded-xl px-4">
        <div 
          ref={ctaRef} 
          className={`mx-auto text-center transition-all duration-700 delay-300 transform ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4 bg-white">
            <BarChart className="h-6 w-6" style={{ color: '#270A56' }} />
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-white text-balance">
            Ready to transform your conversion rates?
          </h2>
          
          <p className="text-base text-white/90 mb-5 text-balance">
            Our CRO experts can help you achieve remarkable results.
          </p>
          
          <div className="grid grid-cols-1 gap-2 mb-6">
            <div className="flex items-center p-3 bg-white/10 rounded-lg">
              <CheckCircle className="h-4 w-4 text-palette-magenta mr-2 flex-shrink-0" />
              <span className="text-sm text-white">Data-driven approach</span>
            </div>
            <div className="flex items-center p-3 bg-white/10 rounded-lg">
              <CheckCircle className="h-4 w-4 text-palette-magenta mr-2 flex-shrink-0" />
              <span className="text-sm text-white">Proven results</span>
            </div>
            <div className="flex items-center p-3 bg-white/10 rounded-lg">
              <CheckCircle className="h-4 w-4 text-palette-magenta mr-2 flex-shrink-0" />
              <span className="text-sm text-white">Expert team</span>
            </div>
          </div>
          
          <Link to="/contact" className="block">
            <Button size="default" className="w-full rounded-full px-6 py-5 text-sm bg-palette-magenta hover:bg-palette-magenta/90">
              Get Your Free CRO Audit
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTAMobile;
