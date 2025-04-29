import React from 'react';
import { Trophy, Award, Gift, Zap, Lightbulb, Code, BarChart3, TrendingUp } from 'lucide-react';

const Prizes: React.FC = () => {
  const prizes = [
    {
      icon: <Trophy className="h-12 w-12 text-accent" />,
      title: "Grand Prize",
      value: "$10,000",
      description: "Cash prize plus lifetime XBesh license"
    },
    {
      icon: <Award className="h-12 w-12 text-accent" />,
      title: "Runner Up",
      value: "$5,000",
      description: "Cash prize plus 5-year XBesh license"
    },
    {
      icon: <Gift className="h-12 w-12 text-accent" />,
      title: "Community Choice",
      value: "$2,500",
      description: "Cash prize plus exclusive XBesh swag pack"
    }
  ];

  const criteria = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Creativity & Wow Factor",
      description: "Originality of idea and innovative approach to solving problems"
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Technical Polish",
      description: "Code quality, UI/UX design, and overall implementation"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Business Viability",
      description: "Market potential and practical application of the solution"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Affiliate Growth Potential",
      description: "Ability to drive user acquisition and retention for XBesh platform"
    }
  ];

  return (
    <section id="prizes" className="section bg-dark">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text">Prizes & Rewards</h2>
          <p className="mt-4 max-w-2xl mx-auto text-light/80">
            Compete for substantial cash prizes, exclusive licenses, and the opportunity to be featured during the XBesh product launch.
          </p>
        </div>
        
        {/* Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {prizes.map((prize, index) => (
            <div 
              key={index} 
              className="glass-card p-8 text-center transition-all duration-300 hover:translate-y-[-8px]"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-dark/50 mb-6">
                {prize.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{prize.title}</h3>
              <div className="text-3xl font-bold text-accent mb-4">{prize.value}</div>
              <p className="text-light/70">{prize.description}</p>
            </div>
          ))}
        </div>
        
        {/* Judging Criteria */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Judging Criteria</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {criteria.map((criterion, index) => (
              <div 
                key={index} 
                className="glass-card p-6 flex flex-col items-center text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark/50 mb-4">
                  {criterion.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{criterion.title}</h4>
                <p className="text-light/70 text-sm">{criterion.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Special Mentions */}
        <div className="mt-16 glass-card p-8 text-center">
          <Zap className="h-10 w-10 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-3">Special Category Awards</h3>
          <p className="text-light/80 max-w-2xl mx-auto">
            In addition to the main prizes, we'll be awarding special recognition for Best UI/UX, Most Innovative Use of XBesh API, and Best Mobile Implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
