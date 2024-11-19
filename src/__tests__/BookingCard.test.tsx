// npx jest src/__tests__/BookingCard.test.tsx


import { render, screen, fireEvent } from '@testing-library/react';
import BookingCard from '../components/BookingCard/BookingCard';

describe('BookingCard', () => {
  beforeEach(() => {
    render(<BookingCard />);
  });

  test('should render correctly', () => {
    // Check if essential elements are present
    expect(screen.getByText(/members get our best prices/i)).toBeInTheDocument();
    expect(screen.getByText(/134/)).toBeInTheDocument(); // Price
    expect(screen.getByText(/per night/)).toBeInTheDocument();
    expect(screen.getByText(/non-refundable/i)).toBeInTheDocument();
    expect(screen.getByText(/your dates are available/i)).toBeInTheDocument();
    expect(screen.getByText(/start date/i)).toBeInTheDocument();
    expect(screen.getByText(/end date/i)).toBeInTheDocument();
    expect(screen.getByText(/2 travelers/i)).toBeInTheDocument(); // Default travelers count
  });

  test('should increment adults and children count when "+" is clicked', () => {
    // Open travelers content by clicking on "2 travelers"
    fireEvent.click(screen.getByText(/2 travelers/i));

    // Find the "+" buttons for adults and children
    const adultIncrementButton = screen.getAllByRole('button')[1]; // Assuming it's the second button
    const childrenIncrementButton = screen.getAllByRole('button')[4]; // Assuming it's the fifth button

    // Increment adults
    fireEvent.click(adultIncrementButton); // First click
    fireEvent.click(adultIncrementButton); // Second click

    // Increment children
    fireEvent.click(childrenIncrementButton);

    // Check if the counts have been updated
    expect(screen.getByText(/4 travelers/i)).toBeInTheDocument(); // 4 travelers (2 adults, 1 child)
  });

  test('should decrement adults and children count when "-" is clicked', () => {
    // Open travelers content by clicking on "2 travelers"
    fireEvent.click(screen.getByText(/2 travelers/i));

    // Find the "-" buttons for adults and children
    const adultDecrementButton = screen.getAllByRole('button')[0]; // Assuming it's the first button
    const childrenDecrementButton = screen.getAllByRole('button')[3]; // Assuming it's the fourth button

    // Decrement adults
    fireEvent.click(adultDecrementButton); // Decrement once

    // Decrement children
    fireEvent.click(childrenDecrementButton); // Decrement once

    // Check if the counts have been updated
    expect(screen.getByText(/1 travelers/i)).toBeInTheDocument(); // 1 traveler (1 adult, 0 children)
  });

  test('should toggle pets checkbox when clicked', () => {
    // Open travelers content by clicking on "2 travelers"
    fireEvent.click(screen.getByText(/2 travelers/i));

    // Find the pets checkbox
    const petsCheckbox = screen.getByLabelText(/pets/i);

    // Initially, the pets checkbox should be unchecked
    expect(petsCheckbox).not.toBeChecked();

    // Click to check the pets checkbox
    fireEvent.click(petsCheckbox);

    // Check if the checkbox is now checked
    expect(petsCheckbox).toBeChecked();

    // Click again to uncheck the pets checkbox
    fireEvent.click(petsCheckbox);

    // Check if the checkbox is unchecked again
    expect(petsCheckbox).not.toBeChecked();
  });

  test('should save travelers data to localStorage', () => {
    // Open travelers content by clicking on "2 travelers"
    fireEvent.click(screen.getByText(/2 travelers/i));

    // Find the "+" buttons for adults and children
    const adultIncrementButton = screen.getAllByRole('button')[1]; // Assuming it's the second button
    const childrenIncrementButton = screen.getAllByRole('button')[4]; // Assuming it's the fifth button

    // Increment adults and children
    fireEvent.click(adultIncrementButton);
    fireEvent.click(childrenIncrementButton);

    // Check localStorage for updated values
    expect(localStorage.getItem('travelers_adults')).toBe('3');
    expect(localStorage.getItem('travelers_children')).toBe('1');
  });
});
