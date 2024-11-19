// src/components/Rooms/Rooms.tsx

import React from 'react';

interface RoomsProps {
  guestCount?: number;
  bedroomCount?: number;
  bathroomCount?: number;
  bedrooms?: Array<{
    name: string;
    bedType: string;
  }>;
  bathrooms?: Array<{
    type: string;
  }>;
}

const Rooms: React.FC<RoomsProps> = ({
  guestCount = 4,
  bedroomCount = 2,
  bathroomCount = 1,
  bedrooms = [
    { name: 'Bedroom 1', bedType: '1 Queen Bed' },
    { name: 'Bedroom 2', bedType: '1 Twin Bed' },
  ],
  bathrooms = [{ type: 'Full Bathroom' }],
}) => {
  return (
    <section className="rooms-section">
      <h2>Rooms & beds</h2>
      <p className="sleeps-info">
        {bedroomCount} {bedroomCount === 1 ? 'bedroom' : 'bedrooms'} (sleeps {guestCount})
      </p>

      <div className="bedrooms">
        {bedrooms.map((bedroom, index) => (
          <div className="bedroom" key={index}>
            <i className="fa-solid fa-bed"></i>
            <h3>{bedroom.name || `Bedroom ${index + 1}`}</h3>
            <p>{bedroom.bedType || 'Bed type not specified'}</p>
          </div>
        ))}
      </div>

      <section className="bathroom-section">
        <i className="fa fa-bath" aria-hidden="true"></i>
        <h2>
          {bathroomCount} {bathroomCount === 1 ? 'bathroom' : 'bathrooms'}
        </h2>
        {bathrooms.map((bathroom, index) => (
          <p key={index}>{bathroom.type || 'Bathroom type not specified'}</p>
        ))}
      </section>
    </section>
  );
};

export default Rooms;
