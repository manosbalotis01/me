// Path: me/assets/js/modules/state.js

// Shared tiny state across modules (keeps the rest decoupled)
export let currentLang = "en";
export function setCurrentLang(lang){ currentLang = (lang === "el") ? "el" : "en"; }
