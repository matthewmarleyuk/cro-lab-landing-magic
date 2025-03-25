
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronRight, MapPin, TrendingUp, BarChart, LineChart } from 'lucide-react';
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';
import EdinburghClients from '@/components/EdinburghClients';
import EdinburghAbout from '@/components/EdinburghAbout';
import EdinburghServices from '@/components/EdinburghServices';
import EdinburghTestimonials from '@/components/EdinburghTestimonials';
import Process from '@/components/Process';
import Tools from '@/components/Tools';
import EdinburghCTA from '@/components/EdinburghCTA';
import { Card, CardContent } from '@/components/ui/card';

const Edinburgh = () => {
  useEffect(() => {
    // Set page title with keyword for SEO
    document.title = 'CRO Agency Edinburgh | The CRO Lab | Conversion Rate Optimization';
  }, []);

  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useFadeIn(0.1);

  const caseStudies = [{
    title: "Scottish Tech Startup",
    industry: "SaaS",
    result: "164% increase in trial signups",
    description: "We redesigned their landing page and optimized the signup flow, resulting in a significant boost in conversion rates."
  }, {
    title: "Retail Chain",
    industry: "E-commerce",
    result: "43% higher average order value",
    description: "Our checkout optimization and product page improvements led to customers adding more items to their carts."
  }, {
    title: "Local Tourism Company",
    industry: "Travel",
    result: "96% more booking completions",
    description: "By simplifying the booking process and adding trust signals, we dramatically improved their conversion funnel."
  }];

  const {
    containerRef: caseStudiesRef,
    visibleItems: caseStudiesVisible
  } = useStaggeredAnimation(caseStudies, 200);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="relative min-h-[80vh] flex items-center pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-secondary/80 to-background"></div>
            <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-palette-purple/10 filter blur-3xl"></div>
            <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-palette-magenta/10 filter blur-3xl"></div>
          </div>
          
          <div className="container px-6 mx-auto">
            <div ref={heroRef} className={`max-w-4xl mx-auto transition-all duration-700 delay-300 transform ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-palette-magenta" />
                <span className="inline-block text-sm font-medium text-palette-magenta">
                  Edinburgh, Scotland
                </span>
              </div>
              
              <h1 className="heading-xl mb-6 text-center md:text-left">
                Edinburgh's Leading <span className="shimmer-text">CRO Agency</span> For Data-Driven Results
              </h1>
              
              <p className="body-lg text-muted-foreground mb-8 text-center md:text-left">
                The CRO Lab helps Edinburgh businesses optimize their websites to convert more visitors into customers through scientific testing and data analysis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
                <Button size="lg" className="rounded-full px-6 py-6 text-base bg-palette-magenta hover:bg-palette-magenta/90">
                  Get Edinburgh CRO Analysis
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6 py-6 text-base border-palette-purple text-palette-purple hover:bg-palette-purple/10">
                  Our Edinburgh Case Studies
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <EdinburghAbout />

        <EdinburghServices />

        <EdinburghTestimonials />

        <Process />

        <Tools />
        
        <section className="py-16 relative overflow-hidden bg-white">
          <div className="container px-6 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-palette-magenta text-white border border-palette-magenta">
                Edinburgh Success Stories
              </span>
              <h2 className="heading-lg mb-6">
                Case studies from Edinburgh clients
              </h2>
              <p className="body-md text-muted-foreground">
                See how we've helped other Edinburgh businesses achieve remarkable results through conversion rate optimization.
              </p>
            </div>
            
            <div ref={caseStudiesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={study.title} className={`border shadow-md hover:shadow-lg transition-all duration-500 transform ${caseStudiesVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{
                  transitionDelay: `${400 + index * 100}ms`,
                  borderColor: index % 2 === 0 ? 'rgba(39, 10, 86, 0.3)' : 'rgba(217, 3, 104, 0.3)'
                }}>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-palette-magenta font-semibold mb-4">{study.result}</p>
                    <p className="text-muted-foreground text-sm">{study.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="rounded-full px-6 py-6 text-base bg-palette-purple hover:bg-palette-purple/90">
                View All Edinburgh Case Studies
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <EdinburghCTA />

        <EdinburghClients />
      </main>
      <Footer />
    </div>
  );
};

export default Edinburgh;
