export interface IContractorData {
  name: {
    en: string;
    ar: string;
  };
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    country: string;
    formatted: {
      en: string;
      ar: string;
    };
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  rating: {
    score: number;
    reviewCount: number;
    displayStars: string;
  };
  responseTime: {
    en: string;
    ar: string;
  };
  calloutFee: {
    amountAED: number;
    en: string;
    ar: string;
  };
  guarantees: {
    en: string[];
    ar: string[];
  };
}

export const CONTRACTOR_DATA: IContractorData = {
  name: {
    en: "Plumber Maintenance 24/7 Sharjah",
    ar: "طوارئ سباكة وصيانة عامة الشارقة 24/7",
  },
  phone: "+971563889560",
  phoneDisplay: "+971 56 388 9560",
  whatsapp: "971563889560",
  address: {
    street: "28 St",
    neighborhood: "Al Nasiriyah",
    city: "Sharjah",
    country: "United Arab Emirates",
    formatted: {
      en: "28 St, Al Nasiriyah, Sharjah, United Arab Emirates",
      ar: "شارع 28، الناصرية، الشارقة، الإمارات العربية المتحدة",
    },
  },
  geo: {
    latitude: 25.3622,
    longitude: 55.3912,
  },
  rating: {
    score: 4.8,
    reviewCount: 42,
    displayStars: "★★★★★",
  },
  responseTime: {
    en: "20–30 Minutes across Sharjah",
    ar: "وصول خلال 20–30 دقيقة لجميع مناطق الشارقة",
  },
  calloutFee: {
    amountAED: 120,
    en: "From 120 AED (Includes rapid on-site inspection and leak isolation)",
    ar: "تبدأ من 120 درهم (تشمل الكشف الميداني الفوري وحصر التسريب)",
  },
  guarantees: {
    en: [
      "24/7 Immediate On-Call Dispatch",
      "Heavy-Duty Electric Rotary Snaking",
      "PPR Heat-Welding Certified Master Technicians",
      "100% Workmanship Guarantee & Clear Invoicing",
    ],
    ar: [
      "طوارئ 24 ساعة وتحرك فوري على مدار الليل والنهار",
      "أحدث ماكينات السبرينغ والضغط لفتح أصعب الانسدادات",
      "فنيون معتمدون في لحام وصيانة مواسير الحراري PPR",
      "ضمان شامل 100% على الصيانة مع فواتير رسمية واضحة",
    ],
  },
};

export interface IEmergencyIssue {
  id: string;
  iconName: string;
  title: {
    en: string;
    ar: string;
  };
  urgency: {
    level: "CRITICAL" | "HIGH" | "MEDIUM-HIGH";
    label: {
      en: string;
      ar: string;
    };
  };
  symptoms: {
    en: string;
    ar: string;
  };
  firstAidTip: {
    en: string;
    ar: string;
  };
}

