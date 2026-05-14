// Path: me/assets/js/modules/workStepper.js

import { mainEl, reduceMotion, qs, qsa } from "./env.js";
import { applyLang } from "./i18n.js";
import { currentLang } from "./state.js";

const workSectionEl = document.getElementById("work");

let workIndex = 0; // 0..2
let workWheelLockUntil = 0;
let workWheelAcc = 0;
let workWasSnapped = false;
let workDidInitOnEntry = false;

function pad2(n){
  const v = Math.max(0, n|0);
  return v < 10 ? `0${v}` : String(v);
}

function ensureWorkStage(){
  if (!workSectionEl) return;

  if (!window.matchMedia("(min-width: 980px) and (hover: hover) and (pointer: fine)").matches) return;

  const container = qs(workSectionEl, ".container");
  const feature = qs(workSectionEl, ".work-feature");
  const list = qs(workSectionEl, ".work-rows");
  if (!container || !feature || !list) return;

  if (qs(container, ".work-stage")) return;

  const stage = document.createElement("div");
  stage.className = "work-stage";

  container.insertBefore(stage, list);
  stage.appendChild(feature);
  stage.appendChild(list);
}

function getFeaturedData(){
  const featuredEl = workSectionEl ? qs(workSectionEl, ".work-feature") : null;
  if (!featuredEl) return null;

  const tagsWrap = qs(featuredEl, ".work-tags");
  const tagTexts = tagsWrap ? Array.from(tagsWrap.children).map(n => n.textContent.trim()).filter(Boolean) : [];

  const m = qsa(featuredEl, ".metric");
  const role = m[0] ? qs(m[0], ".muted")?.textContent.trim() : "";
  const stack = m[1] ? qs(m[1], ".muted")?.textContent.trim() : "";
  const outcome = m[2] ? qs(m[2], ".muted")?.textContent.trim() : "";

  return {
    no: "00",
    title: qs(featuredEl, ".work-feature-title")?.textContent.trim() || "",
    desc: qs(featuredEl, ".work-feature-desc")?.textContent.trim() || "",
    tags: tagTexts,
    metrics: { role, stack, outcome },
    i18n: {
      title: qs(featuredEl, ".work-feature-title")?.getAttribute("data-i18n") || "",
      desc: qs(featuredEl, ".work-feature-desc")?.getAttribute("data-i18n") || "",
      role: qs(featuredEl, ".metric:nth-child(1) .muted")?.getAttribute("data-i18n") || "",
      stack: qs(featuredEl, ".metric:nth-child(2) .muted")?.getAttribute("data-i18n") || "",
      outcome: qs(featuredEl, ".metric:nth-child(3) .muted")?.getAttribute("data-i18n") || "",
    }
  };
}

function getRowData(row, no){
  const titleEl = qs(row, ".work-title");
  const descEl = qs(row, ".work-desc");
  const tagsWrap = qs(row, ".work-tags");
  const tagTexts = tagsWrap ? Array.from(tagsWrap.children).map(n => n.textContent.trim()).filter(Boolean) : [];

  return {
    no,
    title: titleEl?.textContent.trim() || "",
    desc: descEl?.textContent.trim() || "",
    tags: tagTexts,
    metrics: null,
    i18n: {
      title: titleEl?.getAttribute("data-i18n") || "",
      desc: descEl?.getAttribute("data-i18n") || "",
    }
  };
}

function getWorkRows(){
  if (!workSectionEl) return [];
  return qsa(workSectionEl, ".work-row");
}

ensureWorkStage();

const workStageEl = workSectionEl ? qs(workSectionEl, ".work-stage") : null;
function setWorkStageStep(i){
  if (!workStageEl) return;
  workStageEl.setAttribute("data-step", String(i));
}

const featuredEl = workSectionEl ? qs(workSectionEl, ".work-feature") : null;
const rowEls = getWorkRows();

const projects = (() => {
  const p0 = getFeaturedData();
  const p1 = rowEls[0] ? getRowData(rowEls[0], "01") : null;
  const p2 = rowEls[1] ? getRowData(rowEls[1], "02") : null;
  return [p0, p1, p2].filter(Boolean);
})();

function setFeaturedFromProject(p){
  if (!featuredEl || !p) return;

  const titleEl = qs(featuredEl, ".work-feature-title");
  const descEl  = qs(featuredEl, ".work-feature-desc");

  if (p.i18n?.title) titleEl?.setAttribute("data-i18n", p.i18n.title);
  else titleEl?.removeAttribute("data-i18n");

  if (p.i18n?.desc) descEl?.setAttribute("data-i18n", p.i18n.desc);
  else descEl?.removeAttribute("data-i18n");

  if (titleEl) titleEl.textContent = p.title;
  if (descEl) descEl.textContent = p.desc;

  const tagWrap = qs(featuredEl, ".work-tags");
  if (tagWrap) {
    tagWrap.innerHTML = "";
    (p.tags || []).forEach(t => {
      const span = document.createElement("span");
      span.textContent = t;
      tagWrap.appendChild(span);
    });
  }

  const m = qsa(featuredEl, ".metric");
  if (p.metrics) {
    if (m[0]) qs(m[0], ".muted").textContent = p.metrics.role || "";
    if (m[1]) qs(m[1], ".muted").textContent = p.metrics.stack || "";
    if (m[2]) qs(m[2], ".muted").textContent = p.metrics.outcome || "";
  } else {
    if (m[0]) qs(m[0], ".muted").textContent = "—";
    if (m[1]) qs(m[1], ".muted").textContent = "—";
    if (m[2]) qs(m[2], ".muted").textContent = "—";
  }
}

