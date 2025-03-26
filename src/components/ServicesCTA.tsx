
import React from 'react';
import { useFadeIn } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ChevronRight, BarChart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const ServicesCTA = () => {
  const {
    ref: ctaRef,
    isVisible: ctaVisible
  } = useFadeIn(0.1);
  return <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{
      backgroundColor: '#270A56'
    }}></div>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-palette-magenta/20 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-palette-purple/20 filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto relative z-10 py-[44px] bg-[#160457] rounded-2xl px-8 md:px-6 max-w-[92%] md:max-w-[94%] lg:max-w-[90%]">
        <div ref={ctaRef} className={`max-w-3xl mx-auto text-center transition-all duration-700 delay-300 transform ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6 bg-white">
            <BarChart className="h-8 w-8" style={{
            color: '#270A56'
          }} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-balance">
            Ready to transform your conversion rates?
          </h2>
          
          <p className="text-lg text-white/90 mb-8 text-balance">
            Our team of CRO experts is ready to help you achieve remarkable results. 
            Let's discuss how we can optimize your website for maximum conversions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="flex items-center p-4 bg-white/10 rounded-lg">
              <CheckCircle className="h-5 w-5 text-palette-magenta mr-3 flex-shrink-0" />
              <span className="text-sm text-white">Data-driven approach</span>
            </div>
            <div className="flex items-center p-4 bg-white/10 rounded-lg">
              <CheckCircle className="h-5 w-5 text-palette-magenta mr-3 flex-shrink-0" />
              <span className="text-sm text-white">Proven results</span>
            </div>
            <div className="flex items-center p-4 bg-white/10 rounded-lg">
              <CheckCircle className="h-5 w-5 text-palette-magenta mr-3 flex-shrink-0" />
              <span className="text-sm text-white">Expert team</span>
            </div>
          </div>
          
          <Link to="/contact">
            <Button size="lg" className="rounded-full px-8 py-7 text-base bg-palette-magenta hover:bg-palette-magenta/90">
              Get Your Free CRO Audit
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default ServicesCTA;
