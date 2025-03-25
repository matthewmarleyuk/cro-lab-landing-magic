
import React from 'react';
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';
import { MoveRight, Activity, Lightbulb, Beaker, PanelRight, MousePointer, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn(0.1);
  
  const services = [
    {
      icon: <Activity className="h-6 w-6" />,
      title: 'CRO Audit',
      description: 'Comprehensive analysis of your website to identify conversion barriers and opportunities.',
      items: ['User journey mapping', 'Conversion funnel analysis', 'Opportunity prioritization']
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'A/B Testing',
      description: 'Data-driven experimentation to validate hypotheses and improve conversions.',
      items: ['Hypothesis development', 'Test implementation', 'Results analysis & reporting']
    },
    {
      icon: <Beaker className="h-6 w-6" />,
      title: 'UX Research',
      description: 'In-depth user research to understand behaviors, motivations and pain points.',
      items: ['User interviews', 'Usability testing', 'Heatmap & session recording']
    },
    {
      icon: <PanelRight className="h-6 w-6" />,
      title: 'Landing Page Optimization',
      description: 'Targeted improvements for your highest-value pages to maximize conversions.',
      items: ['Value proposition clarity', 'Persuasive content creation', 'Form optimization']
    },
    {
      icon: <MousePointer className="h-6 w-6" />,
      title: 'Website Personalization',
      description: 'Tailored user experiences based on visitor segments and behaviors.',
      items: ['Audience segmentation', 'Dynamic content', 'Behavioral targeting']
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Conversion Analytics',
      description: 'Advanced tracking and analysis to measure performance and inform strategy.',
      items: ['KPI development', 'Custom dashboard creation', 'Regular performance reviews']
    }
  ];
  
  const { containerRef: servicesRef, visibleItems: servicesVisible } = useStaggeredAnimation(services, 100);

  return (
    <section id="services" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div 
          ref={titleRef} 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-white border border-border">
            Our Services
          </span>
          <h2 className="heading-lg mb-6">
            Comprehensive CRO solutions for measurable growth
          </h2>
          <p className="body-md text-muted-foreground">
            We offer end-to-end optimization services designed to systematically improve your conversion rates and drive business growth.
          </p>
        </div>
        
        <div 
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`rounded-xl p-6 transition-all duration-500 transform bg-[#b00250] text-white border border-[#b00250]/30 shadow-md hover:shadow-lg hover:-translate-y-1 ${
                servicesVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="rounded-full bg-white/20 p-3 inline-flex mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-white/90 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-white mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-white/30">
                <Button variant="ghost" className="p-0 h-auto font-medium text-white hover:bg-white/10 hover:text-white" size="sm">
                  Learn more
                  <MoveRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-palette-purple/10 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-palette-magenta/10 filter blur-3xl -z-10"></div>
    </section>
  );
};

export default Services;
