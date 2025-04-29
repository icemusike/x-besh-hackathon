import React from 'react';
import Countdown from 'react-countdown';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  // Renderer for the countdown
  const renderer = ({ days, hours, minutes, seconds, completed }: { 
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return <span className="text-error">This deadline has passed</span>;
    }
    
    return (
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {[
          { value: days, label: 'Days' },
          { value: hours, label: 'Hours' },
          { value: minutes, label: 'Minutes' },
          { value: seconds, label: 'Seconds' }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full aspect-square flex items-center justify-center bg-primary/20 rounded-lg mb-1">
              <span className="text-xl md:text-3xl font-bold font-poppins">{item.value}</span>
            </div>
            <span className="text-xs md:text-sm text-light/70">{item.label}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Countdown date={targetDate} renderer={renderer} />
  );
};

export default CountdownTimer;
