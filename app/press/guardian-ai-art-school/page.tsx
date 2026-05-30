import type { Metadata } from "next";
import Image from "next/image";

const ORIGINAL_URL =
  "https://www.theguardian.com/everything-you-never-imagined/2026/mar/05/how-art-school-creators-are-adapting-to-the-age-of-ai";

export const metadata: Metadata = {
  title: "The Guardian Feature · Julian Yutong Zhu",
  description:
    "Reference page for The Guardian feature, How art school creators are adapting to the age of AI.",
};

export default function GuardianPressPage() {
  return (
    <main className="press-reference-page">
      <section className="press-reference-hero" aria-labelledby="press-reference-title">
        <div className="press-reference-copy">
          <p className="about-kicker">Press / The Guardian</p>
          <h1 id="press-reference-title">
            How art school creators are adapting to the age of AI
          </h1>
          <p>
            A Guardian Labs feature published on 5 March 2026 as part of the
            <em> Everything You Never Imagined</em> series. The original Guardian page
            has since been removed after the commercial partnership ended, so this page
            preserves the portfolio reference without republishing the article.
          </p>
          <div className="press-reference-actions">
            <a href={ORIGINAL_URL} target="_blank" rel="noopener noreferrer">
              Original Guardian URL <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <figure className="press-reference-figure">
          <Image
            src="/press/guardian-enhanced.webp"
            alt="Visual reference for The Guardian feature on art school creators adapting to AI."
            width={2560}
            height={1600}
            priority
          />
          <figcaption>
            Portfolio press reference image. Article text is not reproduced here.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
