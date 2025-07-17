import React from 'react';

const Offers: React.FC = () => {
  const offers = [
    {
      title: 'Flat ₹200 Off',
      subtitle: 'On all bus bookings',
      code: 'BUS200',
      details: 'Use this code for instant discount on your next booking',
      validity: 'Valid until: 31 Dec 2025',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'Weekend Getaway',
      subtitle: '15% Off on weekend travel',
      code: 'WEEKEND15',
      details: 'Book tickets for Friday-Sunday travel',
      validity: 'Valid every weekend',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'First Time User',
      subtitle: '₹300 Off on first booking',
      code: 'NEW300',
      details: 'For new users only',
      validity: 'Valid for first booking',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'Group Discount',
      subtitle: '10% Off for 4+ passengers',
      code: 'GROUP10',
      details: 'Book for 4 or more passengers',
      validity: 'Valid all days',
      gradient: 'from-red-500 to-orange-500'
    }
  ];

  const partnerOffers = [
    {
      title: 'Sharma Travels',
      subtitle: 'Premium AC Buses',
      code: 'SHARMA150',
      details: '₹150 off on all Sharma Travels buses',
      validity: 'Valid on all routes',
      gradient: 'from-green-500 to-green-400'
    },
    {
      title: 'Vishwa Travels',
      subtitle: 'Luxury Volvo Buses',
      code: 'VISHWA200',
      details: '₹200 off on all Vishwa Travels buses',
      validity: 'Valid on all routes',
      gradient: 'from-blue-500 to-blue-400'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 relative">
          Special Offers & Discounts
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-4"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${offer.gradient} text-white p-6 text-center`}>
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-white/90">{offer.subtitle}</p>
              </div>
              <div className="bg-white p-6 text-center">
                <div className="text-xl font-bold text-red-500 mb-3">{offer.code}</div>
                <div className="text-gray-600 mb-4">{offer.details}</div>
                <div className="text-sm text-gray-500">{offer.validity}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 relative">
          Partner Offers
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-4"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnerOffers.map((offer, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${offer.gradient} text-white p-6 text-center`}>
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-white/90">{offer.subtitle}</p>
              </div>
              <div className="bg-white p-6 text-center">
                <div className="text-xl font-bold text-red-500 mb-3">{offer.code}</div>
                <div className="text-gray-600 mb-4">{offer.details}</div>
                <div className="text-sm text-gray-500">{offer.validity}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;