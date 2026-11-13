import shippingConfig from "../config/shipping";
import { absoluteUrl, SITE_NAME, SITE_URL } from "./site";
import { getSortedProductsData } from "./products";

function escapeXml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function productType(product) {
  if (product.isVerzorging) return "Zwemverzorging";
  if (product.isAccessoire) return "Zwemmateriaal";
  return "Zwemschemas";
}

function googleProductCategory(product) {
  if (product.isVerzorging) return "Health & Beauty > Personal Care";
  if (product.isAccessoire) return "Sporting Goods > Outdoor Recreation > Boating & Water Sports > Swimming";
  return "Media > Books";
}

function slugifyVariant(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "");
}

/**
 * Expand catalog products into Merchant feed rows (one row per size variant).
 */
export function getMerchantFeedItems() {
  const products = getSortedProductsData();
  const items = [];

  for (const product of products) {
    const variants = product.sizeVariants
      ? Object.entries(product.sizeVariants)
      : null;

    if (variants?.length) {
      for (const [sizeName, variant] of variants) {
        const priced = {
          ...product,
          price: variant.price ?? product.price,
          listPrice: variant.listPrice ?? variant.oldPrice ?? variant.price ?? product.listPrice,
          oldPrice: variant.oldPrice ?? product.oldPrice,
          images: variant.images?.length ? variant.images : product.images,
          ean: variant.ean || product.ean,
        };
        items.push(buildItem(priced, {
          id: `${product.product_id || product.id}-${slugifyVariant(sizeName)}`,
          itemGroupId: product.product_id || product.id,
          title: `${product.title} - ${sizeName}`,
          size: sizeName,
          path: `/producten/${product.id}?niveau=${encodeURIComponent(sizeName.toLowerCase())}`,
        }));
      }
      continue;
    }

    items.push(buildItem(product, {
      id: product.product_id || product.id,
      title: product.title,
      path: `/producten/${product.id}`,
    }));
  }

  return items;
}

function buildItem(product, { id, title, path, size, itemGroupId }) {
  const image = Array.isArray(product.images) && product.images[0]
    ? absoluteUrl(product.images[0])
    : absoluteUrl("/images/home/header-OG.jpg");

  const price = Number(product.price);
  const listPrice = Number(product.listPrice || product.oldPrice || product.price);
  const inStock = product.inStock !== false;
  const gtin = String(product.ean || product.gtin || "").replace(/\s+/g, "");
  const brand = product.brand || SITE_NAME;
  const onSale =
    Number.isFinite(listPrice) && Number.isFinite(price) && listPrice > price;

  return {
    id,
    itemGroupId,
    title,
    description: product.description || title,
    link: absoluteUrl(path),
    imageLink: image,
    availability: inStock ? "in_stock" : "out_of_stock",
    condition: "new",
    price: `${(onSale ? listPrice : price).toFixed(2)} EUR`,
    salePrice: onSale ? `${price.toFixed(2)} EUR` : null,
    brand,
    gtin: /^\d{8,14}$/.test(gtin) ? gtin : null,
    mpn: product.product_id || product.id,
    identifierExists: /^\d{8,14}$/.test(gtin),
    productType: productType(product),
    googleProductCategory: googleProductCategory(product),
    size: size || null,
  };
}

function shippingXml() {
  const rows = [
    ["BE", shippingConfig.belgium],
    ["NL", shippingConfig.netherlands],
  ];

  return rows
    .map(
      ([country, amount]) => `      <g:shipping>
        <g:country>${country}</g:country>
        <g:service>Standaard</g:service>
        <g:price>${Number(amount).toFixed(2)} EUR</g:price>
      </g:shipping>`
    )
    .join("\n");
}

export function buildMerchantFeedXml(items = getMerchantFeedItems()) {
  const now = new Date().toISOString();
  const channelItems = items
    .map((item) => {
      const optional = [
        item.salePrice ? `      <g:sale_price>${escapeXml(item.salePrice)}</g:sale_price>` : null,
        item.gtin ? `      <g:gtin>${escapeXml(item.gtin)}</g:gtin>` : null,
        item.mpn ? `      <g:mpn>${escapeXml(item.mpn)}</g:mpn>` : null,
        item.itemGroupId
          ? `      <g:item_group_id>${escapeXml(item.itemGroupId)}</g:item_group_id>`
          : null,
        item.size ? `      <g:size>${escapeXml(item.size)}</g:size>` : null,
        `      <g:identifier_exists>${item.identifierExists ? "yes" : "no"}</g:identifier_exists>`,
        `      <g:product_type>${escapeXml(item.productType)}</g:product_type>`,
        `      <g:google_product_category>${escapeXml(item.googleProductCategory)}</g:google_product_category>`,
        shippingXml(),
      ]
        .filter(Boolean)
        .join("\n");

      return `    <item>
      <g:id>${escapeXml(item.id)}</g:id>
      <title>${escapeXml(item.title)}</title>
      <description>${escapeXml(item.description)}</description>
      <link>${escapeXml(item.link)}</link>
      <g:image_link>${escapeXml(item.imageLink)}</g:image_link>
      <g:availability>${escapeXml(item.availability)}</g:availability>
      <g:condition>${escapeXml(item.condition)}</g:condition>
      <g:price>${escapeXml(item.price)}</g:price>
      <g:brand>${escapeXml(item.brand)}</g:brand>
${optional}
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${escapeXml(SITE_NAME)} product feed</title>
    <link>${escapeXml(SITE_URL)}</link>
    <description>Google Merchant product feed for ${escapeXml(SITE_NAME)}</description>
    <lastBuildDate>${escapeXml(now)}</lastBuildDate>
${channelItems}
  </channel>
</rss>
`;
}
