// js/app.js
import { GameViewModel, SupportViewModel } from "./viewModels.js";

// ---------- Shared footer year ----------

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

    "hero.badgeIdle": "Idle factory tycoon",
    "hero.badgeOffline": "Offline progress",
    "hero.badgeFair": "No pay‑to‑win",
    "hero.tagline": "Idle factory tycoon with real long-term progression.",
    "hero.shortDescription":
      "Build 9 machines, unlock 9 clothing tiers, prestige with Fashion Points and compete on global leaderboards.",
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

    "features.title": "Why you'll get addicted",
    "features.lead":
      "ZILDA Factory is built for people who love deep idle games – not just 5 minutes of tapping. Plan, optimize and prestige for massive rewards.",

    "steps.1.title": "Build your factory",
    "steps.1.text":
      "Unlock machines, upgrade them and keep your production lines flowing 24/7.",
    "steps.2.title": "Optimize & automate",
    "steps.2.text":
      "Balance costs, upgrade routes and timing boosts to squeeze every Fashion Point.",
    "steps.3.title": "Prestige & climb",
    "steps.3.text":
      "Reset for huge permanent bonuses and race other players on the leaderboards.",

    "progression.title": "Deep progression, not a 5-minute game",
    "progression.lead":
      "Costs grow super-exponential, and late‑game is all about timing your boosts, research and prestige loops. There is always another layer to unlock.",
    "progression.smartTitle": "Smart balancing",
    "progression.smartText":
      "Costs grow super-exponential. You won’t max everything in 5 minutes. Late-game focuses on planning and timing your boosts.",
    "progression.researchTitle": "Research & Shop",
    "progression.researchText":
      "Spend Fashion Points on permanent upgrades, time warps and cosmetics. No pay-to-win: skill and planning still matter.",
    "progression.leaderboardsTitle": "Leaderboards",
    "progression.leaderboardsText":
      "Firebase-powered online rankings. Compete on Fashion Points and see how your factory compares globally.",

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
    "faq.q1": "Is ZILDA Factory free?",
    "faq.a1":
      "Yes. The game is free to download. Optional in-game purchases are cosmetic or give small boosts.",
    "faq.q2": "Do I need an internet connection?",
    "faq.a2":
      "You can play offline. Online connection is needed only for leaderboards and cloud save.",
    "faq.q3": "Is my progress saved?",
    "faq.a3":
      "The game saves automatically on your device. If you choose, cloud save can sync across devices.",
    "faq.q4": "Is there any pay-to-win?",
    "faq.a4":
      "There are optional boosts, but the core progression is balanced for fair play. Skill and smart planning matter more than spending.",
    "faq.q5": "Which platforms are supported?",
    "faq.a5":
      "Right now ZILDA Factory is being prepared for Google Play on Android. Other platforms may follow later."
  },
  nl: {
    "nav.logo": "ZILDA Factory",
    "nav.home": "Home",
    "nav.gameplay": "Gameplay",
    "nav.progression": "Progressie",
    "nav.faq": "FAQ",
    "nav.support": "Support",
    "nav.privacy": "Privacy",

    "hero.badgeIdle": "Idle fabriek tycoon",
    "hero.badgeOffline": "Offline voortgang",
    "hero.badgeFair": "Geen pay‑to‑win",
    "hero.tagline": "Idle fabrieksspel met échte lange‑termijn progressie.",
    "hero.shortDescription":
      "Bouw 9 machines, ontgrendel 9 kleding‑tiers, prestige met Fashion Points en klim op het wereldwijde leaderboard.",
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

    "features.title": "Waarom je blijft doorspelen",
    "features.lead":
      "ZILDA Factory is gemaakt voor mensen die houden van diepe idle games – niet alleen 5 minuten tikken. Plan, optimaliseer en prestige voor gigantische beloningen.",

    "steps.1.title": "Bouw je fabriek",
    "steps.1.text":
      "Ontgrendel machines, upgrade alles en houd je productielijnen 24/7 draaiend.",
    "steps.2.title": "Optimaliseer & automatiseer",
    "steps.2.text":
      "Balans kosten, upgrade‑routes en timing van boosts om elke Fashion Point eruit te persen.",
    "steps.3.title": "Prestige & klim",
    "steps.3.text":
      "Reset voor enorme permanente bonussen en race tegen andere spelers op de leaderboards.",

    "progression.title": "Diepe progressie, geen 5‑minuten spelletje",
    "progression.lead":
      "Kosten groeien super‑exponentieel en in de late game draait alles om het timen van boosts, research en prestige‑loops. Er is altijd nog een laag om vrij te spelen.",
    "progression.smartTitle": "Slimme balans",
    "progression.smartText":
      "Kosten stijgen super‑exponentieel. Je hebt niet alles in 5 minuten gemaxed. In de late game draait het om plannen en het timen van boosts.",
    "progression.researchTitle": "Research & Shop",
    "progression.researchText":
      "Gebruik Fashion Points voor permanente upgrades, time warps en cosmetics. Geen pay‑to‑win: slimme keuzes blijven belangrijk.",
    "progression.leaderboardsTitle": "Leaderboards",
    "progression.leaderboardsText":
      "Firebase‑powered online rankings. Vergelijk je fabriek wereldwijd op Fashion Points.",

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
    "faq.q1": "Is ZILDA Factory gratis?",
    "faq.a1":
      "Ja. De game is gratis te downloaden. Optionele in‑game aankopen zijn cosmetisch of geven kleine boosts.",
    "faq.q2": "Heb ik een internetverbinding nodig?",
    "faq.a2":
      "Je kunt offline spelen. Internet is alleen nodig voor leaderboards en cloud saves.",
    "faq.q3": "Wordt mijn voortgang opgeslagen?",
    "faq.a3":
      "De game slaat automatisch op je apparaat op. Met cloud save kun je, als je dat kiest, tussen apparaten syncen.",
    "faq.q4": "Is er pay‑to‑win?",
    "faq.a4":
      "Er zijn optionele boosts, maar de kernprogressie is gebalanceerd voor eerlijke gameplay. Slimme keuzes zijn belangrijker dan geld uitgeven.",
    "faq.q5": "Welke platformen worden ondersteund?",
    "faq.a5":
      "ZILDA Factory wordt op dit moment voorbereid voor Google Play op Android. Andere platformen kunnen later volgen."
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
      btn.classList.toggle("is-active", btn.dataset.lang === defaultLang)
    );

  langSwitch.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-btn");
    if (!btn) return;
    const lang = btn.dataset.lang || "en";
    localStorage.setItem("zilda_lang", lang);
    applyTranslations(lang);

    langSwitch
      .querySelectorAll(".lang-btn")
      .forEach((b) => b.classList.toggle("is-active", b === btn));
  });
}

// ---------- Theme toggle ----------

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.textContent = theme === "light" ? "☀" : "☾";
  }
}

function setupThemeToggle() {
  const stored = localStorage.getItem("zilda_theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored || (prefersDark ? "dark" : "dark");
  applyTheme(initial);

  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem("zilda_theme", next);
    applyTheme(next);
  });
}

// ---------- Scroll reveal ----------

function setupRevealOnScroll() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!("IntersectionObserver" in window) || !elements.length) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
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

const appRoot = document.getElementById("app");
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
      const card = document.createElement("article");
      card.className = "card";
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

// ---------- Init shared UI ----------

setupLanguageSwitch();
setupThemeToggle();
setupRevealOnScroll();
setupTrailerModal();
