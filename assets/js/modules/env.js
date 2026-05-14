// Path: me/assets/js/modules/env.js

export const root = document.documentElement;
export const mainEl = document.querySelector("main");
export const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }
export function lerp(a, b, t){ return a + (b - a) * t; }

export function qs(rootEl, sel){ return rootEl ? rootEl.querySelector(sel) : null; }
export function qsa(rootEl, sel){ return rootEl ? Array.from(rootEl.querySelectorAll(sel)) : []; }

export const getScrollTop = () => (mainEl ? mainEl.scrollTop : 0);
export const getMaxScroll = () => (mainEl ? (mainEl.scrollHeight - mainEl.clientHeight) : 1);

export function scrollToSection(target){
  if (!target || !mainEl) return;
  const headerOffset = 58;
  const targetTopInDoc = target.offsetTop;
  const top = Math.max(0, targetTopInDoc - headerOffset);
  mainEl.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
}
