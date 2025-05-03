import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Clock, CheckCircle, Trophy, Gift, Users, Check, ChevronDown, ChevronUp, Star, Mail, Share2, Facebook, Twitter, Linkedin, Copy, MessageSquare, Mail as EmailIcon } from 'lucide-react';
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
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-dark-300 border border-gray-700 rounded-lg flex items-center justify-center text-xl font-bold text-white shadow-lg relative overflow-hidden">
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

// Application idea submission form
const AppIdeaForm = () => {
  const [appName, setAppName] = useState('');
  const [appDescription, setAppDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare the payload with the form data
      const payload = {
        appName,
        appDescription,
        submissionDate: new Date().toISOString(),
        source: window.location.href
      };
      
      // Send data to the webhook (using the same webhook as registration)
      const response = await fetch('https://callflujent.app.n8n.cloud/webhook/b278b1de-76bb-45e3-a9f3-db7b7a742342', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Webhook submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="glass-card p-6 border border-success-500/30 rounded-xl text-center h-full flex flex-col justify-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-success-500/20 border border-success-500/50 flex items-center justify-center">
            <CheckCircle className="h-6 w-6 text-success-500" />
          </div>
        </div>
        <h4 className="text-xl font-bold mb-2 text-success-400">Thank You for Your Idea!</h4>
        <p className="text-gray-300">We've received your submission and will consider it for the live demo.</p>
      </div>
    );
  }
  
  return (
    <div className="glass-card p-6 border border-gray-700/30 rounded-xl h-full flex flex-col justify-between">
      <form onSubmit={handleSubmit} className="h-full flex flex-col">
        <div className="space-y-4 flex-grow">
          <div>
            <label htmlFor="appName" className="block text-sm font-medium text-gray-300 mb-1">
              Application Name:
            </label>
            <input
              type="text"
              id="appName"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              className="w-full px-4 py-2 bg-dark-400/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="appDescription" className="block text-sm font-medium text-gray-300 mb-1">
              Application Short Description:
            </label>
            <textarea
              id="appDescription"
              value={appDescription}
              onChange={(e) => setAppDescription(e.target.value)}
              className="w-full px-4 py-2 bg-dark-400/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white h-32 resize-none"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center mt-4"
        >
          {isSubmitting ? (
            <>
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Processing...
            </>
          ) : (
            'Submit Your Idea'
          )}
        </button>
      </form>
    </div>
  );
};

