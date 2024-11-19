import React from "react";

interface Address {
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
}

interface LocationInfo {
  name: string;
  driveTime: string;
  iconClass: string;
}

interface LocationProps {
  title?: string;
  guestCount?: number;
  bedroomCount?: number;
  bathroomCount?: number;
  address?: Address;
  location?: { latitude?: number; longitude?: number };
  amenities?: string[];
  nearbyLocations?: LocationInfo[];
}

const Location: React.FC<LocationProps> = ({
  title = "Default Vacation Home",
  guestCount = 4,
  bedroomCount = 2,
  bathroomCount = 1,
  address = {
    street: "123 Main St",
    city: "Default City",
    state: "DC",
    country: "Default Country",
    zipCode: "00000",
  },
  location = { latitude: 58.3019, longitude: -134.4197 },
  amenities = [
    "🍽 Kitchen",
    "🚗 Parking available",
    "🧼 Washer",
    "🌊 Ocean view",
    "🧺 Dryer",
    "🌳 Outdoor Space",
  ],
  nearbyLocations = [
    { name: "Auke Bay", driveTime: "6 min drive", iconClass: "fa-solid fa-location-dot" },
    { name: "University of Alaska–Southeast", driveTime: "10 min drive", iconClass: "fa-solid fa-location-dot" },
    { name: "Mendenhall Golf Course", driveTime: "14 min drive", iconClass: "fa-solid fa-location-dot" },
    { name: "Juneau, AK (JNU–Juneau Intl.)", driveTime: "14 min drive", iconClass: "fa-solid fa-plane" },
  ],
}) => {
  const formattedAddress = `${address?.street || "N/A"}, ${address?.city || "N/A"}, ${
    address?.state || "N/A"
  }, ${address?.country || "N/A"} ${address?.zipCode || ""}`;

  const mapSrc = location.latitude && location.longitude
    ? `https://maps.google.com/maps?width=600&height=400&hl=en&q=${location.latitude},${location.longitude}&t=&z=14&ie=UTF8&iwloc=B&output=embed`
    : `https://maps.google.com/maps?width=600&height=400&hl=en&q=58.3019,-134.4197&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div className="details-left">
      <a href="#" className="back-link">Entire home</a>

      <h1 className="text-3xl">{title}</h1>
      <div className="rating">
        <span className="rating-badge">9.8</span>
        <span>Exceptional</span>
      </div>
      <div className="rating-text">
        <a href="#reviews">See all 24 reviews &gt;</a>
      </div>

      <div className="property-stats">
        <div className="stat-item">
          <i className="fa fa-bed" aria-hidden="true"></i>
          <span>{bedroomCount} bedroom{bedroomCount > 1 ? "s" : ""}</span>
        </div>
        <div className="stat-item">
          <i className="fa fa-bath" aria-hidden="true"></i>
          <span>{bathroomCount} bathroom{bathroomCount > 1 ? "s" : ""}</span>
        </div>
        <div className="stat-item">
          <i className="fa fa-users" aria-hidden="true"></i>
          <span>Sleeps {guestCount}</span>
        </div>
        <div className="stat-item">
          <i className="fa fa-map-marker-alt" aria-hidden="true"></i>
          <span>{formattedAddress}</span>
        </div>
      </div>

      <h2>Popular amenities</h2>
      <div className="property-stats">
        {amenities.map((amenity, index) => (
          <div key={index} className="stat-item">
            <i className="fa fa-check-circle" aria-hidden="true"></i>
            <span>{amenity}</span>
          </div>
        ))}
      </div>

      <h2>Location</h2>
      <div className="row">
        <div className="map-container">
          <iframe
            src={mapSrc}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "8px",
              minHeight: "300px",
            }}
            title="Location Map"
          ></iframe>
          <div className="text-container">
            <h4>
              <b>{formattedAddress}</b>
            </h4>
            <a href="#" className="see-all">View in a map</a>
          </div>
        </div>

        <div className="text-container">
          <div className="info-list">
            {nearbyLocations.map((loc, index) => (
              <div key={index} className="info-row">
                <i className={loc.iconClass}></i>
                <div className="location-info">
                  <span className="location">{loc.name}</span>
                  <span className="drive-time">{loc.driveTime}</span>
                </div>
              </div>
            ))}
            <a href="#" className="more-info-link">See more about this area →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
