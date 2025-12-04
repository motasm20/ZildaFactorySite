// js/app.js
import { GameViewModel, SupportViewModel } from "./viewModels.js";

const yearSpans = document.querySelectorAll("#year");
yearSpans.forEach((el) => (el.textContent = new Date().getFullYear()));

// ---------- INDEX: game landing page ----------

const appRoot = document.getElementById("app");
if (appRoot) {
  const vm = new GameViewModel();

  // simpele data-binding
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
  bindText('[data-bind="text: gameShortDescription"]', vm.gameShortDescription);
  bindText('[data-bind="text: machineCount"]', vm.machineCount);
  bindText('[data-bind="text: clothingTierCount"]', vm.clothingTierCount);
  bindHref('[data-bind="href: playStoreUrl"]', vm.playStoreUrl);

  // screenshots
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


