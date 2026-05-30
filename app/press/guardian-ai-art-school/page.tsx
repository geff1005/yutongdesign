import type { Metadata } from "next";

const ORIGINAL_URL =
  "https://www.theguardian.com/everything-you-never-imagined/2026/mar/05/how-art-school-creators-are-adapting-to-the-age-of-ai";
const PDF_URL = "/press/guardian-ai-art-school.pdf";

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
            embeds a saved PDF for portfolio verification.
          </p>
          <div className="press-reference-actions">
            <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
              Open saved PDF <span aria-hidden>↗</span>
            </a>
            <a href={ORIGINAL_URL} target="_blank" rel="noopener noreferrer">
              Original Guardian URL <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <div className="press-reference-pdf" aria-label="Saved Guardian PDF">
          <iframe
            src={`${PDF_URL}#toolbar=1&navpanes=0&view=FitH`}
            title="Saved PDF of The Guardian feature"
          />
        </div>
      </section>
    </main>
  );
}
