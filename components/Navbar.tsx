"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Phone,
  MessageSquare,
  Wrench,
  Sun,
  Moon,
  Menu,
  X,
  ShieldCheck,
  Flame,
  Droplets,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { CONTRACTOR_DATA } from "@/lib/contractor-data";

export function Navbar() {
  const { lang, isArabic, toggleLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "#triage", label: t("nav_emergency_triage"), urgent: true },
    { href: "#services", label: t("nav_services") },
    { href: "#process", label: t("nav_process") },
    { href: "#coverage", label: t("nav_areas") },
    { href: "#pricing", label: t("nav_pricing") },
    { href: "#reviews", label: t("nav_reviews") },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-tight">
                  {isArabic ? CONTRACTOR_DATA.name.ar : CONTRACTOR_DATA.name.en}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
                {isArabic
                  ? "طوارئ سباكة وتسليك مجاري 24 ساعة"
                  : "24/7 Rapid Emergency Dispatch"}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 ${
                  link.urgent
                    ? "text-orange-600 dark:text-orange-400 font-bold flex items-center gap-1 bg-orange-50 dark:bg-orange-950/40 px-2.5 py-1 rounded-md border border-orange-200 dark:border-orange-900/50"
                    : "text-slate-700 dark:text-slate-200"
                }`}
              >
                {link.urgent && <Droplets className="w-3.5 h-3.5 animate-bounce" />}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Utilities (Theme, Lang, CTAs) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                aria-label="Toggle Theme"
                title="Toggle Light/Dark Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>
            )}

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors"
              title="Change Language"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </button>

            {/* WhatsApp Direct SOS */}
            <a
              href={`https://wa.me/${CONTRACTOR_DATA.whatsapp}?text=${encodeURIComponent(
                isArabic
                  ? "مرحباً، لدي حالة طوارئ سباكة في الشارقة وأحتاج فني فوراً."
                  : "Hello, I have a plumbing emergency in Sharjah and need immediate technician dispatch."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold px-3.5 py-2 rounded-lg text-xs md:text-sm shadow-sm transition-transform active:scale-95"
              aria-label="WhatsApp Dispatch"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{isArabic ? "واتساب SOS" : "WhatsApp"}</span>
            </a>

            {/* Primary Call Button */}
            <a
              href={`tel:${CONTRACTOR_DATA.phone}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold px-4 py-2 rounded-lg text-xs md:text-sm shadow-md shadow-orange-600/20 transition-transform active:scale-95"
              aria-label="Call Emergency Hotline"
            >
              <Phone className="w-4 h-4 animate-pulse" />
              <span dir="ltr" className="font-mono">{CONTRACTOR_DATA.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Theme + Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 transition-all animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  link.urgent
                    ? "bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 font-bold border border-orange-200 dark:border-orange-900"
                    : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
            <a
              href={`tel:${CONTRACTOR_DATA.phone}`}
              className="flex items-center justify-center gap-1.5 bg-orange-600 text-white py-2.5 rounded-lg font-bold text-xs shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{isArabic ? "اتصال فوري" : "Call Now"}</span>
            </a>
            <a
              href={`https://wa.me/${CONTRACTOR_DATA.whatsapp}?text=${encodeURIComponent(
                isArabic
                  ? "مرحباً، لدي حالة طوارئ سباكة في الشارقة وأحتاج فني فوراً."
                  : "Hello, I have a plumbing emergency in Sharjah and need immediate technician dispatch."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-[#25D366] text-slate-950 py-2.5 rounded-lg font-bold text-xs shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>{isArabic ? "واتساب SOS" : "WhatsApp"}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
