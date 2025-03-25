
import React from 'react';
import { Beaker, LineChart, SearchCheck, CircleDollarSign } from 'lucide-react';
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn(0.1);
  const { ref: contentRef, isVisible: contentVisible } = useFadeIn(0.1);
  
  const features = [
    {
      icon: <Beaker className="h-5 w-5" />,
      title: 'Scientific Approach',
      description: 'We use a hypothesis-driven methodology and statistical significance to deliver reliable results.',
      bgColor: '#D90368' // Pink (magenta from the palette) - top left
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: 'Data-Driven Decisions',
      description: 'Every optimization is backed by comprehensive analytics and user behavior insights.',
      bgColor: '#270A56' // Changed from #541388 to #270A56 - top right
    },
    {
      icon: <SearchCheck className="h-5 w-5" />,
      title: 'Continuous Testing',
      description: 'Our iterative testing process ensures your website constantly improves over time.',
      bgColor: '#270A56' // Changed from #541388 to #270A56 - bottom left
    },
    {
      icon: <CircleDollarSign className="h-5 w-5" />,
      title: 'ROI Focused',
      description: 'We prioritize changes that directly impact your bottom line and business goals.',
      bgColor: '#D90368' // Pink (magenta from the palette) - bottom right
    },
  ];
  
  const { containerRef: featuresRef, visibleItems: featuresVisible } = useStaggeredAnimation(features, 150);

  return (
    <section id="about" className="py-4 md:py-6 relative overflow-hidden">
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
                About The CRO Lab
              </span>
              <h2 className="heading-lg mb-6">
                We turn visitor frustrations into conversion opportunities
              </h2>
            </div>
            
            <div 
              ref={contentRef} 
              className={`transition-all duration-700 delay-400 transform ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="body-md mb-6 text-muted-foreground">
                The CRO Lab was founded on a simple premise: most websites lose potential customers due to preventable user experience issues. Our mission is to identify these conversion barriers and systematically eliminate them.
              </p>
              <p className="body-md text-muted-foreground">
                Unlike agencies that rely on opinions or design trends, we take a rigorous, evidence-based approach. By combining quantitative analytics with qualitative user insights, we create optimization strategies that deliver measurable business impact.
              </p>
            </div>
          </div>
          
          <div 
            ref={featuresRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`rounded-xl p-6 transition-all duration-500 transform text-white border border-white/10 shadow-md hover:shadow-lg hover:-translate-y-1 ${
                  featuresVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${400 + index * 100}ms`,
                  backgroundColor: feature.bgColor
                }}
              >
                <div className="rounded-full bg-white p-2 inline-flex mb-4">
                  {React.cloneElement(feature.icon, { className: "h-5 w-5", style: { color: feature.bgColor } })}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-palette-purple/10 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-palette-magenta/10 filter blur-3xl -z-10"></div>
    </section>
  );
};

export default About;
