
import React from 'react';
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';
import { 
  BarChart, 
  LineChart,
  Activity,
  Eye
} from 'lucide-react';

const Tools = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn(0.1);
  
  const tools = [
    {
      icon: <BarChart className="h-10 w-10" />,
      name: 'VWO',
      description: 'A/B testing and experimentation platform'
    },
    {
      icon: <Eye className="h-10 w-10" />,
      name: 'Hotjar',
      description: 'Heatmaps, recordings, and user feedback'
    },
    {
      icon: <Activity className="h-10 w-10" />,
      name: 'Full Story',
      description: 'Session replay and user experience analytics'
    },
    {
      icon: <LineChart className="h-10 w-10" />,
      name: 'Google Analytics',
      description: 'Web analytics and conversion tracking'
    },
  ];
  
  const { containerRef: toolsRef, visibleItems: toolsVisible } = useStaggeredAnimation(tools, 100);

  return (
    <section id="tools" className="py-16 relative overflow-hidden bg-white">
      <div className="container px-6 mx-auto">
        <div 
          ref={titleRef} 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-secondary border border-border">
            Our Tech Stack
          </span>
          <h2 className="heading-lg mb-6">
            World-class CRO tools for optimal results
          </h2>
          <p className="body-md text-muted-foreground">
            We leverage industry-leading tools and technologies to deliver data-driven optimization strategies.
          </p>
        </div>
        
        <div 
          ref={toolsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {tools.map((tool, index) => (
            <div 
              key={tool.name}
              className={`glass-card rounded-xl p-8 transition-all duration-500 transform flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 border border-border ${
                toolsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="rounded-full bg-palette-cream p-4 inline-flex mb-5">
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-palette-navy">{tool.name}</h3>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-palette-purple/5 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-palette-magenta/5 filter blur-3xl -z-10"></div>
    </section>
  );
};

export default Tools;
