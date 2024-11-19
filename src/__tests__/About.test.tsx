// npx jest src/__tests__/About.test.tsx

import { render, screen } from '@testing-library/react';
import About from '../components/About/About';

describe('About Component', () => {
  test('renders default title and description', () => {
    render(<About />);

    // Check if the default title is rendered
    expect(screen.getByText('Default Vacation Home: Stunning View + Beach Access')).toBeInTheDocument();

    // Check if the default description is rendered
    expect(
      screen.getByText(
        /Escape to the mountains and experience the great outdoors at this lovely vacation rental!/
      )
    ).toBeInTheDocument();
  });

  test('renders custom title and description when passed as props', () => {
    const customTitle = 'Custom Vacation Home';
    const customDescription = 'This is a custom description for the vacation home.';

    render(<About title={customTitle} description={customDescription} />);

    // Check if the custom title is rendered
    expect(screen.getByText(customTitle)).toBeInTheDocument();

    // Check if the custom description is rendered
    expect(screen.getByText(customDescription)).toBeInTheDocument();
  });

  test('renders property details', () => {
    render(<About />);

    // Check if property details text is rendered
    expect(screen.getByText('2,100/2,100 | 1,115 Sq Ft | 2 Private Decks')).toBeInTheDocument();
    expect(screen.getByText('Bedroom: Queen Bed, Full Floor Mattress')).toBeInTheDocument();
    expect(screen.getByText('HOME HIGHLIGHTS: Flat-screen TV, dining table, washer/dryer')).toBeInTheDocument();
    expect(screen.getByText('KITCHEN: Fridge, stove, coffee maker, microwave')).toBeInTheDocument();
  });

  test('renders location details section', () => {
    render(<About />);

    // Check if location-related information is rendered
    expect(screen.getByText('Lena Cove (on-site), Lena Beach Recreation Area')).toBeInTheDocument();
    expect(screen.getByText('Mendenhall Golf (8 miles), Dimond Park Aquatic Center')).toBeInTheDocument();
    expect(screen.getByText('Forbidden Peak Brewery (5 miles). The Grind Coffee Company')).toBeInTheDocument();
    expect(screen.getByText('Juneau International Airport (9 miles)')).toBeInTheDocument();
  });

  test('renders policies list', () => {
    render(<About />);

    // Check if policies are listed
    expect(screen.getByText('No smoking')).toBeInTheDocument();
    expect(screen.getByText('No pets allowed')).toBeInTheDocument();
    expect(screen.getByText('No events, parties, or large gatherings')).toBeInTheDocument();
  });

  test('renders property manager section', () => {
    render(<About />);

    // Check if property manager section is rendered
    expect(screen.getByText('Property Manager')).toBeInTheDocument();
    expect(screen.getByText('Evolve')).toBeInTheDocument();
    expect(screen.getByText('Languages\nEnglish, French, German, Spanish')).toBeInTheDocument();

    // Check if image is rendered for the property manager logo
    const logoImage = screen.getByAltText('Property Manager Logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/images/logo.jpg');
  });

  test('renders "See More" link', () => {
    render(<About />);

    // Check if the "See More" link is rendered
    expect(screen.getByText('See More')).toBeInTheDocument();
  });
});
