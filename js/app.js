// js/app.js

// ---------- Models ----------

class GameInfoModel {
  constructor() {
    this.title = "ZILDA Factory";
    this.tagline = "Build. Automate. Dominate.";
    this.shortDescription =
      "The ultimate factory simulation. Scale your production to infinity and compete globally.";
    this.playStoreUrl = "#"; // later: officiële Play Store link
    this.machineCount = 9;
    this.clothingTierCount = 9;

    this.screenshots = [
      "media/screen1.png",
      "media/screen2.png",
      "media/screen3.png"
    ];

    this.features = [
      {
        title: "Balanced idle gameplay",
        description:
          "Super-exponential costs prevent early soft-caps. Your choices matter deep into late game."
      },
      {
        title: "Shop & Research",
        description:
          "Use Fashion Points on permanent upgrades, cosmetics and powerful – but limited – time warps."
      },
      {
        title: "Events & Contracts",
        description:
          "Limited time challenges that reward unique bonuses and skins for your machines."
      },
      {
        title: "Online leaderboards",
        description:
          "Integrated with Google Play Games Services for scores, achievements and player IDs."
      }
    ];
  }
}

class SupportModel {
  constructor() {
    this.supportEmail = "zildagames2025@gmail.com";
  }
}

// ---------- ViewModels ----------

class GameViewModel {
  constructor() {
    this.model = new GameInfoModel();
  }

  get gameTitle() {
    return this.model.title;
  }

  get gameTagline() {
    return this.model.tagline;
  }

  get gameShortDescription() {
    return this.model.shortDescription;
  }

  get playStoreUrl() {
    return this.model.playStoreUrl;
  }

  get machineCount() {
    return this.model.machineCount;
  }

  get clothingTierCount() {
    return this.model.clothingTierCount;
  }

  get screenshots() {
    return this.model.screenshots;
  }

  get features() {
    return this.model.features;
  }
}

class SupportViewModel {
  constructor() {
    this.model = new SupportModel();
  }

  buildMailto({ email, device, type, message }) {
    const subject = encodeURIComponent(`ZILDA Factory Support – ${type}`);
    const body = encodeURIComponent(
      `E-mail: ${email}\nDevice: ${device}\nType: ${type}\n\nDescription:\n${message}\n\n---\nSent from ZILDA Factory support page`
    );
    return `mailto:${this.model.supportEmail}?subject=${subject}&body=${body}`;
  }
}

// ---------- Shared layout & footer year ----------

if (typeof renderLayout === "function") {
  renderLayout();
}

const yearSpans = document.querySelectorAll("#year");
yearSpans.forEach((el) => (el.textContent = new Date().getFullYear()));

// ---------- Simple i18n (EN / NL) ----------

