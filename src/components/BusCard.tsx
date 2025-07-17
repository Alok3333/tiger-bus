import React, { useState } from 'react';
import { MapPin, Clock, Users, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { Bus } from '../types';
import { useApp } from '../contexts/AppContext';

interface BusCardProps {
  bus: Bus;
  index: number;
}

const BusCard: React.FC<BusCardProps> = ({ bus, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const { searchData } = useApp();

  const handleSeatClick = (seatNumber: number) => {
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

  const getSeatStatus = (seatNumber: number): 'available' | 'booked' | 'selected' => {
    if (selectedSeats.includes(seatNumber)) return 'selected';
    if ([2, 4, 7, 10, 12].includes(seatNumber)) return 'booked';
    return 'available';
  };

  return (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
        isExpanded ? 'border-l-4 border-red-500' : 'border-l-4 border-blue-500'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2 lg:mb-0">{bus.name}</h3>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
          {bus.type}
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm">
        <div>
          <span className="block text-gray-500 text-xs mb-1">Departure</span>
          <div className="font-semibold">{bus.departure}</div>
          <div className="text-gray-600">{searchData.from}</div>
        </div>
        <div>
          <span className="block text-gray-500 text-xs mb-1">Arrival</span>
          <div className="font-semibold">{bus.arrival}</div>
          <div className="text-gray-600">{searchData.to}</div>
        </div>
        <div>
          <span className="block text-gray-500 text-xs mb-1">Journey</span>
          <div className="font-semibold">{bus.duration}</div>
        </div>
        <div>
          <span className="block text-gray-500 text-xs mb-1">Seats Left</span>
          <div className="font-semibold">{bus.seats}</div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <div className="flex items-start gap-2 text-sm text-gray-700">
          <MapPin className="w-4 h-4 mt-0.5 text-blue-500" />
          <span>Stops: {bus.stops}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-4 text-sm">
        {bus.amenities.map((amenity, idx) => (
          <div key={idx} className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-4 h-4 text-blue-500" />
            <span>{amenity}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-bold text-orange-600">₹{bus.price}</div>
        <div className="flex gap-3 w-full lg:w-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCallBooking();
            }}
            className="flex-1 lg:flex-none bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 justify-center"
          >
            <Phone className="w-4 h-4" />
            Book On Call
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleWhatsAppBooking();
            }}
            className="flex-1 lg:flex-none bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-6 p-6 bg-gray-50 rounded-xl animate-fadeIn">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Bus Details</h4>
          <div className="space-y-2 text-sm text-gray-600 mb-6">
            <p><strong>Bus Number:</strong> {bus.busNumber}</p>
            <p><strong>Rating:</strong> {bus.rating}/5</p>
            <p><strong>Cancellation Policy:</strong> Free cancellation up to 24 hours before departure</p>
            <p><strong>Boarding Point:</strong> {searchData.from} Bus Stand, Platform 2</p>
          </div>

          <h4 className="text-lg font-semibold mb-4 text-gray-800">Seat Layout</h4>
          <div className="grid grid-cols-4 gap-2 max-w-sm">
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
                  className={`p-2 rounded text-sm font-medium transition-colors ${
                    status === 'available' ? 'bg-green-200 hover:bg-green-300 cursor-pointer' :
                    status === 'booked' ? 'bg-red-200 cursor-not-allowed' :
                    'bg-blue-200 cursor-pointer'
                  }`}
                  disabled={status === 'booked'}
                >
                  {seatNumber}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default BusCard;