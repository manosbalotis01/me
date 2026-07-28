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
  nav_pricing:  { en: "Pricing",   el: "Τιμές"        },
  nav_approach: { en: "Approach",  el: "Προσέγγιση"  },
  nav_contact:  { en: "Contact",   el: "Επικοινωνία" },

  // HERO
  hero_kicker: {
    en: "websites • portfolios • e-shops",
    el: "Websites • Portfolios • e-shops",
  },
  hero_h1: {
    en: "Websites that bring you clients.<br/>Built with clarity.",
    el: "Websites που φέρνουν πελάτες.<br/>Χτισμένα με σαφήνεια.",
  },
  hero_sub: {
    en: "I design and build modern websites that help your business stand out, get found online, and turn visitors into customers.",
    el: "Σχεδιάζω και κατασκευάζω σύγχρονα websites που βοηθούν την επιχείρησή σας να ξεχωρίσει, να βρεθεί online και να μετατρέπει επισκέπτες σε πελάτες.",
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
    el: "Websites επιχειρήσεων • Portfolio • E-shops • Custom Web εργαλεία",
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
    en: "A clean and trustworthy website designed to attract clients and clearly present services and booking options.",
    el: "Ένα καθαρό και αξιόπιστο website σχεδιασμένο να προσελκύει πελάτες και να παρουσιάζει ξεκάθαρα υπηρεσίες και επιλογές κράτησης.",
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
    en: "A visual-first portfolio built to present projects clearly and communicate the designer's style.",
    el: "Ένα portfolio με έμφαση στο visual που παρουσιάζει projects καθαρά και αποτυπώνει το στυλ του σχεδιαστή.",
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

  // PRICING
  pricing_title: { en: "Pricing",              el: "Τιμές"          },
  pricing_hint:  { en: "Transparent packages", el: "Καθαρές τιμές"  },

  pricing_group_build:  { en: "Build",               el: "Κατασκευή"                },
  pricing_group_addons: { en: "Add-ons & Services",  el: "Add-ons & Υπηρεσίες"      },

  price_label_onetime: { en: "One-time",    el: "Εφάπαξ"       },
  price_label_monthly: { en: "Hosting /mo", el: "Hosting /μήνα" },
  price_label_yearly:  { en: "Hosting /yr", el: "Hosting /έτος" },

  price_qr_name: { en: "QR Menu", el: "QR Menu" },
  price_qr_desc: {
    en: "Digital menu accessible via QR code — always up to date, no printing costs.",
    el: "Ψηφιακός κατάλογος μέσω QR code — πάντα ενημερωμένος, χωρίς κόστος εκτύπωσης.",
  },
  price_qr_onetime: { en: "from €200", el: "από €200" },
  price_qr_monthly: { en: "€8",        el: "€8"        },
  price_qr_yearly:  { en: "€75",       el: "€75"       },

  price_website_name: { en: "Website", el: "Website" },
  price_badge_popular: { en: "Most popular", el: "Πιο δημοφιλές" },
  price_website_helper: {
    en: "Perfect for small businesses.",
    el: "Ιδανικό για μικρές επιχειρήσεις.",
  },
  price_website_desc: {
    en: "A modern business website built to represent your brand and convert visitors into clients.",
    el: "Ένα σύγχρονο website επιχείρησης, φτιαγμένο να παρουσιάζει το brand σου και να μετατρέπει επισκέπτες σε πελάτες.",
  },
  price_website_onetime: { en: "from €300", el: "από €300" },
  price_website_monthly: { en: "€12",       el: "€12"       },
  price_website_yearly:  { en: "€115",      el: "€115"      },

  price_eshop_name: { en: "E-shop", el: "E-shop" },
  price_eshop_desc: {
    en: "A full online store with product catalog, cart and checkout, ready to sell.",
    el: "Ένα πλήρες online κατάστημα με κατάλογο προϊόντων, καλάθι και ολοκλήρωση παραγγελίας, έτοιμο να πουλήσει.",
  },
  price_eshop_onetime: { en: "from €800", el: "από €800" },
  price_eshop_monthly: { en: "€18",       el: "€18"       },
  price_eshop_yearly:  { en: "€170",      el: "€170"      },

  price_card_name: { en: "Digital Card / Bio Link", el: "Digital Card / Bio Link" },
  price_card_desc: {
    en: "A digital business card / link-in-bio page — works standalone or as an add-on to your website.",
    el: "Ψηφιακή επαγγελματική κάρτα / bio link σελίδα — λειτουργεί αυτόνομα ή ως add-on στο website σου.",
  },
  price_card_onetime: { en: "€80 standalone or add-on", el: "€80 αυτόνομα ή ως add-on" },
  price_card_monthly: { en: "€5",                       el: "€5"                       },
  price_card_yearly:  { en: "€50",                      el: "€50"                      },

  price_booking_name: { en: "Booking system", el: "Σύστημα κρατήσεων" },
  price_booking_desc: {
    en: "Online booking/reservations system integrated into your website, so clients can book without a phone call.",
    el: "Σύστημα online κρατήσεων ενσωματωμένο στο website σου, ώστε οι πελάτες να κλείνουν ραντεβού χωρίς τηλέφωνο.",
  },
  price_booking_onetime: { en: "from €250 add-on",    el: "από €250 ως add-on" },
  price_booking_note:    { en: "No hosting required",  el: "Χωρίς hosting"      },

  price_seo_name: { en: "SEO & Maintenance", el: "SEO & Συντήρηση" },
  price_seo_desc: {
    en: "Ongoing SEO improvements, content updates and technical maintenance to keep your site running and visible.",
    el: "Συνεχής βελτιστοποίηση SEO, ενημερώσεις περιεχομένου και τεχνική συντήρηση, ώστε το site σου να παραμένει ενεργό και ορατό.",
  },
  price_seo_monthly: { en: "€12",  el: "€12"  },
  price_seo_yearly:  { en: "€115", el: "€115" },

  price_hosting_name: { en: "Hosting only", el: "Hosting μόνο" },
  price_hosting_desc: {
    en: "Reliable hosting only, for sites already built elsewhere or by you — includes uptime monitoring.",
    el: "Αξιόπιστο hosting μόνο, για websites που έχουν ήδη κατασκευαστεί αλλού ή από εσένα — περιλαμβάνει παρακολούθηση uptime.",
  },
  price_hosting_monthly: { en: "€5–8",  el: "€5–8"  },
  price_hosting_yearly:  { en: "€50–75", el: "€50–75" },

  pricing_cta: {
    en: "Get a quote <span class=\"arrow\" aria-hidden=\"true\">→</span>",
    el: "Ζήτα προσφορά <span class=\"arrow\" aria-hidden=\"true\">→</span>",
  },

  // APPROACH
  approach_title: { en: "Approach",  el: "Προσέγγιση" },
  approach_hint:  { en: "How I work", el: "Πώς δουλεύω" },

  approach1_name: { en: "Understand your needs", el: "Καταλαβαίνω τις ανάγκες σου" },
  approach1_desc: {
    en: "I define your goals, your audience and what your website needs to achieve.",
    el: "Ορίζω τους στόχους σου, το κοινό σου και τι πρέπει να πετύχει το website σου.",
  },

  approach2_name: { en: "Design & build",           el: "Σχεδιάζω & κατασκευάζω"            },
  approach2_desc: {
    en: "I create a clean, modern website tailored to your brand, with strong structure and fast performance.",
    el: "Δημιουργώ ένα καθαρό, σύγχρονο website προσαρμοσμένο στο brand σου, με δυνατή δομή και γρήγορη απόδοση.",
  },

  approach3_name: { en: "Launch & improve",          el: "Λανσάρω & βελτιώνω"                },
  approach3_desc: {
    en: "I go live with clarity, then refine where needed so the site keeps working for your business.",
    el: "Ανεβαίνω online με σαφήνεια, και μετά βελτιώνω όπου χρειάζεται ώστε το site να συνεχίζει να δουλεύει για την επιχείρησή σου.",
  },

  // CONTACT
  contact_title:  { en: "Contact",              el: "Επικοινωνία"    },
  contact_hint:   { en: "Start your project",   el: "Ξεκίνα το project σου" },
  contact_kicker: {
    en: "Let's build your website",
    el: "Ας χτίσουμε το website σου",
  },
  contact_h: {
    en: "Need a website that works for your business?",
    el: "Χρειάζεσαι ένα website που δουλεύει για την επιχείρησή σου;",
  },
  contact_sub: {
    en: "Tell me about your project. I'll reply within 24 hours with the next steps.",
    el: "Πες μου για το project σου. Θα απαντήσω εντός 24 ωρών με τα επόμενα βήματα.",
  },

  // FORM
  ph_name:    { en: "Your name",       el: "Το όνομά σου" },
  ph_email:   { en: "Email",           el: "Email"         },
  ph_message: { en: "What do you need?", el: "Τι χρειάζεσαι;" },
  btn_send: {
    en: "Send <span class=\"arrow\" aria-hidden=\"true\">→</span>",
    el: "Αποστολή <span class=\"arrow\" aria-hidden=\"true\">→</span>",
  },

  // FOOTER
  footer_privacy: { en: "Privacy Policy", el: "Πολιτική Απορρήτου" },

  // ======================================================
  // PRIVACY POLICY (/privacy/)
  // ======================================================
  privacy_title: {
    en: "Privacy Policy | Manos Balotis",
    el: "Πολιτική Απορρήτου | Manos Balotis",
  },
  pp_h1: { en: "Privacy Policy", el: "Πολιτική Απορρήτου" },
  pp_updated: {
    en: "Last updated: 28 July 2026",
    el: "Τελευταία ενημέρωση: 28 Ιουλίου 2026",
  },
  pp_intro: {
    en: "This website is a personal business site. It collects as little personal data as possible: only what you choose to send me through the contact form. This page explains what is collected, why, and what rights you have over it.",
    el: "Αυτό το website είναι προσωπικός επαγγελματικός ιστότοπος. Συλλέγει όσο το δυνατόν λιγότερα προσωπικά δεδομένα: μόνο όσα επιλέγεις να μου στείλεις μέσω της φόρμας επικοινωνίας. Η σελίδα αυτή εξηγεί τι συλλέγεται, γιατί, και ποια δικαιώματα έχεις επ' αυτού.",
  },

  // 1. Controller
  pp_controller_title: { en: "1. Data controller", el: "1. Υπεύθυνος επεξεργασίας" },
  pp_controller_body: {
    en: "The controller responsible for the personal data described here is:",
    el: "Υπεύθυνος επεξεργασίας για τα προσωπικά δεδομένα που περιγράφονται εδώ είναι:",
  },
  pp_controller_label_name:  { en: "Name",     el: "Ονοματεπώνυμο" },
  pp_controller_label_email: { en: "Email",    el: "Email"          },
  pp_controller_label_site:  { en: "Website",  el: "Website"        },
  pp_controller_name: {
    en: "Μπαλώτης Εμμανουήλ Παναγιώτης (Manos Balotis)",
    el: "Μπαλώτης Εμμανουήλ Παναγιώτης",
  },

  // 2. What data
  pp_data_title: { en: "2. What data I collect", el: "2. Ποια δεδομένα συλλέγω" },
  pp_data_body: {
    en: "The only personal data I collect is what you type into the contact form on the home page:",
    el: "Τα μόνα προσωπικά δεδομένα που συλλέγω είναι όσα συμπληρώνεις στη φόρμα επικοινωνίας της αρχικής σελίδας:",
  },
  pp_data_li_name: {
    en: "Your name — so I know who I'm replying to.",
    el: "Το όνομά σου — για να ξέρω σε ποιον απαντώ.",
  },
  pp_data_li_email: {
    en: "Your email address — so I can reply to you.",
    el: "Τη διεύθυνση email σου — για να μπορώ να σου απαντήσω.",
  },
  pp_data_li_message: {
    en: "Your message — the content of your request, plus anything else you choose to include in it.",
    el: "Το μήνυμά σου — το περιεχόμενο του αιτήματός σου, καθώς και οτιδήποτε άλλο επιλέξεις να συμπεριλάβεις σε αυτό.",
  },
  pp_data_note: {
    en: "There are no other forms, no accounts, no newsletter and no payment processing on this website. Please do not send sensitive personal data (health data, ID numbers, financial details) through the contact form.",
    el: "Δεν υπάρχουν άλλες φόρμες, λογαριασμοί χρηστών, newsletter ή επεξεργασία πληρωμών σε αυτό το website. Παρακαλώ μη στέλνεις ευαίσθητα προσωπικά δεδομένα (δεδομένα υγείας, αριθμούς ταυτότητας, οικονομικά στοιχεία) μέσω της φόρμας επικοινωνίας.",
  },

  // 3. How it is processed
  pp_processing_title: { en: "3. How your data is processed", el: "3. Πώς επεξεργάζονται τα δεδομένα σου" },
  pp_processing_body: {
    en: "The contact form is handled by EmailJS, a service that turns the form submission directly into an email. When you press Send, your name, email and message are transmitted by EmailJS and delivered to my inbox at contact@manosbalotis.com.",
    el: "Η φόρμα επικοινωνίας εξυπηρετείται από το EmailJS, μια υπηρεσία που μετατρέπει την υποβολή της φόρμας απευθείας σε email. Όταν πατήσεις Αποστολή, το όνομα, το email και το μήνυμά σου διαβιβάζονται μέσω EmailJS και παραδίδονται στα εισερχόμενά μου στο contact@manosbalotis.com.",
  },
  pp_processing_body2: {
    en: "This website has no database and no server-side storage of its own: nothing you submit is saved on the website itself. EmailJS acts as a processor for the delivery of that message; their own handling of it is described in their privacy policy.",
    el: "Αυτό το website δεν διαθέτει βάση δεδομένων ούτε δική του αποθήκευση σε server: τίποτα από όσα υποβάλλεις δεν αποθηκεύεται στον ίδιο τον ιστότοπο. Το EmailJS ενεργεί ως εκτελών την επεξεργασία για την παράδοση του μηνύματος· ο δικός τους χειρισμός περιγράφεται στη δική τους πολιτική απορρήτου.",
  },
  pp_processing_hosting: {
    en: "The site is hosted on Cloudflare Pages. As the hosting provider, Cloudflare processes technical connection data (such as IP address and browser user agent) in order to serve the pages and protect the site against abuse. I do not have access to that data as an identifiable record of you.",
    el: "Ο ιστότοπος φιλοξενείται στο Cloudflare Pages. Ως πάροχος φιλοξενίας, η Cloudflare επεξεργάζεται τεχνικά δεδομένα σύνδεσης (όπως διεύθυνση IP και user agent του browser) για να εξυπηρετήσει τις σελίδες και να προστατεύσει τον ιστότοπο από κακόβουλη χρήση. Δεν έχω πρόσβαση σε αυτά τα δεδομένα ως ταυτοποιήσιμη εγγραφή για εσένα.",
  },

  // 4. Purpose & legal basis
  pp_purpose_title: { en: "4. Purpose and legal basis", el: "4. Σκοπός και νομική βάση" },
  pp_purpose_body: {
    en: "Your data is used for one purpose only: to read your message and reply to your enquiry, and — if we go on to work together — to continue that conversation about your project. It is never used for advertising, profiling or automated decision-making, and it is never sold or shared for marketing.",
    el: "Τα δεδομένα σου χρησιμοποιούνται για έναν και μόνο σκοπό: να διαβάσω το μήνυμά σου και να απαντήσω στο αίτημά σου και — εφόσον προχωρήσουμε σε συνεργασία — να συνεχίσω τη συζήτηση για το project σου. Δεν χρησιμοποιούνται ποτέ για διαφήμιση, profiling ή αυτοματοποιημένη λήψη αποφάσεων, ούτε πωλούνται ή κοινοποιούνται για σκοπούς marketing.",
  },
  pp_purpose_basis: {
    en: "The legal basis under the GDPR is your consent, given by choosing to submit the form (Art. 6(1)(a)), and, where your message concerns a possible or existing project, steps taken at your request prior to or under a contract (Art. 6(1)(b)).",
    el: "Η νομική βάση σύμφωνα με τον GDPR είναι η συγκατάθεσή σου, που δίνεται με την επιλογή σου να υποβάλεις τη φόρμα (άρθρο 6 παρ. 1 στοιχ. α΄), και, όπου το μήνυμά σου αφορά πιθανό ή υφιστάμενο project, ενέργειες κατ' αίτησή σου πριν ή κατά την εκτέλεση σύμβασης (άρθρο 6 παρ. 1 στοιχ. β΄).",
  },

  // 5. Retention
  pp_retention_title: { en: "5. How long it is kept", el: "5. Πόσο διατηρούνται" },
  pp_retention_body: {
    en: "Your message exists only as an email in my inbox. It is not copied into any database, CRM or mailing list. I keep enquiry emails for as long as they are useful for the conversation they belong to, and delete them when they no longer are — or straight away, if you ask me to.",
    el: "Το μήνυμά σου υπάρχει μόνο ως email στα εισερχόμενά μου. Δεν αντιγράφεται σε καμία βάση δεδομένων, CRM ή λίστα αποστολής. Διατηρώ τα email επικοινωνίας για όσο διάστημα είναι χρήσιμα για τη συζήτηση στην οποία ανήκουν και τα διαγράφω όταν παύουν να είναι — ή αμέσως, αν μου το ζητήσεις.",
  },
  pp_retention_note: {
    en: "Where an enquiry leads to an actual project, related correspondence may be kept for as long as needed for that project and for any legal or tax obligations that follow from it.",
    el: "Όπου ένα αίτημα οδηγεί σε πραγματικό project, η σχετική αλληλογραφία μπορεί να διατηρηθεί για όσο χρειάζεται για το project αυτό και για τυχόν νομικές ή φορολογικές υποχρεώσεις που απορρέουν από αυτό.",
  },

  // 6. Cookies
  pp_cookies_title: { en: "6. Cookies and tracking", el: "6. Cookies και παρακολούθηση" },
  pp_cookies_body: {
    en: "This website uses no analytics, no tracking cookies, no advertising pixels and no third-party trackers of any kind. Your language and theme (light/dark) preferences are stored locally in your own browser, so the site looks the way you left it. That information never leaves your device and is not personal data I can see — you can clear it at any time from your browser settings.",
    el: "Αυτό το website δεν χρησιμοποιεί analytics, cookies παρακολούθησης, διαφημιστικά pixels ή trackers τρίτων οποιουδήποτε είδους. Οι προτιμήσεις σου για τη γλώσσα και το θέμα (φωτεινό/σκοτεινό) αποθηκεύονται τοπικά στον δικό σου browser, ώστε ο ιστότοπος να εμφανίζεται όπως τον άφησες. Αυτές οι πληροφορίες δεν φεύγουν ποτέ από τη συσκευή σου και δεν αποτελούν προσωπικά δεδομένα στα οποία έχω πρόσβαση — μπορείς να τις διαγράψεις ανά πάσα στιγμή από τις ρυθμίσεις του browser σου.",
  },

  // 7. Rights
  pp_rights_title: { en: "7. Your rights under the GDPR", el: "7. Τα δικαιώματά σου βάσει του GDPR" },
  pp_rights_body: {
    en: "If you have sent me a message, you have the following rights over that data:",
    el: "Εφόσον μου έχεις στείλει μήνυμα, έχεις τα ακόλουθα δικαιώματα επί των δεδομένων αυτών:",
  },
  pp_rights_li_access: {
    en: "Access — to ask what data of yours I hold and receive a copy of it.",
    el: "Πρόσβαση — να ζητήσεις ποια δεδομένα σου τηρώ και να λάβεις αντίγραφό τους.",
  },
  pp_rights_li_rect: {
    en: "Rectification — to have inaccurate or incomplete data corrected.",
    el: "Διόρθωση — να διορθωθούν ανακριβή ή ελλιπή δεδομένα.",
  },
  pp_rights_li_erase: {
    en: "Erasure — to have your message and details deleted from my inbox.",
    el: "Διαγραφή — να διαγραφούν το μήνυμα και τα στοιχεία σου από τα εισερχόμενά μου.",
  },
  pp_rights_li_restrict: {
    en: "Restriction — to ask that I limit how your data is used.",
    el: "Περιορισμός — να ζητήσεις να περιοριστεί ο τρόπος χρήσης των δεδομένων σου.",
  },
  pp_rights_li_object: {
    en: "Objection — to object to the processing of your data.",
    el: "Εναντίωση — να αντιταχθείς στην επεξεργασία των δεδομένων σου.",
  },
  pp_rights_li_portability: {
    en: "Portability — to receive your data in a common, machine-readable format.",
    el: "Φορητότητα — να λάβεις τα δεδομένα σου σε κοινό, αναγνώσιμο από μηχανή μορφότυπο.",
  },
  pp_rights_li_withdraw: {
    en: "Withdrawal of consent — at any time, without affecting processing already carried out.",
    el: "Ανάκληση συγκατάθεσης — ανά πάσα στιγμή, χωρίς να θίγεται η επεξεργασία που έχει ήδη γίνει.",
  },
  pp_rights_how: {
    en: "To exercise any of these, email contact@manosbalotis.com. I'll respond within one month, as required by the GDPR. Since the only data I hold is the email you sent me, requests are usually handled the same day.",
    el: "Για την άσκηση οποιουδήποτε από αυτά, στείλε email στο contact@manosbalotis.com. Θα απαντήσω εντός ενός μηνός, όπως απαιτεί ο GDPR. Καθώς τα μόνα δεδομένα που τηρώ είναι το email που μου έστειλες, τα αιτήματα διεκπεραιώνονται συνήθως αυθημερόν.",
  },
  pp_rights_complaint: {
    en: "You also have the right to lodge a complaint with a supervisory authority. In Greece this is the Hellenic Data Protection Authority (dpa.gr).",
    el: "Έχεις επίσης δικαίωμα υποβολής καταγγελίας σε εποπτική αρχή. Στην Ελλάδα αυτή είναι η Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (dpa.gr).",
  },

  // 8. Changes
  pp_changes_title: { en: "8. Changes to this policy", el: "8. Αλλαγές στην παρούσα πολιτική" },
  pp_changes_body: {
    en: "If the way this website handles data changes, this page is updated and the date at the top changes with it. There is no mailing list to notify, so the current version here is always the one that applies.",
    el: "Αν αλλάξει ο τρόπος με τον οποίο αυτό το website χειρίζεται δεδομένα, η σελίδα αυτή ενημερώνεται και η ημερομηνία στην κορυφή αλλάζει αντίστοιχα. Δεν υπάρχει λίστα αποστολής για ειδοποιήσεις, οπότε η τρέχουσα έκδοση εδώ είναι πάντα αυτή που ισχύει.",
  },

  // 9. Contact
  pp_contact_title: { en: "9. Contact", el: "9. Επικοινωνία" },
  pp_contact_body: {
    en: "Questions about this policy, or about anything you've sent me, go to contact@manosbalotis.com.",
    el: "Ερωτήσεις σχετικά με την παρούσα πολιτική, ή με οτιδήποτε μου έχεις στείλει, στο contact@manosbalotis.com.",
  },

  pp_back: {
    en: "Back to home <span class=\"arrow\" aria-hidden=\"true\">→</span>",
    el: "Επιστροφή στην αρχική <span class=\"arrow\" aria-hidden=\"true\">→</span>",
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