"use client";

import React from "react";
import {
  Phone,
  MessageSquare,
  Clock,
  ShieldCheck,
  Star,
  Flame,
  Droplets,
  AlertTriangle,
  MapPin,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { CONTRACTOR_DATA } from "@/lib/contractor-data";

export function HeroSection() {
  const { isArabic, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-12 md:py-20 lg:py-24 border-b border-slate-800">
      {/* Background Hydro Grid & Ambient Gradient (Clean, no sci-fi scanlines) */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left / Main Column: Direct Response Copy */}
          <div className="lg:col-span-7 space-y-6 text-start">
            {/* Urgent Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/80 border border-orange-500/40 text-orange-300 text-xs sm:text-sm font-bold shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
              </span>
              <span>{t("hero_badge")}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              <span className="text-orange-500 block mb-2">{t("hero_headline_1")}</span>
              <span className="text-sky-400">{t("hero_headline_2")}</span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {t("hero_subheading")}
            </p>

            {/* Price & ETA Highlight Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 text-start">
                <div className="flex items-center gap-1.5 text-sky-400 text-xs font-semibold mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{isArabic ? "سرعة الوصول" : "Response Time"}</span>
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-white">20–30 {isArabic ? "دقيقة" : "Mins"}</div>
                <div className="text-[11px] text-slate-400">{isArabic ? "جميع مناطق الشارقة" : "Across Sharjah"}</div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 text-start">
                <div className="flex items-center gap-1.5 text-orange-400 text-xs font-semibold mb-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{isArabic ? "رسوم الكشف" : "Starting Fee"}</span>
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-white">120 {isArabic ? "درهم" : "AED"}</div>
                <div className="text-[11px] text-slate-400">{isArabic ? "عزل وحصر التسريب" : "On-site Isolation"}</div>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 text-start">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold mb-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{isArabic ? "تقييم العملاء" : "Verified Rating"}</span>
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-white">4.8 ★★★★★</div>
                <div className="text-[11px] text-slate-400">{isArabic ? "42+ تقييم موثق" : "42+ Local Reviews"}</div>
              </div>
            </div>

            {/* Direct Response CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Call Button */}
              <a
                href={`tel:${CONTRACTOR_DATA.phone}`}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-extrabold text-base sm:text-lg px-6 py-4 rounded-xl shadow-lg shadow-orange-600/30 transition-all hover:scale-[1.02] active:scale-95 text-center"
              >
                <Phone className="w-6 h-6 animate-bounce" />
                <div className="flex flex-col items-start text-start">
                  <span className="text-xs uppercase tracking-wider text-orange-100 font-semibold">
                    {isArabic ? "طوارئ سباكة على مدار الساعة" : "24/7 Urgent Dispatch"}
                  </span>
                  <span dir="ltr" className="text-xl font-mono leading-none">
                    {CONTRACTOR_DATA.phoneDisplay}
                  </span>
                </div>
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
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-base sm:text-lg px-6 py-4 rounded-xl shadow-lg shadow-green-500/20 transition-all hover:scale-[1.02] active:scale-95 text-center"
              >
                <MessageSquare className="w-6 h-6 fill-current" />
                <div className="flex flex-col items-start text-start">
                  <span className="text-xs uppercase tracking-wider text-green-950/80 font-bold">
                    {isArabic ? "إرسال الموقع والصور" : "Send Location & Photos"}
                  </span>
                  <span className="text-lg leading-none">{t("whatsapp_sos")}</span>
                </div>
              </a>
            </div>

            {/* Trust checkmarks */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isArabic ? "ماكينات تسليك كهربائية ثقيلة" : "Heavy-Duty Electric Snaking"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isArabic ? "لحام حراري PPR معتمد" : "PPR Heat-Welding Certified"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isArabic ? "ضمان رسمي 100% على الصيانة" : "100% Workmanship Guarantee"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Dispatcher & Quick Diagnostic Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-sky-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="font-bold text-sm text-emerald-400">
                    {isArabic ? "غرفة عمليات الطوارئ الميدانية" : "Active Dispatch Console"}
                  </span>
                </div>
                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full font-mono">
                  {isArabic ? "متاح الآن 24/7" : "24/7 Live"}
                </span>
              </div>

              {/* Status Box */}
              <div className="bg-slate-800/60 rounded-xl p-4 mb-5 border border-slate-700/50 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    {isArabic ? "المركز الرئيسي" : "Base Station"}: {CONTRACTOR_DATA.address.neighborhood}
                  </span>
                  <span className="text-emerald-400 font-semibold">{isArabic ? "فنيون متأهبون" : "On Standby"}</span>
                </div>
                <p className="text-sm font-semibold text-white">
                  {isArabic
                    ? "سيارات الطوارئ مجهزة بجميع مكاين السبرينغ ولحام الحراري ومحابس الضغط العالي جاهزة للتحرك."
                    : "Mobile service units fully stocked with thermal fusion tools, electric snakes & valves ready to roll."}
                </p>
              </div>

              {/* Instant Problem Jump Buttons */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {isArabic ? "اختر نوع العطل للانتقال الفوري للتسعير:" : "Select your urgent issue to jump to triage:"}
                </div>

                <a
                  href="#triage"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800 border border-slate-700/70 text-start group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Droplets className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                      {isArabic ? "انفجار ماسورة / غرق المطبخ أو الحمام" : "Burst Pipe / Flooding Water"}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-orange-400">SOS</span>
                </a>

                <a
                  href="#triage"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800 border border-slate-700/70 text-start group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                      {isArabic ? "طفح المجاري وانسداد البالوعات" : "Overflowing Toilet / Sewer Blockage"}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-amber-400">HIGH</span>
                </a>

                <a
                  href="#triage"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800 border border-slate-700/70 text-start group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                      {isArabic ? "عطل مضخة المياه / انقطاع الماء" : "Booster Pump Down / No Water"}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-sky-400">URGENT</span>
                </a>

                <a
                  href="#triage"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-800/40 hover:bg-slate-800 border border-slate-700/70 text-start group transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Flame className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                      {isArabic ? "تسريب سخان المياه (الجيزار) والماس" : "Water Heater Rupture & Trip"}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-orange-400">URGENT</span>
                </a>
              </div>

              {/* Bottom Quick Call Link */}
              <div className="mt-5 pt-4 border-t border-slate-800 text-center">
                <a
                  href={`tel:${CONTRACTOR_DATA.phone}`}
                  className="text-xs sm:text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-400" />
                  <span>
                    {isArabic
                      ? "هل تحتاج مساعدة عاجلة؟ اتصل الآن على 9560 388 56 971+"
                      : "Need direct emergency guidance? Call +971 56 388 9560"}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
