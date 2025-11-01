
import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AgendaPage from './pages/AgendaPage';
import ContestsPage from './pages/ContestsPage';
import VenuePage from './pages/VenuePage';
import VolunteerPage from './pages/VolunteerPage';
import FaqPage from './pages/FaqPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage />;
      case Page.Agenda:
        return <AgendaPage />;
      case Page.Contests:
        return <ContestsPage />;
      case Page.Venue:
        return <VenuePage />;
      case Page.Volunteer:
        return <VolunteerPage />;
      case Page.FAQ:
        return <FaqPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
