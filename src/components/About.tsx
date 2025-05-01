import React from 'react';
import { DollarSign, Percent, Zap, Code, Terminal, Key, Lightbulb, Mic, Rocket } from 'lucide-react';

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
    },
    {
      icon: <Key className="h-10 w-10 text-yellow-400" />,
      title: "Golden Key Access Passes",
      description: "Give your audience early free access and join a revolutionary prelaunch strategy."
    }
  ];

  // Intersection Observer for scroll animations
  React.useEffect(() => {
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
    <section id="about" className="section bg-dark relative overflow-hidden">
      {/* Code-inspired background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-600/5 rounded-lg border border-primary-400/10 rotate-12 backdrop-blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-600/5 rounded-lg border border-accent-400/10 -rotate-12 backdrop-blur-sm"></div>
      
      {/* Floating code elements */}
      <div className="absolute top-40 left-5 hidden lg:block fade-in">
        <div className="glass-card p-3 border-primary-400/20 shadow-neon-primary">
          <div className="flex items-center mb-2">
            <Terminal className="h-5 w-5 text-primary-400/40 mr-2" />
            <span className="text-light/60 text-xs">rewards.js</span>
          </div>
          <div className="font-mono text-xs">
            <div className="typewriter text-accent-300/80">{"function getRewards() {"}</div>
            <div className="typewriter typewriter-delay-1 ml-2 text-primary-400/40">{"return ['$500', '50%', 'GoldenKey'];"}</div>
            <div className="typewriter typewriter-delay-2 text-accent-300/80">{"}"}</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-40 right-5 hidden lg:block fade-in fade-in-delay-2">
        <div className="glass-card p-3 border-accent-400/20 shadow-neon-accent">
          <div className="flex items-center mb-2">
            <Code className="h-5 w-5 text-accent-400/40 mr-2" />
            <span className="text-light/60 text-xs">golden_key.js</span>
          </div>
          <div className="font-mono text-xs">
            <div className="typewriter text-accent-300/80">{"const goldenKey = {"}</div>
            <div className="typewriter typewriter-delay-1 ml-2 text-primary-400/40">{"access: 'early',"}</div>
            <div className="typewriter typewriter-delay-2 ml-2 text-primary-400/40">{"type: 'free',"}</div>
            <div className="typewriter typewriter-delay-3 text-accent-300/80">{"};"}</div>
          </div>
        </div>
      </div>
      
      <div className="container relative z-10">
        {/* New Headline and Moved Video */}
        <div className="mb-16 md:mb-20 text-center fade-in">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 flex items-center justify-center flex-wrap gap-x-4 gap-y-3">
            <span>Dream It</span>
            <Lightbulb className="w-8 h-8 inline-block align-middle text-yellow-400 opacity-90" />
            <span>Tell It</span>
            <Mic className="w-8 h-8 inline-block align-middle text-primary-400 opacity-90" />
            <span>Build It</span>
            <Code className="w-8 h-8 inline-block align-middle text-accent-400 opacity-90" />
            <span>Ship it!</span>
            <Rocket className="w-8 h-8 inline-block align-middle text-success-400 opacity-90" />
          </h3>
          {/* Vimeo Video Embed with Animated Border */}
          <div className="max-w-4xl mx-auto">
            <div className="relative p-1 rounded-xl overflow-hidden group bg-gradient-to-br from-primary-900/20 to-accent-900/10 shadow-xl">
              {/* Animated Border Element - sits behind the video */}
              <div className="absolute inset-0 rounded-xl motion-safe:animate-border-spin bg-[length:300%_300%] bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 -z-10 group-hover:opacity-100 opacity-70 transition-opacity duration-500"></div>
              {/* Video container with aspect ratio and inner rounding */}
              <div className="relative overflow-hidden rounded-lg shadow-inner" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
                <iframe
                  src="https://player.vimeo.com/video/1080594333?autoplay=0&loop=0&autopause=0&muted=0&controls=1&quality=1080p"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title="XBesh Affiliate Hackathon Intro"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        {/* Original Section Title - adjusted margin top */}
        <div className="section-title mt-16 md:mt-20">
          <h2 className="gradient-text">Why jump in now?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-light/80">
            Get ahead of the competition and maximize your earnings with these exclusive benefits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`glass-card-hover p-8 rounded-2xl border-white/10 hover:border-primary-400/30 hover:shadow-neon-primary transition-all duration-500 fade-in fade-in-delay-${index + 1} ${feature.title.includes('Golden Key') ? 'border-yellow-400/30 golden-glow' : ''}`}
            >
              <div className={`icon-circle-lg mb-6 mx-auto md:mx-0 md:ml-0 bg-dark-100/50 ${feature.title.includes('Golden Key') ? 'border-yellow-400/50' : ''}`}>
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
        
        <div className="mt-16 md:mt-20 text-center">
          <a href="#hero" className="btn-outline rounded-full px-8 relative overflow-hidden group">
            <span className="relative z-10">Register Now</span>
            <span className="absolute top-0 right-full w-full h-full bg-primary-500/20 transform transition-transform duration-1000 ease-out group-hover:right-0"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
