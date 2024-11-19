interface AmenitiesProps {
    amenities?: string[]; 
  }
  
  const defaultAmenities = [
    "🍽 Kitchen",
    "🚗 Parking available",
    "🧼 Washer",
    "🌊 Ocean view",
    "🧺 Dryer",
    "🌳 Outdoor Space",
  ];
  
  const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
    const displayedAmenities = amenities && amenities.length > 0 ? amenities : defaultAmenities;
  
    return (
      <section className="amenities">
        <h3 className="text-xl">Amenities</h3>
        <div className="amenities-list">
          {displayedAmenities.map((amenity, index) => (
            <div key={index} className="amenity-item">
              {amenity}
            </div>
          ))}
        </div>
        <a href="#" className="see-all">See all {displayedAmenities.length} amenities</a>
      </section>
    );
  };
  
  export default Amenities;
  