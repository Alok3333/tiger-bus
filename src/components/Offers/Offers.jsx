import React from 'react';
import styles from './Offers.module.css';

const Offers = () => {
  const offers = [
    {
      title: 'Flat ₹200 Off',
      subtitle: 'On all bus bookings',
      code: 'BUS200',
      details: 'Use this code for instant discount on your next booking',
      validity: 'Valid until: 31 Dec 2025',
      headerClass: ''
    },
    {
      title: 'Weekend Getaway',
      subtitle: '15% Off on weekend travel',
      code: 'WEEKEND15',
      details: 'Book tickets for Friday-Sunday travel',
      validity: 'Valid every weekend',
      headerClass: ''
    },
    {
      title: 'First Time User',
      subtitle: '₹300 Off on first booking',
      code: 'NEW300',
      details: 'For new users only',
      validity: 'Valid for first booking',
      headerClass: ''
    },
    {
      title: 'Group Discount',
      subtitle: '10% Off for 4+ passengers',
      code: 'GROUP10',
      details: 'Book for 4 or more passengers',
      validity: 'Valid all days',
      headerClass: ''
    }
  ];

  const partnerOffers = [
    {
      title: 'Sharma Travels',
      subtitle: 'Premium AC Buses',
      code: 'SHARMA150',
      details: '₹150 off on all Sharma Travels buses',
      validity: 'Valid on all routes',
      headerClass: 'green'
    },
    {
      title: 'Vishwa Travels',
      subtitle: 'Luxury Volvo Buses',
      code: 'VISHWA200',
      details: '₹200 off on all Vishwa Travels buses',
      validity: 'Valid on all routes',
      headerClass: 'blue'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.offersContainer}>
        <h2 className={styles.title}>Special Offers & Discounts</h2>
        
        <div className={styles.offersGrid}>
          {offers.map((offer, index) => (
            <div key={index} className={styles.offerCard}>
              <div className={`${styles.offerHeader} ${styles[offer.headerClass]}`}>
                <h3>{offer.title}</h3>
                <p>{offer.subtitle}</p>
              </div>
              <div className={styles.offerBody}>
                <div className={styles.offerCode}>{offer.code}</div>
                <div className={styles.offerDetails}>{offer.details}</div>
                <div className={styles.offerValidity}>{offer.validity}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.offersContainer}>
        <h2 className={styles.title}>Partner Offers</h2>
        
        <div className={styles.offersGrid}>
          {partnerOffers.map((offer, index) => (
            <div key={index} className={styles.offerCard}>
              <div className={`${styles.offerHeader} ${styles[offer.headerClass]}`}>
                <h3>{offer.title}</h3>
                <p>{offer.subtitle}</p>
              </div>
              <div className={styles.offerBody}>
                <div className={styles.offerCode}>{offer.code}</div>
                <div className={styles.offerDetails}>{offer.details}</div>
                <div className={styles.offerValidity}>{offer.validity}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;