/**
 * SoloSwim sale / actie-korting.
 *
 * - sitewidePercent: % op alle artikelen
 * - productPercents: % per product_id (zoals in /products/*.md)
 * - Per artikel geldt de HOOGSTE van sitewide vs product — geen stacking.
 * - Stripe promotion codes blijven apart beschikbaar bij checkout.
 *
 * Na wijziging: image opnieuw bouwen en deployen (SSG + checkout lezen deze config).
 */
const saleConfig = {
  enabled: false,
  /** Optionele bannertekst in de header (leeg = geen banner) */
  label: "",
  /** Site-wide korting in procent (0–100) */
  sitewidePercent: 0,
  /**
   * Product-specifieke korting, keyed op product_id.
   * Voorbeeld: { BCK1: 20, BCT1: 15 }
   */
  productPercents: {
    // BCK1: 20,
  },
};

module.exports = saleConfig;
