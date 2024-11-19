// src/__tests__/Tabs.test.tsx
import { render, screen } from '@testing-library/react';
import Tabs from '../components/Tabs/Tabs';

describe('Tabs Component', () => {
  test('renders all tabs', () => {
    render(<Tabs />);
    
    // Check that the three tabs are rendered
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Amenities')).toBeInTheDocument();
    expect(screen.getByText('Policies')).toBeInTheDocument();
  });

  test('renders the active tab correctly', () => {
    render(<Tabs />);
    
    // Check that the "Overview" tab is active
    const activeTab = screen.getByText('Overview');
    expect(activeTab).toHaveClass('active');
    
    // Ensure the other tabs do not have the 'active' class
    expect(screen.getByText('Amenities')).not.toHaveClass('active');
    expect(screen.getByText('Policies')).not.toHaveClass('active');
  });

  test('active tab has the correct styling', () => {
    render(<Tabs />);
    
    // Check that the active tab has the 'active' class
    const activeTab = screen.getByText('Overview');
    expect(activeTab).toHaveClass('active');
  });

  test('renders the correct number of tabs', () => {
    render(<Tabs />);
    
    // Check that exactly three tabs are rendered
    const tabs = screen.getAllByClassName('tab');
    expect(tabs.length).toBe(3);
  });
});
