import Head from "next/head";
import { generateDefaultSeo, generateNextSeo } from "next-seo/pages";

/** Pages Router DefaultSeo replacement for next-seo v7. */
export function DefaultSeo(props) {
  return <Head>{generateDefaultSeo(props)}</Head>;
}

/** Pages Router NextSeo replacement for next-seo v7. */
export function NextSeo(props) {
  return <Head>{generateNextSeo(props)}</Head>;
}
