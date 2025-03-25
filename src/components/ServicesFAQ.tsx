
import React from 'react';
import { useFadeIn } from '@/lib/animations';
import { Container } from '@/components/ui/container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServicesFAQ = () => {
  const { ref, isVisible } = useFadeIn();
  
  const faqs = [
    {
      question: "How do you approach CRO for different types of websites?",
      answer: "We recognize that e-commerce, SaaS, B2B, and lead generation websites have distinct conversion goals and user behaviors. Our approach is tailored to your specific business model, starting with a detailed audit to identify your unique conversion opportunities. We then create a customized optimization roadmap based on your goals, audience, and industry benchmarks."
    },
    {
      question: "What metrics do you focus on improving beyond conversion rate?",
      answer: "While conversion rate is our primary focus, we also optimize for average order value, customer lifetime value, form completion rates, bounce rates, and user engagement metrics. Our comprehensive approach ensures we're not just increasing conversions but building a more effective overall user experience that supports long-term business growth."
    },
    {
      question: "How long does it typically take to see results from CRO efforts?",
      answer: "Initial results from our optimization efforts typically become apparent within 4-6 weeks, with more significant improvements visible after 2-3 months of ongoing optimization. CRO is an iterative process; as we learn more about your users through testing, our strategies become increasingly refined and effective."
    },
    {
      question: "Do you handle the implementation of recommended changes?",
      answer: "Yes, we offer full implementation services for all our recommended optimizations. Our team includes developers experienced in various platforms who can implement changes without burdening your internal resources. Alternatively, if you prefer, we can work closely with your development team to guide the implementation process."
    },
    {
      question: "How do you ensure that design changes maintain our brand identity?",
      answer: "We place high importance on preserving and enhancing your brand identity throughout the optimization process. Before beginning any design work, we conduct a thorough brand audit and create a CRO style guide that aligns with your existing brand guidelines. All proposed changes are reviewed against these guidelines to ensure consistency."
    }
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <Container>
        <div 
          ref={ref} 
          className={`max-w-3xl mx-auto transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-palette-magenta text-white border border-palette-magenta">
              Frequently Asked Questions
            </span>
            <h2 className="heading-md mb-6">
              Common questions about our services
            </h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Learn more about how our CRO services can help your business grow
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted">
                <AccordionTrigger className="text-lg font-medium py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default ServicesFAQ;
