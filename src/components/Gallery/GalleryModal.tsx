import Image from "next/image";

export default function GalleryModal() {
  return (
      <div class="modal" id="gallery-modal">
        <span class="close">&times;</span>
        <div class="modal-content">
            <img id="modal-img" src="./assetsimg/hotel.jpg" alt="Gallery image">
            <button class="nav-btn prev">&#10094;</button>
            <button class="nav-btn next">&#10095;</button>
            <div class="gallery-info">
                <div class="image-title">Beautiful beachfront view</div>
                <div class="image-count">1/31</div>
            </div>
        </div>
     </div>
  );
}
