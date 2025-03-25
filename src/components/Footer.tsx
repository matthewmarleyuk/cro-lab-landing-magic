
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pt-16 pb-10 border-t border-border">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-xl font-bold tracking-tight">The CRO Lab</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Conversion optimization experts helping businesses turn more visitors into customers.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-9 w-9 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  CRO Audit
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  A/B Testing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  UX Research
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Landing Page Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Website Personalization
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-4">Locations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/edinburgh" className="text-sm text-muted-foreground hover:text-foreground transition-smooth flex items-center">
                  <MapPin className="h-3.5 w-3.5 mr-1.5" /> Edinburgh
                </Link>
              </li>
              <li>
                <Link to="/glasgow" className="text-sm text-muted-foreground hover:text-foreground transition-smooth flex items-center">
                  <MapPin className="h-3.5 w-3.5 mr-1.5" /> Glasgow
                </Link>
              </li>
              <li>
                <Link to="/liverpool" className="text-sm text-muted-foreground hover:text-foreground transition-smooth flex items-center">
                  <MapPin className="h-3.5 w-3.5 mr-1.5" /> Liverpool
                </Link>
              </li>
              <li>
                <Link to="/manchester" className="text-sm text-muted-foreground hover:text-foreground transition-smooth flex items-center">
                  <MapPin className="h-3.5 w-3.5 mr-1.5" /> Manchester
                </Link>
              </li>
              <li>
                <Link to="/birmingham" className="text-sm text-muted-foreground hover:text-foreground transition-smooth flex items-center">
                  <MapPin className="h-3.5 w-3.5 mr-1.5" /> Birmingham
                </Link>
              </li>
              <li>
                <Link to="/london" className="text-sm text-muted-foreground hover:text-foreground transition-smooth flex items-center">
                  <MapPin className="h-3.5 w-3.5 mr-1.5" /> London
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} The CRO Lab. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
