
import React from 'react';
import { useFadeIn } from '@/lib/animations';
import { Container } from '@/components/ui/container';
import { Award, Users, BarChart } from 'lucide-react';

const AboutExperience = () => {
  const {
    ref: contentRef,
    isVisible: contentVisible
  } = useFadeIn(0.1);
  
  const {
    ref: imageRef,
    isVisible: imageVisible
  } = useFadeIn(0.2);
  
  const {
    ref: statsRef,
    isVisible: statsVisible
  } = useFadeIn(0.3);

  return (
    <section className="py-20 md:py-28 bg-background">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div 
            ref={contentRef} 
            className={`transition-all duration-700 delay-100 transform ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-palette-navy">
              15 Years of Conversion Rate Excellence
            </h2>
            
            <p className="text-lg text-palette-navy/80 mb-6 leading-relaxed">
              Since 2009, The CRO Lab has been at the forefront of conversion rate optimization, 
              helping businesses transform their digital presence into powerful conversion machines.
            </p>
            
            <p className="text-lg text-palette-navy/80 mb-8 leading-relaxed">
              Our data-driven approach combines deep analytics, user behavior research, and 
              strategic A/B testing to deliver measurable improvements to your bottom line.
            </p>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-palette-purple/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-palette-purple" />
              </div>
              <p className="font-medium text-palette-navy">Industry-recognized methodology</p>
            </div>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-palette-purple/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-palette-purple" />
              </div>
              <p className="font-medium text-palette-navy">Team of specialized CRO experts</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-palette-purple/10 flex items-center justify-center">
                <BarChart className="h-5 w-5 text-palette-purple" />
              </div>
              <p className="font-medium text-palette-navy">Proven results across all industries</p>
            </div>
          </div>
          
          <div 
            ref={imageRef} 
            className={`transition-all duration-700 delay-200 transform ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl z-0 bg-palette-magenta"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="CRO team analyzing data" 
                className="w-full h-auto rounded-2xl shadow-lg relative z-10" 
              />
            </div>
          </div>
        </div>
        
        <div 
          ref={statsRef} 
          className={`grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 transition-all duration-700 delay-300 transform ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center p-8 rounded-xl bg-[#270A56] shadow-md border border-[#270A56]/20">
            <h3 className="text-5xl font-bold text-white mb-2">15+</h3>
            <p className="text-white/90">Years of Experience</p>
          </div>
          
          <div className="text-center p-8 rounded-xl bg-[#270A56] shadow-md border border-[#270A56]/20">
            <h3 className="text-5xl font-bold text-white mb-2">500+</h3>
            <p className="text-white/90">Satisfied Clients</p>
          </div>
          
          <div className="text-center p-8 rounded-xl bg-[#270A56] shadow-md border border-[#270A56]/20">
            <h3 className="text-5xl font-bold text-white mb-2">28%</h3>
            <p className="text-white/90">Average Conversion Lift</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutExperience;
