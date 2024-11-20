// src/components/Gallery/Gallery.tsx
'use client';
import Image from "next/image";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';

interface GalleryProps {
  images?: string[]; 
  title?: string;    
}

const defaultImages = [
  { url: '/images/hotel.jpg', title: 'Beautiful lakefront view with private deck' },
  { url: '/images/hotel1.png', title: 'Cozy cottage exterior with charming red door' },
  { url: '/images/hotel2.png', title: 'Spacious living room with panoramic views' },
  { url: '/images/hotel3.png', title: 'Spacious living room with panoramic views' },
  { url: '/images/hotel5.jpeg', title: 'Master bedroom with ensuite' }
];

const Gallery: React.FC<GalleryProps> = ({ images: providedImages, title = "Hotel" }) => {
  // console.log("Gallery Images:", providedImages);

  const processImages = () => {
    const baseUrl = 'http://localhost:5000';
    const imagesToProcess = providedImages?.length ? providedImages : defaultImages.map(img => img.url);
  
    return imagesToProcess.map((image, index) => {
      const url = providedImages?.length
        ? `${baseUrl}${image}` 
        : image || defaultImages[index % defaultImages.length].url; 
      return {
        url: url,
        title: `${title} - View ${index + 1}`
      };
    });
  };
  


  const images = processImages();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isModalOpen) return;

    switch (e.key) {
      case 'ArrowLeft':
        if (currentImageIndex > 0) {
          setCurrentImageIndex(prev => prev - 1);
        }
        break;
      case 'ArrowRight':
        if (currentImageIndex < images.length - 1) {
          setCurrentImageIndex(prev => prev + 1);
        }
        break;
      case 'Escape':
        setIsModalOpen(false);
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentImageIndex]);

  const openModal = () => {
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    setCurrentImageIndex(prev => {
      if (direction === 'prev' && prev > 0) {
        return prev - 1;
      } else if (direction === 'next' && prev < images.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const ensureMinimumImages = (imgs: typeof images) => {
    if (imgs.length < 5) {
      const lastImage = imgs[imgs.length - 1];
      return [...imgs, ...Array(5 - imgs.length).fill(lastImage)];
    }
    return imgs;
  };

  const displayImages = ensureMinimumImages(images);


  return (
    <div className="relative">
      <div className="gallery-container">
        <div className="gallery-grid">
         
          <div className="main-image image-container">
            <Image
              src={displayImages[0].url}
              alt={displayImages[0].title}
              fill
              className="object-cover"
            />
            <div onClick={openModal} className="more-photos mobile-more">
              <FontAwesomeIcon icon={faImages} /> {images.length}+
            </div>
            <div className="dots-indicator"></div>
          </div>

       
          <div className="thumbnail-column">
            <div className="thumbnail image-container">
              <Image
                src={displayImages[1].url}
                alt={displayImages[1].title}
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="thumbnail image-container">
              <Image
                src={displayImages[2].url}
                alt={displayImages[2].title}
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
          </div>

      
          <div className="thumbnail-column">
            <div className="thumbnail image-container">
              <Image
                src={displayImages[3].url}
                alt={displayImages[3].title}
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="thumbnail image-container">
              <Image
                src={displayImages[4].url}
                alt={displayImages[4].title}
                width={300}
                height={200}
                className="object-cover"
              />
              <div onClick={openModal} className="more-photos desktop-more">
                <FontAwesomeIcon icon={faImages} /> {images.length}+
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 left-4 text-white text-4xl hover:text-gray-300 z-50"
          >
            ×
          </button>

          <div className="relative w-full max-w-4xl mx-4">
            <div className="relative aspect-video">
              <Image
                src={images[currentImageIndex].url}
                alt={images[currentImageIndex].title}
                fill
                className="object-contain"
              />
            </div>

            {currentImageIndex > 0 && (
              <button
                onClick={() => navigateImage('prev')}
                className="nav-btn prev"
              >
                ❮
              </button>
            )}

            {currentImageIndex < images.length - 1 && (
              <button
                onClick={() => navigateImage('next')}
                className="nav-btn next"
              >
                ❯
              </button>
            )}

            <div className="gallery-info">
              <h3 className="image-title">
                {images[currentImageIndex].title}
              </h3>
              <p className="image-count">
                {currentImageIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
