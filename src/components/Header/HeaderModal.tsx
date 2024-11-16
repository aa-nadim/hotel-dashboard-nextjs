export default function Header() {
  return (
       <div class="custom-share-overlay" id="shareModal">
        <div class="custom-share-modal">
            <div class="custom-modal-header">
                <div class="modal-title">Share</div>
                <button class="custom-close-btn">✕</button>
            </div>
            <div class="property-preview">
                <img src="./assets/img/hotel.jpg" alt="Property" class="preview-image">
                <div class="preview-info">
                    <h3>Juneau Vacation Home: Stunning View + Beach Access</h3>
                    <p>United States of America</p>
                    <p>9.8/10</p>
                </div>
            </div>
            <div class="share-options">
                <a href="#" class="share-option" data-platform="messages">
                    <div class="share-icon">
                        <img src="./assets/icon/messages.png" alt="Messages">
                    </div>
                    <span class="share-label">Messages</span>
                </a>
                <a href="#" class="share-option" data-platform="whatsapp">
                    <div class="share-icon">
                        <img src="./assets/icon/whatsapp_3536445.png" alt="WhatsApp">
                    </div>
                    <span class="share-label">WhatsApp</span>
                </a>
                <a href="#" class="share-option" data-platform="messenger">
                    <div class="share-icon">
                        <img src="./assets/icon/messenger.png" alt="Messenger">
                    </div>
                    <span class="share-label">Messenger</span>
                </a>
                <a href="#" class="share-option" data-platform="facebook">
                    <div class="share-icon">
                        <img src="./assets/icon/facebook.png" alt="Facebook">
                    </div>
                    <span class="share-label">Facebook</span>
                </a>
                <a href="#" class="share-option" data-platform="whatsapp">
                    <div class="share-icon">
                        <img src="./assets/icon/instagram.png" alt="WhatsApp">
                    </div>
                    <span class="share-label">Instagram</span>
                </a>
                <a href="#" class="share-option" data-platform="x">
                    <div class="share-icon">
                        <img src="./assets/icon/twitter.png" alt="X">
                    </div>
                    <span class="share-label">X</span>
                </a>
            </div>

            <div class="copy-link">
                <span class="link-text">https://example.com/property/juneau-vacation</span>
                <button class="copy-btn">Copy link</button>
            </div>
        </div>
    </div>
  );
}
