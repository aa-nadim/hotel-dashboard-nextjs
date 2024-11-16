import Image from "next/image";

export default function About() {
  return (
    <section className="about-property">
      <h2>About this property</h2>

      <h3 className="property-title">Juneau Vacation Home: Stunning View + Beach Access</h3>
      <p className="property-description">
        Escape to the mountains and experience the great outdoors at this lovely Juneau vacation rental!
        Perched on the shore of Lena Cove, this 2-bedroom, 1-bath home is the perfect getaway for those
        looking to enjoy a relaxing retreat surrounded by nature. Spend your day fishing for King Salmon,
        exploring Lena Beach and the rocky coastline, or hiking the nearby trails. After your outdoor
        adventure, kick back on the private deck and admire the breathtaking panoramic views!
      </p>
      <p>-- THE PROPERTY --</p>
      <p>
        2,100/2,100 | 1,115 Sq Ft | 2 Private Decks | Lena Cove & Mountain Views | 2 Regular Provider
      </p>
      <p>Bedroom: Queen Bed, Full Floor Mattress | Bedroom 2: Extra Long Twin Bed</p>

      <p>HOME HIGHLIGHTS: Flat-screen TV, dining table, washer/dryer</p>
      <p>
        KITCHEN: Fridge, stove, coffee maker, microwave, cooking basics, toaster, dishware/flatware, trash
        bags/paper towels, Crockpot
      </p>
      <p>GENERAL: Free WiFi, central heating, linens/towels, keyless entry, hair dryer, ceiling fans</p>
      <p>FAQ: No A/C, stairs required to access</p>
      <p>PARKING: Driveway (2 vehicles). RV parking allowed</p>

      <div className="section-separator">-- THE LOCATION --</div>

      <p>
        GREAT OUTDOORS: Lena Cove (on-site), Lena Beach Recreation Area (0.5 miles), Glacier Gardens
        Rainforest Adventure (10 miles), Mendenhall Glacier (10 miles), Twin Lakes (13 miles)
      </p>
      <p>
        THINGS TO DO: Mendenhall Golf (8 miles), Dimond Park Aquatic Center (8 miles), Riverside Rotary
        Park (8 miles), Alaska State Museum (16 miles), Last Chance Mining Museum (18 miles). AJ Mine
        Gastineau Mill Tours (20 miles)
      </p>
      <p>
        LOCAL FARE: Forbidden Peak Brewery (5 miles). The Grind Coffee Company (7 miles). Four Plates
        Cocina Peruana (7 miles), Sandbar & Grill (7 miles), Zerelda's Bistro (8 miles), Donna's Restaurant (9
        miles), Alaskan Brewing Co. (13 miles)
      </p>
      <p>AIRPORT: Juneau International Airport (9 miles)</p>

      <div className="section-separator">-- REST EASY WITH US --</div>

      <p>
        Evolve makes it easy to find and book properties you'll never want to leave. You can relax knowing that
        our properties will always be ready for you and that we'll answer the phone 24/7. Even better, if
        anything is off about your stay, we'll make it right. You can count on our homes and our people to make
        you feel welcome--because we know what vacation means to you.
      </p>

      <div className="section-separator">-- POLICIES --</div>

      <ul>
        <li>- No smoking</li>
        <li>- No pets allowed</li>
        <li>- No events, parties, or large gatherings</li>
        <li>- Must be at least 25 years old to book</li>
        <li>- Additional fees and taxes may apply</li>
        <li>- Photo ID may be required upon check-in</li>
        <li>NOTE: The property requires stairs to access</li>
        <li>NOTE: The property does not have air conditioning</li>
        <li>
          NOTE: The property sleeps 3 guests in 2 beds, with room for 4 total by using the full floor
          mattress
        </li>
      </ul>

      {/* Property Manager Section */}
      <h3 className="property-title">Property Manager</h3>
      <div className="property-manager">
        <div>
          <Image
            src="/images/logo.jpg" // Ensure this path corresponds to your public directory
            alt="Property Manager Logo"
            width={100}
            height={100}
            className="logo"
          />
          <div className="manager-info">
            <h2 style={{ marginTop: "10px" }}>Evolve</h2>
            <p className="languages">
              Languages<br />English, French, German, Spanish
            </p>
          </div>
        </div>
      </div>

      <a href="#" className="see-all">See More</a>
    </section>
  );
}
