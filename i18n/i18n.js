/* Forpets i18n loader — Stage 2
 *
 * Translations are inlined here so the file works when opened from file://
 * without a local server.  Stage 3: replace T with fetch(`i18n/${lang}.json`)
 * and keep only the JSON files as the source of truth.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'fp-lang';
  var RTL = { he: true, ar: true };

  /* ── translations ─────────────────────────────────────────────────────── */
  var T = {

    en: {
      page: { title: "Forpets Veterinary Clinic — Dabburiya" },
      nav: {
        services: "Services", hours: "Hours", location: "Location",
        ownerLogin: "Owner Login", bookAppointment: "Book Appointment",
        menuAriaLabel: "Menu"
      },
      hero: {
        eyebrow: "Dabburiya · Established 2009",
        headline: "Caring for the animals you love",
        sub: "Forpets Veterinary Clinic provides compassionate, expert care for your pets. From routine checkups to specialist consultations — we’re here for every chapter of their life.",
        ctaBook: "Book an Appointment", ctaPortal: "My Pet Portal",
        trustPetsTreated: "Pets treated", trustYearsOfCare: "Years of care",
        trustVeterinarians: "Veterinarians", imagePlaceholder: "Clinic photo"
      },
      services: {
        eyebrow: "Our Services",
        title: "Comprehensive care<br>under one roof",
        desc: "Every service at Forpets is designed around your pet’s comfort and your peace of mind.",
        general:     { name: "General Checkup",        desc: "Routine wellness exams, health screenings, dental checks, and preventative care plans tailored to your pet’s age and breed.",                                                                    tag: "Walk-in welcome" },
        vaccine:     { name: "Vaccine Appointments",   desc: "Core and lifestyle vaccinations for dogs and cats, including rabies, distemper, bordetella, and feline leukemia. Records kept in your pet portal.",                                                     tag: "Bookable online" },
        surgery:     { name: "Surgery Consultation",   desc: "Pre-surgical assessments, second opinions, and elective procedure planning. Our senior veterinarians walk you through every step of the process.",                                                      tag: "Bookable online" },
        diagnostics: { name: "Diagnostics &amp; Lab",  desc: "On-site blood panels, urinalysis, X-ray imaging, and ultrasound. Most results returned same-day for your peace of mind.",                                                                              tag: "Appointment required" },
        dental:      { name: "Dental Care",            desc: "Professional teeth cleaning, extractions, and oral health assessments. Poor dental health affects your pet’s overall wellbeing — we take it seriously.",                                          tag: "Appointment required" },
        emergency:   { name: "Emergency — Phone Only", desc: "For urgent after-hours emergencies, call us directly. We maintain an on-call line for registered patients of the clinic.",                                                                             tag: "Phone: +972-XX-XXX-XXXX" }
      },
      hours: {
        title: "Clinic Hours",
        days: { sunday: "Sunday", monday: "Monday", tuesday: "Tuesday", wednesday: "Wednesday", thursday: "Thursday", friday: "Friday", saturday: "Saturday" },
        closed: "Closed",
        emergency: "<strong>Emergencies after hours?</strong> Call our on-call line. Walk-in emergencies cannot be accommodated — please phone ahead so we can prepare."
      },
      location: {
        title: "Find Us in Dabburiya",
        addressDesc: "Dabburiya, Lower Galilee, Israel<br>Near the village center — look for the green cross sign.",
        phoneLabel: "Phone", emailLabel: "Email",
        mapPlaceholder: "Map placeholder — embed Google Maps here"
      },
      cta: { title: "Ready to book?", sub: "Create your pet’s profile and book your next visit in minutes.", book: "Book an Appointment", login: "Owner Login" },
      footer: { links: { services: "Services", portal: "Owner Portal", contact: "Contact" }, copy: "© 2026 Forpets Veterinary Clinic, Dabburiya" },

      login: {
        page: { title: "Login — Forpets Veterinary Clinic" },
        topbar: { back: "Back to clinic" },
        heading: "Welcome back",
        sub: "Forpets Veterinary Clinic — Dabburiya",
        tabOwner: "Pet Owner",
        tabStaff: "Clinic Staff",
        owner: {
          emailLabel: "Email address",
          emailPlaceholder: "you@example.com",
          passwordLabel: "Password",
          rememberMe: "Remember me",
          forgotPassword: "Forgot password?",
          submit: "Sign in to my portal",
          registerPrompt: "New to Forpets?",
          registerLink: "Register your account"
        },
        staff: {
          note: "<strong>Staff access only.</strong> Use your clinic-issued credentials. If you need access, contact the clinic administrator.",
          idLabel: "Staff ID or email",
          idPlaceholder: "staff.name@forpets-vet.com",
          passwordLabel: "Password",
          staySignedIn: "Stay signed in",
          forgotPassword: "Forgot password?",
          submit: "Sign in as staff"
        },
        proto: {
          label: "Prototype — go to screen",
          ownerDashboard: "Owner Dashboard",
          staffDashboard: "Staff Dashboard"
        }
      },

      booking: {
        page: { title: "Book Appointment — Forpets" },
        nav: { back: "Back to dashboard" },
        progress: { selectPet: "Select Pet", service: "Service", dateTime: "Date &amp; Time", confirm: "Confirm" },
        back: "← Back",
        continue: "Continue",
        step1: {
          heading: "Which pet is this for?",
          sub: "Select a pet from your registered animals, or add a new one.",
          lunaDesc: "Golden Retriever · Female · 3 years",
          lunaLastVisit: "Last visit: Sep 2023",
          zazaDesc: "Domestic Shorthair · Male · 5 years",
          zazaLastVisit: "Last visit: Jul 2026",
          addPetName: "Add a new pet",
          addPetDesc: "Register a new animal to your account"
        },
        step2: {
          heading: "What type of appointment?",
          sub: "Choose a service. For emergencies, please call us directly — we do not take emergency bookings online.",
          vaccineTitle: "Vaccine Appointment",
          vaccineDesc: "Core vaccinations, boosters, and rabies renewal. Records saved to your pet’s profile automatically.",
          vaccineMeta: "Typically 20–30 min · Online booking available",
          surgeryTitle: "Surgery Consultation",
          surgeryDesc: "Pre-operative assessment, second opinion, or elective surgery planning with our senior veterinarian.",
          surgeryMeta: "Typically 45–60 min · Online booking available",
          emergencyTitle: "Emergency — Phone Only",
          emergencyDesc: "Emergency cases cannot be booked online. Please call +972-XX-XXX-XXXX directly."
        },
        step3: {
          heading: "Choose a date and time",
          sub: "Available slots are shown in green. We’re open Sunday–Thursday and Saturday mornings.",
          preferredDate: "Preferred date",
          vetPreference: "Veterinarian preference",
          noPreference: "No preference",
          slotsNote: "Grey slots are already booked. Slots shown for Dr. Hana Khalil. Select to reserve."
        },
        step4: {
          heading: "Confirm your booking",
          sub: "Please review the details below. A confirmation will be sent to your email.",
          labelPet: "Pet", labelService: "Service", labelDate: "Date",
          labelTime: "Time", labelVet: "Veterinarian", labelClinic: "Clinic",
          clinicValue: "Forpets Veterinary Clinic, Dabburiya",
          vetValue: "Dr. Hana Khalil",
          cancellationNotice: "<strong>Cancellation policy:</strong> Please cancel or reschedule at least 24 hours before your appointment. For same-day changes, call the clinic directly.",
          confirmBtn: "Confirm Appointment"
        },
        success: {
          title: "You’re booked!",
          sub: "Your appointment has been confirmed. A reminder will be sent to your email 24 hours before.",
          backToDashboard: "Back to Dashboard",
          viewProfile: "View Luna’s Profile"
        }
      },

      ownerDash: {
        page: { title: "My Dashboard — Forpets" },
        nav: {
          dashboard: "Dashboard", myPets: "My Pets",
          bookAppointment: "Book Appointment", logOut: "Log out", menuAriaLabel: "Menu"
        },
        greeting: {
          label: "Friday, 11 September 2026",
          name: "Good morning, Samir",
          meta: "Forpets Veterinary Clinic · Dabburiya"
        },
        bookBtn: "+ Book Appointment",
        pets: {
          title: "Your Pets", seeAll: "See all →",
          statWeight: "Weight", statLastVisit: "Last visit",
          statLastVaccine: "Last vaccine", statMedications: "Medications",
          viewProfile: "View profile", addAnother: "Add another pet",
          speciesDog: "Dog", speciesCat: "Cat"
        },
        appointments: {
          title: "Upcoming Appointments", bookNew: "Book new →",
          thDateTime: "Date &amp; Time", thPet: "Pet",
          thService: "Service", thVet: "Veterinarian", thStatus: "Status",
          vaccineAppt: "Vaccine Appointment", surgeryConsult: "Surgery Consultation",
          statusConfirmed: "Confirmed", statusPending: "Pending", manage: "Manage"
        },
        activity: { title: "Recent Activity" }
      },

      staffDash: {
        page: { title: "Staff Dashboard — Forpets" },
        nav: { staffBadge: "Staff", signOut: "Sign out" },
        tabs: { today: "Today", calendar: "Calendar", timeOff: "Time Off", clients: "Clients" },
        today: {
          dateLabel: "Friday, 11 September 2026",
          heading: "Today’s Schedule",
          meta: "Forpets Veterinary Clinic · Dabburiya",
          cards: {
            appointments: "Appointments",   appointmentsSub: "3 remaining today",
            vaccines: "Vaccines",           vaccinesSub: "2 completed",
            consultations: "Consultations", consultationsSub: "1 in progress",
            vetsOnDuty: "Vets on duty",     vetsOnDutySub: "Khalil, Barakat, Nassar"
          },
          tableHeading: "Appointments — All Vets",
          thTime: "Time", thClient: "Client", thPet: "Pet",
          thService: "Service", thVet: "Veterinarian", thStatus: "Status",
          byVetHeading: "By Veterinarian",
          statusDone: "Completed", statusInProgress: "In progress",
          statusConfirmed: "Confirmed", statusPending: "Pending check-in",
          actionView: "View", actionPrepare: "Prepare", actionCheckIn: "Check in",
          serviceVaccine: "Vaccine", serviceSurgery: "Surgery Consult"
        },
        calendar: {
          title: "September 2026",
          dow: { sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat" }
        },
        timeOff: {
          heading: "Manage Time Off",
          formTitle: "Mark Unavailability",
          labelVet: "Veterinarian", labelFrom: "From date", labelTo: "To date",
          labelReason: "Reason (optional)", labelNotes: "Notes",
          notesPlaceholder: "e.g. Coverage arranged with Dr. Barakat",
          saveBtn: "Save Time Off",
          absencesTitle: "Upcoming Absences",
          removeBtn: "Remove",
          reasons: {
            annualLeave: "Annual leave", sickLeave: "Sick leave",
            conference: "Conference / training", personal: "Personal", other: "Other"
          }
        },
        clients: {
          searchPlaceholder: "Search clients by name or pet…",
          thClient: "Client", thPets: "Pets", thPhone: "Phone",
          thLastVisit: "Last visit", thNextAppt: "Next appointment",
          actionView: "View"
        }
      },

      petProfile: {
        page: { title: "Luna — Pet Profile · Forpets" },
        nav: {
          dashboard: "Dashboard", myPets: "My Pets",
          bookAppointment: "Book Appointment", logOut: "Log out"
        },
        breadcrumb: { dashboard: "Dashboard", myPets: "My Pets" },
        header: {
          breed: "Golden Retriever · Female · Born March 2023",
          attrAge: "Age", attrWeight: "Weight", attrColour: "Colour",
          attrMicrochip: "Microchip", attrOwner: "Owner",
          healthStatus: "Healthy — last seen Sep 2023",
          bookBtn: "Book Appointment", editBtn: "Edit Profile"
        },
        tabs: { vaccinations: "Vaccinations", medications: "Medications", weight: "Weight History", notes: "Vet Notes" },
        vaccinations: {
          thVaccine: "Vaccine", thDateGiven: "Date Given", thNextDue: "Next Due",
          thVet: "Veterinarian", thStatus: "Status",
          statusUpToDate: "Up to date",
          statusDue: "Due — please book",
          statusNotGiven: "Not yet given"
        },
        medications: {
          labelDose: "Dose:", labelFrequency: "Frequency:",
          labelPurpose: "Purpose:", labelPrescribedBy: "Prescribed by:",
          labelRefills: "Refills remaining:",
          statusActive: "Active", addMedication: "Add medication"
        },
        weight: {
          chartLabel: "Weight over time (kg)",
          healthyNote: "Healthy weight range for female Golden Retriever: 25–32 kg adult. Luna is growing on target."
        },
        notes: {
          placeholder: "Add a note for the vet (visible at your next appointment)…",
          saveNote: "Save Note"
        }
      },

      devMap: {
        page: { title: "Forpets Vet Clinic — Design Preview" },
        tagline: "Veterinary Clinic · Dabburiya · 6-Screen Design",
        meta: {
          designSystemLabel: "Design System", designSystemValue: "Warm Editorial",
          platformLabel: "Platform", platformValue: "Responsive Web"
        },
        tokens: {
          background: "Background", accent: "Accent", foreground: "Foreground",
          success: "Success", surfaceWarm: "Surface Warm",
          fontNote: "Georgia display · Inter body · 10–24px radius · No gradients"
        },
        screens: {
          openScreen: "Open screen",
          tagPublic: "Public", tagOwner: "Owner", tagStaff: "Staff only",
          s01: { num: "Screen 01", title: "Home / Landing",      desc: "Public page: hero headline, 6 service cards, clinic hours, location, dual CTAs for booking and login." },
          s02: { num: "Screen 02", title: "Login",               desc: "Tabbed login card: Pet Owner and Clinic Staff tabs. Working form routes to the correct dashboard." },
          s03: { num: "Screen 03", title: "Owner Dashboard",     desc: "Luna + Zaza pet cards, upcoming appointments table, recent activity feed. Links through to profiles." },
          s04: { num: "Screen 04", title: "Pet Profile — Luna",  desc: "4 tabs: vaccination history table, NexGard medication card, weight bar chart, tabbed vet notes." },
          s05: { num: "Screen 05", title: "Book Appointment",    desc: "4-step wizard: select pet → service (Vaccine or Surgery only, no emergency) → time slots → confirm." },
          s06: { num: "Screen 06", title: "Staff Dashboard",     desc: "4 tabs: today’s schedule by vet, monthly calendar, time-off form + roster, searchable client list." }
        }
      }
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

    /* page title — home.html uses this; other pages use data-i18n on <title> */
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

    /* placeholder attributes */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var val = get(strings, el.dataset.i18nPlaceholder);
      if (val !== undefined) el.setAttribute('placeholder', val);
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
