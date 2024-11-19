// npx jest src/__tests__/Question.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import Question from '../components/Question/Question';

describe('Question Component', () => {
  test('renders question header correctly', () => {
    render(<Question />);
    expect(screen.getByText('Have a question?')).toBeInTheDocument();
  });

  test('renders the description text correctly', () => {
    render(<Question />);
    expect(screen.getByText('Get instant answers with AI-powered search of property information and reviews.')).toBeInTheDocument();
  });

  test('renders search input field with placeholder text', () => {
    render(<Question />);
    const input = screen.getByPlaceholderText('Is there free parking?') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.placeholder).toBe('Is there free parking?');
  });

  test('renders search button with the correct icon', () => {
    render(<Question />);
    const button = screen.getByRole('button', { name: /search/i });
    expect(button).toBeInTheDocument();
    const icon = screen.getByClassName('fa-search');
    expect(icon).toBeInTheDocument();
  });

  test('renders beta tag correctly', () => {
    render(<Question />);
    expect(screen.getByText('Beta')).toBeInTheDocument();
  });

  test('search button triggers input value change', () => {
    render(<Question />);
    const input = screen.getByPlaceholderText('Is there free parking?') as HTMLInputElement;
    const button = screen.getByRole('button', { name: /search/i });

    // Simulate typing in the input field
    fireEvent.change(input, { target: { value: 'Does it have Wi-Fi?' } });
    expect(input.value).toBe('Does it have Wi-Fi?');

    // Simulate clicking the search button (you can extend the test to check button behavior)
    fireEvent.click(button);
    // Currently, the test checks if the button is clickable, you can extend this further based on behavior
    expect(button).toBeEnabled();
  });
});
