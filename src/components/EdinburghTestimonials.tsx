
import React from 'react';
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';
import { Star } from 'lucide-react';

const EdinburghTestimonials = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn(0.1);
  
  const testimonials = [
    {
      name: "James Robertson",
      position: "Marketing Director, Edinburgh Tech Hub",
      content: "The CRO Lab's Edinburgh team understands our local market nuances. Their optimization strategy increased our conversion rate by 37% in just three months.",
      stars: 5
    },
    {
      name: "Fiona Campbell",
      position: "E-commerce Manager, Highland Crafts Edinburgh",
      content: "Working with a local Edinburgh CRO agency made all the difference. The CRO Lab's insights into Edinburgh consumers helped us transform our online store performance.",
      stars: 5
    },
    {
      name: "Andrew McLean",
      position: "CEO, Edinburgh Tourism Platform",
      content: "The Edinburgh team at The CRO Lab delivered beyond our expectations. Their data-driven approach to CRO has transformed how visitors interact with our booking system.",
      stars: 5
    }
  ];
  
  const { containerRef: testimonialsRef, visibleItems: testimonialsVisible } = useStaggeredAnimation(testimonials, 150);

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div 
          ref={titleRef} 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-palette-magenta text-white border border-palette-magenta">
            Edinburgh Client Testimonials
          </span>
          <h2 className="heading-lg mb-6 text-balance">
            What Edinburgh businesses say about us
          </h2>
          <p className="body-md text-muted-foreground text-balance px-0">
            Hear from local Edinburgh businesses about their experiences working with our CRO team.
          </p>
        </div>
        
        <div 
          ref={testimonialsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={`rounded-xl p-8 transition-all duration-500 transform text-white border shadow-md hover:shadow-lg ${
                testimonialsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${400 + index * 100}ms`,
                backgroundColor: index % 2 === 0 ? '#270A56' : '#D90368',
                borderColor: index % 2 === 0 ? 'rgba(39, 10, 86, 0.3)' : 'rgba(217, 3, 104, 0.3)'
              }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-palette-yellow fill-palette-yellow" />
                ))}
              </div>
              <p className="text-white mb-6 italic text-balance">"{testimonial.content}"</p>
              <div className="mt-auto">
                <h4 className="font-semibold text-white text-balance">{testimonial.name}</h4>
                <p className="text-sm text-white/90 text-balance">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-palette-yellow/10 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-palette-purple/10 filter blur-3xl -z-10"></div>
    </section>
  );
};

export default EdinburghTestimonials;
