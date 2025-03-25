import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, LineChart, BarChart, TrendingUp, ArrowUpRight } from 'lucide-react';
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';

const Hero = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn(0.1);
  const { ref: subtitleRef, isVisible: subtitleVisible } = useFadeIn(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useFadeIn(0.1);
  
  const statsItems = [
    { icon: <LineChart className="h-5 w-5" />, value: '147%', label: 'Avg. Conversion Lift' },
    { icon: <BarChart className="h-5 w-5" />, value: '23.4%', label: 'Revenue Increase' },
    { icon: <TrendingUp className="h-5 w-5" />, value: '79%', label: 'Higher ROI' },
  ];
  
  const { containerRef: statsRef, visibleItems: statsVisible } = useStaggeredAnimation(statsItems, 200);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-secondary/80 to-background"></div>
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-palette-purple/10 filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-palette-magenta/10 filter blur-3xl"></div>
      </div>
      
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            ref={titleRef} 
            className={`transition-all duration-700 delay-300 transform ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-secondary border border-border">
              Conversion Rate Optimization Agency
            </span>
            <h1 className="heading-xl mb-6">
              Transform Your <span className="shimmer-text">Visitors</span> Into <span className="shimmer-text">Customers</span>
            </h1>
          </div>
          
          <div 
            ref={subtitleRef} 
            className={`transition-all duration-700 delay-500 transform ${
              subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              We use data-driven strategies and scientific testing to optimize your website's conversion rate, helping you generate more leads, sales, and revenue without increasing traffic.
            </p>
          </div>
          
          <div 
            ref={ctaRef} 
            className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-700 delay-700 transform ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button size="lg" className="rounded-full px-6 py-6 text-base bg-palette-magenta hover:bg-palette-magenta/90">
              Get Free Analysis
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-6 py-6 text-base border-palette-purple text-palette-purple hover:bg-palette-purple/10">
              See Our Services
              <ArrowUpRight className="ml-1 h-5 w-5" />
            </Button>
          </div>
          
          <div 
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto"
          >
            {statsItems.map((stat, index) => (
              <div 
                key={stat.label}
                className={`glass-card rounded-xl p-6 flex flex-col items-center transition-all duration-500 transform ${
                  statsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="rounded-full bg-palette-cream p-2 mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1 text-palette-purple">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
