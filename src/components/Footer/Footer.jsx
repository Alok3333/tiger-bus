import React from 'react';
import { 
  Info, 
  Phone, 
  Security, 
  Description, 
  Help,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn
} from '@mui/icons-material';
import styles from './Footer.module.css';

const Footer = () => {
  const footerLinks = [
    { label: 'About Us', icon: Info },
    { label: 'Contact', icon: Phone },
    { label: 'Privacy Policy', icon: Security },
    { label: 'Terms & Conditions', icon: Description },
    { label: 'FAQ', icon: Help }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: LinkedIn, href: '#' }
  ];

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>© 2025 BusTiger.com. All rights reserved.</p>
      
      <div className={styles.footerLinks}>
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className={styles.footerLink}
          >
            <link.icon sx={{ fontSize: 16 }} />
            {link.label}
          </a>
        ))}
      </div>
      
      <div className={styles.socialIcons}>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className={styles.socialIcon}
          >
            <social.icon sx={{ fontSize: 20 }} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;