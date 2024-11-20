// npx jest src/__tests__/BookingCard.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import BookingCard from '../components/BookingCard/BookingCard';

describe('BookingCard', () => {
  beforeEach(() => {
    render(<BookingCard />);
  });

  test('should render correctly', () => {
    expect(screen.getByText(/members get our best prices/i)).toBeInTheDocument();
    expect(screen.getByText(/134/)).toBeInTheDocument(); 
    expect(screen.getByText(/per night/)).toBeInTheDocument();
    expect(screen.getByText(/non-refundable/i)).toBeInTheDocument();
    expect(screen.getByText(/your dates are available/i)).toBeInTheDocument();
    expect(screen.getByText(/start date/i)).toBeInTheDocument();
    expect(screen.getByText(/end date/i)).toBeInTheDocument();
    expect(screen.getByText(/2 travelers/i)).toBeInTheDocument(); 
  });

  test('should increment adults and children count when "+" is clicked', () => {
    fireEvent.click(screen.getByText(/2 travelers/i));

    const adultIncrementButton = screen.getAllByRole('button')[1]; 
    const childrenIncrementButton = screen.getAllByRole('button')[4]; 

    fireEvent.click(adultIncrementButton); 
    fireEvent.click(adultIncrementButton); 

    fireEvent.click(childrenIncrementButton);

    expect(screen.getByText(/4 travelers/i)).toBeInTheDocument(); 
  });

  test('should decrement adults and children count when "-" is clicked', () => {
    fireEvent.click(screen.getByText(/2 travelers/i));

    const adultDecrementButton = screen.getAllByRole('button')[0]; 
    const childrenDecrementButton = screen.getAllByRole('button')[3]; 

    fireEvent.click(adultDecrementButton); 

    fireEvent.click(childrenDecrementButton); 

    expect(screen.getByText(/1 travelers/i)).toBeInTheDocument(); 
  });

  test('should toggle pets checkbox when clicked', () => {
    fireEvent.click(screen.getByText(/2 travelers/i));
    const petsCheckbox = screen.getByLabelText(/pets/i);
    expect(petsCheckbox).not.toBeChecked();

    fireEvent.click(petsCheckbox);
    expect(petsCheckbox).toBeChecked();

    fireEvent.click(petsCheckbox);
    expect(petsCheckbox).not.toBeChecked();
  });

  test('should save travelers data to localStorage', () => {
    fireEvent.click(screen.getByText(/2 travelers/i));

    const adultIncrementButton = screen.getAllByRole('button')[1]; 
    const childrenIncrementButton = screen.getAllByRole('button')[4]; 

    fireEvent.click(adultIncrementButton);
    fireEvent.click(childrenIncrementButton);

    expect(localStorage.getItem('travelers_adults')).toBe('3');
    expect(localStorage.getItem('travelers_children')).toBe('1');
  });
});
