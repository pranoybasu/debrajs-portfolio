"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LetterReveal, WordReveal } from "@/components/animations/TextReveal";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      {/* Horizontal lines for cinematic framing */}
      <motion.div
        className="absolute top-[15%] left-0 right-0 h-px dark:bg-noir-700/40 bg-noir-200/60"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.8, ease: [0.77, 0, 0.175, 1] }}
      />
      <motion.div
        className="absolute bottom-[15%] left-0 right-0 h-px dark:bg-noir-700/40 bg-noir-200/60"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.9, ease: [0.77, 0, 0.175, 1] }}
      />

      {/* Center content */}
      <div className="text-center px-6 z-10">
        {/* Name — large, thin, cinematic, BRIGHT WHITE */}
        <h1 className="mb-4 sm:mb-6">
          <LetterReveal
            text="DEBRAJ MUKHERJEE"
            delay={1.6}
            className="font-heading text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-cinematic dark:text-white text-noir-950"
          />
        </h1>

        {/* Title */}
        <div className="mb-3 sm:mb-4">
          <WordReveal
            text={t.hero.title}
            delay={2.2}
            className="font-body text-xs sm:text-sm md:text-base tracking-wide dark:text-noir-200 text-noir-600"
          />
        </div>

        {/* Divider */}
        <motion.div
          className="w-8 sm:w-12 h-px dark:bg-white/40 bg-noir-950/40 mx-auto mb-3 sm:mb-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 2.6, ease: [0.77, 0, 0.175, 1] }}
        />

        {/* Subtitle — location */}
        <motion.p
          className="font-body text-[10px] sm:text-xs md:text-sm tracking-widest uppercase dark:text-noir-400 text-noir-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          {t.hero.subtitle}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 safe-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.2 }}
      >
        <span className="text-[10px] font-body tracking-widest uppercase dark:text-noir-400 text-noir-500">
          {t.hero.scrollCta}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="dark:text-noir-400 text-noir-500" />
        </motion.div>
      </motion.div>

      {/* Corner frame marks — hidden on small screens */}
      <div className="hidden sm:block absolute top-8 left-8 w-8 h-8 border-t border-l dark:border-noir-600/30 border-noir-300/30" />
      <div className="hidden sm:block absolute top-8 right-8 w-8 h-8 border-t border-r dark:border-noir-600/30 border-noir-300/30" />
      <div className="hidden sm:block absolute bottom-8 left-8 w-8 h-8 border-b border-l dark:border-noir-600/30 border-noir-300/30" />
      <div className="hidden sm:block absolute bottom-8 right-8 w-8 h-8 border-b border-r dark:border-noir-600/30 border-noir-300/30" />
    </section>
  );
}
