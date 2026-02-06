import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://debrajs-portfolio.vercel.app"),
  title: {
    default: "Debraj Mukherjee — Filmmaker, Editor, Colorist",
    template: "%s | Debraj Mukherjee",
  },
  description:
    "Filmmaker, video editor, and colorist from Calcutta, based in Rome. Short films on Disney+ India, 20+ music videos, and documentary work across India and Italy.",
  keywords: [
    "Debraj Mukherjee",
    "Filmmaker",
    "Video Editor",
    "Colorist",
    "Short Films",
    "Music Videos",
    "Documentaries",
    "Rome",
    "Calcutta",
    "DaVinci Resolve",
    "Premiere Pro",
    "Disney+ India",
    "Isabella",
    "Film Director",
  ],
  authors: [{ name: "Debraj Mukherjee" }],
  creator: "Debraj Mukherjee",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "it_IT",
    url: "https://debrajs-portfolio.vercel.app",
    siteName: "Debraj Mukherjee",
    title: "Debraj Mukherjee — Filmmaker, Editor, Colorist",
    description:
      "Filmmaker, video editor, and colorist. Short films on Disney+ India, 20+ music videos, documentary work across India and Italy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Debraj Mukherjee — Filmmaker, Editor, Colorist",
    description:
      "Filmmaker, video editor, and colorist. Short films on Disney+ India, 20+ music videos, documentary work across India and Italy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-body antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
