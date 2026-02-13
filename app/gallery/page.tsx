"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FilmGrain } from "@/components/animations/FilmGrain";
import { PageTransition } from "@/components/animations/PageTransition";
import { ScrollFadeIn } from "@/components/animations/ScrollFadeIn";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const galleryCategories = [
  { key: "all", en: "All", it: "Tutti" },
  { key: "films", en: "Short Films", it: "Cortometraggi" },
  { key: "music", en: "Music Videos", it: "Video Musicali" },
  { key: "rap", en: "Rap", it: "Rap" },
  { key: "docs", en: "Documentaries", it: "Documentari" },
] as const;

const galleryImages = [
  // --- 2025 ---
  { src: "/allimageassets/FRAME FROM _ISABELLA_ (SHORT FILM, 2025).png", title: "Isabella", year: 2025, category: "films" },
  { src: "/allimageassets/FRAME FROM _ISABELLA_ (SHORT FILM, 2025) copy.png", title: "Isabella", year: 2025, category: "films" },
  { src: "/allimageassets/FRAME FROM _ISABELLA_ (SHORT FILM, 2025) copy 2.png", title: "Isabella", year: 2025, category: "films" },
  { src: "/allimageassets/Isabella main poster.jpeg", title: "Isabella — Poster", year: 2025, category: "films" },
  // --- 2024 ---
  { src: "/allimageassets/FRAME FROM _IN RO_, (MUSIC VIDEO, ROME, 2024).png", title: "Inarticulate Ro", year: 2024, category: "music" },
  { src: "/allimageassets/FRAME FROM _IN RO_, (MUSIC VIDEO, ROME, 2024) copy.png", title: "Inarticulate Ro", year: 2024, category: "music" },
  { src: "/allimageassets/FRAME FROM _IN RO_, (MUSIC VIDEO, ROME, 2024) copy 2.png", title: "Inarticulate Ro", year: 2024, category: "music" },
  { src: "/allimageassets/FRAME FROM _MM_ (MUSIC VIDEO, ROME, 2024).png", title: "Motorcycle Muse", year: 2024, category: "music" },
  { src: "/allimageassets/FRAME FROM _MM_ (MUSIC VIDEO, ROME, 2024) copy.png", title: "Motorcycle Muse", year: 2024, category: "music" },
  { src: "/allimageassets/FRAME FROM _MM_ (MUSIC VIDEO, ROME, 2024) copy 2.png", title: "Motorcycle Muse", year: 2024, category: "music" },
  { src: "/allimageassets/FRAME FROM _MAESTRO_ (DOCUMENTARY, ROME, 2024).png", title: "Maestro", year: 2024, category: "docs" },
  { src: "/allimageassets/FRAME FROM _MAESTRO_ (DOCUMENTARY, ROME, 2024) copy.png", title: "Maestro", year: 2024, category: "docs" },
  { src: "/allimageassets/FRAME FROM _MAESTRO_ (DOCUMENTARY, ROME, 2024) copy 2.png", title: "Maestro", year: 2024, category: "docs" },
  { src: "/allimageassets/FRAME FROM _IL NAYA_ (DOCUMENTARY, ROME, 2024).png", title: "Il Naya", year: 2024, category: "docs" },
  { src: "/allimageassets/FRAME FROM _IL NAYA_ (DOCUMENTARY, ROME, 2024) copy.png", title: "Il Naya", year: 2024, category: "docs" },
  { src: "/allimageassets/FRAME FROM _IL NAYA_ (DOCUMENTARY, ROME, 2024) copy 2.png", title: "Il Naya", year: 2024, category: "docs" },
  // --- 2022 ---
  { src: "/allimageassets/FRAME FROM _OLPO TEH KHUSHI_ (SHORT FILM, 2022).png", title: "Olpo Te Khushi", year: 2022, category: "films" },
  { src: "/allimageassets/FRAME FROM _OLPO TEH KHUSHI_ (SHORT FILM, 2022) copy.png", title: "Olpo Te Khushi", year: 2022, category: "films" },
  { src: "/allimageassets/FRAMES FROM RAP VIDEOS.png", title: "Rap Videos", year: 2022, category: "rap" },
  { src: "/allimageassets/FRAMES FROM RAP VIDEOS copy.png", title: "Rap Videos", year: 2022, category: "rap" },
  { src: "/allimageassets/FRAMES FROM RAP VIDEOS copy 2.png", title: "Rap Videos", year: 2022, category: "rap" },
  { src: "/allimageassets/FRAMES FROM RAP VIDEOS copy 3.png", title: "Rap Videos", year: 2022, category: "rap" },
  { src: "/allimageassets/FRAMES FROM RAP VIDEOS copy 4.png", title: "Rap Videos", year: 2022, category: "rap" },
  // --- 2021 ---
  { src: "/allimageassets/FRAME FROM _NIGHT SHIFT_ (SHORT FILM, 2021).png", title: "Night Shift", year: 2021, category: "films" },
  { src: "/allimageassets/FRAME FROM _NIGHT SHIFT_ (SHORT FILM, 2021) copy.png", title: "Night Shift", year: 2021, category: "films" },
  // --- 2020 ---
  { src: "/allimageassets/FRAME FROM _WHY NOT_ (SHORT FILM, 2020).png", title: "Why Not", year: 2020, category: "films" },
  { src: "/allimageassets/FRAME FROM _WHY NOT_ (SHORT FILM, 2020) copy.png", title: "Why Not", year: 2020, category: "films" },
  { src: "/allimageassets/FRAME FROM _WHY NOT_ (SHORT FILM, 2020) copy 2.png", title: "Why Not", year: 2020, category: "films" },
];

