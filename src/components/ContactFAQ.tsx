
import React from 'react';
import { useFadeIn } from '@/lib/animations';
import { Container } from '@/components/ui/container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactFAQ = () => {
  const { ref, isVisible } = useFadeIn();
  
  const faqs = [
    {
      question: "How quickly can I expect to see results from CRO?",
      answer: "While every website is different, our clients typically begin seeing measurable improvements within 4-6 weeks of implementing our recommendations. The most significant results usually come after 2-3 months of ongoing optimization."
    },
    {
      question: "How does your pricing work?",
      answer: "We offer flexible pricing models based on your business needs. This includes project-based pricing for specific conversion challenges, monthly retainers for ongoing optimization, and performance-based models where we share in the upside of increased conversions."
    },
    {
      question: "Do you work with businesses in our industry?",
      answer: "We have experience working with companies across multiple sectors including e-commerce, SaaS, finance, healthcare, travel, and more. Our CRO principles and methodologies can be adapted to any industry that relies on digital conversion."
    },
    {
      question: "What information do you need to get started?",
      answer: "To begin, we'll need access to your analytics platform (Google Analytics, etc.), any existing user research, and the ability to implement tracking codes on your site. We'll also conduct an initial discovery call to understand your business goals and conversion challenges."
    },
    {
      question: "How do you measure success?",
      answer: "We establish clear KPIs at the beginning of our engagement based on your business goals. These typically include conversion rate improvements, revenue increases, lead quality metrics, and ROI calculations. We provide regular reporting on these metrics throughout our work together."
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
              Common Questions
            </span>
            <h2 className="heading-md mb-6">
              Frequently Asked Questions
            </h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Get answers to the most common questions about our CRO services
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

export default ContactFAQ;
