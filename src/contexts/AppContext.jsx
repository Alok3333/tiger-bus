import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [showBusListings, setShowBusListings] = useState(false);
  const [buses, setBuses] = useState([]);
  const [searchData, setSearchData] = useState({
    from: 'Latur',
    to: 'Pune',
    date: 'Tomorrow',
    passengers: '2 Passengers'
  });

  const value = {
    activeSection,
    setActiveSection,
    searchData,
    setSearchData,
    showBusListings,
    setShowBusListings,
    buses,
    setBuses
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};