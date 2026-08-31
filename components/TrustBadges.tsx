"use client";

import React from "react";
import { Clock, Star, CheckCircle, ShieldCheck, Wrench, Award, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { TRUST_METRICS, CONTRACTOR_DATA } from "@/lib/contractor-data";

export function TrustBadges() {
  const { isArabic } = useLanguage();

  const renderIcon = (id: string) => {
    switch (id) {
      case "speed":
        return <Clock className="w-6 h-6 text-sky-500" />;
      case "rating":
        return <Star className="w-6 h-6 text-amber-500 fill-amber-500" />;
      case "transparent":
        return <CheckCircle className="w-6 h-6 text-emerald-500" />;
      case "warranty":
        return <ShieldCheck className="w-6 h-6 text-orange-500" />;
      default:
        return <Award className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <section className="py-12 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500/40 transition-all hover:shadow-md group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 shadow-sm group-hover:scale-110 transition-transform">
                  {renderIcon(metric.id)}
                </div>
                <div className="text-end">
                  <span className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                    {metric.stat}
                  </span>
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 block">
                    {isArabic ? metric.unit.ar : metric.unit.en}
                  </span>
                </div>
              </div>

              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1.5">
                {isArabic ? metric.title.ar : metric.title.en}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {isArabic ? metric.description.ar : metric.description.en}
              </p>
            </div>
          ))}
        </div>

        {/* Contractor Guarantees Bar */}
        <div className="mt-8 p-4 rounded-xl bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
            <span className="font-bold text-sm text-slate-900 dark:text-white">
              {isArabic ? "ضمانات الخدمة المعتمدة:" : "Our Official Service Guarantees:"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
            {(isArabic ? CONTRACTOR_DATA.guarantees.ar : CONTRACTOR_DATA.guarantees.en).map(
              (item, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  <span>{item}</span>
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
