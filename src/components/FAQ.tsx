import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Disclosure } from '@headlessui/react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Who can participate in the XBesh Affiliate Hackathon?",
      answer: "The hackathon is open to everyone, including developers, designers, marketers, and entrepreneurs. You can participate as an individual or as a team of up to 4 members."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in the XBesh Affiliate Hackathon is completely free. All you need to do is register before the deadline."
    },
    {
      question: "What kind of projects can I build?",
      answer: "You can build any type of project that leverages the XBesh affiliate platform. This includes web applications, mobile apps, browser extensions, analytics tools, marketing solutions, and more."
    },
    {
      question: "Do I need to have prior experience with XBesh?",
      answer: "No prior experience with XBesh is required. We provide comprehensive documentation, starter templates, and support to help you get started quickly."
    },
    {
      question: "How will projects be judged?",
      answer: "Projects will be evaluated based on creativity, technical implementation, business viability, and affiliate growth potential. Our panel of judges includes industry experts and XBesh team members."
    },
    {
      question: "Can I use existing code or open-source libraries?",
      answer: "Yes, you can use existing code, libraries, and frameworks as long as you have the right to use them. However, your core project idea and implementation should be original."
    },
    {
      question: "Will I retain ownership of my project?",
      answer: "Yes, you will retain full ownership of your intellectual property. By participating, you grant XBesh a license to showcase your project for promotional purposes."
    },
    {
      question: "How and when will winners be announced?",
      answer: "Winners will be announced during the XBesh product launch on May 8, 2025, at 11 AM EST. All participants will be notified via email, and winners will be featured on our website."
    }
  ];

  return (
    <section id="faq" className="section bg-dark/50">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-2xl mx-auto text-light/80">
            Find answers to common questions about the XBesh Affiliate Hackathon.
          </p>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure key={index} as="div" className="glass-card overflow-hidden">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none">
                      <span className="text-lg font-medium">{faq.question}</span>
                      {open ? (
                        <ChevronUp className="h-5 w-5 text-accent" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-accent" />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 pb-4 text-light/70">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-light/80 mb-4">
            Still have questions? We're here to help!
          </p>
          <a href="mailto:hackathon@xbesh.com" className="btn-outline">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
