export type Language = "en" | "it";

export interface FilmWork {
  id: string;
  title: string;
  year: number;
  language: string;
  platform?: string;
  youtubeId?: string;
  description: {
    en: string;
    it: string;
  };
  status?: "released" | "touring" | "unreleased";
}

export interface MusicVideo {
  id: string;
  title: string;
  year: number;
  location: string;
  category: "pop" | "rap" | "drill";
  youtubeId?: string;
  description?: {
    en: string;
    it: string;
  };
}

export interface Documentary {
  id: string;
  title: string;
  year: number;
  location: string;
  youtubeId?: string;
  festival?: string;
  description: {
    en: string;
    it: string;
  };
}

export interface Education {
  institution: string;
  degree: string;
  years: string;
  location: string;
}

export interface Skill {
  name: string;
  category: "editing" | "production" | "creative";
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContentStrings {
  nav: {
    films: string;
    musicVideos: string;
    documentaries: string;
    about: string;
    contact: string;
  };
  hero: {
    name: string;
    title: string;
    subtitle: string;
    scrollCta: string;
  };
  landing: {
    categoriesTitle: string;
    filmsLabel: string;
    filmsCount: string;
    musicVideosLabel: string;
    musicVideosCount: string;
    documentariesLabel: string;
    documentariesCount: string;
  };
  about: {
    title: string;
    bio: string;
    educationTitle: string;
    skillsTitle: string;
    experienceTitle: string;
    onSetTitle: string;
    onSetItems: string[];
    professionalTitle: string;
    professionalItems: string[];
  };
  films: {
    title: string;
    subtitle: string;
    disneyNote: string;
  };
  musicVideos: {
    title: string;
    subtitle: string;
  };
  documentaries: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    location: string;
    followLabel: string;
  };
  common: {
    watchNow: string;
    comingSoon: string;
    backToHome: string;
    year: string;
    location: string;
  };
}
