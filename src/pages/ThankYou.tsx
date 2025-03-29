
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFadeIn } from '@/lib/animations';

const ThankYou = () => {
  const { ref: contentRef, isVisible: contentVisible } = useFadeIn(0.1);

  useEffect(() => {
    // Set page title
    document.title = 'Thank You - The CRO Lab';
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Thank you for contacting The CRO Lab. We appreciate your message and will be in touch soon.');
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const nextSteps = [
    {
      title: "Initial Review",
      description: "Our team will review your submission within 24 hours."
    },
    {
      title: "Personalized Response",
      description: "You'll receive a personalized email with initial thoughts on your project."
    },
    {
      title: "Free Consultation",
      description: "We'll schedule a 30-minute call to discuss your conversion goals in detail."
    },
    {
      title: "Custom Proposal",
      description: "After our call, you'll receive a tailored proposal based on your specific needs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container px-6 mx-auto">
            <div 
              ref={contentRef} 
              className={`max-w-3xl mx-auto text-center transition-all duration-700 delay-300 transform ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6 bg-palette-magenta bg-opacity-10">
                <CheckCircle className="h-10 w-10 text-palette-magenta" />
              </div>
              
              <h1 className="heading-lg mb-6">
                Thank You for Contacting Us!
              </h1>
              
              <p className="body-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                Your message has been successfully sent. We appreciate your interest in The CRO Lab and will be in touch shortly to discuss how we can help optimize your conversion rates.
              </p>
              
              <div className="mb-12 max-w-2xl mx-auto bg-secondary/50 rounded-xl p-8">
                <h2 className="text-xl font-semibold mb-6">What Happens Next?</h2>
                <div className="space-y-6">
                  {nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="rounded-full h-8 w-8 flex items-center justify-center mr-4 bg-palette-magenta text-white flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link to="/">
                <Button variant="outline" size="lg" className="rounded-full px-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
