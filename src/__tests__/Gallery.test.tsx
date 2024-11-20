
// npx jest src/__tests__/Gallery.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Gallery from '../components/Gallery/Gallery';
import '@testing-library/jest-dom';


jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string, alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe('Gallery component', () => {
  it('renders the gallery with default images when no images are provided', () => {
    render(<Gallery />);

    const mainImage = screen.getByAltText(/Beautiful lakefront view with private deck/i);
    expect(mainImage).toBeInTheDocument();

    const thumbnails = screen.getAllByRole('img');
    expect(thumbnails.length).toBeGreaterThanOrEqual(4); 
  });

  it('renders the gallery with provided images', () => {
    const providedImages = [
      'http://localhost:5000/images/image1.jpg',
      'http://localhost:5000/images/image2.jpg',
      'http://localhost:5000/images/image3.jpg',
    ];

    render(<Gallery images={providedImages} />);

    const mainImage = screen.getByAltText(/Hotel - View 1/i);
    expect(mainImage).toBeInTheDocument();

    const thumbnails = screen.getAllByRole('img');
    expect(thumbnails.length).toBeGreaterThanOrEqual(3); 
  });

  it('opens and closes the modal', () => {
    render(<Gallery />);

    const openModalButton = screen.getByText(/more photos/i);
    fireEvent.click(openModalButton);

    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();

    const closeButton = screen.getByText('×');
    fireEvent.click(closeButton);
    expect(modal).not.toBeInTheDocument();
  });

  it('navigates through images using arrow keys', async () => {
    render(<Gallery />);

    const openModalButton = screen.getByText(/more photos/i);
    fireEvent.click(openModalButton);

    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'ArrowRight' });
    await waitFor(() => {
      const image = screen.getByAltText(/Hotel - View 2/i);
      expect(image).toBeInTheDocument();
    });

    fireEvent.keyDown(document, { key: 'ArrowLeft' });
    await waitFor(() => {
      const image = screen.getByAltText(/Hotel - View 1/i);
      expect(image).toBeInTheDocument();
    });

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(modal).not.toBeInTheDocument();
  });

  it('navigates through images with next and previous buttons', async () => {
    render(<Gallery />);

    const openModalButton = screen.getByText(/more photos/i);
    fireEvent.click(openModalButton);

    const nextButton = screen.getByText('❯');
    fireEvent.click(nextButton);
    await waitFor(() => {
      const image = screen.getByAltText(/Hotel - View 2/i);
      expect(image).toBeInTheDocument();
    });

    const prevButton = screen.getByText('❮');
    fireEvent.click(prevButton);
    await waitFor(() => {
      const image = screen.getByAltText(/Hotel - View 1/i);
      expect(image).toBeInTheDocument();
    });
  });

  it('ensures there are at least 5 images to display', () => {
    const providedImages = [
      'http://localhost:5000/images/image1.jpg',
      'http://localhost:5000/images/image2.jpg',
    ];

    render(<Gallery images={providedImages} />);

    const thumbnails = screen.getAllByRole('img');
    expect(thumbnails.length).toBeGreaterThanOrEqual(5); 
  });
});
