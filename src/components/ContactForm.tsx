import React from 'react';
import { useFadeIn } from '@/lib/animations';
import { Container } from '@/components/ui/container';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CheckCircle, Mail, Phone, MapPin, ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  website: z.string()
    .min(2, "Website must be at least 2 characters")
    .transform(val => {
      // If no protocol is provided, add https://
      if (val && !val.match(/^https?:\/\//)) {
        return `https://${val}`;
      }
      return val;
    }),
  message: z.string().min(10, "Message must be at least 10 characters")
});

const WEBHOOK_URL = "https://n8n.agenticadvisory.net/webhook-test/incoming-lead";

const ContactForm = () => {
  const { ref: formSectionRef, isVisible: formSectionVisible } = useFadeIn();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      website: "",
      message: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Submitting form with values:", values);
    
    try {
      // Prepare the payload for the webhook
      const payload = {
        ...values,
        formName: "Contact Form",
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
      
      // Reset the form
      form.reset();
      
      // Navigate to thank you page
      navigate("/thank-you");
    } catch (error) {
      console.error("Error sending form data to webhook:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  }

  const benefits = [
    'Free conversion audit for new clients',
    'No long-term contracts required',
    'Results-based performance guarantees',
    'Direct access to CRO specialists'
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-white" />,
      title: "Email",
      details: "hello@thecrolab.com",
      link: "mailto:hello@thecrolab.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-white" />,
      title: "Phone",
      details: "(020) 7946 0721",
      link: "tel:+442079460721"
    },
    {
      icon: <MapPin className="h-5 w-5 text-white" />,
      title: "London Office",
      details: "123 Conversion St, London, EC2A 1NT",
      link: "https://maps.google.com/?q=London+EC2A"
    },
    {
      icon: <Clock className="h-5 w-5 text-white" />,
      title: "Office Hours",
      details: "Mon-Fri: 9:00 AM - 6:00 PM",
      link: null
    }
  ];

  return (
    <section ref={formSectionRef} className="py-16 relative">
      <Container>
        <div className={`grid md:grid-cols-5 gap-10 max-w-5xl mx-auto transition-all duration-700 delay-300 transform ${formSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="md:col-span-3 glass-card rounded-xl p-6 md:p-8 shadow-lg border border-white/30">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://yourwebsite.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How can we help?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your conversion goals..." 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full rounded-lg">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-xl p-6 md:p-8 mb-6 text-primary-foreground bg-primary">
              <h3 className="text-xl font-semibold mb-6">Why work with us</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex">
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rounded-xl p-6 md:p-8 bg-primary text-primary-foreground">
              <h3 className="text-xl font-semibold mb-6">Contact information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">{item.title}</div>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-sm text-white hover:text-white/80 flex items-center transition-smooth"
                          target={item.link.startsWith('http') ? "_blank" : undefined}
                          rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          {item.details}
                          {item.link.startsWith('http') && (
                            <ArrowUpRight className="ml-1 h-3 w-3" />
                          )}
                        </a>
                      ) : (
                        <div className="text-sm text-white">{item.details}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-cro-300/10 filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-cro-400/5 filter blur-3xl -z-10"></div>
    </section>
  );
};

export default ContactForm;
