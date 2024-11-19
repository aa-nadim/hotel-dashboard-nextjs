// npx jest src/__tests__/Layout.test.tsx
import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout';
import '@testing-library/jest-dom';

// Mocking Navbar and Footer to prevent rendering actual components
jest.mock('@/components/Navbar/Navbar', () => () => <div>Mock Navbar</div>);
jest.mock('@/components/Footer/Footer', () => () => <div>Mock Footer</div>);

describe('Layout Component', () => {
  test('renders Navbar, children, and Footer correctly', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    // Check if the mocked Navbar is rendered
    expect(screen.getByText('Mock Navbar')).toBeInTheDocument();

    // Check if the children content is rendered
    expect(screen.getByText('Test Content')).toBeInTheDocument();

    // Check if the mocked Footer is rendered
    expect(screen.getByText('Mock Footer')).toBeInTheDocument();
  });

  test('renders main content inside the layout', () => {
    render(
      <Layout>
        <h1>Main Content</h1>
      </Layout>
    );

    // Check that the main content is correctly rendered inside <main>
    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });
});
