import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Clock, CheckCircle, Trophy, Gift, Users, Check, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Enhanced video component with proper Vimeo embedding
const VideoPlayer = ({ videoId }: { videoId: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="aspect-video relative rounded-xl overflow-hidden group shadow-2xl glass-card">
      {/* Video iframe - actual embedding */}
      <iframe 
        className="absolute top-0 left-0 w-full h-full z-10"
        src={`https://player.vimeo.com/video/${videoId}?h=7ddcad5d72&autoplay=0&title=0&byline=0&portrait=0`}
        title="Vimeo video player"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        style={{ display: isLoading ? 'none' : 'block' }}
      />
      
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 bg-dark-300/90 flex items-center justify-center z-20">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <span className="text-primary-400">Loading video...</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Registration counter component
const RegistrationCounter = () => {
  return (
    <div className="mt-4 glass-card p-6 border border-primary/30 rounded-xl">
      <div className="text-center mb-3">
        <span className="text-sm uppercase tracking-wider text-gray-400 font-medium">
          Already Registered
        </span>
      </div>
      <div className="relative">
        <div className="text-4xl font-bold text-center gradient-text mb-2">
          187 / 200
        </div>
        <div className="h-3 w-full bg-dark-400/80 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary-600 to-accent-500 rounded-full"
            style={{ width: '93.5%' }}
          >
            <div className="w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-beam-slide"></div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center">
        <span className="text-xs text-accent-400">
          <Users className="inline-block w-3 h-3 mr-1" />
          Only 13 spots remaining
        </span>
      </div>
    </div>
  );
};

// Enhanced registration form with modern styling
const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated form submission
    setTimeout(() => {
      setFormStatus('success');
      setIsSubmitting(false);
    }, 1500);
  };
  
  if (formStatus === 'success') {
    return (
      <div className="bg-dark-200 p-8 rounded-2xl shadow-2xl border border-gray-700/50 h-full flex flex-col justify-center items-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-success-500/30 animate-ping-slow"></div>
          <div className="relative w-20 h-20 rounded-full bg-success-600/40 flex items-center justify-center border-2 border-success-500 shadow-[0_0_20px_rgba(0,196,140,0.4)]">
            <CheckCircle className="h-10 w-10 text-success-400" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white text-center">Registration Confirmed!</h3>
        <p className="text-gray-300 mb-8 text-center max-w-md">
          You're all set! We've sent confirmation details to your email. We can't wait to see you at the webinar!
        </p>
        <a href="#webinar-details" className="btn btn-primary text-lg">
          View Webinar Details
        </a>
      </div>
    );
  }
  
  return (
    <div className="bg-dark-200/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-700/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-600/20 rounded-full blur-3xl"></div>
      
      {/* Form header */}
      <div className="relative mb-6 text-center">
        <span className="inline-block px-3 py-1 text-xs bg-accent-500/20 text-accent-300 rounded-full mb-2 font-medium">
          Limited Time Offer
        </span>
        <h4 className="text-2xl font-bold mb-2 gradient-text">Reserve Your Spot Now</h4>
        <div className="h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mb-4"></div>
        <p className="text-gray-300">Enter your details to join us on May 7th at 2 PM EST</p>
      </div>
      
      {/* Form body */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          {/* Name input */}
          <div className="space-y-2">
            <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-300">
              Your Name <span className="text-pink-500 ml-1">*</span>
            </label>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-dark-400/90 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 shadow-inner" 
                  placeholder="Enter your full name" 
                  required 
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Email input */}
          <div className="space-y-2">
            <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-300">
              Email Address <span className="text-pink-500 ml-1">*</span>
            </label>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-dark-400/90 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 shadow-inner" 
                  placeholder="Enter your email address" 
                  required 
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Webinar info */}
          <div className="p-4 bg-gradient-to-r from-gray-800/90 to-gray-900/90 border border-gray-700/80 rounded-xl relative overflow-hidden mt-5">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -inset-[50%] z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-beam-slide"></div>
            </div>
            <div className="relative z-20">
              <div className="flex items-center justify-between border-b border-gray-700/50 pb-3 mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-500/30 border border-primary-500/50 flex items-center justify-center mr-3 shadow-md">
                    <Calendar className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Tuesday, May 7, 2025</p>
                    <p className="text-xs text-gray-400">2 PM EST / 11 AM PST</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-accent-500/20 text-accent-300 text-xs rounded-full">60min</span>
              </div>
              <div className="flex items-center mt-2 text-sm text-gray-300">
                <Users className="h-4 w-4 mr-2 text-primary-400" />
                <span>Join 200+ attendees</span>
                <span className="mx-2">•</span>
                <span className="text-success-400">Free Access</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="relative w-full py-4 px-6 rounded-xl overflow-hidden group mt-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl"></div>
          <div className="absolute -inset-1 rounded-xl opacity-70 group-hover:opacity-100 transition duration-500 blur-md bg-gradient-to-r from-primary-600 to-accent-600"></div>
          <div className="absolute inset-0.5 rounded-[10px] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-primary-500 to-accent-500"></div>
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute -inset-[100%] z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 motion-safe:animate-[shimmer_2s_infinite] translate-x-[-100%]"></div>
          </div>
          <div className="relative flex items-center justify-center gap-3 text-white font-semibold text-lg">
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
                <span className="tracking-wide">Reserve My Seat</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </>
            )}
          </div>
        </button>
        
        {/* Security notice */}
        <div className="flex items-center justify-center text-xs text-gray-500 mt-4">
          <svg className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Secure registration • 100% free</span>
        </div>
      </form>
    </div>
  );
};

