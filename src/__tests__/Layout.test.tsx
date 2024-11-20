// npx jest src/__tests__/Layout.test.tsx
import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout';
import '@testing-library/jest-dom';

jest.mock('@/components/Navbar/Navbar', () => () => <div>Mock Navbar</div>);
jest.mock('@/components/Footer/Footer', () => () => <div>Mock Footer</div>);

describe('Layout Component', () => {
  test('renders Navbar, children, and Footer correctly', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(screen.getByText('Mock Navbar')).toBeInTheDocument();

    expect(screen.getByText('Test Content')).toBeInTheDocument();

    expect(screen.getByText('Mock Footer')).toBeInTheDocument();
  });

  test('renders main content inside the layout', () => {
    render(
      <Layout>
        <h1>Main Content</h1>
      </Layout>
    );

    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });
});
