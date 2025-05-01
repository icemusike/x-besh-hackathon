import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Terminal, Code, Braces, HelpCircle } from 'lucide-react';
import { Disclosure } from '@headlessui/react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Who is qualified to join the contest?",
      answer: "Everyone who promotes xBesh during the pre-launch and main launch period is qualified to join the $500 Hackathon contest. Just register here!",
      code: "isQualified = isPromoting(xBesh) && isRegistered();"
    },
    {
      question: "Is there a minimum sales requirement?",
      answer: "No! There is no minimum sales requirement for the Hackathon contest. Simply confirm your launch involvement by registering and getting your affiliate link.",
      code: "// No minimum sales required for Hackathon prize\ncanWinHackathon = isRegistered();"
    },
    {
      question: "What can I create for the hackathon?",
      answer: "Anything! A Website, Blog, Landing Page, SaaS Platform, Mobile App simulation, web tools, AI-powered tools, simple games... your imagination is the only limit. Show off what XBesh can do!",
      code: "projectType = 'Anything Creative'; // e.g., SaaS, Website, Tool"
    },
    {
      question: "How do I join and submit my project?",
      answer: "First, register on this page. Once your XBesh-built app or website is functional, submit its live URL via the submission page: https://hackathon.xbesh.com/submit",
      code: "submitProject('https://hackathon.xbesh.com/submit', { liveUrl });"
    },
    {
      question: "How is the Hackathon winner selected?",
      answer: "We will host a live session where we review all submitted projects. The winner will be decided by community vote during that session.",
      code: "winner = communityVote(submittedProjects);"
    },
    {
      question: "I don't have a big list, can I still win the Hackathon?",
      answer: "Absolutely! This contest is about creativity and building something cool with XBesh. Your list size doesn't matter here. Build it -> Show it -> Get Paid!",
      code: "canWin = creativity && determination; // List size irrelevant"
    },
    {
      question: "What about the $10,000 launch prize pool?",
      answer: "That's a separate contest that starts when the main product launch cart opens. That competition will be based on traditional affiliate metrics like gross revenue and total sales.",
      code: "launchContest = basedOnRevenue && totalSales; // Separate contest"
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <h2 className="gradient-text">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-2xl mx-auto text-light/80">
            Got questions about the hackathon? Find your answers here.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-800/70 rounded-xl overflow-hidden shadow-sm hover:border-primary-500/50 transition-colors duration-300">
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary-400 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="p-5 bg-gray-950/70 border-t border-gray-800/50">
                  <p className="text-light/80 mb-4 text-base leading-relaxed">{faq.answer}</p>
                  {/* Code snippet styling */}
                  <div className="bg-black/50 p-3 rounded-md border border-gray-700/50">
                    <pre className="font-mono text-xs text-accent-300/80 overflow-x-auto">
                      <code>{faq.code}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          ))}
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
