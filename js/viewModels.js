// js/viewModels.js
import { GameInfoModel, SupportModel } from "./models.js";

export class GameViewModel {
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

export class SupportViewModel {
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