const I18N = {
  en: {
    "nav.logo": "ZILDA Factory",
    "nav.home": "Home",
    "nav.gameplay": "Gameplay",
    "nav.progression": "Progression",
    "nav.faq": "FAQ",
    "nav.support": "Support",
    "nav.privacy": "Privacy",
    "nav.about": "About",
    "nav.roadmap": "Roadmap",

    "hero.badgeIdle": "Idle factory tycoon",
    "hero.badgeOffline": "Offline progress",
    "hero.badgeFair": "No pay‑to‑win",
    "hero.tagline": "Build. Automate. Dominate.",
    "hero.shortDescription":
      "The ultimate factory simulation. Scale your production to infinity and compete globally.",
    "hero.designedFor": "Designed for long‑term idle players",
    "hero.playtimeLabel": "Playtime potential",
    "hero.playtimeValue": "100+ hours",
    "hero.playstyleLabel": "Playstyle",
    "hero.playstyleValue": "Relaxed · Strategic · Offline‑friendly",
    "hero.machinesLabel": "Machines",
    "hero.tiersLabel": "Clothing tiers",
    "hero.prestigeLabel": "Prestige currency",
    "hero.ctaStore": "Get it on Google Play",
    "hero.ctaTrailer": "Watch trailer",
    "hero.screenshotsLabel": "Actual in-game screenshots",
    "hero.note": "UI and balancing are still being tuned – feedback is welcome!",

    "features.title": "Engineered for Depth",
    "features.lead":
      "Forget shallow clickers. ZILDA Factory offers deep strategic layers, complex optimization, and rewarding progression.",

    "steps.1.title": "Build your factory",
    "steps.1.text":
      "Unlock machines, upgrade them and keep your production lines flowing 24/7.",
    "steps.2.title": "Optimize & automate",
    "steps.2.text":
      "Balance costs, upgrade routes and timing boosts to squeeze every Fashion Point.",
    "steps.3.title": "Prestige & climb",
    "steps.3.text":
      "Reset for huge permanent bonuses and race other players on the leaderboards.",

    "progression.title": "Infinite Scalability",
    "progression.lead":
      "Costs grow super-exponentially. Every decision matters. Time your boosts, optimize your layout, and prestige to unlock massive multipliers.",
    "progression.smartTitle": "Smart balancing",
    "progression.smartText":
      "Designed for long-term play. No hitting a wall in 2 days.",
    "progression.researchTitle": "Deep Research",
    "progression.researchText":
      "Unlock permanent upgrades and specialized technologies.",
    "progression.leaderboardsTitle": "Global Leaderboards",
    "progression.leaderboardsText":
      "Compete with players worldwide. Real-time rankings powered by Firebase. Can you reach the top 1%?",

    "meta.playPaceTitle": "Play at your own pace",
    "meta.playPaceText":
      "Log in a few times a day or min‑max every second – the game supports both playstyles.",
    "meta.newPlayersTitle": "Friendly to new idle players",
    "meta.newPlayersText":
      "Tooltips and clear numbers help you understand what each upgrade does.",
    "meta.soloDevTitle": "Made by a solo dev",
    "meta.soloDevText":
      "Your feedback directly shapes future updates, events and balancing tweaks.",

    "faq.title": "FAQ",
    "faq.q1": "Is it free?",
    "faq.a1":
      "Yes, 100% free to play. Optional cosmetics only.",
    "faq.q2": "Offline play?",
    "faq.a2":
      "Yes, your factory runs 24/7 even when you're offline.",
    "faq.q3": "Is my progress saved?",
    "faq.a3":
      "The game saves automatically on your device. If you choose, cloud save can sync across devices.",
    "faq.q4": "Pay to win?",
    "faq.a4":
      "Never. Strategy always beats wallet.",
    "faq.q5": "Platforms?",
    "faq.a5":
      "Android first. iOS coming soon.",

    "support.title": "Support",
    "support.intro": "Experiencing a bug, balance issue or payment problem? Use the form below – it opens your e-mail app with all info filled in.",
    "support.emailLabel": "Your e-mail",
    "support.deviceLabel": "Device & model",
    "support.typeLabel": "Issue type",
    "support.type.bug": "Bug / Crash",
    "support.type.balance": "Balance / Progression",
    "support.type.billing": "Billing / Purchase",
    "support.type.suggestion": "Suggestion / Feedback",
    "support.type.other": "Other",
    "support.messageLabel": "Description",
    "support.submit": "Send Support E-mail"
  },
  nl: {
    "nav.logo": "ZILDA Factory",
    "nav.home": "Home",
    "nav.gameplay": "Gameplay",
    "nav.progression": "Progressie",
    "nav.faq": "FAQ",
    "nav.support": "Support",
    "nav.privacy": "Privacy",
    "nav.about": "Over",
    "nav.roadmap": "Roadmap",

    "hero.badgeIdle": "Idle fabriek tycoon",
    "hero.badgeOffline": "Offline voortgang",
    "hero.badgeFair": "Geen pay‑to‑win",
    "hero.tagline": "Bouw. Automatiseer. Heers.",
    "hero.shortDescription":
      "De ultieme fabriekssimulatie. Schaal je productie naar oneindig en concurreer wereldwijd.",
    "hero.designedFor": "Gemaakt voor spelers die van diepe idle games houden",
    "hero.playtimeLabel": "Speeltijd potentieel",
    "hero.playtimeValue": "100+ uur",
    "hero.playstyleLabel": "Speelstijl",
    "hero.playstyleValue": "Relaxed · Strategisch · Offline‑vriendelijk",
    "hero.machinesLabel": "Machines",
    "hero.tiersLabel": "Kleding‑tiers",
    "hero.prestigeLabel": "Prestige‑valuta",
    "hero.ctaStore": "Download op Google Play",
    "hero.ctaTrailer": "Bekijk trailer",
    "hero.screenshotsLabel": "Echte in‑game screenshots",
    "hero.note":
      "UI en balans worden nog verder getuned – jouw feedback is super welkom!",

    "features.title": "Ontworpen voor Diepgang",
    "features.lead":
      "Vergeet oppervlakkige clickers. ZILDA Factory biedt diepe strategische lagen, complexe optimalisatie en belonende progressie.",

    "steps.1.title": "Bouw je fabriek",
    "steps.1.text":
      "Ontgrendel machines, upgrade alles en houd je productielijnen 24/7 draaiend.",
    "steps.2.title": "Optimaliseer & automatiseer",
    "steps.2.text":
      "Balans kosten, upgrade‑routes en timing van boosts om elke Fashion Point eruit te persen.",
    "steps.3.title": "Prestige & klim",
    "steps.3.text":
      "Reset voor enorme permanente bonussen en race tegen andere spelers op de leaderboards.",

    "progression.title": "Oneindige Schaalbaarheid",
    "progression.lead":
      "Kosten groeien super‑exponentieel. Elke beslissing telt. Time je boosts, optimaliseer je layout en prestige voor enorme multipliers.",
    "progression.smartTitle": "Slimme balans",
    "progression.smartText":
      "Ontworpen voor lange termijn. Geen muur na 2 dagen.",
    "progression.researchTitle": "Diepe Research",
    "progression.researchText":
      "Ontgrendel permanente upgrades en gespecialiseerde technologieën.",
    "progression.leaderboardsTitle": "Wereldwijde Leaderboards",
    "progression.leaderboardsText":
      "Concurreer met spelers wereldwijd. Real-time rankings via Firebase. Haal jij de top 1%?",

    "support.title": "Ondersteuning",
    "support.intro": "Heb je een bug, balansprobleem of betalingsprobleem? Gebruik het formulier hieronder – het opent je e-mail app met alle info ingevuld.",
    "support.emailLabel": "Jouw e-mail",
    "support.deviceLabel": "Toestel & model",
    "support.typeLabel": "Type probleem",
    "support.type.bug": "Bug / Crash",
    "support.type.balance": "Balans / Progressie",
    "support.type.billing": "Betaling / Aankoop",
    "support.type.suggestion": "Suggestie / Feedback",
    "support.type.other": "Anders",
    "support.messageLabel": "Beschrijving",
    "support.submit": "Verstuur Support E-mail",

    "meta.playPaceTitle": "Speel in je eigen tempo",
    "meta.playPaceText":
      "Log een paar keer per dag in of min‑max elke seconde – het spel ondersteunt beide speelstijlen.",
    "meta.newPlayersTitle": "Vriendelijk voor nieuwe idle spelers",
    "meta.newPlayersText":
      "Tooltips en duidelijke cijfers laten je zien wat elke upgrade doet.",
    "meta.soloDevTitle": "Gemaakt door één ontwikkelaar",
    "meta.soloDevText":
      "Jouw feedback bepaalt direct toekomstige updates, events en balans‑aanpassingen.",

    "faq.title": "FAQ",
    "faq.q1": "Is het gratis?",
    "faq.a1":
      "Ja, 100% gratis te spelen. Alleen optionele cosmetica.",
    "faq.q2": "Offline spelen?",
    "faq.a2":
      "Ja, je fabriek draait 24/7 door, ook als je offline bent.",
    "faq.q3": "Wordt mijn voortgang opgeslagen?",
    "faq.a3":
      "De game slaat automatisch op je apparaat op. Met cloud save kun je, als je dat kiest, tussen apparaten syncen.",
    "faq.q4": "Pay to win?",
    "faq.a4":
      "Nooit. Strategie wint altijd van de portemonnee.",
    "faq.q5": "Platformen?",
    "faq.a5":
      "Eerst Android. iOS volgt binnenkort."
  }
};

