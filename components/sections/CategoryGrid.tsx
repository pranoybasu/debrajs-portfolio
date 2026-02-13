"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ScrollFadeIn } from "@/components/animations/ScrollFadeIn";
import { Film, Music, Video } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    href: "/films",
    labelKey: "filmsLabel" as const,
    countKey: "filmsCount" as const,
    icon: Film,
    image: "/allimageassets/RANDOM FRAMES FOR HOMEPAGE THUMBNAILS OF DIFFERENT SECTIONS.png",
    description: {
      en: "Short narratives on Disney+ and international festivals",
      it: "Cortometraggi su Disney+ e festival internazionali",
    },
  },
  {
    href: "/music-videos",
    labelKey: "musicVideosLabel" as const,
    countKey: "musicVideosCount" as const,
    icon: Music,
    image: "/allimageassets/RANDOM FRAMES FOR HOMEPAGE THUMBNAILS OF DIFFERENT SECTIONS copy 3.png",
    description: {
      en: "Hip hop, pop, and drill from Calcutta to Rome",
      it: "Hip hop, pop e drill da Calcutta a Roma",
    },
  },
  {
    href: "/documentaries",
    labelKey: "documentariesLabel" as const,
    countKey: "documentariesCount" as const,
    icon: Video,
    image: "/allimageassets/RANDOM FRAMES FOR HOMEPAGE THUMBNAILS OF DIFFERENT SECTIONS copy 5.png",
    description: {
      en: "Portraits of extraordinary individuals",
      it: "Ritratti di individui straordinari",
    },
  },
];

export function CategoryGrid() {
  const { t, lang } = useLanguage();

  return (
    <section id="work" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <ScrollFadeIn className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-cinematic uppercase dark:text-white text-noir-950 mb-4">
            {t.landing.categoriesTitle}
          </h2>
          <div className="w-16 h-px dark:bg-noir-400 bg-noir-300 mx-auto" />
        </ScrollFadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px dark:bg-noir-700 bg-noir-200">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <ScrollFadeIn
                key={cat.href}
                delay={i * 0.15}
                className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <Link href={cat.href} className="group block h-full">
                  <div className="dark:bg-noir-950 bg-noir-50 h-full flex flex-col relative overflow-hidden dark:hover:bg-noir-900 hover:bg-white transition-colors duration-500">
                    {/* Thumbnail image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.description.en}
                        fill
                        className="object-cover dark:opacity-70 opacity-90 group-hover:opacity-100 dark:group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon
                          size={20}
                          strokeWidth={1}
                          className="dark:text-noir-400 text-noir-400 dark:group-hover:text-white group-hover:text-noir-950 transition-colors duration-500"
                        />
                        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-light tracking-wide uppercase dark:text-white text-noir-950">
                          {t.landing[cat.labelKey]}
                        </h3>
                      </div>
                      <p className="font-body text-[10px] sm:text-xs tracking-wider dark:text-noir-400 text-noir-500 uppercase mb-3">
                        {t.landing[cat.countKey]}
                      </p>
                      <p className="font-body text-xs sm:text-sm dark:text-noir-300 text-noir-600 leading-relaxed">
                        {cat.description[lang]}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <span className="absolute top-4 right-4 sm:top-6 sm:right-6 dark:text-white/40 text-noir-300 font-body text-lg group-hover:translate-x-1 dark:group-hover:text-white group-hover:text-noir-950 transition-all duration-300 z-10">
                      &rarr;
                    </span>
                  </div>
                </Link>
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
