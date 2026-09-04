import { absoluteUrl, DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "./site";
import { FAQ_ITEMS } from "../data/faq";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/images/logo/alt-logo-black-500x171.png"),
    email: "info@soloswim.be",
    sameAs: [
      "https://www.instagram.com/soloswim.nl/",
      "https://www.facebook.com/soloswim.be",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@soloswim.be",
        availableLanguage: ["Dutch", "nl"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "nl-BE",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageJsonLd(items = FAQ_ITEMS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Product + Offer JSON-LD for a SoloSwim product (markdown frontmatter).
 */
export function productJsonLd(product) {
  if (!product) return null;

  const path = `/producten/${product.id}`;
  const images = Array.isArray(product.images)
    ? product.images.map((src) => absoluteUrl(src))
    : [];

  const price = Number(product.price);
  const listPrice = Number(product.listPrice || product.oldPrice || product.price);
  const inStock = product.inStock !== false;

  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description || DEFAULT_DESCRIPTION,
    sku: product.product_id || product.id,
    brand: {
      "@type": "Brand",
      name: product.brand || SITE_NAME,
    },
    url: absoluteUrl(path),
    image: images.length ? images : [absoluteUrl("/images/home/header-OG.jpg")],
    offers: {
      "@type": "Offer",
      url: absoluteUrl(path),
      priceCurrency: "EUR",
      price: Number.isFinite(price) ? price.toFixed(2) : undefined,
      availability: inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: SITE_NAME,
      },
    },
  };

  const gtin = String(product.ean || product.gtin || "").replace(/\s+/g, "");
  if (gtin) {
    if (/^\d{13}$/.test(gtin)) data.gtin13 = gtin;
    else if (/^\d{12}$/.test(gtin)) data.gtin12 = gtin;
    else if (/^\d{8}$/.test(gtin)) data.gtin8 = gtin;
    else data.gtin = gtin;
  }

  if (
    Number.isFinite(listPrice) &&
    Number.isFinite(price) &&
    listPrice > price
  ) {
    data.offers.price = price.toFixed(2);
  }

  return data;
}