function setRowFromProject(rowEl, p){
  if (!rowEl || !p) return;

  const noEl = qs(rowEl, ".work-no");
  if (noEl) noEl.textContent = p.no;

  const titleEl = qs(rowEl, ".work-title");
  const descEl  = qs(rowEl, ".work-desc");

  if (p.i18n?.title) titleEl?.setAttribute("data-i18n", p.i18n.title);
  else titleEl?.removeAttribute("data-i18n");

  if (p.i18n?.desc) descEl?.setAttribute("data-i18n", p.i18n.desc);
  else descEl?.removeAttribute("data-i18n");

  if (titleEl) titleEl.textContent = p.title;
  if (descEl) descEl.textContent = p.desc;

  const tagWrap = qs(rowEl, ".work-tags");
  if (tagWrap) {
    tagWrap.innerHTML = "";
    (p.tags || []).forEach(t => {
      const span = document.createElement("span");
      span.textContent = t;
      tagWrap.appendChild(span);
    });
  }
}

function applySlotsForIndex(i){
  if (!rowEls.length) return;

  const p0 = projects[0];
  const p1 = projects[1];
  const p2 = projects[2];

  rowEls.forEach(r => r.setAttribute("data-slot", "hidden"));

  if (i === 0) {
    setRowFromProject(rowEls[0], p1);
    rowEls[0].setAttribute("data-slot", "below-1");

    setRowFromProject(rowEls[1], p2);
    rowEls[1].setAttribute("data-slot", "below-2");
  }

  if (i === 1) {
    setRowFromProject(rowEls[0], p0);
    rowEls[0].setAttribute("data-slot", "above-1");

    setRowFromProject(rowEls[1], p2);
    rowEls[1].setAttribute("data-slot", "below-1");
  }

  if (i === 2) {
    setRowFromProject(rowEls[0], p0);
    rowEls[0].setAttribute("data-slot", "above-2");

    setRowFromProject(rowEls[1], p1);
    rowEls[1].setAttribute("data-slot", "above-1");
  }

  rowEls.forEach(r => r.classList.add("is-in"));
}

function setWorkFocus(index){
  const max = projects.length - 1;
  if ((dy > 0 && workIndex >= max) || (dy < 0 && workIndex <= 0)) {
  acc = 0;
  lastT = now;
  return; // no preventDefault -> smooth exit
}
  const next = Math.max(0, Math.min(index, max));
  if (next === workIndex) return;

  const animated = [featuredEl, ...rowEls].filter(Boolean);
  animated.forEach(el => { el.getAnimations?.().forEach(a => a.cancel()); });

  workIndex = next;

  setFeaturedFromProject(projects[workIndex]);
  applySlotsForIndex(workIndex);
  setWorkStageStep(workIndex);

  applyLang(currentLang);

  const keyframes = [{ opacity: 0.25 }, { opacity: 1 }];
  const opts = { duration: 360, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" };
  animated.forEach(el => { try { el.animate(keyframes, opts); } catch(_) {} });
}

function workIsSnapped(){
  if (!workSectionEl) return false;
  const headerOffset = 58;
  const r = workSectionEl.getBoundingClientRect();
  return Math.abs(r.top - headerOffset) <= 24;
}

export function resetWorkStepper(){
  setWorkFocus(0);
  setWorkStageStep(0);
  workDidInitOnEntry = true;
}

// init
workIndex = 0;
setFeaturedFromProject(projects[0]);
applySlotsForIndex(0);
setWorkStageStep(0);

// reset when entering work
if (workSectionEl && mainEl) {
  const workEntryIO = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) resetWorkStepper(); });
  }, { root: mainEl, threshold: 0.6 });

  workEntryIO.observe(workSectionEl);
}

export function initWorkStepper(){
  if (!workSectionEl || !mainEl) return;

  if (!reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    mainEl.addEventListener("wheel", (e) => {
      const snapped = workIsSnapped();
      const now = performance.now();

      if (snapped && !workWasSnapped) {
        workWheelAcc = 0;
        workWasSnapped = true;
        if (!workDidInitOnEntry) resetWorkStepper();
      }
      if (!snapped && workWasSnapped) {
        workWheelAcc = 0;
        workWasSnapped = false;
        return;
      }

      if (!snapped) return;

      if (now < workWheelLockUntil) {
        e.preventDefault();
        return;
      }

      const dy = e.deltaY;

      if (Math.abs(dy) < 2) {
        e.preventDefault();
        return;
      }

      workWheelAcc += dy;

      const TH = 70;
      if (Math.abs(workWheelAcc) < TH) {
        e.preventDefault();
        return;
      }

      const dir = workWheelAcc > 0 ? 1 : -1;
      workWheelAcc = 0;

      const max = projects.length - 1;

      if (dir > 0) {
        if (workIndex < max) {
          e.preventDefault();
          setWorkFocus(workIndex + 1);
          workWheelLockUntil = now + 520;
          return;
        }
        return;
      }

      if (workIndex > 0) {
        e.preventDefault();
        setWorkFocus(workIndex - 1);
        workWheelLockUntil = now + 520;
        return;
      }
      return;
    }, { passive: false });
  }
}

export function notifyJumpToWork(){
  workDidInitOnEntry = false;
  resetWorkStepper();
}
