import { Metadata } from "next";
import GoogleAnalytics from "../components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Soloswim | Waterproof zwemschema's",
  description:
    "Waterproof zwemschema's om zelf te volgen vanuit het zwembad. ✓ Borstcrawl zwemschema's ✓ Techniek-, kracht- en duurtrainingen ✓ Alle niveau's ✓ Snelle levering",
  openGraph: {
    url: "https://www.soloswim.nl",
    title: "Soloswim | Waterproof zwemschema's",
    description:
      "Waterproof zwemschema's om zelf te volgen vanuit het zwembad. ✓ Borstcrawl zwemschema's ✓ Techniek-, kracht- en duurtrainingen ✓ Alle niveau's ✓ Snelle levering",
    locale: "nl_NL",
    siteName: "Soloswim | Waterproof zwemschema's",
    images: [
      {
        url: "/images/home/header-OG.jpg",
        width: 1200,
        height: 630,
        alt: "Soloswim",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body>{children}</body>
    </html>
  );
}