export const EMERGENCY_ISSUES: IEmergencyIssue[] = [
  {
    id: "burst-pipe-flooding",
    iconName: "Droplets",
    title: {
      en: "Burst Water Pipe / Flooding Kitchen or Bath",
      ar: "انفجار ماسورة مياه / غرق المطبخ أو الحمام",
    },
    urgency: {
      level: "CRITICAL",
      label: {
        en: "Critical SOS / Immediate Water Damage",
        ar: "طوارئ قصوى / خطر تلف الممتلكات",
      },
    },
    symptoms: {
      en: "High-pressure main line fracture, ruptured flexible stainless hose, or fractured shutoff angle valve.",
      ar: "انكسار خط التغذية الرئيسي عالي الضغط، تمزق هوز السخان المرن، أو تلف محبس العزل الرئيسي.",
    },
    firstAidTip: {
      en: "Locate and close your main water meter shutoff valve immediately to stop pressure.",
      ar: "أغلق محبس المياه الرئيسي بجانب عداد الشقة فوراً لمنع تفاقم الغرق وتلف الأثاث.",
    },
  },
  {
    id: "overflowing-toilet-sewer",
    iconName: "AlertTriangle",
    title: {
      en: "Overflowing Toilet / Main Drain Sewer Backup",
      ar: "طفح المرحاض / انسداد المجاري والبالوعات الرئيسية",
    },
    urgency: {
      level: "HIGH",
      label: {
        en: "High Urgency / Biohazard Risk",
        ar: "عاجل جداً / خطر تلوث صحي ورائحة كريهة",
      },
    },
    symptoms: {
      en: "Complete blockage in main 4-inch waste stack, gurgling floor traps, or sewage backflowing into tubs.",
      ar: "انسداد كامل بالخط الرئيسي 4 بوصة، فوران بالوعات الحمام الأرضية، أو ارتداد مياه الصرف.",
    },
    firstAidTip: {
      en: "Do NOT flush again or run kitchen sinks. Keep bathroom doors closed and ventilated.",
      ar: "توقف فوراً عن سحب السيفون أو استخدام المجالي، وحافظ على تهوية المكان حتى وصول الفني.",
    },
  },
  {
    id: "water-pump-failure",
    iconName: "ZapOff",
    title: {
      en: "Rooftop Booster Pump Down / No Water Flow",
      ar: "توقف مضخة المياه العلوية / انقطاع المياه بالكامل",
    },
    urgency: {
      level: "HIGH",
      label: {
        en: "High Urgency / Complete Water Outage",
        ar: "عاجل / انقطاع تام للمياه في المبنى",
      },
    },
    symptoms: {
      en: "Burned electronic pressure controller (presscontrol), motor capacitor burnout, or dry-run lock.",
      ar: "احتراق جهاز الأوتوماتيك الإلكتروني، تعطل مكثف الدينامو، أو قفل الحماية من التشغيل الجاف.",
    },
    firstAidTip: {
      en: "Switch off the pump circuit breaker in the DB panel to prevent motor stator coil melting.",
      ar: "افصل قاطع كهرباء المضخة من الطبلون الرئيسي لتجنب احتراق ملفات المحرك بالكامل.",
    },
  },
  {
    id: "water-heater-rupture",
    iconName: "Flame",
    title: {
      en: "Water Heater (Geyser) Rupture & Electrical Trip",
      ar: "تسريب سخان المياه (الجيزار) / ماس كهربائي بالسخان",
    },
    urgency: {
      level: "HIGH",
      label: {
        en: "High Urgency / Electrical Safety Risk",
        ar: "خطر أمني / تسريب مياه وماس كهربائي",
      },
    },
    symptoms: {
      en: "Ruptured inner enamel cylinder, continuously leaking temperature relief valve, or tripping ELCB.",
      ar: "ثقب الخزان الداخلي، تسريب صمام الأمان وتفريغ الضغط، أو فصل قاطع الكهرباء الرئيسي فجأة.",
    },
    firstAidTip: {
      en: "Turn OFF the water heater wall isolator switch immediately. Do not touch dripping heater casing.",
      ar: "أطفئ مفتاح السخان الجداري (Isolator) فوراً، ولا تلمس جسم السخان أو المياه المكهربة.",
    },
  },
  {
    id: "ceiling-wall-leak",
    iconName: "Building2",
    title: {
      en: "Concealed Wall Seepage & Ceiling Drip",
      ar: "خرير مياه من السقف / تنشيع الجدران الداخلية",
    },
    urgency: {
      level: "MEDIUM-HIGH",
      label: {
        en: "Medium-High Urgency / Structural Hazard",
        ar: "طوارئ متوسطة إلى عالية / تلف الجدران والدهان",
      },
    },
    symptoms: {
      en: "Intermittent dripping from false ceiling, paint blistering, or fractured concealed PPR hot water pipe.",
      ar: "تنقيط مستمر من فتحات الجبس بورد، انتفاخ الدهان، أو تسريب داخلي في وصلات البي بي آر المدفونة.",
    },
    firstAidTip: {
      en: "Place a bucket underneath, puncture wet drywall blister gently to relieve weight if bulging.",
      ar: "ضع وعاء تحت نقطة التسريب وافصل الأجهزة الكهربائية المحيطة بمسار نزول المياه.",
    },
  },
];

