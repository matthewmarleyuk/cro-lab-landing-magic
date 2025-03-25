
import React from 'react';
import { useFadeIn } from '@/lib/animations';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CheckCircle, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
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
  const benefits = ['Free conversion audit for new clients', 'No long-term contracts - we earn your business monthly', 'Results-based performance guarantees', 'Direct communication with optimization experts'];
  return <section id="contact" className="py-16 md:py-20 bg-secondary/50 relative">
      <div className="container px-6 mx-auto">
        <div ref={titleRef} className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 delay-200 transform ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-white border border-border">
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
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input id="firstName" className="rounded-lg" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input id="lastName" className="rounded-lg" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" className="rounded-lg" placeholder="john@company.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium">
                  Website URL
                </label>
                <Input id="website" className="rounded-lg" placeholder="https://yourwebsite.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  How can we help?
                </label>
                <Textarea id="message" className="rounded-lg min-h-[120px]" placeholder="Tell us about your conversion goals..." />
              </div>
              
              <Button type="submit" className="w-full rounded-lg">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
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
