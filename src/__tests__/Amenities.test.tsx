// npx jest src/__tests__/Amenities.test.tsx

import { render, screen } from '@testing-library/react';
import Amenities from '../components/Amenities/Amenities';

describe('Amenities Component', () => {
  test('renders default amenities when no props are passed', () => {
    render(<Amenities />);

    // Check if default amenities are rendered
    const defaultAmenities = [
      "🍽 Kitchen",
      "🚗 Parking available",
      "🧼 Washer",
      "🌊 Ocean view",
      "🧺 Dryer",
      "🌳 Outdoor Space",
    ];

    defaultAmenities.forEach((amenity) => {
      expect(screen.getByText(amenity)).toBeInTheDocument();
    });

    // Check if the "See all" link is rendered with the correct number of amenities
    expect(screen.getByText(`See all ${defaultAmenities.length} amenities`)).toBeInTheDocument();
  });

  test('renders passed amenities when props are provided', () => {
    const customAmenities = [
      "🔥 Fireplace",
      "💻 Workspace",
      "🍳 Fully Equipped Kitchen",
    ];

    render(<Amenities amenities={customAmenities} />);

    // Check if custom amenities are rendered
    customAmenities.forEach((amenity) => {
      expect(screen.getByText(amenity)).toBeInTheDocument();
    });

    // Check if the "See all" link is rendered with the correct number of amenities
    expect(screen.getByText(`See all ${customAmenities.length} amenities`)).toBeInTheDocument();
  });

  test('renders correct number of amenities', () => {
    const customAmenities = [
      "🔥 Fireplace",
      "💻 Workspace",
      "🍳 Fully Equipped Kitchen",
      "🎮 Game Room",
    ];

    render(<Amenities amenities={customAmenities} />);

    // Check if the "See all" link shows the correct number of amenities
    expect(screen.getByText(`See all ${customAmenities.length} amenities`)).toBeInTheDocument();
  });

  test('renders "See all" link with correct number when no props are passed', () => {
    render(<Amenities />);

    // Check if the "See all" link shows the correct number for default amenities
    expect(screen.getByText('See all 6 amenities')).toBeInTheDocument();
  });
});
