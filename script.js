// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal, progressively enhanced — content is fully visible without JS
// or if prefers-reduced-motion is set (see CSS fallback).
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Friendly console nudge for placeholder links (Telegram / LinkedIn)
document.querySelectorAll('[data-placeholder]').forEach((el) => {
  el.addEventListener('click', (e) => {
    if (el.getAttribute('href') === '#') {
      e.preventDefault();
      console.warn(`Spectra site: "${el.dataset.placeholder}" link is still a placeholder — update it in index.html.`);
    }
  });
});
