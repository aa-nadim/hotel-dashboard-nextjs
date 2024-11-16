"use client";

import Image from "next/image";
import { useState } from "react";

export default function BookingCard() {
  const [travelers, setTravelers] = useState({ adults: 2, children: 0 });
  const [pets, setPets] = useState(false);

  const increment = (type: "adults" | "children") => {
    setTravelers((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const decrement = (type: "adults" | "children") => {
    if (type === "adults" && travelers.adults > 1) {
      setTravelers((prev) => ({ ...prev, adults: prev.adults - 1 }));
    } else if (type === "children" && travelers.children > 0) {
      setTravelers((prev) => ({ ...prev, children: prev.children - 1 }));
    }
  };

  return (
    <div className="booking-card">
      <div className="member-banner">
        <div className="info-row">
          <div className="loading-icon">
            <Image src="/images/loading.png" alt="Loading icon" width={50} height={50} />
          </div>
          <p>Members get our best prices when signed in!</p>
        </div>
        <button className="sign-in-btn">Sign in</button>
      </div>

      <div className="booking">
        <div className="price-section">
          <h2>
            $134 <span>per night</span>
          </h2>
        </div>

        <div className="cancellation-info">
          <span className="info-icon">ⓘ</span>
          <p className="non-refundable">Non-refundable</p>
        </div>

        <div className="availability-status">
          <span className="check-icon">✓</span>
          <span>Your dates are available</span>
        </div>

        <div className="dates">
          <div className="date-input">
            <label>Start date</label>
            <div className="input-wrapper">
              <input type="date" id="start-date" placeholder="Select start date" />
            </div>
          </div>
          <div className="date-input">
            <label>End date</label>
            <div className="input-wrapper">
              <input type="date" id="end-date" placeholder="Select end date" />
            </div>
          </div>
        </div>

        <div className="travelers-section">
          <div className="travelers-input">
            <input
              type="text"
              value={`${travelers.adults + travelers.children} travelers`}
              readOnly
            />
          </div>

          <div className="travelers-content">
            <div className="traveler-type">
              <div className="traveler-label">Adults</div>
              <div className="traveler-controls">
                <button
                  className="traveler-btn decrement"
                  onClick={() => decrement("adults")}
                >
                  −
                </button>
                <span className="traveler-count">{travelers.adults}</span>
                <button
                  className="traveler-btn increment"
                  onClick={() => increment("adults")}
                >
                  +
                </button>
              </div>
            </div>

            <div className="traveler-type">
              <div className="traveler-label">
                <span>Children</span>
                <span className="age-info">Ages 0-17</span>
              </div>
              <div className="traveler-controls">
                <button
                  className={`traveler-btn decrement ${
                    travelers.children === 0 ? "disabled" : ""
                  }`}
                  onClick={() => decrement("children")}
                  disabled={travelers.children === 0}
                >
                  −
                </button>
                <span className="traveler-count">{travelers.children}</span>
                <button
                  className="traveler-btn increment"
                  onClick={() => increment("children")}
                >
                  +
                </button>
              </div>
            </div>

            <div className="pets-option">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={pets}
                  onChange={(e) => setPets(e.target.checked)}
                />
                <span className="checkbox-text">I am traveling with pets</span>
              </label>
            </div>

            <button className="done-btn">Done</button>
          </div>
        </div>

        <div className="total-section">
          <div className="total-row">
            <span>Total</span>
            <span className="total-amount">$538</span>
          </div>
          <div className="total-note">
            Total includes fees, not tax
            <a href="#" className="price-details">
              Price details
            </a>
          </div>
        </div>

        <button className="book-now-btn">Book now</button>
        <p className="charge-notice">You will not be charged yet</p>
      </div>
      <div className="container">
        <a href="#" className="contact-link">
          Contact host
        </a>
        <div className="property-id">Property # 0832810-fha</div>
      </div>
    </div>
  );
}
