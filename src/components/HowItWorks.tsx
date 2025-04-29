import React from 'react';
import { UserPlus, Code2, FileCheck, Presentation } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <UserPlus className="h-10 w-10 text-accent" />,
      title: "Register",
      description: "Sign up for the hackathon through our registration form. You'll get immediate access to resources and the XBesh API."
    },
    {
      icon: <Code2 className="h-10 w-10 text-accent" />,
      title: "Build",
      description: "Develop your project using the XBesh platform. Create something innovative that showcases the power of our affiliate tools."
    },
    {
      icon: <FileCheck className="h-10 w-10 text-accent" />,
      title: "Submit",
      description: "Submit your project before the deadline. Include a demo video, source code, and a brief description of your solution."
    },
    {
      icon: <Presentation className="h-10 w-10 text-accent" />,
      title: "Present",
      description: "Selected finalists will present their projects during the live judging webinar for a chance to win amazing prizes."
    }
  ];

  return (
    <section id="how-it-works" className="section bg-dark/50">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text">How It Works</h2>
          <p className="mt-4 max-w-2xl mx-auto text-light/80">
            Participating in the XBesh Affiliate Hackathon is easy. Follow these simple steps to get started.
          </p>
        </div>
        
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent -translate-y-1/2"></div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Step Number (Desktop) */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-dark border-2 border-primary text-primary font-bold text-lg mb-6 z-10">
                  {index + 1}
                </div>
                
                {/* Step Content */}
                <div className="glass-card p-6 md:pt-12 w-full h-full">
                  {/* Step Number (Mobile) */}
                  <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-dark border-2 border-primary text-primary font-bold text-lg mb-4 mx-auto">
                    {index + 1}
                  </div>
                  
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-dark/50 mb-4 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-light/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#register" className="btn-primary">
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
