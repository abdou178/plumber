"use client";

import React, { useState, useMemo } from "react";
import {
  Droplets,
  AlertTriangle,
  ZapOff,
  Flame,
  Building2,
  MapPin,
  Home,
  Clock,
  MessageSquare,
  Phone,
  ShieldCheck,
  Check,
  ArrowRight,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageThemeContext";
import {
  CONTRACTOR_DATA,
  EMERGENCY_ISSUES,
  SHARJAH_SUBURBS,
  PROPERTY_TYPES,
  IEmergencyIssue,
  ISuburbCoverage,
  IPropertyType,
} from "@/lib/contractor-data";

export function InteractivePlumbingTriage() {
  const { isArabic, lang, t } = useLanguage();

  // State
  const [selectedIssueId, setSelectedIssueId] = useState<string>("burst-pipe-flooding");
  const [selectedSuburbId, setSelectedSuburbId] = useState<string>("al-majaz");
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("apartment");

  const selectedIssue = useMemo(
    () => EMERGENCY_ISSUES.find((i) => i.id === selectedIssueId) || EMERGENCY_ISSUES[0],
    [selectedIssueId]
  );

  const selectedSuburb = useMemo(
    () => SHARJAH_SUBURBS.find((s) => s.id === selectedSuburbId) || SHARJAH_SUBURBS[1],
    [selectedSuburbId]
  );

  const selectedProperty = useMemo(
    () => PROPERTY_TYPES.find((p) => p.id === selectedPropertyId) || PROPERTY_TYPES[0],
    [selectedPropertyId]
  );

  // Generate localized pre-filled WhatsApp link
  const whatsappUrl = useMemo(() => {
    const issueName = isArabic ? selectedIssue.title.ar : selectedIssue.title.en;
    const suburbName = isArabic ? selectedSuburb.name.ar : selectedSuburb.name.en;
    const propertyName = isArabic ? selectedProperty.title.ar : selectedProperty.title.en;

    let message = "";
    if (isArabic) {
      message = `🚨 *طلب طوارئ سباكة فوري - الشارقة*\n\n` +
        `🔧 *نوع العطل:* ${issueName}\n` +
        `📍 *المنطقة:* ${suburbName} (${selectedSuburb.landmark.ar})\n` +
        `🏠 *نوع العقار:* ${propertyName}\n` +
        `⏱️ *الوصول المطلوب:* طوارئ عاجلة\n\n` +
        `يرجى تأكيد إرسال أقرب فني سباكة مجهز إلى موقعي الآن.`;
    } else {
      message = `🚨 *EMERGENCY PLUMBING DISPATCH REQUEST - SHARJAH*\n\n` +
        `🔧 *Fault:* ${issueName}\n` +
        `📍 *Location:* ${suburbName} (${selectedSuburb.landmark.en})\n` +
        `🏠 *Property:* ${propertyName}\n` +
        `⏱️ *Urgency:* Immediate Emergency Dispatch\n\n` +
        `Please confirm the nearest equipped plumber to my address now.`;
    }

    return `https://wa.me/${CONTRACTOR_DATA.whatsapp}?text=${encodeURIComponent(message)}`;
  }, [selectedIssue, selectedSuburb, selectedProperty, isArabic]);

  // Helper for issue icon
  const renderIssueIcon = (id: string) => {
    switch (id) {
      case "burst-pipe-flooding":
        return <Droplets className="w-5 h-5 text-sky-500" />;
      case "overflowing-toilet-sewer":
        return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case "water-pump-failure":
        return <ZapOff className="w-5 h-5 text-blue-500" />;
      case "water-heater-rupture":
        return <Flame className="w-5 h-5 text-orange-500" />;
      case "ceiling-wall-leak":
        return <Building2 className="w-5 h-5 text-purple-500" />;
      default:
        return <Droplets className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section id="triage" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 border border-sky-300 dark:border-sky-800 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>{isArabic ? "أداة الفرز والإرسال الفوري" : "Instant Diagnostic & SOS Triage"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t("triage_title")}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t("triage_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Top (Cols 1-7): Step Selectors */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Emergency Issue Selection */}
            <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-black">
                    1
                  </span>
                  {t("triage_step_1")}
                </h3>
                <span className="text-xs text-orange-600 dark:text-orange-400 font-semibold">
                  {isArabic ? "اضغط لتحديد العطل" : "Click to select"}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {EMERGENCY_ISSUES.map((issue) => {
                  const isSelected = selectedIssueId === issue.id;
                  return (
                    <button
                      key={issue.id}
                      onClick={() => setSelectedIssueId(issue.id)}
                      className={`w-full text-start p-3.5 rounded-xl border-2 transition-all flex items-start justify-between gap-3 ${
                        isSelected
                          ? "border-sky-500 bg-sky-50/70 dark:bg-sky-950/40 shadow-sm"
                          : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 mt-0.5 shrink-0">
                          {renderIssueIcon(issue.id)}
                        </div>
                        <div>
                          <div className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                            {isArabic ? issue.title.ar : issue.title.en}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                            {isArabic ? issue.symptoms.ar : issue.symptoms.en}
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 flex flex-col items-end gap-1.5">
                        <span
                          className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                            issue.urgency.level === "CRITICAL"
                              ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300 border border-red-300 dark:border-red-800"
                              : "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800"
                          }`}
                        >
                          {issue.urgency.level}
                        </span>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Suburb / District in Sharjah */}
            <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-black">
                    2
                  </span>
                  {t("triage_step_2")}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {isArabic ? "المناطق المدعومة" : "Sharjah Hubs"}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {SHARJAH_SUBURBS.map((suburb) => {
                  const isSelected = selectedSuburbId === suburb.id;
                  return (
                    <button
                      key={suburb.id}
                      onClick={() => setSelectedSuburbId(suburb.id)}
                      className={`p-3 rounded-xl border-2 text-start transition-all ${
                        isSelected
                          ? "border-sky-500 bg-sky-50/70 dark:bg-sky-950/40 font-bold"
                          : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <MapPin
                          className={`w-3.5 h-3.5 ${
                            isSelected ? "text-sky-600 dark:text-sky-400" : "text-slate-400"
                          }`}
                        />
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                            suburb.isHub
                              ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold"
                              : "text-slate-500 dark:text-slate-400"
                          }`}
                        >
                          {isArabic ? suburb.eta.ar : suburb.eta.en}
                        </span>
                      </div>
                      <div className="text-sm text-slate-900 dark:text-white truncate">
                        {isArabic ? suburb.name.ar : suburb.name.en}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Property Type */}
            <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-black">
                    3
                  </span>
                  {t("triage_step_3")}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROPERTY_TYPES.map((prop) => {
                  const isSelected = selectedPropertyId === prop.id;
                  return (
                    <button
                      key={prop.id}
                      onClick={() => setSelectedPropertyId(prop.id)}
                      className={`p-3 rounded-xl border-2 text-start transition-all flex items-center gap-3 ${
                        isSelected
                          ? "border-sky-500 bg-sky-50/70 dark:bg-sky-950/40"
                          : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800"
                      }`}
                    >
                      <Home
                        className={`w-4 h-4 shrink-0 ${
                          isSelected ? "text-sky-600 dark:text-sky-400" : "text-slate-400"
                        }`}
                      />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {isArabic ? prop.title.ar : prop.title.en}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right (Cols 8-12): Dynamic Live Dispatch Response Box */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-slate-900 text-white border-2 border-sky-500/50 rounded-2xl p-6 sm:p-7 shadow-xl relative overflow-hidden">
              {/* Top Urgency Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-orange-400">
                    {isArabic ? selectedIssue.urgency.label.ar : selectedIssue.urgency.label.en}
                  </span>
                </div>
                <span className="text-xs font-mono bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800">
                  {isArabic ? "حالة تأهب قصوى" : "Active Dispatch"}
                </span>
              </div>

              {/* ETA Display */}
              <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 mb-5">
                <div className="text-xs text-slate-400 mb-1">{t("triage_estimated_eta")}:</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-sky-400">
                    {isArabic ? selectedSuburb.eta.ar : selectedSuburb.eta.en}
                  </span>
                  <span className="text-xs text-slate-300">
                    {isArabic ? `إلى ${selectedSuburb.name.ar}` : `to ${selectedSuburb.name.en}`}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-orange-400" />
                  <span>{isArabic ? selectedSuburb.landmark.ar : selectedSuburb.landmark.en}</span>
                </div>
              </div>

              {/* Summary Items */}
              <div className="space-y-2.5 text-xs sm:text-sm mb-5">
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">{isArabic ? "العطل المحدد:" : "Selected Fault:"}</span>
                  <span className="font-bold text-white text-end max-w-[200px] truncate">
                    {isArabic ? selectedIssue.title.ar : selectedIssue.title.en}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">{isArabic ? "رسوم الكشف والعزل:" : "Callout Fee:"}</span>
                  <span className="font-bold text-emerald-400">120 AED ({isArabic ? "شامل الفحص" : "Includes inspection"})</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">{isArabic ? "الضمان:" : "Warranty:"}</span>
                  <span className="font-bold text-white">100% {isArabic ? "ضمان خطي معتمد" : "Workmanship"}</span>
                </div>
              </div>

              {/* First Aid Safety Instruction Box */}
              <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs mb-1.5">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{t("triage_safety_tip")}:</span>
                </div>
                <p className="text-xs text-amber-100/90 leading-relaxed font-medium">
                  {isArabic ? selectedIssue.firstAidTip.ar : selectedIssue.firstAidTip.en}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* 1-Tap WhatsApp SOS */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-base py-3.5 px-4 rounded-xl shadow-lg shadow-green-500/20 transition-all hover:scale-[1.02] active:scale-95 text-center"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>{t("triage_send_whatsapp")}</span>
                </a>

                {/* 1-Tap Call */}
                <a
                  href={`tel:${CONTRACTOR_DATA.phone}`}
                  className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-extrabold text-base py-3.5 px-4 rounded-xl shadow-lg shadow-orange-600/20 transition-all hover:scale-[1.02] active:scale-95 text-center"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  <span>{t("triage_call_direct")}</span>
                </a>
              </div>

              {/* Fast Trust Note */}
              <div className="mt-4 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {isArabic
                    ? "فنيون محترفون مجهزون بكافة معدات السبرينغ ولحام PPR والقطع الأصلية"
                    : "Fully equipped mobile van with electric snakes & PPR thermal tools"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
