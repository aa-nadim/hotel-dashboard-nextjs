export default function NavModal() {
  return (
       <div class="nav-modal-overlay" id="nav-modal-overlay">
        <div class="nav-modal">
            <button class="close-btn" id="close-btn">✕</button>
            <h2>Display settings</h2>
            <div class="warning-message">
                <h3><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Changing your region could change your
                    rewards program</h3>
                <p>To stay with your current rewards program, keep your region the same. One Key is currently only
                    available in select regions.</p>
            </div>

            <label for="region-select">Region</label>
            <div id="region-select-container"></div> 

            <label for="currency-input">Currency</label>
            <input type="text" id="currency-input" value="EUR" disabled>

            <button class="save-btn" id="save-btn">Save</button>
        </div>
    </div>
  );
}