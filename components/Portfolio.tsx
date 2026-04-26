"use client";

import { useState } from "react";
import { LoadingScreen } from "./LoadingScreen";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { SelectedWorks } from "./SelectedWorks";
import { Journal } from "./Journal";
import { Explorations } from "./Explorations";
import { Stats } from "./Stats";
import { Contact } from "./Contact";

export function Portfolio() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <Navbar />
      <Hero />
      <SelectedWorks />
      <Journal />
      <Explorations />
      <Stats />
      <Contact />
    </>
  );
}
