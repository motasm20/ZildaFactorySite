// js/models.js

export class GameInfoModel {
  constructor() {
    this.title = "ZILDA Factory";
    this.tagline = "Idle factory tycoon with real long-term progression.";
    this.shortDescription =
      "Build 9 machines, unlock 9 clothing tiers, prestige with Fashion Points and compete on global leaderboards.";
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

export class SupportModel {
  constructor() {
    this.supportEmail = "support@zildagames.com"; // kun je zelf aanpassen
  }
}


