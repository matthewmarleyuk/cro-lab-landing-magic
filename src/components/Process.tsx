
import React from 'react';
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';
import { SearchCheck, LineChart, Beaker, Target } from 'lucide-react';

const Process = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn(0.1);
  
  const steps = [
    {
      icon: <SearchCheck className="h-6 w-6" />,
      title: "Research & Discovery",
      description: "We analyze your data, identify user friction points, and uncover opportunities for optimization."
    },
    {
      icon: <Beaker className="h-6 w-6" />,
      title: "Hypothesis & Testing",
      description: "We develop evidence-based hypotheses and create experiments to validate our conversion theories."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Analysis & Insights",
      description: "We analyze test results using statistical methods to extract actionable insights for your business."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Implementation & Iteration",
      description: "We implement winning variations and continuously iterate to drive ongoing conversion improvements."
    }
  ];
  
  const { containerRef: stepsRef, visibleItems: stepsVisible } = useStaggeredAnimation(steps, 150);

  return (
    <section id="process" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div 
          ref={titleRef} 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-palette-magenta text-white border border-palette-magenta">
            Our Process
          </span>
          <h2 className="heading-lg mb-6">
            How we optimize your conversion rates
          </h2>
          <p className="body-md text-muted-foreground">
            Our proven methodology combines data analysis, experimentation, and implementation to drive meaningful results.
          </p>
        </div>
        
        <div 
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connecting lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[25%] right-[25%] h-0.5 bg-border -translate-y-1/2 z-0"></div>
          
          {/* Connecting lines for tablet */}
          <div className="hidden md:block lg:hidden absolute left-1/2 top-[25%] bottom-[25%] w-0.5 bg-border -translate-x-1/2 z-0"></div>
          
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
              <div className="rounded-full bg-white p-3 inline-flex mb-5">
                {React.cloneElement(step.icon, { className: "h-6 w-6 text-palette-purple" })}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-white/90">{step.description}</p>
              
              {/* Connector dots visible on desktop */}
              {index > 0 && (
                <div className="absolute w-3 h-3 rounded-full bg-palette-purple lg:block hidden -left-1.5 top-1/2 -translate-y-1/2 border border-white"></div>
              )}
              
              {index < steps.length - 1 && (
                <div className="absolute w-3 h-3 rounded-full bg-palette-purple lg:block hidden -right-1.5 top-1/2 -translate-y-1/2 border border-white"></div>
              )}
              
              {/* Vertical connectors for tablet */}
              {index > 0 && (
                <div className="absolute h-3 w-3 rounded-full bg-palette-purple md:block lg:hidden hidden top-0 left-1/2 -translate-y-1.5 -translate-x-1/2 border border-white"></div>
              )}
              
              {index < steps.length - 1 && (
                <div className="absolute h-3 w-3 rounded-full bg-palette-purple md:block lg:hidden hidden bottom-0 left-1/2 translate-y-1.5 -translate-x-1/2 border border-white"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-palette-purple/10 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-accent/10 filter blur-3xl -z-10"></div>
    </section>
  );
};

export default Process;
