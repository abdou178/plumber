"use client";

import React from "react";
import { Star, ShieldCheck, CheckCircle, MapPin, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { VERIFIED_REVIEWS, CONTRACTOR_DATA, IReviewItem } from "@/lib/contractor-data";

export function VerifiedReviews() {
  const { isArabic, t } = useLanguage();

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{isArabic ? "تقييمات موثقة 4.8 نجوم" : "4.8 ★★★★★ Verified Feedback"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t("reviews_title")}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t("reviews_subtitle")}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400/50 transition-all hover:shadow-lg relative"
            >
              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    {isArabic ? rev.timeAgo.ar : rev.timeAgo.en}
                  </span>
                </div>

                {/* Issue Tag */}
                <div className="inline-block text-[11px] font-bold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/70 px-2 py-0.5 rounded border border-sky-200 dark:border-sky-800 mb-3">
                  {isArabic ? rev.issue.ar : rev.issue.en}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                  &ldquo;{isArabic ? rev.comment.ar : rev.comment.en}&rdquo;
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    {isArabic ? rev.author.ar : rev.author.en}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-sky-500" />
                    <span>{isArabic ? rev.location.ar : rev.location.en}</span>
                  </div>
                </div>

                {rev.verified && (
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle className="w-3 h-3" />
                    <span>{isArabic ? "موثق" : "Verified"}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
