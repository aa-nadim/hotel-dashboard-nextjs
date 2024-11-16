export default function Question() {
  return (
    <section className="question-section">
      <h3>Have a question?</h3>
      <p>Get instant answers with AI-powered search of property information and reviews.</p>
      <div className="search-bar">
        <input type="text" placeholder="Is there free parking?" className="search-input" />
        <button type="submit" className="search-button">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
      <button className="beta-tag">Beta</button>
    </section>
  );
}
