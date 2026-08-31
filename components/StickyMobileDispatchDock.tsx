"use client";

import React from "react";
import { Phone, MessageSquare, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { CONTRACTOR_DATA } from "@/lib/contractor-data";

export function StickyMobileDispatchDock() {
  const { isArabic, t } = useLanguage();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 pb-3 sm:pb-3 shadow-2xl transition-all">
      <div className="max-w-md mx-auto space-y-1.5">
        {/* Live Standby Status Strip */}
        <div className="flex items-center justify-between px-1 text-[11px] text-slate-300">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-400">
              {isArabic ? "فني سباكة متأهب الآن بالشارقة" : "Sharjah Plumber on Standby"}
            </span>
          </div>
          <span className="text-slate-400 font-mono">
            {isArabic ? "وصول 20–30 دقيقة" : "20–30 min ETA"}
          </span>
        </div>

        {/* Dual 1-Tap Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          {/* Call Button */}
          <a
            href={`tel:${CONTRACTOR_DATA.phone}`}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 active:from-orange-700 active:to-amber-700 text-white font-extrabold py-3 px-3 rounded-xl text-xs sm:text-sm shadow-md transition-transform active:scale-95"
            aria-label="Direct Phone Call"
          >
            <Phone className="w-4 h-4 animate-pulse shrink-0" />
            <span className="truncate">{t("sticky_call")}</span>
          </a>

          {/* WhatsApp SOS Button */}
          <a
            href={`https://wa.me/${CONTRACTOR_DATA.whatsapp}?text=${encodeURIComponent(
              isArabic
                ? "🚨 طوارئ سباكة الشارقة: أحتاج فني سباكة فوراً لموقع العطل."
                : "🚨 EMERGENCY SHARJAH: I need an urgent plumber technician dispatched to my location."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#20bd5a] text-slate-950 font-extrabold py-3 px-3 rounded-xl text-xs sm:text-sm shadow-md transition-transform active:scale-95"
            aria-label="WhatsApp Emergency SOS"
          >
            <MessageSquare className="w-4 h-4 fill-current shrink-0" />
            <span className="truncate">{t("sticky_whatsapp")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
