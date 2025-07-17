import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import BusCard from './BusCard';

const BusListings: React.FC = () => {
  const { buses, searchData, setShowBusListings } = useApp();

  const handleBackClick = () => {
    setShowBusListings(false);
  };

  return (
    <div className="w-full">
      <button
        onClick={handleBackClick}
        className="flex items-center gap-2 mb-6 px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Search
      </button>

      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Buses from {searchData.from} to {searchData.to}
          </h2>
          <div className="text-gray-600">
            Travel Date: {searchData.date} | Passengers: {searchData.passengers}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {buses.map((bus, index) => (
          <BusCard key={index} bus={bus} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BusListings;