import React from 'react';
import { AppProvider, useApp } from './contexts/AppContext';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import Features from './components/Features/Features';
import BusListings from './components/BusListings/BusListings';
import Offers from './components/Offers/Offers';
import Chat from './components/Chat/Chat';
import Account from './components/Account/Account';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

const AppContent = () => {
  const { activeSection, showBusListings } = useApp();

  const renderContent = () => {
    if (activeSection === 'home') {
      return showBusListings ? <BusListings /> : (
        <>
          <SearchForm />
          <Features />
        </>
      );
    }
    
    switch (activeSection) {
      case 'offers':
        return <Offers />;
      case 'chat':
        return <Chat />;
      case 'account':
        return <Account />;
      default:
        return (
          <>
            <SearchForm />
            <Features />
          </>
        );
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        
        <main className={styles.main}>
          {renderContent()}
        </main>
        
        <Footer />
      </div>
      
      <BottomNavigation />
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;