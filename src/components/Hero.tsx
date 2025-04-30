import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertCircle, Code, Terminal, Braces, Database, Server, Cpu, Trophy, Users, Clock, Check } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  // Registration end date: May 7, 2025, 23:59 EST
  const registrationEndDate = new Date('2025-05-08T04:59:00Z');
  
  // Social proof state
  const [affiliateCount, setAffiliateCount] = useState(97);
  const [recentJoins, setRecentJoins] = useState<string[]>([
    'john@example.com',
    'sarah@domain.com',
    'dev@company.io'
  ]);
  
  // Form state - Renamed affiliateId to name
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Process flow animation control
  const [currentStep, setCurrentStep] = useState(0);
  const [showCompletionCelebration, setShowCompletionCelebration] = useState(false);
  
  // Define the 3 key app building steps with more detailed information
  const buildSteps = [
    {
      title: "Voice Enabled Prompt",
      description: "Speak naturally to create your app",
      icon: "🎙️",
      color: "from-primary-600 to-primary-500"
    },
    {
      title: "Agentic AI Building",
      description: "AI builds your complete solution",
      icon: "🧠",
      color: "from-accent-600 to-accent-500"
    },
    {
      title: "Launch Live",
      description: "Instantly deploy to production",
      icon: "🚀",
      color: "from-success-600 to-success-500"
    }
  ];
  
  // Cycle through process steps automatically with improved sequencing
  useEffect(() => {
    const processTimer = setInterval(() => {
      setCurrentStep(prev => {
        const nextStep = (prev + 1) % 6;
        // When completing cycle, trigger celebration animation
        if (prev === 5 && nextStep === 0) {
          setShowCompletionCelebration(true);
          setTimeout(() => setShowCompletionCelebration(false), 4000);
        }
        return nextStep;
      });
    }, 3500); // Slightly faster cycle for better engagement
    
    return () => clearInterval(processTimer);
  }, []);
  
  // Simulate new affiliates joining periodically
  useEffect(() => {
    const timer = setInterval(() => {
      // Randomly increment affiliate count
      if (Math.random() > 0.7) {
        setAffiliateCount(prev => prev + 1);
        
        // Add a new random email to recent joins
        const domains = ['gmail.com', 'outlook.com', 'yahoo.com', 'aol.com', 'hotmail.com', 'proton.me'];
        const names = ['alex', 'jamie', 'taylor', 'jordan', 'casey', 'sam', 'riley', 'quinn'];
        
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomDomain = domains[Math.floor(Math.random() * domains.length)];
        const newEmail = `${randomName}${Math.floor(Math.random() * 1000)}@${randomDomain}`;
        
        setRecentJoins(prev => [newEmail, ...prev.slice(0, 2)]);
      }
    }, 4000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Form validation - Updated for name
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidName = (name: string) => name.trim().length > 0; // Simple check for non-empty name
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status
    setFormStatus(null);
    setErrorMessage('');
    
    // Validate inputs - Updated for name
    if (!isValidName(name)) {
      setFormStatus('error');
      setErrorMessage('Please enter your name');
      return;
    }
    
    if (!isValidEmail(email)) {
      setFormStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }
    
    // Set submitting state
    setIsSubmitting(true);
    
    try {
      // Send data to n8n webhook - Updated to LIVE URL and PUT method
      const response = await fetch('https://callflujent.app.n8n.cloud/webhook/e2649dd1-1c27-40fb-83ae-da6568e99046', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          timestamp: new Date().toISOString(),
          source: 'XBesh Affiliate Hackathon Landing Page'
        }),
      });
      
      if (!response.ok) {
        // Log more detailed error info if available
        let errorBody = 'Unknown error';
        try {
          errorBody = await response.text();
        } catch {}
        console.error('Webhook response error:', response.status, response.statusText, errorBody);
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      
      // Handle success
      setFormStatus('success');
      console.log('Form submitted successfully:', { name, email });
    } catch (error) {
      // Handle error
      setFormStatus('error');
      setErrorMessage('There was an error submitting your registration. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Social Sharing Links
  const shareUrl = window.location.href; // Or a specific landing page URL
  const shareTitle = "Join the XBesh $500 Early-Bird Affiliate Sprint!";
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  // Add other platforms as needed (e.g., Facebook)

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
            
            {/* Redesigned Headline */}
            <h1 className="mb-4 font-black font-poppins leading-none uppercase text-5xl md:text-6xl lg:text-7xl glow-text-strong">
              AFFILIATE HACKATHON
            </h1>
            <h2 className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl gradient-text">
              $500 COMPETITION
            </h2>
            
            {/* Redesigned Subheadline */}
            <p className="mb-8 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium tracking-wide text-shadow-md">
              Earn $500 Before Launch goes LIVE – Join the <span className="text-accent-400 font-bold">XBesh</span> Early-Bird Affiliate Sprint
            </p>
            
            {/* Enhanced $500 competition banner with better effects */}
            <div className="mb-10 py-6 px-8 relative overflow-hidden bg-gradient-to-r from-success-700/90 to-success-600/80 border-2 border-success-500 rounded-2xl shadow-[0_0_30px_rgba(0,220,130,0.5)]">
              {/* Animated light beams */}
              <div className="absolute -inset-10 bg-gradient-to-r from-success-500/0 via-success-300/30 to-success-500/0 skew-x-12 transform animate-beam-slide"></div>
              <div className="absolute -inset-10 bg-gradient-to-r from-success-500/0 via-success-400/20 to-success-500/0 -skew-x-12 transform animate-beam-slide animation-delay-1000"></div>
              
              {/* Particle effects */}
              <div className="absolute top-0 left-1/4 w-1 h-1 rounded-full bg-success-300 animate-float-particle"></div>
              <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-success-300 animate-float-particle animation-delay-500"></div>
              <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-success-300 animate-float-particle animation-delay-1500"></div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-success-500 border-4 border-success-400 golden-pulse">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1 tracking-wide text-shadow-lg">$500 GRAND PRIZE</h2>
                  <p className="text-success-50">Winner-takes-all competition for early affiliates</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content Grid - Using same height for both elements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
            {/* SaaS Builder UI with countdown timer below it */}
            <div className="flex flex-col relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 flex flex-col bg-gray-950 relative" style={{ maxHeight: "535px" }}>
                {/* Enhanced Browser-like header with dots */}
                <div className="flex items-center bg-gray-900 px-4 py-3 border-b border-gray-800/70">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                  </div>
                  
                  {/* More realistic URL bar with secure indicator */}
                  <div className="flex-grow">
                    <div className="w-full bg-gray-800/80 rounded-full h-6 flex items-center px-3 group hover:bg-gray-700/80 transition-colors cursor-text">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2 group-hover:animate-pulse"></div>
                      <div className="text-xs text-gray-400 font-mono flex items-center">
                        <span className="text-green-400 mr-1">https://</span>
                        app.xbesh.ai
                        <span className="text-primary-400">/builder</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Monetized Badge with tooltip */}
                  <div className="ml-4 px-3 py-1 bg-gradient-to-r from-amber-600/20 to-amber-500/20 rounded-full flex items-center gap-1.5 border border-amber-500/30 group relative cursor-help">
                    <span className="text-amber-400 text-sm">💰</span>
                    <span className="text-xs text-amber-300 font-medium">Monetization Ready</span>
                    <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 rounded-lg shadow-lg text-xs text-gray-300 w-48 pointer-events-none">
                      Your app is ready to accept payments with Stripe integration
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800 w-0 h-0"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-grow flex flex-col p-5 items-center justify-start relative overflow-hidden">
                  {/* Enhanced background gradient effects with animation */}
                  <div className="absolute -left-24 top-10 w-48 h-48 bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
                  <div className="absolute -right-24 bottom-10 w-48 h-48 bg-accent-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-success-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
                  
                  {/* Enhanced Logo and title with reflection effect */}
                  <div className="relative z-10 text-center mb-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4 shadow-glow-primary group relative overflow-hidden">
                      <span className="text-white text-3xl font-bold z-10 relative">X</span>
                      {/* Reflection effect */}
                      <div className="absolute inset-0 bg-white/20 transform -skew-y-12 translate-y-full group-hover:translate-y-1/2 transition-transform duration-700"></div>
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-white">xBesh AI SaaS Builder</h2>
                    <div className="flex items-center justify-center text-xs text-gray-400 space-x-2">
                      <span className={`px-2 py-1 rounded-full ${currentStep >= 0 && currentStep < 2 ? 'bg-primary-500/20 text-primary-300' : 'bg-transparent'} transition-colors duration-300`}>Voice</span>
                      <svg width="18" height="6" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64645L20.1716 0.464466C19.9763 0.269204 19.6597 0.269204 19.4645 0.464466C19.2692 0.659728 19.2692 0.976311 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.7308 19.9763 7.7308 20.1716 7.53553L23.3536 4.35355ZM0 4.5H23V3.5H0V4.5Z" fill={currentStep >= 0 && currentStep < 4 ? "#7B61FF" : "#4A5568"}/>
                      </svg>
                      <span className={`px-2 py-1 rounded-full ${currentStep >= 2 && currentStep < 4 ? 'bg-accent-500/20 text-accent-300' : 'bg-transparent'} transition-colors duration-300`}>Build</span>
                      <svg width="18" height="6" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64645L20.1716 0.464466C19.9763 0.269204 19.6597 0.269204 19.4645 0.464466C19.2692 0.659728 19.2692 0.976311 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.7308 19.9763 7.7308 20.1716 7.53553L23.3536 4.35355ZM0 4.5H23V3.5H0V4.5Z" fill={currentStep >= 4 ? "#00E5FF" : "#4A5568"}/>
                      </svg>
                      <span className={`px-2 py-1 rounded-full ${currentStep >= 4 ? 'bg-success-500/20 text-success-300' : 'bg-transparent'} transition-colors duration-300`}>Launch</span>
                    </div>
                  </div>
                  
                  {/* Enhanced progress indicator with advanced console messages - FIXED TO SHOW FULL MESSAGES */}
                  <div className="w-full max-w-md relative z-10 mb-6">
                    <div className="py-2 px-4 bg-gray-800/80 rounded-lg text-center text-sm text-gray-300 font-mono flex items-center justify-center mb-3 h-8 overflow-hidden backdrop-blur-sm border border-gray-700/50">
                      <div className={`w-2 h-2 rounded-full ${currentStep === 5 ? 'bg-green-500' : 'bg-primary-500'} animate-pulse mr-2`}></div>
                      <div className="console-message-container h-5 relative whitespace-nowrap text-xs">
                        {[
                          "Initializing voice recognition...",
                          "Processing audio input...",
                          "Generating components...",
                          "Optimizing code structure...",
                          "Deploying to cloud...",
                          "App successfully launched! ✓"
                        ].map((message, index) => (
                          <div 
                            key={index} 
                            className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${currentStep === index ? 'opacity-100' : 'opacity-0'}`}
                          >
                            {message}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="h-2.5 w-full bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/50 p-0.5">
                      <div 
                        className="h-full bg-gradient-to-r from-primary-600 via-accent-500 to-success-500 rounded-full transition-all duration-1000 ease-in-out relative"
                        style={{width: `${Math.min(100, (currentStep + 1) * 20)}%`}}
                      >
                        {/* Animated particles in progress bar */}
                        <div className="absolute inset-0 overflow-hidden">
                          <div className="absolute w-1 h-1 rounded-full bg-white/80 top-1/2 -translate-y-1/2 animate-ping-slow" style={{left: '20%'}}></div>
                          <div className="absolute w-1 h-1 rounded-full bg-white/80 top-1/2 -translate-y-1/2 animate-ping-slow" style={{left: '70%', animationDelay: '0.7s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced feature highlight cards for the 3-step process */}
                  <div className="w-full max-w-md relative z-10 mb-6">
                    <div className="grid grid-cols-3 gap-3">
                      {buildSteps.map((step, index) => {
                        const isActive = (currentStep >= index*2 && currentStep < (index+1)*2) || (index === 2 && currentStep >= 4);
                        const isCompleted = (index === 0 && currentStep >= 2) || (index === 1 && currentStep >= 4) || (index === 2 && currentStep === 5);
                        
                        return (
                          <div 
                            key={index}
                            className={`relative p-0.5 rounded-lg transition-all duration-500 ${
                              isActive ? 'scale-105 z-10' : 'scale-100 z-0'
                            } ${
                              isCompleted ? 'bg-gradient-to-br ' + step.color : 'bg-gray-800/60'
                            }`}
                          >
                            <div className="bg-gray-900 rounded-md p-3 h-full flex flex-col items-center backdrop-blur-sm">
                              {/* Animated check mark for completed steps */}
                              {isCompleted && (
                                <div className="absolute -top-2 -right-2 bg-success-500 rounded-full p-1 border-2 border-gray-900 animate-bounce" style={{animationDuration: '2s'}}>
                                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                                </div>
                              )}
                              
                              <div className={`text-lg mb-1 ${isActive ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
                                {step.icon}
                              </div>
                              <h4 className={`text-xs font-semibold mb-1 text-center ${isCompleted ? 'text-primary-300' : isActive ? 'text-white' : 'text-gray-400'}`}>
                                {step.title}
                              </h4>
                              <p className="text-[10px] text-center text-gray-500">
                                {step.description}
                              </p>
                              
                              {/* Pulse animation for active step */}
                              {isActive && !isCompleted && (
                                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br opacity-50 blur-sm animate-pulse-slow" style={{
                                  background: `linear-gradient(to bottom right, ${
                                    index === 0 ? '#6A4EF5, #7B61FF' : 
                                    index === 1 ? '#00C4DB, #00E5FF' : 
                                    '#00C48C, #00FFAF'
                                  })`
                                }}></div>
                          )}
                        </div>
                          </div>
                        );
                      })}
                    </div>
                      </div>
                      
                  {/* Enhanced visual representation of the building process */}
                  <div className="w-full max-w-md relative z-10">
                    <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/40 backdrop-blur-sm">
                      {/* Current build phase visualization with animated effects */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${currentStep === 5 ? 'bg-green-500' : 'bg-primary-500'} relative`}>
                            {/* Ping animation */}
                            <div className={`absolute inset-0 rounded-full ${currentStep === 5 ? 'bg-green-500' : 'bg-primary-500'} animate-ping opacity-75`}></div>
                          </div>
                          <span className="text-xs text-gray-300 font-medium">
                            {currentStep === 5 ? 'Build Complete' : `Phase ${currentStep + 1}/6`}
                          </span>
                        </div>
                        <span className="text-xs text-accent-400 font-mono">{Math.min(100, Math.round((currentStep + 1) * 16.7))}% complete</span>
                      </div>
                      
                      {/* App visualization with dynamic components based on current step */}
                      <div className={`relative p-3 mb-3 rounded bg-gray-900/80 border border-gray-800/60 ${showCompletionCelebration ? 'animate-pulse-highlight' : ''}`}>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                              <span className="text-[8px] text-white font-bold">X</span>
                            </div>
                            <span className="text-xs text-gray-300 font-medium">Your SaaS App</span>
                          </div>
                          <div className="flex gap-1">
                            <div className="w-4 h-4 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M12 5V19" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </div>
                            <div className="w-4 h-4 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12H21" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </div>
                          </div>
                        </div>
                        
                        {/* App component visualization grid - dynamically shows build progress */}
                        <div className="grid grid-cols-6 gap-1.5">
                          {Array.from({length: 12}).map((_, index) => {
                            // Calculate if this component should be rendered based on current step
                            const shouldBeRendered = index < Math.min(12, Math.round((currentStep + 1) * 2.5));
                            const isCurrentlyBuilding = index === Math.min(11, Math.round((currentStep + 1) * 2.5)) - 1 && currentStep < 5;
                            
                            return (
                              <div 
                                key={index} 
                                className={`aspect-square rounded transition-all duration-300 ${
                                  !shouldBeRendered ? 'bg-gray-800/30' :
                                  isCurrentlyBuilding ? 'bg-accent-600/20 border border-accent-600/40' :
                                  'bg-primary-600/20 border border-primary-600/30'
                                }`}
                              >
                                {shouldBeRendered && (
                                  <div className="w-full h-full flex items-center justify-center">
                                    {isCurrentlyBuilding ? (
                                      <div className="w-2 h-2 rounded-full bg-accent-500 animate-ping"></div>
                                    ) : (
                                      <svg className="w-2 h-2 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                                )}
                      </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      {/* Technology stack being used - Dynamic based on current step */}
                      <div className="flex flex-wrap gap-2">
                        {[
                          { name: "React", color: "bg-blue-600/20 border-blue-600/30 text-blue-400" },
                          { name: "TypeScript", color: "bg-blue-500/20 border-blue-500/30 text-blue-300" },
                          { name: "Node.js", color: "bg-green-600/20 border-green-600/30 text-green-400" },
                          { name: "MongoDB", color: "bg-green-700/20 border-green-700/30 text-green-500" },
                          { name: "Stripe", color: "bg-purple-600/20 border-purple-600/30 text-purple-400" },
                          { name: "OpenAI", color: "bg-teal-600/20 border-teal-600/30 text-teal-400" }
                        ].map((tech, index) => {
                          // Only show technologies that have been "added" based on current step
                          const isAdded = index < Math.min(6, Math.round((currentStep + 1)));
                          if (!isAdded) return null;
                          
                          return (
                            <span 
                              key={index} 
                              className={`text-[10px] px-2 py-0.5 rounded-full border ${tech.color} ${index === Math.min(5, currentStep) ? 'animate-pulse' : ''}`}
                            >
                              {tech.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced footer with live indicator and real-time stats */}
                <div className="bg-gray-900/90 py-2 px-5 border-t border-gray-800/50">
                  <div className="flex items-center">
                    <div className="flex items-center space-x-2 bg-gray-950 py-1 px-3 rounded-full">
                      <div className="relative">
                        <div className={`w-2 h-2 rounded-full ${currentStep === 5 ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                        <div className={`absolute inset-0 w-2 h-2 rounded-full ${currentStep === 5 ? 'bg-green-500' : 'bg-amber-500'} animate-ping opacity-75`}></div>
                      </div>
                      <span className="text-xs text-white font-medium">
                        {currentStep === 5 ? 'Live' : currentStep < 2 ? 'Processing Voice' : currentStep < 4 ? 'AI Building' : 'Deploying'}
                      </span>
                    </div>
                    
                    {/* Dynamic server stats animation */}
                    <div className="ml-auto flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <div className="w-1 h-3 bg-gray-800 rounded-sm">
                          <div 
                            className="w-full bg-primary-500 rounded-sm transition-all duration-300" 
                            style={{height: `${30 + Math.random() * 70}%`}}
                          ></div>
                        </div>
                        <div className="w-1 h-3 bg-gray-800 rounded-sm">
                          <div 
                            className="w-full bg-primary-500 rounded-sm transition-all duration-300" 
                            style={{height: `${30 + Math.random() * 70}%`}}
                          ></div>
                        </div>
                        <div className="w-1 h-3 bg-gray-800 rounded-sm">
                          <div 
                            className="w-full bg-primary-500 rounded-sm transition-all duration-300" 
                            style={{height: `${30 + Math.random() * 70}%`}}
                          ></div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 font-mono">
                        {currentStep === 5 ? '0.4ms' : (Math.random() * 100).toFixed(1) + 'ms'}
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              {/* Countdown Timer moved under browser window */}
              <div className="mt-6 text-center pt-4 border-t border-gray-800/30">
                <div className="inline-block px-3 py-1 text-xs bg-primary-500/20 text-primary-300 rounded-full mb-2 font-medium">
                  Early-Bird Closing Soon
                </div>
                <p className="text-sm text-gray-300 mb-2 font-medium flex items-center justify-center">
                  <svg className="w-4 h-4 mr-1.5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Time remaining:
                </p>
                <div className="p-1 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50">
                  <CountdownTimer targetDate={registrationEndDate} />
                </div>
              </div>
              
              {/* FLOATING ICONS OUTSIDE THE BROWSER WINDOW */}
              <div className="absolute -top-10 -right-10 w-16 h-16 bg-primary-600/90 rounded-lg border-2 border-primary-400/80 flex items-center justify-center rotate-12 animate-float-element shadow-glow-primary z-20 backdrop-blur-sm">
                <div className="text-white text-xl">{buildSteps[0].icon}</div>
              </div>
              
              <div className="absolute -bottom-16 -left-8 w-14 h-14 bg-accent-600/90 rounded-lg border-2 border-accent-400/80 flex items-center justify-center -rotate-12 animate-float-element shadow-glow-accent z-20 backdrop-blur-sm" style={{ animationDelay: '1s' }}>
                <div className="text-white text-xl">{buildSteps[1].icon}</div>
              </div>
              
              <div className="absolute top-1/4 -right-12 w-16 h-16 bg-success-600/90 rounded-lg border-2 border-success-400/80 flex items-center justify-center rotate-6 animate-float-element shadow-glow-success z-20 backdrop-blur-sm" style={{ animationDelay: '2s' }}>
                <div className="text-white text-xl">{buildSteps[2].icon}</div>
              </div>
              
              <div className="absolute bottom-1/3 -left-10 w-12 h-12 bg-purple-600/80 rounded-full border-2 border-purple-400/80 flex items-center justify-center rotate-0 animate-float-element shadow-glow-primary z-20 backdrop-blur-sm" style={{ animationDelay: '3s' }}>
                <div className="text-white text-lg">⚡</div>
              </div>
            </div>
            
            {/* Registration Form - Right Side */}
            <div className="flex flex-col">
              {/* Enhanced Registration Form Header */}
              <div className="text-center mb-6 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 to-accent-600/20 blur-lg rounded-xl"></div>
                <div className="relative">
                  <span className="inline-block px-3 py-1 text-xs bg-accent-500/20 text-accent-300 rounded-full mb-2 font-medium">
                    Limited Time Opportunity
                  </span>
                  <h2 className="text-3xl font-bold mb-2 text-white tracking-wide glow-text">
                    Join The Competition
                  </h2>
                  <div className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mb-3"></div>
                  <p className="text-gray-300 max-w-sm mx-auto">
                    Enter your details below to secure your spot and compete for the <span className="text-success-400 font-bold">$500 Grand Prize</span>
                  </p>
                </div>
              </div>
              
              {/* Enhanced Registration Form - IMPROVED TO MATCH BROWSER WINDOW STYLE */}
              <div className="rounded-xl overflow-hidden shadow-glow-form border-2 border-gray-700/80 bg-gray-950 flex flex-col backdrop-blur-sm" style={{ maxHeight: "560px" }}>
                {/* Browser-like header to match the left side - Conditional Badge */}
                <div className="flex items-center bg-gray-900 px-4 py-3 border-b border-gray-800/70">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-grow">
                    <div className="w-full bg-gray-800/80 rounded-full h-6 flex items-center px-3">
                      <div className={`w-2 h-2 rounded-full mr-2 ${formStatus === 'success' ? 'bg-green-500' : 'bg-primary-500'}`}></div>
                      <div className="text-xs text-gray-400 font-mono">
                        {formStatus === 'success' ? 'secure.xbesh.ai/completed' : 'secure.xbesh.ai/register'}
                      </div>
                    </div>
                  </div>
                  {/* Conditional Badge: Secure vs Confirmed */}
                  {formStatus === 'success' ? (
                     <div className="ml-4 px-3 py-1 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full flex items-center gap-1.5 border border-green-500/30">
                      <span className="text-green-400 text-sm">✅</span>
                      <span className="text-xs text-green-300 font-medium">Confirmed</span>
                    </div>
                  ) : (
                    <div className="ml-4 px-3 py-1 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full flex items-center gap-1.5 border border-green-500/30">
                      <span className="text-green-400 text-sm">🔒</span>
                      <span className="text-xs text-green-300 font-medium">Secure</span>
                    </div>
                  )}
                </div>
                
                {formStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-10 px-6 bg-gradient-to-b from-gray-900 to-gray-950 flex-grow">
                    {/* Success animation circle */}
                    <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                      <div className="absolute w-full h-full rounded-full bg-success-600/20 animate-ping-slow"></div>
                      <div className="absolute w-full h-full rounded-full bg-success-600/30 scale-75 animate-ping-slow" style={{ animationDelay: '0.5s' }}></div>
                      <div className="relative w-16 h-16 rounded-full bg-success-600/40 flex items-center justify-center border-2 border-success-500 shadow-[0_0_20px_rgba(0,196,140,0.4)]">
                        <CheckCircle className="h-8 w-8 text-success-400" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-white text-center">Registration Confirmed!</h3>
                    {/* Updated success message with sharing prompt */}
                    <p className="text-gray-300 mb-6 text-center max-w-md text-sm">
                      You're in! Check your email for details. Why not share the excitement with your network?
                    </p>
                    
                    {/* Social Sharing Buttons */}
                    <div className="flex space-x-4 mb-8">
                      <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" title="Share on Twitter" className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center cursor-pointer hover:bg-blue-600/30 transition-colors">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.04C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.71 0-1.37-.22-1.95-.54v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.01-.06C2.64 18.45 4.27 19 6.12 19c7.34 0 11.35-6.08 11.35-11.35 0-.17 0-.34-.01-.51.78-.57 1.45-1.28 1.99-2.08z"></path></svg>
                      </a>
                      <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" title="Share on LinkedIn" className="w-10 h-10 rounded-full bg-blue-800/20 border border-blue-700/30 flex items-center justify-center cursor-pointer hover:bg-blue-800/30 transition-colors">
                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                      </a>
                      {/* Add GitHub or other icons similarly */}
                    </div>
                    
                    {/* Button to navigate to confirmation page, passing state */}
                    <button 
                      onClick={() => navigate('/confirmed-hackathon-registration', { state: { participantName: name, participantEmail: email } })} 
                      className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-full hover:from-primary-500 hover:to-accent-400 transition-all duration-300 font-medium hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark focus:ring-primary-400"
                    >
                      Next Step...
                    </button>
                    {/* Text under the button */}
                    <p className="text-xs text-gray-400 mt-4 text-center max-w-xs">
                      VIP Affiliate Strategies, Resources, and ideas to win the $500 Hackathon await on the next page!
                    </p>
                  </div>
                ) : (
                  <div className="bg-gradient-to-b from-gray-900 to-gray-950 flex flex-col h-full">
                    {/* Form Body */}
                    <form onSubmit={handleSubmit} className="p-6 flex-grow">
                      {/* ... ALL the form content from before goes here ... */}
                      {/* Name Input, Email Input, Scarcity Card, Error Message, Button, Security Text */} 
                      <div className="space-y-6 h-full flex flex-col">
                        {/* Name Input */}  
                        <div className="space-y-2">
                          <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-300">Your Name <span className="text-pink-500 ml-1">*</span><span className="ml-auto text-xs text-gray-500 bg-gray-800/50 px-2 py-0.5 rounded">Required</span></label>
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                            <div className="relative">
                              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 pl-10 bg-gray-800/90 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 shadow-inner" placeholder="Enter your full name" required />
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>
                              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"><div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div></div>
                            </div>
                          </div>
                        </div>
                        {/* Email Input */}  
                        <div className="space-y-2">
                          <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-300">Email Address <span className="text-pink-500 ml-1">*</span><span className="ml-auto text-xs text-gray-500 bg-gray-800/50 px-2 py-0.5 rounded">Required</span></label>
                          <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                            <div className="relative">
                              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 pl-10 bg-gray-800/90 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 shadow-inner" placeholder="Enter your email address" required />
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"><div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div></div>
                            </div>
                          </div>
                        </div>
                        {/* Scarcity Card */}  
                        <div className="p-4 bg-gradient-to-r from-gray-800/90 to-gray-900/90 border border-gray-700/80 rounded-xl relative overflow-hidden">
                          <div className="absolute inset-0 overflow-hidden"><div className="absolute -inset-[50%] z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-beam-slide"></div></div>
                          <div className="relative z-20">
                            <div className="flex items-center border-b border-gray-700/50 pb-3 mb-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-600/30 to-primary-600/30 border border-accent-500/30 flex items-center justify-center mr-3 shadow-glow-accent-sm"><Trophy className="h-5 w-5 text-accent-400" /></div>
                            <div className="flex-grow">
                                <div className="flex items-center justify-between"><p className="text-sm font-medium text-gray-200">Competition closes soon</p><span className="px-2 py-0.5 bg-red-900/40 border border-red-700/40 rounded text-xs text-red-400 font-medium animate-pulse">Ending Soon</span></div>
                                <p className="text-xs text-gray-400 mt-0.5">Join {affiliateCount} others competing for the $500 prize</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mb-1.5"><span className="text-xs text-gray-400">Filling quickly</span><span className="text-xs text-yellow-400/90 font-semibold">{Math.max(0, 150 - affiliateCount)} spots left</span></div>
                            <div className="h-2 w-full bg-gray-800/80 rounded-full overflow-hidden border border-gray-700/50">
                              <div className="h-full bg-gradient-to-r from-accent-500 to-primary-500 rounded-full relative" style={{ width: `${Math.min(100, (affiliateCount / 150) * 100)}%` }}><div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-white/30 to-accent-500/0 animate-beam-slide" style={{animationDuration: '2s'}}></div></div>
                              </div>
                            <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-700/30">
                              <div className="flex items-center"><div className="relative mr-2 w-2 h-2"><div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div><div className="absolute inset-0 bg-green-500 rounded-full"></div></div><span className="text-xs text-green-400">Live updates</span></div>
                              <div className="text-xs text-gray-500 flex items-center"><Users className="h-3 w-3 mr-1 text-gray-500" /><span>{affiliateCount} registered</span></div>
                            </div>
                          </div>
                        </div>
                        {/* Error Message */}  
                        {formStatus === 'error' && (
                          <div className="flex items-start p-4 bg-pink-950/60 border border-pink-800/70 rounded-xl">
                            <AlertCircle className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-pink-300">{errorMessage}</p>
                          </div>
                        )}
                        {/* Submit Button & Security Text */}  
                        <div className="pt-4 mt-auto space-y-4">
                          <button type="submit" disabled={isSubmitting} className="relative w-full py-4 px-6 rounded-xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl"></div>
                            <div className="absolute -inset-1 rounded-xl opacity-70 group-hover:opacity-100 transition duration-500 blur-md bg-gradient-to-r from-primary-600 to-purple-600"></div>
                            <div className="absolute inset-0.5 rounded-[10px] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-primary-500 to-purple-500"></div>
                            <div className="absolute inset-0 rounded-xl overflow-hidden"><div className="absolute -inset-[100%] z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 motion-safe:animate-[shimmer_2s_infinite] translate-x-[-100%]"></div></div>
                            <div className="relative flex items-center justify-center gap-3 text-white font-semibold text-lg">
                              {isSubmitting ? (
                                <span className="flex items-center">
                                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                  Processing...
                                </span>
                              ) : (
                                <>
                                  <span className="tracking-wide">Lock In My Spot</span>
                                  <span className="text-yellow-300 text-xl">⚡</span>
                                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </>
                              )}
                            </div>
                          </button>
                          {/* Updated Security message with icon and spacing */}
                          <div className="flex items-center justify-center text-xs text-gray-500 pt-4">
                            <svg className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Your Data Privacy is Secured</span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Celebration confetti effect when build completes - POSITIONED FULL PAGE */}
      {showCompletionCelebration && (
        <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
          {Array.from({length: 60}).map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: ['#7B61FF', '#00E5FF', '#00C48C', '#FFFFFF', '#FFD700'][Math.floor(Math.random() * 5)],
                left: `${Math.random() * 100}%`,
                top: `-10%`,
                width: `${6 + Math.random() * 6}px`,
                height: `${6 + Math.random() * 6}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `confetti-fall ${3 + Math.random() * 3}s linear infinite`
              }}
            ></div>
          ))}
        </div>
      )}
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent"></div>
    </section>
  );
};

export default Hero;
