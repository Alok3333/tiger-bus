import React from 'react';
import { Chat as ChatIcon, HelpOutline, ConfirmationNumber, SmartToy, Headset } from '@mui/icons-material';
import styles from './Chat.module.css';

const Chat = () => {
  const features = [
    {
      icon: HelpOutline,
      title: 'Get Instant Help',
      description: '24/7 assistance for all your travel queries'
    },
    {
      icon: ConfirmationNumber,
      title: 'Manage Bookings',
      description: 'Modify or cancel tickets through chat'
    },
    {
      icon: SmartToy,
      title: 'Smart AI Assistant',
      description: 'Get quick answers to common questions'
    },
    {
      icon: Headset,
      title: 'Live Support',
      description: 'Connect with our travel experts instantly'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.chatContainer}>
        <div className={styles.chatIcon}>
          <ChatIcon sx={{ fontSize: 80, color: '#ddd' }} />
        </div>
        <h2 className={styles.chatTitle}>Chat Support Coming Soon</h2>
        <p className={styles.chatMessage}>
          We're working hard to bring you the best chat experience. Stay tuned for updates!
        </p>
      </div>

      <div className={styles.chatContainer}>
        <h2 className={styles.title}>We're Building Something Amazing</h2>
        <p className={styles.description}>
          Our team is developing a comprehensive chat support system where you'll be able to:
        </p>

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
      </div>
    </div>
  );
};

export default Chat;