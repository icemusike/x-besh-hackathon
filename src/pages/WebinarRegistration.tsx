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

// Modified RegistrationCounter component to be animated and dynamic
const RegistrationCounter = () => {
  const [count, setCount] = useState(187);
  const [recentJoins, setRecentJoins] = useState<{name: string, time: string}[]>([
    {name: "John Smith", time: "2 min ago"},
    {name: "Sarah Connor", time: "5 min ago"},
    {name: "David Green", time: "8 min ago"}
  ]);

  useEffect(() => {
    // Slowly increment the counter at random intervals
    const timer = setInterval(() => {
      // Only increment with 30% probability to make it seem more natural
      if (Math.random() < 0.3 && count < 197) {
        setCount(prev => prev + 1);
        
        // Add a new random name to recent joins
        const firstNames = ['Alex', 'Jamie', 'Taylor', 'Jordan', 'Casey', 'Sam', 'Riley', 'Morgan', 'Robin', 'Avery', 'Charlie'];
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Taylor', 'Clark'];
        
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const fullName = `${randomFirstName} ${randomLastName}`;
        
        setRecentJoins(prev => [{
          name: fullName,
          time: "Just now"
        }, ...prev.slice(0, 2).map(item => ({
          ...item,
          time: item.time === "Just now" ? "1 min ago" : 
                item.time === "1 min ago" ? "2 min ago" : 
                item.time === "2 min ago" ? "5 min ago" : item.time
        }))]);
      }
    }, 5000); // Check every 5 seconds
    
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="glass-card p-6 border border-primary/30 rounded-xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <div className="text-center md:text-left mb-3">
            <span className="text-sm uppercase tracking-wider text-gray-400 font-medium">
              Already Registered
            </span>
          </div>
          <div className="relative">
            <div className="text-4xl font-bold text-center md:text-left gradient-text mb-2">
              {count} / 200
            </div>
            <div className="h-3 w-full bg-dark-400/80 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary-600 to-accent-500 rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${(count / 200) * 100}%` }}
              >
                <div className="w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-beam-slide"></div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-accent-400">
                <Users className="inline-block w-3 h-3 mr-1" />
                Only {200 - count} spots remaining
              </span>
              <span className="text-xs text-success-400 animate-pulse">Live updating</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 md:max-w-md">
          {/* Recent joins animation with names instead of emails */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent-500/20 border border-accent-500/50 flex items-center justify-center flex-shrink-0">
              <Users className="h-5 w-5 text-accent-400" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-300 mb-1">Recent Registrations:</div>
              <div className="bg-dark-400/30 rounded-md p-2 h-8 overflow-hidden">
                <div className="text-xs text-gray-400 flex items-center">
                  <div className="overflow-hidden h-5 relative w-full">
                    {recentJoins.map((person, i) => (
                      <div key={person.name} className="absolute left-0 transition-all duration-500 ease-in-out w-full" style={{
                        opacity: i === 0 ? 1 : 0,
                        transform: `translateY(${i * 20}px)`,
                      }}>
                        <div className="flex justify-between">
                          <span className="font-medium text-primary-300">{person.name}</span>
                          <span className="text-gray-500 text-xs">{person.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <p className="text-gray-300">Enter your details to join us on May 7, 2025 at 2 PM EST</p>
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

// Animated countdown timer component with real countdown to May 7, 2025, 2 PM EST
const CountdownTimer = () => {
  const targetDate = new Date('May 7, 2025 14:00:00 EDT').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days.toString().padStart(2, '0'),
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0')
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4">
      {Object.entries(timeLeft).map(([key, value], index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-dark-300 border border-gray-700 rounded-lg flex items-center justify-center text-2xl font-bold text-white shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
            <span className="relative z-10">{value}</span>
          </div>
          <span className="text-xs text-gray-400 mt-1 capitalize">
            {key}
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

const WebinarRegistration: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <div className="bg-dark text-light overflow-x-hidden relative"> 
      {/* Background elements */}
      <div className="absolute inset-0 bg-dark pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20"></div>
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-600/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent-600/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-300/80 backdrop-blur-lg shadow-lg border-b border-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/xbesh_logo_white.png" alt="xBesh Logo" className="h-8" />
            </div>
            
            {/* Navigation Links - Desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium">
                Early Access
              </Link>
              <a href="https://access.xbesh.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium">
                Golden Keys
              </a>
            </nav>
            
            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <a href="#registration-form-anchor" className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white py-2 px-5 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-primary/20 flex items-center space-x-1">
                <span>Register for FREE</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white focus:outline-none" 
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`fixed w-full bg-dark-400/95 backdrop-blur-lg z-40 shadow-lg transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'top-16 opacity-100' : '-top-full opacity-0'}`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium py-2 border-b border-gray-700/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Early Access
            </Link>
            <a 
              href="https://access.xbesh.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium py-2 border-b border-gray-700/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Golden Keys
            </a>
            <a 
              href="#registration-form-anchor" 
              className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white py-3 px-5 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-primary/20 flex items-center justify-center space-x-2 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Register for FREE</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </div>
      
      {/* HERO SECTION */}
      <section id="hero-webinar" className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Floating badge with blinking red dot - improved spacing */}
          <div className="text-center mb-6">
            <div className="inline-block px-5 py-2 mb-4 rounded-full bg-white/10 backdrop-blur border border-white/20 shadow-glass-sm animate-float">
              <p className="text-sm font-medium flex items-center justify-center space-x-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-accent-400 font-bold tracking-wide">xBesh</span>
                <span className="text-white">Live Webinar</span>
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
              
              {/* Grid layout - Video and form side by side */}
              <div className="grid lg:grid-cols-5 gap-6 items-stretch relative z-10">
                <div className="lg:col-span-3 w-full flex flex-col h-full">
                  <VideoPlayer videoId="1081109634" />
                  
                  {/* Registration counter directly under video */}
                  <div className="mt-4 flex-shrink-0">
                    <RegistrationCounter />
                  </div>
                  
                  {/* Countdown timer in the left column */}
                  <div className="mt-4 flex-grow glass-card p-5 border border-primary-500/30 rounded-xl text-center">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex items-center mb-3">
                        <Clock className="h-5 w-5 text-primary-400 mr-2" />
                        <h4 className="text-xl font-bold text-primary-400">Live Workshop Starting In:</h4>
                      </div>
                      <CountdownTimer />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 w-full h-full flex" id="registration-form-anchor">
                  <div className="w-full h-full">
                    <RegistrationForm />
                  </div>
                </div>
              </div>
              
              {/* Why This Webinar Is Different card - now full width below video and form */}
              <div className="mt-6 w-full">
                <div className="p-5 glass-card border border-accent/30 rounded-xl">
                  <h4 className="text-lg font-bold mb-4 text-accent text-center">Why This Webinar Is Different:</h4>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="flex flex-col">
                      <div className="flex items-center mb-2">
                        <div className="h-5 w-5 rounded-full bg-primary-500/20 mr-2 flex-shrink-0 flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary-500" />
                        </div>
                        <h5 className="text-primary-400 font-bold">See a Real‑Time Build‑Along</h5>
                      </div>
                      <p className="text-gray-300 pl-7">Adrian creates a CRM with log‑in, billing, and analytics before the timer hits zero.</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center mb-2">
                        <div className="h-5 w-5 rounded-full bg-primary-500/20 mr-2 flex-shrink-0 flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary-500" />
                        </div>
                        <h5 className="text-primary-400 font-bold">Co‑Creation Hot Seat</h5>
                      </div>
                      <p className="text-gray-300 pl-7">Drop your own 7‑word idea in chat; one attendee's concept gets built on the spot.</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center mb-2">
                        <div className="h-5 w-5 rounded-full bg-primary-500/20 mr-2 flex-shrink-0 flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary-500" />
                        </div>
                        <h5 className="text-primary-400 font-bold">Prompt Vault Giveaway</h5>
                      </div>
                      <p className="text-gray-300 pl-7">Walk away with the exact scripts that generate SaaS, e‑com, membership sites, and dashboards.</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center mb-2">
                        <div className="h-5 w-5 rounded-full bg-primary-500/20 mr-2 flex-shrink-0 flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary-500" />
                        </div>
                        <h5 className="text-primary-400 font-bold">10 FREE Lifetime Licenses</h5>
                      </div>
                      <p className="text-gray-300 pl-7">Randomly awarded during the first five minutes—must be present to win.</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center mb-2">
                        <div className="h-5 w-5 rounded-full bg-primary-500/20 mr-2 flex-shrink-0 flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary-500" />
                        </div>
                        <h5 className="text-primary-400 font-bold">Early‑Bird Bonuses</h5>
                      </div>
                      <p className="text-gray-300 pl-7">Exclusive bonuses and upgrades available only for live attendees who participate in the session</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center mb-2">
                        <div className="h-5 w-5 rounded-full bg-primary-500/20 mr-2 flex-shrink-0 flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary-500" />
                        </div>
                        <h5 className="text-primary-400 font-bold">Q&A Session with Co-Founders</h5>
                      </div>
                      <p className="text-gray-300 pl-7">Have all your burning questions answered during LIVE Session.</p>
                    </div>
                  </div>
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
      <section id="benefits" className="py-8">
        <div className="container mx-auto px-4">
          <div className="section-title mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Why You Should Reserve Your Seat?</h2>
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
              title="Early‑Bird Bonuses" 
              description="Exclusive bonuses and upgrades available only for live attendees who participate in the session" 
            />
          </div>
        </div>
      </section>
      
      {/* HOST CREDIBILITY BLOCK - Updated to show both hosts */}
      <section id="host" className="bg-dark-100/60 py-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-600/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white glow-text">Meet Your Hosts</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Madhav Bhandari Profile */}
            <div className="glass-card p-6 md:p-8 text-center h-full">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 blur opacity-70"></div>
                <img 
                  src="/madhav.jpg" 
                  alt="Madhav Bhandari" 
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg shadow-primary/30"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-1 glow-text">Madhav Bhandari</h3>
              <p className="text-lg text-primary mb-4 font-medium">Founder & CTO</p>
              
              <p className="text-gray-300 leading-relaxed">
                With over 15 years of experience in AI and machine learning, Madhav has led innovation at major technology companies before founding xBesh AI to revolutionize how businesses leverage artificial intelligence.
              </p>
            </div>
            
            {/* Adrian Isfan Profile */}
            <div className="glass-card p-6 md:p-8 text-center h-full">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 blur opacity-70"></div>
                <img 
                  src="/adrian.jpg" 
                  alt="Adrian Isfan" 
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg shadow-primary/30"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-1 glow-text">Adrian Isfan</h3>
              <p className="text-lg text-primary mb-4 font-medium">Founder & CMO</p>
              
              <p className="text-gray-300 leading-relaxed">
                Adrian brings extensive expertise in marketing and business growth strategies. His background in digital transformation and customer experience has helped numerous organizations successfully implement AI-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* WHAT YOU'LL LEARN SECTION */}
      <section id="learn" className="py-8">
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
      <section id="urgency" className="relative mt-1 mb-1">
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

      {/* TESTIMONIALS SECTION - Hidden as requested */}
      {/* 
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
      */}
      
      {/* FAQ SECTION - Fixed visibility */}
      <section id="faq" className="bg-dark-100/50 py-8">
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
      <section id="final-cta" className="pt-8 pb-8 relative overflow-hidden">
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
              
              <p className="mt-4 flex items-center justify-center text-accent-300 font-medium animate-pulse">
                <Users className="h-5 w-5 text-accent-400 mr-2" />
                <span>Hurry! Seats are limited</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FOOTER DISCLAIMER - The full disclaimer text */}
      <footer className="bg-dark-300 text-gray-400 text-xs py-8 px-4 border-t border-gray-800 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <p className="leading-relaxed mb-0">
            <strong className="text-gray-300 block mb-2">Disclaimer:</strong> Please note that this product does not provide any guarantee of income or success. The results achieved by the product owner or any other individuals mentioned are not indicative of future success or earnings. This website is not affiliated with FaceBook or any of its associated entities. Once you navigate away from FaceBook, the responsibility for the content and its usage lies solely with the user. All content on this website, including but not limited to text, images, and multimedia, is protected by copyright law and the Digital Millennium Copyright Act. Unauthorized copying, duplication, modification, or theft, whether intentional or unintentional, is strictly prohibited. Violators will be prosecuted to the fullest extent of the law. We want to clarify that JVZoo serves as the retailer for the products featured on this site. JVZoo® is a registered trademark of BBC Systems Inc., a Florida corporation located at 1809 E. Broadway Street, Suite 125, Oviedo, FL 32765, USA, and is used with permission. The role of JVZoo as a retailer does not constitute an endorsement, approval, or review of these products or any claims, statements, or opinions used in their promotion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WebinarRegistration; 