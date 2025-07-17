import React from 'react';
import { Security, LocalOffer, Headset, FlashOn } from '@mui/icons-material';
import styles from './Features.module.css';

const Features = () => {
  const features = [
    {
      icon: Security,
      title: 'Safe Travel',
      description: 'Verified buses with safety protocols for a worry-free journey'
    },
    {
      icon: LocalOffer,
      title: 'Best Prices',
      description: 'Lowest bus fares guaranteed with no hidden charges'
    },
    {
      icon: Headset,
      title: '24/7 Support',
      description: 'Our travel experts are always ready to assist you'
    },
    {
      icon: FlashOn,
      title: 'Instant Booking',
      description: 'Easy booking process with instant confirmation'
    }
  ];

  return (
    <div className={styles.features}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <feature.icon sx={{ fontSize: 32 }} />
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;