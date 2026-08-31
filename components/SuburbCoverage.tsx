"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Clock, Phone, MessageSquare, ShieldCheck, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { SHARJAH_SUBURBS, CONTRACTOR_DATA, ISuburbCoverage } from "@/lib/contractor-data";

export function SuburbCoverage() {
  const { isArabic, t } = useLanguage();
  const [selectedSuburb, setSelectedSuburb] = useState<ISuburbCoverage>(SHARJAH_SUBURBS[0]);

  return (
    <section id="coverage" className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>{isArabic ? "التغطية الجغرافية بالشارقة" : "Sharjah-Wide Fast Transit"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t("coverage_title")}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t("coverage_subtitle")}
          </p>
        </div>

        {/* Interactive Suburbs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {SHARJAH_SUBURBS.map((suburb) => {
            const isSelected = selectedSuburb.id === suburb.id;
            return (
              <div
                key={suburb.id}
                onClick={() => setSelectedSuburb(suburb)}
                className={`cursor-pointer p-5 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-sky-500 bg-sky-50/70 dark:bg-slate-900 shadow-md ring-2 ring-sky-500/20"
                    : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/60 dark:bg-slate-900/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg ${isSelected ? "bg-sky-500 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                        <MapPin className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        {isArabic ? suburb.name.ar : suburb.name.en}
                      </h3>
                    </div>

                    <span className="text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-1 rounded-md border border-emerald-200 dark:border-emerald-800">
                      {isArabic ? suburb.eta.ar : suburb.eta.en}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>{isArabic ? suburb.landmark.ar : suburb.landmark.en}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
                  <span className="text-sky-600 dark:text-sky-400">
                    {suburb.isHub ? (isArabic ? "📍 محطة انطلاق رئيسية" : "📍 Rapid Hub") : (isArabic ? "⚡ استجابة سريعة" : "⚡ Active Dispatch")}
                  </span>
                  <a
                    href={`https://wa.me/${CONTRACTOR_DATA.whatsapp}?text=${encodeURIComponent(
                      isArabic
                        ? `🚨 طوارئ سباكة: أحتاج فني سباكة فوراً في منطقة ${suburb.name.ar} (${suburb.landmark.ar}).`
                        : `🚨 Urgent Plumbing: I need a technician dispatched to ${suburb.name.en} (${suburb.landmark.en}), Sharjah.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 dark:text-orange-400 hover:underline"
                  >
                    {isArabic ? "طلب فني للمنطقة ←" : "Dispatch Here →"}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Base Location Callout Box */}
        <div className="bg-gradient-to-r from-slate-900 to-hydro-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-start">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>{isArabic ? "المقر الرئيسي وورشة الصيانة" : "Central Dispatch Station"}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {isArabic
                ? "شارع 28، الناصرية، الشارقة (بالقرب من مركز المدينة)"
                : "28 St, Al Nasiriyah, Sharjah (Near City Center & Rolla)"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              {isArabic
                ? "موقعنا الاستراتيجي في الناصرية يتيح لسيارات الطوارئ الوصول السريع لجميع الأحياء السكنية والأبراج خلال 15-30 دقيقة كحد أقصى."
                : "Our central hub in Al Nasiriyah allows our technicians to reach residential towers and villas across all Sharjah districts in 15–30 minutes."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${CONTRACTOR_DATA.phone}`}
              className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-5 py-3 rounded-xl text-sm shadow-md transition-transform active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>{isArabic ? "اتصال فوري" : "Call Dispatcher"}</span>
            </a>
            <a
              href={`https://wa.me/${CONTRACTOR_DATA.whatsapp}?text=${encodeURIComponent(
                isArabic
                  ? "مرحباً، أود معرفة أقرب فني سباكة لمنطقتي في الشارقة."
                  : "Hello, I would like to check the nearest available plumber in my Sharjah area."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold px-5 py-3 rounded-xl text-sm shadow-md transition-transform active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{isArabic ? "محادثة واتساب" : "WhatsApp"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
