// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img className="h-20" src="/img.png" alt="Resident Evil Logo" />
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
            <a href="#" className="text-gray-300 hover:text-white">Games</a>
            <a href="#" className="text-gray-300 hover:text-white">Community</a>
            <a href="#" className="text-gray-300 hover:text-white">Support</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M19 3a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1h14zm-5 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-7 6a1 1 0 100-2 1 1 0 000 2zm0-3a1 1 0 100-2 1 1 0 000 2zm0-3a1 1 0 100-2 1 1 0 000 2z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12v6l6-3-6-3z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12v6l6-3-6-3z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm5 14h-4v-1c0-1.11-.89-2-2-2s-2 .89-2 2v1H7v-4h10v4z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-300">&copy; 2024 Resident Evil. All rights reserved.</p>
          <p className="text-sm text-gray-300">Made with <span className="text-red-500">&hearts;</span> by Your Company</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
