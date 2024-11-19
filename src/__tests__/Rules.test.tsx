// npx jest src/__tests__/Rules.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Rules from '../components/Rules/Rules'; // Adjust the import path as necessary
import '@testing-library/jest-dom'; // for the matchers like toBeInTheDocument

describe('Rules Component', () => {
  test('renders house rules section', () => {
    render(<Rules />);

    // Check that the "House Rules" heading is in the document
    expect(screen.getByText('House Rules')).toBeInTheDocument();

    // Check that the rules are visible
    expect(screen.getByText(/Check in after 3:00 PM/)).toBeInTheDocument();
    expect(screen.getByText(/Minimum age to rent: 25/)).toBeInTheDocument();
    expect(screen.getByText(/Children allowed: ages 0-17/)).toBeInTheDocument();
    expect(screen.getByText('No pets allowed')).toBeInTheDocument();
    expect(screen.getByText('No events allowed')).toBeInTheDocument();
    expect(screen.getByText('Smoking is not permitted')).toBeInTheDocument();
  });

  test('renders cancellation section with timeline', () => {
    render(<Rules />);

    // Check that the "Cancellation" section exists
    expect(screen.getByText('Cancellation')).toBeInTheDocument();

    // Check for the refund timeline
    expect(screen.getByText('Full refund')).toBeInTheDocument();
    expect(screen.getByText('No refund')).toBeInTheDocument();
  });

  test('renders important information', () => {
    render(<Rules />);

    // Check that important information section renders
    expect(screen.getByText('Important information')).toBeInTheDocument();
    expect(screen.getByText('You need to know')).toBeInTheDocument();
    expect(screen.getByText('Government-issued photo identification')).toBeInTheDocument();
  });

  test('renders FAQ section with questions', () => {
    render(<Rules />);

    // Check that FAQ section renders
    expect(screen.getByText('Frequently asked questions')).toBeInTheDocument();

    // Check for at least one FAQ question
    expect(screen.getByText('Is Juneau Vacation Home: Stunning View + Beach Access pet-friendly?')).toBeInTheDocument();
    expect(screen.getByText('What time is check-in at Juneau Vacation Home: Stunning View + Beach Access?')).toBeInTheDocument();
  });

  test('renders rating and reviews section', () => {
    render(<Rules />);

    // Check that the rating section renders
    expect(screen.getByText('9.8/10')).toBeInTheDocument();
    expect(screen.getByText('Exceptional')).toBeInTheDocument();

    // Check if recent reviews are displayed
    expect(screen.getByText('Recent Reviews')).toBeInTheDocument();
  });

  test('renders host section', () => {
    render(<Rules />);

    // Check that the host section is rendered
    expect(screen.getByText('About the host')).toBeInTheDocument();
    expect(screen.getByText('Hosted by Evolve')).toBeInTheDocument();
  });

  test('handles the message form submission', () => {
    render(<Rules />);

    // Find the message textarea and send button
    const messageTextarea = screen.getByLabelText('Message to host');
    const sendButton = screen.getByText('Send');

    // Simulate typing a message and clicking the send button
    fireEvent.change(messageTextarea, { target: { value: 'Hello, I have a question!' } });
    fireEvent.click(sendButton);

    // For now, just check if the text is in the form
    expect(messageTextarea.value).toBe('Hello, I have a question!');
  });

  test('renders icons correctly', () => {
    render(<Rules />);

    // Check for icons related to house rules
    expect(screen.getByTestId('fa-child')).toBeInTheDocument();
    expect(screen.getByTestId('fa-dog')).toBeInTheDocument();
    expect(screen.getByTestId('fa-ban')).toBeInTheDocument();
    expect(screen.getByTestId('fa-ban-smoking')).toBeInTheDocument();
  });
});
