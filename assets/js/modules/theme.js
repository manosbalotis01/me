import { root } from "./env.js";
import { applyLang } from "./i18n.js";
import { currentLang } from "./state.js";

const toggleBtns = [
  document.getElementById("themeToggle"),
  document.getElementById("themeToggleDesktop"),
  document.getElementById("themeToggleMobile"),
  ...document.querySelectorAll("#themeToggle, #themeToggleDesktop, #themeToggleMobile")
].filter(Boolean);

const themeLabels = [
  document.getElementById("themeLabel"),
  document.getElementById("themeLabelDesktop"),
  document.getElementById("themeLabelMobile"),
  ...document.querySelectorAll("#themeToggle .label, #themeToggleDesktop .label, #themeToggleMobile .label")
].filter(Boolean);

const themeIcons = [
  document.getElementById("themeIcon"),
  document.getElementById("themeIconDesktop"),
  document.getElementById("themeIconMobile"),
  ...document.querySelectorAll("#themeToggle .ico, #themeToggleDesktop .ico, #themeToggleMobile .ico")
].filter(Boolean);

const unique = items => [...new Set(items)];

const systemPrefersDark = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

function withThemeTransition(fn){
  root.classList.add("theme-transition");
  fn();
  window.setTimeout(() => root.classList.remove("theme-transition"), 450);
}

function applyTheme(theme){
  if (theme === "dark") root.setAttribute("data-theme", "dark");
  else root.removeAttribute("data-theme");

  const isDark = theme === "dark";

  unique(themeIcons).forEach(icon => {
    icon.textContent = isDark ? "☾" : "☼";
  });

  unique(toggleBtns).forEach(btn => {
    btn.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  });

  // If a label isn't controlled by i18n, keep fallback text
  unique(themeLabels).forEach(label => {
    if (!label.hasAttribute("data-i18n")) {
      label.textContent = isDark ? "Dark" : "Light";
    }
  });
}

export function initTheme(){
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") applyTheme(saved);
  else applyTheme(systemPrefersDark() ? "dark" : "light");

  unique(toggleBtns).forEach(btn => {
    btn.addEventListener("click", () => {
      const isDark = root.getAttribute("data-theme") === "dark";
      const next = isDark ? "light" : "dark";
      localStorage.setItem("theme", next);
      withThemeTransition(() => applyTheme(next));
      // refresh i18n-controlled theme label
      applyLang(currentLang);
    });
  });

  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener?.("change", () => {
    const savedNow = localStorage.getItem("theme");
    if (savedNow) return;
    withThemeTransition(() => applyTheme(systemPrefersDark() ? "dark" : "light"));
    applyLang(currentLang);
  });
}
