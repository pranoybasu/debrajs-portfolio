"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FilmGrain } from "@/components/animations/FilmGrain";
import { PageTransition } from "@/components/animations/PageTransition";
import { ScrollFadeIn } from "@/components/animations/ScrollFadeIn";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, Instagram, ExternalLink, Youtube, Download } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/debrajszn/",
    icon: Instagram,
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/channel/UCEBJjst7HENiXQtjx6oRlOw",
    icon: Youtube,
  },
  {
    platform: "Linktree",
    url: "https://linktr.ee/debrajmukherjee",
    icon: ExternalLink,
  },
];

export default function ContactPage() {
  const { t, lang } = useLanguage();

  return (
    <>
      <FilmGrain />
      <Navigation />
      <PageTransition>
        <div className="page-container pt-20 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
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
                {t.contact.title}
              </h1>
              <div className="w-16 h-px dark:bg-noir-400 bg-noir-300 mb-4 sm:mb-6" />
              <p className="font-body text-sm sm:text-base md:text-lg dark:text-noir-300 text-noir-600 leading-relaxed max-w-2xl">
                {t.contact.subtitle}
              </p>
            </ScrollFadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px dark:bg-noir-700 bg-noir-200 mb-10 sm:mb-16">
              {/* Email */}
              <ScrollFadeIn delay={0.1}>
                <a
                  href="mailto:debrajms33@gmail.com"
                  className="block dark:bg-noir-950 bg-noir-50 p-6 sm:p-8 md:p-10 dark:hover:bg-noir-900 hover:bg-white transition-colors duration-500 group"
                >
                  <Mail
                    size={22}
                    strokeWidth={1}
                    className="dark:text-noir-400 text-noir-500 dark:group-hover:text-white group-hover:text-noir-950 transition-colors duration-500 mb-3 sm:mb-4"
                  />
                  <p className="text-[10px] sm:text-xs font-body tracking-widest uppercase dark:text-noir-400 text-noir-500 mb-1.5 sm:mb-2">
                    {t.contact.emailLabel}
                  </p>
                  <p className="font-body text-sm sm:text-base dark:text-white text-noir-950 dark:group-hover:text-noir-200 group-hover:text-noir-700 transition-colors duration-300 break-all sm:break-normal">
                    debrajms33@gmail.com
                  </p>
                </a>
              </ScrollFadeIn>

              {/* Phone */}
              <ScrollFadeIn delay={0.2}>
                <a
                  href="tel:+393455367216"
                  className="block dark:bg-noir-950 bg-noir-50 p-6 sm:p-8 md:p-10 dark:hover:bg-noir-900 hover:bg-white transition-colors duration-500 group"
                >
                  <Phone
                    size={22}
                    strokeWidth={1}
                    className="dark:text-noir-400 text-noir-500 dark:group-hover:text-white group-hover:text-noir-950 transition-colors duration-500 mb-3 sm:mb-4"
                  />
                  <p className="text-[10px] sm:text-xs font-body tracking-widest uppercase dark:text-noir-400 text-noir-500 mb-1.5 sm:mb-2">
                    {t.contact.phoneLabel}
                  </p>
                  <p className="font-body text-sm sm:text-base dark:text-white text-noir-950 dark:group-hover:text-noir-200 group-hover:text-noir-700 transition-colors duration-300">
                    +39 345 536 7216
                  </p>
                </a>
              </ScrollFadeIn>

              {/* Location */}
              <ScrollFadeIn delay={0.3}>
                <div className="dark:bg-noir-950 bg-noir-50 p-6 sm:p-8 md:p-10">
                  <MapPin
                    size={22}
                    strokeWidth={1}
                    className="dark:text-noir-400 text-noir-500 mb-3 sm:mb-4"
                  />
                  <p className="text-[10px] sm:text-xs font-body tracking-widest uppercase dark:text-noir-400 text-noir-500 mb-1.5 sm:mb-2">
                    {t.contact.locationLabel}
                  </p>
                  <p className="font-body text-sm sm:text-base dark:text-white text-noir-950">
                    {t.contact.location}
                  </p>
                </div>
              </ScrollFadeIn>

              {/* Availability */}
              <ScrollFadeIn delay={0.4}>
                <div className="dark:bg-noir-950 bg-noir-50 p-6 sm:p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="w-2 h-2 rounded-full dark:bg-white bg-noir-950 animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-body tracking-widest uppercase dark:text-noir-400 text-noir-500">
                      {lang === "en" ? "Available" : "Disponibile"}
                    </span>
                  </div>
                  <p className="font-body text-xs sm:text-sm dark:text-noir-300 text-noir-600 leading-relaxed">
                    {t.contact.subtitle}
                  </p>
                </div>
              </ScrollFadeIn>
            </div>

            <div className="cinematic-line mb-10 sm:mb-16" />

            {/* Social Links */}
            <ScrollFadeIn>
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-light tracking-wide uppercase dark:text-white text-noir-950 mb-6 sm:mb-8">
                {t.contact.followLabel}
              </h2>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 border dark:border-noir-700 border-noir-300 px-5 sm:px-6 py-3.5 sm:py-4 dark:hover:border-white hover:border-noir-950 transition-colors duration-500 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.1,
                        duration: 0.5,
                        ease: [0.77, 0, 0.175, 1],
                      }}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1}
                        className="dark:text-noir-400 text-noir-500 dark:group-hover:text-white group-hover:text-noir-950 transition-colors duration-300"
                      />
                      <span className="font-body text-xs sm:text-sm tracking-wide dark:text-noir-300 text-noir-600 dark:group-hover:text-white group-hover:text-noir-950 transition-colors duration-300">
                        {link.platform}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </ScrollFadeIn>

            <div className="cinematic-line my-10 sm:my-16" />

            {/* Downloads */}
            <ScrollFadeIn>
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-light tracking-wide uppercase dark:text-white text-noir-950 mb-6 sm:mb-8">
                {lang === "en" ? "Downloads" : "Scarica"}
              </h2>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                {[
                  { label: "CV", file: "/assets/CV_DEBRAJ.pdf" },
                  { label: "Portfolio", file: "/assets/DEBRAJMV_Portfolio.pdf" },
                ].map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.file}
                    download
                    className="flex items-center gap-3 border dark:border-noir-700 border-noir-300 px-5 sm:px-6 py-3.5 sm:py-4 dark:hover:border-white hover:border-noir-950 transition-colors duration-500 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5,
                      ease: [0.77, 0, 0.175, 1],
                    }}
                  >
                    <Download
                      size={18}
                      strokeWidth={1}
                      className="dark:text-noir-400 text-noir-500 dark:group-hover:text-white group-hover:text-noir-950 transition-colors duration-300"
                    />
                    <span className="font-body text-xs sm:text-sm tracking-wide dark:text-noir-300 text-noir-600 dark:group-hover:text-white group-hover:text-noir-950 transition-colors duration-300">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </PageTransition>
      <Footer />
    </>
  );
}
