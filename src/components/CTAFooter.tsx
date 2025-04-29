import React from 'react';
import { ArrowRight, Terminal, Code, Braces } from 'lucide-react';

const CTAFooter: React.FC = () => {
  return (
    <section id="register" className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 animated-gradient opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Code-inspired floating elements */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <div className="glass-card p-3 border-white/20">
          <div className="flex items-center mb-2">
            <Terminal className="h-4 w-4 text-white mr-2" />
            <span className="text-white/80 text-xs">register.js</span>
          </div>
          <div className="font-mono text-xs text-white/80">
            <div className="text-white/80">async function</div>
            <div className="ml-2">
              <span className="text-white/90">approveOnJVZoo</span>
              <span className="text-white/80">()</span> <span className="text-white/80">{`{`}</span>
            </div>
            <div className="ml-4 text-white/80">// Your code here</div>
            <div className="ml-2 text-white/80">{`}`}</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-20 right-10 hidden lg:block">
        <div className="glass-card p-3 border-white/20">
          <div className="flex items-center mb-2">
            <Code className="h-4 w-4 text-white mr-2" />
            <span className="text-white/80 text-xs">success.js</span>
          </div>
          <div className="font-mono text-xs text-white/80">
            <div className="text-white/80">const</div>
            <div className="ml-2">
              <span className="text-white/90">success</span>
              <span className="text-white/80"> = </span>
              <span className="text-white/80">true;</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 glow-text">
            Ready to crush the leader-board?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Clock's ticking. Secure your link, queue your emails, and let's bank.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#" 
              className="btn bg-white text-primary-600 hover:bg-white/90 focus:ring-white w-full sm:w-auto rounded-full px-8 py-4 shadow-neon font-bold text-lg relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                Approve Me On JVZoo 🚀
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute top-0 right-full w-full h-full bg-primary-500/20 transform transition-transform duration-1000 ease-out group-hover:right-0"></span>
            </a>
          </div>
          
          {/* Floating code elements */}
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-lg border border-white/20 flex items-center justify-center rotate-12 animate-float hidden lg:flex">
            <Braces className="h-6 w-6 text-white/80" />
          </div>
          
          <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-white/10 rounded-lg border border-white/20 flex items-center justify-center -rotate-12 animate-float hidden lg:flex" style={{ animationDelay: '1s' }}>
            <Code className="h-5 w-5 text-white/80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;
