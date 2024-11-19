// src/__tests__/Spaces.test.tsx
// npx jest src/__tests__/Spaces.test.tsx
// src/__tests__/Spaces.test.tsx

import { render, screen } from '@testing-library/react';
import Spaces from '../components/Spaces/Spaces';

describe('Spaces component', () => {
  test('renders default spaces when no props are passed', () => {
    render(<Spaces />);

    // Check if the default spaces are rendered
    expect(screen.getByText('Deck or patio')).toBeInTheDocument();
    expect(screen.getByText('Kitchen')).toBeInTheDocument();
    expect(screen.getByText('Balcony')).toBeInTheDocument();
    expect(screen.getByText('Garden')).toBeInTheDocument();

    // Check if the "See all rooms and beds details" link is rendered
    expect(screen.getByText('See all rooms and beds details')).toBeInTheDocument();
  });

  test('renders passed spaces props correctly', () => {
    const customSpaces = [
      { icon: 'fa-solid fa-bed', name: 'Living Room' },
      { icon: 'fa-solid fa-couch', name: 'Dining Area' }
    ];

    render(<Spaces spaces={customSpaces} />);

    // Check if the custom spaces are rendered
    expect(screen.getByText('Living Room')).toBeInTheDocument();
    expect(screen.getByText('Dining Area')).toBeInTheDocument();

    // Check if the "See all rooms and beds details" link is still rendered
    expect(screen.getByText('See all rooms and beds details')).toBeInTheDocument();
  });

  test('renders the correct icon for each space', () => {
    render(<Spaces />);

    // Check if the correct icons are rendered
    const icons = screen.getAllByClassName(/^fa-/); // Querying all elements with a class starting with 'fa-'
    expect(icons).toHaveLength(4); // Ensure there are 4 spaces with icons
  });
});

