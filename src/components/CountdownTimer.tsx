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
      return <span className="text-error-500 font-bold">This deadline has passed</span>;
    }
    
    return (
      <div className="grid grid-cols-4 gap-4">
        {[
          { value: days, label: 'Days' },
          { value: hours, label: 'Hours' },
          { value: minutes, label: 'Minutes' },
          { value: seconds, label: 'Seconds' }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full aspect-square flex items-center justify-center bg-dark-100/50 rounded-xl border border-white/10 shadow-glass-sm mb-2 backdrop-blur-sm">
              <span className="text-2xl md:text-4xl font-bold font-poppins gradient-text">{item.value}</span>
            </div>
            <span className="text-xs md:text-sm text-light/80 font-medium">{item.label}</span>
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
