import React from 'react';
import { DollarSign, Percent, Zap, Code, Terminal } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <DollarSign className="h-10 w-10 text-accent-400" />,
      title: "Exclusive $500 Cash Pot",
      description: "Only Early-Bird affiliates are eligible—zero competition from the main leaderboard."
    },
    {
      icon: <Percent className="h-10 w-10 text-accent-400" />,
      title: "50% Commissions Across The Funnel",
      description: "Front-end $67 + four juicy OTOs up to $497 mean real pay-days."
    },
    {
      icon: <Zap className="h-10 w-10 text-accent-400" />,
      title: "First-Mover Buzz",
      description: "Wow your list with the AGI builder before anyone else has even emailed it."
    }
  ];

  return (
    <section id="about" className="section bg-dark relative overflow-hidden">
      {/* Code-inspired background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-600/5 rounded-lg border border-primary-400/10 rotate-12 backdrop-blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-600/5 rounded-lg border border-accent-400/10 -rotate-12 backdrop-blur-sm"></div>
      
      {/* Floating code elements */}
      <div className="absolute top-40 left-5 hidden lg:flex items-center">
        <Terminal className="h-5 w-5 text-primary-400/40 mr-2" />
        <div className="font-mono text-xs text-primary-400/40">
          <span className="text-accent-300/40">function</span> <span className="text-primary-400/40">getRewards</span>() {'{'}...{'}'}
        </div>
      </div>
      
      <div className="absolute bottom-40 right-5 hidden lg:flex items-center">
        <Code className="h-5 w-5 text-accent-400/40 mr-2" />
        <div className="font-mono text-xs text-accent-400/40">
          <span className="text-accent-300/40">const</span> <span className="text-primary-400/40">prize</span> = <span className="text-success-400/40">'$500'</span>;
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="section-title">
          <h2 className="gradient-text">Why jump in now?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-light/80">
            Get ahead of the competition and maximize your earnings with these exclusive benefits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card-hover p-8 rounded-2xl border-white/10 hover:border-primary-400/30 hover:shadow-neon-primary transition-all duration-500"
            >
              <div className="icon-circle-lg mb-6 mx-auto md:mx-0 md:ml-0 bg-dark-100/50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">{feature.title}</h3>
              <p className="text-light/80 text-center md:text-left">{feature.description}</p>
              
              {/* Code-like decoration */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="font-mono text-xs text-primary-400/40 flex">
                  <span className="text-accent-300/40">const</span>
                  <span className="mx-1 text-light/40">{feature.title.toLowerCase().replace(/\s+/g, '')}</span>
                  <span className="text-accent-300/40">=</span>
                  <span className="mx-1 text-success-400/40">true</span>;
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a href="#resources" className="btn-outline rounded-full px-8 relative overflow-hidden group">
            <span className="relative z-10">Grab Promo Assets</span>
            <span className="absolute top-0 right-full w-full h-full bg-primary-500/20 transform transition-transform duration-1000 ease-out group-hover:right-0"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
