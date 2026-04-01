// nav.js — Mobile hamburger menu

(function () {
  const toggle = document.querySelector('.nav-toggle');
  const overlay = document.querySelector('.nav-overlay');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn = document.querySelector('.mobile-nav-close');

  if (!toggle || !overlay || !mobileNav) return;

  function openMenu() {
    overlay.classList.add('open');
    mobileNav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    // Trap focus in mobile nav
    const firstFocusable = mobileNav.querySelector('button, a');
    if (firstFocusable) firstFocusable.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('open');
    mobileNav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMenu();
    }
  });
})();
