"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export type Language = "en" | "ar";
export type Direction = "ltr" | "rtl";

export interface ILanguageContext {
  lang: Language;
  dir: Direction;
  isArabic: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
}

const DICTIONARY: Record<string, { en: string; ar: string }> = {
  // Brand & General
  brand_title: {
    en: "Plumber Maintenance 24/7 Sharjah",
    ar: "طوارئ سباكة وصيانة عامة الشارقة 24/7",
  },
  brand_tagline: {
    en: "24/7 Emergency Plumbing & General Maintenance in Sharjah",
    ar: "طوارئ وخدمات السباكة والصيانة العامة 24 ساعة في الشارقة",
  },
  available_24_7: {
    en: "24/7 Emergency Dispatch Live",
    ar: "طوارئ 24 ساعة - الفنيون على أهبة الاستعداد",
  },
  eta_badge: {
    en: "20–30 Min Arrival in Sharjah",
    ar: "وصول سريع خلال 20–30 دقيقة بالشارقة",
  },
  call_now: {
    en: "Call Plumber Now",
    ar: "اتصل بفني السباكة الآن",
  },
  whatsapp_sos: {
    en: "WhatsApp SOS Dispatch",
    ar: "طلب فني عبر واتساب (SOS)",
  },
  live_status: {
    en: "Live Status: On-Duty Technicians Active",
    ar: "الحالة المباشرة: فنيو الطوارئ متواجدون الآن",
  },

  // Navbar
  nav_emergency_triage: {
    en: "Emergency SOS",
    ar: "محدد الأعطال الطارئة",
  },
  nav_services: {
    en: "Services",
    ar: "خدماتنا",
  },
  nav_process: {
    en: "How It Works",
    ar: "طريقة العمل",
  },
  nav_areas: {
    en: "Coverage Areas",
    ar: "المناطق المشمولة",
  },
  nav_pricing: {
    en: "Transparent Pricing",
    ar: "الأسعار والضمان",
  },
  nav_reviews: {
    en: "Verified Reviews",
    ar: "آراء العملاء",
  },

  // Hero Section
  hero_badge: {
    en: "🚨 URGENT MIDNIGHT & DAYTIME PLUMBING IN SHARJAH",
    ar: "🚨 طوارئ سباكة ليلية ونهارية فورية في الشارقة",
  },
  hero_headline_1: {
    en: "Burst Pipe? Blocked Drain?",
    ar: "انفجار ماسورة؟ انسداد مجاري؟",
  },
  hero_headline_2: {
    en: "Emergency Plumber at Your Door in 20–30 Minutes.",
    ar: "فني سباكة متخصص عند بابك خلال 20–30 دقيقة.",
  },
  hero_subheading: {
    en: "Immediate response for flooding pipes, sewage backflow, burned pump controllers, and ruptured water heaters. Fully equipped mobile vans across Al Nasiriyah, Al Majaz, Al Nahda & all Sharjah.",
    ar: "استجابة فورية لعلاج انفجار المياه وغرق الحمامات، تسليك طفح المجاري، صيانة مضخات المياه، واستبدال السخانات. سيارات مجهزة بالكامل في الناصرية والمجاز والنهدة وجميع أحياء الشارقة.",
  },
  hero_callout_price: {
    en: "Callout & Inspection from 120 AED",
    ar: "رسوم الكشف والعزل تبدأ من 120 درهم",
  },
  hero_technician_ready: {
    en: "Technicians stationed in Al Nasiriyah & Al Majaz ready for instant dispatch.",
    ar: "فنيون متأهبون في الناصرية والمجاز للتحرك الفوري إلى موقعك الآن.",
  },

  // Triage Tool
  triage_title: {
    en: "Interactive Plumbing Emergency Triage",
    ar: "محدد أعطال السباكة الطارئة والطلب الفوري",
  },
  triage_subtitle: {
    en: "Select your emergency, district, and property type to calculate instant arrival time & dispatch a technician.",
    ar: "اختر نوع العطل، منطقتك في الشارقة، ونوع العقار لحساب وقت الوصول وإرسال الفني فوراً.",
  },
  triage_step_1: {
    en: "1. Select Emergency Issue",
    ar: "1. اختر نوع حالة الطوارئ",
  },
  triage_step_2: {
    en: "2. Your Location in Sharjah",
    ar: "2. حدد موقعك في الشارقة",
  },
  triage_step_3: {
    en: "3. Property Type",
    ar: "3. نوع العقار",
  },
  triage_result_title: {
    en: "Emergency Response & Dispatch Summary",
    ar: "تقرير الاستجابة الطارئة وتأكيد الإرسال",
  },
  triage_estimated_eta: {
    en: "Estimated Arrival Time",
    ar: "وقت الوصول المتوقع",
  },
  triage_safety_tip: {
    en: "Immediate First-Aid Plumbing Instruction",
    ar: "تعليمات السلامة الفورية لحين وصول الفني",
  },
  triage_send_whatsapp: {
    en: "Send Pre-Filled WhatsApp SOS",
    ar: "إرسال طلب الطوارئ للواتساب مع تفاصيل العطل",
  },
  triage_call_direct: {
    en: "Call Dispatcher Directly",
    ar: "الاتصال المباشر بغرفة الطوارئ",
  },

  // Services
  services_section_badge: {
    en: "HEAVY-DUTY EMERGENCY CAPABILITIES",
    ar: "إمكانيات ومعدات الصيانة الثقيلة",
  },
  services_section_title: {
    en: "Specialized 24/7 Emergency Plumbing Services",
    ar: "خدمات السباكة المتخصصة على مدار 24 ساعة",
  },
  services_section_sub: {
    en: "We carry heavy-duty motorized machinery, thermal welders, and authentic replacement parts in our service vehicles.",
    ar: "سياراتنا مجهزة بماكينات التسليك الكهربائية، أجهزة اللحام الحراري، وقطع الغيار الأصلية للإصلاح من أول زيارة.",
  },
  service_from: {
    en: "From",
    ar: "يبدأ من",
  },
  service_request_now: {
    en: "Request Emergency Repair",
    ar: "اطلب الخدمة الآن",
  },

  // Process
  process_title: {
    en: "3-Step Emergency Response Protocol",
    ar: "كيف نعمل في حالات الطوارئ (3 خطوات سريعة)",
  },
  process_subtitle: {
    en: "From midnight phone call to permanent fix — zero stress, zero delay.",
    ar: "من لحظة الاتصال حتى الانتهاء التام من الإصلاح — سرعة واحترافية وضمان كامل.",
  },
  step_1_title: {
    en: "1. 1-Tap SOS Dispatch",
    ar: "1. الاتصال أو إرسال رسالة SOS",
  },
  step_1_desc: {
    en: "Call +971 56 388 9560 or send a WhatsApp with your location. Dispatcher immediately confirms the nearest technician.",
    ar: "اتصل مباشرة أو أرسل موقعك عبر الواتساب. يتم تعيين أقرب فني متواجد في منطقتك فوراً.",
  },
  step_2_title: {
    en: "2. Fast Arrival (20–30 Mins)",
    ar: "2. وصول الفني (20–30 دقيقة)",
  },
  step_2_desc: {
    en: "Our technician arrives fully equipped with PPR welders, snaking machines, replacement valves, and pump parts.",
    ar: "يصل الفني بسيارة الخدمة المجهزة بماكينات السبرينغ، مكاوي اللحام، وجميع قطع الغيار الإيطالية.",
  },
  step_3_title: {
    en: "3. Rapid Fix & Official Warranty",
    ar: "3. إصلاح جذري وضمان رسمي",
  },
  step_3_desc: {
    en: "Immediate water isolation, root-cause repair, pressure safety testing, and official workmanship warranty receipt.",
    ar: "عزل التسريب فوراً، معالجة المشكلة من جذورها، فحص الضغط النهائي وتسليم فاتورة وضمان معتمد.",
  },

  // Pricing
  pricing_title: {
    en: "Upfront & Transparent Emergency Rates",
    ar: "أسعار ثابتة وشفافة بدون مفاجآت",
  },
  pricing_subtitle: {
    en: "Know your cost before work begins. No hidden late-night surcharges.",
    ar: "تعرف على التكلفة بكل وضوح قبل بدء الفني في العمل. لا توجد أي رسوم إضافية مخفية.",
  },
  pricing_popular: {
    en: "MOST REQUESTED",
    ar: "الأكثر طلباً في الشارقة",
  },
  pricing_book_now: {
    en: "Book This Service",
    ar: "حجز الفني لهذا العطل",
  },
  pricing_includes_title: {
    en: "What is included:",
    ar: "ما تشمله الخدمة:",
  },

  // Coverage
  coverage_title: {
    en: "Rapid Response Suburb Coverage in Sharjah",
    ar: "تغطية سريعة لجميع أحياء ومناطق الشارقة",
  },
  coverage_subtitle: {
    en: "Strategically stationed mobile teams across key Sharjah districts for minimal transit time.",
    ar: "فرق صيانة متمركزة في النقاط الحيوية بالشارقة لضمان أقصر وقت وصول ممكن لمنزلك.",
  },
  coverage_hub_badge: {
    en: "RAPID DISPATCH HUB",
    ar: "مركز انطلاق سريع",
  },
  coverage_request_here: {
    en: "Dispatch to This Area",
    ar: "طلب فني لهذه المنطقة",
  },

  // Reviews
  reviews_title: {
    en: "Real Feedback from Sharjah Residents",
    ar: "تقييمات وتجارب حقيقية لعملاء الشارقة",
  },
  reviews_subtitle: {
    en: "Verified 4.8-Star rating across 42+ urgent residential & commercial interventions.",
    ar: "تقييم 4.8 نجوم من أكثر من 42 عملية إنقاذ وإصلاح طارئة للشقق والفلل والمطاعم.",
  },
  verified_customer: {
    en: "Verified Sharjah Resident",
    ar: "عميل موثق في الشارقة",
  },

  // Footer & NAP
  footer_about_title: {
    en: "About Plumber Maintenance 24/7",
    ar: "عن طوارئ سباكة وصيانة الشارقة",
  },
  footer_about_text: {
    en: "Sharjah's premier 24-hour emergency plumbing and drain clearing service. Licensed technicians specializing in high-pressure burst pipes, sewer blockages, booster pumps, and water heaters.",
    ar: "الخدمة الأولى لطوارئ السباكة وتسليك المجاري وصيانة المضخات في الشارقة على مدار 24 ساعة، بفريق فني محترف وأحدث المعدات الألمانية والإيطالية.",
  },
  footer_direct_contact: {
    en: "Emergency Hotline & Location",
    ar: "أرقام الطوارئ والموقع",
  },
  footer_copyright: {
    en: "© 2026 Plumber Maintenance 24/7 Sharjah. All rights reserved.",
    ar: "© 2026 طوارئ سباكة وصيانة عامة الشارقة 24/7. جميع الحقوق محفوظة.",
  },
  footer_disclaimer: {
    en: "Emergency callout charges apply upon on-site arrival and inspection. Workmanship warranty covers all replaced parts and completed welds.",
    ar: "تطبق رسوم الكشف عند الوصول الميداني والفحص. يشمل الضمان جميع القطع المستبدلة وأعمال اللحام المنجزة.",
  },
  view_on_google_maps: {
    en: "View Base on Google Maps",
    ar: "عرض موقعنا على خرائط جوجل",
  },

  // Sticky Dock
  sticky_call: {
    en: "Call Plumber",
    ar: "اتصال مباشر",
  },
  sticky_whatsapp: {
    en: "WhatsApp SOS",
    ar: "واتساب فوري",
  },
  sticky_status: {
    en: "Technician on standby (20–30 min ETA)",
    ar: "فني طوارئ متأهب (وصول 20–30 دقيقة)",
  },
};

const LanguageContext = createContext<ILanguageContext | undefined>(undefined);

export function LanguageThemeProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("ar");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // Check saved language or browser preference
    const saved = localStorage.getItem("app_lang") as Language | null;
    if (saved && (saved === "en" || saved === "ar")) {
      setLangState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    } else {
      // Default to Arabic for UAE local context
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("app_lang", newLang);
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    }
  };

  const toggleLanguage = () => {
    const next = lang === "ar" ? "en" : "ar";
    setLanguage(next);
  };

  const t = (key: string, fallback?: string): string => {
    const entry = DICTIONARY[key];
    if (entry) {
      return entry[lang] || entry.en || fallback || key;
    }
    return fallback || key;
  };

  const dir: Direction = lang === "ar" ? "rtl" : "ltr";
  const isArabic = lang === "ar";

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LanguageContext.Provider
        value={{
          lang,
          dir,
          isArabic,
          setLanguage,
          toggleLanguage,
          t,
        }}
      >
        {children}
      </LanguageContext.Provider>
    </NextThemesProvider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageThemeProvider");
  }
  return context;
}
