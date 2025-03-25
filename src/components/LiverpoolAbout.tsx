
import React from 'react';
import { Container } from '@/components/ui/container';

const LiverpoolAbout = () => {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            CRO Agency <span className="text-primary">Liverpool</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            We help Liverpool businesses optimize their conversion rates and grow their online presence.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
              <p className="text-muted-foreground">
                Our Liverpool team understands the unique needs of local businesses and customers.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                We've helped businesses across Liverpool achieve significant conversion improvements.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Data-Driven</h3>
              <p className="text-muted-foreground">
                Our approach is based on thorough research and analysis of your customers' behavior.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LiverpoolAbout;