function applyTranslations(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value) {
      el.textContent = value;
    }
  });
}

function setupLanguageSwitch() {
  const stored = localStorage.getItem("zilda_lang");
  const navLang = (navigator.language || "").toLowerCase().startsWith("nl")
    ? "nl"
    : "en";
  const defaultLang = stored || navLang;

  applyTranslations(defaultLang);

  const langSwitch = document.getElementById("langSwitch");
  if (!langSwitch) return;

  langSwitch
    .querySelectorAll(".lang-btn")
    .forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.lang === defaultLang)
    );

  langSwitch.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-btn");
    if (!btn) return;
    const lang = btn.dataset.lang || "en";
    localStorage.setItem("zilda_lang", lang);
    applyTranslations(lang);

    langSwitch
      .querySelectorAll(".lang-btn")
      .forEach((b) => b.classList.toggle("active", b === btn));
  });
}

// ---------- Scroll reveal ----------

function setupRevealOnScroll() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !elements.length) {
    elements.forEach((el) => el.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

// ---------- Trailer modal ----------

function setupTrailerModal() {
  const modal = document.getElementById("videoModal");
  const videoEmbed = document.getElementById("videoEmbed");
  if (!modal || !videoEmbed) return;

  const openButtons = document.querySelectorAll('[data-action="toggleVideo"]');
  const closeTargets = modal.querySelectorAll('[data-action="closeModal"]');

  const close = () => {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    const iframe = videoEmbed.querySelector("iframe");
    if (iframe) iframe.remove();
  };

  const open = () => {
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");

    const videoId = videoEmbed.dataset.videoId;
    if (videoId && !videoEmbed.querySelector("iframe")) {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      videoEmbed.innerHTML = "";
      videoEmbed.appendChild(iframe);
    }
  };

  openButtons.forEach((btn) => btn.addEventListener("click", open));
  closeTargets.forEach((btn) => btn.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      close();
    }
  });
}

