
import React from 'react';
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';
import { CheckCircle, MousePointer, BarChart3, Users, LineChart, PieChart } from 'lucide-react';

const EdinburghServices = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn(0.1);
  
  const services = [
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Landing Page Optimisation",
      description: "We optimise your landing pages to maximise conversions from Edinburgh traffic sources.",
      features: ["A/B testing", "Heat mapping", "Conversion funnel analysis"]
    },
    {
      icon: <MousePointer className="h-5 w-5" />,
      title: "E-commerce CRO",
      description: "Increase sales and average order value for your Edinburgh e-commerce business.",
      features: ["Product page optimisation", "Checkout flow improvement", "Cross-sell optimisation"]
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "User Experience Research",
      description: "Understand how Edinburgh customers interact with your website to identify friction points.",
      features: ["User testing with Edinburgh consumers", "Session recordings", "Behaviour analytics"]
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Conversion Analytics",
      description: "Advanced analytics setup and tracking specifically for Edinburgh website traffic.",
      features: ["Custom conversion tracking", "Enhanced analytics", "Conversion attribution"]
    },
    {
      icon: <PieChart className="h-5 w-5" />,
      title: "Multi-variant Testing",
      description: "Sophisticated testing frameworks to optimise multiple variables simultaneously.",
      features: ["Statistical analysis", "Segment testing", "Long-term testing programmes"]
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "CRO Audit & Strategy",
      description: "Comprehensive review of your Edinburgh business's digital conversion strategy.",
      features: ["Competitor analysis", "Implementation roadmap", "Conversion opportunity sizing"]
    }
  ];
  
  const { containerRef: servicesRef, visibleItems: servicesVisible } = useStaggeredAnimation(services, 150);

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
            Edinburgh CRO Services
          </span>
          <h2 className="heading-lg mb-6 text-balance">
            Specialised CRO services for Edinburgh businesses
          </h2>
          <p className="body-md text-muted-foreground text-balance px-0">
            Our Edinburgh team delivers tailored conversion rate optimisation services to help local businesses thrive online.
          </p>
        </div>
        
        <div 
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`rounded-xl p-8 bg-white border shadow-md hover:shadow-lg transition-all duration-500 transform ${
                servicesVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${400 + index * 100}ms`,
                borderColor: index % 2 === 0 ? 'rgba(39, 10, 86, 0.3)' : 'rgba(217, 3, 104, 0.3)'
              }}
            >
              <div className={`rounded-full p-2 inline-flex mb-4 ${index % 2 === 0 ? 'bg-palette-purple/10' : 'bg-palette-magenta/10'}`}>
                {React.cloneElement(service.icon, { 
                  className: "h-5 w-5", 
                  style: { color: index % 2 === 0 ? '#270A56' : '#D90368' } 
                })}
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-5 text-sm">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm">
                    <div className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0 rounded-full flex items-center justify-center"
                         style={{ color: index % 2 === 0 ? '#270A56' : '#D90368' }}>
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-palette-purple/10 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-72 h-72 rounded-full bg-palette-magenta/10 filter blur-3xl -z-10"></div>
    </section>
  );
};

export default EdinburghServices;
