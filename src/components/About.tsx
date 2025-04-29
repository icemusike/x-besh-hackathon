import React from 'react';
import { Rocket, Trophy, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Rocket className="h-10 w-10 text-accent" />,
      title: "Showcase Your Skills",
      description: "Build innovative projects that demonstrate your technical expertise and creative problem-solving abilities."
    },
    {
      icon: <Trophy className="h-10 w-10 text-accent" />,
      title: "Win Amazing Prizes",
      description: "Compete for cash rewards, lifetime licenses, exclusive swag, and early access to XBesh's revolutionary platform."
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Grow Your Network",
      description: "Connect with like-minded developers, designers, and entrepreneurs in the XBesh affiliate community."
    }
  ];

  return (
    <section id="about" className="section bg-dark">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text">Why Participate?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-light/80">
            The XBesh Affiliate Hackathon is your opportunity to shape the future of technology while building your career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 transition-all duration-300 hover:translate-y-[-8px]"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-light/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#timeline" className="btn-outline">
            View Event Timeline
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
