// Path: me/assets/js/modules/reveal.js

import { mainEl } from "./env.js";

export function initReveal(){
  const revealEls = document.querySelectorAll(".reveal");
  const sectionEls = document.querySelectorAll("main > section:not(.hero)");
  sectionEls.forEach(s => s.classList.add("reveal-section"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.14, root: mainEl || null });

  revealEls.forEach(el => io.observe(el));
  sectionEls.forEach(el => io.observe(el));
}
