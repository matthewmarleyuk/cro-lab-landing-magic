
import React from 'react';
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';
import { LineChart, Code, BarChart3, Eye, Laptop, Database } from 'lucide-react';

const EdinburghTechStack = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn(0.1);
  
  const tools = [
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Google Analytics",
      description: "Advanced analytics setup customized for Edinburgh business needs."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Hotjar",
      description: "Heat mapping and session recording to understand Edinburgh users."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Optimize",
      description: "A/B testing platform configured for Edinburgh audience segments."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "VWO",
      description: "Visual website optimizer for rapid Edinburgh website testing."
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Optimizely",
      description: "Enterprise-level testing for larger Edinburgh businesses."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "BigQuery",
      description: "Advanced data analysis for Edinburgh e-commerce companies."
    }
  ];
  
  const { containerRef: toolsRef, visibleItems: toolsVisible } = useStaggeredAnimation(tools, 150);

  return (
    <section className="py-16 relative overflow-hidden bg-secondary/5">
      <div className="container px-6 mx-auto">
        <div 
          ref={titleRef} 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-palette-magenta text-white border border-palette-magenta">
            Edinburgh CRO Technology
          </span>
          <h2 className="heading-lg mb-6 text-balance">
            Our Edinburgh tech stack
          </h2>
          <p className="body-md text-muted-foreground text-balance px-0">
            We leverage enterprise-grade technology to optimize Edinburgh websites for maximum conversions.
          </p>
        </div>
        
        <div 
          ref={toolsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {tools.map((tool, index) => (
            <div 
              key={tool.title}
              className={`rounded-xl p-6 bg-white text-center border shadow-sm hover:shadow-md transition-all duration-500 transform ${
                toolsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${400 + index * 70}ms`,
                borderColor: index % 2 === 0 ? 'rgba(39, 10, 86, 0.2)' : 'rgba(217, 3, 104, 0.2)'
              }}
            >
              <div className="rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4"
                style={{ 
                  backgroundColor: index % 2 === 0 ? 'rgba(39, 10, 86, 0.1)' : 'rgba(217, 3, 104, 0.1)',
                  color: index % 2 === 0 ? '#270A56' : '#D90368'
                }}
              >
                {tool.icon}
              </div>
              <h3 className="font-semibold mb-2">{tool.title}</h3>
              <p className="text-xs text-muted-foreground">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-palette-purple/10 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 rounded-full bg-palette-magenta/10 filter blur-3xl -z-10"></div>
    </section>
  );
};

export default EdinburghTechStack;
