import { FilmWork, MusicVideo, Documentary } from "./types";

// ============================================================
// All YouTube IDs scraped from: https://linktr.ee/debrajmukherjee
// ============================================================

export const films: FilmWork[] = [
  {
    id: "isabella",
    title: "Isabella",
    year: 2025,
    language: "Italian",
    platform: "Athens International Digital Film Festival",
    posterImage: "/allimageassets/Isabella main poster.jpeg",
    status: "touring",
    description: {
      en: "My first ever film directed in Italian — a foreign language for me. Premiered at the 14th edition of Athens International Digital Film Festival in December 2025. Currently touring film festivals. Coming soon 2026.",
      it: "Il mio primo film in assoluto diretto in italiano — una lingua straniera per me. Presentato in anteprima alla 14ᵃ edizione dell'Athens International Digital Film Festival nel dicembre 2025. Attualmente in tournée nei festival cinematografici. In arrivo 2026.",
    },
  },
  {
    id: "happy-with-little",
    title: "Olpo Te Khushi",
    year: 2022,
    language: "Bengali",
    platform: "Tramline",
    youtubeId: "nJFN9PLT338",
    status: "released",
    description: {
      en: "A Bengali-language short film released through Tramline, a local YouTube channel in Calcutta. The third short film in a body of work that earned a full scholarship to Rome University of Fine Arts.",
      it: "Un cortometraggio in lingua bengalese pubblicato attraverso Tramline, un canale YouTube locale di Calcutta. Il terzo cortometraggio in un corpus di lavori che mi ha fatto guadagnare una borsa di studio completa per l'Università di Belle Arti di Roma.",
    },
  },
  {
    id: "night-shift",
    title: "Night Shift",
    year: 2021,
    language: "Hindi",
    platform: "Disney+ Hotstar",
    youtubeId: "sn-uJtp1uNQ",
    status: "released",
    description: {
      en: "A Hindi-language short film that continued the journey started by 'Why Not.' Also featured on Disney+ Hotstar India, this film solidified the storytelling foundation that earned a full scholarship abroad.",
      it: "Un cortometraggio in lingua hindi che ha continuato il viaggio iniziato con 'Why Not.' Anche questo in evidenza su Disney+ Hotstar India, ha consolidato le basi narrative che mi hanno fatto guadagnare una borsa di studio completa all'estero.",
    },
  },
  {
    id: "why-not",
    title: "Why Not",
    year: 2020,
    language: "English",
    platform: "Disney+ Hotstar",
    youtubeId: "UdtWWS7XeOA",
    status: "released",
    description: {
      en: "My first short film, written, directed and edited at the age of 19. Featured on Disney+ Hotstar India on a four-year contract. A story born from scarcity that launched an international journey.",
      it: "Il mio primo cortometraggio, scritto, diretto e montato all'età di 19 anni. In evidenza su Disney+ Hotstar India con un contratto quadriennale. Una storia nata dalla scarsità che ha lanciato un viaggio internazionale.",
    },
  },
];