export interface ISuburbCoverage {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  eta: {
    en: string;
    ar: string;
  };
  landmark: {
    en: string;
    ar: string;
  };
  isHub?: boolean;
}

export const SHARJAH_SUBURBS: ISuburbCoverage[] = [
  {
    id: "al-nasiriyah",
    name: { en: "Al Nasiriyah", ar: "الناصرية" },
    eta: { en: "10–15 mins", ar: "10–15 دقيقة" },
    landmark: { en: "28 St / Driving Institute Area", ar: "شارع 28 / قرب معهد السياقة القديم" },
    isHub: true,
  },
  {
    id: "al-majaz",
    name: { en: "Al Majaz (1, 2, 3)", ar: "المجاز (1، 2، 3)" },
    eta: { en: "15–20 mins", ar: "15–20 دقيقة" },
    landmark: { en: "Corniche / Waterfront Towers", ar: "كورنيش البحيرة / أبراج الواجهة المائية" },
    isHub: true,
  },
  {
    id: "al-nahda",
    name: { en: "Al Nahda Sharjah", ar: "النهدة الشارقة" },
    eta: { en: "20–25 mins", ar: "20–25 دقيقة" },
    landmark: { en: "Sahara Centre / Border Area", ar: "قرب صحارى سنتر وحديقة النهدة" },
    isHub: true,
  },
  {
    id: "muwaileh",
    name: { en: "Muwaileh Commercial", ar: "مويلح التجارية" },
    eta: { en: "20–25 mins", ar: "20–25 دقيقة" },
    landmark: { en: "University City / Al Zahia", ar: "قرب المدينة الجامعية ومجمع الزاهية" },
    isHub: true,
  },
  {
    id: "al-qasimia",
    name: { en: "Al Qasimia", ar: "القاسمية" },
    eta: { en: "15–20 mins", ar: "15–20 دقيقة" },
    landmark: { en: "Mega Mall / Al Mahattah", ar: "قرب ميغا مول والمحطة القديمة" },
  },
  {
    id: "al-taawun",
    name: { en: "Al Taawun", ar: "التعاون" },
    eta: { en: "15–25 mins", ar: "15–25 دقيقة" },
    landmark: { en: "Expo Centre / Al Khan Lagoon", ar: "قرب مركز إكسبو وبحيرة الخان" },
  },
  {
    id: "al-khan",
    name: { en: "Al Khan", ar: "الخان" },
    eta: { en: "15–20 mins", ar: "15–20 دقيقة" },
    landmark: { en: "Sharjah Aquarium / Beachfront", ar: "قرب مربى الشارقة للأحياء المائية" },
  },
  {
    id: "al-rolla",
    name: { en: "Al Rolla", ar: "الرولة" },
    eta: { en: "10–15 mins", ar: "10–15 دقيقة" },
    landmark: { en: "Rolla Square / Souq District", ar: "ميدان الرولة وسوق الذهب القديم" },
  },
  {
    id: "al-yarmook",
    name: { en: "Al Yarmook", ar: "اليرموك" },
    eta: { en: "15–20 mins", ar: "15–20 دقيقة" },
    landmark: { en: "Cultural Square / Ministries", ar: "قرب مجمع الكنائس وميدان الثقافة" },
  },
];

export interface IPropertyType {
  id: string;
  title: {
    en: string;
    ar: string;
  };
}

export const PROPERTY_TYPES: IPropertyType[] = [
  {
    id: "apartment",
    title: { en: "Residential Apartment / Flat", ar: "شقة سكنية داخل برج أو عمارة" },
  },
  {
    id: "villa",
    title: { en: "Private Villa / Townhouse", ar: "فيلا مستقلة / تاون هاوس" },
  },
  {
    id: "commercial",
    title: { en: "Commercial Shop / Restaurant / Office", ar: "محل تجاري / مطعم / كافيه / مكتب" },
  },
  {
    id: "building",
    title: { en: "Full Residential Building / Facility Manager", ar: "إدارة برج سكني / مشرف عقارات" },
  },
];

