'use client';
import Image from 'next/image';
import Link from 'next/link'; 
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isSaved, setIsSaved] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  
  // Load saved state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('propertyIsSaved');
    setIsSaved(savedState === 'true');
  }, []);

  const toggleSave = () => {
    // console.log('I am here..................');
    const newState = !isSaved;
    setIsSaved(newState);
    localStorage.setItem('propertyIsSaved', newState.toString());
  };

  const toggleShareModal = () => {
    console.log('I am here..................');
    setIsShareModalOpen(!isShareModalOpen);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://example.com/property/juneau-vacation');
    alert('Link copied to clipboard!');
  };

  return (
    <header className="sub-header">
      <div className="header-container">
      <Link href="/" className="back-link">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="desktop">See all properties</span>
        </Link>
        <div className="action-buttons">
          <button className="btn-secondary share-btn" onClick={toggleShareModal}>
            <i className="fa fa-share-alt">
              <FontAwesomeIcon icon={faShareAlt}  />
            </i>
            <span className="desktop-only">Share</span>
          </button>

          {/* Share Modal */}
          {isShareModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            {/* Modal Content */}
            <div 
              className="bg-white rounded-xl max-w-md w-full p-6 space-y-6"
              onClick={e => e.stopPropagation()}
            >
                <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Share</h3>
                <button className="custom-close-btn" onClick={toggleShareModal}>✕</button>
              </div>
                <div className="property-preview">
                  <Image
                    src="/images/hotel.jpg"
                    alt="Property"
                    className="preview-image"
                    width={100}
                    height={100}
                  />
                  <div className="preview-info">
                    <h3>Juneau Vacation Home: Stunning View + Beach Access</h3>
                    <p>United States of America</p>
                    <p>9.8/10</p>
                  </div>
                </div>
                <div className="share-options">
                  <a href="#" className="share-option" data-platform="messages">
                    <div className="share-icon">
                      <Image src="/images/messages.png" alt="Messages" width={24} height={24} />
                    </div>
                    <span className="share-label">Messages</span>
                  </a>
                  <a href="#" className="share-option" data-platform="whatsapp">
                    <div className="share-icon">
                      <Image src="/images/whatsapp_3536445.png" alt="WhatsApp" width={24} height={24} />
                    </div>
                    <span className="share-label">WhatsApp</span>
                  </a>
                  <a href="#" className="share-option" data-platform="messenger">
                    <div className="share-icon">
                      <Image src="/images/messenger.png" alt="Messenger" width={24} height={24} />
                    </div>
                    <span className="share-label">Messenger</span>
                  </a>
                  <a href="#" className="share-option" data-platform="facebook">
                    <div className="share-icon">
                      <Image src="/images/facebook.png" alt="Facebook" width={24} height={24} />
                    </div>
                    <span className="share-label">Facebook</span>
                  </a>
                  <a href="#" className="share-option" data-platform="instagram">
                    <div className="share-icon">
                      <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} />
                    </div>
                    <span className="share-label">Instagram</span>
                  </a>
                  <a href="#" className="share-option" data-platform="x">
                    <div className="share-icon">
                      <Image src="/images/twitter.png" alt="X" width={24} height={24} />
                    </div>
                    <span className="share-label">X</span>
                  </a>
                </div>
                <div className="copy-link">
                  <span className="link-text">https://example.com/property/juneau-vacation</span>
                  <button className="copy-btn" onClick={handleCopyLink}>
                    Copy link
                  </button>
                </div>
              </div>
            </div>
          )}

          {isSaved ? (
            <button 
              className="save active" 
              aria-label="Save property"
              onClick={toggleSave}
            >
              <svg 
                className="heart-icon" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="#ff0000" 
                stroke="#ff0000" 
                strokeWidth="0"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span className="desktop-only">Saved</span>
            </button>
          ) : (
            <button 
              className="save" 
              aria-label="Save property"
              onClick={toggleSave}
            >
              <svg 
                className="heart-icon" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span className="desktop-only">Save</span>
            </button>
          )}

        </div>
      </div>
    </header>
  );
}
