import React, { useState } from 'react';
import { LocationOn, Phone, WhatsApp, CheckCircle } from '@mui/icons-material';
import { useApp } from '../../contexts/AppContext';
import styles from './BusCard.module.css';

const BusCard = ({ bus, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { searchData } = useApp();

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleCallBooking = () => {
    alert(`Calling customer support to book ${bus.name}...\n\nPlease call +91 9767005305 to complete your booking.`);
  };

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      `Hello BusTiger! I want to book a bus ticket.\n\n` +
      `*Bus Details:*\n` +
      `Operator: ${bus.name}\n` +
      `Bus Type: ${bus.type}\n` +
      `From: ${searchData.from} to ${searchData.to}\n` +
      `Date: ${searchData.date}\n` +
      `Departure: ${bus.departure}\n` +
      `Arrival: ${bus.arrival}\n` +
      `Passengers: ${searchData.passengers}\n\n` +
      `Please confirm availability and proceed with booking.`
    );
    
    window.open(`https://wa.me/919767005305?text=${message}`, '_blank');
  };

  const getSeatStatus = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) return 'selected';
    if ([2, 4, 7, 10, 12].includes(seatNumber)) return 'booked';
    return 'available';
  };

  return (
    <div 
      className={`${styles.busCard} ${isExpanded ? styles.expanded : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={styles.header}>
        <h2>{bus.name}</h2>
        <span className={styles.busType}>{bus.type}</span>
      </div>

      <div className={styles.busInfo}>
        <div>
          <span className={styles.label}>Departure</span>
          <div className={styles.value}>{bus.departure}</div>
          <div className={styles.subValue}>{searchData.from}</div>
        </div>
        <div>
          <span className={styles.label}>Arrival</span>
          <div className={styles.value}>{bus.arrival}</div>
          <div className={styles.subValue}>{searchData.to}</div>
        </div>
        <div>
          <span className={styles.label}>Journey</span>
          <div className={styles.value}>{bus.duration}</div>
        </div>
        <div>
          <span className={styles.label}>Seats Left</span>
          <div className={styles.value}>{bus.seats}</div>
        </div>
      </div>

      <div className={styles.stopsInfo}>
        <LocationOn sx={{ color: '#0058e4', fontSize: 18 }} />
        <span>Stops: {bus.stops}</span>
      </div>

      <div className={styles.amenities}>
        {bus.amenities.map((amenity, idx) => (
          <div key={idx} className={styles.amenity}>
            <CheckCircle sx={{ color: '#0058e4', fontSize: 16 }} />
            <span>{amenity}</span>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.price}>₹{bus.price}</div>
        <div className={styles.bookingOptions}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCallBooking();
            }}
            className={`${styles.bookButton} ${styles.callButton}`}
          >
            <Phone sx={{ fontSize: 16 }} />
            Book On Call
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleWhatsAppBooking();
            }}
            className={`${styles.bookButton} ${styles.whatsappButton}`}
          >
            <WhatsApp sx={{ fontSize: 16 }} />
            WhatsApp
          </button>
        </div>
      </div>

      <div className={`${styles.extraDetails} ${isExpanded ? styles.expanded : ''}`}>
        <h3>Bus Details</h3>
        <p><strong>Bus Number:</strong> {bus.busNumber}</p>
        <p><strong>Rating:</strong> {bus.rating}/5</p>
        <p><strong>Cancellation Policy:</strong> Free cancellation up to 24 hours before departure</p>
        <p><strong>Boarding Point:</strong> {searchData.from} Bus Stand, Platform 2</p>

        <h3>Seat Layout</h3>
        <div className={styles.seatLayout}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((seatNumber) => {
            const status = getSeatStatus(seatNumber);
            return (
              <button
                key={seatNumber}
                onClick={(e) => {
                  e.stopPropagation();
                  if (status === 'available') {
                    handleSeatClick(seatNumber);
                  }
                }}
                className={`${styles.seat} ${styles[status]}`}
                disabled={status === 'booked'}
              >
                {seatNumber}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BusCard;