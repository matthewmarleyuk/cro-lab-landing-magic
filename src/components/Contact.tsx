
import React, { useState } from 'react';
import { useFadeIn } from '@/lib/animations';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CheckCircle, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const WEBHOOK_URL = "https://n8n.agenticadvisory.net/webhook-test/incoming-lead";

const Contact = () => {
  const {
    ref: titleRef,
    isVisible: titleVisible
  } = useFadeIn(0.1);
  const {
    ref: formRef,
    isVisible: formVisible
  } = useFadeIn(0.1);
  const {
    ref: infoRef,
    isVisible: infoVisible
  } = useFadeIn(0.1);

  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Submitting form with data:", formData);

    try {
      // Format the website URL if needed
      let formattedData = { ...formData };
      if (formattedData.website && !formattedData.website.match(/^https?:\/\//)) {
        formattedData.website = `https://${formattedData.website}`;
      }
      
      // Prepare the payload for the webhook
      const payload = {
        ...formattedData,
        formName: "Contact Form (Home)",
        submittedAt: new Date().toISOString(),
        page: window.location.pathname
      };
      
      console.log("Sending payload to webhook:", payload);
      
      // Send form data to webhook with no-cors mode
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Required for cross-origin requests without CORS
        body: JSON.stringify(payload),
      });
      
      // With no-cors mode, we don't get a proper response to check
      // We'll assume success and show a toast message
      console.log("Webhook request sent successfully");
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        website: '',
        message: ''
      });
      
      // Redirect to thank you page
      navigate("/thank-you");
    } catch (error) {
      console.error("Error sending form data to webhook:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = ['Free conversion audit for new clients', 'No long-term contracts', 'Results-based performance guarantees', 'Direct communication with us'];

  return <section id="contact" className="py-16 md:py-20 bg-secondary/50 relative">
      <div className="container px-6 mx-auto">
        <div ref={titleRef} className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-palette-magenta border border-palette-magenta text-white">
            Get Started
          </span>
          <h2 className="heading-lg mb-6">
            Ready to dramatically improve your conversion rates?
          </h2>
          <p className="body-md text-muted-foreground px-0">
            Contact us today for a free consultation and discover how we can help you optimize your website for better results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div ref={formRef} className={`md:col-span-3 glass-card rounded-xl p-6 md:p-8 transition-all duration-700 delay-400 transform ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input 
                    id="firstName" 
                    className="rounded-lg" 
                    placeholder="John" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input 
                    id="lastName" 
                    className="rounded-lg" 
                    placeholder="Doe" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  className="rounded-lg" 
                  placeholder="john@company.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium">
                  Website URL
                </label>
                <Input 
                  id="website" 
                  className="rounded-lg" 
                  placeholder="https://yourwebsite.com" 
                  value={formData.website}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  How can we help?
                </label>
                <Textarea 
                  id="message" 
                  className="rounded-lg min-h-[120px]" 
                  placeholder="Tell us about your conversion goals..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full rounded-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </div>
          
          <div ref={infoRef} className={`md:col-span-2 transition-all duration-700 delay-600 transform ${infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="rounded-xl p-6 md:p-8 mb-6 text-primary-foreground bg-primary">
              <h3 className="text-xl font-semibold mb-6">Why work with us</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => <li key={index} className="flex">
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>)}
              </ul>
            </div>
            
            <div className="rounded-xl p-6 md:p-8 bg-primary text-primary-foreground">
              <h3 className="text-xl font-semibold mb-6">Contact information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium mb-1">Email</div>
                    <a href="mailto:hello@thecrolab.com" className="text-sm text-white hover:text-white/80 transition-smooth">
                      hello@thecrolab.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium mb-1">Phone</div>
                    <a href="tel:+14155552671" className="text-sm text-white hover:text-white/80 transition-smooth">
                      (415) 555-2671
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium mb-1">Location</div>
                    <div className="text-sm text-white">
                      350 Market Street, Suite 200<br />
                      San Francisco, CA 94105
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-cro-300/10 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-cro-400/5 filter blur-3xl -z-10"></div>
    </section>;
};

export default Contact;
