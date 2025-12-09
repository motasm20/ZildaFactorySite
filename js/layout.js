// js/layout.js
// Renders shared navigation and footer so updates are made in one place.

function resolveActive() {
  const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (file.includes("support")) return "support";
  if (file.includes("privacy")) return "privacy";
  if (file.includes("roadmap")) return "roadmap";
  if (file.includes("about")) return "about";
  if (file.includes("account-deletion")) return "account";
  return "home";
}

function renderLayout({ active } = {}) {
  const current = active || resolveActive();
  const navTarget = document.getElementById("site-nav");
  if (navTarget) {
    navTarget.innerHTML = `
      <nav class="navbar" id="navbar">
        <div class="container nav-container">
          <a href="index.html" class="logo" data-i18n="nav.logo">ZILDA <span>FACTORY</span></a>
          <div class="nav-links">
            <a href="index.html" class="nav-link ${current === "home" ? "active" : ""}" data-i18n="nav.home">Home</a>
            <a href="index.html#features" class="nav-link" data-i18n="nav.gameplay">Gameplay</a>
            <a href="index.html#progression" class="nav-link" data-i18n="nav.progression">Progression</a>
            <a href="index.html#faq" class="nav-link" data-i18n="nav.faq">FAQ</a>
            <a href="about.html" class="nav-link ${current === "about" ? "active" : ""}" data-i18n="nav.about">About</a>
            <a href="roadmap.html" class="nav-link ${current === "roadmap" ? "active" : ""}" data-i18n="nav.roadmap">Roadmap</a>
            <a href="support.html" class="nav-link ${current === "support" ? "active" : ""}" data-i18n="nav.support">Support</a>
            <a href="privacy.html" class="nav-link ${current === "privacy" ? "active" : ""}" data-i18n="nav.privacy">Privacy</a>
            <div class="lang-switch" id="langSwitch">
              <button class="lang-btn active" data-lang="en">EN</button>
              <button class="lang-btn" data-lang="nl">NL</button>
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  const footerTarget = document.getElementById("site-footer");
  if (footerTarget) {
    footerTarget.innerHTML = `
      <footer class="footer">
        <div class="container footer-content">
          <div class="logo" style="font-size: 1.2rem;">ZILDA <span>FACTORY</span></div>
          <div class="footer-links">
            <a href="privacy.html" data-i18n="nav.privacy">Privacy Policy</a>
            <a href="support.html" data-i18n="nav.support">Support</a>
            <a href="roadmap.html">Roadmap</a>
            <a href="account-deletion.html">Account deletion</a>
            <span style="color: var(--text-muted);">© <span id="year"></span> ZILDA Games</span>
          </div>
        </div>
      </footer>
    `;
  }
}


