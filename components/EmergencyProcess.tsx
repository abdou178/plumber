"use client";

import React from "react";
import { PhoneCall, Truck, ShieldCheck, ArrowRight, Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { CONTRACTOR_DATA } from "@/lib/contractor-data";

export function EmergencyProcess() {
  const { isArabic, t } = useLanguage();

  const steps = [
    {
      stepNumber: "01",
      icon: PhoneCall,
      title: t("step_1_title"),
      desc: t("step_1_desc"),
      timing: isArabic ? "استجابة فورية (1-2 دقيقة)" : "Instant Response (1–2 min)",
      color: "from-sky-500 to-blue-600",
    },
    {
      stepNumber: "02",
      icon: Truck,
      title: t("step_2_title"),
      desc: t("step_2_desc"),
      timing: isArabic ? "وصول خلال 20–30 دقيقة" : "20–30 Min Transit Time",
      color: "from-orange-500 to-amber-600",
    },
    {
      stepNumber: "03",
      icon: ShieldCheck,
      title: t("step_3_title"),
      desc: t("step_3_desc"),
      timing: isArabic ? "ضمان خطي 100%" : "100% Guaranteed Repair",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/60 transition-colors border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>{isArabic ? "بروتوكول الاستجابة السريعة" : "Rapid Intervention Protocol"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t("process_title")}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t("process_subtitle")}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 dark:text-slate-700 font-mono">
                    {s.stepNumber}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="inline-block text-[11px] font-bold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/70 px-2.5 py-1 rounded-md border border-sky-200 dark:border-sky-800">
                    {s.timing}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Footer status check */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>
                    {index === 0
                      ? isArabic ? "مكالمة هاتفية أو واتساب مباشر" : "Phone or WhatsApp direct"
                      : index === 1
                      ? isArabic ? "سيارة مجهزة بكافة القطع" : "Van with full tool inventory"
                      : isArabic ? "فاتورة رسمية وضمان معتمد" : "Official invoice & warranty"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
