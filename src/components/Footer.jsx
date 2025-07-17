import React from 'react';
import { Info, Phone, Shield, FileText, HelpCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { label: 'About Us', icon: Info },
    { label: 'Contact', icon: Phone },
    { label: 'Privacy Policy', icon: Shield },
    { label: 'Terms & Conditions', icon: FileText },
    { label: 'FAQ', icon: HelpCircle }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="bg-white rounded-3xl p-8 text-center shadow-lg mt-8 mb-20">
      <p className="text-gray-600 mb-6">© 2025 BusTiger.com. All rights reserved.</p>
      
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-all duration-300 px-4 py-2 rounded-xl hover:bg-red-50"
          >
            <link.icon className="w-4 h-4" />
            {link.label}
          </a>
        ))}
      </div>
      
      <div className="flex justify-center gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;