// Animated countdown timer component
const CountdownTimer = () => {
  // Placeholder - replace with actual countdown logic
  return (
    <div className="flex items-center justify-center space-x-4">
      {['13', '05', '42', '18'].map((value, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-dark-300 border border-gray-700 rounded-lg flex items-center justify-center text-2xl font-bold text-white shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
            <span className="relative z-10">{value}</span>
          </div>
          <span className="text-xs text-gray-400 mt-1">
            {index === 0 ? 'Days' : index === 1 ? 'Hours' : index === 2 ? 'Minutes' : 'Seconds'}
          </span>
        </div>
      ))}
    </div>
  );
};

// Five-star rating component
const FiveStarRating = () => (
  <div className="flex items-center gap-1 mb-2">
    {[1, 2, 3, 4, 5].map((_, index) => (
      <Star key={index} size={16} className="fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

// Enhanced testimonial card
const TestimonialCard = ({ quote, author, role = '', image = '' }: { quote: string, author: string, role?: string, image?: string }) => (
  <div className="glass-card-hover p-6 relative">
    {/* Five-star rating */}
    <FiveStarRating />
    
    {/* Quote mark decoration */}
    <div className="absolute top-4 right-4 text-6xl text-primary-600/20 font-serif leading-none z-0">"</div>
    <div className="relative z-10">
      <p className="italic text-gray-200 mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 overflow-hidden border-2 border-primary-500/30 shadow-lg shadow-primary/10">
          {image ? (
            <img src={image} alt={author} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary-600/30 text-primary-300 font-bold text-xl">
              {author.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className="font-semibold text-primary-400">{author}</p>
          {role && <p className="text-sm text-gray-400">{role}</p>}
        </div>
      </div>
    </div>
  </div>
);

// Enhanced FAQ accordion
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border-b border-gray-700/50 py-5">
      <button 
        className="flex justify-between items-center w-full text-left text-lg hover:text-primary transition duration-200 font-medium group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="group-hover:translate-x-1 transition-transform duration-300">{question}</span>
        <span className={`p-1 rounded-full bg-gray-800 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? <ChevronUp className="h-5 w-5 text-primary-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}>
        <p className="text-gray-300 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// Enhanced feature card
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="glass-card-hover p-6 flex flex-col items-center text-center h-full group">
    <div className="icon-circle-md mb-4 bg-primary/10 border-primary/30 text-primary group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-2 text-primary">{title}</h4>
    <p className="text-gray-300">{description}</p>
  </div>
);

// Software logos display
const SoftwareLogos = () => {
  const logos = [
    { name: 'LeadsGorilla', logo: 'https://leadsgorilla.io/wp-content/uploads/2022/01/leadsgorilla2.png' },
    { name: 'CallFluent', logo: 'https://callflujent.app/wp-content/uploads/2022/11/callfluence-logo-without-tagline.png' },
    { name: 'Localio AI', logo: 'https://ailocal.io/wp-content/uploads/2023/07/AI-localio-light-1.png' },
    { name: 'Cretivio AI', logo: 'https://creativeai.site/wp-content/uploads/2023/08/creativio-1.png' },
    { name: 'xBesh', logo: '/xbesh_logo_white.png' }
  ];
  
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
      {logos.map((item, index) => (
        <div key={index} className="p-3 bg-dark-300/50 rounded-lg backdrop-blur-sm border border-white/5 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/20 hover:scale-105">
          <img src={item.logo} alt={item.name} className="h-8 md:h-10 object-contain" />
        </div>
      ))}
    </div>
  );
};

const WebinarRegistration: React.FC = () => {
  return (
    <div className="bg-dark text-light pt-20 overflow-x-hidden relative"> 
      {/* Background elements */}
      <div className="absolute inset-0 bg-dark pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20"></div>
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-600/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent-600/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* HERO SECTION */}
      <section id="hero-webinar" className="relative z-10 pt-12 pb-12">
        <div className="container mx-auto px-4">
          {/* Floating badge */}
          <div className="text-center mb-6">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-white/10 backdrop-blur border border-white/20 shadow-glass-sm animate-float">
              <p className="text-sm font-medium">
                <span className="text-accent-400 font-bold">xBesh</span> Live Webinar
              </p>
            </div>
          </div>
            
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 glow-text-strong max-w-5xl mx-auto leading-tight">
              Your Idea Ships in 60&nbsp;Minutes—Watch It Happen LIVE on May&nbsp;7
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto font-medium">
              Discover how total beginners are building & selling websites, e&#8209;com stores and SaaS platforms with a single AI prompt
            </h3>
          </div>

          {/* Video and Form side-by-side in a glass-effect container */}
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-4 md:p-6 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-600/20 rounded-full blur-3xl"></div>
              
              {/* Grid layout - Increased video size and added counter below */}
              <div className="grid lg:grid-cols-5 gap-6 items-start relative z-10">
                <div className="lg:col-span-3 w-full flex flex-col">
                  <VideoPlayer videoId="1080594333" />
                  <RegistrationCounter />
                </div>
                <div className="lg:col-span-2 w-full" id="registration-form-anchor">
                  <RegistrationForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* DATE/TIME STRIP - Enhanced with icon and more professional design */}
      <section id="webinar-details" className="bg-gradient-to-r from-dark-100/50 to-dark-200/50 py-6 border-y border-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="icon-circle-sm bg-primary-600/20 border-primary-500/30">
                <Calendar className="h-5 w-5 text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase font-medium">Date</p>
                <p className="text-lg font-semibold text-white">Tuesday, May 7, 2025</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="icon-circle-sm bg-accent-600/20 border-accent-500/30">
                <Clock className="h-5 w-5 text-accent-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 uppercase font-medium">Time</p>
                <p className="text-lg font-semibold text-white">2 PM EST / 11 AM PST / 7 PM BST</p>
              </div>
            </div>
            
            <a href="#registration-form-anchor" className="btn btn-primary text-white md:ml-6">
              Reserve My Seat (Free)
            </a>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="py-12">
        <div className="container mx-auto px-4">
          <div className="section-title mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Why You Should Attend This Live Session</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">Join us for an action-packed session where you'll witness the future of web development</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Clock className="h-6 w-6" />}
              title="60‑Second Demo" 
              description="See a live app go from blank screen to deployed URL—no code required." 
            />
            <FeatureCard 
              icon={<Gift className="h-6 w-6" />}
              title="Steal the Prompt File" 
              description="Copy/paste scripts that generate landing pages, checkouts & dashboards." 
            />
            <FeatureCard 
              icon={<Trophy className="h-6 w-6" />}
              title="One‑day Pricing" 
              description="All 5 upgrades (Black Vanta, DFY Command, 360 Agency, Reseller, Core) for $697—save 60%" 
            />
          </div>
        </div>
      </section>
      
      {/* HOST CREDIBILITY BLOCK - Updated with Adrian's new bio and image */}
      <section id="host" className="bg-dark-100/60 py-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-600/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-card p-6 md:p-8 max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 blur opacity-70"></div>
              <img 
                src="/adrian.jpg" 
                alt="Adrian Isfan" 
                className="relative w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg shadow-primary/30"
              />
            </div>
            
            <h3 className="text-3xl font-bold mb-3 glow-text">Adrian Isfan</h3>
            <p className="text-lg text-primary mb-6 font-medium">AI Tech Founder & 8 Figure Marketing Expert</p>
            
            <blockquote className="text-xl md:text-2xl italic text-gray-200 mb-8 relative">
              <div className="absolute top-0 left-0 text-6xl text-primary-600/20 font-serif leading-none -translate-y-6">"</div>
              <div className="absolute bottom-0 right-0 text-6xl text-primary-600/20 font-serif leading-none translate-y-2">"</div>
              <p className="relative z-10 px-8">I helped thousands of students and build 7 Figure SaaS Businesses for the last decade</p>
            </blockquote>
            
            <div className="mt-6">
              <p className="font-medium text-lg text-gray-300 mb-4">Founder behind Software like:</p>
              <SoftwareLogos />
            </div>
          </div>
        </div>
      </section>
      
      {/* WHAT YOU'LL LEARN SECTION */}
      <section id="learn" className="py-12">
        <div className="container mx-auto px-4">
          <div className="section-title mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary glow-text">In 60 Minutes You'll…</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Erase the Dev Bottleneck",
                description: "Use natural‑language prompts to generate code, database & hosting."
              },
              {
                title: "Monetize Before You Build",
                description: "Pre‑sell your idea with the Prompt → Proof → Pre‑Sale framework."
              },
              {
                title: "Clone the Exact Playbook",
                description: "Get Adrian's Prompt Vault + Rapid‑Launch Checklist."
              },
              {
                title: "Grab the Ultimate Bundle",
                description: "Lifetime access to every xBesh upgrade in a single license (no monthly)."
              }
            ].map((item, index) => (
              <div key={index} className="glass-card-hover p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent-500/20 mr-3 flex items-center justify-center">
                    <span className="text-accent-400 font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-accent">{item.title}</h4>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTDOWN & URGENCY BAR */}
      <section id="urgency" className="relative mt-2 mb-2">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-accent-500/90"></div>
        <div className="absolute inset-0 bg-noise opacity-10"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-pulse">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/80 mb-1">Webinar Starts In:</p>
                  <p className="text-2xl font-bold text-white text-shadow-lg">Limited Seats Available</p>
                </div>
              </div>
              
              <div>
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated beam effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[50%] z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-beam-slide"></div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - Enhanced with real images and 5-star ratings */}
      <section id="testimonials" className="py-12">
        <div className="container mx-auto px-4">
          <div className="section-title mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 glow-text">What Others Achieved</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="$3k MRR CRM built in one evening. The AI automation features saved me months of development time." 
              author="Ryan Phillips" 
              role="SaaS Founder"
              image="/Ryan Phillips.jpg"
            />
            <TestimonialCard 
              quote="211 clicks Day 1 from a link-hub I made in 8 minutes. Now at $1.2k/mo passive income." 
              author="Cindy Donavan" 
              role="Digital Creator"
              image="/cindy_donavan.jpg"
            />
            <TestimonialCard 
              quote="First funnel live in 34 minutes; $1,842 on launch day. This is the future of digital product creation." 
              author="Stoica Bogdan" 
              role="E-Commerce Entrepreneur"
              image="/Stoica Bogdan.jpg"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ SECTION - Fixed visibility */}
      <section id="faq" className="bg-dark-100/50 py-12">
        <div className="container mx-auto px-4">
          <div className="section-title mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary glow-text">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto glass-card p-6 md:p-8">
            <FAQItem 
              question="Do I need tech skills?" 
              answer="Not at all. If you can send a text, you can build with xBesh. Our AI handles all the technical complexity, you just provide the vision and direction. The platform is specifically designed to be accessible to complete beginners with no coding experience."
            />
            <FAQItem 
              question="Is it really free to attend?" 
              answer="Absolutely! The live workshop is 100% free. You'll only be offered the chance to purchase the discounted Ultimate Bundle after seeing the value first-hand. There's no obligation to buy anything."
            />
            <FAQItem 
              question="Will there be a replay?" 
              answer="Yes, a replay will be available for 48 hours after the live session. However, the exclusive $697 Ultimate Bundle pricing expires at midnight EST on May 7th, so attending live or watching the replay quickly is recommended!"
            />
            <FAQItem 
              question="What if I can't attend live?" 
              answer="Register anyway! We'll send the replay link directly to your email as soon as it's available. This ensures you don't miss out on the content and the limited-time offer."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section id="final-cta" className="pt-12 pb-12 relative overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-dark to-accent-900/30"></div>
        <div className="absolute inset-0 bg-noise opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary-500/10 blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-accent-500/10 blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text-strong">Ready to Ship Your Idea?</h2>
            
            <div className="glass-card p-6 mb-6">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center shadow-lg shadow-primary/20">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-white">Tuesday, May 7, 2025</p>
                  <p className="text-gray-300">2 PM EST / 11 AM PST / 7 PM BST</p>
                </div>
              </div>
              
              <a 
                href="#registration-form-anchor" 
                className="relative inline-block py-5 px-12 rounded-xl overflow-hidden group text-2xl font-bold"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl"></div>
                <div className="absolute -inset-1 rounded-xl opacity-70 group-hover:opacity-100 transition duration-500 blur-xl bg-gradient-to-r from-primary-600 to-accent-600"></div>
                <div className="absolute inset-0.5 rounded-[10px] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-primary-500 to-accent-500"></div>
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute -inset-[100%] z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-[shimmer_2s_infinite] translate-x-[-100%]"></div>
                </div>
                <span className="relative z-10 text-white flex items-center justify-center">
                  Reserve My Seat — FREE
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
              
              <p className="mt-4 flex items-center justify-center text-gray-300">
                <Check className="h-5 w-5 text-success-500 mr-2" />
                <span>30-Day Money-Back Guarantee on the bundle</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FOOTER DISCLAIMER - The full disclaimer text */}
      <div className="bg-black text-gray-600 text-xs py-6 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <p>
            Disclaimer: Please note that this product does not provide any guarantee of income or success. The results achieved by the product owner or any other individuals mentioned are not indicative of future success or earnings. This website is not affiliated with FaceBook or any of its associated entities. Once you navigate away from FaceBook, the responsibility for the content and its usage lies solely with the user. All content on this website, including but not limited to text, images, and multimedia, is protected by copyright law and the Digital Millennium Copyright Act. Unauthorized copying, duplication, modification, or theft, whether intentional or unintentional, is strictly prohibited. Violators will be prosecuted to the fullest extent of the law. We want to clarify that JVZoo serves as the retailer for the products featured on this site. JVZoo® is a registered trademark of BBC Systems Inc., a Florida corporation located at 1809 E. Broadway Street, Suite 125, Oviedo, FL 32765, USA, and is used with permission. The role of JVZoo as a retailer does not constitute an endorsement, approval, or review of these products or any claims, statements, or opinions used in their promotion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebinarRegistration; 