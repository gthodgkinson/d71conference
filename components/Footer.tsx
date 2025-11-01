
import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#004165] text-white">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Toastmasters District 71. All Rights Reserved.</p>
        <button onClick={scrollToTop} className="mt-4 text-sm text-[#F2DF74] hover:underline">
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
