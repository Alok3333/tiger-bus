import React from 'react';
import { Home, Percent, MessageCircle, User } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const BottomNavigation: React.FC = () => {
  const { activeSection, setActiveSection } = useApp();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'offers', label: 'Offers', icon: Percent },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'account', label: 'Account', icon: User }
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white flex justify-around py-3 shadow-lg z-50 border-t border-gray-200">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all duration-300 ${
            activeSection === item.id
              ? 'text-red-500 bg-red-50'
              : 'text-gray-600 hover:text-red-500 hover:bg-red-50'
          }`}
        >
          <item.icon className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNavigation;