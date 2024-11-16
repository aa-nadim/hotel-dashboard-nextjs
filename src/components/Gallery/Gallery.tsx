import Image from "next/image";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {/* Main Image */}
        <div className="main-image image-container">
          <Image
            src="/images/hotel.jpg" // Updated path
            alt="Lakefront view with deck and red chair"
            layout="fill" // Use for responsive images
            objectFit="cover"
          />
          <div className="more-photos mobile-more">
            <i className="fa-regular fa-images"></i> 30+
          </div>
          <div className="dots-indicator"></div> {/* 3 dots indicator */}
        </div>

        {/* Thumbnail Column 1 */}
        <div className="thumbnail-column">
          <div className="thumbnail image-container">
            <Image
              src="/images/hotel1.png" // Updated path
              alt="Cottage exterior"
              width={300} // Example width
              height={200} // Example height
            />
          </div>
          <div className="thumbnail image-container">
            <Image
              src="/images/hotel2.png" // Updated path
              alt="Kitchen view"
              width={300}
              height={200}
            />
          </div>
        </div>

        {/* Thumbnail Column 2 */}
        <div className="thumbnail-column">
          <div className="thumbnail image-container">
            <Image
              src="/images/hotel3.png" // Updated path
              alt="Living room interior"
              width={300}
              height={200}
            />
          </div>
          <div className="thumbnail image-container">
            <Image
              src="/images/hotel5.jpeg" // Updated path
              alt="Bedroom"
              width={300}
              height={200}
            />
            <div className="more-photos desktop-more">
              <i className="fa-regular fa-images"></i> 30+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
