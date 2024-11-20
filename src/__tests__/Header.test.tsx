// npx jest src/__tests__/Header.test.tsx

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Header from '../components/Header/Header';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should toggle the save button and change the icon on click', async () => {
    render(<Header />);
    
    const saveButton = screen.getByRole('button', { name: /save property/i });
    expect(saveButton).toBeInTheDocument();
    expect(saveButton).not.toHaveClass('active'); 

    fireEvent.click(saveButton);

    expect(saveButton).toHaveClass('active');
    
    fireEvent.click(saveButton);
    expect(saveButton).not.toHaveClass('active'); 
  });

  it('should toggle the share modal on click', async () => {
    render(<Header />);
    
    const shareButton = screen.getByRole('button', { name: /share/i });
    expect(shareButton).toBeInTheDocument();

    fireEvent.click(shareButton);

    const modal = screen.getByText(/share/i);
    expect(modal).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /✕/i }));

    expect(modal).not.toBeInTheDocument();
  });

  it('should copy the link to the clipboard', async () => {
    render(<Header />);
    
    fireEvent.click(screen.getByRole('button', { name: /share/i }));
    
    const copyButton = screen.getByRole('button', { name: /copy link/i });
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('https://example.com/property/juneau-vacation');
    });

    expect(screen.getByText(/link copied to clipboard/i)).toBeInTheDocument();
  });
});
