"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
  const { lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t dark:border-noir-800 border-noir-200 dark:bg-noir-950 bg-noir-50 transition-colors duration-500 safe-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-[10px] sm:text-xs dark:text-noir-400 text-noir-500 font-body tracking-wide">
            &copy; {currentYear} Debraj Mukherjee.{" "}
            {lang === "en" ? "All rights reserved." : "Tutti i diritti riservati."}
          </p>
          <p className="text-[10px] sm:text-xs dark:text-noir-500 text-noir-400 font-body tracking-wide">
            {lang === "en"
              ? "Filmmaker \u00B7 Editor \u00B7 Colorist"
              : "Regista \u00B7 Montatore \u00B7 Colorista"}
          </p>
          <a
            href="https://pranoys-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] sm:text-xs dark:text-noir-500 text-noir-400 font-body tracking-wide dark:hover:text-white hover:text-noir-950 transition-colors duration-300 py-1"
          >
            Made with <span className="text-red-500">&#9829;</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
