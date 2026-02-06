"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className = "" }: PageTransitionProps) {
  return (
    <>
      {/* Page wipe overlay */}
      <motion.div
        className="fixed inset-0 dark:bg-noir-950 bg-noir-50 z-[9999] origin-left"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.77, 0, 0.175, 1],
          delay: 0.1,
        }}
        style={{ transformOrigin: "right" }}
      />
      {/* Content fade in */}
      <motion.main
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.main>
    </>
  );
}
