/* ============================================================
   ENERQUBIX AI — main.js
   Shared behaviours across all 7 pages
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. NAV SCROLL — toggle .scrolled on scroll > 40px
     ---------------------------------------------------------- */
  const nav = document.querySelector('.nav');

  function handleNavScroll() {
    if (!nav) return;
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // run once on load

  /* ----------------------------------------------------------
     2. SCROLL REVEAL — IntersectionObserver on .reveal
     ---------------------------------------------------------- */
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ----------------------------------------------------------
     3. ACTIVE NAV LINK — highlight current page
     ---------------------------------------------------------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPage = href.split('/').pop();
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
    // Handle homepage: both index.html and '' / '/'
    if (
      (currentPage === 'index.html' || currentPage === '') &&
      (linkPage === 'index.html' || linkPage === '')
    ) {
      link.classList.add('active');
    }
  });

  /* ----------------------------------------------------------
     4. MOBILE NAV — hamburger toggle
     ---------------------------------------------------------- */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');

  function openMobileNav() {
    hamburger.classList.add('open');
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      if (mobileNav.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileNav);
    });

    // Close on outside click (clicking the overlay backdrop)
    mobileNav.addEventListener('click', function (e) {
      if (e.target === mobileNav) closeMobileNav();
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMobileNav();
    });
  }

  /* ----------------------------------------------------------
     5. SMOOTH SCROLL — anchor links with 80px nav offset
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ----------------------------------------------------------
     6. STAT COUNTER ANIMATION (homepage only)
        Counts up numbers when .hero-stat-num enters viewport
     ---------------------------------------------------------- */
  const statEls = document.querySelectorAll('[data-count]');

  if (statEls.length > 0) {
    const counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const prefix = el.getAttribute('data-prefix') || '';
          const duration = 1500;
          const start = performance.now();

          function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);

            // Format large numbers
            let display;
            if (target >= 1000) {
              display = (current / 1000).toFixed(current >= target ? 0 : 0) + 'K';
              if (current >= target) display = Math.round(target / 1000) + 'K';
            } else {
              display = current.toString();
            }

            el.textContent = prefix + display + suffix;

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              el.textContent = el.getAttribute('data-final') || prefix + display + suffix;
            }
          }

          requestAnimationFrame(tick);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    statEls.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

})();
