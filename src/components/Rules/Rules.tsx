export default function Rules() {
  return (
    <section className="rules-container">
      {/* Wrapper for House Rules Section */}
      <div className="rules-wrapper">
        {/* Left Column for "House Rules" Heading */}
        <div className="rules-headings">
          <h3>House Rules</h3>
        </div>

        {/* Right Column for "House Rules" Content */}
        <div className="rules-content">
          <div className="house-rules">
            <p>
              Check in after 3:00 PM • Check out before 11:00 AM • Minimum age to rent: 25
            </p>
            <div className="rules-icons">
              <div className="rule-item">
                <i className="fa fa-child" aria-hidden="true"></i>
                <div>
                  <strong>Children</strong>
                  <br /> Children allowed: ages 0-17
                </div>
              </div>
              <div className="rule-item">
                <i className="fa-solid fa-dog"></i>
                <div>
                  <strong>Pets</strong>
                  <br /> No pets allowed
                </div>
              </div>
              <div className="rule-item">
                <i className="fa-solid fa-ban"></i>
                <div>
                  <strong>Events</strong>
                  <br /> No events allowed
                </div>
              </div>
              <div className="rule-item">
                <i className="fa-solid fa-ban-smoking"></i>
                <div>
                  <strong>Smoking</strong>
                  <br /> Smoking is not permitted
                </div>
              </div>
            </div>
            <a href="#" className="see-more">
              See More
            </a>
          </div>
        </div>
      </div>

      {/* Wrapper for Damage and Incidentals Section */}
      <div className="rules-wrapper">
        {/* Left Column for "Damage and Incidentals" Heading */}
        <div className="rules-headings">
          <h3>
            <span>Damage and</span>
            <br />
            <span>incidentals</span>
          </h3>
        </div>

        {/* Right Column for "Damage and Incidentals" Content */}
        <div className="rules-content">
          <div className="damage-info">
            <p>
              You will be responsible for any damage to the rental property caused by you or your party during
              your stay.
            </p>
          </div>
        </div>
      </div>

      {/* Wrapper for Cancellation Section */}
      <div className="rules-wrapper">
        {/* Left Column for "Cancellation" Heading */}
        <div className="rules-headings">
          <h3>Cancellation</h3>
        </div>

        {/* Right Column for "Cancellation" Content */}
        <div className="rules-content cancellation-content">
          <div className="house-rules">
            <div className="timeline">
              <div className="timeline-line"></div>
              <div className="range-label full-refund">Full refund</div>
              <div className="range-label no-refund">No refund</div>
              <ul className="timeline-points">
                <li className="timeline-point point-current">
                  <div className="point-marker"></div>
                  <div className="point-date">Today</div>
                </li>
                <li className="timeline-point point-past">
                  <div className="point-marker"></div>
                  <div className="point-date">Nov 4</div>
                </li>
                <li className="timeline-point point-future">
                  <div className="point-marker"></div>
                  <div className="point-date">Check-in</div>
                </li>
              </ul>
            </div>
            {/* Cancellation Policy Details */}
            <div className="refund-container">
              <div className="refund-section">
                <div className="refund-date">
                  <p>Before<br /> Nov 4</p>
                </div>
                <div className="refund-info">
                  <h4>Full refund</h4>
                  <p>
                    Cancel your reservation before Nov 4 at 11:59 PM, and you'll get a full refund. Times are
                    based on the property’s local time.
                  </p>
                </div>
              </div>
              <div className="refund-section">
                <div className="refund-date">
                  <p>After<br /> Nov 4</p>
                </div>
                <div className="refund-info">
                  <h4>No refund</h4>
                  <p>After that, you won’t get a refund.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wrapper for Important Info Section */}
      <div className="rules-wrapper">
        <div className="rules-headings">
          <h3>Important information</h3>
        </div>
        <div className="rules-content">
          <ul className="important-info-list">
            <li><b>You need to know</b></li>
            <li>Government-issued photo identification and a credit card, debit card, or cash deposit may be
              required at check-in for incidental charges
            </li>
            <li>Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed</li>
            <li>Onsite parties or group events are strictly prohibited</li>
            <li>Host has indicated there is a carbon monoxide detector on the property</li>
            <li>Host has indicated there is a smoke detector on the property</li>
            <li>Safety features at this property include a fire extinguisher and a first aid kit</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="rules-wrapper">
        <div className="rules-headings">
          <h3>Frequently asked questions</h3>
        </div>
        <div className="rules-content">
          <ul className="faq-list">
            <li className="faq-item">
              <details>
                <summary>Is Juneau Vacation Home: Stunning View + Beach Access pet-friendly?</summary>
              </details>
            </li>
            <li className="faq-item">
              <details>
                <summary>What time is check-in at Juneau Vacation Home: Stunning View + Beach Access?</summary>
              </details>
            </li>
            <li className="faq-item">
              <details>
                <summary>What time is check-out at Juneau Vacation Home: Stunning View + Beach Access?</summary>
              </details>
            </li>
            <li className="faq-item">
              <details>
                <summary>Where is Juneau Vacation Home: Stunning View + Beach Access located?</summary>
              </details>
            </li>
          </ul>
        </div>
      </div>

      {/* Rating and Review Section */}
      <div className="rules-wrapper review-container">
        <div className="rules-headings">
          <div className="rating">
            <div className="rating-value">9.8/10</div>
            <div className="rating-details">
              <p className="exceptional">Exceptional</p>
              <p className="review-count">24 reviews</p>
              <small className="verified-note">Reviews are verified unless labeled otherwise.</small>
            </div>
          </div>
        </div>
        <div className="rules-content">
          <div className="reviews-section">
            <h3>Recent Reviews</h3>
            <div className="reviews-container">
              <div className="reviews-scroll">
                <div className="review-card">
                  <h4>10/10 Excellent</h4>
                  <p>
                    A very cozy home for the two of us in a quiet area NW of town. Beautiful water view. We enjoyed the art, read up in it and visited the...
                  </p>
                  <small>Read more</small>
                  <p><strong>Kyle G.</strong><br /> Sep 25, 2024</p>
                </div>
                {/* Repeat review cards */}
              </div>
            </div>
            <button className="view-all">See all 24 reviews</button>
          </div>
        </div>
      </div>

      {/* Host Section */}
      <div className="rules-wrapper">
        <div className="rules-headings">
          <h3>About the host</h3>
        </div>
        <div className="rules-content">
          <div className="house-rules">
            <span>Hosted by Evolve</span>
            <div className="rules-icons">
              <div className="rule-item language">
                <p>Languages:</p>
                <div className="language-list">
                  <span className="language-tag">English</span>
                  <span className="language-tag">French</span>
                  <span className="language-tag">German</span>
                  <span className="language-tag">Spanish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Send a Message Section */}
      <div className="rules-wrapper">
        <div className="rules-headings">
          <h3>Send a message</h3>
        </div>
        <div className="rules-content">
          <div className="message-section">
            <div className="message-form">
              <div className="form-field">
                <label htmlFor="message">Message to host</label>
                <textarea id="message" placeholder="Type your message"></textarea>
              </div>
              <button className="send-message">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
