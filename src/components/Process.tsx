
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
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-secondary border border-border">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className={`rounded-xl p-8 transition-all duration-500 transform bg-gradient-to-br from-white to-muted border border-border shadow-md hover:shadow-lg ${
                stepsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="rounded-full bg-palette-yellow/20 p-3 inline-flex mb-5">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <div className="mt-6 flex items-center justify-center">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-palette-purple/10 animate-pulse"></div>
                  <span className="text-xl font-bold text-palette-purple">0{index + 1}</span>
                </div>
              </div>
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
