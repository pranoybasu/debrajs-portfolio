"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/films", key: "films" as const },
  { href: "/music-videos", key: "musicVideos" as const },
  { href: "/documentaries", key: "documentaries" as const },
  { href: "/about", key: "about" as const },
  { href: "/contact", key: "contact" as const },
];

export function Navigation() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md border-b dark:bg-noir-950/80 dark:border-noir-800/50 bg-noir-50/80 border-noir-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo / Name */}
            <Link
              href="/"
              className="font-heading text-sm tracking-cinematic uppercase dark:text-white text-noir-950 dark:hover:text-noir-200 hover:text-noir-600 transition-colors duration-300 py-2"
            >
              Debraj M.
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-xs font-body tracking-wide uppercase transition-colors duration-300 py-2 ${
                      isActive
                        ? "dark:text-white text-noir-950"
                        : "dark:text-noir-400 text-noir-500 dark:hover:text-white hover:text-noir-950"
                    }`}
                  >
                    {t.nav[link.key]}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-0.5 left-0 right-0 h-px dark:bg-white bg-noir-950"
                        layoutId="nav-underline"
                        transition={{ duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
                      />
                    )}
                  </Link>
                );
              })}
              <div className="flex items-center gap-3 ml-2 pl-4 border-l dark:border-noir-700 border-noir-200">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
              <LanguageToggle />
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="dark:text-white text-noir-950 p-2.5 -mr-2 flex items-center justify-center"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu — transparent overlay with backdrop blur */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
            className="lg:hidden fixed inset-0 z-[99] pt-14 sm:pt-16 backdrop-blur-xl dark:bg-noir-950/90 bg-noir-50/90 overflow-y-auto"
          >
            <div className="px-6 py-10 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-2xl font-heading tracking-wide uppercase transition-colors duration-300 py-5 border-b dark:border-white/10 border-noir-950/10 ${
                        isActive
                          ? "dark:text-white text-noir-950"
                          : "dark:text-noir-400 text-noir-500"
                      }`}
                    >
                      {t.nav[link.key]}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
