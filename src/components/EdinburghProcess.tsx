
import React from 'react';
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';

const EdinburghProcess = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn(0.1);
  
  const steps = [
    {
      number: 1,
      title: "Discovery",
      description: "We analyse your Edinburgh audience data, identify local user behaviour patterns, and uncover conversion opportunities."
    },
    {
      number: 2,
      title: "Strategy",
      description: "We develop a tailored CRO strategy focused on Edinburgh market specifics and your business goals."
    },
    {
      number: 3,
      title: "Testing",
      description: "We implement rigorous A/B testing focused on your Edinburgh audience segments and traffic sources."
    },
    {
      number: 4,
      title: "Results",
      description: "We deliver measurable conversion improvements tailored to your Edinburgh customer base."
    }
  ];
  
  const { containerRef: stepsRef, visibleItems: stepsVisible } = useStaggeredAnimation(steps, 150);

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div 
          ref={titleRef} 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-palette-magenta text-white border border-palette-magenta">
            Our Edinburgh Process
          </span>
          <h2 className="heading-lg mb-6 text-balance">
            How we optimise Edinburgh websites
          </h2>
          <p className="body-md text-muted-foreground text-balance px-0">
            Our Edinburgh-focused methodology delivers conversion improvements through a proven four-step process.
          </p>
        </div>
        
        <div 
          ref={stepsRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className={`rounded-xl p-8 transition-all duration-500 transform text-white border shadow-md hover:shadow-lg relative z-10 ${
                stepsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${400 + index * 100}ms`,
                backgroundColor: index % 2 === 0 ? '#270A56' : '#D90368',
                borderColor: index % 2 === 0 ? 'rgba(39, 10, 86, 0.3)' : 'rgba(217, 3, 104, 0.3)'
              }}
            >
              <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center mb-5">
                <span 
                  className="font-bold text-xl" 
                  style={{
                    color: index % 2 === 0 ? '#270A56' : '#D90368'
                  }}
                >
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-balance">{step.title}</h3>
              <p className="text-white/90 text-balance">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-palette-purple/10 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-accent/10 filter blur-3xl -z-10"></div>
    </section>
  );
};

export default EdinburghProcess;
