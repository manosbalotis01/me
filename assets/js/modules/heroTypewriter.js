// Path: me/assets/js/modules/heroTypewriter.js

/**
 * Types the hero title once (or again after language change).
 * Works with <br> lines and respects prefers-reduced-motion.
 */
export function typeHeroTitle(){
  const el = document.getElementById("heroTitle");
  if (!el) return;

  const reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce) return;

  // Prevent double-run unless language resets it
  if (el.dataset.typed === "1") return;
  el.dataset.typed = "1";

  // Read current rendered content (after i18n applied)
  const lines = (el.innerText || el.textContent || "").split("\n").map(s => s.trim());

  // Clear
  el.textContent = "";

  // caret
  const caret = document.createElement("span");
  caret.className = "type-caret";
  caret.setAttribute("aria-hidden", "true");

  let line = 0;
  let word = 0;

  function renderTyped(curr){
    // rebuild HTML with <br/> between lines
    const before = lines.slice(0, line).join("<br/>");

    if (before) el.innerHTML = `${before}<br/>${escapeHtml(curr)}`;
    else el.innerHTML = escapeHtml(curr);

    el.appendChild(caret);
  }

  function tick(){
    // split into words, keeping the whitespace between them as its own token
    const tokens = (lines[line] || "").split(/(\s+)/);

    if (word <= tokens.length){
      renderTyped(tokens.slice(0, word).join(""));
      word++;
      setTimeout(tick, 130);
      return;
    }

    // next line
    line++;
    word = 0;

    if (line < lines.length){
      setTimeout(tick, 320);
      return;
    }

    // done
    caret.remove();
  }

  setTimeout(tick, 200);
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}