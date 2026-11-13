import { buildMerchantFeedXml } from "../lib/merchantFeed";

/**
 * Google Merchant Center product feed (RSS 2.0 + g: namespace).
 * Submit https://www.soloswim.be/merchant-feed.xml as a scheduled fetch.
 */
function MerchantFeed() {
  return null;
}

export async function getServerSideProps({ res }) {
  const xml = buildMerchantFeedXml();

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.write(xml);
  res.end();

  return { props: {} };
}

export default MerchantFeed;
