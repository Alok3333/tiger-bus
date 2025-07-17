import React, { useState } from 'react';

const Account = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="space-y-8">
      {!showSignup ? (
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 relative">
            Login to Your Account
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-4"></div>
          </h2>
          
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <label htmlFor="mobile" className="block text-sm font-semibold text-gray-600 mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg transition-all duration-300 bg-gray-50 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-200"
                placeholder="Enter your mobile number"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg transition-all duration-300 bg-gray-50 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-200"
                placeholder="Enter your password"
              />
            </div>
            
            <button className="w-full p-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl text-lg font-bold transition-all duration-300 hover:from-red-600 hover:to-orange-600 hover:-translate-y-1 hover:shadow-xl">
              Login
            </button>
            
            <div className="text-center mt-6 text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => setShowSignup(true)}
                className="text-red-500 font-semibold hover:text-red-600 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 relative">
            Create New Account
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-4"></div>
          </h2>
          
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg transition-all duration-300 bg-gray-50 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-200"
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="signupMobile" className="block text-sm font-semibold text-gray-600 mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                id="signupMobile"
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg transition-all duration-300 bg-gray-50 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-200"
                placeholder="Enter your mobile number"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="signupEmail" className="block text-sm font-semibold text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="signupEmail"
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg transition-all duration-300 bg-gray-50 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-200"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="signupPassword" className="block text-sm font-semibold text-gray-600 mb-2">
                Create Password
              </label>
              <input
                type="password"
                id="signupPassword"
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg transition-all duration-300 bg-gray-50 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-200"
                placeholder="Create a password"
              />
            </div>
            
            <button className="w-full p-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl text-lg font-bold transition-all duration-300 hover:from-red-600 hover:to-orange-600 hover:-translate-y-1 hover:shadow-xl">
              Create Account
            </button>
            
            <div className="text-center mt-6 text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => setShowSignup(false)}
                className="text-red-500 font-semibold hover:text-red-600 transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;