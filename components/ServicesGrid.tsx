"use client";

import React from "react";
import {
  Wrench,
  Waves,
  Gauge,
  ShieldAlert,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { CORE_SERVICES, CONTRACTOR_DATA, IServiceItem } from "@/lib/contractor-data";

export function ServicesGrid() {
  const { isArabic, t } = useLanguage();

  const renderIcon = (name: string) => {
    switch (name) {
      case "Wrench":
        return <Wrench className="w-6 h-6 text-sky-500" />;
      case "Waves":
        return <Waves className="w-6 h-6 text-blue-500" />;
      case "Gauge":
        return <Gauge className="w-6 h-6 text-amber-500" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-orange-500" />;
      default:
        return <Wrench className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950 border border-orange-300 dark:border-orange-800 text-orange-800 dark:text-orange-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>{t("services_section_badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t("services_section_title")}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t("services_section_sub")}
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-sky-500/50 transition-all hover:shadow-xl group relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-600 to-orange-500 opacity-80"></div>

              <div>
                {/* Header: Icon & Price Tag */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-105 transition-transform">
                    {renderIcon(service.iconName)}
                  </div>
                  <div className="text-end">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">
                      {t("service_from")}
                    </span>
                    <span className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                      {service.startingPriceAED} <span className="text-xs font-bold text-sky-600 dark:text-sky-400">AED</span>
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                  {isArabic ? service.title.ar : service.title.en}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-sky-700 dark:text-sky-400 mb-4 leading-relaxed">
                  {isArabic ? service.tagline.ar : service.tagline.en}
                </p>

                {/* Details */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {isArabic ? service.details.ar : service.details.en}
                </p>

                {/* Technical Bullet Points */}
                <div className="space-y-2 mb-8 bg-white/70 dark:bg-slate-950/50 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {isArabic ? "المميزات والتقنيات المستخدمة:" : "Technical Capabilities:"}
                  </div>
                  {(isArabic ? service.features.ar : service.features.en).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={`tel:${CONTRACTOR_DATA.phone}`}
                  className="flex items-center justify-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-transform active:scale-95 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{isArabic ? "اتصال فوري" : "Call Dispatch"}</span>
                </a>
                <a
                  href={`https://wa.me/${CONTRACTOR_DATA.whatsapp}?text=${encodeURIComponent(
                    isArabic
                      ? `🚨 طلب طوارئ لخدمة: ${service.title.ar} في الشارقة.`
                      : `🚨 Emergency request for service: ${service.title.en} in Sharjah.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-transform active:scale-95 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>{isArabic ? "واتساب SOS" : "WhatsApp"}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
