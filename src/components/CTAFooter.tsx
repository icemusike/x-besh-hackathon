import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTAFooter: React.FC = () => {
  return (
    <section id="register" className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Build the Future?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join hundreds of innovators in the XBesh Affiliate Hackathon and showcase your skills to the world.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#" 
              className="btn bg-white text-primary hover:bg-white/90 focus:ring-white w-full sm:w-auto"
            >
              Register Now
              <ArrowRight className="ml-2" />
            </a>
            
            <a 
              href="#timeline" 
              className="btn border-2 border-white text-white hover:bg-white/10 focus:ring-white w-full sm:w-auto"
            >
              View Timeline
            </a>
          </div>
          
          {/* Social proof */}
          <div className="mt-16">
            <p className="text-white/80 mb-6 text-sm uppercase tracking-wider font-medium">
              Trusted by leading tech companies
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {/* Company logos would go here - using placeholder text for now */}
              <div className="text-white font-bold text-xl">Company 1</div>
              <div className="text-white font-bold text-xl">Company 2</div>
              <div className="text-white font-bold text-xl">Company 3</div>
              <div className="text-white font-bold text-xl">Company 4</div>
              <div className="text-white font-bold text-xl">Company 5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;
