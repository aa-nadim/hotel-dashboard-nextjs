// npx jest src/__tests__/Navbar.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar/Navbar';

describe('Navbar component', () => {
  test('renders navbar correctly', () => {
    render(<Navbar />);

    // Check that the logo or initial content exists
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
    
    // Check that the navigation items are visible
    expect(screen.getByText('Trip Boards')).toBeInTheDocument();
    expect(screen.getByText('Help')).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  test('opens and closes the modal', () => {
    render(<Navbar />);

    // Open modal by clicking on region button
    const regionButton = screen.getByText('United States');
    fireEvent.click(regionButton);

    // Check if modal appears
    expect(screen.getByText('Display settings')).toBeInTheDocument();

    // Close modal by clicking the close button
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    // Check if modal is closed
    expect(screen.queryByText('Display settings')).not.toBeInTheDocument();
  });

  test('handles region change correctly', () => {
    render(<Navbar />);

    // Open modal by clicking on region button
    const regionButton = screen.getByText('United States');
    fireEvent.click(regionButton);

    // Change region to Canada
    const regionSelect = screen.getByLabelText('Region');
    fireEvent.change(regionSelect, { target: { value: 'Canada' } });

    // Check if the selected region and currency are updated
    expect(screen.getByDisplayValue('Canada')).toBeInTheDocument();
    expect(screen.getByDisplayValue('CAD')).toBeInTheDocument();
  });

  test('toggles mobile menu', () => {
    render(<Navbar />);

    // Initially, mobile menu should not be open
    expect(screen.queryByText('Trip Boards')).not.toBeInTheDocument();

    // Open mobile menu by clicking the menu button
    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);

    // Check if mobile menu appears
    expect(screen.getByText('Trip Boards')).toBeInTheDocument();

    // Close mobile menu by clicking the menu button again
    fireEvent.click(menuButton);

    // Check if mobile menu is closed
    expect(screen.queryByText('Trip Boards')).not.toBeInTheDocument();
  });
});
