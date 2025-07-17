import React from 'react';
import { DirectionsBus, LocalOffer, Headset } from '@mui/icons-material';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.logo}>BT</div>
        <div className={styles.brandText}>BusTiger</div>
      </div>
      
      <nav className={styles.navLinks}>
        <a href="#" className={styles.navLink}>
          <DirectionsBus />
          Bus Tickets
        </a>
        <a href="#" className={styles.navLink}>
          <LocalOffer />
          Offers
        </a>
        <a href="#" className={styles.navLink}>
          <Headset />
          Support
        </a>
      </nav>
    </header>
  );
};

export default Header;