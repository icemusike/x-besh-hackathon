import React, { useEffect, useState, useRef } from 'react';
import { DollarSign, Zap, Code, Briefcase, Users, Package, Terminal, Braces, Database, Check, CheckCircle, AlertCircle, Lock, Send, Link as LinkIcon, Github, Info, UploadCloud, Loader2, Image as ImageIcon } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

// Define interface for terminal line
interface TerminalLine {
  text: string;
  type: 'info' | 'command' | 'success' | 'final';
  icon?: React.ElementType; // Optional icon component
  delay: number;
}

// Define lines for the animated terminal
const terminalLines: TerminalLine[] = [
  { text: "Initializing xBesh AI environment...", type: 'info', delay: 100 },
  { text: "$ xbesh --init", type: 'command', delay: 1500 },
  { text: "Dependencies verified", type: 'success', icon: Check, delay: 1000 },
  { text: "Loading AI models...", type: 'info', delay: 500 },
  { text: "Checking dependencies...", type: 'info', delay: 800 },
  { text: "$ xbesh --load-models", type: 'command', delay: 1500 },
  { text: "Loading xBesh LLM V1.0 model...", type: 'info', delay: 1000 },
  { text: "xBesh LLM V1.0 loaded successfully", type: 'success', icon: Check, delay: 1000 },
  { text: "Initializing WebContainer runtime...", type: 'info', delay: 500 },
  { text: "WebContainer runtime ready", type: 'success', icon: Check, delay: 1000 },
  { text: "$ xbesh --prepare-environments", type: 'command', delay: 1500 },
  { text: "Setting up frontend framework...", type: 'info', delay: 1000 },
  { text: "Configuring database connection...", type: 'info', delay: 1200 },
  { text: "Database connection established", type: 'success', icon: Check, delay: 800 },
  { text: "Generating API endpoints...", type: 'info', delay: 1500 },
  { text: "API endpoints created", type: 'success', icon: Check, delay: 1000 },
  { text: "Packaging application...", type: 'info', delay: 1200 },
  { text: "Build complete. Ready for deployment!", type: 'final', delay: 1000 },
  { text: "$ xbesh --deploy --live", type: 'command', delay: 1500 },
];

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

  // State for animated terminal
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const [isLoadingFinalResult, setIsLoadingFinalResult] = useState<boolean>(false);
  const [showFinalImage, setShowFinalImage] = useState<boolean>(false);
  const [showPrizesConfetti, setShowPrizesConfetti] = useState<boolean>(false);
  const [isTerminalVisible, setIsTerminalVisible] = useState<boolean>(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for the terminal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTerminalVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentTerminalRef = terminalRef.current;
    if (currentTerminalRef) {
      observer.observe(currentTerminalRef);
    }

    return () => {
      if (currentTerminalRef) {
        observer.unobserve(currentTerminalRef);
      }
    };
  }, []);

  // Original Intersection Observer for other fade-in elements (kept separate)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // useEffect for terminal animation logic
  useEffect(() => {
    if (!isTerminalVisible) return;

    let lineIndex = 0;
    let progressInterval = 100 / terminalLines.length;
    let timeoutId: number | undefined;
    let finalTimeoutId: number | undefined;

    const showNextLine = () => {
      if (lineIndex < terminalLines.length) {
        setVisibleLines(lineIndex + 1);
        setCurrentProgress(Math.min(100, Math.round((lineIndex + 1) * progressInterval)));
        const delay = terminalLines[lineIndex].delay;
        lineIndex++;
        timeoutId = window.setTimeout(showNextLine, delay);
      } else {
        // All lines shown, start loading animation
        setCurrentProgress(100); // Ensure progress hits 100
        setIsLoadingFinalResult(true);
        finalTimeoutId = window.setTimeout(() => {
          setIsLoadingFinalResult(false);
          setShowFinalImage(true);
          setShowPrizesConfetti(true); // Trigger confetti
          // Hide confetti after a duration
          window.setTimeout(() => setShowPrizesConfetti(false), 4000);
        }, 1500); // Loading duration
      }
    };

    // Start the animation only when visible
    timeoutId = window.setTimeout(showNextLine, 500);

    // Clear timeouts on unmount or if visibility changes (though it shouldn't change back)
    return () => {
      window.clearTimeout(timeoutId);
      window.clearTimeout(finalTimeoutId);
    };
  }, [isTerminalVisible]);

  // State for video mute status
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section id="prizes" className="section bg-dark relative overflow-hidden">
      {/* Code-inspired background elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary-600/5 rounded-lg border border-primary-400/10 -rotate-12 backdrop-blur-sm hidden lg:block"></div>
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-accent-600/5 rounded-lg border border-accent-400/10 rotate-12 backdrop-blur-sm hidden lg:block"></div>
      
      {/* Floating code elements */}
      <div className="absolute top-20 left-10 hidden lg:block fade-in">
        <div className="glass-card p-3 border-primary-400/20 shadow-neon-primary">
          <div className="flex items-center mb-2">
            <Terminal className="h-4 w-4 text-accent-400 mr-2" />
            <span className="text-light/60 text-xs">prize_calculation.js</span>
          </div>
          <div className="font-mono text-xs">
            <div className="typewriter text-accent-300/80">function</div>
            <div className="typewriter typewriter-delay-1 ml-2">
              <span className="text-primary-400">calculatePrize</span>
              <span className="text-light/60">()</span> <span className="text-light/60">{`{`}</span>
            </div>
            <div className="typewriter typewriter-delay-2 ml-4">
              <span className="text-accent-300/80">return</span>
              <span className="text-success-400 ml-1">'$500'</span>;
            </div>
            <div className="typewriter typewriter-delay-3 ml-2 text-light/60">{`}`}</div>
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
        <div className="max-w-2xl mx-auto mb-20 relative fade-in">
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
            
            <a href="#hero" className="btn-primary rounded-full px-8 py-4 relative overflow-hidden group">
              <span className="relative z-10">Register Now</span>
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
        
        {/* Updated Product Section */}
        <div className="mt-24 fade-in fade-in-delay-2">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Promote a Product That Sells Itself
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-light/80">
              XBesh AGI is the revolutionary no-code SaaS builder turning prompts into live apps in minutes. See the build process live:
            </p>
          </div>
          
          {/* New Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Column: Funnel Details (Enhanced Design) */}
            <div className="bg-gradient-to-br from-primary-900/20 via-gray-950/50 to-dark rounded-2xl p-8 border border-primary-500/40 shadow-xl shadow-primary-900/20 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-primary-300 flex items-center border-b border-primary-700/30 pb-3">
                 <Package className="w-7 h-7 mr-3 text-primary-400 flex-shrink-0"/> 
                 <span>Complete <span className="text-white">High-Ticket</span> Funnel</span>
              </h3>
              <ul className="space-y-5 flex-grow">
                {productFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-accent-400 flex-shrink-0" />
                    <span className="text-light/90 text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-primary-700/30">
                 <p className="text-sm text-center text-primary-400/80">Total Funnel Value: <span className="font-bold text-white">$1085</span></p>
              </div>
            </div>

            {/* Right Column: Animated Terminal / Final Image */}
            <div className="flex flex-col items-center">
              {/* Logo and Text */}
              <img src="/xbesh_logo_white.png" alt="XBesh Logo" className="h-12 mb-3 opacity-80" />
              <p className="text-sm text-gray-400 mb-6 font-medium">Extensive template library included</p>

              {/* Browser Window */}
              <div ref={terminalRef} className="w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 bg-gray-950 relative">
                {/* Header */}
                <div className="flex items-center bg-gray-900 px-4 py-2.5 border-b border-gray-800/70">
                   <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-grow text-center text-xs text-gray-500 font-medium">xBesh Terminal</div>
                </div>

                {/* Conditional Content: Terminal, Loading, or Image */}
                <div className="p-4 md:p-5 h-80 bg-black/50 font-mono text-xs terminal-scrollbar overflow-hidden relative flex flex-col"> 
                  {!showFinalImage && !isLoadingFinalResult && (
                     <div className="flex-grow overflow-y-auto terminal-scrollbar pr-2">
                       {terminalLines.slice(0, visibleLines).map((line, index) => (
                         <div key={index} className={`terminal-line ${line.type === 'command' ? 'text-blue-300' : line.type === 'success' ? 'text-green-400' : line.type === 'final' ? 'text-yellow-300 font-bold' : 'text-gray-300'}`}>
                           {line.type === 'success' || line.type === 'final' ? (
                             <span className="text-green-500 mr-1.5">{line.icon && <line.icon size={12} className="inline -mt-0.5"/>}</span>
                           ) : line.type === 'command' ? (
                              <span className="text-gray-500 mr-1"></span> // Keep alignment for non-command lines
                           ) : (
                             <span className="mr-1.5">&nbsp;&nbsp;</span> // Indent info lines
                           )}
                           {line.text}
                         </div>
                       ))}
                       {visibleLines < terminalLines.length && <span className="terminal-cursor">█</span>}
                     </div>
                  )}

                  {isLoadingFinalResult && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 z-10">
                      <Loader2 className="w-10 h-10 text-primary-400 animate-spin mb-4" />
                      <p className="text-primary-300">Generating Final Preview...</p>
                    </div>
                  )}

                  {showFinalImage && (
                    <div className="absolute inset-0 image-fade-in">
                      <img 
                        src="https://demo.xbesh.com/images/koala-invoices-screenshot.png" 
                        alt="Final App Screenshot" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* Optional: Add overlay text on image? */}
                    </div>
                  )}
                 </div>

                {/* Progress Bar Footer */}
                <div className="bg-gray-800/50 px-4 py-3 border-t border-gray-700/50">
                   <div className="flex justify-between items-center mb-1">
                     <span className="text-xs font-medium text-gray-400">Progress</span>
                     <span className="text-xs font-mono text-primary-300">{currentProgress}%</span>
                   </div>
                   <div className="h-2 w-full bg-gray-700/60 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary-600 to-accent-500 transition-all duration-500 ease-linear rounded-full"
                        style={{ width: `${currentProgress}%` }}
                      ></div>
                    </div>
                </div>

                {/* Confetti for this section */}
                {showPrizesConfetti && (
                  <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                    {Array.from({length: 50}).map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor: ['#7B61FF', '#00E5FF', '#00C48C'][Math.floor(Math.random() * 3)],
                          left: `${Math.random() * 100}%`,
                          top: `-10%`,
                          animation: `confetti-fall ${3 + Math.random() * 4}s linear infinite`,
                          animationDelay: `${Math.random() * 1}s` // Slight delay variation
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder for Video Demo - Replaced with Vimeo Embed */}
        <div className="mt-16 bg-gray-900/50 rounded-2xl border border-gray-800/60 p-6 md:p-10 relative shadow-xl shadow-primary-900/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center gradient-text">
            See XBesh AI in Action
          </h3>
          
          {/* Vimeo Embed Container */}
          <div className="relative overflow-hidden rounded-xl shadow-lg border border-primary-500/30" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={`https://player.vimeo.com/video/1080176841?autoplay=1&loop=1&autopause=0&muted=${isMuted ? 1 : 0}&controls=0&background=1&quality=1080p`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              title="XBesh AI Demo"
            ></iframe>
            
            {/* Unmute Button Overlay */}
            {isMuted && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <button 
                  onClick={() => setIsMuted(false)}
                  className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30 hover:bg-white/20 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  Click to Unmute
                </button>
              </div>
            )}
          </div>
          
          {/* Optional: Add text below video */}
          {/* <p className="text-center mt-4 text-gray-400">Watch how easily you can build and launch apps.</p> */}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
