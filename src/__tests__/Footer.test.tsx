// npx jest src/__tests__/Footer.test.tsx

import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer/Footer';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';

// Mocking Next.js Link component to avoid actual navigation
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('Footer Component', () => {
  test('renders the correct footer content', () => {
    render(<Footer />);

    // Check if the copyright text is displayed correctly
    expect(screen.getByText(`© ${new Date().getFullYear()} Vacation Rentals. All rights reserved.`)).toBeInTheDocument();

    // Check if the Privacy Policy link is displayed and functional
    const privacyLink = screen.getByText('Privacy Policy');
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute('href', '#');

    // Check if the Terms of Service link is displayed and functional
    const termsLink = screen.getByText('Terms of Service');
    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute('href', '#');

    // Check if the separator | is present
    expect(screen.getByText('|')).toBeInTheDocument();
  });

  test('checks the styling classes applied to the footer', () => {
    render(<Footer />);

    // Check if the footer has the expected background color class and text color
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('bg-gray-800');
    expect(footerElement).toHaveClass('text-white');
  });
});
