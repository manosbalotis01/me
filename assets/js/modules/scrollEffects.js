// Path: me/assets/js/modules/scrollEffects.js

import { root, mainEl, clamp, lerp, getScrollTop, getMaxScroll } from "./env.js";

export function initScrollEffects(){
  if (!mainEl) return;

  // =====================================================
  // Progress + parallax floats
  // IMPORTANT:
  // Disable parallax on section headers (Services/Approach/Contact),
  // otherwise the title moves up while the list stays -> "fake gap".
  // =====================================================

  const allFloatEls = Array.from(document.querySelectorAll(".scroll-float"));

  const floatEls = allFloatEls.filter(el => {
    // keep hero floats
    if (el.closest(".hero")) return true;

    // keep work floats, EXCEPT the section head
    if (el.closest("#work")) return !el.closest("#work .section-head");

    // disable floats inside section headers everywhere else
    if (el.closest(".section-head")) return false;

    return true;
  });

  const blocks = Array.from(document.querySelectorAll(".block.scroll-float"));
  const progressBar = document.getElementById("progressBar");

  const floatState = floatEls.map(el => ({
    el,
    speed: parseFloat(el.dataset.speed || "0.10"),
    y: 0,
    targetY: 0,
  }));

  const blockState = blocks.map(el => ({
    el,
    speed: parseFloat(el.dataset.speed || "0.20"),
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  }));

  function updateTargets(){
    const scrollTop = getScrollTop();

    root.style.setProperty("--parallax-y", (scrollTop * 0.12).toFixed(2) + "px");

    const maxScroll = Math.max(1, getMaxScroll());
    const p = clamp(scrollTop / maxScroll, 0, 1);
    if (progressBar) progressBar.style.width = (p * 100).toFixed(2) + "%";

    floatState.forEach(s => {
      s.targetY = scrollTop * s.speed;
    });

    blockState.forEach(s => {
      const base = scrollTop * s.speed;
      s.targetY = base;
      s.targetX = Math.sin((scrollTop / 500) + (s.speed * 10)) * 10;
    });
  }

  let rafId = null;

  function render(){
    rafId = null;

    floatState.forEach(s => {
      s.y = lerp(s.y, s.targetY, 0.12);
      s.el.style.transform = `translate3d(0, ${(-s.y).toFixed(2)}px, 0)`;
    });

    blockState.forEach(s => {
      s.x = lerp(s.x, s.targetX, 0.08);
      s.y = lerp(s.y, s.targetY, 0.10);
      s.el.style.transform = `translate3d(${s.x.toFixed(2)}px, ${(-s.y).toFixed(2)}px, 0)`;
    });

    const stillMoving =
      floatState.some(s => Math.abs(s.y - s.targetY) > 0.05) ||
      blockState.some(s => Math.abs(s.y - s.targetY) > 0.05 || Math.abs(s.x - s.targetX) > 0.05);

    if (stillMoving) rafId = requestAnimationFrame(render);
  }

  function scheduleRender(){
    if (!rafId) rafId = requestAnimationFrame(render);
  }

  // =====================================================
  // Active nav underline (correct for scroll container)
  // =====================================================
  const backToTopBtn = document.getElementById("backToTop");

  const navLinks = Array.from(document.querySelectorAll("nav a[data-nav]"));
  const sections = navLinks
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  function setActiveNavByScroll(){
    if (!sections.length) return;

    const st = mainEl.scrollTop;

    if (st <= 2) {
      navLinks.forEach(a => a.classList.remove("active"));
      return;
    }

    const headerOffset = 58;
    const mark = st + headerOffset + 2;

    let current = sections[0];
    for (const s of sections) {
      if (s.offsetTop <= mark) current = s;
    }

    navLinks.forEach(a => a.classList.remove("active"));
    const active = navLinks.find(a => a.getAttribute("href") === `#${current.id}`);
    if (active) active.classList.add("active");

    if (backToTopBtn) {
      backToTopBtn.classList.toggle("is-visible", st > mainEl.clientHeight * 0.5);
    }
  }

  let ticking = false;
  function onScroll(){
    scheduleRender();
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateTargets();
      setActiveNavByScroll();
      ticking = false;
    });
  }

  function syncAfterLoad(frames = 12){
    scheduleRender();
    let n = 0;
    const tick = () => {
      updateTargets();
      setActiveNavByScroll();
      if (n++ < frames) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  updateTargets();
  setActiveNavByScroll();
  syncAfterLoad();

  scheduleRender();

  mainEl.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => syncAfterLoad(6), { passive: true });
  window.addEventListener("hashchange", () => syncAfterLoad(8));
}