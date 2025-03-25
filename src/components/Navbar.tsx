
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '/services' },
    { name: 'Results', href: '#results' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-palette-cream/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <img 
            src="/lovable-uploads/0d5fa8dc-4fca-47f2-89cc-8d9791774f03.png" 
            alt="CRO Lab Flask Logo" 
            className="h-8 w-8" 
          />
          <span className="text-xl font-bold tracking-tight">
            <span className="text-palette-navy">The </span>
            <span className="shimmer-text">CRO</span>
            <span className="text-palette-navy"> Lab</span>
          </span>
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-palette-purple transition-smooth"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-palette-purple transition-smooth"
              >
                {link.name}
              </Link>
            )
          ))}
          <Button className="rounded-full bg-palette-magenta hover:bg-palette-magenta/90">
            Get Started
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </nav>
        
        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col bg-palette-cream">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/0d5fa8dc-4fca-47f2-89cc-8d9791774f03.png" 
                  alt="CRO Lab Flask Logo" 
                  className="h-8 w-8" 
                />
                <span className="text-lg font-bold">
                  <span className="text-palette-navy">The </span>
                  <span className="shimmer-text">CRO</span>
                  <span className="text-palette-navy"> Lab</span>
                </span>
              </div>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </SheetTrigger>
            </div>
            <nav className="flex flex-col space-y-6 pt-8">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium hover:text-palette-purple transition-smooth"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-base font-medium hover:text-palette-purple transition-smooth"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Button className="w-full justify-center rounded-full mt-4 bg-palette-magenta hover:bg-palette-magenta/90">
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
