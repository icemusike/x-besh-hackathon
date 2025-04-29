import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import HowItWorks from './components/HowItWorks';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import CTAFooter from './components/CTAFooter';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('hero');
      
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowFloatingCTA(scrollPosition > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-light">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Prizes />
        <HowItWorks />
        <Resources />
        <FAQ />
        <CTAFooter />
      </main>
      <Footer />
      {showFloatingCTA && <FloatingCTA />}
    </div>
  );
}

export default App;
