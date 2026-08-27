/** Canonical public site origin (no trailing slash). */
export const SITE_URL = "https://www.soloswim.be";

export const SITE_NAME = "SoloSwim";
export const DEFAULT_TITLE = "SoloSwim | Waterproof zwemschema's";
export const DEFAULT_DESCRIPTION =
  "Waterproof zwemschema's om zelf te volgen vanuit het zwembad. ✓ Borstcrawl zwemschema's ✓ Techniek-, kracht- en duurtrainingen ✓ Alle niveau's ✓ Snelle levering";
export const DEFAULT_OG_IMAGE = "/images/home/header-OG.jpg";

export function absoluteUrl(path = "/") {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageSeo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  type = "website",
} = {}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    canonical: url,
    noindex,
    openGraph: {
      type,
      locale: "nl_BE",
      url,
      title,
      description,
      site_name: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
    },
    additionalLinkTags: [
      { rel: "icon", href: "/images/favicons/favicon.ico" },
      {
        rel: "apple-touch-icon",
        href: "/images/favicons/apple-touch-icon.png",
      },
    ],
  };
}
