// CMSA page specific interactions (modal + mobile buttons)
document.addEventListener('DOMContentLoaded', function() {
  const infoButtons = document.querySelectorAll('.info-btn');
  const linkButtons = document.querySelectorAll('.link-btn');
  const tiles = document.querySelectorAll('.info-tile');
  const infoOverlay = document.getElementById('infoOverlay');
  const closeModal = document.getElementById('closeModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');

  function isMobileDevice() { return window.innerWidth <= 768; }

  tiles.forEach(tile => {
    tile.addEventListener('click', function() {
      if (!isMobileDevice()) {
        const linkButton = this.querySelector('.link-btn');
        if (linkButton) {
          const url = linkButton.getAttribute('data-url');
          window.open(url, '_blank', 'noopener,noreferrer');
        }
      }
    });
  });

  infoButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const title = this.getAttribute('data-title');
      const description = this.getAttribute('data-description');
      if (modalTitle && modalDescription && infoOverlay) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        infoOverlay.style.display = 'flex';
      }
    });
  });

  linkButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const url = this.getAttribute('data-url');
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });

  if (closeModal && infoOverlay) {
    closeModal.addEventListener('click', function() { infoOverlay.style.display = 'none'; });
    infoOverlay.addEventListener('click', function(e) { if (e.target === infoOverlay) infoOverlay.style.display = 'none'; });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && infoOverlay.style.display === 'flex') infoOverlay.style.display = 'none'; });
  }
});

