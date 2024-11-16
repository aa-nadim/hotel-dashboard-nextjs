export default function Spaces() {
  return (
        <section className="spaces-section">
            <h2>Spaces</h2>
            <div className="spaces-list">
                <div className="space-item">
                    <i className="fa-solid fa-house"></i>
                    <p>Deck or patio</p>
                </div>
                <div className="space-item">
                    <i className="fa-solid fa-kitchen-set"></i>

                    <p>Kitchen</p>
                </div>
                <div className="space-item">
                    <i className="fa-solid fa-house"></i>
                    <p>Balcony</p>
                </div>
                <div className="space-item">
                    <i className="fa fa-tree" aria-hidden="true"></i>

                    <p>Garden</p>
                </div>
            </div>
            <a href="#" className="see-all-link">See all rooms and beds details</a>
        </section>
  );
}