export default function GalleryPage() {
  const { lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <>
      <FilmGrain />
      <Navigation />
      <PageTransition>
        <div className="page-container pt-20 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
            {/* Back link */}
            <ScrollFadeIn className="mb-8 sm:mb-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-body tracking-widest uppercase dark:text-noir-400 text-noir-500 dark:hover:text-white hover:text-noir-950 transition-colors duration-300 py-2"
              >
                <ArrowLeft size={14} />
                {lang === "en" ? "Back" : "Indietro"}
              </Link>
            </ScrollFadeIn>

            {/* Page header */}
            <ScrollFadeIn className="mb-8 sm:mb-12">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-cinematic uppercase dark:text-white text-noir-950 mb-4 sm:mb-6">
                {lang === "en" ? "Gallery" : "Galleria"}
              </h1>
              <div className="w-16 h-px dark:bg-noir-400 bg-noir-300 mb-4 sm:mb-6" />
              <p className="font-body text-sm sm:text-base md:text-lg dark:text-noir-300 text-noir-600 leading-relaxed max-w-2xl">
                {lang === "en"
                  ? "Frames from short films, music videos, and documentaries — Calcutta to Rome."
                  : "Fotogrammi da cortometraggi, video musicali e documentari — da Calcutta a Roma."}
              </p>
            </ScrollFadeIn>

            {/* Category filter */}
            <ScrollFadeIn className="mb-8 sm:mb-12" delay={0.2}>
              <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
                {galleryCategories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveFilter(cat.key)}
                    className={`relative text-xs font-body tracking-widest uppercase transition-colors duration-300 pb-2 whitespace-nowrap py-2 ${
                      activeFilter === cat.key
                        ? "dark:text-white text-noir-950"
                        : "dark:text-noir-400 text-noir-500 dark:hover:text-noir-200 hover:text-noir-700"
                    }`}
                  >
                    {lang === "en" ? cat.en : cat.it}
                    {activeFilter === cat.key && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-px dark:bg-white bg-noir-950"
                        layoutId="gallery-filter-underline"
                        transition={{
                          duration: 0.3,
                          ease: [0.77, 0, 0.175, 1],
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </ScrollFadeIn>

            {/* Masonry-style grid */}
            <motion.div
              className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((img, i) => (
                  <motion.div
                    key={img.src}
                    className="break-inside-avoid mb-3 sm:mb-4 cursor-pointer group"
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    onClick={() => setLightbox(i)}
                  >
                    <div className="relative overflow-hidden dark:bg-noir-900 bg-noir-100">
                      <Image
                        src={img.src}
                        alt={`${img.title} (${img.year})`}
                        width={800}
                        height={500}
                        className="w-full h-auto dark:opacity-90 opacity-100 group-hover:opacity-100 dark:group-hover:opacity-100 transition-opacity duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end">
                        <div className="p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <p className="font-heading text-sm sm:text-base tracking-wide uppercase text-white">
                            {img.title}
                          </p>
                          <p className="font-body text-[10px] sm:text-xs tracking-widest text-white/70">
                            {img.year}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </PageTransition>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 sm:p-8 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
              className="relative max-w-5xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].title}
                width={1600}
                height={1000}
                className="w-full h-auto max-h-[80vh] object-contain"
                sizes="100vw"
                priority
              />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-heading text-base sm:text-lg tracking-wide uppercase text-white">
                    {filtered[lightbox].title}
                  </p>
                  <p className="font-body text-xs tracking-widest text-white/50">
                    {filtered[lightbox].year}
                  </p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="text-white/50 hover:text-white transition-colors text-xs font-body tracking-widest uppercase py-2 px-4"
                >
                  {lang === "en" ? "Close" : "Chiudi"}
                </button>
              </div>
              {/* Nav arrows */}
              {lightbox > 0 && (
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full sm:-translate-x-12 text-white/50 hover:text-white text-3xl p-4"
                  onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
                >
                  &larr;
                </button>
              )}
              {lightbox < filtered.length - 1 && (
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full sm:translate-x-12 text-white/50 hover:text-white text-3xl p-4"
                  onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
                >
                  &rarr;
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
