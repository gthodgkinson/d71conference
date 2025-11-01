
import React, { useState } from 'react';

type Day = 'Friday' | 'Saturday' | 'Sunday';

const agendaData = {
  Friday: [
    { time: '14:00', event: 'Registration Opens' },
    { time: '17:00', event: 'First Timers Welcome Reception' },
    { time: '18:00', event: 'Opening Ceremony' },
    { time: '19:30', event: 'Contest Finals (Humorous Speech)' },
  ],
  Saturday: [
    { time: '09:00', event: 'Contest Finals (Table Topics)' },
    { time: '11:00', event: 'Workshop 1' },
    { time: '14:00', event: 'Contest Finals (Evaluation)' },
    { time: '15:30', event: 'Keynote Speaker' },
    { time: '19:00', event: 'Gala Dinner Reception & Awards Ceremony' },
  ],
  Sunday: [
    { time: '09:30', event: 'Workshop 2' },
    { time: '11:00', event: 'International Speech Contest Finals' },
    { time: '12:30', event: 'Closing Ceremony & 2027 Conference Handover' },
  ],
};

const AgendaPage: React.FC = () => {
  const [activeDay, setActiveDay] = useState<Day>('Friday');

  const DayTab: React.FC<{ day: Day }> = ({ day }) => (
    <button
      onClick={() => setActiveDay(day)}
      className={`py-3 px-6 text-lg font-bold rounded-t-lg transition-colors duration-300 w-full md:w-auto ${
        activeDay === day ? 'bg-[#772432] text-white' : 'bg-[#A9B2B1] text-[#004165] hover:bg-gray-300'
      }`}
    >
      {day}, {day === 'Friday' ? '8th' : day === 'Saturday' ? '9th' : '10th'} May 2026
    </button>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#004165] mb-12">Conference Agenda</h1>
        
        <div className="flex flex-col md:flex-row border-b-4 border-[#772432] mb-0">
          <DayTab day="Friday" />
          <DayTab day="Saturday" />
          <DayTab day="Sunday" />
        </div>

        <div className="bg-white p-8 rounded-b-lg shadow-2xl">
          <ul>
            {agendaData[activeDay].map((item, index) => (
              <li key={index} className="flex items-start py-6 border-b border-gray-200 last:border-b-0">
                <div className="w-24 text-[#772432] font-bold text-lg">{item.time}</div>
                <div className="flex-1 pl-6 text-gray-800 text-lg">{item.event}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AgendaPage;
