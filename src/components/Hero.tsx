import React, { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle, Code, Terminal, Braces, Database, Server, Cpu } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero: React.FC = () => {
  // Registration end date: May 7, 2025, 23:59 EST
  const registrationEndDate = new Date('2025-05-08T04:59:00Z');
  
  // Form state
  const [affiliateId, setAffiliateId] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Form validation
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidAffiliateId = (id: string) => /^[a-zA-Z0-9]{6,}$/.test(id);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status
    setFormStatus(null);
    setErrorMessage('');
    
    // Validate inputs
    if (!isValidAffiliateId(affiliateId)) {
      setFormStatus('error');
      setErrorMessage('Please enter a valid JVZoo Affiliate ID (at least 6 alphanumeric characters)');
      return;
    }
    
    if (!isValidEmail(email)) {
      setFormStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('success');
      // In a real app, you would send this data to your backend
      console.log('Form submitted:', { affiliateId, email });
    }, 1500);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30"></div>
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
        
        {/* Animated particles/shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-600/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent-600/20 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1 mb-8 rounded-full bg-white/10 backdrop-blur border border-white/20 shadow-glass-sm animate-float">
              <p className="text-sm font-medium">
                <span className="text-accent-400 font-bold">XBesh</span> Early-Bird Affiliate Contest
              </p>
            </div>
            
            <h1 className="mb-6 font-extrabold leading-tight glow-text">
              Be First. <br />
              <span className="gradient-text">Get Paid Early.</span>
            </h1>
            
            <p className="mb-6 text-xl text-light/90 max-w-2xl mx-auto">
              $500 cash goes to the affiliate who drives the most action <em>before</em> the main launch even starts.
            </p>
            
            {/* Prize highlight - Made more prominent */}
            <div className="inline-block mb-10 px-8 py-4 bg-success-600/20 border-2 border-success-500/30 rounded-xl animate-pulse-slow shadow-neon">
              <p className="text-2xl font-bold text-success-400 glow-text">
                $500 Grand Prize Competition
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Hackathon-inspired animated UI elements */}
            <div className="hidden md:block relative">
              <div className="glass-card p-6 border-primary-400/30 shadow-neon-primary h-full">
                {/* Code editor-like interface */}
                <div className="flex items-center mb-4 border-b border-white/10 pb-2">
                  <Terminal className="h-5 w-5 text-accent-400 mr-2" />
                  <span className="text-light/80 text-sm">xbesh_contest.js</span>
                </div>
                
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex">
                    <span className="text-primary-400 mr-2">1</span>
                    <span className="text-accent-300">const</span>
                    <span className="text-light/80 mx-2">contest</span>
                    <span className="text-accent-300">=</span>
                    <span className="text-light/80 mx-2">new</span>
                    <span className="text-primary-400">XBeshContest</span>
                    <span className="text-light/80">();</span>
                  </div>
                  <div className="flex">
                    <span className="text-primary-400 mr-2">2</span>
                    <span className="text-light/80"></span>
                  </div>
                  <div className="flex">
                    <span className="text-primary-400 mr-2">3</span>
                    <span className="text-accent-300">await</span>
                    <span className="text-light/80 mx-2">contest.register</span>
                    <span className="text-primary-400">(</span>
                    <span className="text-success-400">'affiliateId'</span>
                    <span className="text-light/80">,</span>
                    <span className="text-success-400 ml-2">'email'</span>
                    <span className="text-primary-400">)</span>
                    <span className="text-light/80">;</span>
                  </div>
                  <div className="flex">
                    <span className="text-primary-400 mr-2">4</span>
                    <span className="text-light/80"></span>
                  </div>
                  <div className="flex">
                    <span className="text-primary-400 mr-2">5</span>
                    <span className="text-accent-300">const</span>
                    <span className="text-light/80 mx-2">prize</span>
                    <span className="text-accent-300">=</span>
                    <span className="text-success-400 mx-2">'$500'</span>
                    <span className="text-light/80">;</span>
                  </div>
                  <div className="flex">
                    <span className="text-primary-400 mr-2">6</span>
                    <span className="text-light/80"></span>
                  </div>
                  <div className="flex">
                    <span className="text-primary-400 mr-2">7</span>
                    <span className="text-accent-300">if</span>
                    <span className="text-primary-400">(</span>
                    <span className="text-light/80">contest.sales</span>
                    <span className="text-accent-300">{'>'}</span>
                    <span className="text-light/80">competitors.sales</span>
                    <span className="text-primary-400">)</span>
                    <span className="text-light/80 mx-2">{`{`}</span>
                  </div>
                  <div className="flex">
                    <span className="text-primary-400 mr-2">8</span>
                    <span className="text-light/80 ml-4">you.receive</span>
                    <span className="text-primary-400">(</span>
                    <span className="text-light/80">prize</span>
                    <span className="text-primary-400">)</span>
                    <span className="text-light/80">;</span>
                  </div>
                  <div className="flex">
                    <span className="text-primary-400 mr-2">9</span>
                    <span className="text-light/80">{`}`}</span>
                  </div>
                  
                  {/* Animated cursor */}
                  <div className="h-4 w-2 bg-accent-400 animate-pulse inline-block ml-4"></div>
                </div>
                
                {/* Floating UI elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary-500/30 rounded-lg border border-primary-400/30 flex items-center justify-center rotate-12 animate-float">
                  <Code className="h-6 w-6 text-primary-400" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-accent-500/30 rounded-lg border border-accent-400/30 flex items-center justify-center -rotate-12 animate-float" style={{ animationDelay: '1s' }}>
                  <Braces className="h-5 w-5 text-accent-400" />
                </div>
                
                <div className="absolute top-1/2 -right-6 w-8 h-8 bg-success-500/30 rounded-lg border border-success-400/30 flex items-center justify-center rotate-45 animate-float" style={{ animationDelay: '1.5s' }}>
                  <Database className="h-4 w-4 text-success-400" />
                </div>
                
                <div className="absolute bottom-1/3 -left-6 w-8 h-8 bg-primary-500/30 rounded-lg border border-primary-400/30 flex items-center justify-center -rotate-45 animate-float" style={{ animationDelay: '2s' }}>
                  <Server className="h-4 w-4 text-primary-400" />
                </div>
                
                <div className="absolute top-1/4 left-1/2 w-10 h-10 bg-accent-500/30 rounded-lg border border-accent-400/30 flex items-center justify-center rotate-12 animate-float" style={{ animationDelay: '0.5s' }}>
                  <Cpu className="h-5 w-5 text-accent-400" />
                </div>
              </div>
            </div>
            
            {/* Registration Form */}
            <div className="glass-card p-8 border-white/20 shadow-glass-lg gradient-border animate-glow">
              {formStatus === 'success' ? (
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-600/20 mb-4">
                    <CheckCircle className="h-8 w-8 text-success-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Registration Successful!</h3>
                  <p className="text-light/80 mb-6">
                    Thank you for registering for the XBesh Early-Bird Affiliate Contest. Check your email for confirmation and next steps.
                  </p>
                  <button 
                    onClick={() => {
                      setFormStatus(null);
                      setAffiliateId('');
                      setEmail('');
                    }}
                    className="btn-outline rounded-full px-6"
                  >
                    Register Another Affiliate
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-2">Register for the Contest</h2>
                    <p className="text-light/80">
                      Enter your details below to secure your spot and compete for the $500 Grand Prize
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="affiliateId" className="block text-sm font-medium text-light/90 mb-2">
                        JVZoo Affiliate ID <span className="text-error-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="affiliateId"
                          value={affiliateId}
                          onChange={(e) => setAffiliateId(e.target.value)}
                          className="w-full px-4 py-3 bg-dark-100/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 placeholder-white/30"
                          placeholder="Enter your JVZoo Affiliate ID"
                          required
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-light/90 mb-2">
                        Email Address <span className="text-error-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-dark-100/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 placeholder-white/30"
                          placeholder="Enter your email address"
                          required
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    {formStatus === 'error' && (
                      <div className="flex items-start p-4 bg-error-600/20 border border-error-500/30 rounded-xl">
                        <AlertCircle className="h-5 w-5 text-error-500 mr-3 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-error-400">{errorMessage}</p>
                      </div>
                    )}
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full btn-primary text-lg group rounded-full py-4 relative overflow-hidden ${isSubmitting ? 'opacity-80' : ''}`}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </span>
                          ) : (
                            <>
                              Lock In My Spot ⚡
                              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </span>
                        {!isSubmitting && (
                          <span className="absolute top-0 right-full w-full h-full bg-white/20 transform transition-transform duration-1000 ease-out animate-shine"></span>
                        )}
                      </button>
                    </div>
                  </form>
                  
                  <div className="mt-6 pt-6 border-t border-white/10 text-center">
                    <p className="text-sm text-light/60">
                      Time left in Early-Bird:
                    </p>
                    <div className="mt-3">
                      <CountdownTimer targetDate={registrationEndDate} />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent"></div>
    </section>
  );
};

export default Hero;
