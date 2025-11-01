
import React from 'react';

const ContestsPage: React.FC = () => {
  return (
    <div className="bg-white">
       <div className="relative py-20 bg-[#004165] text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold">The District Finals</h1>
            <p className="mt-4 text-xl">This is where champions are made!</p>
       </div>
       <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-12 text-center">
                The conference hosts the finals for the four main contests: International Speech, Humorous, Table Topics, and Evaluation. These contests feature the winners from all divisions across District 71, showcasing the very best speakers we have to offer.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg border-l-4 border-[#772432]">
                    <h2 className="text-2xl font-bold text-[#772432] mb-4">Information for Contestants</h2>
                    <p className="text-gray-600">
                        Area and Division winners will be contacted directly by their respective Division Director with full details. All contestants are required to attend mandatory briefings before their contest. Good luck to all participants!
                    </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg border-l-4 border-[#F2DF74]">
                    <h2 className="text-2xl font-bold text-[#004165] mb-4">Judges & Contest Officials</h2>
                    <p className="text-gray-600 mb-6">
                        We are seeking experienced Toastmasters to serve as judges, timers, tellers, and Sergeant at Arms. To be a voting judge, members must have completed at least Level 2 in any Path in the Pathways learning experience.
                    </p>
                    <a href="https://forms.d71toastmasters.org/t/i5WSHvDgmjus" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#F2DF74] to-yellow-300 text-[#004165] font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300" >
            Sign Up to be a Contest Official!
          </a>
                </div>
            </div>

          </div>
       </div>
    </div>
  );
};

export default ContestsPage;
