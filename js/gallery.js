// gallery.js — Simple lightbox modal

(function () {
  const lightbox = document.querySelector('.lightbox-overlay');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (!lightbox) return;

  document.querySelectorAll('.gallery-tile').forEach(function (tile) {
    tile.addEventListener('click', function () {
      const img = tile.querySelector('img');
      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      }
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (lightboxClose) lightboxClose.focus();
    });

    // Keyboard support
    tile.setAttribute('tabindex', '0');
    tile.setAttribute('role', 'button');
    tile.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        tile.click();
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
})();
