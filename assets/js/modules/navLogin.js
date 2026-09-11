// Path: me/assets/js/modules/navLogin.js

/**
 * Navbar "Login" dropdown listing the product logins (Vitrina, Ora).
 * Lives alongside the language/theme toggles, so it is duplicated across
 * the desktop cluster (.rightnav) and the mobile overlay (.nav-controls).
 * Click-toggled; closes on outside click, Escape, or selecting an item.
 */
export function initNavLogin(){
  const wraps = document.querySelectorAll("[data-nav-login]");
  if (!wraps.length) return;

  const instances = [];

  wraps.forEach(wrap => {
    const trigger = wrap.querySelector(".nav-login-trigger");
    const menu = wrap.querySelector(".nav-login-menu");
    if (!trigger || !menu) return;

    const setOpen = (open) => {
      wrap.classList.toggle("is-open", open);
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
      menu.hidden = !open;
    };

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = menu.hidden;
      closeAll();
      setOpen(willOpen);
    });

    // Close after choosing an active login
    menu.querySelectorAll("a.nav-login-item").forEach(a => {
      a.addEventListener("click", () => setOpen(false));
    });

    instances.push({ wrap, setOpen });
  });

  function closeAll(){ instances.forEach(i => i.setOpen(false)); }

  document.addEventListener("click", (e) => {
    if (![...wraps].some(w => w.contains(e.target))) closeAll();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });
}
