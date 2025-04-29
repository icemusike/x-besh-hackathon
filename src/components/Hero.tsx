import React from 'react';
import { ArrowRight } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero: React.FC = () => {
  // Registration end date: May 5, 2025, 23:59 EST
  const registrationEndDate = new Date('2025-05-06T04:59:00Z');

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur border border-white/20">
            <p className="text-sm font-medium">
              <span className="text-accent">XBesh</span> Affiliate Hackathon 2025
            </p>
          </div>
          
          <h1 className="mb-6 font-extrabold leading-tight">
            Build the Future. <br />
            <span className="gradient-text">Launch with XBesh.</span>
          </h1>
          
          <p className="mb-8 text-xl text-light/80">
            Create innovative projects, win amazing prizes, and become part of the next big product launch in tech.
          </p>
          
          <div className="mb-12">
            <a href="#register" className="btn-primary text-lg group">
              Join the Hackathon 🚀
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="glass-card p-6">
            <p className="mb-3 font-medium">Registration Closes In:</p>
            <CountdownTimer targetDate={registrationEndDate} />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dark to-transparent"></div>
    </section>
  );
};

export default Hero;
