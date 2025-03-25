
import React from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LiverpoolCTA = () => {
  return (
    <section className="py-20 bg-primary/5">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Grow Your Liverpool Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join other successful Liverpool businesses that have transformed their conversion rates with our proven strategies.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="rounded-full">
              Get a Free Audit <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Our Liverpool Case Studies
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-card rounded-lg border border-border max-w-md mx-auto">
            <h3 className="font-semibold mb-2">Liverpool Office</h3>
            <p className="text-muted-foreground mb-4">
              123 Bold Street<br />
              Liverpool, L1 4JA<br />
              United Kingdom
            </p>
            <p className="text-sm">
              <span className="text-primary font-medium">Email:</span> liverpool@thecrolab.com<br />
              <span className="text-primary font-medium">Phone:</span> +44 151 123 4567
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LiverpoolCTA;
