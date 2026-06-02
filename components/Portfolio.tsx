import { Hero } from "./Hero";
import { EvidenceCards } from "./EvidenceCards";
import { SelectedWorks } from "./SelectedWorks";
import { Journal } from "./Journal";
import { Explorations } from "./Explorations";
import { Stats } from "./Stats";

/**
 * Home composition.
 *
 * Note: the standalone <Contact /> section was removed once <SiteFooter />
 * went global — same copyright + socials + status meta was rendered twice,
 * with the Contact's white footer-bar stacking on top of the dark
 * SiteFooter and looking visually broken. SiteFooter is now the single
 * closing frame for every page.
 */
export function Portfolio() {
  return (
    <>
      <Hero />
      <EvidenceCards />
      <SelectedWorks />
      <Journal />
      <Explorations />
      <Stats />
    </>
  );
}
