import React from 'react';
import { Shield, Tag, Headphones, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe Travel',
      description: 'Verified buses with safety protocols for a worry-free journey'
    },
    {
      icon: Tag,
      title: 'Best Prices',
      description: 'Lowest bus fares guaranteed with no hidden charges'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our travel experts are always ready to assist you'
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Easy booking process with instant confirmation'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <feature.icon className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">{feature.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;