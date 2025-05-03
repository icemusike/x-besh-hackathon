import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Clock, CheckCircle, Trophy, Gift, Users, Check, ChevronDown, ChevronUp, Star, Mail, Share2 } from 'lucide-react';
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
      <div className="glass-card p-6 border border-success-500/30 rounded-xl text-center">
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
    <div className="glass-card p-6 border border-gray-700/30 rounded-xl">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
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
              className="w-full px-4 py-2 bg-dark-400/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white h-24 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
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
        </div>
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
        <div className="container mx-auto px-4 mb-10">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass-card p-4 border border-success-500/30 rounded-xl flex items-center justify-center">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-success-500 mr-2" />
                <span className="text-gray-200 font-medium">Your Registration is Confirmed!</span>
              </div>
            </div>
            <div className="glass-card p-4 border border-gray-700/30 rounded-xl flex items-center justify-center">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-2" />
                <span className="text-gray-200 font-medium">Check Your Email for Webinar Details</span>
              </div>
            </div>
            <div className="glass-card p-4 border border-accent-500/30 rounded-xl flex items-center justify-center text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-accent-400 mr-2" />
                  <span className="text-gray-200 font-medium">Webinar Starts In:</span>
                </div>
                <div className="scale-75 mt-1">
                  <CountdownTimer />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="container mx-auto px-4">
          {/* Registration Confirmed Pill & Header */}
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-success-500/20 backdrop-blur border border-success-500/30 shadow-glass-sm">
              <p className="text-sm font-medium flex items-center">
                <CheckCircle className="h-4 w-4 text-success-500 mr-2" />
                <span className="text-success-400 font-medium">Registration Confirmed</span>
              </p>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 glow-text max-w-4xl mx-auto">
              {userName ? `${userName}, You're` : "You're"} All Set for the xBesh AI Release Webinar!
            </h1>
            <h3 className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Watch this video and get ready to witness AI build apps live and grab your chance to win free early access!
            </h3>
          </div>
          
          {/* Video Player */}
          <div className="max-w-4xl mx-auto mb-10">
            <VideoPlayer videoId="1076340168" />
          </div>
          
          {/* Webinar Details */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="glass-card p-6 border border-gray-700/30 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-primary glow-text">Webinar Details</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h4 className="text-lg font-semibold mb-3 text-white">Date & Time</h4>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-gray-200 font-medium">Tuesday, May 7, 2025</p>
                      <p className="text-gray-400">2 PM EST / 11 AM PST / 7 PM BST</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h4 className="text-lg font-semibold mb-3 text-white">Your Join Link</h4>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary-400 mr-2 mt-0.5" />
                    <div>
                      <p className="text-gray-200 font-medium">Check your email inbox</p>
                      <p className="text-gray-400">for your unique access link</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Next Steps Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary glow-text">Next Steps</h2>
            
            {/* Step 1: Add to Calendar */}
            <div className="glass-card p-6 border border-gray-700/30 rounded-xl mb-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 mr-4 flex items-center justify-center">
                  <span className="text-primary-400 font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold text-primary">Add to Calendar</h3>
              </div>
              
              <p className="text-gray-300 mb-6">Don't miss out! Add this event to your calendar</p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=xBesh%20AI%20Launch%20Webinar&details=Join%20us%20for%20the%20exclusive%20launch%20of%20xBesh%20AI.%20See%20AI%20build%20apps%20live%20and%20get%20a%20chance%20to%20win%20free%20lifetime%20access!&dates=20250507T180000Z/20250507T200000Z&ctz=America/New_York"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-300 hover:bg-dark-200 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2 border border-gray-700"
                >
                  <span>Google Calendar</span>
                </a>
                <a 
                  href="https://outlook.live.com/calendar/0/deeplink/compose?subject=xBesh%20AI%20Launch%20Webinar&body=Join%20us%20for%20the%20exclusive%20launch%20of%20xBesh%20AI.%20See%20AI%20build%20apps%20live%20and%20get%20a%20chance%20to%20win%20free%20lifetime%20access!&startdt=2025-05-07T14:00:00&enddt=2025-05-07T16:00:00&allday=false&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-300 hover:bg-dark-200 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2 border border-gray-700"
                >
                  <span>Outlook</span>
                </a>
                <a 
                  href="/xbesh-webinar.ics" 
                  download
                  className="bg-dark-300 hover:bg-dark-200 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2 border border-gray-700"
                >
                  <span>iCal (.ics)</span>
                </a>
              </div>
            </div>
            
            {/* Step 2: Influence the Live Demo */}
            <div className="glass-card p-6 border border-gray-700/30 rounded-xl mb-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 mr-4 flex items-center justify-center">
                  <span className="text-primary-400 font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary">Influence the Live Demo</h3>
              </div>
              
              <p className="text-gray-300 mb-6">We're building based on <strong>YOUR</strong> ideas! Share your app concept below and it might be featured in our live demo.</p>
              
              <AppIdeaForm />
            </div>
            
            {/* Step 3: Share with Others */}
            <div className="glass-card p-6 border border-gray-700/30 rounded-xl mb-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 mr-4 flex items-center justify-center">
                  <span className="text-primary-400 font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary">Share with Others</h3>
              </div>
              
              <p className="text-gray-300 mb-6">Know someone who needs this revolutionary AI (and a chance to win)?</p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + '/webinar-registration')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1877F2] hover:bg-[#166FE5] text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2"
                >
                  <span>Facebook</span>
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Join me for the xBesh AI Launch Webinar! See AI build apps live and grab your chance to win FREE lifetime access. Register here:')}&url=${encodeURIComponent(window.location.origin + '/webinar-registration')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1DA1F2] hover:bg-[#1A94DA] text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2"
                >
                  <span>Twitter</span>
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin + '/webinar-registration')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0A66C2] hover:bg-[#0958A7] text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2"
                >
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={`mailto:?subject=${encodeURIComponent('Join me for the xBesh AI Launch Webinar')}&body=${encodeURIComponent('Hey,\n\nI just registered for the xBesh AI Launch Webinar and thought you might be interested. You can see AI build apps live and get a chance to win FREE lifetime access!\n\nRegister here: ' + window.location.origin + '/webinar-registration')}`}
                  className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2"
                >
                  <span>Email</span>
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.origin + '/webinar-registration');
                    alert('Registration link copied to clipboard!');
                  }}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2"
                >
                  <Share2 className="h-4 w-4 mr-1" />
                  <span>Copy Link</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Meet Your Hosts Section */}
          <div className="max-w-4xl mx-auto mb-10">
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
          
          {/* Don't Forget Banner */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="p-6 bg-gradient-to-r from-primary-900/50 to-accent-900/50 rounded-xl border border-gray-700/50 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Don't Forget!</h3>
              <p className="text-xl text-gray-200">
                The 10 FREE Lifetime Accounts are <span className="font-bold">only</span> for live attendees. See you there!
              </p>
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