import React, { useEffect } from 'react';
import { ChevronDown, ChevronUp, Terminal, Code, Braces } from 'lucide-react';
import { Disclosure } from '@headlessui/react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do Early-Bird sales also count toward the main launch contest?",
      answer: "Yes! Your numbers roll forward, so you could win twice.",
      code: "// Early-Bird sales count twice\ncontest.earlySales.forEach(sale => {\n  mainContest.addSale(sale);\n});"
    },
    {
      question: "What if a refund comes in after I'm declared the winner?",
      answer: "We wait 7 days before paying the prize, just to weed out fake buys.",
      code: "// Refund protection\nsetTimeout(payWinner, 7 * 24 * 60 * 60 * 1000);"
    },
    {
      question: "Can I offer my own bonuses?",
      answer: "Absolutely—go wild. Just keep it legit and FTC-compliant.",
      code: "// Custom bonuses allowed\nconst yourBonuses = ['bonus1', 'bonus2', ...];"
    },
    {
      question: "Is there a minimum sales cap to qualify?",
      answer: "No minimums. Even one sale could win—though that's unlikely 😉",
      code: "// No minimum requirement\nif (sales.length > 0) eligible = true;"
    }
  ];

  // Intersection Observer for scroll animations
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

  return (
    <section id="faq" className="section bg-dark/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
      <div className="absolute bottom-1/3 right-0 w-1/2 h-1/3 bg-gradient-to-l from-primary-900/20 to-accent-900/20 blur-3xl -z-10"></div>
      
      {/* Code-inspired floating elements */}
      <div className="absolute top-20 left-10 hidden lg:block fade-in">
        <div className="glass-card p-3 border-primary-400/20 shadow-neon-primary">
          <div className="flex items-center mb-2">
            <Terminal className="h-4 w-4 text-accent-400 mr-2" />
            <span className="text-light/60 text-xs">faq.js</span>
          </div>
          <div className="font-mono text-xs text-light/60">
            <div className="typewriter text-accent-300/80">const</div>
            <div className="typewriter typewriter-delay-1 ml-2">
              <span className="text-primary-400">faqItems</span>
              <span className="text-accent-300/80"> = </span>
              <span className="text-light/60">[...];</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="section-title">
          <h2 className="gradient-text">Need clarity?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-light/80">
            Find answers to common questions about the XBesh Early-Bird Affiliate Contest.
          </p>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Disclosure key={index} as="div" className={`glass-card-hover overflow-hidden border-white/10 hover:border-primary-400/30 hover:shadow-neon-primary transition-all duration-500 relative fade-in fade-in-delay-${index + 1}`}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center w-full px-8 py-5 text-left focus:outline-none">
                      <span className="text-lg font-medium">{faq.question}</span>
                      {open ? (
                        <ChevronUp className="h-5 w-5 text-accent-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-accent-400" />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-8 pb-6">
                      <p className="text-light/80 mb-4">{faq.answer}</p>
                      
                      {/* Code snippet */}
                      <div className="p-3 bg-dark-100/50 rounded-lg border border-white/5">
                        <div className="font-mono text-xs">
                          {faq.code.split('\n').map((line, i) => (
                            <div key={i} className={line.startsWith('//') ? 'text-primary-400/60' : 'text-accent-300/80'}>
                              {line}
                            </div>
                          ))}
                        </div>
                      </div>
                    </Disclosure.Panel>
                    
                    {/* Floating decoration */}
                    {open && (
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-500/20 rounded-lg border border-accent-400/20 flex items-center justify-center rotate-12 animate-float hidden md:flex">
                        <Code className="h-4 w-4 text-accent-400" />
                      </div>
                    )}
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#hero" className="btn-outline rounded-full px-8 relative overflow-hidden group">
            <span className="relative z-10">Register Now</span>
            <span className="absolute top-0 right-full w-full h-full bg-primary-500/20 transform transition-transform duration-1000 ease-out group-hover:right-0"></span>
          </a>
        </div>
        
        {/* Floating code element */}
        <div className="absolute bottom-10 right-10 hidden lg:flex items-center fade-in fade-in-delay-4">
          <Braces className="h-5 w-5 text-primary-400/40 mr-2" />
          <div className="font-mono text-xs text-primary-400/40">
            <span className="typewriter text-accent-300/40">export</span> <span className="typewriter typewriter-delay-1 text-primary-400/40">{ '{' } FAQ { '}' }</span>;
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
