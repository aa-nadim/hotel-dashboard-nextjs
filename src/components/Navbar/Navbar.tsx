import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("United States");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const regionSettings = {
    "United States": { currency: "USD" },
    "Canada": { currency: "CAD" },
    "Europe": { currency: "EUR" }
  };

  useEffect(() => {
    setIsClient(true);
    
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setModalOpen(true);
  };

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    setSelectedCurrency(regionSettings[region].currency);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isClient) return null;

  return (
    <>
    {/* Spacer div to push content below fixed navbar */}
    <div className="h-16 mb-5" />
    <div className="relative mb-5">
      <nav className="bg-white shadow-md fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gray-200 rounded" />
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
            
            <div className="hidden md:flex items-center">
              <ul className="flex space-x-8">
                <li>
                  <button 
                    onClick={handleOpen}
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                  >
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{selectedRegion}</span>
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Trip Boards
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    List your property
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    My trips
                  </a>
                </li>
                <li>
                  <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                    Sign in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={handleOpen}
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-gray-900 w-full"
              >
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{selectedRegion}</span>
              </button>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Trip Boards
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                List your property
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Help
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                My trips
              </a>
              <a href="#" className="block px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Sign in
              </a>
            </div>
          </div>
        )}
      </nav>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Display settings</h2>
              <button 
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <h3 className="flex items-center text-yellow-800 font-medium">
                <span className="mr-2">⚠️</span>
                Changing your region could change your rewards program
              </h3>
              <p className="text-yellow-700 mt-2">
                To stay with your current rewards program, keep your region the same. 
                One Key is currently only available in select regions.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Region
                </label>
                <select 
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={selectedRegion}
                  onChange={handleRegionChange}
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Europe</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Currency
                </label>
                <select 
                  value={selectedCurrency}
                  disabled
                  className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                </select>
              </div>

              <button 
                onClick={handleClose}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mt-4 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Navbar;