"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { motion } from "framer-motion";

export function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-1 text-xs font-body tracking-widest uppercase group"
      aria-label={`Switch language to ${lang === "en" ? "Italian" : "English"}`}
    >
      <span
        className={`transition-opacity duration-300 ${
          lang === "en" ? "dark:text-white text-noir-950" : "dark:text-noir-500 text-noir-400"
        }`}
      >
        EN
      </span>
      <span className="dark:text-noir-500 text-noir-400 mx-0.5">/</span>
      <span
        className={`transition-opacity duration-300 ${
          lang === "it" ? "dark:text-white text-noir-950" : "dark:text-noir-500 text-noir-400"
        }`}
      >
        IT
      </span>
      {/* Underline indicator */}
      <motion.div
        className="absolute -bottom-1 h-px dark:bg-white bg-noir-950"
        initial={false}
        animate={{
          left: lang === "en" ? 0 : "60%",
          width: lang === "en" ? "40%" : "40%",
        }}
        transition={{ duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
      />
    </button>
  );
}
