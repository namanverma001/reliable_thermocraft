import React from 'react';
import Logo from '@/Assets/logo.jpg';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center z-50">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Company Logo with Animation */}
        <div className="mb-8 relative">
          <div className="relative z-10">
            <img
              src={Logo}
              alt="Reliable Thermocraft Logo"
              className="w-32 h-32 mx-auto mb-4 rounded-lg animate-pulse"
            />

          </div>

          {/* Decorative floating elements around logo
          <div className="absolute -top-2 -left-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div> */}
        </div>

        {/* Simple Loading Spinner */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
