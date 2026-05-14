import { currentLang, setCurrentLang } from "./state.js";
import { typeHeroTitle } from "./heroTypewriter.js";

export const i18n = {

  // HEAD
  title: {
    en: "Web Solutions — Websites, Portfolios, e-shops and custom applications | Manos Balotis",
    el: "Web Solutions — Websites, Portfolios, e-shops και custom εφαρμογές | Manos Balotis",
  },

  // THEME
  theme_light: { en: "Light",   el: "Φωτεινό"  },
  theme_dark:  { en: "Dark",    el: "Σκοτεινό" },

  // NAV
  nav_work:     { en: "Work",      el: "Έργα"         },
  nav_services: { en: "Services",  el: "Υπηρεσίες"   },
  nav_approach: { en: "Approach",  el: "Προσέγγιση"  },
  nav_contact:  { en: "Contact",   el: "Επικοινωνία" },

  // HERO
  hero_kicker: {
    en: "websites • portfolios • e-shops",
    el: "Websites • Portfolios • E-shops",
  },
  hero_h1: {
    en: "Websites that bring you clients.<br/>Built with clarity.",
    el: "Websites που φέρνουν πελάτες.<br/>Χτισμένα με σαφήνεια.",
  },
  hero_sub: {
    en: "I design and build modern websites that help your business stand out, get found online, and turn visitors into customers.",
    el: "Σχεδιάζω και κατασκευάζω σύγχρονα websites που βοηθούν την επιχείρησή σου να ξεχωρίσει, να βρεθεί online και να μετατρέπει επισκέπτες σε πελάτες.",
  },

  cta_work: {
    en: "View selected work <span class=\"arrow\" aria-hidden=\"true\">→</span>",
    el: "Δες επιλεγμένα έργα <span class=\"arrow\" aria-hidden=\"true\">→</span>",
  },
  cta_quote: {
    en: "Let's build your website <span class=\"arrow\" aria-hidden=\"true\">↘</span>",
    el: "Ας χτίσουμε το website σου <span class=\"arrow\" aria-hidden=\"true\">↘</span>",
  },

  meta_focus: { en: "Focus", el: "Focus" },
  meta_based: { en: "Based", el: "Βάση"    },
  meta_focus_val: {
    en: "Business websites • Portfolio sites • e-shops • Custom web tools",
    el: "Websites επιχειρήσεων • Portfolio • E-shops • Web εργαλεία",
  },
  meta_based_val: {
    en: "Greece (remote friendly)",
    el: "Ελλάδα (remote friendly)",
  },

  // WORK
  work_title: { en: "Selected work",                    el: "Επιλεγμένα έργα"                          },
  work_hint:  { en: "Real projects for real businesses", el: "Πραγματικά projects για πραγματικές επιχειρήσεις" },

  work_diet_title: {
    en: "Dietitian Website — Local Business",
    el: "Website Διαιτολόγου — Τοπική Επιχείρηση",
  },
  work_diet_desc: {
    en: "A clean and trustworthy website designed to attract local clients and clearly present services and booking options.",
    el: "Ένα καθαρό και αξιόπιστο website σχεδιασμένο να προσελκύει τοπικούς πελάτες και να παρουσιάζει ξεκάθαρα υπηρεσίες και επιλογές κράτησης.",
  },
  work_diet_cta: { en: "Coming soon →", el: "Σύντομα →" },

  work_skyros_title: {
    en: "Woodcarving Website — Craft & Storytelling",
    el: "Website Ξυλογλυπτικής — Τέχνη & Αφήγηση",
  },
  work_skyros_desc: {
    en: "A storytelling-driven website that highlights craftsmanship and builds a strong, memorable visual identity.",
    el: "Ένα website βασισμένο στην αφήγηση που αναδεικνύει την τέχνη και χτίζει μια δυνατή, αξέχαστη οπτική ταυτότητα.",
  },
  work_skyros_cta: { en: "Visit website →", el: "Επισκέψου το website →" },

  work_portfolio_title: {
    en: "Designer Portfolio — Visual Showcase",
    el: "Portfolio Σχεδιαστή — Οπτική Παρουσίαση",
  },
  work_portfolio_desc: {
    en: "A visual-first portfolio built to present projects clearly and communicate the designer's style with impact.",
    el: "Ένα portfolio με έμφαση στο visual που παρουσιάζει projects καθαρά και αποτυπώνει με δύναμη το στυλ του σχεδιαστή.",
  },
  work_portfolio_cta: { en: "Visit website →", el: "Επισκέψου το website →" },

  // SERVICES
  services_title: { en: "Services",    el: "Υπηρεσίες"  },
  services_hint:  { en: "Clear scope", el: "Καθαρό scope" },

  svc1_name: { en: "Website design & development",  el: "Σχεδιασμός & ανάπτυξη website"           },
  svc1_desc: {
    en: "Modern, fast and mobile-first websites tailored to your business and built to convert visitors into clients.",
    el: "Σύγχρονα, γρήγορα και mobile-first websites προσαρμοσμένα στην επιχείρησή σου, χτισμένα να μετατρέπουν επισκέπτες σε πελάτες.",
  },
  svc1_tag: { en: "Website", el: "Website" },

  svc2_name: { en: "Google presence & SEO",          el: "Παρουσία Google & SEO"                   },
  svc2_desc: {
    en: "Google Business Profile setup, basic SEO and structured content to help customers find your business online.",
    el: "Ρύθμιση Google Business Profile, βασικό SEO και δομημένο περιεχόμενο για να βρίσκουν οι πελάτες την επιχείρησή σου online.",
  },
  svc2_tag: { en: "SEO", el: "SEO" },

  svc3_name: { en: "Custom web tools",               el: "Εξατομικευμένα web εργαλεία"             },
  svc3_desc: {
    en: "Dashboards, tools and lightweight web apps built around your workflow when a standard website is not enough.",
    el: "Dashboards, εργαλεία και ελαφριές web εφαρμογές χτισμένες γύρω από τη ροή εργασίας σου, όταν ένα απλό website δεν αρκεί.",
  },
  svc3_tag: { en: "Web app", el: "Web app" },

  svc4_name: { en: "Digital menu & QR",              el: "Ψηφιακός κατάλογος & QR"                 },
  svc4_desc: {
    en: "A  digital menu accessible via QR code — ideal for restaurants and cafés that want a clean, always up-to-date alternative to printed menus.",
    el: "Ψηφιακός κατάλογος μέσω QR code — ιδανικό για εστιατόρια και καφέ που θέλουν έναν καθαρό, πάντα ενημερωμένο κατάλογο χωρίς έντυπα.",
  },
  svc4_tag: { en: "QR menu", el: "QR menu" },

  // APPROACH
  approach_title: { en: "Approach",  el: "Προσέγγιση" },
  approach_hint:  { en: "How I work", el: "Πώς δουλεύω" },

  approach1_name: { en: "1. Understand your needs", el: "1. Καταλαβαίνω τις ανάγκες σου" },
  approach1_desc: {
    en: "We define your goals, your audience and what your website needs to achieve.",
    el: "Ορίζουμε τους στόχους σου, το κοινό σου και τι πρέπει να πετύχει το website σου.",
  },

  approach2_name: { en: "2. Design & build",           el: "2. Σχεδιάζω & κατασκευάζω"            },
  approach2_desc: {
    en: "I create a clean, modern website tailored to your brand, with strong structure and fast performance.",
    el: "Δημιουργώ ένα καθαρό, σύγχρονο website προσαρμοσμένο στο brand σου, με δυνατή δομή και γρήγορη απόδοση.",
  },

  approach3_name: { en: "3. Launch & improve",          el: "3. Λανσάρω & βελτιώνω"                },
  approach3_desc: {
    en: "We go live with clarity, then refine where needed so the site keeps working for your business.",
    el: "Ανεβαίνουμε online με σαφήνεια, και μετά βελτιώνουμε όπου χρειάζεται ώστε το site να συνεχίζει να δουλεύει για την επιχείρησή σου.",
  },

  // CONTACT
  contact_title:  { en: "Contact",              el: "Επικοινωνία"    },
  contact_hint:   { en: "Start your project",   el: "Ξεκίνα το project σου" },
  contact_kicker: {
    en: "Let's build your website",
    el: "Ας χτίσουμε το website σου",
  },
  contact_h: {
    en: "Need a website that looks sharp and works for your business?",
    el: "Χρειάζεσαι ένα website που εντυπωσιάζει και δουλεύει για την επιχείρησή σου;",
  },
  contact_sub: {
    en: "Tell me a bit about your business and what you need. I'll reply with next steps.",
    el: "Πες μου λίγα για την επιχείρησή σου και τι χρειάζεσαι. Θα απαντήσω με τα επόμενα βήματα.",
  },

  // FORM
  ph_name:    { en: "Your name",       el: "Το όνομά σου" },
  ph_email:   { en: "Email",           el: "Email"         },
  ph_message: { en: "What do you need?", el: "Τι χρειάζεσαι;" },
  btn_send: {
    en: "Send <span class=\"arrow\" aria-hidden=\"true\">→</span>",
    el: "Αποστολή <span class=\"arrow\" aria-hidden=\"true\">→</span>",
  },
};

export function applyLang(lang){
  const l = (lang === "el") ? "el" : "en";

  // Text nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const val = i18n[key]?.[l];
    if (val == null) return;
    if (el.hasAttribute("data-i18n-html")) el.innerHTML = val;
    else el.textContent = val;
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = i18n[key]?.[l];
    if (val != null) el.placeholder = val;
  });

  // lang label buttons
  document.querySelectorAll("#langLabel, #langToggle .label, #langToggleDesktop .label").forEach(el => {
    el.textContent = l === "el" ? "EN" : "EL";
  });
}

export function initLang(){
  const saved = localStorage.getItem("lang");
  const initial = (saved === "el" || saved === "en") ? saved : "en";
  setCurrentLang(initial);
  applyLang(initial);
  requestAnimationFrame(() => typeHeroTitle());

  const toggleBtns = document.querySelectorAll("#langToggle, #langToggleDesktop");
  toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const next = currentLang === "el" ? "en" : "el";
      setCurrentLang(next);
      localStorage.setItem("lang", next);
      applyLang(next);
      const hero = document.getElementById("heroTitle");
      if (hero) delete hero.dataset.typed;
      requestAnimationFrame(() => typeHeroTitle());
    });
  });
}