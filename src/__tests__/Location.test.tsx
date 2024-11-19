// npx jest src/__tests__/Location.test.tsx

import { render, screen } from '@testing-library/react';
import Location from '../components/Location/Location';

// Mock data for the Location component props
const mockProps = {
  title: 'Cozy Mountain Retreat',
  guestCount: 6,
  bedroomCount: 3,
  bathroomCount: 2,
  address: {
    street: '456 Mountain Road',
    city: 'Mountain View',
    state: 'CA',
    country: 'USA',
    zipCode: '94043',
  },
  location: { latitude: 37.3861, longitude: -122.0838 },
  amenities: ['🍽 Kitchen', '🚗 Free Parking', '🌳 Garden', '🛏️ Comfortable Beds'],
  nearbyLocations: [
    { name: 'Mountain Park', driveTime: '15 min drive', iconClass: 'fa-solid fa-location-dot' },
    { name: 'Lake View', driveTime: '20 min drive', iconClass: 'fa-solid fa-location-dot' },
  ],
};

describe('Location Component', () => {
  test('renders location title correctly', () => {
    render(<Location {...mockProps} />);
    expect(screen.getByText('Cozy Mountain Retreat')).toBeInTheDocument();
  });

  test('renders address correctly', () => {
    render(<Location {...mockProps} />);
    const formattedAddress = '456 Mountain Road, Mountain View, CA, USA 94043';
    expect(screen.getByText(formattedAddress)).toBeInTheDocument();
  });

  test('renders guest, bedroom, and bathroom counts correctly', () => {
    render(<Location {...mockProps} />);
    expect(screen.getByText('Sleeps 6')).toBeInTheDocument();
    expect(screen.getByText('3 bedrooms')).toBeInTheDocument();
    expect(screen.getByText('2 bathrooms')).toBeInTheDocument();
  });

  test('renders amenities list correctly', () => {
    render(<Location {...mockProps} />);
    mockProps.amenities.forEach((amenity) => {
      expect(screen.getByText(amenity)).toBeInTheDocument();
    });
  });

  test('renders nearby locations correctly', () => {
    render(<Location {...mockProps} />);
    mockProps.nearbyLocations.forEach((loc) => {
      expect(screen.getByText(loc.name)).toBeInTheDocument();
      expect(screen.getByText(loc.driveTime)).toBeInTheDocument();
    });
  });

  test('renders map iframe with correct source URL', () => {
    render(<Location {...mockProps} />);
    const iframe = screen.getByTitle('Location Map') as HTMLIFrameElement;
    expect(iframe.src).toContain('37.3861,-122.0838');
  });
});
