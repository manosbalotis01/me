// Path: me/assets/js/modules/reveal.js

import { mainEl } from "./env.js";

export function initReveal(){
  const revealEls = document.querySelectorAll(".reveal");
  const sectionEls = document.querySelectorAll("main > section:not(.hero)");
  sectionEls.forEach(s => s.classList.add("reveal-section"));

  const allEls = [...revealEls, ...sectionEls];

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.14, root: mainEl || null });

  allEls.forEach(el => io.observe(el));

  // Safety net: some browser/root combinations fail to fire
  // IntersectionObserver reliably (e.g. WebKit quirks with custom
  // scroll roots). Never let content stay permanently hidden.
  setTimeout(() => {
    allEls.forEach(el => el.classList.add("is-in"));
    io.disconnect();
  }, 2500);
}
