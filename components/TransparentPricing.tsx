"use client";

import React from "react";
import { Check, ShieldCheck, Phone, MessageSquare, AlertCircle, Clock, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { TRANSPARENT_PRICING, CONTRACTOR_DATA, IPricingTier } from "@/lib/contractor-data";

export function TransparentPricing() {
  const { isArabic, t } = useLanguage();

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>{isArabic ? "أسعار معتمدة وشفافة" : "Transparent Upfront Rates"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t("pricing_title")}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t("pricing_subtitle")}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRANSPARENT_PRICING.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                tier.popular
                  ? "bg-white dark:bg-slate-900 border-2 border-sky-500 shadow-xl ring-2 ring-sky-500/20"
                  : "bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-600 to-blue-600 text-white text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                  {t("pricing_popular")}
                </div>
              )}

              <div>
                <div className="mb-4">
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mb-1">
                    <Clock className="w-3.5 h-3.5 text-sky-500" />
                    <span>{isArabic ? tier.duration.ar : tier.duration.en}</span>
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                    {isArabic ? tier.service.ar : tier.service.en}
                  </h3>
                </div>

                <div className="mb-5 pb-5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">
                    {isArabic ? "تبدأ التكلفة من" : "Starting from"}
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-mono">
                      {tier.priceAED}
                    </span>
                    <span className="text-sm font-bold text-sky-600 dark:text-sky-400">AED</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {isArabic ? tier.description.ar : tier.description.en}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {t("pricing_includes_title")}
                  </div>
                  {(isArabic ? tier.includes.ar : tier.includes.en).map((inc, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5 stroke-[3]" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <a
                  href={`https://wa.me/${CONTRACTOR_DATA.whatsapp}?text=${encodeURIComponent(
                    isArabic
                      ? `مرحباً، أود حجز خدمة: ${tier.service.ar} بسعر يبدأ من ${tier.priceAED} درهم.`
                      : `Hello, I would like to book: ${tier.service.en} starting at ${tier.priceAED} AED.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-all active:scale-95 ${
                    tier.popular
                      ? "bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 shadow-md shadow-green-500/20"
                      : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>{t("pricing_book_now")}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                {isArabic ? "لا توجد رسوم خفية - تسعير معتمد قبل البدء" : "100% Upfront Quote Before Work Begins"}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isArabic
                  ? "يقوم الفني بفحص العطل وإبلاغك بالتكلفة الإجمالية بدقة. في حال الموافقة والإصلاح يتم احتساب العمل مباشرة."
                  : "Technician inspects the fault and gives you the exact quote. No surprises, no hidden midnight additions."}
              </p>
            </div>
          </div>

          <a
            href={`tel:${CONTRACTOR_DATA.phone}`}
            className="shrink-0 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-transform active:scale-95 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>{isArabic ? "استفسر عن الأسعار" : "Inquire via Call"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
