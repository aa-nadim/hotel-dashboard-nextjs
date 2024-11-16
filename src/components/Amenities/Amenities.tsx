export default function Amenities() {
  return (
   <section className="amenities">
       <h3>Amenities</h3>
       <div className="amenities-list">
           <div className="amenity-item">🍽 Kitchen</div>
           <div className="amenity-item"><i className="fas fa-car"></i> Parking available</div>
           <div className="amenity-item"><i className="fa-solid fa-soap"></i> Washer</div>
           <div className="amenity-item"><i className="fa-solid fa-otter"></i>
               Ocean view</div>
           <div className="amenity-item">🧺 Dryer</div>
           <div className="amenity-item"><i className="fas fa-tree"></i> Outdoor Space</div>
       </div>
       <a href="#" className="see-all">See all 34 amenities</a>
   </section>
  );
}

