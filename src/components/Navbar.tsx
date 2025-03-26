
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
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
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
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
          </nav>
          <Button className="rounded-full bg-palette-magenta hover:bg-palette-magenta/90">
            Get Started
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <Button
            onClick={toggleMobileMenu}
            variant="ghost"
            size="icon"
            className="inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} 
        id="mobile-menu"
      >
        <div className="container px-4 py-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
          <ul className="flex flex-col font-medium">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                {link.href.startsWith('#') ? (
                  <a
                    href={link.href}
                    className="block py-2 px-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:text-palette-purple"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="block py-2 px-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:text-palette-purple"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="mt-3 mb-2">
              <Button 
                className="w-full rounded-lg bg-palette-magenta hover:bg-palette-magenta/90 text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
