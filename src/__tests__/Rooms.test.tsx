//  npx jest src/__tests__/Rooms.test.tsx
import { render, screen } from '@testing-library/react';
import Rooms from '../components/Rooms/Rooms';

describe('Rooms Component', () => {
  test('renders correct number of bedrooms and guest count', () => {
    render(<Rooms guestCount={4} bedroomCount={2} />);
    expect(screen.getByText(/2 bedrooms \(sleeps 4\)/i)).toBeInTheDocument();
  });

  test('renders correct bedroom names and bed types', () => {
    render(
      <Rooms
        bedrooms={[
          { name: 'Bedroom 1', bedType: '1 Queen Bed' },
          { name: 'Bedroom 2', bedType: '1 Twin Bed' },
        ]}
      />
    );
    expect(screen.getByText('Bedroom 1')).toBeInTheDocument();
    expect(screen.getByText('1 Queen Bed')).toBeInTheDocument();
    expect(screen.getByText('Bedroom 2')).toBeInTheDocument();
    expect(screen.getByText('1 Twin Bed')).toBeInTheDocument();
  });

  test('renders default bedroom names and bed types when not provided', () => {
    render(<Rooms bedrooms={[]} />);
    expect(screen.getByText('Bedroom 1')).toBeInTheDocument();
    expect(screen.getByText('Bed type not specified')).toBeInTheDocument();
  });

  test('renders correct number of bathrooms', () => {
    render(<Rooms bathroomCount={2} />);
    expect(screen.getByText(/2 bathrooms/i)).toBeInTheDocument();
  });

  test('renders bathroom types correctly', () => {
    render(<Rooms bathrooms={[{ type: 'Full Bathroom' }, { type: 'Half Bathroom' }]} />);
    expect(screen.getByText('Full Bathroom')).toBeInTheDocument();
    expect(screen.getByText('Half Bathroom')).toBeInTheDocument();
  });

  test('renders default bathroom type when not provided', () => {
    render(<Rooms bathrooms={[]} />);
    expect(screen.getByText('Bathroom type not specified')).toBeInTheDocument();
  });

  test('renders bedroom and bathroom sections correctly', () => {
    render(<Rooms />);
    expect(screen.getByText(/Rooms & beds/i)).toBeInTheDocument();
    expect(screen.getByText(/bathroom/i)).toBeInTheDocument();
  });
});
