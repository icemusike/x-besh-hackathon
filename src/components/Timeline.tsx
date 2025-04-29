import React from 'react';
import { Calendar, Award, ShoppingCart } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const Timeline: React.FC = () => {
  // Event dates
  const registrationEndDate = new Date('2025-05-06T04:59:00Z'); // May 5, 2025, 23:59 EST
  const judgingDate = new Date('2025-05-06T18:00:00Z'); // May 6, 2025, 2 PM EST
  const cartOpeningDate = new Date('2025-05-08T15:00:00Z'); // May 8, 2025, 11 AM EST
  
  const timelineEvents = [
    {
      icon: <Calendar className="h-8 w-8 text-accent" />,
      title: "Registration & Project Building",
      date: "Now – May 5, 2025, 23:59 EST",
      description: "Register for the hackathon and start building your project. Submit your entry before the deadline.",
      targetDate: registrationEndDate,
      current: true
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Live Judging Webinar",
      date: "May 6, 2025, 2 PM EST",
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
      }
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-accent" />,
      title: "XBesh Cart Opening & Winner Reveal",
      date: "May 8, 2025, 11 AM EST",
      description: "The official XBesh product launch begins and hackathon winners are announced.",
      targetDate: cartOpeningDate
    }
  ];

  return (
    <section id="timeline" className="section bg-dark/50">
      <div className="container">
        <div className="section-title">
          <h2 className="gradient-text">Event Timeline</h2>
          <p className="mt-4 max-w-2xl mx-auto text-light/80">
            Mark these key dates in your calendar to stay on track throughout the hackathon.
          </p>
        </div>
        
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-accent -translate-x-1/2"></div>
          
          {/* Timeline events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                {/* Desktop layout */}
                <div className="hidden md:flex items-center">
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12 order-last'}`}>
                    <div className={`glass-card p-6 ${event.current ? 'border-primary' : ''}`}>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-accent font-medium mb-3">{event.date}</p>
                      <p className="text-light/70 mb-4">{event.description}</p>
                      
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
                  
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-dark border-2 border-primary z-10">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
                
                {/* Mobile layout */}
                <div className="md:hidden flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark border-2 border-primary z-10">
                      {event.icon}
                    </div>
                    {index !== timelineEvents.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-primary to-accent"></div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className={`glass-card p-6 ${event.current ? 'border-primary' : ''}`}>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-accent font-medium mb-3">{event.date}</p>
                      <p className="text-light/70 mb-4">{event.description}</p>
                      
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
