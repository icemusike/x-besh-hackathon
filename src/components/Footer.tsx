import React from 'react';
import Logo from './Logo';
import { Twitter, Linkedin, Github, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Hackathon",
      links: [
        { name: "About", href: "#about" },
        { name: "Timeline", href: "#timeline" },
        { name: "Prizes", href: "#prizes" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Register", href: "#register" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Starter Templates", href: "#" },
        { name: "Sample Projects", href: "#" },
        { name: "FAQ", href: "#faq" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About XBesh", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Privacy Policy", href: "#" }
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
    { icon: <Mail size={20} />, href: "mailto:hackathon@xbesh.com", label: "Email" }
  ];

  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-4">
              <Logo className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold font-poppins">XBesh</span>
            </a>
            <p className="text-light/70 mb-6 max-w-md">
              XBesh is revolutionizing the affiliate marketing industry with innovative tools and technology. Join our hackathon to be part of the future.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-light/80 hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-light/70 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} XBesh Labs, LLC. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-light/60 hover:text-accent text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-light/60 hover:text-accent text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-light/60 hover:text-accent text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
