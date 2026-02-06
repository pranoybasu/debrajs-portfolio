"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export function TextReveal({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  as = "div",
}: TextRevealProps) {
  const Tag = motion.create(as);

  return (
    <div className="overflow-hidden">
      <Tag
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration,
          delay,
          ease: [0.77, 0, 0.175, 1],
        }}
        className={className}
      >
        {children}
      </Tag>
    </div>
  );
}

interface WordRevealProps {
  text: string;
  delay?: number;
  className?: string;
  wordClassName?: string;
}

export function WordReveal({
  text,
  delay = 0,
  className = "",
  wordClassName = "",
}: WordRevealProps) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className={`inline-block ${wordClassName}`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.08,
              ease: [0.77, 0, 0.175, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

interface LetterRevealProps {
  text: string;
  delay?: number;
  className?: string;
  letterClassName?: string;
}

export function LetterReveal({
  text,
  delay = 0,
  className = "",
  letterClassName = "",
}: LetterRevealProps) {
  const words = text.split(" ");
  let globalIndex = 0;

  return (
    <span className={className}>
      {words.map((word, wordIdx) => {
        const wordLetters = word.split("");
        const startIndex = globalIndex;
        globalIndex += word.length + 1; // +1 for the space

        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {wordLetters.map((letter, letterIdx) => (
              <span key={letterIdx} className="inline-block overflow-hidden">
                <motion.span
                  className={`inline-block ${letterClassName}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: delay + (startIndex + letterIdx) * 0.03,
                    ease: [0.77, 0, 0.175, 1],
                  }}
                >
                  {letter}
                </motion.span>
              </span>
            ))}
            {/* Space between words */}
            {wordIdx < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </span>
  );
}
