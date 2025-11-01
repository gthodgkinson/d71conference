
import React from 'react';

const VenuePage: React.FC = () => {
  return (
    <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-[#004165] mb-4">Your Home for the Weekend</h1>
            <h2 className="text-2xl text-center text-[#772432] mb-12">The Rose Hotel, Tralee</h2>
    

            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <div className="bg-white p-8 rounded-lg shadow-xl">
                        <p className="text-lg text-gray-700 mb-6">
                            The Rose Hotel is a four-star, family-run hotel in Tralee, perfectly located on the picturesque Wild Atlantic Way. It offers luxurious accommodation and is renowned for its warm, welcoming atmosphere and exceptional service.
                        </p>
                        <a href="https://www.therosehotel.com/" target="_blank" rel="noopener noreferrer" className="text-[#004165] font-bold hover:underline">
                            Official Website: https://www.therosehotel.com/
                        </a>

                        <div className="mt-8 bg-[#772432] text-white p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-[#F2DF74]">Special Toastmasters Conference Rate</h3>
                            <p>
                                A special discounted rate is available for conference attendees. To book, please call the hotel directly at <strong className="font-bold">[Hotel Phone Number]</strong> and quote "Toastmasters 2026" to avail of the offer.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-white p-8 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-bold text-[#004165] mb-4">How to Get Here</h3>
                        <div className="aspect-w-16 aspect-h-9 mb-6">
                           <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.490892015502!2d-9.712616884208035!3d52.27092897976808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4845343c6838a55d%3A0x7d2f3c0b05b7669d!2sThe%20Rose%20Hotel!5e0!3m2!1sen!2sie!4v1678886432123!5m2!1sen!2sie" 
                                width="100%" 
                                height="300" 
                                style={{border:0}} 
                                allowFullScreen={true}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-md"
                           ></iframe>
                        </div>
                        <p className="font-semibold text-gray-800">Address: Dan Spring Rd, Tralee, Co. Kerry, V92 HKA4</p>
                        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                            <li><strong>By Air:</strong> Kerry Airport (KIR) is a 20-minute drive away.</li>
                            <li><strong>By Train:</strong> Tralee (Casement) Station has excellent connections across the country.</li>
                            <li><strong>By Car:</strong> Easily accessible with free, ample parking at the hotel.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default VenuePage;
