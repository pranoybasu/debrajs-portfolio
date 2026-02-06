"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function CurtainReveal() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Left curtain */}
          <motion.div
            className="fixed top-0 left-0 w-1/2 h-full dark:bg-noir-950 bg-noir-50 z-[10000]"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 1.2,
              ease: [0.77, 0, 0.175, 1],
              delay: 0.6,
            }}
          />
          {/* Right curtain */}
          <motion.div
            className="fixed top-0 right-0 w-1/2 h-full dark:bg-noir-950 bg-noir-50 z-[10000]"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 1.2,
              ease: [0.77, 0, 0.175, 1],
              delay: 0.6,
            }}
          />
          {/* Center line that splits */}
          <motion.div
            className="fixed top-0 left-1/2 w-px h-full dark:bg-noir-400 bg-noir-300 z-[10001] -translate-x-1/2"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              scaleY: { duration: 0.5, ease: [0.77, 0, 0.175, 1] },
              opacity: { duration: 0.3, delay: 0.5 },
            }}
            style={{ transformOrigin: "top" }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
