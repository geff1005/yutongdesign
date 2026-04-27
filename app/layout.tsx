import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Julian Zhu — Portfolio",
  description:
    "Julian Yutong Zhu — Creative Technologist based in London. Designing AI-enabled creative workflows where emerging tech and human craft meet.",
  metadataBase: new URL("https://yutongdesign.art"),
  openGraph: {
    title: "Julian Zhu — Portfolio",
    description:
      "Creative Technologist based in London. Featured in The Guardian (2026). Awards: Red Dot, IDA, EUPD.",
    url: "https://yutongdesign.art",
    siteName: "yutongdesign",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
