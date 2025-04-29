import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'Why Join', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'How to Win', href: '#how-it-works' },
    { name: 'Product', href: '#prizes' },
    { name: 'Resources', href: '#resources' },
    { name: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-dark-500/90 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Logo className="h-10 w-auto" />
          {/* Removed the text logo */}
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-light/80 hover:text-accent-400 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#hero" 
            className="btn-primary rounded-full"
          >
            Join Hackathon
          </a>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-light focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-500/95 backdrop-blur-lg">
          <div className="container py-6">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="block py-2 text-light/80 hover:text-accent-400 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a 
                  href="#hero" 
                  className="block w-full text-center btn-primary rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  Join Hackathon
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
