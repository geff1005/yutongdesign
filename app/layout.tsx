import type { Metadata } from "next";
import { Fragment_Mono, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteFooter } from "@/components/SiteFooter";

// Geist Sans — free Vercel typeface; closest free substitute to Adaption
// Labs's stkBureauSans (Sharp Type, paid). Becomes the new default body
// type for the light-theme refresh.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: ["400"],
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
    images: [
      {
        url: "/thumbnails/co-cerebral.jpg",
        width: 1600,
        height: 1600,
        alt: "Co-Cerebral project thumbnail by Julian Yutong Zhu",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julian Zhu — Portfolio",
    description:
      "Creative Technologist based in London. Featured in The Guardian (2026). Awards: Red Dot, IDA, EUPD.",
    images: ["/thumbnails/co-cerebral.jpg"],
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
      className={`${geist.variable} ${inter.variable} ${geistMono.variable} ${fragmentMono.variable}`}
    >
      <body>
        <SmoothScroll />
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
