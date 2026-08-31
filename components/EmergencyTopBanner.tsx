"use client";

import React from "react";
import { Phone, MessageSquare, Clock, ShieldCheck, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { CONTRACTOR_DATA } from "@/lib/contractor-data";

export function EmergencyTopBanner() {
  const { isArabic, lang, toggleLanguage } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white text-xs sm:text-sm font-medium py-2 px-3 sm:px-4 shadow-md transition-colors relative z-40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Live Status Pulse */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span className="font-bold tracking-wide">
            {isArabic ? "طوارئ سباكة 24/7 الشارقة:" : "24/7 SHARJAH EMERGENCY PLUMBING:"}
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-amber-100">
            <Clock className="w-3.5 h-3.5" />
            {isArabic ? "متوسط الوصول 20–30 دقيقة" : "Avg Arrival 20–30 Mins"}
          </span>
        </div>

        {/* Center: Base location note */}
        <div className="hidden lg:flex items-center gap-1.5 text-amber-100 text-xs">
          <MapPin className="w-3.5 h-3.5 text-amber-200" />
          <span>
            {isArabic
              ? "المركز الرئيسي: شارع 28، الناصرية، الشارقة (تغطية كاملة للمجاز والنهدة ومويلح)"
              : "Base: 28 St, Al Nasiriyah (Covering Al Majaz, Al Nahda, Muwaileh & All Sharjah)"}
          </span>
        </div>

        {/* Right: Quick Call & Language Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${CONTRACTOR_DATA.phone}`}
            className="inline-flex items-center gap-1 bg-black/30 hover:bg-black/40 px-2.5 py-1 rounded text-white font-bold transition-transform active:scale-95"
            aria-label="Direct Phone Call"
          >
            <Phone className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
            <span dir="ltr">{CONTRACTOR_DATA.phoneDisplay}</span>
          </a>

          <button
            onClick={toggleLanguage}
            className="bg-white/20 hover:bg-white/30 text-white px-2 py-0.5 rounded text-xs font-semibold border border-white/30 transition-colors"
            title="Switch Language / تغيير اللغة"
          >
            {lang === "ar" ? "English" : "عربي"}
          </button>
        </div>
      </div>
    </div>
  );
}
