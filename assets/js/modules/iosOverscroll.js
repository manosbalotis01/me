// Path: me/assets/js/modules/iosOverscroll.js

import { mainEl } from "./env.js";

export function initIosOverscrollFix(){
  if (!mainEl) return;

  let startY = 0;

  mainEl.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;
    startY = e.touches[0].clientY;
  }, { passive: true });

  mainEl.addEventListener("touchmove", (e) => {
    if (e.touches.length !== 1) return;

    const y = e.touches[0].clientY;
    const dy = y - startY;

    const atTop = mainEl.scrollTop <= 0;
    const atBottom = mainEl.scrollTop + mainEl.clientHeight >= mainEl.scrollHeight - 1;

    if ((atTop && dy > 0) || (atBottom && dy < 0)) e.preventDefault();
  }, { passive: false });
}
