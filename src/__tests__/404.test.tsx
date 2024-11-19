// src/__tests__/404.test.tsx
// npx jest src/__tests__/404.test.tsx

import { render, screen } from '@testing-library/react';
import Custom404 from '@/pages/404';
import '@testing-library/jest-dom';

describe('Custom404 Page', () => {
  it('renders the 404 heading', () => {
    render(<Custom404 />);
    const heading = screen.getByText('404');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('text-6xl font-bold text-gray-800');
  });

  it('displays the "Page Not Found" message', () => {
    render(<Custom404 />);
    const message = screen.getByText('Page Not Found');
    expect(message).toBeInTheDocument();
    expect(message).toHaveClass('text-2xl font-semibold text-gray-600 mt-4');
  });

  it('shows a descriptive text for the error', () => {
    render(<Custom404 />);
    const description = screen.getByText("The page you're looking for doesn't exist.");
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-gray-500 mt-2');
  });

  it('renders a link to go back home', () => {
    render(<Custom404 />);
    const link = screen.getByRole('link', { name: /go back home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
    expect(link).toHaveClass('mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700');
  });

  it('applies correct layout styling', () => {
    render(<Custom404 />);
    // Target the outermost container
    const container = screen.getByTestId('404-container');
    expect(container).toHaveClass('min-h-screen flex items-center justify-center bg-gray-100');
  });
});
