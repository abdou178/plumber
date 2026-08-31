import type { Metadata, Viewport } from "next";
import { LanguageThemeProvider } from "@/context/LanguageThemeContext";
import { JsonLdSchema } from "@/components/JsonLdSchema";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#070c1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "طوارئ سباكة الشارقة 24/7 | Plumber Maintenance 24/7 Sharjah (+971 56 388 9560)",
  description: "طوارئ سباكة فورية في الشارقة 24 ساعة. وصول خلال 20-30 دقيقة لعلاج انفجار المواسير، تسليك المجاري بماكينات السبرينغ، صيانة مضخات المياه، وتبديل السخانات. اتصل الآن 9560 388 56 971+",
  keywords: [
    "plumber sharjah",
    "سباك الشارقة",
    "emergency plumber sharjah",
    "طوارئ سباكة الشارقة",
    "سباك 24 ساعة الشارقة",
    "تسليك مجاري الشارقة",
    "تصليح مضخات المياه الشارقة",
    "سباك الناصرية",
    "سباك المجاز",
    "سباك النهدة الشارقة",
    "سباك مويلح",
    "صيانة سخانات الشارقة",
    "لحام مواسير PPR الشارقة"
  ],
  authors: [{ name: "Plumber Maintenance 24/7 Sharjah" }],
  creator: "Plumber Maintenance 24/7 Sharjah",
  publisher: "Plumber Maintenance 24/7 Sharjah",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "طوارئ سباكة وصيانة عامة الشارقة 24/7 | Emergency Plumber Sharjah",
    description: "24/7 Emergency Plumbing in Sharjah. 20-30 Min Arrival for Burst Pipes, Sewer Backups, Pumps & Heaters. Call +971 56 388 9560",
    url: "https://plumber-sharjah-247.ae",
    siteName: "Plumber Maintenance 24/7 Sharjah",
    locale: "ar_AE",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumber Maintenance 24/7 Sharjah | طوارئ سباكة الشارقة",
    description: "24/7 Rapid Emergency Plumbing & Drain Snaking in Sharjah. 20–30 min response.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <JsonLdSchema />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 min-h-screen selection:bg-sky-500 selection:text-white">
        <LanguageThemeProvider>
          {children}
        </LanguageThemeProvider>
      </body>
    </html>
  );
}