// ---------- INDEX: game landing page ----------

// Use document.body as root since we removed #app
const appRoot = document.body;
if (appRoot) {
  const vm = new GameViewModel();

  function bindText(selector, value) {
    const el = appRoot.querySelector(selector);
    if (el) el.textContent = value;
  }

  function bindHref(selector, value) {
    const el = appRoot.querySelector(selector);
    if (el) el.setAttribute("href", value);
  }

  bindText('[data-bind="text: gameTitle"]', vm.gameTitle);
  bindText('[data-bind="text: gameTagline"]', vm.gameTagline);
  bindText(
    '[data-bind="text: gameShortDescription"]',
    vm.gameShortDescription
  );
  bindText('[data-bind="text: machineCount"]', vm.machineCount);
  bindText('[data-bind="text: clothingTierCount"]', vm.clothingTierCount);
  bindHref('[data-bind="href: playStoreUrl"]', vm.playStoreUrl);

  // screenshots carousel
  const carousel = document.getElementById("screenCarousel");
  if (carousel && vm.screenshots.length) {
    vm.screenshots.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `ZILDA Factory screenshot ${i + 1}`;
      img.className = "screen-content"; // Add class for styling
      if (i !== 0) img.style.display = "none";
      carousel.appendChild(img);
    });

    let index = 0;
    setInterval(() => {
      const imgs = carousel.querySelectorAll("img");
      if (imgs.length < 2) return;
      imgs[index].style.display = "none";
      index = (index + 1) % imgs.length;
      imgs[index].style.display = "block";
    }, 3000);
  }

  // feature cards
  const featureList = document.getElementById("featureList");
  if (featureList) {
    vm.features.forEach((f) => {
      const card = document.createElement("div");
      card.className = "glass-panel"; // Updated class
      card.innerHTML = `<h3>${f.title}</h3><p>${f.description}</p>`;
      featureList.appendChild(card);
    });
  }
}

// ---------- SUPPORT: mailto form ----------

const supportForm = document.getElementById("supportForm");
if (supportForm) {
  const svm = new SupportViewModel();
  const status = document.getElementById("supportStatus");

  supportForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("supEmail").value.trim();
    const device = document.getElementById("supDevice").value.trim();
    const type = document.getElementById("supType").value;
    const message = document.getElementById("supMessage").value.trim();

    const mailto = svm.buildMailto({ email, device, type, message });
    window.location.href = mailto;

    if (status) {
      status.textContent = "Opening your e-mail app…";
      setTimeout(() => (status.textContent = ""), 3000);
    }
  });
}

// ---------- 3D Tilt Effect ----------

function setupTiltEffect() {
  // Disable on touch devices to prevent "sticking"
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const panels = document.querySelectorAll(".glass-panel");

  panels.forEach((panel) => {
    panel.addEventListener("mousemove", (e) => {
      const rect = panel.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
      const rotateY = ((x - centerX) / centerX) * 5;

      panel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    panel.addEventListener("mouseleave", () => {
      panel.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    });
  });
}

// ---------- Typing Effect ----------

function setupTypingEffect() {
  const tagline = document.querySelector('[data-bind="text: gameTagline"]');
  if (!tagline) return;

  const text = tagline.textContent;
  tagline.textContent = "";
  tagline.classList.add("typing-cursor");

  let i = 0;
  const speed = 50; // ms per char

  function type() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Keep cursor blinking for a bit then remove? Or keep it forever.
      // Let's keep it forever for that terminal feel.
    }
  }

  // Start typing after a small delay
  setTimeout(type, 500);
}

// ---------- Init shared UI ----------

setupLanguageSwitch();
setupRevealOnScroll();
setupTrailerModal();
setupTiltEffect();
setupTypingEffect();



