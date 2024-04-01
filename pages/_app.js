import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";
import { DefaultSeo } from "next-seo";
import ScrollToTop from "../components/general/ScrollToTop";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Provider store={store}>
      <DefaultSeo
        title="Soloswim | Waterproof zwemschema's"
        description="Waterproof zwemschema's om zelf te volgen vanuit het zwembad. ✓ Borstcrawl zwemschema's ✓ Techniek-, kracht- en duurtrainingen ✓ Alle niveau's ✓ Snelle levering"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/images/favicons/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "/images/favicons/apple-touch-icon.png",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://www.soloswim.nl",
          title: "Soloswim | Waterproof zwemschema's",
          description:
            "Waterproof zwemschema's om zelf te volgen vanuit het zwembad. ✓ Borstcrawl zwemschema's ✓ Techniek-, kracht- en duurtrainingen ✓ Alle niveau's ✓ Snelle levering",
          locale: "nl_NL",
          site_name: "Soloswim | Waterproof zwemschema's",
          images: [
            {
              url: "/images/home/header-OG.jpg",
              width: 1200,
              height: 630,
              alt: "Soloswim",
            },
          ],
        }}
      />
      <Header />
      <Component {...pageProps} />
      <ScrollToTop />
      <Footer />
    </Provider>
  );
}

export default MyApp;
