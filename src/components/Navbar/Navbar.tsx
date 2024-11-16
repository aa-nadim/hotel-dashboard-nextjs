"use client";

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("United States");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  // Define region-currency mapping
  const regionSettings = {
    "United States": { currency: "USD" },
    "Canada": { currency: "CAD" },
    "Europe": { currency: "EUR" }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    setSelectedCurrency(regionSettings[region].currency);
  };

  // Handle clicking outside modal to close
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('nav-modal-overlay')) {
      handleClose();
    }
  };

  if (!isClient) return null;

  return (
    <div className="relative">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo placeholder */}
              <div className="w-8 h-8 bg-gray-200 rounded">
                
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-gray-900"
                aria-label="Toggle menu"
              >
                <i className="fa-regular fa-circle-user">
                  <FontAwesomeIcon icon={faCircleUser}  />
                </i>
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <ul className="flex space-x-8">
                <li>
                  <button 
                    onClick={handleOpen}
                    className="flex items-center text-gray-700 hover:text-gray-900"
                  >
                  <i className="fa-regular fa-globe">
                    <FontAwesomeIcon icon={faGlobe}  />
                  </i>
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
                  <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    Sign in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={handleOpen}
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 w-full text-left"
              >
                <i className="fa-regular fa-globe">
                    <FontAwesomeIcon icon={faGlobe}  />
                </i>
                {selectedRegion}
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
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center nav-modal-overlay"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-start items-center mb-6 gap-4">
              <button 
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
              <h2 className="text-xl font-semibold">Display settings</h2>
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

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mt-4">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;