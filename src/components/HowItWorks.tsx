import React, { useEffect } from 'react';
import { UserPlus, Code2, FileCheck, Presentation, Terminal, Braces, Code } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <UserPlus className="h-10 w-10 text-accent-400" />,
      title: "1. Sign up for hackathon",
      description: "Sign up for the hackathon and get approved with JVZoo link.",
      code: "await jvzoo.requestApproval(affiliateId);"
    },
    {
      icon: <Code2 className="h-10 w-10 text-accent-400" />,
      title: "2. Build your project",
      description: "Build an amazing application or website and submit it for review.",
      code: "const project = await buildProject();\nsubmit(project);"
    },
    {
      icon: <Presentation className="h-10 w-10 text-accent-400" />,
      title: "3. Join live testing",
      description: "Join us live when we test and vote the winner for the $500.",
      code: "if (votes > competitors) win($500);"
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="how-it-works" className="section bg-dark/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-0 w-full h-1/4 bg-gradient-to-r from-primary-900/20 to-accent-900/20 blur-3xl -z-10"></div>
      
      {/* Code-inspired floating elements */}
      <div className="absolute top-20 right-10 hidden lg:block fade-in">
        <div className="glass-card p-3 border-primary-400/20 shadow-neon-primary">
          <div className="flex items-center mb-2">
            <Terminal className="h-4 w-4 text-accent-400 mr-2" />
            <span className="text-light/60 text-xs">win_contest.js</span>
          </div>
          <div className="font-mono text-xs text-light/60">
            <div className="typewriter text-accent-300/80">{"function"}</div>
            <div className="typewriter typewriter-delay-1 ml-2">
              <span className="text-primary-400">{"winContest"}</span>
              <span className="text-light/60">{"()"}</span> <span className="text-light/60">{"{}"}</span>
            </div>
            <div className="typewriter typewriter-delay-2 ml-4 text-light/60">{"// Your code here"}</div>
            <div className="typewriter typewriter-delay-3 ml-2 text-light/60">{"}"}</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-20 left-10 hidden lg:block fade-in fade-in-delay-2">
        <div className="glass-card p-3 border-accent-400/20 shadow-neon-accent">
          <div className="flex items-center mb-2">
            <Code className="h-4 w-4 text-primary-400 mr-2" />
            <span className="text-light/60 text-xs">prize.js</span>
          </div>
          <div className="font-mono text-xs">
            <div className="typewriter text-accent-300/80">{"const"}</div>
            <div className="typewriter typewriter-delay-1 ml-2">
              <span className="text-primary-400">{"prize"}</span>
              <span className="text-accent-300/80">{" = "}</span>
              <span className="text-success-400">{"'$500'"}</span>;
            </div>
          </div>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="section-title">
          <h2 className="gradient-text">How to win the $500</h2>
          <p className="mt-4 max-w-2xl mx-auto text-light/80">
            Follow these simple steps to compete for the $500 cash prize in the Early-Bird Affiliate Contest.
          </p>
        </div>
        
        <div className="relative mt-20 max-w-5xl mx-auto">
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) - Positioned BEHIND the cards */}
            <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full shadow-neon"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center fade-in fade-in-delay-1">
                {/* Step Number (Desktop) */}
                <div className="hidden md:flex absolute -top-6 left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-dark-100/80 border-2 border-primary-400 text-primary-400 font-bold text-lg z-10 shadow-neon-primary">
                  {index + 1}
                </div>
                
                {/* Step Content */}
                <div className="glass-card-hover p-8 w-full h-full border-white/10 hover:border-primary-400/30 hover:shadow-neon-primary transition-all duration-500 z-20 bg-dark-50/30">
                  <div className="icon-circle-lg mb-6 mx-auto bg-gradient-to-br from-dark-100/50 to-dark-200/50">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-light/80 mb-6">{step.description}</p>
                  
                  {/* Code snippet */}
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <div className="font-mono text-xs text-accent-400/70 flex justify-center">
                      <code>{step.code}</code>
                    </div>
                  </div>
                </div>
                
                {/* Floating decoration */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-500/20 rounded-lg border border-accent-400/20 flex items-center justify-center rotate-12 animate-float hidden md:flex" style={{ animationDelay: `${index * 0.5}s` }}>
                  <Braces className="h-4 w-4 text-accent-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#hero" className="btn-primary rounded-full px-8 py-4 shadow-neon-primary">
            Register Now
          </a>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-light/70 italic font-mono text-sm">// Tie-breaker = total gross revenue;</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
