/* Forpets i18n loader — Stage 3
 *
 * Fetches i18n/<lang>.json so the JSON files are the single source of truth.
 * IMPORTANT: fetch() is blocked by file:// origins. Run the project through a
 * local HTTP server:
 *   • VS Code Live Server extension — right-click any .html → "Open with Live Server"
 *     (default URL: http://127.0.0.1:5500)
 *   • npx serve .   (then open http://localhost:3000)
 *   • python -m http.server 8080   (then open http://localhost:8080)
 */
(function () {
  'use strict';

  /* ── appointment duration ──────────────────────────────────────────────
   * Change this single value and every displayed duration updates.
   * The {dur} token in en/he/ar.json is replaced at render time.        */
  var APPT_DURATION = 20; // minutes
  window.APPT_DURATION = APPT_DURATION;

  /* ── constants ─────────────────────────────────────────────────────── */
  var STORAGE_KEY = 'fp-lang';
  var RTL = { he: true, ar: true };

  /* ── helpers ───────────────────────────────────────────────────────── */
  function get(obj, path) {
    return path.split('.').reduce(function (o, k) { return o && o[k]; }, obj);
  }

  /* ── apply ─────────────────────────────────────────────────────────── */
  function apply(strings, lang) {
    if (!strings) return;

    /* page title — home.html sets this; other pages rely on data-i18n on <title> */
    if (strings.page && strings.page.title) document.title = strings.page.title;

    /* text / HTML nodes — {dur} token replaced with APPT_DURATION */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = get(strings, el.dataset.i18n);
      if (val !== undefined) el.innerHTML = String(val).replace(/\{dur\}/g, APPT_DURATION);
    });

    /* aria-label attributes */
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var val = get(strings, el.dataset.i18nAria);
      if (val !== undefined) el.setAttribute('aria-label', val);
    });

    /* placeholder attributes */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var val = get(strings, el.dataset.i18nPlaceholder);
      if (val !== undefined) el.setAttribute('placeholder', val);
    });

    /* appointment duration elements — set to APPT_DURATION + " min" */
    document.querySelectorAll('[data-appt-duration]').forEach(function (el) {
      el.textContent = APPT_DURATION + ' min';
    });

    /* direction + lang attribute on <html> */
    document.documentElement.lang = lang;
    document.documentElement.dir  = RTL[lang] ? 'rtl' : 'ltr';

    /* mark active toggle button */
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  /* ── init ──────────────────────────────────────────────────────────── */
  function init() {
    var lang = localStorage.getItem(STORAGE_KEY) || 'en';

    fetch('i18n/' + lang + '.json')
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (strings) {
        apply(strings, lang);
      })
      .catch(function () {
        if (lang !== 'en') {
          fetch('i18n/en.json')
            .then(function (r) { return r.json(); })
            .then(function (strings) { apply(strings, 'en'); });
        }
      });

    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        localStorage.setItem(STORAGE_KEY, btn.dataset.lang);
        location.reload();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