export interface IServiceItem {
  id: string;
  iconName: string;
  title: {
    en: string;
    ar: string;
  };
  tagline: {
    en: string;
    ar: string;
  };
  details: {
    en: string;
    ar: string;
  };
  features: {
    en: string[];
    ar: string[];
  };
  startingPriceAED: number;
}

export const CORE_SERVICES: IServiceItem[] = [
  {
    id: "burst-pipe-welding",
    iconName: "Wrench",
    title: {
      en: "24/7 Burst Pipe & Water Line Emergency Welding",
      ar: "إصلاح فوري للكسور ولحام مواسير PPR والحراري",
    },
    tagline: {
      en: "Instant water isolation, emergency pipe splicing & high-pressure stopcock fixes.",
      ar: "عزل فوري لتدفق المياه، قص ولحام المواسير الحرارية، وتبديل المحابس الرئيسية.",
    },
    details: {
      en: "Certified thermal socket fusion for green PPR pipes, multilayer PEX connections, and copper/brass high-pressure valves. We arrive with all fittings, compression couplings, and pipe cutters.",
      ar: "لحام حراري بأحدث مكاوي البي بي آر لمواسير المياه الخضراء والأنابيب المعزولة، معالجة فورية لانكسار محابس الزاوية وليات التغذية المرنة بدون تكسير عشوائي.",
    },
    features: {
      en: [
        "Certified PPR thermal fusion tooling",
        "High-pressure Italian valves & fittings in stock",
        "Leak pinpointing with pressure testing",
        "Zero messy structural demolition",
      ],
      ar: [
        "أجهزة لحام حراري أصلية عالية الدقة",
        "توفر جميع مقاسات المحابس الإيطالية والنحاسية في سيارة الخدمة",
        "فحص ضغط وتأكد من سلامة الخط قبل المغادرة",
        "إصلاح دقيق بدون تكسير عشوائي للبلاط والجبس",
      ],
    },
    startingPriceAED: 180,
  },
  {
    id: "drain-sewer-snaking",
    iconName: "Waves",
    title: {
      en: "Motorized Heavy-Duty Drain & Sewer Snaking",
      ar: "تسليك مجاري وبالوعات بأحدث ماكينات السبرينغ والضغط",
    },
    tagline: {
      en: "Heavy-duty electric rotary cable clearance removing stubborn grease, scale & foreign objects.",
      ar: "ماكينات سبرينغ دوارة كهربائية لفتح أصعب انسدادات الصرف الصحي والدهون فورا.",
    },
    details: {
      en: "Industrial mechanical augers and high-pressure jetting power through solid grease blockages, wet wipe entanglements, and hard mineral buildup in 2-inch to 6-inch waste pipes.",
      ar: "تسليك عميق لخطوط الصرف الرئيسية وبالوعات المطابخ والحمامات، إزالة الرواسب والكتل الدهنية المتصلبة ومخلفات البناء العالقة بدون روائح أو فوضى.",
    },
    features: {
      en: [
        "Heavy-duty electric rotary spiral machines",
        "Clears toilet, sink, bath & floor trap drains",
        "Sanitized post-clearance clean up",
        "Prevents toxic sewer backflow and odors",
      ],
      ar: [
        "ماكينات تسليك آلية بقوة دوران فائقة",
        "فتح فوري لبالوعات المطابخ، كراسي الحمام، والصفايات",
        "تعقيم وتنظيف مكان العمل بعد الانتهاء",
        "القضاء التام على الروائح الكريهة وارتداد المجاري",
      ],
    },
    startingPriceAED: 150,
  },
  {
    id: "water-pump-repair",
    iconName: "Gauge",
    title: {
      en: "Emergency Water Pump & Pressure Control Repair",
      ar: "تصليح وتبديل مضخات المياه ولوحات التحكم والأوتوماتيك",
    },
    tagline: {
      en: "Same-night troubleshooting of automatic pressure controllers, float switches & booster pumps.",
      ar: "صيانة طارئة وفحص دينامو الماء، تبديل جهاز الأوتوماتيك، وضبط ضغط المياه في دقائق.",
    },
    details: {
      en: "Complete diagnosis of rooftop booster pumps, submersible sump pumps, automatic pressure controllers (Presscontrol), float valves, and capacitor replacements for Italian & German pump units.",
      ar: "فحص وتصليح مضخات كالبيدا، سيتي، شيمجي الإيطالية والصينية، تبديل أو ضبط مفاتيح الضغط الأوتوماتيكية، وتغيير السيلات والمكثفات المحترقة ليلاً.",
    },
    features: {
      en: [
        "Calpeda, Shimge & Leo pump specialists",
        "Automatic digital pressure switch replacement",
        "Dry-run protection circuit fixes",
        "Instant water pressure restoration",
      ],
      ar: [
        "خبرة في مضخات كالبيدا وشيمجي ومضخات الدفع الأوتوماتيكية",
        "تبديل فوري لأجهزة الأوتوماتيك الرقمية والميكانيكية",
        "إصلاح قواطع الحماية ومستشعرات خزان السطح",
        "استعادة ضغط المياه القوي لجميع حمامات ومطابخ المنزل",
      ],
    },
    startingPriceAED: 200,
  },
  {
    id: "water-heater-replacement",
    iconName: "ShieldAlert",
    title: {
      en: "Water Heater (Geyser) Emergency Replacement",
      ar: "تبديل وصيانة سخانات المياه المركزية والعادية فوراً",
    },
    tagline: {
      en: "Safe electrical isolation, rapid drainage, and same-day installation of Ariston & Italian heaters.",
      ar: "عزل كهربائي آمن، تفريغ الخزان المكسور، وتركيب سخانات أريستون وإيطالية جديدة مع الضمان.",
    },
    details: {
      en: "Emergency replacement for ruptured 50L/80L/100L water heaters, faulty thermostats, leaking non-return pressure relief safety valves, and corroded heating elements with full warranty.",
      ar: "تبديل فوري لسخانات 50 لتر و80 لتر و100 لتر المعطلة أو المثقوبة، صيانة الثرموستات ورداد الأمان الإيطالي، وتمديد ليات ستانلس ستيل معزولة ومقاومة للحرارة.",
    },
    features: {
      en: [
        "Authentic Ariston & Italian replacement units",
        "Safe ELCB electrical testing",
        "Heavy-duty brass pressure relief safety valves",
        "Old unit safe removal and disposal",
      ],
      ar: [
        "سخانات أصلية معتمدة (أريستون وإيطالي) بضمان الوكيل",
        "فحص عزل الكهرباء وقاطع الأمان ضد الالتماس",
        "تركيب صمامات ضغط نحاسية أصلية لمنع الانفجار",
        "فك السخان القديم المعطوب والتخلص منه بأمان",
      ],
    },
    startingPriceAED: 160,
  },
];

