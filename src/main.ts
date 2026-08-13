import { navItems, programsData, carouselSlidesData, teamMembersData, siteLinks, SiteLinkKey } from './data';

function renderNav(containerId: string): void {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = navItems
    .map(item => `<a href="${item.href}">${item.label}</a>`)
    .join('');
}

function renderPrograms(): void {
  const container = document.getElementById('programs-grid');
  if (!container) return;

  container.innerHTML = programsData
    .map(prog => `
      <article class="card reveal">
        <h3>${prog.title}</h3>
        <p>${prog.description}</p>
      </article>
    `).join('');
}

function renderGallery(): void {
  const track = document.getElementById('carousel-track');
  const indicators = document.getElementById('carousel-indicators');
  if (!track || !indicators) return;

  const total = carouselSlidesData.length;

  track.innerHTML = carouselSlidesData
    .map((slide) => `
      <article class="carousel-slide" aria-roledescription="slide">
        <div class="carousel-image-wrapper">
          <img src="${slide.imageSrc}" 
          alt="${slide.title}" 
          loading="lazy">
        </div>
        <div class="carousel-caption">
          <h3>${slide.title}</h3>
          <p>${slide.description}</p>
        </div>
      </article>
    `).join('');
}

function renderTeam(): void {
  const container = document.getElementById('team-grid');
  if (!container) return;

  container.innerHTML = teamMembersData
    .map(member => `
      <article class="card team-card reveal">
        <div class="team-avatar" aria-hidden="true">${member.initials}</div>
        <h3>${member.name}</h3>
        <p class="team-role">${member.role}</p>
        <p>${member.bio}</p>
      </article>
    `).join('');
}

function initFooterYear(): void {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
}

let currentSlideIndex = 0;
let autoPlayTimer: number | null = null;
const AUTOPLAY_INTERVAL = 3000; // 3 seconds per slide

function initCarousel(): void {
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const indicatorsContainer = document.getElementById('carousel-indicators');
  const container = document.querySelector('.carousel-container');

  if (!track || !prevBtn || !nextBtn || !indicatorsContainer || !container) return;

  const totalSlides = carouselSlidesData.length;

  const goToSlide = (index: number) => {
    currentSlideIndex = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    const indicators = indicatorsContainer.querySelectorAll('.indicator');
    indicators.forEach((indicator, idx) => {
      const isActive = idx === currentSlideIndex;
      indicator.classList.toggle('active', isActive);
      indicator.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayTimer = window.setInterval(() => {
      goToSlide(currentSlideIndex + 1);
    }, AUTOPLAY_INTERVAL);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimer !== null) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  };

  // Restarts auto-play on manual click so timer resets cleanly
  const handleUserInteraction = (action: () => void) => {
    action();
    startAutoPlay();
  };

  prevBtn.addEventListener('click', () => handleUserInteraction(() => goToSlide(currentSlideIndex - 1)));
  nextBtn.addEventListener('click', () => handleUserInteraction(() => goToSlide(currentSlideIndex + 1)));

  indicatorsContainer.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('indicator')) {
      const index = parseInt(target.getAttribute('data-index') || '0', 10);
      handleUserInteraction(() => goToSlide(index));
    }
  });

  // Pause slideshow when user hovers or focuses inside the carousel
  container.addEventListener('mouseenter', stopAutoPlay);
  container.addEventListener('mouseleave', startAutoPlay);
  container.addEventListener('focusin', stopAutoPlay);
  container.addEventListener('focusout', startAutoPlay);

  // Kick off automatic progression
  startAutoPlay();
}

function bindSiteLinks(): void {
  // Bind anchor tags (<a>)
  document.querySelectorAll<HTMLAnchorElement>('a[data-link]').forEach((anchor) => {
    const key = anchor.dataset.link as SiteLinkKey;
    if (key && siteLinks[key]) {
      anchor.href = siteLinks[key];
      
      // Auto-add secure external tab behavior if it's a full URL
      if (siteLinks[key].startsWith('http')) {
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
      }
    }
  });

  // Bind iframe embeds
  document.querySelectorAll<HTMLIFrameElement>('iframe[data-link]').forEach((iframe) => {
    const key = iframe.dataset.link as SiteLinkKey;
    if (key && siteLinks[key]) {
      iframe.src = siteLinks[key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  bindSiteLinks();

  renderNav('primary-nav');
  renderNav('footer-nav');
  renderPrograms();
  renderGallery();
  renderTeam();
  initFooterYear();
  initCarousel();
});