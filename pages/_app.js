import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import { Lexend, Montserrat } from "next/font/google";
import { store } from "../store/store";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import BasketPersistence from "../components/BasketPersistence";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Chatwoot from "../components/Chatwoot";
import JsonLd from "../components/seo/JsonLd";
import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";
import { DefaultSeo } from "next-seo";
import ScrollToTop from "../components/general/ScrollToTop";
import { pageSeo } from "../lib/site";
import { organizationJsonLd, websiteJsonLd } from "../lib/seo";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-lexend",
  display: "swap",
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const defaultSeo = pageSeo({ path: "/" });

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
      <div
        className={`${montserrat.variable} ${lexend.variable} font-sans`}
      >
        <GoogleAnalytics />
        <Chatwoot />
        <BasketPersistence />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <DefaultSeo {...defaultSeo} />
        <Header />
        <Component {...pageProps} />
        <ScrollToTop />
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