const WebinarConfirmation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Parse user name from URL query parameter if available
  const [userName, setUserName] = useState('');
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    if (name) {
      setUserName(name);
    }
  }, []);
  
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
              <Link to="/webinar-registration" className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white py-2 px-5 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-primary/20 flex items-center space-x-1">
                <span>Register for FREE</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
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
            <Link 
              to="/webinar-registration" 
              className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white py-3 px-5 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-primary/20 flex items-center justify-center space-x-2 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Register for FREE</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </div>
      
      {/* MAIN CONTENT */}
      <main className="pt-24 pb-12">
        {/* Status Bar with 3 cards */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-6 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-600/20 rounded-full blur-3xl"></div>
              
              <div className="grid md:grid-cols-3 gap-6 relative z-10">
                <div className="glass-card p-5 border border-success-500/30 rounded-xl flex items-center">
                  <div className="w-10 h-10 rounded-full bg-success-500/20 border border-success-500/40 flex items-center justify-center mr-4 shadow-lg shadow-success-500/10">
                    <CheckCircle className="h-5 w-5 text-success-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Registration Confirmed</h4>
                    <p className="text-sm text-gray-300">Your spot is reserved</p>
                  </div>
                </div>
                
                <div className="glass-card p-5 border border-primary-500/30 rounded-xl flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 border border-primary-500/40 flex items-center justify-center mr-4 shadow-lg shadow-primary-500/10">
                    <Mail className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Check Your Email</h4>
                    <p className="text-sm text-gray-300">For webinar access details</p>
                  </div>
                </div>
                
                <div className="glass-card p-5 border border-accent-500/30 rounded-xl">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-accent-500/20 border border-accent-500/40 flex items-center justify-center mr-4 shadow-lg shadow-accent-500/10">
                      <Clock className="h-5 w-5 text-accent-400" />
                    </div>
                    <h4 className="text-lg font-medium text-white">Webinar Starts In:</h4>
                  </div>
                  <div className="scale-90 -mt-1 ml-2">
                    <CountdownTimer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="container mx-auto px-4">
          {/* Registration Confirmed Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-5 py-2 mb-4 rounded-full bg-success-500/20 backdrop-blur border border-success-500/30 shadow-glass-sm animate-float">
              <p className="text-sm font-medium flex items-center space-x-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-success-500"></span>
                </span>
                <span className="text-success-400 font-bold tracking-wide">Registration Confirmed</span>
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white max-w-5xl mx-auto leading-tight bg-gradient-to-r from-primary-400 via-white to-accent-400 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]">
              {userName ? `${userName}, You're` : "You're"} All Set for the xBesh AI Release Webinar!
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto font-medium">
              Watch this video and get ready to witness AI build apps live and grab your chance to win free early access!
            </h3>
          </div>
          
          {/* Video Player */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="glass-card p-4 md:p-6 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-600/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <VideoPlayer videoId="1076340168" />
              </div>
            </div>
          </div>
          
          {/* Webinar Details */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="glass-card p-6 md:p-8 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-600/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-center text-white">Webinar Details</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="glass-card p-6 rounded-xl border border-gray-700/30 bg-dark-300/50">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-primary-500/20 border border-primary-500/40 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg shadow-primary-500/10">
                        <Calendar className="h-6 w-6 text-primary-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-3 text-white">Date & Time</h4>
                        <p className="text-lg text-gray-200 font-medium">Tuesday, May 7, 2025</p>
                        <p className="text-gray-400">2 PM EST / 11 AM PST / 7 PM BST</p>
                        <div className="mt-4 bg-dark-400/50 rounded-lg p-3 border border-primary-300/10">
                          <p className="text-xs text-primary-300 font-medium">60-minute session with LIVE demo & Q&A</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl border border-gray-700/30 bg-dark-300/50">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-accent-500/20 border border-accent-500/40 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg shadow-accent-500/10">
                        <Mail className="h-6 w-6 text-accent-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-3 text-white">Your Join Link</h4>
                        <p className="text-lg text-gray-200 font-medium">Check your email inbox</p>
                        <p className="text-gray-400">We've sent your unique access link to the email you provided</p>
                        <div className="mt-4 bg-dark-400/50 rounded-lg p-3 border border-accent-300/10">
                          <p className="text-xs text-accent-300 font-medium">Email will arrive 1 hour before the webinar starts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Next Steps Section */}
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-6 md:p-8 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl relative overflow-hidden mb-16">
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-600/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">Next Steps</h2>
                
                {/* Step 1: Add to Calendar */}
                <div className="mb-16">
                  <div className="flex items-center mb-6 border-b border-gray-800 pb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center mr-5 shadow-lg shadow-primary/20">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Add to Calendar</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-gray-200 text-lg mb-4">Don't miss this exclusive event! Add the webinar to your calendar now to make sure you don't miss out on:</p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary-500/20 mr-3 flex-shrink-0 flex items-center justify-center mt-0.5">
                            <Check className="h-3 w-3 text-primary-500" />
                          </div>
                          <p className="text-gray-300">Live AI app building demonstration</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary-500/20 mr-3 flex-shrink-0 flex items-center justify-center mt-0.5">
                            <Check className="h-3 w-3 text-primary-500" />
                          </div>
                          <p className="text-gray-300">Chance to win one of 10 FREE lifetime licenses</p>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary-500/20 mr-3 flex-shrink-0 flex items-center justify-center mt-0.5">
                            <Check className="h-3 w-3 text-primary-500" />
                          </div>
                          <p className="text-gray-300">Exclusive early-bird bonuses revealed during the event</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="glass-card p-6 rounded-xl border border-gray-700/30 bg-dark-300/50 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary-500/20 border border-primary-500/40 flex items-center justify-center shadow-lg shadow-primary-500/10">
                          <Calendar className="h-8 w-8 text-primary-400" />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold mb-4 text-white">Choose Your Calendar</h4>
                      <div className="flex flex-col space-y-3">
                        <a 
                          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=xBesh%20AI%20Launch%20Webinar&details=Join%20us%20for%20the%20exclusive%20launch%20of%20xBesh%20AI.%20See%20AI%20build%20apps%20live%20and%20get%20a%20chance%20to%20win%20free%20lifetime%20access!&dates=20250507T180000Z/20250507T200000Z&ctz=America/New_York"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="bg-dark-400 hover:bg-dark-500 border border-gray-700 group-hover:border-primary-500/50 transition-all duration-300 text-white py-3 px-4 rounded-lg font-medium relative z-10 flex items-center justify-center space-x-2">
                            <span className="text-lg">Google Calendar</span>
                          </div>
                        </a>
                        <a 
                          href="https://outlook.live.com/calendar/0/deeplink/compose?subject=xBesh%20AI%20Launch%20Webinar&body=Join%20us%20for%20the%20exclusive%20launch%20of%20xBesh%20AI.%20See%20AI%20build%20apps%20live%20and%20get%20a%20chance%20to%20win%20free%20lifetime%20access!&startdt=2025-05-07T14:00:00&enddt=2025-05-07T15:00:00&allday=false&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="bg-dark-400 hover:bg-dark-500 border border-gray-700 group-hover:border-primary-500/50 transition-all duration-300 text-white py-3 px-4 rounded-lg font-medium relative z-10 flex items-center justify-center space-x-2">
                            <span className="text-lg">Outlook Calendar</span>
                          </div>
                        </a>
                        <a 
                          href="/xbesh-webinar.ics" 
                          download
                          className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="bg-dark-400 hover:bg-dark-500 border border-gray-700 group-hover:border-primary-500/50 transition-all duration-300 text-white py-3 px-4 rounded-lg font-medium relative z-10 flex items-center justify-center space-x-2">
                            <span className="text-lg">iCal (.ics)</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 2: Influence the Live Demo */}
                <div className="mb-16">
                  <div className="flex items-center mb-6 border-b border-gray-800 pb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center mr-5 shadow-lg shadow-primary/20">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Influence the Live Demo</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    <div>
                      <div className="glass-card-hover p-6 rounded-xl border border-gray-700/30 bg-dark-300/50 h-full flex flex-col justify-between">
                        <div>
                          <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-accent-500/20 border border-accent-500/40 flex items-center justify-center shadow-lg shadow-accent-500/10">
                              <Gift className="h-8 w-8 text-accent-400" />
                            </div>
                          </div>
                          <h4 className="text-xl font-bold mb-4 text-white text-center">Your Idea Could Be Featured</h4>
                          <p className="text-gray-300 mb-4">We're building based on <span className="text-accent-400 font-bold">YOUR</span> ideas during the webinar! Adrian will select one attendee's concept and build it right before your eyes.</p>
                        </div>
                        <div className="p-4 bg-dark-400/50 rounded-lg border border-accent-300/10 mt-4">
                          <p className="text-sm text-accent-300">
                            <span className="font-bold">TIP:</span> Keep your concept simple and focused for the best chance to be featured during the 60-minute session.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-full">
                      <AppIdeaForm />
                    </div>
                  </div>
                </div>
                
                {/* Step 3: Share with Others */}
                <div>
                  <div className="flex items-center mb-6 border-b border-gray-800 pb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center mr-5 shadow-lg shadow-primary/20">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Share with Others</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-1">
                      <div className="glass-card-hover p-6 rounded-xl border border-gray-700/30 bg-dark-300/50 h-full">
                        <div className="flex justify-center mb-6">
                          <div className="w-16 h-16 rounded-full bg-primary-500/20 border border-primary-500/40 flex items-center justify-center shadow-lg shadow-primary-500/10">
                            <Share2 className="h-8 w-8 text-primary-400" />
                          </div>
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-white text-center">Help Others Discover</h4>
                        <p className="text-gray-300 mb-4">Know someone who needs this revolutionary AI tool (and a chance to win FREE lifetime access)?</p>
                        <p className="text-gray-300">Share this opportunity with friends, colleagues, or fellow entrepreneurs who could benefit.</p>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <div className="glass-card-hover p-6 rounded-xl border border-gray-700/30 bg-dark-300/50">
                        <h4 className="text-xl font-bold mb-6 text-center text-white">Spread the Word</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                          <a 
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + '/webinar-registration')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-dark-400 hover:bg-[#1877F2] text-white py-4 px-4 rounded-xl font-medium transition-all duration-300 border border-gray-700 hover:border-blue-400 flex flex-col items-center justify-center shadow-lg hover:shadow-blue-600/30 h-full"
                          >
                            <div className="w-10 h-10 rounded-full bg-[#1877F2]/20 flex items-center justify-center mb-3">
                              <svg className="w-6 h-6 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                              </svg>
                            </div>
                            <span className="text-lg mb-1">Facebook</span>
                            <span className="text-xs text-gray-400 hover:text-white">Share with friends</span>
                          </a>
                          
                          <a 
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Join me for the xBesh AI Launch Webinar! See AI build apps live and grab your chance to win FREE lifetime access. Register here:')}&url=${encodeURIComponent(window.location.origin + '/webinar-registration')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-dark-400 hover:bg-[#1DA1F2] text-white py-4 px-4 rounded-xl font-medium transition-all duration-300 border border-gray-700 hover:border-blue-300 flex flex-col items-center justify-center shadow-lg hover:shadow-blue-400/30 h-full"
                          >
                            <div className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 flex items-center justify-center mb-3">
                              <svg className="w-6 h-6 text-[#1DA1F2]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                              </svg>
                            </div>
                            <span className="text-lg mb-1">Twitter</span>
                            <span className="text-xs text-gray-400 hover:text-white">Tweet to followers</span>
                          </a>
                          
                          <a 
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin + '/webinar-registration')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-dark-400 hover:bg-[#0A66C2] text-white py-4 px-4 rounded-xl font-medium transition-all duration-300 border border-gray-700 hover:border-blue-500 flex flex-col items-center justify-center shadow-lg hover:shadow-blue-700/30 h-full"
                          >
                            <div className="w-10 h-10 rounded-full bg-[#0A66C2]/20 flex items-center justify-center mb-3">
                              <svg className="w-6 h-6 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </div>
                            <span className="text-lg mb-1">LinkedIn</span>
                            <span className="text-xs text-gray-400 hover:text-white">Share professionally</span>
                          </a>
                          
                          <a 
                            href={`mailto:?subject=${encodeURIComponent('Join me for the xBesh AI Launch Webinar')}&body=${encodeURIComponent('Hey,\n\nI just registered for the xBesh AI Launch Webinar and thought you might be interested. You can see AI build apps live and get a chance to win FREE lifetime access!\n\nRegister here: ' + window.location.origin + '/webinar-registration')}`}
                            className="bg-dark-400 hover:bg-gray-600 text-white py-4 px-4 rounded-xl font-medium transition-all duration-300 border border-gray-700 hover:border-gray-500 flex flex-col items-center justify-center shadow-lg hover:shadow-gray-700/30 h-full"
                          >
                            <div className="w-10 h-10 rounded-full bg-gray-600/20 flex items-center justify-center mb-3">
                              <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                              </svg>
                            </div>
                            <span className="text-lg mb-1">Email</span>
                            <span className="text-xs text-gray-400 hover:text-white">Send directly</span>
                          </a>
                          
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(window.location.origin + '/webinar-registration');
                              alert('Registration link copied to clipboard!');
                            }}
                            className="bg-dark-400 hover:bg-primary-700 text-white py-4 px-4 rounded-xl font-medium transition-all duration-300 border border-gray-700 hover:border-primary-500 flex flex-col items-center justify-center shadow-lg hover:shadow-primary-700/30 h-full"
                          >
                            <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mb-3">
                              <svg className="w-6 h-6 text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                              </svg>
                            </div>
                            <span className="text-lg mb-1">Copy Link</span>
                            <span className="text-xs text-gray-400 hover:text-white">Share anywhere</span>
                          </button>
                          
                          <a 
                            href={`sms:?body=${encodeURIComponent('Join me for the xBesh AI Launch Webinar! See AI build apps live and win FREE access: ' + window.location.origin + '/webinar-registration')}`}
                            className="bg-dark-400 hover:bg-green-700 text-white py-4 px-4 rounded-xl font-medium transition-all duration-300 border border-gray-700 hover:border-green-500 flex flex-col items-center justify-center shadow-lg hover:shadow-green-700/30 h-full"
                          >
                            <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center mb-3">
                              <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                              </svg>
                            </div>
                            <span className="text-lg mb-1">SMS</span>
                            <span className="text-xs text-gray-400 hover:text-white">Text to friends</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Meet Your Hosts Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="glass-card p-6 md:p-8 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-600/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Meet Your Hosts</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Madhav Bhandari Profile */}
                  <div className="glass-card-hover p-8 rounded-xl border border-gray-700/30 bg-dark-300/50 text-center">
                    <div className="relative inline-block mb-6">
                      <img 
                        src="/madhav.jpg" 
                        alt="Madhav Bhandari" 
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-1 text-white">Madhav Bhandari</h3>
                    <p className="text-lg text-primary mb-6 font-medium">Founder & CTO</p>
                    
                    <p className="text-gray-300 leading-relaxed">
                      With over 15 years of experience in AI and machine learning, Madhav has led innovation at major technology companies before founding xBesh AI to revolutionize how businesses leverage artificial intelligence.
                    </p>
                    
                    <div className="mt-6 p-4 bg-dark-400/50 rounded-lg border border-primary-300/10">
                      <p className="text-sm text-primary-300 italic">
                        "Our mission is to democratize AI app development for everyone—no coding required."
                      </p>
                    </div>
                  </div>
                  
                  {/* Adrian Isfan Profile */}
                  <div className="glass-card-hover p-8 rounded-xl border border-gray-700/30 bg-dark-300/50 text-center">
                    <div className="relative inline-block mb-6">
                      <img 
                        src="/adrian.jpg" 
                        alt="Adrian Isfan" 
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-1 text-white">Adrian Isfan</h3>
                    <p className="text-lg text-primary mb-6 font-medium">Founder & CMO</p>
                    
                    <p className="text-gray-300 leading-relaxed">
                      Adrian brings extensive expertise in marketing and business growth strategies. His background in digital transformation and customer experience has helped numerous organizations successfully implement AI-driven solutions.
                    </p>
                    
                    <div className="mt-6 p-4 bg-dark-400/50 rounded-lg border border-primary-300/10">
                      <p className="text-sm text-primary-300 italic">
                        "This event will showcase how AI is transforming app development for entrepreneurs and businesses alike."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Don't Forget Banner */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="p-8 bg-gradient-to-r from-primary-900/80 to-accent-900/80 rounded-xl border border-primary-500/30 text-center shadow-lg shadow-primary-500/10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Don't Forget!</h3>
                <p className="text-xl text-gray-100">
                  The <span className="font-bold text-accent-300">10 FREE Lifetime Accounts</span> are <span className="font-bold underline decoration-wavy decoration-accent-500 underline-offset-4">only</span> for live attendees. See you there!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* FOOTER DISCLAIMER */}
      <footer className="bg-dark-300 text-gray-500 text-xs py-8 px-4 border-t border-gray-800 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <p className="leading-relaxed mb-0">
            <strong className="text-gray-300 block mb-2">Disclaimer:</strong> Please note that this product does not provide any guarantee of income or success. The results achieved by the product owner or any other individuals mentioned are not indicative of future success or earnings. This website is not affiliated with FaceBook or any of its associated entities. Once you navigate away from FaceBook, the responsibility for the content and its usage lies solely with the user. All content on this website, including but not limited to text, images, and multimedia, is protected by copyright law and the Digital Millennium Copyright Act. Unauthorized copying, duplication, modification, or theft, whether intentional or unintentional, is strictly prohibited. Violators will be prosecuted to the fullest extent of the law. We want to clarify that JVZoo serves as the retailer for the products featured on this site. JVZoo® is a registered trademark of BBC Systems Inc., a Florida corporation located at 1809 E. Broadway Street, Suite 125, Oviedo, FL 32765, USA, and is used with permission. The role of JVZoo as a retailer does not constitute an endorsement, approval, or review of these products or any claims, statements, or opinions used in their promotion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WebinarConfirmation; 