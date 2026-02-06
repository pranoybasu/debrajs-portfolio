"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FilmGrain } from "@/components/animations/FilmGrain";
import { PageTransition } from "@/components/animations/PageTransition";
import { ScrollFadeIn } from "@/components/animations/ScrollFadeIn";
import { VideoCard } from "@/components/ui/VideoCard";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { documentaries } from "@/lib/videos";
import Link from "next/link";
import { ArrowLeft, Award } from "lucide-react";

export default function DocumentariesPage() {
  const { t } = useLanguage();

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
            <ScrollFadeIn className="mb-10 sm:mb-16">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-cinematic uppercase dark:text-white text-noir-950 mb-4 sm:mb-6">
                {t.documentaries.title}
              </h1>
              <div className="w-16 h-px dark:bg-noir-400 bg-noir-300 mb-4 sm:mb-6" />
              <p className="font-body text-sm sm:text-base md:text-lg dark:text-noir-300 text-noir-600 leading-relaxed max-w-2xl">
                {t.documentaries.subtitle}
              </p>
            </ScrollFadeIn>

            {/* Documentaries grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px dark:bg-noir-700 bg-noir-200">
              {documentaries.map((doc, i) => (
                <div key={doc.id} className="dark:bg-noir-950 bg-noir-50">
                  <VideoCard
                    title={doc.title}
                    year={doc.year}
                    location={doc.location}
                    youtubeId={doc.youtubeId}
                    description={doc.description}
                    badge={doc.festival}
                    index={i}
                  />
                  {/* Festival mention */}
                  {doc.festival && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 flex items-center gap-2">
                      <Award size={14} strokeWidth={1} className="dark:text-noir-300 text-noir-600 shrink-0" />
                      <span className="text-[10px] sm:text-xs font-body tracking-wide dark:text-noir-300 text-noir-600">
                        {doc.festival}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageTransition>
      <Footer />
    </>
  );
}
