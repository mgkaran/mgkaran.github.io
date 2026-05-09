/* ============================================================
   THEME TOGGLE
   ============================================================ */
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('.theme-icon');

const savedTheme = localStorage.getItem('portfolio-theme') || 'light-theme';
body.classList.add(savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const isDark = body.classList.contains('dark-theme');
  body.classList.remove('light-theme', 'dark-theme');
  const next = isDark ? 'light-theme' : 'dark-theme';
  body.classList.add(next);
  localStorage.setItem('portfolio-theme', next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  themeIcon.innerHTML = theme === 'dark-theme' ? '&#9728;' : '&#9790;';
}

/* ============================================================
   DROPDOWN NAVIGATION MENU
   ============================================================ */
const menuBtn     = document.getElementById('menuBtn');
const navDropdown = document.getElementById('navDropdown');

function openMenu() {
  menuBtn.classList.add('open');
  navDropdown.classList.add('open');
  menuBtn.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  menuBtn.classList.remove('open');
  navDropdown.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  navDropdown.classList.contains('open') ? closeMenu() : openMenu();
});

navDropdown.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
  if (!menuBtn.closest('.nav-menu-wrap').contains(e.target)) closeMenu();
});

/* ============================================================
   NAVBAR SCROLL STATE
   ============================================================ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  highlightActiveSection();
});

/* ============================================================
   ACTIVE NAV LINK HIGHLIGHT
   ============================================================ */
function highlightActiveSection() {
  const scrollY = window.scrollY + 100;
  const links = document.querySelectorAll('.nav-dropdown a[href^="#"]');

  links.forEach(link => {
    const id = link.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.offsetTop;
    const height = el.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      document.querySelectorAll('.nav-dropdown a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

/* ============================================================
   SCROLL FADE-IN ANIMATION
   ============================================================ */
const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

fadeElements.forEach(el => observer.observe(el));

/* ============================================================
   SMOOTH SCROLL OFFSET (for fixed navbar)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ============================================================
   CV DOWNLOAD MODAL
   ============================================================ */
const downloadCVBtn   = document.getElementById('downloadCVBtn');
const cvModalOverlay  = document.getElementById('cvModalOverlay');
const cvModalClose    = document.getElementById('cvModalClose');

function openCVModal() {
  cvModalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  cvModalClose.focus();
}

function closeCVModal() {
  cvModalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  downloadCVBtn.focus();
}

downloadCVBtn.addEventListener('click', openCVModal);
cvModalClose.addEventListener('click', closeCVModal);

cvModalOverlay.addEventListener('click', (e) => {
  if (e.target === cvModalOverlay) closeCVModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && cvModalOverlay.classList.contains('open')) closeCVModal();
});

/* ============================================================
   LANGUAGE TOGGLE  (DE primary, EN secondary)
   ============================================================ */
const langToggleBtn = document.getElementById('langToggle');
const savedLang     = localStorage.getItem('portfolio-lang') || 'de';
applyLanguage(savedLang, false);

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  /* 1. Pill toggle */
  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  /* 2. Plain text nodes */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t[el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });

  /* 3. HTML nodes (headings with inner <span>, rich text) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t[el.dataset.i18nHtml];
    if (val !== undefined) el.innerHTML = val;
  });

  /* 4. Input / textarea placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t[el.dataset.i18nPlaceholder];
    if (val !== undefined) el.placeholder = val;
  });

  /* 5. html lang attribute + persist */
  document.documentElement.lang = lang;
  localStorage.setItem('portfolio-lang', lang);
}

langToggleBtn.addEventListener('click', () => {
  const current = localStorage.getItem('portfolio-lang') || 'de';
  applyLanguage(current === 'de' ? 'en' : 'de', true);
});

/* ============================================================
   ONBOARDING TOUR  (fires once on first visit)
   ============================================================ */
const tourOverlay    = document.getElementById('tourOverlay');
const tourSpotlight  = document.getElementById('tourSpotlight');
const tourTooltip    = document.getElementById('tourTooltip');
const tourTitleEl    = document.getElementById('tourTitle');
const tourDescEl     = document.getElementById('tourDesc');
const tourStepNumEl  = document.getElementById('tourStepNum');
const tourIconWrapEl = document.getElementById('tourIconWrap');
const tourOkBtn      = document.getElementById('tourOk');
const tourSkipBtn    = document.getElementById('tourSkip');

const tourSteps = [
  {
    targetId : 'langToggle',
    icon     : '🌐',
    title    : 'Sprache wechseln / Switch Language',
    desc     : 'Wechsle jederzeit zwischen Deutsch und English — die Website ist standardmäßig auf Deutsch eingestellt.',
  },
  {
    targetId : 'linkedinBtn',
    icon     : '💼',
    title    : 'Connect on LinkedIn',
    desc     : 'Let\'s connect on LinkedIn! Feel free to reach out — I\'m always open to new professional connections.',
  },
  {
    targetId : 'themeToggle',
    icon     : '🎨',
    title    : 'Light / Dark Mode',
    desc     : 'Toggle between light and dark mode anytime for a more comfortable browsing experience.',
  },
];

let activeTourStep = 0;

function positionTour(targetEl) {
  const rect = targetEl.getBoundingClientRect();
  const pad  = 9;

  tourSpotlight.style.top    = (rect.top  - pad) + 'px';
  tourSpotlight.style.left   = (rect.left - pad) + 'px';
  tourSpotlight.style.width  = (rect.width  + pad * 2) + 'px';
  tourSpotlight.style.height = (rect.height + pad * 2) + 'px';

  const ttW   = 300;
  const ttTop = rect.bottom + 18;
  const ttLeft = Math.min(
    Math.max(12, rect.left + rect.width / 2 - ttW / 2),
    window.innerWidth - ttW - 12
  );

  tourTooltip.style.top  = ttTop + 'px';
  tourTooltip.style.left = ttLeft + 'px';

  // Arrow points to the spotlight center
  const arrowLeft = rect.left + rect.width / 2 - ttLeft;
  tourTooltip.style.setProperty('--arrow-left', arrowLeft + 'px');
}

function showTourStep(step) {
  const s      = tourSteps[step];
  const target = document.getElementById(s.targetId);
  if (!target) { endTour(); return; }

  tourIconWrapEl.textContent = s.icon;
  tourTitleEl.textContent    = s.title;
  tourDescEl.textContent     = s.desc;
  tourStepNumEl.textContent  = step + 1;

  document.querySelectorAll('.tour-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === step);
  });

  tourOkBtn.textContent = step === tourSteps.length - 1 ? "Let's go! 🚀" : 'Got it!';

  if (step === 0) {
    // Skip transition on first step so spotlight snaps into place instantly
    tourSpotlight.style.transition = 'none';
    tourTooltip.style.transition   = 'none';
    positionTour(target);
    requestAnimationFrame(() => {
      tourSpotlight.style.transition = '';
      tourTooltip.style.transition   = '';
    });
  } else {
    positionTour(target);
  }
}

