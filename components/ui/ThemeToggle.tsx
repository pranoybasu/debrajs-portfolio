"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-8 h-8 flex items-center justify-center rounded-full border border-noir-600 dark:border-noir-600 hover:border-noir-400 dark:hover:border-noir-400 transition-colors duration-300"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: [1, 0.8, 1] }}
        transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
      >
        {isDark ? (
          <Sun size={14} strokeWidth={1.5} className="text-white" />
        ) : (
          <Moon size={14} strokeWidth={1.5} className="text-noir-950" />
        )}
      </motion.div>
    </button>
  );
}
