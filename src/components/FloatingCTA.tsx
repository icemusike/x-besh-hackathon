import React from 'react';
import { ArrowRight } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      <a 
        href="#hero" 
        className="flex items-center justify-center px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white rounded-full shadow-neon-primary transition-all duration-300 group"
      >
        <span className="mr-2 font-medium hidden md:inline">Join Hackathon</span>
        <span className="md:hidden">Join</span>
        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default FloatingCTA;
