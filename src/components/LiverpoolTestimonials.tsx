
import React from 'react';
import { Container } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';

const LiverpoolTestimonials = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What Our Liverpool Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Read testimonials from businesses we've helped in Liverpool and the Merseyside area.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted/30 p-6 rounded-lg border border-border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <Separator className="mb-4" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{testimonial.result}</span>
                <span>{testimonial.industry}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const testimonials = [
  {
    name: "Emma Thompson",
    role: "Marketing Director",
    company: "Liverpool Fashion Co.",
    quote: "The CRO Lab team helped us increase our online sales by 47% in just three months. Their understanding of the Liverpool market was invaluable.",
    result: "+47% conversion rate",
    industry: "Retail"
  },
  {
    name: "James Wilson",
    role: "CEO",
    company: "Mersey Digital Solutions",
    quote: "Working with The CRO Lab transformed our lead generation process. Their data-driven approach and local expertise made all the difference.",
    result: "+62% lead generation",
    industry: "Technology"
  },
  {
    name: "Sarah Roberts",
    role: "Owner",
    company: "Liverpool Hospitality Group",
    quote: "Since implementing The CRO Lab's recommendations, our booking rate has increased dramatically and customer feedback has been overwhelmingly positive.",
    result: "+38% booking rate",
    industry: "Hospitality"
  },
  {
    name: "Michael Davies",
    role: "E-commerce Manager",
    company: "Liverpool Homeware",
    quote: "The attention to detail and focus on our specific customer base really set The CRO Lab apart. They understood exactly what our Liverpool customers needed.",
    result: "+53% average order value",
    industry: "Home & Garden"
  }
];

export default LiverpoolTestimonials;
