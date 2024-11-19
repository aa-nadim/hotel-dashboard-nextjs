// src/__tests__/index.test.tsx
// npx jest src/__tests__/index.test.tsx
import { render, screen } from '@testing-library/react';
import Home, { getServerSideProps } from '../pages/index';
import { Hotel } from '../pages/index';

// Mock the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { hotelId: '1', title: 'Hotel 1', imageUrl: '/images/hotel1.jpg' },
      { hotelId: '2', title: 'Hotel 2', imageUrl: '/images/hotel2.jpg' },
    ]),
  })
);

describe('Home Page', () => {
  it('renders the hotel list correctly', async () => {
    const hotels: Hotel[] = [
      { hotelId: '1', title: 'Hotel 1', imageUrl: '/images/hotel1.jpg' },
      { hotelId: '2', title: 'Hotel 2', imageUrl: '/images/hotel2.jpg' },
    ];

    render(<Home hotels={hotels} />);

    expect(screen.getByText(/Hotel 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Hotel 2/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Hotel 1/i)).toHaveAttribute('src', '/images/hotel1.jpg');
    expect(screen.getByAltText(/Hotel 2/i)).toHaveAttribute('src', '/images/hotel2.jpg');
  });

  it('handles empty hotel list', () => {
    render(<Home hotels={[]} />);

    expect(screen.queryByText(/Hotel 1/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Hotel 2/i)).not.toBeInTheDocument();
  });
});

describe('getServerSideProps', () => {
  it('fetches hotel data successfully', async () => {
    const response = await getServerSideProps({});
    expect(response.props.hotels).toHaveLength(2);
    expect(response.props.hotels[0].title).toBe('Hotel 1');
  });

  it('handles errors when fetching data', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch')));

    const response = await getServerSideProps({});
    expect(response.props.hotels).toEqual([]);
  });
});
