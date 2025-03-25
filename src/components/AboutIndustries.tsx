
import React from 'react';
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Briefcase, Globe, Droplet, PawPrint, Wine } from 'lucide-react';

const industryData = [
  {
    icon: <Heart className="h-6 w-6 text-palette-magenta" />,
    name: 'Healthcare',
    description: 'Optimizing patient journeys and healthcare service conversions'
  },
  {
    icon: <Globe className="h-6 w-6 text-palette-purple" />,
    name: 'Travel',
    description: 'Improving booking conversions and travel experience flows'
  },
  {
    icon: <Briefcase className="h-6 w-6 text-palette-navy" />,
    name: 'Finance',
    description: 'Enhancing financial service signups and application completions'
  },
  {
    icon: <Droplet className="h-6 w-6 text-palette-purple" />,
    name: 'Utilities',
    description: 'Streamlining service selection and customer onboarding'
  },
  {
    icon: <PawPrint className="h-6 w-6 text-palette-magenta" />,
    name: 'Pet Industry',
    description: 'Boosting pet product sales and service engagement'
  },
  {
    icon: <Wine className="h-6 w-6 text-palette-navy" />,
    name: 'Alcohol & Beverages',
    description: 'Optimizing product discovery and checkout experiences'
  }
];

const AboutIndustries = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn(0.1);
  const { containerRef, visibleItems } = useStaggeredAnimation(industryData, 100);
  
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F8F4F9]">
      <Container>
        <div 
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 delay-100 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-palette-navy">
            Industry Expertise That Spans Sectors
          </h2>
          
          <p className="text-lg text-palette-navy/80 leading-relaxed">
            Over the past 15 years, we've developed deep expertise across diverse industries, 
            allowing us to bring cross-sector insights to every project.
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industryData.map((industry, index) => (
            <Card 
              key={industry.name}
              className={`border-none shadow-md hover:shadow-lg transition-all duration-300 ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-full bg-[#F8F4F9] flex items-center justify-center mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-palette-navy">{industry.name}</h3>
                <p className="text-palette-navy/70">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutIndustries;
