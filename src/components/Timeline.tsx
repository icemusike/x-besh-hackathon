import React from 'react';
import { Calendar, Award, ShoppingCart, Terminal, Code, Braces } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const Timeline: React.FC = () => {
  // Event dates
  const contestEndDate = new Date('2025-05-08T04:59:00Z'); // May 7, 2025, 23:59 EST
  const winnerRevealDate = new Date('2025-05-08T14:30:00Z'); // May 8, 2025, 10:30 EST
  const launchDate = new Date('2025-05-08T15:00:00Z'); // May 8, 2025, 11:00 EST
  
  const timelineEvents = [
    {
      icon: <Calendar className="h-8 w-8 text-accent-400" />,
      title: "Drive clicks & front-end sales",
      date: "NOW – 07 May 2025, 23:59 EST",
      description: "Drive traffic and sales through your JVZoo affiliate link (auto-tracked in JVZoo).",
      targetDate: contestEndDate,
      current: true,
      code: "// Current phase\nconst phase = 'TRAFFIC_GENERATION';"
    },
    {
      icon: <Award className="h-8 w-8 text-accent-400" />,
      title: "$500 winner revealed live",
      date: "08 May 2025, 10:30 EST",
      description: "Winner announced 30 minutes before the official cart opens.",
      targetDate: winnerRevealDate,
      calendarEvent: {
        name: "XBesh Contest - $500 Winner Reveal",
        startDate: "2025-05-08",
        startTime: "10:30",
        endTime: "11:00",
        timeZone: "America/New_York",
        location: "Online Webinar",
        description: "$500 winner of the XBesh Early-Bird Affiliate Contest revealed live."
      },
      code: "// Winner announcement\nawait contest.announceWinner();"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-accent-400" />,
      title: "Official launch & main leaderboard",
      date: "08 May 2025, 11:00 EST",
      description: "The official XBesh AGI product launch begins and the main affiliate leaderboard kicks off.",
      targetDate: launchDate,
      code: "// Main launch begins\nconst mainContest = new Contest();"
    }
  ];

  return (
    <section id="timeline" className="section bg-dark/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
      
      {/* Code-inspired floating elements */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <div className="glass-card p-3 border-primary-400/20 shadow-neon-primary">
          <div className="flex items-center mb-2">
            <Terminal className="h-4 w-4 text-accent-400 mr-2" />
            <span className="text-light/60 text-xs">timeline.js</span>
          </div>
          <div className="font-mono text-xs text-light/60">
            <div className="text-accent-300/80">const</div>
            <div className="ml-2">
              <span className="text-primary-400">timeline</span>
              <span className="text-accent-300/80"> = </span>
              <span className="text-light/60">[...];</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="section-title">
          <h2 className="gradient-text">Early-Bird Contest Timeline</h2>
          <p className="mt-4 max-w-2xl mx-auto text-light/80">
            Mark these key dates in your calendar to maximize your chances of winning the $500 prize.
          </p>
        </div>
        
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-500 -translate-x-1/2 rounded-full shadow-neon"></div>
          
          {/* Timeline events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                {/* Desktop layout */}
                <div className="hidden md:flex items-center">
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12 order-last'}`}>
                    <div className={`glass-card p-6 ${event.current ? 'border-primary-400/30 shadow-neon-primary' : ''} hover:border-primary-400/30 hover:shadow-neon-primary transition-all duration-500`}>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-accent-400 font-medium mb-3">{event.date}</p>
                      <p className="text-light/70 mb-4">{event.description}</p>
                      
                      {/* Code snippet */}
                      <div className="mb-4 p-3 bg-dark-100/50 rounded-lg border border-white/5">
                        <div className="font-mono text-xs">
                          {event.code.split('\n').map((line, i) => (
                            <div key={i} className={line.startsWith('//') ? 'text-primary-400/60' : 'text-accent-300/80'}>
                              {line}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {event.targetDate && (
                        <div className="mt-4">
                          <CountdownTimer targetDate={event.targetDate} />
                        </div>
                      )}
                      
                      {event.calendarEvent && (
                        <div className="mt-4 flex justify-end">
                          <AddToCalendarButton
                            name={event.calendarEvent.name}
                            startDate={event.calendarEvent.startDate}
                            startTime={event.calendarEvent.startTime}
                            endTime={event.calendarEvent.endTime}
                            timeZone={event.calendarEvent.timeZone}
                            location={event.calendarEvent.location}
                            description={event.calendarEvent.description}
                            options={['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'Yahoo']}
                            buttonStyle="round"
                            lightMode="dark"
                            size="3"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark border-2 border-primary-400 z-10 shadow-neon-primary">
                    <div className="w-4 h-4 rounded-full bg-accent-400"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
                
                {/* Mobile layout */}
                <div className="md:hidden flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark border-2 border-primary-400 z-10 shadow-neon-primary">
                      {event.icon}
                    </div>
                    {index !== timelineEvents.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full shadow-neon"></div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className={`glass-card p-6 ${event.current ? 'border-primary-400/30 shadow-neon-primary' : ''} hover:border-primary-400/30 hover:shadow-neon-primary transition-all duration-500`}>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-accent-400 font-medium mb-3">{event.date}</p>
                      <p className="text-light/70 mb-4">{event.description}</p>
                      
                      {/* Code snippet */}
                      <div className="mb-4 p-3 bg-dark-100/50 rounded-lg border border-white/5">
                        <div className="font-mono text-xs">
                          {event.code.split('\n').map((line, i) => (
                            <div key={i} className={line.startsWith('//') ? 'text-primary-400/60' : 'text-accent-300/80'}>
                              {line}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {event.targetDate && (
                        <div className="mt-4">
                          <CountdownTimer targetDate={event.targetDate} />
                        </div>
                      )}
                      
                      {event.calendarEvent && (
                        <div className="mt-4">
                          <AddToCalendarButton
                            name={event.calendarEvent.name}
                            startDate={event.calendarEvent.startDate}
                            startTime={event.calendarEvent.startTime}
                            endTime={event.calendarEvent.endTime}
                            timeZone={event.calendarEvent.timeZone}
                            location={event.calendarEvent.location}
                            description={event.calendarEvent.description}
                            options={['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'Yahoo']}
                            buttonStyle="round"
                            lightMode="dark"
                            size="3"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Floating decoration */}
                <div className={`absolute ${index % 2 === 0 ? 'left-1/4' : 'right-1/4'} top-1/2 w-8 h-8 bg-accent-500/20 rounded-lg border border-accent-400/20 flex items-center justify-center ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'} animate-float hidden lg:flex`} style={{ animationDelay: `${index * 0.5}s` }}>
                  <Code className="h-4 w-4 text-accent-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
