import React from 'react';
import { ArrowBack } from '@mui/icons-material';
import { useApp } from '../../contexts/AppContext';
import BusCard from '../BusCard/BusCard';
import styles from './BusListings.module.css';

const BusListings = () => {
  const { buses, searchData, setShowBusListings } = useApp();

  const handleBackClick = () => {
    setShowBusListings(false);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={handleBackClick}
        className={styles.backButton}
      >
        <ArrowBack />
        Back to Search
      </button>

      <div className={styles.resultsHeader}>
        <h2>
          Buses from {searchData.from} to {searchData.to}
        </h2>
        <p>
          Travel Date: {searchData.date} | Passengers: {searchData.passengers}
        </p>
      </div>

      <div className={styles.busListings}>
        {buses.map((bus, index) => (
          <BusCard key={index} bus={bus} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BusListings;