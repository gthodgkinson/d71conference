
import React from 'react';
import CountdownTimer from '../components/CountdownTimer';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white min-h-[70vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/1600/900?grayscale&blur=2" alt="Conference background" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 p-8">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider text-shadow-lg">Experience the Magic</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F2DF74] mb-4">District 71 Conference 2026</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Join us in Tralee for a weekend of inspiration, competition, and connection.</p>
          <div className="relative w-full max-w-2xl mx-auto h-64 bg-[#004165] rounded-lg shadow-2xl flex items-center justify-center mb-8">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col p-4">
              <p className="text-2xl font-bold">8-10 May 2026 | The Rose Hotel, Tralee</p>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white/70 mt-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <a href="https://forms.d71toastmasters.org/t/jbk6HTHbjYus" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#F2DF74] to-yellow-300 text-[#004165] font-bold py-4 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            REGISTER NOW - Early Bird Tickets Available!
          </a>
        </div>
      </section>

      {/* Key Information Section */}
      <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#004165]">
                  <h3 className="text-xl font-bold text-[#004165] mb-2">WHAT</h3>
                  <p className="text-gray-700 text-lg">D71 Annual Conference</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#772432]">
                  <h3 className="text-xl font-bold text-[#772432] mb-2">WHEN</h3>
                  <p className="text-gray-700 text-lg">8th, 9th & 10th May 2026</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#F2DF74]">
                  <h3 className="text-xl font-bold text-[#004165] mb-2">WHERE</h3>
                  <p className="text-gray-700 text-lg">The Rose Hotel, Tralee, Co. Kerry</p>
              </div>
          </div>
      </section>


      {/* Countdown Timer Section */}
      <section className="py-20 bg-[#772432] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">The Countdown is On!</h2>
          <div className="flex justify-center">
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#004165] mb-4">Rediscover Your Voice in the Heart of Kerry</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">This conference is the grand finale of the Toastmasters year, offering a unique opportunity to witness the District Finals, gain insights from world-class workshops, and celebrate with fellow Toastmasters.</p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#772432] mb-2">Witness Excellence</h3>
              <p className="text-gray-700">The District Finals for International Speech, Humorous, Table Topics, and Evaluation.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#772432] mb-2">Grow Your Skills</h3>
              <p className="text-gray-700">Engaging workshops on leadership and communication.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#772432] mb-2">Build Your Network</h3>
              <p className="text-gray-700">Connect with over 200 Toastmasters from across Ireland and the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* District Director Welcome */}
       <section className="py-16 bg-[#A9B2B1]">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#004165] mb-8">A Welcome from our District Director</h2>
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#772432]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M18 3a1 1 0 00-1.447-.894L4 7.438V6a1 1 0 00-2 0v8a1 1 0 001 1h12a1 1 0 001-1v-6.586l.63-.42a1 1 0 00.37-1.348zM4 14V9.82l10-3.334V14H4z" />
                </svg>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#772432] h-2.5 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <span className="text-sm text-gray-600">0:21 / 2:30</span>
            </div>
        </div>
      </section>

      {/* Venue Spotlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/800/600?image=1060" alt="The Rose Hotel" className="rounded-lg shadow-2xl" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-[#004165] mb-4">Luxury & Comfort at The Rose Hotel</h2>
            <p className="text-lg text-gray-600 mb-8">The 2026 conference will be held at the premier 4-star Rose Hotel in Tralee, offering luxurious rooms and exceptional service.</p>
            <button className="border-2 border-[#772432] text-[#772432] font-bold py-3 px-6 rounded-full hover:bg-[#772432] hover:text-white transition-colors duration-300">
              Learn More & Book Your Room
            </button>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="bg-gradient-to-r from-[#004165] to-[#002c44] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-lg mb-8">Secure your spot for a weekend of growth, laughter, and celebration.</p>
          <a href="https://forms.d71toastmasters.org/t/jbk6HTHbjYus" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#F2DF74] to-yellow-300 text-[#004165] font-bold py-4 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            REGISTER NOW
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