function startTour() {
  activeTourStep = 0;
  tourOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  showTourStep(0);
}

function endTour() {
  tourOverlay.classList.remove('open');
  document.body.style.overflow = '';
  localStorage.setItem('portfolio-tour-done', '1');
}

tourOkBtn.addEventListener('click', () => {
  activeTourStep++;
  if (activeTourStep >= tourSteps.length) endTour();
  else showTourStep(activeTourStep);
});

tourSkipBtn.addEventListener('click', endTour);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && tourOverlay.classList.contains('open')) endTour();
});

if (!localStorage.getItem('portfolio-tour-done')) {
  setTimeout(startTour, 1400);
}

/* ============================================================
   STATS COUNTER ANIMATION
   ============================================================ */
const statCounters = document.querySelectorAll('.stat-count');

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

statCounters.forEach(el => statsObserver.observe(el));

function animateCount(el) {
  const target = parseInt(el.dataset.target, 10);
  const steps  = 55;
  const delay  = 1600 / steps;
  let current  = 0;
  const inc    = target / steps;
  const timer  = setInterval(() => {
    current = Math.min(current + inc, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, delay);
}

/* ============================================================
   CONTACT FORM  (Web3Forms — get free key at web3forms.com)
   ============================================================ */
const contactForm   = document.getElementById('contactForm');
const formSubmitBtn = document.getElementById('formSubmitBtn');
const formSuccess   = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const origHTML = formSubmitBtn.innerHTML;
    formSubmitBtn.disabled = true;
    formSubmitBtn.innerHTML = '<span>Sending…</span>';

    try {
      const res  = await fetch('https://api.web3forms.com/submit', {
        method : 'POST',
        body   : new FormData(contactForm)
      });
      const data = await res.json();

      if (data.success) {
        contactForm.reset();
        formSuccess.classList.add('visible');
        setTimeout(() => formSuccess.classList.remove('visible'), 7000);
      } else {
        alert('Something went wrong. Please email me directly at mgkaran2001@gmail.com');
      }
    } catch {
      alert('Network error. Please email me directly at mgkaran2001@gmail.com');
    } finally {
      formSubmitBtn.disabled = false;
      formSubmitBtn.innerHTML = origHTML;
    }
  });
}
