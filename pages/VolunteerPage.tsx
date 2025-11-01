
import React from 'react';

const VolunteerPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#004165]">Be the Heart of the Conference!</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Volunteering is a fantastic way to meet new people, develop skills, and contribute to the success of our District conference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#772432] mb-4">Why Volunteer?</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
              <li>Meet fellow Toastmasters from across the District.</li>
              <li>Be an integral part of the conference team.</li>
              <li>Practice leadership and organizational skills.</li>
              <li>Receive a special "Thank You" gift as our appreciation.</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-[#004165] mb-8">Volunteer Sign-up Form</h2>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-2xl border border-gray-200">
                <p className="text-center text-gray-600 mb-4">
                  Please use the link below to let us know your availability and preferred roles. We appreciate your support!
                </p>
                <div className="aspect-w-1 aspect-h-1">
                  <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-md">
                    <p className="text-gray-500">
                           <a href="https://forms.d71toastmasters.org/t/i5WSHvDgmjus" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#F2DF74] to-yellow-300 text-[#004165] font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300" >
            Sign Up to be a Volunteer!
          </a>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;
