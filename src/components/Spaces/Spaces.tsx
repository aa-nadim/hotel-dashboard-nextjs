import React from 'react';

interface SpacesProps {
  spaces?: { icon: string; name: string }[];
}

const defaultSpaces = [
  { icon: "fa-solid fa-house", name: "Deck or patio" },
  { icon: "fa-solid fa-kitchen-set", name: "Kitchen" },
  { icon: "fa-solid fa-house", name: "Balcony" },
  { icon: "fa fa-tree", name: "Garden" },
];

const Spaces: React.FC<SpacesProps> = ({ spaces = defaultSpaces }) => {
  const displayedSpaces = spaces.length > 0 ? spaces : defaultSpaces;

  return (
    <section className="spaces-section">
      <h2>Spaces</h2>
      <div className="spaces-list">
        {displayedSpaces.map((space, index) => (
          <div key={index} className="space-item">
            <i className={space.icon} aria-hidden="true"></i>
            <p>{space.name}</p>
          </div>
        ))}
      </div>
      <a href="#" className="see-all-link">See all rooms and beds details</a>
    </section>
  );
};

export default Spaces;
