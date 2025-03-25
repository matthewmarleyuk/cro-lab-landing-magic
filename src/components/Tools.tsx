import React from 'react';
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';
import { 
  LineChart,
  Activity,
  Eye
} from 'lucide-react';

const Tools = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn(0.1);
  
  const tools = [
    {
      icon: <img src="/lovable-uploads/16dde16b-05cc-4b2a-beef-ce09a18b3e32.png" alt="VWO" className="h-10 w-10 object-contain" />,
      name: 'VWO',
      description: 'A/B testing and experimentation platform'
    },
    {
      icon: <img src="/lovable-uploads/9ee7aba2-861e-4c52-a572-b18e7b0b9ffa.png" alt="Hotjar" className="h-10 w-10 object-contain" />,
      name: 'Hotjar',
      description: 'Heatmaps, recordings, and user feedback'
    },
    {
      icon: <img src="/lovable-uploads/e4fe8ab7-1e91-442f-a993-7f443aba2a7a.png" alt="Full Story" className="h-10 w-10 object-contain" />,
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
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-palette-magenta text-white border border-palette-magenta">
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
              className={`rounded-xl transition-all duration-500 transform border hover:shadow-lg hover:-translate-y-1 ${
                toolsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${300 + index * 100}ms`,
                backgroundColor: index % 2 === 0 ? '#541388' : '#D90368',
                borderColor: index % 2 === 0 ? 'rgba(84, 19, 136, 0.3)' : 'rgba(217, 3, 104, 0.3)'
              }}
            >
              <div className="flex flex-col h-full">
                <div className="bg-white rounded-t-xl p-6 flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center">
                    {tool.icon}
                  </div>
                </div>
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                  <p className="text-sm text-white/90">{tool.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements - Enhanced with more blurred elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-palette-purple/5 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-palette-magenta/5 filter blur-3xl -z-10"></div>
      
      {/* New blurred elements */}
      <div className="absolute top-10 left-1/4 w-40 h-40 rounded-full bg-palette-lilac/10 filter blur-2xl -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-56 h-56 rounded-full bg-palette-yellow/5 filter blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-palette-purple/3 filter blur-3xl -z-10"></div>
    </section>
  );
};

export default Tools;
