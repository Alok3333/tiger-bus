import React from 'react';
import { Bus, Percent, Headphones } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between items-center p-6 lg:p-8 mb-6 w-full">
      <div className="flex items-center gap-4 mb-4 lg:mb-0">
        <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
          BT
        </div>
        <div className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          BusTiger
        </div>
      </div>
      
      <nav className="flex gap-6 flex-wrap justify-center">
        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-red-500 font-semibold px-4 py-2 rounded-lg hover:bg-red-50 transition-all duration-300">
          <Bus className="w-4 h-4" />
          Bus Tickets
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-red-500 font-semibold px-4 py-2 rounded-lg hover:bg-red-50 transition-all duration-300">
          <Percent className="w-4 h-4" />
          Offers
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-red-500 font-semibold px-4 py-2 rounded-lg hover:bg-red-50 transition-all duration-300">
          <Headphones className="w-4 h-4" />
          Support
        </a>
      </nav>
    </header>
  );
};

export default Header;