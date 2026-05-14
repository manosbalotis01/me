// Path: me/assets/js/modules/navMobile.js

import { root, mainEl } from "./env.js";

const menuToggle = document.getElementById("menuToggle");
const navBackdrop = document.getElementById("navBackdrop");

export function setNavOpen(open){
  if (!menuToggle || !navBackdrop) return;

  root.classList.toggle("nav-open", open);
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  navBackdrop.hidden = !open;

  // lock the real scroller (main), not body
  if (mainEl) mainEl.style.overflow = open ? "hidden" : "";
}

export function initMobileNav(){
  if (!menuToggle || !navBackdrop) return;

  menuToggle.addEventListener("click", () => {
    const open = root.classList.contains("nav-open");
    setNavOpen(!open);
  });

  navBackdrop.addEventListener("click", () => setNavOpen(false));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setNavOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820 && root.classList.contains("nav-open")) {
      setNavOpen(false);
    }
  }, { passive: true });
}
