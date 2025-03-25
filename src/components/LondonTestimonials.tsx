
import React from 'react';
import { useFadeIn, useStaggeredAnimation } from '@/lib/animations';
import { Star, Quote } from 'lucide-react';

const LondonTestimonials = () => {
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn(0.1);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "London Tech Solutions",
      stars: 5,
      quote: "The CRO Lab transformed our website performance. Their London expertise helped us understand our local audience and our conversion rates increased by 85% in three months.",
      image: "/placeholder.svg"
    },
    {
      name: "David Thompson",
      position: "E-commerce Manager",
      company: "London Retail Group",
      stars: 5,
      quote: "Their London-focused approach to CRO delivered exceptional results. Our cart abandonment rate dropped by 40% and our average order value increased significantly.",
      image: "/placeholder.svg"
    },
    {
      name: "Michelle Lewis",
      position: "Digital Director",
      company: "London Tourism Board",
      stars: 5,
      quote: "Working with a CRO agency that understands London's unique market made all the difference. Our booking conversion rate nearly doubled since implementing their recommendations.",
      image: "/placeholder.svg"
    }
  ];
  
  const { containerRef: testimonialsRef, visibleItems: testimonialsVisible } = useStaggeredAnimation(testimonials, 150);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div 
          ref={titleRef} 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-palette-magenta text-white border border-palette-magenta">
            Testimonials
          </span>
          <h2 className="heading-lg mb-6 text-balance">
            What London businesses say about our CRO services
          </h2>
          <p className="body-md text-muted-foreground text-balance">
            Don't just take our word for it - hear from our satisfied London clients who have transformed their conversion rates.
          </p>
        </div>
        
        <div 
          ref={testimonialsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={`rounded-xl p-8 bg-white border shadow-md hover:shadow-lg transition-all duration-500 transform ${
                testimonialsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${400 + index * 100}ms`,
                borderColor: index % 2 === 0 ? 'rgba(39, 10, 86, 0.3)' : 'rgba(217, 3, 104, 0.3)'
              }}
            >
              <div className="flex items-center space-x-0.5 mb-3">
                {Array(testimonial.stars).fill(0).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                ))}
              </div>
              
              <div className="mb-4">
                <Quote className="h-8 w-8 opacity-20" />
              </div>
              
              <p className="text-md mb-6 italic">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-palette-purple/10 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-72 h-72 rounded-full bg-palette-magenta/10 filter blur-3xl -z-10"></div>
    </section>
  );
};

export default LondonTestimonials;