export interface IPricingTier {
  id: string;
  service: {
    en: string;
    ar: string;
  };
  priceAED: number;
  duration: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  includes: {
    en: string[];
    ar: string[];
  };
  popular?: boolean;
}

export const TRANSPARENT_PRICING: IPricingTier[] = [
  {
    id: "inspection-callout",
    service: {
      en: "Emergency Callout & Diagnostic Isolation",
      ar: "الزيارة الطارئة والكشف الفوري وعزل الخطر",
    },
    priceAED: 120,
    duration: { en: "20–40 Mins", ar: "20–40 دقيقة" },
    description: {
      en: "Rapid dispatch to your door in Sharjah, high-pressure leak isolation, diagnostic pressure testing, and transparent upfront repair quotation.",
      ar: "وصول الفني خلال نصف ساعة، عزل تسريب المياه فوراً، فحص المشكلة بالأجهزة، وتقديم تقرير تسعير نهائي بدون أي رسوم خفية.",
    },
    includes: {
      en: [
        "24/7 Rapid on-site technician arrival",
        "Emergency water isolation & valve check",
        "Diagnostic leakage & blockage inspection",
        "Quote deducted if major repair executed",
      ],
      ar: [
        "وصول فوري للفني خلال 20-30 دقيقة",
        "عزل مباشر للمياه وفحص المحابس الرئيسية",
        "فحص شامل لتحديد مكمن الخلل بدقة",
        "خصم رسوم الكشف عند تنفيذ أعمال الإصلاح الكبرى",
      ],
    },
  },
  {
    id: "drain-unblocking",
    service: {
      en: "Motorized Drain & Sewer Snaking",
      ar: "تسليك مجاري بالماكينة الكهربائية الدوارة",
    },
    priceAED: 150,
    duration: { en: "30–60 Mins", ar: "30–60 دقيقة" },
    popular: true,
    description: {
      en: "Deep mechanical rotary auger clearance for blocked toilets, floor traps, sinks, or main drain inspection chambers.",
      ar: "تسليك احترافي بأحدث ماكينات السبرينغ الدوارة لفتح انسداد كرسي الحمام أو البالوعات الأرضية وخطوط الصرف الرئيسية.",
    },
    includes: {
      en: [
        "Electric heavy-duty rotary snake deployment",
        "Clears stubborn grease, sludge & blockages",
        "Floor trap & waste line flush test",
        "30-day anti-clog workmanship warranty",
      ],
      ar: [
        "استخدام ماكينة سبرينغ كهربائية متطورة",
        "تفتيت الرواسب والدهون العميقة وسحب العوالق",
        "اختبار تصريف المياه والتأكد من انسيابيتها",
        "ضمان لمدة 30 يوماً على سلامة التصريف",
      ],
    },
  },
  {
    id: "ppr-pipe-repair",
    service: {
      en: "PPR Thermal Pipe Splicing & Valve Repair",
      ar: "لحام حراري للمواسير وتبديل محابس المياه",
    },
    priceAED: 180,
    duration: { en: "45–90 Mins", ar: "45–90 دقيقة" },
    description: {
      en: "Permanent thermal socket welding for fractured PPR pipes, replacement of leaking angle valves, and high-pressure line reconstruction.",
      ar: "قص ولحام حراري معتمد لأنابيب الـ PPR الخضراء، واستبدال محابس الزاوية وليات السخان النحاسية التالفة.",
    },
    includes: {
      en: [
        "PPR heat fusion machine welding",
        "Heavy-duty compression fittings",
        "Post-weld 6-bar pressure test",
        "100% leak-proof warranty certificate",
      ],
      ar: [
        "لحام حراري متقن بماكينات الصهر الكهربائي",
        "تركيب وصلات ومحابس إيطالية عالية التحمل",
        "اختبار ضغط الماء للتأكد من انعدام التسريب تماماً",
        "ضمان خطي على جودة اللحام والقطع",
      ],
    },
  },
  {
    id: "pump-heater-service",
    service: {
      en: "Water Pump & Geyser Emergency Repair",
      ar: "صيانة مضخات المياه وتبديل سخانات المياه",
    },
    priceAED: 200,
    duration: { en: "45–90 Mins", ar: "45–90 دقيقة" },
    description: {
      en: "Diagnosis of booster pump automatic controllers, motor rewiring, or safe disconnection and replacement of burst water heaters.",
      ar: "فحص وإصلاح مفاتيح ضغط المضخات (الأوتوماتيك)، تصليح الدينامو، أو تبديل السخانات المثقوبة وتركيب صمامات الأمان.",
    },
    includes: {
      en: [
        "Automatic controller (Presscontrol) diagnosis",
        "Safe ELCB electrical safety isolation",
        "Booster pressure calibration",
        "Warranty on electrical & mechanical parts",
      ],
      ar: [
        "فحص جهاز الأوتوماتيك واللوحة الكهربائية",
        "فصل وتأمين الكهرباء ضد الصعق والماس",
        "معايرة ضغط المياه في شبكة المبنى",
        "ضمان معتمد على القطع والتركيب",
      ],
    },
  },
];

