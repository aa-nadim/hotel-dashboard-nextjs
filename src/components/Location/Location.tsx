export default function Location() {
  return (
    <div className="details-left">
      <a href="#" className="back-link">Entire home</a>

      <h1 className="listing-title">Juneau Vacation Home: Stunning View + Beach Access</h1>
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
          <span>2 bedrooms</span>
        </div>
        <div className="stat-item">
          <i className="fa fa-bath" aria-hidden="true"></i>
          <span>1 bathroom</span>
        </div>
        <div className="stat-item">
          <i className="fa fa-users" aria-hidden="true"></i>
          <span>Sleeps 4</span>
        </div>
        <div className="stat-item">
          <i className="fa fa-home" aria-hidden="true"></i>
          <span>1155 sq ft</span>
        </div>
      </div>

      <h2>Popular amenities</h2>
      <div className="property-stats">
        <div className="stat-item">
          <i className="fas fa-drumstick-bite"></i>
          <span>Barbecue grill</span>
        </div>
        <div className="stat-item">
          <i className="fa-solid fa-soap"></i>
          <span>Washer</span>
        </div>
        <div className="stat-item">
          <i className="fa fa-cutlery" aria-hidden="true"></i>
          <span>Kitchen</span>
        </div>
        <div className="stat-item">
          <i className="fa fa-car" aria-hidden="true"></i>
          <span>Parking available</span>
        </div>
        <div className="stat-item">
          <i className="fas fa-tree"></i>
          <span>Outdoor Space</span>
        </div>
        <div className="stat-item">
          <i className="fa fa-wifi" aria-hidden="true"></i>
          <span>WiFi</span>
        </div>
      </div>

      <div className="row">
        <div className="map-container">
          <iframe
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Juneau, Alaska&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "8px",
              minHeight: "300px",
            }}
          ></iframe>
          <div className="text-container">
            <h4>
              <b>Juneau, Alaska</b>
            </h4>
            <a href="#" className="see-all">View in a map</a>
          </div>
        </div>

        <div className="text-container">
          <div className="info-list">
            <div className="info-row">
              <i className="fa-solid fa-location-dot"></i>
              <div className="location-info">
                <span className="location">Auke Bay</span>
                <span className="drive-time">6 min drive</span>
              </div>
            </div>
            <div className="info-row">
              <i className="fa-solid fa-location-dot"></i>
              <div className="location-info">
                <span className="location">University of Alaska–Southeast</span>
                <span className="drive-time">10 min drive</span>
              </div>
            </div>
            <div className="info-row">
              <i className="fa-solid fa-location-dot"></i>
              <div className="location-info">
                <span className="location">Mendenhall Golf Course</span>
                <span className="drive-time">14 min drive</span>
              </div>
            </div>
            <div className="info-row">
              <i className="fa-solid fa-plane"></i>
              <div className="location-info">
                <span className="location">Juneau, AK (JNU–Juneau Intl.)</span>
                <span className="drive-time">14 min drive</span>
              </div>
            </div>
            <a href="#" className="more-info-link">See more about this area →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
