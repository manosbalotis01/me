import { currentLang, setCurrentLang } from "./state.js";
import { typeHeroTitle } from "./heroTypewriter.js";

export const i18n = {

  // HEAD
  title: {
    en: "Software Solutions & Web Development | Manos Balotis",
    el: "Λύσεις Λογισμικού & Ανάπτυξη Ιστοσελίδων | Μάνος Μπαλώτης",
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
    en: "Websites • Digital tools • Custom software",
    el: "Ιστοσελίδες • Ψηφιακά εργαλεία • Προσαρμοσμένο λογισμικό",
  },
  hero_h1: {
    en: "Practical software solutions<br/>for modern businesses.",
    el: "Πρακτικές λύσεις λογισμικού<br/>για σύγχρονες επιχειρήσεις.",
  },
  hero_sub: {
    en: "I help businesses improve their online presence, streamline workflows and build software that creates real value — websites, digital tools and custom systems designed to solve real business problems.",
    el: "Βοηθώ επιχειρήσεις να ενισχύσουν την ψηφιακή τους παρουσία, να βελτιώσουν τις διαδικασίες τους και να αξιοποιήσουν λογισμικό που δημιουργεί πραγματική αξία — ιστοσελίδες, ψηφιακά εργαλεία και προσαρμοσμένα συστήματα που λύνουν πραγματικά επιχειρηματικά προβλήματα.",
  },

  cta_work: {
    en: "View selected work <span class=\"arrow\" aria-hidden=\"true\">→</span>",
    el: "Δες επιλεγμένα έργα <span class=\"arrow\" aria-hidden=\"true\">→</span>",
  },
  cta_quote: {
    en: "Discuss your project <span class=\"arrow\" aria-hidden=\"true\">↘</span>",
    el: "Συζητήστε το project σας <span class=\"arrow\" aria-hidden=\"true\">↘</span>",
  },

  meta_focus: { en: "Focus", el: "Focus" },
  meta_based: { en: "Based", el: "Βάση"    },
  meta_focus_val: {
    en: "Websites • Digital tools • Business workflows • Custom software",
    el: "Ιστοσελίδες • Ψηφιακά εργαλεία • Επιχειρηματικές διαδικασίες • Προσαρμοσμένο λογισμικό",
  },
  meta_based_val: {
    en: "Based in Greece — working remotely with businesses across Greece and beyond",
    el: "Με έδρα την Ελλάδα — συνεργασία με επιχειρήσεις σε όλη την Ελλάδα και το εξωτερικό",
  },

  // WORK
  work_title: { en: "Selected work",                    el: "Επιλεγμένα έργα"                          },
  work_hint:  { en: "Real problems, solved with software", el: "Πραγματικά προβλήματα, λυμένα με λογισμικό" },

  work_diet_title: {
    en: "Dietitian Website — Local Business",
    el: "Website Διαιτολόγου — Τοπική Επιχείρηση",
  },
  work_diet_desc: {
    en: "Created to improve visibility, build trust and make booking services easier for potential clients.",
    el: "Δημιουργήθηκε για να αυξήσει την προβολή, να ενισχύσει την εμπιστοσύνη και να διευκολύνει την επικοινωνία και την κράτηση υπηρεσιών.",
  },
  work_diet_cta: { en: "Coming soon →", el: "Σύντομα →" },

  work_skyros_title: {
    en: "Woodcarving Website — Craft & Storytelling",
    el: "Website Ξυλογλυπτικής — Τέχνη & Αφήγηση",
  },
  work_skyros_desc: {
    en: "Designed to strengthen the business's online presence and present handcrafted work in a clear and trustworthy way.",
    el: "Σχεδιάστηκε για να ενισχύσει την ψηφιακή παρουσία της επιχείρησης και να αναδείξει τα χειροποίητα έργα με σαφή και αξιόπιστο τρόπο.",
  },
  work_skyros_cta: { en: "Visit website →", el: "Επισκέψου το website →" },

  work_portfolio_title: {
    en: "Designer Portfolio — Visual Showcase",
    el: "Portfolio Σχεδιαστή — Οπτική Παρουσίαση",
  },
  work_portfolio_desc: {
    en: "Built to help a freelance designer showcase work professionally and communicate a strong visual identity online.",
    el: "Σχεδιάστηκε για να βοηθήσει έναν επαγγελματία designer να παρουσιάζει τη δουλειά του με επαγγελματισμό και να επικοινωνεί μια ισχυρή οπτική ταυτότητα.",
  },
  work_portfolio_cta: { en: "Visit website →", el: "Επισκέψου το website →" },

  // SERVICES
  services_title: { en: "Services",    el: "Υπηρεσίες"  },
  services_hint:  { en: "Clear scope", el: "Καθαρό scope" },

  svc1_name: { en: "Website design & development",  el: "Σχεδιασμός & ανάπτυξη ιστοσελίδων"           },
  svc1_desc: {
    en: "Professional websites built to strengthen your online presence and turn visitors into customers.",
    el: "Επαγγελματικές ιστοσελίδες που ενισχύουν την ψηφιακή σας παρουσία και μετατρέπουν επισκέπτες σε πελάτες.",
  },
  svc1_tag: { en: "Website", el: "Website" },

  svc2_name: { en: "Google presence & SEO",          el: "Παρουσία Google & SEO"                   },
  svc2_desc: {
    en: "Improve visibility on Google and help potential customers discover your business online.",
    el: "Βελτιώστε την παρουσία σας στη Google και βοηθήστε νέους πελάτες να ανακαλύψουν την επιχείρησή σας.",
  },
  svc2_tag: { en: "SEO", el: "SEO" },

  svc3_name: { en: "Custom web tools",               el: "Προσαρμοσμένα web εργαλεία"             },
  svc3_desc: {
    en: "Software tailored to your workflow — from dashboards and internal tools to lightweight business applications.",
    el: "Λογισμικό προσαρμοσμένο στις ανάγκες της επιχείρησής σας — από dashboards και εσωτερικά εργαλεία έως εξειδικευμένες web εφαρμογές.",
  },
  svc3_tag: { en: "Web app", el: "Web app" },

  svc4_name: { en: "Digital menu & QR",              el: "Ψηφιακός κατάλογος & QR"                 },
  svc4_desc: {
    en: "A practical digital menu solution that simplifies updates and improves the customer experience.",
    el: "Μια πρακτική λύση ψηφιακού καταλόγου που διευκολύνει τις ενημερώσεις και βελτιώνει την εμπειρία των πελατών.",
  },
  svc4_tag: { en: "QR menu", el: "QR menu" },

  // APPROACH
  approach_title: { en: "Approach",  el: "Προσέγγιση" },
  approach_hint:  { en: "How I work", el: "Πώς δουλεύω" },

  approach1_name: { en: "1. Understand the problem", el: "1. Κατανοούμε το πρόβλημα" },
  approach1_desc: {
    en: "We identify your goals, challenges and the role technology can play in your business.",
    el: "Κατανοούμε τους στόχους, τις προκλήσεις και τον τρόπο με τον οποίο η τεχνολογία μπορεί να προσφέρει αξία στην επιχείρησή σας.",
  },

  approach2_name: { en: "2. Build the right solution",           el: "2. Σχεδιάζουμε τη σωστή λύση"            },
  approach2_desc: {
    en: "Whether it's a website, digital menu or custom tool, every solution is designed around real needs.",
    el: "Είτε πρόκειται για ιστοσελίδα, ψηφιακό κατάλογο ή εξειδικευμένο εργαλείο, κάθε λύση σχεδιάζεται γύρω από πραγματικές ανάγκες.",
  },

  approach3_name: { en: "3. Deliver long-term value",          el: "3. Προσφέρουμε μακροπρόθεσμη αξία"                },
  approach3_desc: {
    en: "Launch is only the beginning. We refine and improve solutions as your business grows.",
    el: "Η παράδοση είναι μόνο η αρχή. Βελτιώνουμε και εξελίσσουμε τις λύσεις καθώς αναπτύσσεται η επιχείρησή σας.",
  },

  // CONTACT
  contact_title:  { en: "Contact",              el: "Επικοινωνία"    },
  contact_hint:   { en: "Start your project",   el: "Ξεκίνα το project σου" },
  contact_kicker: {
    en: "Let's solve a problem together",
    el: "Ας λύσουμε ένα πρόβλημα μαζί",
  },
  contact_h: {
    en: "Looking for a practical digital solution for your business?",
    el: "Αναζητάτε μια πρακτική ψηφιακή λύση για την επιχείρησή σας;",
  },
  contact_sub: {
    en: "Tell me about your project, challenge or idea. I'll get back to you with the next steps.",
    el: "Περιγράψτε μου το έργο, την πρόκληση ή την ιδέα σας και θα επικοινωνήσω μαζί σας με τα επόμενα βήματα.",
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