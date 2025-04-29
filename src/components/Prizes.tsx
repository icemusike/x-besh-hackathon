import React from 'react';
import { DollarSign, Zap, Code, Briefcase, Users, Package, Terminal, Braces, Database } from 'lucide-react';

const Prizes: React.FC = () => {
  const productFeatures = [
    "Powered by memoE LLM v1.0 (agentic AI)",
    "Lifetime licence on the front-end ($67)",
    "OTO1 Black Vanta power-edition ($97)",
    "OTO2 DFY Command Center – 30 premade apps ($197)",
    "OTO3 360 Agency with unlimited client rights ($197)",
    "OTO4 25-licence Reseller kit + mastermind ($497)"
  ];

  // Define code snippets as strings to avoid JSX parsing issues
  const codeSnippet1 = "// Prize distribution";
  const codeSnippet2 = "const winner = affiliates.find(a => a.sales === Math.max(...affiliates.map(a => a.sales)));";
  const codeSnippet3 = "await payPrize(winner, '$500');";

  return (
    <section id="prizes" className="section bg-dark relative overflow-hidden">
      {/* Code-inspired background elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary-600/5 rounded-lg border border-primary-400/10 -rotate-12 backdrop-blur-sm hidden lg:block"></div>
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-accent-600/5 rounded-lg border border-accent-400/10 rotate-12 backdrop-blur-sm hidden lg:block"></div>
      
      {/* Floating code elements */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <div className="glass-card p-3 border-primary-400/20 shadow-neon-primary">
          <div className="flex items-center mb-2">
            <Terminal className="h-4 w-4 text-accent-400 mr-2" />
            <span className="text-light/60 text-xs">prize_calculation.js</span>
          </div>
          <div className="font-mono text-xs">
            <div className="text-accent-300/80">function</div>
            <div className="ml-2">
              <span className="text-primary-400">calculatePrize</span>
              <span className="text-light/60">()</span> <span className="text-light/60">{`{`}</span>
            </div>
            <div className="ml-4">
              <span className="text-accent-300/80">return</span>
              <span className="text-success-400 ml-1">'$500'</span>;
            </div>
            <div className="ml-2 text-light/60">{`}`}</div>
          </div>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="section-title">
          <h2 className="gradient-text">$500 Winner-Takes-All</h2>
          <p className="mt-4 max-w-2xl mx-auto text-light/80">
            No second place—go big or go home.
          </p>
        </div>
        
        {/* Prize Card */}
        <div className="max-w-2xl mx-auto mb-20 relative">
          <div className="glass-card-hover p-10 text-center border-primary-400/30 shadow-neon-primary">
            <div className="icon-circle-lg mx-auto mb-6 bg-gradient-to-br from-dark-100/50 to-dark-200/50">
              <DollarSign className="h-12 w-12 text-accent-400" />
            </div>
            <h3 className="text-3xl font-bold mb-4">$500 Cash Prize</h3>
            <div className="text-5xl font-bold gradient-text mb-6 glow-text">$500</div>
            <p className="text-light/80 max-w-xl mx-auto mb-6">
              Cash via PayPal or Wise within 24h of the live reveal.
            </p>
            
            {/* Code snippet */}
            <div className="mb-6 p-4 bg-dark-100/50 rounded-lg border border-white/5 max-w-md mx-auto">
              <div className="font-mono text-xs text-left">
                <div className="text-primary-400/60">{codeSnippet1}</div>
                <div className="text-accent-300/80">
                  const <span className="text-primary-400">winner</span> = 
                  <span className="text-light/80">{" affiliates.find(a "}</span>
                  <span className="text-light/80">{"=> a.sales === Math.max(...affiliates.map(a => a.sales)));"}</span>
                </div>
                <div className="text-accent-300/80">
                  await <span className="text-primary-400">payPrize</span>
                  (winner, <span className="text-success-400">'$500'</span>);
                </div>
              </div>
            </div>
            
            <a href="#register" className="btn-primary rounded-full px-8 py-4 relative overflow-hidden group">
              <span className="relative z-10">Compete Now</span>
              <span className="absolute top-0 right-full w-full h-full bg-white/20 transform transition-transform duration-1000 ease-out group-hover:right-0"></span>
            </a>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary-500/30 rounded-lg border border-primary-400/30 flex items-center justify-center rotate-12 animate-float hidden md:flex">
            <Code className="h-6 w-6 text-primary-400" />
          </div>
          
          <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-accent-500/30 rounded-lg border border-accent-400/30 flex items-center justify-center -rotate-12 animate-float hidden md:flex" style={{ animationDelay: '1s' }}>
            <Braces className="h-5 w-5 text-accent-400" />
          </div>
        </div>
        
        {/* Product Snapshot */}
        <div className="mt-24">
          <div className="section-title mb-12">
            <h2 className="gradient-text">What you're promoting: XBesh AGI</h2>
            <p className="mt-4 max-w-3xl mx-auto text-light/80">
              The no-code SaaS builder that turns a plain English prompt into a live, hosted application in under an hour.
            </p>
          </div>
          
          <div className="glass-card p-10 max-w-4xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  <Zap className="h-12 w-12 text-accent-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">High-Converting Offer</h3>
                  <p className="text-light/80">
                    A revolutionary AI-powered SaaS builder that your audience will love. Perfect for marketers, entrepreneurs, and agencies.
                  </p>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-xl font-bold mb-4 gradient-text">Complete Funnel:</h4>
                  <ul className="space-y-4">
                    {productFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mr-3 mt-1">
                          <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                          </div>
                        </div>
                        <span className="text-light/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-neon">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Code className="h-16 w-16 text-accent-400 mx-auto mb-4" />
                      <p className="text-light/80">Product demo video will be available in your affiliate dashboard</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating code elements */}
            <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-primary-500/30 rounded-lg border border-primary-400/30 flex items-center justify-center rotate-12 animate-float hidden md:flex">
              <Database className="h-5 w-5 text-primary-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
