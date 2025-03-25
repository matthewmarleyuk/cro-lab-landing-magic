
import React from 'react';
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';
import { Star } from 'lucide-react';
const Testimonials = () => {
  const {
    ref: titleRef,
    isVisible: titleVisible
  } = useFadeIn(0.1);
  const testimonials = [{
    name: "Sarah Johnson",
    position: "Marketing Director, TechCorp",
    content: "The CRO Lab completely transformed our approach to conversion rate optimization. Their data-driven methodology helped us increase conversions by 34% in just two months.",
    stars: 5
  }, {
    name: "Michael Chen",
    position: "E-commerce Manager, StyleHub",
    content: "Working with The CRO Lab has been transformative for our business. Their test-driven approach eliminated the guesswork and delivered real, measurable improvements to our funnel.",
    stars: 5
  }, {
    name: "Emma Rodriguez",
    position: "Digital Director, HealthPlus",
    content: "We've worked with several CRO agencies in the past, but none have delivered the level of results and insights that The CRO Lab has. Their process is thorough and effective.",
    stars: 5
  }];
  const {
    containerRef: testimonialsRef,
    visibleItems: testimonialsVisible
  } = useStaggeredAnimation(testimonials, 150);
  return <section id="testimonials" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div ref={titleRef} className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-palette-magenta text-white border border-palette-magenta">
            Client Success Stories
          </span>
          <h2 className="heading-lg mb-6 text-balance">
            What our clients say about our CRO expertise
          </h2>
          <p className="body-md text-muted-foreground text-balance px-0">
            See how we've helped businesses like yours overcome conversion challenges and achieve significant growth.
          </p>
        </div>
        
        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={testimonial.name} className={`rounded-xl p-8 transition-all duration-500 transform text-white border shadow-md hover:shadow-lg ${testimonialsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{
          transitionDelay: `${400 + index * 100}ms`,
          backgroundColor: index % 2 === 0 ? '#270A56' : '#D90368',
          borderColor: index % 2 === 0 ? 'rgba(39, 10, 86, 0.3)' : 'rgba(217, 3, 104, 0.3)'
        }}>
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="w-5 h-5 text-palette-yellow fill-palette-yellow" />)}
              </div>
              <p className="text-white mb-6 italic text-balance">"{testimonial.content}"</p>
              <div className="mt-auto">
                <h4 className="font-semibold text-white text-balance">{testimonial.name}</h4>
                <p className="text-sm text-white/90 text-balance">{testimonial.position}</p>
              </div>
            </div>)}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-palette-yellow/20 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-palette-purple/20 filter blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-60 h-60 rounded-full bg-palette-magenta/15 filter blur-2xl -z-10"></div>
      <div className="absolute bottom-10 right-1/3 w-72 h-72 rounded-full bg-accent/15 filter blur-3xl -z-10"></div>
    </section>;
};
export default Testimonials;
