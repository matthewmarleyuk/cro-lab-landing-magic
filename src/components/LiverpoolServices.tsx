
import React from 'react';
import { Container } from '@/components/ui/container';
import { Check } from 'lucide-react';

const LiverpoolServices = () => {
  return (
    <section className="py-20 bg-muted/50">
      <Container>
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Liverpool CRO Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized conversion optimization services for businesses in Liverpool and the surrounding areas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const services = [
  {
    title: "Website Audit & Analysis",
    description: "Comprehensive analysis of your website's performance and user experience.",
    features: [
      "Heatmap analysis",
      "User journey mapping",
      "Conversion funnel analysis",
      "Technical performance review"
    ]
  },
  {
    title: "A/B Testing",
    description: "Data-driven experimentation to identify the best-performing variations.",
    features: [
      "Hypothesis development",
      "Test setup and implementation",
      "Results analysis",
      "Ongoing optimization"
    ]
  },
  {
    title: "UX Optimization",
    description: "Enhance user experience to increase engagement and conversions.",
    features: [
      "User research",
      "UI/UX improvements",
      "Mobile optimization",
      "Accessibility enhancements"
    ]
  },
  {
    title: "Landing Page Optimization",
    description: "Create high-converting landing pages for your Liverpool audience.",
    features: [
      "Custom landing page design",
      "Copy optimization",
      "CTA enhancement",
      "Form optimization"
    ]
  },
  {
    title: "eCommerce Optimization",
    description: "Boost sales and average order value for your online store.",
    features: [
      "Product page optimization",
      "Checkout flow improvement",
      "Cart abandonment reduction",
      "Cross-sell & upsell strategies"
    ]
  },
  {
    title: "Local SEO & CRO Integration",
    description: "Combine conversion optimization with local SEO for Liverpool businesses.",
    features: [
      "Local keyword optimization",
      "Liverpool-focused content",
      "Location-based conversion paths",
      "Local business schema markup"
    ]
  }
];

export default LiverpoolServices;
