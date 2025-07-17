import React from 'react';
import { MessageCircle, HelpCircle, Ticket, Bot, Headphones } from 'lucide-react';

const Chat: React.FC = () => {
  const features = [
    {
      icon: HelpCircle,
      title: 'Get Instant Help',
      description: '24/7 assistance for all your travel queries'
    },
    {
      icon: Ticket,
      title: 'Manage Bookings',
      description: 'Modify or cancel tickets through chat'
    },
    {
      icon: Bot,
      title: 'Smart AI Assistant',
      description: 'Get quick answers to common questions'
    },
    {
      icon: Headphones,
      title: 'Live Support',
      description: 'Connect with our travel experts instantly'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
        <div className="text-8xl text-gray-300 mb-6">
          <MessageCircle className="w-20 h-20 mx-auto" />
        </div>
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Chat Support Coming Soon</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're working hard to bring you the best chat experience. Stay tuned for updates!
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 relative">
          We're Building Something Amazing
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-4"></div>
        </h2>
        
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Our team is developing a comprehensive chat support system where you'll be able to:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;