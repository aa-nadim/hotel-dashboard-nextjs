'use client';
import Image from "next/image";
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';

const images = [
  { url: '/images/hotel.jpg', title: 'Beautiful lakefront view with private deck' },
  { url: '/images/hotel1.png', title: 'Cozy cottage exterior with charming red door' },
  { url: '/images/hotel2.png', title: 'Spacious living room with panoramic views' },
  { url: '/images/hotel3.png', title: 'Spacious living room with panoramic views' },
  { url: '/images/hotel5.jpeg', title: 'Master bedroom with ensuite' }
];

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleKeyDown = (e) => {
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

  const navigateImage = (direction) => {
    setCurrentImageIndex(prev => {
      if (direction === 'prev' && prev > 0) {
        return prev - 1;
      } else if (direction === 'next' && prev < images.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  return (
    <div className="relative">
      <div className="gallery-container">
        <div className="gallery-grid">
          {/* Main Image */}
          <div className="main-image image-container">
            <Image
              src={images[0].url}
              alt={images[0].title}
              fill
              className="object-cover"
            />
            <div onClick={openModal} className="more-photos mobile-more">
              <i className="fa-regular fa-images">
                <FontAwesomeIcon icon={faImages}  />
              </i> 30+
            </div>
            <div className="dots-indicator"></div>
          </div>

          {/* Thumbnail Column 1 */}
          <div className="thumbnail-column">
            <div className="thumbnail image-container">
              <Image
                src={images[1].url}
                alt={images[1].title}
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="thumbnail image-container">
              <Image
                src={images[2].url}
                alt={images[2].title}
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
          </div>

          {/* Thumbnail Column 2 */}
          <div className="thumbnail-column">
            <div className="thumbnail image-container">
              <Image
                src={images[3].url}
                alt={images[3].title}
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="thumbnail image-container">
              <Image
                src={images[4].url}
                alt={images[4].title}
                width={300}
                height={200}
                className="object-cover"
              />
              <div onClick={openModal} className="more-photos desktop-more">
                <i className="fa-regular fa-images">
                  <FontAwesomeIcon icon={faImages}  />
                </i> 30+
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
}