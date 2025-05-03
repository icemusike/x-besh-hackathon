import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AffiliateStrategies: React.FC = () => {
  // Subtle scroll animation effect
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on load
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-dark text-light relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-primary-500/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-accent-600/10 to-transparent blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary-900/20 to-accent-900/5 blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/subtle-noise.png')] opacity-[0.03] mix-blend-soft-light"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section with Premium Styling */}
        <div className="text-center mb-16 animate-on-scroll">
          <Link to="/" className="group inline-flex items-center text-primary-400 hover:text-primary-300 mb-6 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/80 hover:border-primary-500/50 transition-all duration-300">
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 leading-tight">
              xBesh AI – Golden‑Key Giveaway Strategy
            </h1>
            <div className="absolute -inset-1 blur-lg opacity-20 bg-gradient-to-r from-primary-400 to-accent-400 -z-10 rounded-3xl"></div>
          </div>
          
          <h2 className="text-2xl text-gray-300 mb-3 font-light">Practical, Step‑by‑Step Guide for Affiliate Partners</h2>
          <div className="inline-block px-4 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/80 text-gray-400 mt-2">
            <p className="text-sm font-mono">Version 1.0 · May 4, 2025</p>
          </div>
        </div>
        
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Purpose Section - Premium Card */}
          <div className="animate-on-scroll relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative p-8 bg-gray-900/90 backdrop-blur-sm rounded-xl border border-gray-700/60 shadow-2xl">
              <h3 className="text-primary-300 flex items-center text-2xl mb-4 font-semibold">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-900/50 border border-primary-500/30 mr-3">📌</span>
                Purpose
              </h3>
              <p className="text-lg leading-relaxed">
                Leverage a scarcity‑driven <em className="text-primary-300 font-medium not-italic">Golden‑Key</em> giveaway to warm up your list, improve deliverability & engagement, 
                and prime subscribers for xBesh AI launch conversions.
              </p>
            </div>
          </div>
          
          {/* Section 1: Big Picture Overview */}
          <div className="mt-16 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-900/50 border border-primary-500/30 flex items-center justify-center mr-3 text-primary-300">1</div>
              <h2 className="text-3xl font-bold text-primary-200">
                Big‑Picture Overview
              </h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8 opacity-70"></div>
          
            {/* Table with no scrolling */}
            <div className="mb-8 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600/10 to-accent-600/10 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-full bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-xl overflow-hidden">
                <table className="w-full table-fixed">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 text-left text-sm font-semibold text-primary-300 border-b border-gray-700/50 w-1/3">What</th>
                      <th className="py-4 px-6 text-left text-sm font-semibold text-primary-300 border-b border-gray-700/50 w-2/3">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-6 text-gray-200 font-medium">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-900/30 border border-amber-500/30 flex items-center justify-center mr-3 text-amber-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7h1a2 2 0 012 2v1a2 2 0 01-2 2h-1m-6 4h1a2 2 0 002-2v-1a2 2 0 00-2-2H9" /></svg>
                          </div>
                          <strong>5 unique Golden Keys</strong> per affiliate
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-300 break-words">
                        Creates exclusivity + viral demand ("only 5 left!")
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-6 text-gray-200 font-medium">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-900/30 border border-green-500/30 flex items-center justify-center mr-3 text-green-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          </div>
                          <strong>Free early access</strong> for key holders
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-300 break-words">
                        Removes purchase friction & builds trust ahead of launch
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-6 text-gray-200 font-medium">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center mr-3 text-blue-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                          </div>
                          <strong>Hackathon entry prerequisite</strong>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-300 break-words">
                        Ensures you (affiliate) are invested & can demo xBesh yourself
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-6 text-gray-200 font-medium">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-900/30 border border-purple-500/30 flex items-center justify-center mr-3 text-purple-400">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                          </div>
                          <strong>Live webinars with extra key drops</strong>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-300 break-words">
                        Pushes webinar attendance → higher mid‑ticket sales
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          
            <div className="bg-gradient-to-r from-primary-900/40 to-accent-900/40 p-6 border-l-4 border-primary-500 rounded-lg shadow-xl animate-on-scroll">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <p className="text-gray-100 font-medium text-lg">
                  <strong className="text-primary-300">Outcome:</strong> Higher opens, clicks, replies and EPCs before cart opens on <strong className="text-accent-300">May 8 @ 11 AM EST</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Key Dates */}
          <div className="mt-16 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-900/50 border border-primary-500/30 flex items-center justify-center mr-3 text-primary-300">2</div>
              <h2 className="text-3xl font-bold text-primary-200">
                Key Dates & Deadlines
              </h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8 opacity-70"></div>
          
            {/* Table with no scrolling */}
            <div className="mb-8 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600/10 to-accent-600/10 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-full bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-xl overflow-hidden">
                <table className="w-full table-fixed">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 text-left text-sm font-semibold text-primary-300 border-b border-gray-700/50 w-1/3">Date · ET</th>
                      <th className="py-4 px-6 text-left text-sm font-semibold text-primary-300 border-b border-gray-700/50 w-2/3">Milestone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-6 text-gray-200 font-medium"><strong className="text-primary-300">May 1</strong></td>
                      <td className="py-4 px-6 text-gray-300 break-words">Affiliate Hackathon opens · register at <span className="text-accent-400 font-mono text-sm">hackathon.xbesh.com</span></td>
                    </tr>
                    <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-6 text-gray-200 font-medium"><strong className="text-primary-300">May 3</strong></td>
                      <td className="py-4 px-6 text-gray-300 break-words">Golden‑Key Codes sent to registered affiliates</td>
                    </tr>
                    <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-6 text-gray-200 font-medium"><strong className="text-primary-300">May 5 23:59 EST</strong></td>
                      <td className="py-4 px-6 text-gray-300 break-words">Hackathon registration closes</td>
                    </tr>
                    <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-6 text-gray-200 font-medium"><strong className="text-primary-300">May 7 2 PM EST</strong></td>
                      <td className="py-4 px-6 text-gray-300 break-words">Webinar #1 · 10 extra keys raffled live</td>
                    </tr>
                    <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-6 text-gray-200 font-medium"><strong className="text-primary-300">May 8 10 AM EST</strong></td>
                      <td className="py-4 px-6 text-gray-300 break-words">Webinar #2 · final key raffle</td>
                    </tr>
                    <tr className="hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-6 text-gray-200 font-medium"><strong className="text-primary-300">May 8 11 AM EST</strong></td>
                      <td className="py-4 px-6 text-gray-300 break-words">Cart Opens + Mid‑Ticket Bundle offer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section 3: Quick Start Checklist - Premium Step Cards */}
          <div className="mt-16 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-900/50 border border-primary-500/30 flex items-center justify-center mr-3 text-primary-300">3</div>
              <h2 className="text-3xl font-bold text-primary-200">
                Quick‑Start Checklist (TL;DR)
              </h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8 opacity-70"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600/20 to-primary-600/5 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-5 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-700/50 flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-900/70 border border-primary-600/30 mr-3 text-primary-400 font-bold">1</span>
                  <div>
                    <p className="text-gray-200 font-medium">
                      <strong className="text-primary-300">Register for the Affiliate Hackathon</strong>
                    </p>
                    <a href="https://hackathon.xbesh.com" className="inline-flex items-center mt-1 text-sm text-accent-400 hover:text-accent-300 font-mono">
                      https://hackathon.xbesh.com
                      <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600/20 to-primary-600/5 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-5 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-700/50 flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-900/70 border border-primary-600/30 mr-3 text-primary-400 font-bold">2</span>
                  <div>
                    <p className="text-gray-200 font-medium">
                      <strong className="text-primary-300">Receive your 5 Keys</strong> (sent within 12 h of registration approval)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600/20 to-primary-600/5 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-5 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-700/50 flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-900/70 border border-primary-600/30 mr-3 text-primary-400 font-bold">3</span>
                  <div>
                    <p className="text-gray-200 font-medium">
                      <strong className="text-primary-300">Load email + social swipe copy</strong> into your ESP/SM scheduler
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600/20 to-primary-600/5 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-5 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-700/50 flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-900/70 border border-primary-600/30 mr-3 text-primary-400 font-bold">4</span>
                  <div>
                    <p className="text-gray-200 font-medium">
                      <strong className="text-primary-300">Tease</strong> the giveaway 12–24 h before release
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600/20 to-primary-600/5 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-5 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-700/50 flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-900/70 border border-primary-600/30 mr-3 text-primary-400 font-bold">5</span>
                  <div>
                    <p className="text-gray-200 font-medium">
                      <strong className="text-primary-300">Drop</strong> the keys (email or social)—first‑come, first‑served
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600/20 to-primary-600/5 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-5 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-700/50 flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-900/70 border border-primary-600/30 mr-3 text-primary-400 font-bold">6</span>
                  <div>
                    <p className="text-gray-200 font-medium">
                      <strong className="text-primary-300">Send FOMO follow‑ups</strong> ("3 left!", "All keys claimed? catch the webinar for more!")
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600/20 to-primary-600/5 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-5 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-700/50 flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-900/70 border border-primary-600/30 mr-3 text-primary-400 font-bold">7</span>
                  <div>
                    <p className="text-gray-200 font-medium">
                      <strong className="text-primary-300">Drive Webinar #1 registration</strong> for second chance key drops
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600/20 to-primary-600/5 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-5 bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-700/50 flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-900/70 border border-primary-600/30 mr-3 text-primary-400 font-bold">8</span>
                  <div>
                    <p className="text-gray-200 font-medium">
                      <strong className="text-primary-300">Track</strong> opens, CTR, webinar sign‑ups & key redemptions daily
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Detailed Execution Plan */}
          <div className="mt-16 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-900/50 border border-primary-500/30 flex items-center justify-center mr-3 text-primary-300">4</div>
              <h2 className="text-3xl font-bold text-primary-200">
                Detailed Execution Plan
              </h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8 opacity-70"></div>

            <h3 className="text-xl font-semibold text-primary-300 mb-3">
              4.1 Prerequisite – Join the Affiliate Hackathon (5 min)
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-gray-200">Register: <strong className="font-mono text-sm">hackathon.xbesh.com</strong></li>
              <li className="text-gray-200">Confirmation email → reply "Send my keys" or DM our team.</li>
              <li className="text-gray-200">You'll get a CSV with <strong>5 one‑time codes + redemption URL</strong>.</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary-300 mb-3">
              4.2 Decide Your Delivery Mechanism
            </h3>
            {/* Table with no scrolling */}
            <div className="mb-6 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600/10 to-accent-600/10 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-full bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-xl overflow-hidden">
                <table className="w-full table-fixed">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-primary-300 border-b border-gray-700/50" style={{width: "30%"}}>Method</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-primary-300 border-b border-gray-700/50" style={{width: "35%"}}>Pros</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-primary-300 border-b border-gray-700/50" style={{width: "35%"}}>Cons</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-3 px-4 text-gray-200 font-medium break-words"><strong>Instant email blast</strong></td>
                      <td className="py-3 px-4 text-gray-300 break-words">Fast, easy, measurable</td>
                      <td className="py-3 px-4 text-gray-300 break-words">Keys may vanish in minutes—risk of unsub complaints</td>
                    </tr>
                    <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-3 px-4 text-gray-200 font-medium break-words"><strong>Opt‑in landing page + auto‑response</strong></td>
                      <td className="py-3 px-4 text-gray-300 break-words">Builds segment for launch</td>
                      <td className="py-3 px-4 text-gray-300 break-words">Slight tech setup (opt‑in + key merge field)</td>
                    </tr>
                    <tr className="hover:bg-gray-800/30 transition-colors">
                      <td className="py-3 px-4 text-gray-200 font-medium break-words"><strong>Social post & DM claim</strong></td>
                      <td className="py-3 px-4 text-gray-300 break-words">Viral public proof, comments boost reach</td>
                      <td className="py-3 px-4 text-gray-300 break-words">Manual; need to DM winners</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-amber-900/30 p-4 border-l-4 border-amber-500 rounded mb-6">
              <p className="text-gray-100">
                <strong>Tip:</strong> Whatever you choose, never publish keys in plain text—use a <em>[CLICK TO REVEAL]</em> button or deliver via DM to maintain scarcity.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-primary-300 mb-3">
              4.3 Initial Proof‑Email — "15‑Minute Build"
            </h3>
            <p className="text-gray-300 mb-4">
              Send this <strong>at least 48 h before</strong> the Golden‑Key drop. Goal: show undeniable proof that xBesh delivers results fast and prime subscribers for scarcity.
            </p>
            <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
              <p className="font-semibold text-gray-200 mb-2">Subject ideas:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li className="text-gray-300">"I built this entire app in <strong>15 minutes</strong> with AI 🤯"</li>
                <li className="text-gray-300">"Coffee break → fully‑working SaaS, thanks to Agentic AI"</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
              <p className="font-semibold text-gray-200 mb-2">Body outline:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li className="text-gray-300">Hook: the pain you solved ("needed a booking tool—took 15 min").</li>
                <li className="text-gray-300">GIF/Screenshot of the finished micro‑app.</li>
                <li className="text-gray-300">30‑sec Loom/YT demo link.</li>
                <li className="text-gray-300">Soft teaser: <em>"I have 5 VIP passes dropping tomorrow—watch your inbox."</em></li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-primary-300 mb-3">
              4.4 Golden‑Key Giveaway Email + Non‑Opens Follow‑Up
            </h3>
            <p className="text-gray-300 mb-3">
              <strong>Send window:</strong> 24 h after proof email.
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li className="text-gray-200">
                <strong>Main blast</strong> to full list with a countdown timer and clear CTA.
              </li>
              <li className="text-gray-200">
                <strong>Follow‑Up to Non‑Opens</strong> (6 h later) → resend with new subject + preheader.
              </li>
            </ol>
            <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
              <p className="font-semibold text-gray-200 mb-2">Main subject options:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li className="text-gray-300">"🚀 Claim 1 of 5 FREE xBesh passes (0 cost, builds apps in minutes)"</li>
                <li className="text-gray-300">"⏳ Only 5 Golden Keys—unlock xBesh AI FREE"</li>
              </ul>
              <p className="text-gray-300 mt-2 italic">
                Non‑openers subject: "⏰ FINAL CALL – grab your xBesh key before midnight!"
              </p>
              <p className="text-gray-300 mt-2">
                PS in both emails: <em>"Missed the keys? We're dropping 10 more LIVE—register below."</em>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-primary-300 mb-3">
              4.5 Webinar Registration Invite — Key FOMO + Live Build
            </h3>
            <p className="text-gray-300 mb-3">
              Send <strong>immediately after</strong> keys are claimed <strong>or</strong> 24 h after the key email.
            </p>
            <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
              <p className="font-semibold text-gray-200 mb-2">Highlight:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li className="text-gray-300">10 extra Golden Keys raffled live</li>
                <li className="text-gray-300">Live "audience idea → product in 10 min" demo</li>
                <li className="text-gray-300">Mid‑ticket bundle sneak peek (limited to webinar attendees)</li>
              </ul>
              <p className="text-gray-300 mt-2">
                <strong>CTA:</strong> Big button ➜ Webinar registration URL.
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
              <p className="font-semibold text-gray-200 mb-2">FOMO Follow‑Ups</p>
              <ul className="list-disc pl-6 space-y-1">
                <li className="text-gray-300"><strong>+6 h:</strong> "🔥 3 keys gone—2 left!"</li>
                <li className="text-gray-300"><strong>+12 h:</strong> "⏰ Last call – keys vanish at midnight"</li>
                <li className="text-gray-300"><strong>Sold out:</strong> Point to webinar registration link.</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-primary-300 mb-3">
              4.6 Webinar Push (May 6 evening & May 7 morning)
            </h3>
            <p className="text-gray-300 mb-4">
              Send calendar invite .ics + reminders. Highlight live build, extra keys, and mid‑ticket bundle reveal.
            </p>

            <h3 className="text-xl font-semibold text-primary-300 mb-3">
              4.7 Post‑Key Nurture (May 7–8)
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-gray-200">Share hackathon winner story → social proof.</li>
              <li className="text-gray-200">Show screenshots of apps built with keys → credibility.</li>
              <li className="text-gray-200">Hint at <strong>Members‑Only $1 000 Hackathon</strong> to increase purchase intent.</li>
            </ul>
          </div>

          {/* Section 5: KPI Dashboard */}
          <div className="mt-16 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-900/50 border border-primary-500/30 flex items-center justify-center mr-3 text-primary-300">5</div>
              <h2 className="text-3xl font-bold text-primary-200">
                KPI Dashboard (track daily)
              </h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8 opacity-70"></div>
            
            {/* Table with no scrolling */}
            <div className="mb-6 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600/10 to-accent-600/10 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-full bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-xl overflow-hidden">
                <table className="w-full table-fixed">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-primary-300 border-b border-gray-700/50 w-2/3">Metric</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-primary-300 border-b border-gray-700/50 w-1/3">Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-3 px-4 text-gray-200 break-words">Email Open Rate</td>
                      <td className="py-3 px-4 text-gray-300 break-words">≥ 30 %</td>
                    </tr>
                    <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-3 px-4 text-gray-200 break-words">Email Click-Through</td>
                      <td className="py-3 px-4 text-gray-300 break-words">≥ 5 %</td>
                    </tr>
                    <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-3 px-4 text-gray-200 break-words">Key Claims (all 5)</td>
                      <td className="py-3 px-4 text-gray-300 break-words">≤ 24 h</td>
                    </tr>
                    <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-3 px-4 text-gray-200 break-words">Webinar Registrations</td>
                      <td className="py-3 px-4 text-gray-300 break-words">≥ 60 % of clickers</td>
                    </tr>
                    <tr className="hover:bg-gray-800/30 transition-colors">
                      <td className="py-3 px-4 text-gray-200 break-words">Webinar Show-Up Rate</td>
                      <td className="py-3 px-4 text-gray-300 break-words">≥ 35 %</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-gray-300 italic mb-8">
              Update results in the shared Notion sheet twice per day.
            </p>
          </div>

          {/* Section 6: Resources & Links */}
          <div className="mt-16 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-900/50 border border-primary-500/30 flex items-center justify-center mr-3 text-primary-300">6</div>
              <h2 className="text-3xl font-bold text-primary-200">
                Resources & Links
              </h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8 opacity-70"></div>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-gray-200">
                <strong>Affiliate Hub / JV Doc</strong> ➜ <a href="https://jv.xbesh.com" className="text-primary-400 hover:text-primary-300 font-mono text-sm">https://jv.xbesh.com</a>
              </li>
              <li className="text-gray-200">
                <strong>Hackathon Registration</strong> ➜ <a href="https://hackathon.xbesh.com" className="text-primary-400 hover:text-primary-300 font-mono text-sm">https://hackathon.xbesh.com</a>
              </li>
              <li className="text-gray-200">
                <strong>Webinar Registration</strong> ➜ <a href="https://hackathon.xbesh.com/webinar-registration" className="text-primary-400 hover:text-primary-300 font-mono text-sm">https://hackathon.xbesh.com/webinar-registration</a>
              </li>
              <li className="text-gray-200">
                <strong>Demo Videos</strong> ➜ <a href="https://demo.xbesh.com" className="text-primary-400 hover:text-primary-300 font-mono text-sm">https://demo.xbesh.com</a>
              </li>
              <li className="text-gray-200">
                <strong>Golden‑Key Redemption Portal</strong> ➜ <a href="https://access.xbesh.com" className="text-primary-400 hover:text-primary-300 font-mono text-sm">https://access.xbesh.com</a>
              </li>
            </ul>
          </div>

          {/* Section 7: FAQ */}
          <div className="mt-16 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-900/50 border border-primary-500/30 flex items-center justify-center mr-3 text-primary-300">7</div>
              <h2 className="text-3xl font-bold text-primary-200">
                FAQ
              </h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8 opacity-70"></div>
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-gray-200 font-semibold">Q: Can I request more than 5 keys?</p>
                <blockquote className="pl-4 border-l-2 border-gray-600 mt-1">
                  <p className="text-gray-300">
                    At this stage, no. Scarcity is strategic. Extra keys may be awarded to top‑performing affiliates—watch Slack.
                  </p>
                </blockquote>
              </div>
              
              <div>
                <p className="text-gray-200 font-semibold">Q: Do key holders need to enter payment details?</p>
                <blockquote className="pl-4 border-l-2 border-gray-600 mt-1">
                  <p className="text-gray-300">
                    No. Keys grant 100 % free access until launch day.
                  </p>
                </blockquote>
              </div>
              
              <div>
                <p className="text-gray-200 font-semibold">Q: Where do I track my referrals?</p>
                <blockquote className="pl-4 border-l-2 border-gray-600 mt-1">
                  <p className="text-gray-300">
                    Your affiliate dashboard inside the JV portal shows clicks, keys claimed, webinar sign‑ups, and eventual sales.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Section 8: Support & Contact */}
          <div className="mt-16 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-900/50 border border-primary-500/30 flex items-center justify-center mr-3 text-primary-300">8</div>
              <h2 className="text-3xl font-bold text-primary-200">
                Support & Contact
              </h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8 opacity-70"></div>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-gray-200">
                <strong>Launch Skype/Discord:</strong> <code className="bg-gray-800 px-2 py-1 rounded text-gray-300 font-mono">xbesh.launch</code>
              </li>
              <li className="text-gray-200">
                <strong>Email:</strong> <a href="mailto:partners@xbesh.com" className="text-primary-400 hover:text-primary-300 font-mono">partners@xbesh.com</a>
              </li>
              <li className="text-gray-200">
                <strong>Affiliate Manager:</strong> Patrick C.
              </li>
            </ul>
          </div>

          {/* Final CTA/Quote Section */}
          <div className="mt-16 animate-on-scroll">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative p-8 bg-gray-900/80 backdrop-blur-lg rounded-xl border border-gray-700/80 shadow-2xl">
                <svg className="w-12 h-12 text-primary-400 opacity-20 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-2xl text-primary-200 italic font-medium mb-6 relative z-10">
                  Ready to ignite your list? Scarcity starts the moment you hit "Send."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl text-gray-200 font-bold">
                      Let's break records together!
                    </p>
                    <p className="text-gray-300 mt-1">
                      — The xBesh AI Launch Crew 🚀
                    </p>
                  </div>
                  <div className="ml-auto">
                    <a 
                      href="https://hackathon.xbesh.com" 
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-full hover:from-primary-500 hover:to-accent-400 transition-all duration-300 font-semibold shadow-lg hover:shadow-primary-500/30"
                    >
                      <span>Start Now</span>
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animation classes are added to the document instead of using style jsx */}
      <div className="hidden">
        {/* These classes are used by the animation effect in the useEffect hook */}
        <div className="animate-on-scroll opacity-0 transform translate-y-5 transition-all duration-600 ease-out"></div>
        <div className="animate-fade-in opacity-100 transform translate-y-0"></div>
      </div>
    </div>
  );
};

export default AffiliateStrategies; 