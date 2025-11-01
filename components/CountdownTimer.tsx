
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2026-05-08T00:00:00') - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => {
    return (
      <div key={interval} className="flex flex-col items-center justify-center bg-[#004165] text-white p-4 rounded-lg shadow-xl min-w-[80px]">
        <span className="text-4xl lg:text-5xl font-bold text-[#F2DF74]">{value}</span>
        <span className="text-sm uppercase tracking-wider">{interval}</span>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default CountdownTimer;
