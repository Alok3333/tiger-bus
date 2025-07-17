import React from 'react';
import { Home, LocalOffer, Chat, Person } from '@mui/icons-material';
import { useApp } from '../../contexts/AppContext';
import styles from './BottomNavigation.module.css';

const BottomNavigation = () => {
  const { activeSection, setActiveSection } = useApp();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'offers', label: 'Offers', icon: LocalOffer },
    { id: 'chat', label: 'Chat', icon: Chat },
    { id: 'account', label: 'Account', icon: Person }
  ];

  return (
    <nav className={styles.bottomNav}>
      {navItems.map((item) => (
        <div
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`${styles.navItem} ${
            activeSection === item.id ? styles.active : ''
          }`}
        >
          <item.icon sx={{ fontSize: 20 }} />
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNavigation;