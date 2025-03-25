
import React from 'react';
import { useFadeIn } from '@/lib/animations';
import { Beaker, LineChart, SearchCheck, CircleDollarSign } from 'lucide-react';

const ManchesterAbout = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn(0.1);
  const { ref: contentRef, isVisible: contentVisible } = useFadeIn(0.2);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div 
              ref={titleRef} 
              className={`transition-all duration-700 delay-200 transform ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-palette-magenta text-white border border-palette-magenta">
                About Our Manchester Agency
              </span>
              <h2 className="heading-lg mb-6">
                Manchester's dedicated CRO specialists
              </h2>
            </div>
            
            <div 
              ref={contentRef} 
              className={`transition-all duration-700 delay-400 transform ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="body-md mb-6 text-muted-foreground">
                Based in the heart of Manchester, The CRO Lab serves the city's thriving business community with specialized conversion rate optimization services. We understand the unique challenges faced by Manchester businesses in the digital landscape.
              </p>
              <p className="body-md text-muted-foreground">
                Our Manchester team combines local market knowledge with global best practices in CRO to deliver tailored solutions that drive measurable results for businesses across all sectors – from Manchester's tech startups to established tourism enterprises.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 text-white border shadow-md hover:shadow-lg transition-all duration-300" style={{ backgroundColor: '#D90368' }}>
              <div className="rounded-full bg-white p-2 inline-flex mb-4">
                <Beaker className="h-5 w-5" style={{ color: '#D90368' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Local Expertise</h3>
              <p className="text-sm text-white/90">Our Manchester-based team understands the local market dynamics and customer behaviors.</p>
            </div>
            
            <div className="rounded-xl p-6 text-white border shadow-md hover:shadow-lg transition-all duration-300" style={{ backgroundColor: '#270A56' }}>
              <div className="rounded-full bg-white p-2 inline-flex mb-4">
                <LineChart className="h-5 w-5" style={{ color: '#270A56' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Manchester Focus</h3>
              <p className="text-sm text-white/90">Specialized strategies that work for Manchester's unique business landscape.</p>
            </div>
            
            <div className="rounded-xl p-6 text-white border shadow-md hover:shadow-lg transition-all duration-300" style={{ backgroundColor: '#270A56' }}>
              <div className="rounded-full bg-white p-2 inline-flex mb-4">
                <SearchCheck className="h-5 w-5" style={{ color: '#270A56' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">City Connections</h3>
              <p className="text-sm text-white/90">Strong relationships with Manchester's business community and tech ecosystem.</p>
            </div>
            
            <div className="rounded-xl p-6 text-white border shadow-md hover:shadow-lg transition-all duration-300" style={{ backgroundColor: '#D90368' }}>
              <div className="rounded-full bg-white p-2 inline-flex mb-4">
                <CircleDollarSign className="h-5 w-5" style={{ color: '#D90368' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Manchester ROI</h3>
              <p className="text-sm text-white/90">Proven track record of delivering ROI for Manchester-based businesses.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-palette-purple/10 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-palette-magenta/10 filter blur-3xl -z-10"></div>
    </section>
  );
};

export default ManchesterAbout;
