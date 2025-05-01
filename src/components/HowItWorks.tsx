import React, { useEffect } from 'react';
import { UserPlus, Code, MonitorPlay, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {

  // Define steps data based on the image
  const steps = [
    {
      id: 1,
      title: 'Sign up for hackathon',
      description: 'Sign up for the hackathon and get approved with JVZoo link.',
      icon: UserPlus,
      codeSnippet: [
        'await jvzoo.requestApproval(affiliateId);',
      ]
    },
    {
      id: 2,
      title: 'Build your project',
      description: 'Build an amazing application or website and submit it for review.',
      icon: Code,
      codeSnippet: [
        'const project = await buildProject();',
        'submit(project);'
      ]
    },
    {
      id: 3,
      title: 'Join live testing',
      description: 'Join us live when we test and vote the winner for the $500.',
      icon: MonitorPlay,
      codeSnippet: [
        'if (votes > competitors) win($500);'
      ]
    }
  ];

  // Intersection Observer logic (can be copied from Prizes or another component if needed)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const fadeElements = document.querySelectorAll('.how-it-works-fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="how-it-works" className="section bg-gradient-to-b from-gray-950/80 via-dark to-dark relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Background elements */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary-900/10 to-transparent blur-3xl"></div>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-accent-900/10 to-transparent blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="section-title mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text-strong">
            How to win the <span className="gradient-text">$500</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Follow these simple steps to compete for the $500 cash prize in the Early-Bird Affiliate Contest.
          </p>
        </div>

        {/* Steps Visualization */}
        <div className="relative mb-20 md:mb-24">
          {/* Cards Grid (Adjusted top margin) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 mt-12 md:mt-16">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`how-it-works-fade-in fade-in-delay-${index + 1} pt-12 bg-gray-900/70 backdrop-blur-lg rounded-2xl border border-gray-700/60 shadow-lg hover:border-primary-500/50 transition-all duration-300 flex flex-col overflow-visible hover:shadow-neon-primary-sm relative`}
              >
                {/* Enhanced Step Number Pill (Visible on all sizes, centered on top) */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-xl border-2 border-gray-950 shadow-lg">
                    {step.id}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col items-center text-center flex-grow pt-6 md:pt-8">
                  <step.icon className="w-12 h-12 text-primary-400 mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm mb-5 flex-grow">{step.description}</p>
                </div>

                {/* Code Snippet Area */}
                <div className="bg-black/40 px-5 py-4 mt-auto border-t border-gray-700/50 font-mono text-xs text-left relative overflow-hidden rounded-b-2xl">
                  {/* Floating Brace */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 text-accent-500/40 opacity-70">
                    {`{}`}
                  </div>
                  {step.codeSnippet.map((line, lineIndex) => (
                    <div key={lineIndex} className="whitespace-pre overflow-x-auto text-gray-400 leading-relaxed">
                      {/* Basic syntax highlighting simulation */}
                      {line.includes('await') && <span className="text-purple-400">await </span>}
                      {line.includes('const') && <span className="text-purple-400">const </span>}
                      {line.replace(/await |const |if |win|submit|buildProject|requestApproval|\(|\)|;|\[|\]/g, '').split(' ').map((word, wi) => {
                         if ([ 'project', 'affiliateId', 'votes', 'competitors' ].includes(word)) return <span key={wi} className="text-primary-300">{word} </span>
                         if ([ '=', '===', '>', '$500' ].includes(word)) return <span key={wi} className="text-white">{word} </span>
                         return <span key={wi}>{word} </span>
                      })}
                      {/* Add back special characters */}
                      {line.includes('(') && <span className="text-gray-500">(</span>}
                      {line.includes(')') && <span className="text-gray-500">)</span>}
                      {line.includes(';') && <span className="text-gray-500">;</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Register Button */} 
        <div className="text-center mt-16 mb-8 fade-in how-it-works-fade-in">
          <a href="#hero" className="btn-primary px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-neon-primary transition-shadow">
            Register Now
            <ArrowRight className="w-5 h-5 ml-2 inline-block" />
          </a>
        </div>

        {/* Tie Breaker Note */}
        <p className="text-center text-sm text-gray-500 font-mono fade-in how-it-works-fade-in">
          // Tie-breaker = total gross revenue;
        </p>

      </div>
    </section>
  );
};

export default HowItWorks;