export interface IReviewItem {
  id: string;
  author: {
    en: string;
    ar: string;
  };
  location: {
    en: string;
    ar: string;
  };
  issue: {
    en: string;
    ar: string;
  };
  comment: {
    en: string;
    ar: string;
  };
  rating: number;
  timeAgo: {
    en: string;
    ar: string;
  };
  verified: boolean;
}

export const VERIFIED_REVIEWS: IReviewItem[] = [
  {
    id: "rev-1",
    author: { en: "Tariq Al-Mansouri", ar: "طارق المنصوري" },
    location: { en: "Al Majaz 2, Sharjah", ar: "المجاز 2، الشارقة" },
    issue: { en: "Midnight PPR Pipe Burst", ar: "انفجار ماسورة مياه الساعة 2 فجراً" },
    comment: {
      en: "At 2:15 AM our kitchen main pipe burst and water was flooding the hallway. Called them and technician arrived in exactly 18 minutes with a PPR thermal welder. Completely fixed before 3 AM. Truly saved my wooden flooring!",
      ar: "الساعة 2:15 فجراً انفجرت ماسورة المياه بالمطبخ وبدأت المياه تملأ الصالة. اتصلت بهم ووصل الفني في 18 دقيقة ومعه ماكينة اللحام الحراري وأنهى المشكلة قبل الساعة 3 فجراً. احترافية حقيقية وسرعة منقذة!",
    },
    rating: 5,
    timeAgo: { en: "2 days ago", ar: "منذ يومين" },
    verified: true,
  },
  {
    id: "rev-2",
    author: { en: "Sarah Jenkins", ar: "سارة جينكينز" },
    location: { en: "Al Nahda Sharjah", ar: "النهدة الشارقة" },
    issue: { en: "Severe Main Drain Sewer Blockage", ar: "انسداد كامل في مجاري الحمام" },
    comment: {
      en: "Toilet started backing up on a Friday night. Their heavy electric spring machine cleared the whole line in 35 minutes. Very respectful technicians, wore shoe covers and left the bathroom completely disinfected.",
      ar: "حدث انسداد كبير ليلة الجمعة وارتدت مياه الصرف. استخدم الفني ماكينة سبرينغ كهربائية ضخمة وفتح الانسداد خلال نصف ساعة. فنيين محترمين جداً ولبسوا واقيات الأحذية ونظفوا المكان بالكامل.",
    },
    rating: 5,
    timeAgo: { en: "5 days ago", ar: "منذ 5 أيام" },
    verified: true,
  },
  {
    id: "rev-3",
    author: { en: "Eng. Omar Al-Qassimi", ar: "م. عمر القاسمي" },
    location: { en: "Muwaileh Commercial", ar: "مويلح التجارية" },
    issue: { en: "Rooftop Water Pump Failure", ar: "عطل مفتاح ضغط مضخة السطح" },
    comment: {
      en: "Entire villa lost water pressure suddenly. The technician accurately diagnosed a burnt electronic pressure switch and replaced it with a heavy-duty Italian unit on the spot. Clear upfront pricing, exactly 200 AED.",
      ar: "انقطعت المياه فجأة عن الفيلا بالكامل. الفني كشف العطل مباشرة وكان احتراق في جهاز الأوتوماتيك، استبدله بقطعة إيطالية أصلية فوراً. السعر كان واضح ومحدد مسبقاً 200 درهم بدون أي زيادة.",
    },
    rating: 5,
    timeAgo: { en: "1 week ago", ar: "منذ أسبوع" },
    verified: true,
  },
  {
    id: "rev-4",
    author: { en: "Dr. Fatima Al-Zahra", ar: "د. فاطمة الزهراء" },
    location: { en: "Al Taawun, Sharjah", ar: "التعاون، الشارقة" },
    issue: { en: "Ruptured 80L Water Heater", ar: "تسريب سخان مياه 80 لتر وماس كهرباء" },
    comment: {
      en: "The water heater in our master bathroom cracked and started dripping hot water onto the ceiling lights. The team safely isolated the electrical breaker and installed a new Ariston heater within 2 hours. Outstanding service.",
      ar: "سخان الحمام الرئيسي انثقب وبدأ ينقط ماء حار على وحدات الإضاءة. تعامل الفريق باحترافية عالية، فصلوا الكهرباء وركبوا سخان أريستون جديد خلال ساعتين فقط مع الضمان. خدمة ممتازة.",
    },
    rating: 5,
    timeAgo: { en: "2 weeks ago", ar: "منذ أسبوعين" },
    verified: true,
  },
  {
    id: "rev-5",
    author: { en: "Mohammed Rashid", ar: "محمد راشد" },
    location: { en: "Al Nasiriyah, Sharjah", ar: "الناصرية، الشارقة" },
    issue: { en: "Concealed Wall Pipe Seepage", ar: "خرير مياه داخل الجدار" },
    comment: {
      en: "Because their base is in Al Nasiriyah, they reached my house in less than 10 minutes. Located the hidden leak behind the bathroom tiles and fixed it with minimal incision. Highly recommended for urgent emergencies.",
      ar: "بحكم أن مقرهم في الناصرية، وصلوا لبيتي في أقل من 10 دقائق. حددوا مكان التسريب المخفي خلف السيراميك وصلحوه بأقل فتحة ممكنة. أنصح بالتعامل معهم في أي حالة طوارئ.",
    },
    rating: 5,
    timeAgo: { en: "3 weeks ago", ar: "منذ 3 أسابيع" },
    verified: true,
  },
  {
    id: "rev-6",
    author: { en: "Khaled Al-Haddad", ar: "خالد الحداد" },
    location: { en: "Al Qasimia", ar: "القاسمية" },
    issue: { en: "Emergency Restaurant Drain Backflow", ar: "طوارئ انسداد صرف مطعم" },
    comment: {
      en: "As a restaurant manager, a clogged grease trap during dinner rush is a disaster. Plumber Maintenance arrived in 20 minutes with high-power snaking equipment and resolved the obstruction immediately. Lifesavers!",
      ar: "كمدير مطعم، انسداد المجاري وقت ذروة العشاء يعتبر كارثة. وصل فني الطوارئ في 20 دقيقة ومعه معدات التسليك القوية وتخلص من الشحوم فوراً. خدمة إنقاذ حقيقية للمنشآت التجارية!",
    },
    rating: 5,
    timeAgo: { en: "1 month ago", ar: "منذ شهر" },
    verified: true,
  },
];

