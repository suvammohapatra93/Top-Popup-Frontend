let popup = document.getElementById("popup");
let overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

function openPopup() {
  popup.classList.add("open-popup");
  overlay.classList.add("active");
}

function closePopup() {
  popup.classList.remove("open-popup");
  overlay.classList.remove("active");
}

// Close popup after 5 seconds automatically
function autoClosePopup(delay = 5000) {
  setTimeout(() => {
    closePopup();
  }, delay);
}

// Optional: Automatically close the popup after 5 seconds
// openPopup(); autoClosePopup(); // Uncomment to enable auto-close
