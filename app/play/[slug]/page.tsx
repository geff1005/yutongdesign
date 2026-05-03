import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Spline from "@splinetool/react-spline/next";
import { PLAY_ITEMS, findPlayItem } from "@/lib/play";

export async function generateStaticParams() {
  return PLAY_ITEMS.filter((p) => p.hasDetail).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = findPlayItem(slug);
  if (!item) return {};
  return {
    title: `${item.name} — Julian Zhu / Play`,
    description: item.description,
  };
}

export default async function PlayDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = findPlayItem(slug);
  if (!item || !item.hasDetail) notFound();

  return (
    <main className="play-detail">
      <div className="play-index-nav">
        <Link href="/play" className="case-nav-back">
          <span aria-hidden>←</span> Play
        </Link>
        <span className="case-nav-home">{item.name}</span>
      </div>

      <header className="play-detail-hero">
        <div className="eyebrow">Play · {item.year}</div>
        <h1 className="play-detail-title">{item.name}</h1>
        <div className="play-tile-chips play-detail-chips">
          {item.chips.map((c) => (
            <span key={c} className="play-tile-chip">
              {c}
            </span>
          ))}
        </div>
        {item.description && (
          <p className="play-detail-desc">{item.description}</p>
        )}
      </header>

      {item.splineScene && (
        <section className="play-detail-spline">
          <div className="play-detail-spline-wrap">
            <Spline
              scene={item.splineScene}
              className="case-spline-react"
            />
          </div>
          <div className="case-spline-caption">
            Drag to orbit · scroll to zoom · interact to play.
          </div>
        </section>
      )}

      <footer className="case-footer">
        <Link href="/play" className="case-footer-home">
          ← All play
        </Link>
        <Link href="/" className="case-footer-email">
          → Home
        </Link>
      </footer>
    </main>
  );
}