export const TRUST_METRICS = [
  {
    id: "speed",
    iconName: "Clock",
    stat: "20–30",
    unit: { en: "Min ETA", ar: "دقيقة وصول" },
    title: { en: "Rapid Dispatch Across Sharjah", ar: "وصول فوري لجميع أحياء الشارقة" },
    description: {
      en: "Technician units stationed across Al Nasiriyah, Al Majaz, and Al Nahda for instant response.",
      ar: "فرق طوارئ متأهبة وموزعة في الناصرية والمجاز والنهدة لضمان سرعة الوصول.",
    },
  },
  {
    id: "rating",
    iconName: "Star",
    stat: "4.8 / 5",
    unit: { en: "★ ★ ★ ★ ★", ar: "★ ★ ★ ★ ★" },
    title: { en: "42+ Verified Local Reviews", ar: "أكثر من 42 تقييم حقيقي موثق" },
    description: {
      en: "Trusted by Sharjah homeowners, building managers, and tenants for emergency midnight repairs.",
      ar: "الخيار الأول لأصحاب الفلل والشقق ومدراء البنايات في حالات السباكة الحرجة.",
    },
  },
  {
    id: "transparent",
    iconName: "CheckCircle",
    stat: "120",
    unit: { en: "AED From", ar: "درهم فقط" },
    title: { en: "Transparent Upfront Pricing", ar: "أسعار واضحة بدون رسوم خفية" },
    description: {
      en: "Clear diagnostic inspection fee. No surprise midnight surcharges or inflated bills.",
      ar: "تسعيرة ثابتة ومعتمدة للكشف والإصلاح مع إعلامك بالتكلفة قبل البدء بالعمل.",
    },
  },
  {
    id: "warranty",
    iconName: "ShieldCheck",
    stat: "100%",
    unit: { en: "Guaranteed", ar: "ضمان شامل" },
    title: { en: "Workmanship Warranty", ar: "ضمان معتمد على جميع الإصلاحات" },
    description: {
      en: "All PPR welds, pump parts, and drain clearances come with an official service guarantee.",
      ar: "ضمان رسمي على جودة لحام المواسير، قطع المضخات، وتسليك خطوط الصرف.",
    },
  },
];
