// npx jest src/__tests__/Header.test.tsx

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Header from '../components/Header/Header';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('should toggle the save button and change the icon on click', async () => {
    // Render the Header component
    render(<Header />);
    
    // Check the initial state of the save button (not saved)
    const saveButton = screen.getByRole('button', { name: /save property/i });
    expect(saveButton).toBeInTheDocument();
    expect(saveButton).not.toHaveClass('active'); // Button should not be active initially

    // Click the save button to save the property
    fireEvent.click(saveButton);

    // After clicking, the save button should become active
    expect(saveButton).toHaveClass('active');
    
    // Click again to unsave the property
    fireEvent.click(saveButton);
    expect(saveButton).not.toHaveClass('active'); // Button should not be active
  });

  it('should toggle the share modal on click', async () => {
    render(<Header />);
    
    // Check that the share button is in the document
    const shareButton = screen.getByRole('button', { name: /share/i });
    expect(shareButton).toBeInTheDocument();

    // Click to open the share modal
    fireEvent.click(shareButton);

    // Check that the modal is now visible
    const modal = screen.getByText(/share/i);
    expect(modal).toBeInTheDocument();

    // Click again to close the share modal
    fireEvent.click(screen.getByRole('button', { name: /✕/i }));

    // Check that the modal is no longer visible
    expect(modal).not.toBeInTheDocument();
  });

  it('should copy the link to the clipboard', async () => {
    render(<Header />);
    
    // Open the share modal to make sure the copy button is present
    fireEvent.click(screen.getByRole('button', { name: /share/i }));
    
    // Find and click the "Copy link" button
    const copyButton = screen.getByRole('button', { name: /copy link/i });
    fireEvent.click(copyButton);

    // Wait for clipboard write action to complete
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('https://example.com/property/juneau-vacation');
    });

    // Check that the alert was shown (optional, if you want to test this)
    expect(screen.getByText(/link copied to clipboard/i)).toBeInTheDocument();
  });
});