export const musicVideos: MusicVideo[] = [
  // --- 2024 ---
  {
    id: "inarticulate-romance",
    title: "Inarticulate Ro",
    year: 2024,
    location: "Rome",
    category: "pop",
    youtubeId: "yltBoCVurbw",
    description: {
      en: "Official music video for Mezzanine Bay. A Kolkata artist's space-rock jam, filmed as part of 8 Films Italia — directed by Debraj Mukherjee in Rome.",
      it: "Video musicale ufficiale per Mezzanine Bay. Un brano space-rock di un artista di Kolkata, filmato come parte di 8 Films Italia — diretto da Debraj Mukherjee a Roma.",
    },
  },
  {
    id: "motorcycle-muse",
    title: "Motorcycle Muse",
    year: 2024,
    location: "Rome",
    category: "pop",
    youtubeId: "z9xs3ByaZJ0",
    description: {
      en: "Official music video for Mezzanine Bay. Directed and edited in Rome — from location scouting to the final edit, a complete creative vision realized in a foreign land.",
      it: "Video musicale ufficiale per Mezzanine Bay. Diretto e montato a Roma — dal sopralluogo al montaggio finale, una visione creativa completa realizzata in terra straniera.",
    },
  },
  {
    id: "al-capone",
    title: "Al Capone",
    year: 2024,
    location: "Calcutta",
    category: "rap",
    youtubeId: "NsOAdYxvmS4",
    description: {
      en: "Official music video for NC17. A hard-hitting rap track from the underground scene of Calcutta.",
      it: "Video musicale ufficiale per NC17. Un brano rap incisivo dalla scena underground di Calcutta.",
    },
  },
  // --- 2023 ---
  {
    id: "pagolchoda",
    title: "Pagolchoda (পাগলচোদা)",
    year: 2023,
    location: "Calcutta",
    category: "rap",
    youtubeId: "Ca5uV57EZ5g",
    description: {
      en: "Official music video for David x Addy. A raw Bangla rap track from the underground scene of Calcutta.",
      it: "Video musicale ufficiale per David x Addy. Un brano rap bengalese crudo dalla scena underground di Calcutta.",
    },
  },
  {
    id: "drill",
    title: "Shyatabhanga Drill",
    year: 2023,
    location: "Calcutta",
    category: "drill",
    youtubeId: "7mZKx_lP30c",
    description: {
      en: "Official music video for Old Boy, released under Mofossol Music. A Bangla drill track — proving that great visuals come from vision, not equipment.",
      it: "Video musicale ufficiale per Old Boy, pubblicato sotto Mofossol Music. Un brano drill bengalese — a dimostrazione che le grandi immagini nascono dalla visione, non dall'attrezzatura.",
    },
  },
  // --- 2022 ---
  {
    id: "bhoy",
    title: "Bhoy (ভয়)",
    year: 2022,
    location: "Calcutta",
    category: "rap",
    youtubeId: "tWTmbMJ5kmg",
    description: {
      en: "Official music video for DAVE. A visceral Bengali rap track channeling fear and defiance from the streets of Calcutta.",
      it: "Video musicale ufficiale per DAVE. Un brano rap bengalese viscerale che canalizza paura e sfida dalle strade di Calcutta.",
    },
  },
  {
    id: "bharat-mata-ki-jay",
    title: "Bharat Mata Ki Jay",
    year: 2022,
    location: "Calcutta",
    category: "rap",
    youtubeId: "xZE2uKa6Dac",
    description: {
      en: "Official music video for Old Boy x BeastBuzz, released under Mofossol Music. Patriotic energy meets underground Bangla rap.",
      it: "Video musicale ufficiale per Old Boy x BeastBuzz, pubblicato sotto Mofossol Music. L'energia patriottica incontra il rap underground bengalese.",
    },
  },
  {
    id: "best-in-the-city",
    title: "Best in the City",
    year: 2022,
    location: "Calcutta",
    category: "rap",
    youtubeId: "ZvYYInKDnAk",
    description: {
      en: "Official music video for NC17 ft. DAVE. Raw talent and ambition from Calcutta's underground rap scene.",
      it: "Video musicale ufficiale per NC17 ft. DAVE. Talento grezzo e ambizione dalla scena rap underground di Calcutta.",
    },
  },
  {
    id: "scene-set",
    title: "Scene Set",
    year: 2022,
    location: "Calcutta",
    category: "rap",
    youtubeId: "SfxdhOSQlQ8",
    description: {
      en: "Official music video for Ghostface feat. Highological & DAVE. From the thriving independent hip hop scene of Calcutta.",
      it: "Video musicale ufficiale per Ghostface feat. Highological & DAVE. Dalla fiorente scena hip hop indipendente di Calcutta.",
    },
  },
  {
    id: "losing-zone",
    title: "Losing Zone",
    year: 2022,
    location: "Calcutta",
    category: "rap",
    youtubeId: "bGmwmsuUmKk",
    description: {
      en: "Official music video for DAVE ft. Ghostface. Themes of struggle and perseverance from the streets of Calcutta.",
      it: "Video musicale ufficiale per DAVE ft. Ghostface. Temi di lotta e perseveranza dalle strade di Calcutta.",
    },
  },
  {
    id: "welcome-2-zombieeland",
    title: "Welcome 2 Zombieeland",
    year: 2022,
    location: "Calcutta",
    category: "drill",
    youtubeId: "6HzznOYlN9c",
    description: {
      en: "Official video featuring Kobir Paul, Highological, Ghostface, Nishash, NC17 & DAVE. The anthem for Zombieeland Records — the label where it all started in Calcutta.",
      it: "Video ufficiale con Kobir Paul, Highological, Ghostface, Nishash, NC17 & DAVE. L'inno di Zombieeland Records — l'etichetta dove tutto è iniziato a Calcutta.",
    },
  },
  {
    id: "dancing-demon",
    title: "Dancing Demon",
    year: 2022,
    location: "Calcutta",
    category: "drill",
    youtubeId: "EmrKJ2V-oHk",
    description: {
      en: "Official music video for DAVE ft. Nishash. Dark, kinetic energy from the underground scene of Calcutta.",
      it: "Video musicale ufficiale per DAVE ft. Nishash. Energia oscura e cinetica dalla scena underground di Calcutta.",
    },
  },
];

