"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Play, Clock } from "lucide-react";

interface VideoCardProps {
  title: string;
  year: number;
  location?: string;
  language?: string;
  platform?: string;
  youtubeId?: string;
  description: { en: string; it: string };
  status?: "released" | "touring" | "unreleased";
  badge?: string;
  index?: number;
}

export function VideoCard({
  title,
  year,
  location,
  language: filmLang,
  platform,
  youtubeId,
  description,
  status = "released",
  badge,
  index = 0,
}: VideoCardProps) {
  const { lang, t } = useLanguage();
  const isPlayable = youtubeId && !youtubeId.startsWith("PLACEHOLDER");

  return (
    <motion.div
      className="video-card group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.77, 0, 0.175, 1],
      }}
    >
      {/* Video embed / placeholder */}
      <div className="relative aspect-video dark:bg-noir-900 bg-noir-100 overflow-hidden">
        {isPlayable ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&color=white`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center dark:bg-noir-900 bg-noir-100">
            {status === "touring" ? (
              <>
                <Clock size={28} strokeWidth={1} className="dark:text-noir-400 text-noir-500 mb-2 sm:mb-3" />
                <span className="text-[10px] sm:text-xs font-body tracking-widest uppercase dark:text-noir-400 text-noir-500">
                  {t.common.comingSoon}
                </span>
              </>
            ) : (
              <>
                <Play size={28} strokeWidth={1} className="dark:text-noir-400 text-noir-500 mb-2 sm:mb-3" />
                <span className="text-[10px] sm:text-xs font-body tracking-widest uppercase dark:text-noir-400 text-noir-500 px-4 text-center">
                  {title}
                </span>
              </>
            )}
          </div>
        )}

        {/* Badge */}
        {badge && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-1 dark:bg-noir-950/80 bg-white/80 backdrop-blur-sm border dark:border-noir-600 border-noir-200">
            <span className="text-[9px] sm:text-[10px] font-body tracking-widest uppercase dark:text-noir-200 text-noir-700 whitespace-nowrap">
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 sm:p-5 md:p-6">
        <div className="flex items-start justify-between gap-3 sm:gap-4 mb-2 sm:mb-3">
          <h3 className="font-heading text-base sm:text-lg md:text-xl font-light tracking-wide uppercase dark:text-white text-noir-950 leading-tight">
            {title}
          </h3>
          <span className="text-[10px] sm:text-xs font-body dark:text-noir-400 text-noir-500 shrink-0 pt-1">
            {year}
          </span>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
          {filmLang && (
            <span className="text-[9px] sm:text-[10px] font-body tracking-widest uppercase dark:text-noir-300 text-noir-600 border dark:border-noir-600 border-noir-300 px-1.5 sm:px-2 py-0.5">
              {filmLang}
            </span>
          )}
          {location && (
            <span className="text-[9px] sm:text-[10px] font-body tracking-widest uppercase dark:text-noir-300 text-noir-600 border dark:border-noir-600 border-noir-300 px-1.5 sm:px-2 py-0.5">
              {location}
            </span>
          )}
          {platform && (
            <span className="text-[9px] sm:text-[10px] font-body tracking-widest uppercase dark:text-noir-300 text-noir-600 border dark:border-noir-600 border-noir-300 px-1.5 sm:px-2 py-0.5">
              {platform}
            </span>
          )}
        </div>

        <p className="font-body text-xs sm:text-sm dark:text-noir-300 text-noir-600 leading-relaxed">
          {description[lang]}
        </p>
      </div>
    </motion.div>
  );
}
