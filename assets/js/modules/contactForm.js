// Path: me/assets/js/modules/contactForm.js

import { currentLang } from "./state.js";

export function initContactForm(){
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");
  if (!form || !statusEl) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.elements["name"]?.value?.trim() || "";
    const email = form.elements["email"]?.value?.trim() || "";
    const message = form.elements["message"]?.value?.trim() || "";

    if (!name || !email || !message) {
      statusEl.textContent = (currentLang === "el")
        ? "Συμπλήρωσε όλα τα πεδία."
        : "Please fill in all fields.";
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');

    try {
      submitBtn?.setAttribute("disabled", "");
      submitBtn?.classList.add("is-loading");
      statusEl.textContent = (currentLang === "el") ? "Αποστολή…" : "Sending…";

      await window.emailjs.send(
        "service_8iyejwl",
        "template_j8hcxxa",
        {
          from_name: name,
          from_email: email,
          message: message,
        }
      );

      form.reset();
      statusEl.textContent = (currentLang === "el")
        ? "Το μήνυμα στάλθηκε επιτυχώς."
        : "Message sent successfully.";

    } catch (error) {
      console.error("EmailJS error:", error);
      statusEl.textContent = (currentLang === "el")
        ? "Κάτι πήγε λάθος. Δοκίμασε ξανά."
        : "Something went wrong. Please try again.";

    } finally {
      submitBtn?.removeAttribute("disabled");
      submitBtn?.classList.remove("is-loading");
    }
  });
}
