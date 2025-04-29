import React, { useEffect } from 'react';
import { Calendar, Award, ShoppingCart, Terminal, Code, Braces } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const Timeline: React.FC = () => {
  // Event dates
  const contestEndDate = new Date('2025-05-06T04:59:00Z'); // May 5, 2025, 23:59 EST
  const judgingDate = new Date('2025-05-06T18:00:00Z'); // May 6, 2025, 2 PM EST
  const launchDate = new Date('2025-05-08T15:00:00Z'); // May 8, 2025, 11 AM EST
  
  const timelineEvents = [
    {
      icon: <Calendar className="h-8 w-8 text-accent-400" />,
      title: "Registration & Project Building",
      date: "NOW – 05 May 2025, 23:59 EST",
      description: "Register for the hackathon and start building your project. Submit your entry before the deadline.",
      targetDate: contestEndDate,
      current: true,
      code: "// Current phase\nconst phase = 'PROJECT_BUILDING';"
    },
    {
      icon: <Award className="h-8 w-8 text-accent-400" />,
      title: "Live Judging Webinar",
      date: "06 May 2025, 2 PM EST",
      description: "Join our live webinar where judges will review the top projects and provide feedback.",
      targetDate: judgingDate,
      calendarEvent: {
        name: "XBesh Hackathon - Live Judging Webinar",
        startDate: "2025-05-06",
        startTime: "14:00",
        endTime: "16:00",
        timeZone: "America/New_York",
        location: "Online Webinar",
        description: "Live judging of the XBesh Affiliate Hackathon 2025 projects."
      },
      code: "// Judging phase\nawait contest.evaluateProjects();"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-accent-400" />,
      title: "XBesh Cart Opening & Winner Reveal",
      date: "08 May 2025, 11 AM EST",
      description: "The official XBesh product launch begins and hackathon winners are announced.",
      targetDate: launchDate,
      code: "// Winner announcement\nconst winner = await contest.announceWinner();"
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
    <section id="timeline" className="section bg-dark/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
      
      {/* Code-inspired floating elements */}
      <div className="absolute top-20 left-10 hidden lg:block fade-in">
        <div className="glass-card p-3 border-primary-400/20 shadow-neon-primary">
          <div className="flex items-center mb-2">
            <Terminal className="h-4 w-4 text-accent-400 mr-2" />
            <span className="text-light/60 text-xs">timeline.js</span>
          </div>
          <div className="font-mono text-xs text-light/60">
            <div className="typewriter text-accent-300/80">const</div>
            <div className="typewriter typewriter-delay-1 ml-2">
              <span className="text-primary-400">timeline</span>
              <span className="text-accent-300/80"> = </span>
              <span className="text-light/60">[...];</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="section-title">
          <h2 className="gradient-text">Event Timeline</h2>
          <p className="mt-4 max-w-2xl mx-auto text-light/80">
            Mark these key dates in your calendar to stay on track throughout the hackathon.
          </p>
        </div>
        
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-500 -translate-x-1/2 rounded-full shadow-neon"></div>
          
          {/* Timeline events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'md:text-right' : ''} fade-in fade-in-delay-${index + 1}`}>
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