export const documentaries: Documentary[] = [
  // --- 2024 ---
  {
    id: "maestro",
    title: "Maestro",
    year: 2024,
    location: "Rome",
    youtubeId: "4eYAS6e1IoU",
    description: {
      en: "A short documentary on Francesco Leonardi, a flute maestro at the Conservatorio di Santa Cecilia — the oldest music school of Rome. Capturing the dedication and artistry of a lifetime devoted to music.",
      it: "Un breve documentario su Francesco Leonardi, maestro di flauto al Conservatorio di Santa Cecilia — la più antica scuola di musica di Roma. Catturando la dedizione e l'arte di una vita dedicata alla musica.",
    },
  },
  {
    id: "il-naya",
    title: "Il Naya",
    year: 2024,
    location: "Rome",
    youtubeId: "9TwSimQK5oA",
    description: {
      en: "A documentary about Il Naya (Flavio Bedini), an outstanding underground beat boxer and busker in Rome. An assignment from Rome University of Fine Arts capturing the art beneath the city.",
      it: "Un documentario su Il Naya (Flavio Bedini), un eccezionale beatboxer e artista di strada underground a Roma. Un'assegnazione dell'Università di Belle Arti di Roma che cattura l'arte sotto la città.",
    },
  },
  // --- 2023 ---
  {
    id: "freestyle",
    title: "Freestyle",
    year: 2023,
    location: "Rome",
    youtubeId: "9XWyEHyiMgw",
    description: {
      en: "A zero-budget documentary on multilingual freestyle rappers from Rome — featuring Melkan, Yuno and Serena. An assignment from Director Sergio Basso at Rome University of Fine Arts.",
      it: "Un documentario a budget zero su rapper freestyle multilingue di Roma — con Melkan, Yuno e Serena. Un'assegnazione del Direttore Sergio Basso all'Università di Belle Arti di Roma.",
    },
  },
  {
    id: "anna-carmen-portrait",
    title: "Anna Carmen — Stranger Portrait",
    year: 2023,
    location: "Rome",
    youtubeId: "naL0wteSGDI",
    description: {
      en: "A stranger portrait of Anna Carmen — an intimate character study filmed at the Rome University of Fine Arts. Capturing a fleeting encounter with cinematic stillness.",
      it: "Un ritratto di Anna Carmen — uno studio intimo del personaggio filmato all'Università di Belle Arti di Roma. Catturando un incontro fugace con quiete cinematografica.",
    },
  },
  {
    id: "rome-monti",
    title: "Rome — Monti",
    year: 2023,
    location: "Rome",
    youtubeId: "UQRGMJGHBEA",
    description: {
      en: "A cinematography assignment from the Rome University of Fine Arts — a visual study of the historic Monti neighborhood in Rome. Capturing the textures and rhythms of the city.",
      it: "Un'assegnazione di cinematografia dell'Università di Belle Arti di Roma — uno studio visivo dello storico quartiere Monti a Roma. Catturando le texture e i ritmi della città.",
    },
  },
  // --- 2019 ---
  {
    id: "save-trams",
    title: "Save Trams",
    year: 2019,
    location: "Calcutta",
    festival: "Finalist, Barnes Film Festival, UK",
    youtubeId: "rGHqJKA5-S4",
    description: {
      en: "One of the earliest documentary works — a tribute to the iconic trams of Calcutta. Selected as a finalist at the Barnes Film Festival in the United Kingdom.",
      it: "Uno dei primi lavori documentaristici — un tributo agli iconici tram di Calcutta. Selezionato come finalista al Barnes Film Festival nel Regno Unito.",
    },
  },
];
