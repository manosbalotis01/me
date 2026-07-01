// Path: me/assets/js/main.js

import { initLang } from "./modules/i18n.js";
import { initMobileNav } from "./modules/navMobile.js";
import { initSmoothAnchors } from "./modules/smoothAnchors.js";
import { initReveal } from "./modules/reveal.js";
import { initScrollEffects } from "./modules/scrollEffects.js";
import { initContactForm } from "./modules/contactForm.js";
import { initIosOverscrollFix } from "./modules/iosOverscroll.js";
import { initBrandRotator } from "./modules/brandRotator.js";

// Order matters a bit:
initLang();

initMobileNav();
initSmoothAnchors();

initReveal();
//initWorkStepper();

initScrollEffects();
initContactForm();
initIosOverscrollFix();
initBrandRotator();

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();