const saleConfig = require("../config/sale");

function clampPercent(value) {
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return 0;
  return Math.min(100, Math.round(n));
}

/**
 * Highest of site-wide vs product-specific percent. Never stacked.
 */
function getEffectivePercent(productId, sale = saleConfig) {
  if (!sale?.enabled) return 0;

  const sitewide = clampPercent(sale.sitewidePercent);
  const byProduct = clampPercent(
    productId != null ? sale.productPercents?.[productId] : 0
  );

  return Math.max(sitewide, byProduct);
}

function roundMoney(amount) {
  return Math.round(Number(amount) * 100) / 100;
}

/**
 * Apply sale to a list price.
 * @returns {{ price: number, oldPrice: number|null, discountPercent: number, listPrice: number }}
 */
function applySaleToPrice(listPrice, productId, sale = saleConfig) {
  const original = roundMoney(listPrice);
  const discountPercent = getEffectivePercent(productId, sale);

  if (!discountPercent || !original) {
    return {
      price: original,
      oldPrice: null,
      discountPercent: 0,
      listPrice: original,
    };
  }

  const price = roundMoney(original * (1 - discountPercent / 100));

  return {
    price,
    oldPrice: original,
    discountPercent,
    listPrice: original,
  };
}

/**
 * Enrich product frontmatter (and sizeVariants) with sale prices for display.
 */
function enrichProductWithSale(product, sale = saleConfig) {
  if (!product || typeof product !== "object") return product;

  const productId = product.product_id;
  const base = applySaleToPrice(product.price, productId, sale);

  const enriched = {
    ...product,
    price: base.price,
    listPrice: base.listPrice,
    discountPercent: base.discountPercent,
  };

  if (base.discountPercent > 0) {
    enriched.oldPrice = base.oldPrice;
  }

  if (product.sizeVariants && typeof product.sizeVariants === "object") {
    const variants = {};
    for (const [key, variant] of Object.entries(product.sizeVariants)) {
      const priced = applySaleToPrice(variant.price, productId, sale);
      variants[key] = {
        ...variant,
        price: priced.price,
        listPrice: priced.listPrice,
        discountPercent: priced.discountPercent,
        ...(priced.discountPercent > 0 ? { oldPrice: priced.oldPrice } : {}),
      };
    }
    enriched.sizeVariants = variants;
  }

  return enriched;
}

function isSaleActive(sale = saleConfig) {
  if (!sale?.enabled) return false;
  if (clampPercent(sale.sitewidePercent) > 0) return true;
  return Object.values(sale.productPercents || {}).some(
    (p) => clampPercent(p) > 0
  );
}

module.exports = {
  saleConfig,
  getEffectivePercent,
  applySaleToPrice,
  enrichProductWithSale,
  isSaleActive,
  roundMoney,
};
