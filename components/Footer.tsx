"use client";

import React from "react";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ShieldCheck,
  Wrench,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { CONTRACTOR_DATA, CORE_SERVICES, SHARJAH_SUBURBS } from "@/lib/contractor-data";

export function Footer() {
  const { isArabic, t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-28 lg:pb-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: About & NAP (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white shadow-md">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white">
                {isArabic ? CONTRACTOR_DATA.name.ar : CONTRACTOR_DATA.name.en}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {t("footer_about_text")}
            </p>

            {/* Direct NAP Details */}
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  {isArabic
                    ? CONTRACTOR_DATA.address.formatted.ar
                    : CONTRACTOR_DATA.address.formatted.en}
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isArabic ? "متاح 24 ساعة يومياً (طوارئ ليلية ونهارية)" : "24 Hours / 7 Days (Midnight & Daytime Emergency)"}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`tel:${CONTRACTOR_DATA.phone}`}
                  className="font-bold text-white hover:text-orange-400 transition-colors font-mono"
                  dir="ltr"
                >
                  {CONTRACTOR_DATA.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Google Maps link */}
            <div className="pt-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${CONTRACTOR_DATA.geo.latitude},${CONTRACTOR_DATA.geo.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-semibold"
              >
                <span>{t("view_on_google_maps")}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Emergency Services (Cols 6-8) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              {isArabic ? "خدمات الطوارئ المتخصصة" : "Emergency Services"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className={`w-3.5 h-3.5 text-sky-500 shrink-0 ${isArabic ? "rotate-180" : ""}`} />
                    <span>{isArabic ? s.title.ar : s.title.en}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#triage"
                  className="text-orange-400 hover:text-orange-300 font-bold transition-colors flex items-center gap-1.5 pt-1"
                >
                  <ChevronRight className={`w-3.5 h-3.5 text-orange-500 shrink-0 ${isArabic ? "rotate-180" : ""}`} />
                  <span>{isArabic ? "تشخيص وإرسال فني طوارئ (SOS) ←" : "Instant Emergency Triage Tool →"}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Coverage Hubs (Cols 9-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              {isArabic ? "أحياء ومناطق الشارقة" : "Sharjah Coverage"}
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              {SHARJAH_SUBURBS.map((sub) => (
                <a
                  key={sub.id}
                  href="#coverage"
                  className="text-slate-400 hover:text-white transition-colors truncate"
                >
                  {isArabic ? sub.name.ar : sub.name.en}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{isArabic ? "ضمان 100% على كافة الأعمال" : "100% Guaranteed Workmanship"}</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t("footer_copyright")}</p>
          <p className="text-center md:text-end text-[11px] max-w-xl text-slate-500">
            {t("footer_disclaimer")}
          </p>
        </div>
      </div>
    </footer>
  );
}
