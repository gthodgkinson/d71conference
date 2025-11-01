import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ page, currentPage, setCurrentPage, children, onClick }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => {
        setCurrentPage(page);
        if (onClick) onClick();
      }}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'text-[#F2DF74]'
          : 'text-white hover:text-[#F2DF74] hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { page: Page.Home, label: 'Home' },
    { page: Page.Agenda, label: 'Agenda' },
    { page: Page.Contests, label: 'Contests' },
    { page: Page.Venue, label: 'Venue & Travel' },
    { page: Page.Volunteer, label: 'Volunteer' },
    { page: Page.FAQ, label: 'FAQ' },
  ];

  return (
    <header className="bg-[#004165] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            </div>
             <span className="text-white text-xl ml-3 font-bold">District 71 Conference 2026</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.page} {...link} currentPage={currentPage} setCurrentPage={setCurrentPage}>
                  {link.label}
                </NavLink>
              ))}
              <a href="https://forms.d71toastmasters.org/t/jbk6HTHbjYus" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#F2DF74] to-yellow-300 text-[#004165] font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                REGISTER NOW
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-white/10 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink key={link.page} {...link} currentPage={currentPage} setCurrentPage={setCurrentPage} onClick={() => setIsMenuOpen(false)}>
                <span className="block">{link.label}</span>
              </NavLink>
            ))}
            <a href="https://forms.d71toastmasters.org/t/jbk6HTHbjYus" target="_blank" rel="noopener noreferrer" className="block text-center w-full mt-4 bg-gradient-to-r from-[#F2DF74] to-yellow-300 text-[#004165] font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              REGISTER NOW
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;