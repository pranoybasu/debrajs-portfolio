"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FilmGrain } from "@/components/animations/FilmGrain";
import { PageTransition } from "@/components/animations/PageTransition";
import {
  ScrollFadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollFadeIn";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Link from "next/link";
import { ArrowLeft, GraduationCap, Wrench, Clapperboard, Briefcase } from "lucide-react";

const education = [
  {
    institution: "Rome University of Fine Arts",
    degree: { en: "MA in Film Arts", it: "Laurea Magistrale in Arti Cinematografiche" },
    years: "2023–2025",
    location: { en: "Rome, Italy", it: "Roma, Italia" },
  },
  {
    institution: "Techno India University",
    degree: {
      en: "BFA in Digital Filmmaking",
      it: "Laurea in Cinematografia Digitale",
    },
    years: "2018–2022",
    location: { en: "Calcutta, India", it: "Calcutta, India" },
  },
];

const skills = [
  { name: "Video Editing", tools: "DaVinci Resolve, Premiere Pro" },
  { name: "Color Grading", tools: "DaVinci Resolve" },
  { name: "Documentary Filmmaking", tools: "" },
  { name: "Videography", tools: "Panasonic Lumix S5 DSII" },
  { name: "Photography", tools: "Adobe Photoshop" },
  { name: "On-Set Production Support", tools: "" },
];

const languages = [
  { name: "English", level: "Native" },
  { name: "Italian", level: "B2" },
  { name: "Hindi", level: "Fluent" },
  { name: "Bengali", level: "Native" },
];

export default function AboutPage() {
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
                {t.about.title}
              </h1>
              <div className="w-16 h-px dark:bg-noir-400 bg-noir-300 mb-6 sm:mb-10" />
              <p className="font-body text-sm sm:text-base md:text-lg dark:text-noir-200 text-noir-700 leading-relaxed">
                {t.about.bio}
              </p>
            </ScrollFadeIn>

            <div className="cinematic-line mb-10 sm:mb-16" />

            {/* Education */}
            <ScrollFadeIn className="mb-10 sm:mb-16">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <GraduationCap size={20} strokeWidth={1} className="dark:text-noir-300 text-noir-500" />
                <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-light tracking-wide uppercase dark:text-white text-noir-950">
                  {t.about.educationTitle}
                </h2>
              </div>
              <div className="space-y-6 sm:space-y-8">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="pl-4 sm:pl-6 border-l dark:border-noir-700 border-noir-300 dark:hover:border-noir-400 hover:border-noir-500 transition-colors duration-500"
                  >
                    <h3 className="font-heading text-base sm:text-lg font-light tracking-wide dark:text-white text-noir-950 mb-1">
                      {edu.institution}
                    </h3>
                    <p className="font-body text-xs sm:text-sm dark:text-noir-200 text-noir-600 mb-1">
                      {edu.degree[lang]}
                    </p>
                    <p className="font-body text-[10px] sm:text-xs dark:text-noir-400 text-noir-500 tracking-wide">
                      {edu.years} &middot; {edu.location[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollFadeIn>

            <div className="cinematic-line mb-10 sm:mb-16" />

            {/* Skills */}
            <ScrollFadeIn className="mb-10 sm:mb-16">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Wrench size={20} strokeWidth={1} className="dark:text-noir-300 text-noir-500" />
                <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-light tracking-wide uppercase dark:text-white text-noir-950">
                  {t.about.skillsTitle}
                </h2>
              </div>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-px dark:bg-noir-700 bg-noir-200">
                {skills.map((skill) => (
                  <StaggerItem key={skill.name}>
                    <div className="dark:bg-noir-950 bg-noir-50 p-4 sm:p-5 dark:hover:bg-noir-900 hover:bg-white transition-colors duration-500">
                      <h3 className="font-body text-xs sm:text-sm dark:text-white text-noir-950 tracking-wide mb-1">
                        {skill.name}
                      </h3>
                      {skill.tools && (
                        <p className="font-body text-[10px] sm:text-xs dark:text-noir-400 text-noir-500">
                          {skill.tools}
                        </p>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ScrollFadeIn>

            <div className="cinematic-line mb-10 sm:mb-16" />

            {/* Languages */}
            <ScrollFadeIn className="mb-10 sm:mb-16">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-light tracking-wide uppercase dark:text-white text-noir-950 mb-6 sm:mb-8">
                {lang === "en" ? "Languages" : "Lingue"}
              </h2>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4">
                {languages.map((l) => (
                  <div
                    key={l.name}
                    className="border dark:border-noir-700 border-noir-300 px-4 py-3 sm:px-5 dark:hover:border-noir-400 hover:border-noir-500 transition-colors duration-500"
                  >
                    <span className="font-body text-xs sm:text-sm dark:text-white text-noir-950 block">{l.name}</span>
                    <span className="font-body text-[10px] sm:text-xs dark:text-noir-400 text-noir-500">{l.level}</span>
                  </div>
                ))}
              </div>
            </ScrollFadeIn>

            <div className="cinematic-line mb-10 sm:mb-16" />

            {/* On-Set Experience */}
            <ScrollFadeIn className="mb-10 sm:mb-16">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Clapperboard size={20} strokeWidth={1} className="dark:text-noir-300 text-noir-500" />
                <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-light tracking-wide uppercase dark:text-white text-noir-950">
                  {t.about.onSetTitle}
                </h2>
              </div>
              <StaggerContainer className="space-y-3">
                {t.about.onSetItems.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-3 pl-3 sm:pl-4">
                      <span className="w-1 h-1 rounded-full dark:bg-noir-400 bg-noir-500 mt-2 shrink-0" />
                      <p className="font-body text-xs sm:text-sm dark:text-noir-200 text-noir-600">{item}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ScrollFadeIn>

            <div className="cinematic-line mb-10 sm:mb-16" />

            {/* Professional Experience */}
            <ScrollFadeIn>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Briefcase size={20} strokeWidth={1} className="dark:text-noir-300 text-noir-500" />
                <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-light tracking-wide uppercase dark:text-white text-noir-950">
                  {t.about.professionalTitle}
                </h2>
              </div>
              <StaggerContainer className="space-y-4">
                {t.about.professionalItems.map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="pl-4 sm:pl-6 border-l dark:border-noir-700 border-noir-300 dark:hover:border-noir-400 hover:border-noir-500 transition-colors duration-500 py-2">
                      <p className="font-body text-xs sm:text-sm dark:text-noir-200 text-noir-600">{item}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ScrollFadeIn>
          </div>
        </div>
      </PageTransition>
      <Footer />
    </>
  );
}
