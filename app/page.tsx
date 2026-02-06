"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CurtainReveal } from "@/components/animations/CurtainReveal";
import { FilmGrain } from "@/components/animations/FilmGrain";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategoryGrid } from "@/components/sections/CategoryGrid";

export default function HomePage() {
  return (
    <>
      <CurtainReveal />
      <FilmGrain />
      <Navigation />
      <main className="page-container">
        <HeroSection />
        <div className="cinematic-line" />
        <CategoryGrid />
      </main>
      <Footer />
    </>
  );
}
