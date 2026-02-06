"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ScrollFadeIn } from "@/components/animations/ScrollFadeIn";
import { Film, Music, Video } from "lucide-react";

const categories = [
  {
    href: "/films",
    labelKey: "filmsLabel" as const,
    countKey: "filmsCount" as const,
    icon: Film,
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
    description: {
      en: "Portraits of extraordinary individuals",
      it: "Ritratti di individui straordinari",
    },
  },
];

export function CategoryGrid() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10">
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
                /* Last card spans full width on sm 2-col layout */
                className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <Link href={cat.href} className="group block h-full">
                  <div className="dark:bg-noir-950 bg-noir-50 p-6 sm:p-8 md:p-10 lg:p-12 h-full flex flex-col justify-between min-h-[240px] sm:min-h-[280px] md:min-h-[320px] relative overflow-hidden dark:hover:bg-noir-900 hover:bg-white transition-colors duration-500">
                    {/* Icon */}
                    <Icon
                      size={24}
                      strokeWidth={1}
                      className="dark:text-noir-400 text-noir-400 dark:group-hover:text-white group-hover:text-noir-950 transition-colors duration-500 mb-6 sm:mb-8"
                    />

                    {/* Content */}
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-light tracking-wide uppercase dark:text-white text-noir-950 mb-2">
                        {t.landing[cat.labelKey]}
                      </h3>
                      <p className="font-body text-[10px] sm:text-xs tracking-wider dark:text-noir-400 text-noir-500 uppercase mb-3 sm:mb-4">
                        {t.landing[cat.countKey]}
                      </p>
                      <p className="font-body text-xs sm:text-sm dark:text-noir-300 text-noir-600 leading-relaxed">
                        {cat.description[lang]}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <span className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-10 dark:text-noir-600 text-noir-300 font-body text-lg group-hover:translate-x-1 dark:group-hover:text-white group-hover:text-noir-950 transition-all duration-300">
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
