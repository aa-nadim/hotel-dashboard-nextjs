// npx jest src/__tests__/Amenities.test.tsx

import { render, screen } from '@testing-library/react';
import Amenities from '../components/Amenities/Amenities';

describe('Amenities Component', () => {
  test('renders default amenities when no props are passed', () => {
    render(<Amenities />);

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
    expect(screen.getByText(`See all ${defaultAmenities.length} amenities`)).toBeInTheDocument();
  });

  test('renders passed amenities when props are provided', () => {
    const customAmenities = [
      "🔥 Fireplace",
      "💻 Workspace",
      "🍳 Fully Equipped Kitchen",
    ];

    render(<Amenities amenities={customAmenities} />);

    customAmenities.forEach((amenity) => {
      expect(screen.getByText(amenity)).toBeInTheDocument();
    });

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

    expect(screen.getByText(`See all ${customAmenities.length} amenities`)).toBeInTheDocument();
  });

  test('renders "See all" link with correct number when no props are passed', () => {
    render(<Amenities />);
    expect(screen.getByText('See all 6 amenities')).toBeInTheDocument();
  });
});
