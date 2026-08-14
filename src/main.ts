import { navItems, programsData, carouselSlidesData, teamMembersData, siteLinks, SiteLinkKey, getInvolvedData } from './data';

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
  if (!carouselSlidesData || carouselSlidesData.length === 0) return;

  // 1. Render Slides
  track.innerHTML = carouselSlidesData
    .map(
      (slide) => `
      <article class="carousel-slide">
        <div class="carousel-image-wrapper">
          <img src="${slide.imageSrc}" alt="${slide.title}" loading="lazy">
        </div>
        <div class="carousel-caption">
          <h3>${slide.title}</h3>
          <p>${slide.description}</p>
        </div>
      </article>
    `
    )
    .join('');

  // 2. Render Indicator Dots
  indicators.innerHTML = carouselSlidesData
    .map(
      (_, idx) => `
      <button 
        class="indicator ${idx === 0 ? 'active' : ''}" 
        data-index="${idx}" 
        aria-label="Go to slide ${idx + 1}"
        aria-selected="${idx === 0 ? 'true' : 'false'}"
        role="tab"
      ></button>
    `
    )
    .join('');
}

export function renderTeam(): void {
  const container = document.getElementById('team-grid');
  if (!container) return;

  if (!teamMembersData || teamMembersData.length === 0) {
    container.innerHTML = '<p class="text-muted">Team details coming soon.</p>';
    return;
  }

  container.innerHTML = teamMembersData
    .map(
      (member) => `
      <article class="card team-card reveal">
        <a 
          href="${member.linkedin}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="team-linkedin-top" 
          aria-label="${member.name}'s LinkedIn Profile"
        >
          <svg class="icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.76c1.4-2.59 7-2.78 7 2.48V19z"/>
          </svg>
        </a>

        <div class="team-avatar-wrapper">
          <img 
            src="${member.imageSrc}" 
            alt="${member.name}" 
            loading="lazy" 
          />
        </div>
        
        <div class="team-info">
          <h3>${member.name}</h3>
          <p class="team-role">${member.role}</p>
          <p class="team-bio">${member.bio}</p>
        </div>
      </article>
    `
    )
    .join('');
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

export function renderGetInvolved(): void {
  const container = document.getElementById('get-involved-grid');
  if (!container) return;

  if (!getInvolvedData || getInvolvedData.length === 0) {
    container.innerHTML = '<p class="text-muted">Opportunities coming soon.</p>';
    return;
  }

  container.innerHTML = getInvolvedData
    .map(
      (item) => `
      <div class="get-involved-card reveal">
        <div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </div>
    `
    )
    .join('');
}

// Call inside your DOMContentLoaded or main initialization
document.addEventListener('DOMContentLoaded', () => {
  renderGetInvolved();
});

document.addEventListener('DOMContentLoaded', () => {
  bindSiteLinks();

  renderNav('primary-nav');
  renderNav('footer-nav');
  renderPrograms();
  renderGallery();
  renderTeam();
  renderGetInvolved();
  initFooterYear();
  initCarousel();
});