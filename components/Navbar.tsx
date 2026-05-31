"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { PROJECTS } from "@/lib/projects";
import { findPlayItem } from "@/lib/play";

/**
 * Inline backdrop-filter — Lightning CSS (Tailwind 4 / Next 16 build
 * pipeline) was stripping `backdrop-filter` from globals.css at compile
 * time, leaving the pill nav opaque-white instead of glassy. Setting it
 * via the React style prop bypasses the optimizer.
 */
const GLASS_STYLE: React.CSSProperties = {
  backdropFilter: "blur(24px) saturate(190%)",
  WebkitBackdropFilter: "blur(24px) saturate(190%)",
};

type NavLink = { label: string; href: string; external?: boolean };
const LINKS: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#work" },
  { label: "Play", href: "/#explorations" },
  { label: "Resume", href: "/resume.pdf", external: true },
];

function pageSlug(pathname: string) {
  return decodeURIComponent(pathname.split("/")[2] ?? "");
}

function subpageContext(pathname: string) {
  if (pathname === "/work") {
    return { back: { href: "/#home", label: "Home" }, title: null };
  }
  if (pathname.startsWith("/work/")) {
    const project = PROJECTS.find((p) => p.slug === pageSlug(pathname));
    return {
      back: { href: "/work", label: "All work" },
      title: project?.title ?? "Work",
    };
  }
  if (pathname === "/play") {
    return { back: { href: "/#home", label: "Home" }, title: null };
  }
  if (pathname.startsWith("/play/")) {
    const item = findPlayItem(pageSlug(pathname));
    return {
      back: { href: "/play", label: "Playground" },
      title: item?.name ?? "Playground",
    };
  }
  return { back: { href: "/#home", label: "Home" }, title: null };
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const isSubpage = pathname !== "/";
  const context = subpageContext(pathname);
  const back = context.back;
  const detailTitle = context.title;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncActive = () => {
      if (pathname.startsWith("/play")) {
        setActive("Play");
      } else if (pathname.startsWith("/work")) {
        setActive("Work");
      } else if (window.location.hash === "#explorations") {
        setActive("Play");
      } else if (window.location.hash === "#work") {
        setActive("Work");
      } else {
        setActive("Home");
      }
    };

    syncActive();
    window.addEventListener("hashchange", syncActive);
    return () => window.removeEventListener("hashchange", syncActive);
  }, [pathname]);

  // Lock body scroll when mobile menu is open + close on Escape
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Desktop pill nav — visible >= 768px */}
      <div className="nav-wrap nav-wrap-desktop">
        <nav
          className={
            "nav-pill" +
            (scrolled ? " scrolled" : "") +
            (isSubpage ? " nav-pill-subpage" : "") +
            (isSubpage && detailTitle ? " nav-pill-detail" : "")
          }
          style={GLASS_STYLE}
        >
          {isSubpage ? (
            <>
              <Link className="nav-sub-back" href={back.href}>
                <span aria-hidden>←</span>
                <span>{back.label}</span>
              </Link>
              <Link className="nav-sub-name" href="/#home" aria-label="Home">
                {SITE.fullName}
              </Link>
              {detailTitle ? (
                <span className="nav-sub-context" title={detailTitle}>
                  {detailTitle}
                </span>
              ) : (
                <span className="nav-sub-actions">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    Resume
                    <span aria-hidden> ↗</span>
                  </a>
                  <a className="say-hi" href={SITE.socials.email}>
                    <span className="say-hi-bg" />
                    <span className="say-hi-inner">
                      Say hi <span aria-hidden>↗</span>
                    </span>
                  </a>
                </span>
              )}
            </>
          ) : (
            <>
              <a className="nav-logo" href="/about" aria-label="About Julian">
                <span className="nav-logo-inner">JZ</span>
              </a>
              <span className="nav-divider" />
              {LINKS.map((l) =>
                l.external ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={"nav-link" + (active === l.label ? " active" : "")}
                    onClick={() => setActive(l.label)}
                  >
                    {l.label}
                    <span aria-hidden> ↗</span>
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    className={"nav-link" + (active === l.label ? " active" : "")}
                    onClick={() => setActive(l.label)}
                  >
                    {l.label}
                  </Link>
                )
              )}
              <span className="nav-divider" />
              <a className="say-hi" href={SITE.socials.email}>
                <span className="say-hi-bg" />
                <span className="say-hi-inner">
                  Say hi <span aria-hidden>↗</span>
                </span>
              </a>
            </>
          )}
        </nav>
      </div>

      {/* Mobile bar — visible < 768px */}
      <div className={"nav-wrap nav-wrap-mobile" + (isSubpage ? " nav-wrap-mobile-subpage" : "")}>
        {isSubpage ? (
          <Link className="nav-sub-back nav-sub-back-mobile" href={back.href}>
            <span aria-hidden>←</span>
            <span>{back.label}</span>
          </Link>
        ) : (
          <a className="nav-logo nav-logo-mobile" href="/about" aria-label="About Julian">
            <span className="nav-logo-inner">JZ</span>
          </a>
        )}
        {isSubpage && (
          detailTitle ? (
            <span className="nav-sub-name nav-sub-name-mobile" title={detailTitle}>
              {detailTitle}
            </span>
          ) : (
            <Link className="nav-sub-name nav-sub-name-mobile" href="/#home" aria-label="Home">
              {SITE.fullName}
            </Link>
          )
        )}
        <button
          className="nav-hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-overlay"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={"nav-hamburger-icon" + (open ? " open" : "")}>
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Mobile fullscreen overlay */}
      <div
        id="mobile-nav-overlay"
        className={"nav-overlay" + (open ? " open" : "")}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        onClick={(e) => {
          // Click on backdrop closes; clicks on nav-overlay-inner bubble up if they're not links
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="nav-overlay-inner">
          <nav className="nav-overlay-list">
            {isSubpage && (
              <Link
                href={back.href}
                className="nav-overlay-link"
                onClick={() => setOpen(false)}
              >
                ← {back.label}
              </Link>
            )}
            {!isSubpage &&
              LINKS.map((l) =>
                l.external ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-overlay-link"
                    onClick={() => {
                      setActive(l.label);
                      setOpen(false);
                    }}
                  >
                    {l.label}
                    <span aria-hidden> ↗</span>
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="nav-overlay-link"
                    onClick={() => {
                      setActive(l.label);
                      setOpen(false);
                    }}
                  >
                    {l.label}
                  </Link>
                )
              )}
            {isSubpage && !detailTitle && (
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-overlay-link"
                onClick={() => setOpen(false)}
              >
                Resume<span aria-hidden> ↗</span>
              </a>
            )}
            {(!isSubpage || !detailTitle) && (
              <a
                href={SITE.socials.email}
                className="nav-overlay-link nav-overlay-link-cta"
                onClick={() => setOpen(false)}
              >
                Say hi <span aria-hidden>↗</span>
              </a>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
