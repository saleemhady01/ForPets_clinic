/* Forpets i18n loader — Stage 1
 *
 * Translations are inlined here so the file works when opened from file://
 * without a local server.  Stage 2: replace T with fetch(`i18n/${lang}.json`)
 * and keep only the JSON files as the source of truth.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'fp-lang';
  var RTL = { he: true, ar: true };

  /* ── translations ─────────────────────────────────────────────────────── */
  var T = {

    en: {
      page: { title: 'Forpets Veterinary Clinic — Dabburiya' },
      nav: {
        services: 'Services', hours: 'Hours', location: 'Location',
        ownerLogin: 'Owner Login', bookAppointment: 'Book Appointment',
        menuAriaLabel: 'Menu'
      },
      hero: {
        eyebrow: 'Dabburiya · Established 2009',
        headline: 'Caring for the animals you love',
        sub: 'Forpets Veterinary Clinic provides compassionate, expert care for your pets. From routine checkups to specialist consultations — we’re here for every chapter of their life.',
        ctaBook: 'Book an Appointment', ctaPortal: 'My Pet Portal',
        trustPetsTreated: 'Pets treated', trustYearsOfCare: 'Years of care',
        trustVeterinarians: 'Veterinarians', imagePlaceholder: 'Clinic photo'
      },
      services: {
        eyebrow: 'Our Services',
        title: 'Comprehensive care<br>under one roof',
        desc: 'Every service at Forpets is designed around your pet’s comfort and your peace of mind.',
        general:     { name: 'General Checkup',         desc: 'Routine wellness exams, health screenings, dental checks, and preventative care plans tailored to your pet’s age and breed.',                                                                        tag: 'Walk-in welcome' },
        vaccine:     { name: 'Vaccine Appointments',    desc: 'Core and lifestyle vaccinations for dogs and cats, including rabies, distemper, bordetella, and feline leukemia. Records kept in your pet portal.',                                                     tag: 'Bookable online' },
        surgery:     { name: 'Surgery Consultation',    desc: 'Pre-surgical assessments, second opinions, and elective procedure planning. Our senior veterinarians walk you through every step of the process.',                                                       tag: 'Bookable online' },
        diagnostics: { name: 'Diagnostics &amp; Lab',   desc: 'On-site blood panels, urinalysis, X-ray imaging, and ultrasound. Most results returned same-day for your peace of mind.',                                                                               tag: 'Appointment required' },
        dental:      { name: 'Dental Care',             desc: 'Professional teeth cleaning, extractions, and oral health assessments. Poor dental health affects your pet’s overall wellbeing — we take it seriously.',                                       tag: 'Appointment required' },
        emergency:   { name: 'Emergency — Phone Only', desc: 'For urgent after-hours emergencies, call us directly. We maintain an on-call line for registered patients of the clinic.',                                                                           tag: 'Phone: +972-XX-XXX-XXXX' }
      },
      hours: {
        title: 'Clinic Hours',
        days: { sunday: 'Sunday', monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday' },
        closed: 'Closed',
        emergency: '<strong>Emergencies after hours?</strong> Call our on-call line. Walk-in emergencies cannot be accommodated — please phone ahead so we can prepare.'
      },
      location: {
        title: 'Find Us in Dabburiya',
        addressDesc: 'Dabburiya, Lower Galilee, Israel<br>Near the village center — look for the green cross sign.',
        phoneLabel: 'Phone', emailLabel: 'Email',
        mapPlaceholder: 'Map placeholder — embed Google Maps here'
      },
      cta: { title: 'Ready to book?', sub: 'Create your pet’s profile and book your next visit in minutes.', book: 'Book an Appointment', login: 'Owner Login' },
      footer: { links: { services: 'Services', portal: 'Owner Portal', contact: 'Contact' }, copy: '© 2026 Forpets Veterinary Clinic, Dabburiya' }
    },

    /* ── Hebrew placeholder (same text as English until translated) ─────── */
    he: null,

    /* ── Arabic placeholder (same text as English until translated) ─────── */
    ar: null

  };

  /* he and ar inherit all English strings until real translations are added */
  T.he = JSON.parse(JSON.stringify(T.en));
  T.ar = JSON.parse(JSON.stringify(T.en));

  /* ── helpers ──────────────────────────────────────────────────────────── */
  function get(obj, path) {
    return path.split('.').reduce(function (o, k) { return o && o[k]; }, obj);
  }

  /* ── apply ────────────────────────────────────────────────────────────── */
  function apply(lang) {
    if (!T[lang]) lang = 'en';
    var strings = T[lang];

    /* page title */
    if (strings.page && strings.page.title) document.title = strings.page.title;

    /* text / html nodes */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = get(strings, el.dataset.i18n);
      if (val !== undefined) el.innerHTML = val;
    });

    /* aria-label attributes */
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var val = get(strings, el.dataset.i18nAria);
      if (val !== undefined) el.setAttribute('aria-label', val);
    });

    /* direction + lang on <html> */
    document.documentElement.lang = lang;
    document.documentElement.dir  = RTL[lang] ? 'rtl' : 'ltr';

    /* mark active toggle button(s) */
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  /* ── init ─────────────────────────────────────────────────────────────── */
  function init() {
    var saved = localStorage.getItem(STORAGE_KEY) || 'en';
    apply(saved);

    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () { apply(btn.dataset.lang); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
