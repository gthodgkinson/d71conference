
import React from 'react';
import AccordionItem from '../components/AccordionItem';

const faqData = [
  {
    question: 'What is the dress code?',
    answer: 'Business casual is recommended for the main conference sessions and workshops. For the Saturday night Gala Dinner, the dress code is Black Tie / Formal.',
  },
  {
    question: 'Can I buy a ticket for just the Gala Dinner?',
    answer: 'Yes, "Gala Dinner Only" tickets will be made available closer to the event date on our registration page. Please check back for updates.',
  },
  {
    question: 'Do contestants need to buy a conference ticket?',
    answer: 'Yes, all attendees, including contestants, contest officials, and speakers, must purchase a conference ticket to gain access to the events.',
  },
  {
    question: 'Is my ticket refundable?',
    answer: 'Tickets are generally non-refundable after April 1st, 2026. However, tickets are fully transferable to another Toastmaster. Please contact the registration team to arrange a transfer.',
  },
   {
    question: 'What is included in the full conference ticket?',
    answer: 'A full weekend ticket typically includes access to all contest finals, workshops, the Friday night reception, and the Saturday Gala Dinner. Specific details will be confirmed on the registration page.',
  },
];

const FaqPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#004165] mb-12">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          {faqData.map((item, index) => (
            <AccordionItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
