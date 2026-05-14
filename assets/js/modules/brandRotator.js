// Path: me/assets/js/modules/brandRotator.js

export function initBrandRotator(){
  const el = document.getElementById("brandText");
  if (!el) return;

  const reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const words = ["MB", "Manos B", "Manos Balotis"];

  // Αν ο χρήστης προτιμά reduced motion: δείξε απλά το τελικό (ή το πρώτο)
  if (reduce) {
    el.textContent = words[2];
    return;
  }

  // Tuning
  const TYPE_MS = 85;     // πόσο γρήγορα γράφει
  const ERASE_MS = 45;    // πόσο γρήγορα σβήνει
  const HOLD_MS = 1200;   // πόσο “μένει” πριν σβήσει
  const START_DELAY = 350;

  let wordIndex = 0;
  let charIndex = 0;
  let mode = "type"; // "type" | "hold" | "erase"
  let timer = null;

  // Avoid double init on hot reload
  if (el.dataset.rotating === "1") return;
  el.dataset.rotating = "1";

  function tick(){
    const word = words[wordIndex];

    if (mode === "type") {
      charIndex++;
      el.textContent = word.slice(0, charIndex);

      if (charIndex >= word.length) {
        mode = "hold";
        timer = setTimeout(tick, HOLD_MS);
        return;
      }

      timer = setTimeout(tick, TYPE_MS);
      return;
    }

    if (mode === "hold") {
      mode = "erase";
      timer = setTimeout(tick, ERASE_MS);
      return;
    }

    // erase
    charIndex--;
    el.textContent = word.slice(0, Math.max(0, charIndex));

    if (charIndex <= 0) {
      wordIndex = (wordIndex + 1) % words.length;
      mode = "type";
      timer = setTimeout(tick, TYPE_MS);
      return;
    }

    timer = setTimeout(tick, ERASE_MS);
  }

  timer = setTimeout(tick, START_DELAY);

  // cleanup on page hide (optional but nice)
  window.addEventListener("pagehide", () => {
    try { clearTimeout(timer); } catch(_) {}
  }, { once: true });
}