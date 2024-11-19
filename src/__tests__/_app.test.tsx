// src/__tests__/_app.test.tsx
// npx jest src/__tests__/_app.test.tsx
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import MyApp from '@/pages/_app';
import Layout from '@/components/Layout';
import '@testing-library/jest-dom';
import React from 'react';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/components/Layout', () => {
  return jest.fn(({ children }) => <div data-testid="layout">{children}</div>);
});

describe('_app.tsx', () => {
  const mockRouterPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      asPath: '/',
      push: mockRouterPush,
    });
  });

  it('renders the Layout component', () => {
    const Component = () => <div>Test Component</div>;
    const pageProps = {};

    const { getByTestId, getByText } = render(
      <MyApp Component={Component} pageProps={pageProps} />
    );

    expect(getByTestId('layout')).toBeInTheDocument();
    expect(getByText('Test Component')).toBeInTheDocument();
  });

  it('allows access to an allowed path', () => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: '/',
      push: mockRouterPush,
    });

    const Component = () => <div>Home Page</div>;
    const pageProps = {};

    render(<MyApp Component={Component} pageProps={pageProps} />);

    expect(mockRouterPush).not.toHaveBeenCalled();
  });

  it('redirects to /404 for an unauthorized path', () => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: '/unauthorized-path',
      push: mockRouterPush,
    });

    const Component = () => <div>Unauthorized Page</div>;
    const pageProps = {};

    render(<MyApp Component={Component} pageProps={pageProps} />);

    expect(mockRouterPush).toHaveBeenCalledWith('/404');
  });

  it('does not redirect from /404', () => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: '/404',
      push: mockRouterPush,
    });

    const Component = () => <div>404 Page</div>;
    const pageProps = {};

    render(<MyApp Component={Component} pageProps={pageProps} />);

    expect(mockRouterPush).not.toHaveBeenCalled();
  });

  it('allows access to hotel-details paths', () => {
    (useRouter as jest.Mock).mockReturnValue({
      asPath: '/hotel-details/123/some-hotel',
      push: mockRouterPush,
    });

    const Component = () => <div>Hotel Details</div>;
    const pageProps = {};

    render(<MyApp Component={Component} pageProps={pageProps} />);

    expect(mockRouterPush).not.toHaveBeenCalled();
  });
});
