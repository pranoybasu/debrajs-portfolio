"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FilmGrain } from "@/components/animations/FilmGrain";
import { PageTransition } from "@/components/animations/PageTransition";
import { ScrollFadeIn } from "@/components/animations/ScrollFadeIn";
import { VideoCard } from "@/components/ui/VideoCard";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { musicVideos } from "@/lib/videos";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const filterCategories = [
  { key: "all", en: "All", it: "Tutti" },
  { key: "pop", en: "Pop", it: "Pop" },
  { key: "rap", en: "Rap", it: "Rap" },
  { key: "drill", en: "Drill", it: "Drill" },
] as const;

export default function MusicVideosPage() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? musicVideos
      : musicVideos.filter((v) => v.category === activeFilter);

  return (
    <>
      <FilmGrain />
      <Navigation />
      <PageTransition>
        <div className="page-container pt-20 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
            {/* Back link */}
            <ScrollFadeIn className="mb-8 sm:mb-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-body tracking-widest uppercase dark:text-noir-400 text-noir-500 dark:hover:text-white hover:text-noir-950 transition-colors duration-300 py-2"
              >
                <ArrowLeft size={14} />
                {t.common.backToHome}
              </Link>
            </ScrollFadeIn>

            {/* Page header */}
            <ScrollFadeIn className="mb-8 sm:mb-12">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-cinematic uppercase dark:text-white text-noir-950 mb-4 sm:mb-6">
                {t.musicVideos.title}
              </h1>
              <div className="w-16 h-px dark:bg-noir-400 bg-noir-300 mb-4 sm:mb-6" />
              <p className="font-body text-sm sm:text-base md:text-lg dark:text-noir-300 text-noir-600 leading-relaxed max-w-2xl">
                {t.musicVideos.subtitle}
              </p>
            </ScrollFadeIn>

            {/* Category filter — horizontally scrollable on mobile */}
            <ScrollFadeIn className="mb-8 sm:mb-12" delay={0.2}>
              <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
                {filterCategories.map((cat) => (
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
                        layoutId="filter-underline"
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

            {/* Videos grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px dark:bg-noir-700 bg-noir-200"
              layout
            >
              {filtered.map((video, i) => (
                <motion.div
                  key={video.id}
                  className="dark:bg-noir-950 bg-noir-50"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <VideoCard
                    title={video.title}
                    year={video.year}
                    location={video.location}
                    youtubeId={video.youtubeId}
                    description={
                      video.description || {
                        en: "",
                        it: "",
                      }
                    }
                    index={i}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </PageTransition>
      <Footer />
    </>
  );
}
