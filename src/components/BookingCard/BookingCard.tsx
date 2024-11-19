'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function BookingCard() {
  const [isClient, setIsClient] = useState(false);
  const [dates, setDates] = useState({
    startDate: '',
    endDate: '',
    formattedStart: '',
    formattedEnd: ''
  });
  const [showTravelersContent, setShowTravelersContent] = useState(false);
  const [travelers, setTravelers] = useState({ adults: 2, children: 0 });
  const [pets, setPets] = useState(false);

  // Set isClient to true when the component is mounted (client-side rendering)
  useEffect(() => {
    setIsClient(true);

    if (typeof window !== 'undefined') {
      setTravelers({
        adults: parseInt(localStorage.getItem('travelers_adults') || '2'),
        children: parseInt(localStorage.getItem('travelers_children') || '0')
      });
    }
  }, []);

  // Save travelers count to localStorage when it changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('travelers_adults', travelers.adults.toString());
      localStorage.setItem('travelers_children', travelers.children.toString());
    }
  }, [travelers, isClient]);

  const formatDate = (date: string) => {
    if (!date) return '';
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const handleDateChange = (type: 'startDate' | 'endDate', value: string) => {
    setDates(prev => ({
      ...prev,
      [type]: value,
      [`formatted${type === 'startDate' ? 'Start' : 'End'}`]: formatDate(value)
    }));
  };

  const increment = (type: 'adults' | 'children') => {
    setTravelers(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const decrement = (type: 'adults' | 'children') => {
    if (type === 'adults' && travelers.adults > 1) {
      setTravelers(prev => ({ ...prev, adults: prev.adults - 1 }));
    } else if (type === 'children' && travelers.children > 0) {
      setTravelers(prev => ({ ...prev, children: prev.children - 1 }));
    }
  };

  const toggleTravelersContent = () => {
    setShowTravelersContent(!showTravelersContent);
  };

  const handleDone = () => {
    setShowTravelersContent(false);
  };

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];

  if (!isClient) {
    return null; // Prevent rendering before client-side JavaScript runs
  }

  return (
    <div className="mx-auto max-w-md rounded-lg border border-gray-200 p-6 shadow-lg">
      {/* Member Banner */}
      <div className="mb-6 flex items-center justify-between rounded-lg bg-blue-50 p-4">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8">
            <Image src="/images/loading.png" alt="Loading icon" layout="fill" objectFit="contain" />
          </div>
          <p className="text-sm">Members get our best prices when signed in!</p>
        </div>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Sign in
        </button>
      </div>

      {/* Booking Section */}
      <div className="space-y-6">
        {/* Price */}
        <div className="flex items-baseline">
          <h2 className="text-2xl font-bold">$134</h2>
          <span className="ml-2 text-gray-600">per night</span>
        </div>

        {/* Cancellation Info */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">ⓘ</span>
          <p className="text-red-600">Non-refundable</p>
        </div>

        {/* Availability Status */}
        <div className="flex items-center gap-2 text-sm text-green-600">
          <span>✓</span>
          <span>Your dates are available</span>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Start date</label>
            <input
              type="date"
              min={today}
              value={dates.startDate}
              onChange={(e) => handleDateChange('startDate', e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">End date</label>
            <input
              type="date"
              min={dates.startDate || today}
              value={dates.endDate}
              onChange={(e) => handleDateChange('endDate', e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
            />
          </div>
        </div>

        {/* Travelers Section */}
        <div className="relative">
          <button
            onClick={toggleTravelersContent}
            className="w-full rounded-md border border-gray-300 p-2 text-left"
          >
            {travelers.adults + travelers.children} travelers
          </button>

          {showTravelersContent && (
            <div className="absolute left-0 right-0 top-full z-10 mt-2 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
              {/* Adults */}
              <div className="mb-4 flex items-center justify-between">
                <span className="font-medium">Adults</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decrement('adults')}
                    disabled={travelers.adults <= 1}
                    className="h-8 w-8 rounded-full border border-gray-300 disabled:opacity-50"
                  >
                    −
                  </button>
                  <span>{travelers.adults}</span>
                  <button
                    onClick={() => increment('adults')}
                    className="h-8 w-8 rounded-full border border-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="font-medium">Children</span>
                  <p className="text-sm text-gray-500">Ages 0-17</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decrement('children')}
                    disabled={travelers.children <= 0}
                    className="h-8 w-8 rounded-full border border-gray-300 disabled:opacity-50"
                  >
                    −
                  </button>
                  <span>{travelers.children}</span>
                  <button
                    onClick={() => increment('children')}
                    className="h-8 w-8 rounded-full border border-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Pets Option */}
              <div className="mb-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={pets}
                    onChange={(e) => setPets(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <span>I am traveling with pets</span>
                </label>
              </div>

              <button
                onClick={handleDone}
                className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* Total Section */}
        {!showTravelersContent && (
          <>
            <div className="space-y-2 border-t pt-4">
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium">$538</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Total includes fees, not tax</span>
                <button className="text-blue-600 hover:underline">Price details</button>
              </div>
            </div>

            <button className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700">
              Book now
            </button>

            <p className="text-center text-sm text-gray-600">You will not be charged yet</p>

            <div className="flex items-center justify-between border-t pt-4">
              <a href="#" className="text-blue-600 hover:underline">
                Contact host
              </a>
              <span className="text-sm text-gray-600">Property # 0832810-fha</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
