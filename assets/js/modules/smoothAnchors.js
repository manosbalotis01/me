// Path: me/assets/js/modules/smoothAnchors.js

import { root, mainEl, reduceMotion, scrollToSection } from "./env.js";
import { setNavOpen } from "./navMobile.js";

/**
 * Ensures correct scroll position on reload:
 * - if URL has hash, scroll to that section
 * - otherwise, reset to top
 * This fixes underline/progress/parallax being "wrong" after reload.
 */
function bootScrollPosition(){
  if (!mainEl) return;

  // Disable browser scroll restoration for this SPA-like scroll container
  try { history.scrollRestoration = "manual"; } catch(_) {}

  const hash = (location.hash || "").trim();
  const target = hash ? document.querySelector(hash) : null;

  // Run after layout settles (1-2 frames)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (target) {
        scrollToSection(target);
        if (hash === "#work") import('./workStepper.js').then(m => m.notifyJumpToWork()).catch(() => {});
      } else {
        mainEl.scrollTo({ top: 0, behavior: "auto" });
      }
    });
  });
}

function scrollToTop(){
  if (!mainEl) return;
  mainEl.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
}

export function initSmoothAnchors(){
  bootScrollPosition();

  // Logo → scroll to top
  const brandLink = document.querySelector('a.brand[href="#top"]');
  if (brandLink) {
    brandLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (root.classList.contains("nav-open")) setNavOpen(false);
      history.pushState(null, "", location.pathname);
      scrollToTop();
    });
  }

  // Back-to-top button
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => scrollToTop());
  }

  document.querySelectorAll('a[href^="#"][data-nav]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();

      if (root.classList.contains("nav-open")) setNavOpen(false);

      // keep URL in sync
      history.pushState(null, "", id);

      scrollToSection(target);

      if (id === "#work") import('./workStepper.js').then(m => m.notifyJumpToWork()).catch(() => {});
    });
  });
}