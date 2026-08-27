import { getSortedProductsData } from "../lib/products";
import { absoluteUrl } from "../lib/site";

const STATIC_PATHS = [
  "/",
  "/producten",
  "/zwemmateriaal",
  "/over-ons",
  "/contact",
];

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSitemapXml(urls) {
  const body = urls
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;
}

function SiteMap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const products = getSortedProductsData();

  const urls = [
    ...STATIC_PATHS.map((path) => ({
      loc: absoluteUrl(path),
      changefreq: path === "/" ? "weekly" : "weekly",
      priority: path === "/" ? "1.0" : "0.8",
    })),
    ...products.map((product) => ({
      loc: absoluteUrl(`/producten/${product.id}`),
      changefreq: "weekly",
      priority: "0.7",
    })),
  ];

  const xml = buildSitemapXml(urls);

  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(xml);
  res.end();

  return { props: {} };
}

export default SiteMap;
