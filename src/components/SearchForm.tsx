import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search, ArrowLeftRight } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { getTodayDate, getTomorrowDate } from '../utils/dateUtils';
import { cities, busOperators } from '../data/busData';

const SearchForm: React.FC = () => {
  const { searchData, setSearchData, setShowBusListings, setBuses } = useApp();
  const [selectedDateType, setSelectedDateType] = useState('tomorrow');
  const [isSearching, setIsSearching] = useState(false);

  const handleSwapCities = () => {
    setSearchData({
      ...searchData,
      from: searchData.to,
      to: searchData.from
    });
  };

  const handleDateSelect = (type: string) => {
    setSelectedDateType(type);
    let date = '';
    switch (type) {
      case 'today':
        date = getTodayDate();
        break;
      case 'tomorrow':
        date = getTomorrowDate();
        break;
      case 'calendar':
        date = 'Select Date';
        break;
      default:
        date = getTomorrowDate();
    }
    setSearchData({ ...searchData, date });
  };

  const handleSearch = () => {
    setIsSearching(true);
    
    setTimeout(() => {
      setBuses(busOperators);
      setShowBusListings(true);
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 relative overflow-hidden mb-8">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-orange-500"></div>
      
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-800 relative">
        Book Bus Tickets in Minutes
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-4"></div>
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <div className="flex-1">
          <label className="flex items-center gap-2 mb-3 font-semibold text-gray-600">
            <MapPin className="w-4 h-4" />
            From
          </label>
          <input
            type="text"
            list="fromCities"
            value={searchData.from}
            onChange={(e) => setSearchData({ ...searchData, from: e.target.value })}
            className="w-full p-5 border-2 border-gray-200 rounded-2xl text-lg transition-all duration-300 bg-gray-50 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-200"
            placeholder="Departure City"
          />
          <datalist id="fromCities">
            {cities.map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>
        </div>

        <div className="flex-1 relative">
          <label className="flex items-center gap-2 mb-3 font-semibold text-gray-600">
            <MapPin className="w-4 h-4" />
            To
          </label>
          <div className="relative">
            <input
              type="text"
              list="toCities"
              value={searchData.to}
              onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
              className="w-full p-5 pr-14 border-2 border-gray-200 rounded-2xl text-lg transition-all duration-300 bg-gray-50 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-200"
              placeholder="Destination City"
            />
            <datalist id="toCities">
              {cities.map((city) => (
                <option key={city} value={city} />
              ))}
            </datalist>
            <button
              onClick={handleSwapCities}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-200 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ArrowLeftRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <div className="flex-1">
          <label className="flex items-center gap-2 mb-3 font-semibold text-gray-600">
            <Calendar className="w-4 h-4" />
            Date of Journey
          </label>
          <input
            type="text"
            value={searchData.date}
            readOnly
            className="w-full p-5 border-2 border-gray-200 rounded-2xl text-lg bg-gray-50 cursor-default"
          />
          <div className="flex gap-4 mt-3">
            {[
              { key: 'today', label: 'Today', icon: '☀️' },
              { key: 'tomorrow', label: 'Tomorrow', icon: '📅' },
              { key: 'calendar', label: 'Calendar', icon: '🗓️' }
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => handleDateSelect(option.key)}
                className={`flex-1 p-4 border-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  selectedDateType === option.key
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white border-transparent transform -translate-y-1 shadow-lg'
                    : 'bg-white border-gray-200 hover:border-orange-500 hover:bg-orange-50'
                }`}
              >
                <span>{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <label className="flex items-center gap-2 mb-3 font-semibold text-gray-600">
            <Users className="w-4 h-4" />
            Passengers
          </label>
          <select
            value={searchData.passengers}
            onChange={(e) => setSearchData({ ...searchData, passengers: e.target.value })}
            className="w-full p-5 border-2 border-gray-200 rounded-2xl text-lg transition-all duration-300 bg-gray-50 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={`${num} Passenger${num > 1 ? 's' : ''}`}>
                {num} Passenger{num > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSearch}
        disabled={isSearching}
        className="w-full p-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl text-xl font-bold transition-all duration-300 hover:from-red-600 hover:to-orange-600 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {isSearching ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Searching...
          </>
        ) : (
          <>
            <Search className="w-5 h-5" />
            Search Buses
          </>
        )}
      </button>
    </div>
  );
};

export default SearchForm;