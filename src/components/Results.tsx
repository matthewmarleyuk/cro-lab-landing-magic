
import React from 'react';
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Results = () => {
  const {
    ref: titleRef,
    isVisible: titleVisible
  } = useFadeIn(0.1);
  const caseStudies = [{
    industry: 'E-commerce',
    title: 'How we increased cart conversions by 37%',
    metrics: [{
      label: 'Conversion Rate',
      value: '+37%'
    }, {
      label: 'Revenue Lift',
      value: '$243K'
    }],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    bgColor: '#270A56' // Set to #270A56
  }, {
    industry: 'SaaS',
    title: 'Optimizing sign-up flow for 49% more trials',
    metrics: [{
      label: 'Trial Sign-ups',
      value: '+49%'
    }, {
      label: 'Customer Acquisition Cost',
      value: '-23%'
    }],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    bgColor: '#270A56' // Set to #270A56
  }, {
    industry: 'Financial Services',
    title: 'Lead form redesign delivers 64% conversion lift',
    metrics: [{
      label: 'Form Completion',
      value: '+64%'
    }, {
      label: 'Lead Quality',
      value: '+27%'
    }],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    bgColor: '#270A56' // Set to #270A56
  }];
  const {
    containerRef: casesRef,
    visibleItems: casesVisible
  } = useStaggeredAnimation(caseStudies, 150);
  return <section id="results" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div ref={titleRef} className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 mb-6 font-medium rounded-full bg-palette-magenta text-white border border-palette-magenta">
            Results
          </span>
          <h2 className="heading-lg mb-6">
            Real-world conversion improvements our clients have achieved
          </h2>
          <p className="body-md text-muted-foreground">
            We've helped businesses across various industries optimize their websites and dramatically increase their conversion rates.
          </p>
        </div>
        
        <div ref={casesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => <div 
              key={study.title} 
              className={`text-white rounded-xl overflow-hidden transition-all duration-500 transform hover:shadow-lg hover:-translate-y-1 ${casesVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
              style={{
                transitionDelay: `${300 + index * 150}ms`,
                backgroundColor: study.bgColor
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                    {study.industry}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-white">{study.title}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.metrics.map(metric => <div key={metric.label} className="bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold mb-1 text-white">{metric.value}</div>
                      <div className="text-xs text-white/80">{metric.label}</div>
                    </div>)}
                </div>
                
                <Button variant="ghost" className="p-0 h-auto font-medium text-white hover:bg-white/10 hover:text-white" size="sm">
                  View case study
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>)}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="rounded-full bg-palette-magenta hover:bg-palette-magenta/90 text-white">
            View All Case Studies
            <ArrowUpRight className="ml-1 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Enhanced background elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-palette-purple/20 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-palette-magenta/20 filter blur-3xl -z-10"></div>
      
      {/* New blurred elements */}
      <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-palette-lilac/20 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-1/3 w-80 h-80 rounded-full bg-palette-yellow/20 filter blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/5 w-48 h-48 rounded-full bg-palette-purple/15 filter blur-2xl -z-10"></div>
      <div className="absolute bottom-1/3 right-10 w-56 h-56 rounded-full bg-palette-lilac/20 filter blur-2xl -z-10"></div>
    </section>;
};
export default Results;
