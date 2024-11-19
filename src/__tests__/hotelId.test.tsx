// src/__tests__/hotelId.test.tsx
// npx jest src/__tests__/hotelId.test.tsx

import { render, screen } from '@testing-library/react';
import { GetServerSidePropsContext } from 'next';
import HotelPage, { getServerSideProps } from '@/pages/hotel-details/[slug]/[hotelId]';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { slugify } from '@/utils/slugify';

jest.mock('@/utils/slugify', () => ({
  slugify: jest.fn((title: string) => title.toLowerCase().replace(/\s+/g, '-')),
}));

jest.mock('@/components/Header/Header', () => () => <div data-testid="header">Header Component</div>);
jest.mock('@/components/Gallery/Gallery', () => () => <div data-testid="gallery">Gallery Component</div>);
jest.mock('@/components/Tabs/Tabs', () => () => <div data-testid="tabs">Tabs Component</div>);
jest.mock('@/components/Location/Location', () => () => <div data-testid="location">Location Component</div>);
jest.mock('@/components/BookingCard/BookingCard', () => () => <div data-testid="booking-card">BookingCard Component</div>);
jest.mock('@/components/Rooms/Rooms', () => () => <div data-testid="rooms">Rooms Component</div>);
jest.mock('@/components/Spaces/Spaces', () => () => <div data-testid="spaces">Spaces Component</div>);
jest.mock('@/components/About/About', () => () => <div data-testid="about">About Component</div>);
jest.mock('@/components/Amenities/Amenities', () => () => <div data-testid="amenities">Amenities Component</div>);
jest.mock('@/components/Question/Question', () => () => <div data-testid="question">Question Component</div>);
jest.mock('@/components/Rules/Rules', () => () => <div data-testid="rules">Rules Component</div>);

describe('HotelPage', () => {
  beforeAll(() => {
    fetchMock.enableMocks();
  });

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders the HotelPage with all components', () => {
    const hotel = {
      title: 'Test Hotel',
      images: [],
      guestCount: 2,
      bedroomCount: 1,
      bathroomCount: 1,
      amenities: [],
      address: '123 Test Street',
      location: {},
      description: 'A lovely hotel for testing purposes.',
      spaces: [],
      questions: [],
      rules: [],
    };

    render(<HotelPage hotel={hotel} />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('gallery')).toBeInTheDocument();
    expect(screen.getByTestId('tabs')).toBeInTheDocument();
    expect(screen.getByTestId('location')).toBeInTheDocument();
    expect(screen.getByTestId('booking-card')).toBeInTheDocument();
    expect(screen.getByTestId('rooms')).toBeInTheDocument();
    expect(screen.getByTestId('spaces')).toBeInTheDocument();
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('amenities')).toBeInTheDocument();
    expect(screen.getByTestId('question')).toBeInTheDocument();
    expect(screen.getByTestId('rules')).toBeInTheDocument();
  });

  describe('getServerSideProps', () => {
    it('returns 404 when params are missing', async () => {
      const context = { params: undefined } as unknown as GetServerSidePropsContext;

      const result = await getServerSideProps(context);

      expect(result).toEqual({ notFound: true });
    });

    it('returns 404 if hotel data is not found', async () => {
      fetchMock.mockResponseOnce('', { status: 404 });

      const context = { params: { slug: 'test-hotel', hotelId: '123' } } as GetServerSidePropsContext;

      const result = await getServerSideProps(context);

      expect(result).toEqual({ notFound: true });
    });

    it('redirects to the correct slug if the slug is incorrect', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ title: 'Test Hotel' }));

      const context = { params: { slug: 'wrong-slug', hotelId: '123' } } as GetServerSidePropsContext;

      const result = await getServerSideProps(context);

      expect(result).toEqual({
        redirect: {
          destination: '/hotel-details/test-hotel/123',
          permanent: true,
        },
      });
    });

    it('returns hotel data for valid params', async () => {
      const hotelData = {
        title: 'Test Hotel',
        id: '123',
        images: [],
        guestCount: 2,
        bedroomCount: 1,
        bathroomCount: 1,
        amenities: [],
        address: '123 Test Street',
        location: {},
        description: 'A lovely hotel for testing purposes.',
        spaces: [],
        questions: [],
        rules: [],
      };

      fetchMock.mockResponseOnce(JSON.stringify(hotelData));

      const context = { params: { slug: 'test-hotel', hotelId: '123' } } as GetServerSidePropsContext;

      const result = await getServerSideProps(context);

      expect(result).toEqual({
        props: {
          hotel: hotelData,
        },
      });
    });
  });
});
