// theme.js — Dark/light toggle with localStorage persistence + scroll header shadow

(function () {
  const STORAGE_KEY = 've5nn-theme';
  const html = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');

  function getPreferred() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (toggle) {
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      // Swap icon visibility
      const sunIcon = toggle.querySelector('.icon-sun');
      const moonIcon = toggle.querySelector('.icon-moon');
      if (sunIcon) sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
      if (moonIcon) moonIcon.style.display = theme === 'dark' ? 'none' : 'block';
    }
  }

  function toggleTheme() {
    const current = html.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  // Apply on load
  applyTheme(getPreferred());

  if (toggle) {
    toggle.addEventListener('click', toggleTheme);
  }

  // Update copyright year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll-based header shadow
  const header = document.querySelector('header[role="banner"]');
  if (header) {
    function updateHeaderScroll() {
      if (window.scrollY > 8) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    updateHeaderScroll();
    window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  }
})();
