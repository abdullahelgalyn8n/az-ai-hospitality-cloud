export type Language = 'en' | 'ar';

export type ProductCategory =
  | 'all'
  | 'core-operations'
  | 'distribution-revenue'
  | 'back-office-hr'
  | 'ai-infrastructure';

export type SolutionSlug =
  | 'hotels-resorts'
  | 'hotel-chains'
  | 'travel-agencies'
  | 'tour-operators';

export interface SubSolutionItem {
  id: string;
  iconName: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  highlights: { en: string[]; ar: string[] };
  metrics: { en: string; ar: string };
  relatedProductSlugs: string[];
}

export interface SolutionPageData {
  slug: SolutionSlug;
  path: string;
  iconName: string;
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  shortSummary: { en: string; ar: string };
  fullDescription: { en: string; ar: string };
  keyModules: { en: string[]; ar: string[] };
  impactStat: { value: string; label: { en: string; ar: string } };
  subSolutions: SubSolutionItem[];
  recommendedProducts: string[];
}

export interface ProductItem {
  slug: string;
  path: string;
  code: string;
  category: Exclude<ProductCategory, 'all'>;
  categoryLabel: { en: string; ar: string };
  iconName: string;
  name: { en: string; ar: string };
  tagline: { en: string; ar: string };
  description: { en: string; ar: string };
  targetSegments: SolutionSlug[];
  keyFeatures: { en: string[]; ar: string[] };
  technicalSpecs: {
    deployment: { en: string; ar: string };
    integrations: { en: string; ar: string };
    slaUptime: string;
    compliance: string;
  };
  kpiImpact: {
    metric: string;
    detail: { en: string; ar: string };
  };
}

export interface CoreServiceItem {
  id: string;
  slug: string;
  iconName: string;
  colorVariant: 'blue' | 'amber';
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  deliverables: { en: string[]; ar: string[] };
}

export interface WhyUsItem {
  id: string;
  image: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  metric: { en: string; ar: string };
}

export interface InspirationCard {
  id: string;
  image: string;
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  targetRoute: string;
}

export interface FaqItem {
  id: string;
  question: { en: string; ar: string };
  answer: { en: string; ar: string };
}

export interface GatewaySlide {
  id: string;
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  locationTag: { en: string; ar: string };
  ctaLabel: { en: string; ar: string };
  ctaRoute: string;
}

export const SOLUTIONS_DATA: SolutionPageData[] = [
  {
    slug: 'hotels-resorts',
    path: '/solutions/hotels-resorts',
    iconName: 'Cloud',
    title: {
      en: 'Hotels & Resorts',
      ar: 'الفنادق والمنتجعات',
    },
    subtitle: {
      en: 'Choose the solution that fits your hotel or resort needs.',
      ar: 'اختر الحل الذكي المتكامل الذي يناسب احتياجات فندقك أو منتجعك السياحي.',
    },
    shortSummary: {
      en: 'Full cloud suite powered by Aether: PMS, POS, HCM, Channel Manager, Booking Engine, EMS, and Finance with smart AI analytics.',
      ar: 'منظومة سحابية متكاملة عبر نظام Aether تشمل إدارة الفنادق، نقاط البيع، الموارد البشرية، القنوات، الحجز المباشر، الطاقة والمالية.',
    },
    fullDescription: {
      en: 'Through our innovative system Aether, AI Hospitality Cloud delivers a unified suite of cloud-based solutions engineered to elevate guest satisfaction, automate front-and-back office workflows, and maximize property profitability.',
      ar: 'من خلال نظامنا المبتكر Aether، تقدم AI Hospitality Cloud حزمة متكاملة من الحلول السحابية المصممة لرفع رضا النزلاء وأتمتة العمليات التشغيلية والمالية وتعظيم ربحية الفنادق والمنتجعات.',
    },
    keyModules: {
      en: [
        'PMS for room & reservation management',
        'POS for restaurants & point of sale',
        'Channel Manager & Direct Booking Engine',
        'HCM, EMS & USALI Finance Control',
      ],
      ar: [
        'نظام PMS لإدارة الغرف والحجوزات',
        'نظام POS للمطاعم ونقاط البيع',
        'مدير القنوات ومحرك الحجز المباشر',
        'إدارة الموارد البشرية والطاقة والمالية',
      ],
    },
    impactStat: {
      value: '+32%',
      label: {
        en: 'RevPAR & Direct Booking Growth in 6 Months',
        ar: 'نمو في عائد الغرف والحجوزات المباشرة خلال 6 أشهر',
      },
    },
    recommendedProducts: [
      'aether-pms',
      'aether-pos',
      'aether-channel-manager',
      'aether-booking-engine',
      'aether-ems',
      'aether-vision',
    ],
    subSolutions: [
      {
        id: 'room-solutions',
        iconName: 'BedDouble',
        title: {
          en: 'Room Solutions',
          ar: 'حلول الغرف الذكية',
        },
        description: {
          en: 'Smart in-room technology, automated check-in, and AI-powered guest personalization.',
          ar: 'تقنيات الغرف الذكية، تسجيل الدخول الذاتي الآلي، وتخصيص تجربة النزيل بالذكاء الاصطناعي.',
        },
        highlights: {
          en: [
            'Contactless mobile key & express kiosk check-in',
            'Automated climate & lighting profiles via Aether EMS',
            'In-room tablet concierge & instant F&B ordering',
          ],
          ar: [
            'مفتاح رقمي عبر الهاتف وتسجيل دخول ذاتي سريع',
            'ضبط تلقائي للتكييف والإضاءة عبر نظام Aether EMS',
            'كونسيرج رقمي وطلب خدمات الغرف والمطاعم فورياً',
          ],
        },
        metrics: {
          en: '-45% Front-Desk Wait Time · 24% Energy Saved',
          ar: 'تقليل وقت الانتظار 45% · توفير استهلاك الطاقة 24%',
        },
        relatedProductSlugs: ['aether-pms', 'aether-ems', 'aether-pos'],
      },
      {
        id: 'back-office-solutions',
        iconName: 'Briefcase',
        title: {
          en: 'Back Office Solutions',
          ar: 'حلول المكاتب الخلفية والإدارة',
        },
        description: {
          en: 'Streamline finance, HR, procurement, and operations with one unified platform.',
          ar: 'توحيد الإدارة المالية والموارد البشرية والمشتريات والعمليات في منصة سحابية واحدة.',
        },
        highlights: {
          en: [
            'USALI-compliant hotel accounting & automated night audit',
            'Hospitality shift scheduling, payroll & attendance (HCM)',
            'Real-time F&B recipe costing & supplier procurement workflows',
          ],
          ar: [
            'محاسبة فندقية متوافقة مع معايير USALI وتدقيق ليلي آلي',
            'جدولة الورديات والرواتب والحضور والانصراف لموظفي الضيافة',
            'حساب تكاليف الأغذية والمشروبات وإدارة المشتريات والموردين',
          ],
        },
        metrics: {
          en: '100% Automated Night Audit · -18% F&B Waste',
          ar: 'أتمتة التدقيق الليلي 100% · خفض هدر الأغذية 18%',
        },
        relatedProductSlugs: ['aether-finance', 'aether-hcm', 'aether-pms'],
      },
      {
        id: 'vision',
        iconName: 'Eye',
        title: {
          en: 'Vision',
          ar: 'أنظمة الرؤية الذكية (Vision AI)',
        },
        description: {
          en: 'AI vision systems for security, occupancy analytics, and guest flow insights.',
          ar: 'أنظمة رؤية حاسوبية بالذكاء الاصطناعي للأمن وتحليلات الإشغال وتدفق النزلاء.',
        },
        highlights: {
          en: [
            'Real-time lobby & buffet queue density heatmaps',
            'Automated perimeter security & unauthorized access alerts',
            'Pool, spa, and conference facility utilization tracking',
          ],
          ar: [
            'خرائط حرارية فورية لكثافة الازدحام في الاستقبال والبوفيه',
            'تنبيهات أمنية ذكية لحماية المرافق والمداخل على مدار الساعة',
            'قياس نسب إشغال حمامات السباحة والمنتجع الصحي وقاعات المؤتمرات',
          ],
        },
        metrics: {
          en: '99.4% Detection Accuracy · Real-Time Queue Alerts',
          ar: 'دقة رصد 99.4% · تنبيهات فورية لأوقات الذروة',
        },
        relatedProductSlugs: ['aether-vision', 'aether-ai-analytics'],
      },
    ],
  },
  {
    slug: 'hotel-chains',
    path: '/solutions/hotel-chains',
    iconName: 'Building2',
    title: {
      en: 'Hotel Chains',
      ar: 'سلاسل الفنادق والمجموعات',
    },
    subtitle: {
      en: 'Enterprise-grade solutions for multi-property management and brand consistency.',
      ar: 'حلول مؤسسية متطورة لإدارة الفنادق المتعددة وتوحيد معايير العلامة التجارية.',
    },
    shortSummary: {
      en: 'Enterprise-grade solutions for multi-property management, centralized analytics, and brand consistency across every location.',
      ar: 'إدارة مركزية للفنادق المتعددة، تحليلات أداء موحدة للمجموعة، وضمان ثبات جودة الخدمة عبر كافة الفروع.',
    },
    fullDescription: {
      en: 'Manage 5 to 500+ properties from a single HQ command center. Aether synchronizes guest profiles, loyalty tiers, central reservations (CRS), and consolidated financial reporting across your entire portfolio.',
      ar: 'أدر من 5 إلى أكثر من 500 فندق من مركز قيادة موحد. يقوم نظام Aether بمزامنة ملفات النزلاء وبرامج الولاء والحجوزات المركزية والتقارير المالية المجمعة عبر كامل مجموعتك الفندقية.',
    },
    keyModules: {
      en: [
        'Centralized Multi-Property CRS & Rate Control',
        'Cross-Property Guest Profile & Loyalty Sync',
        'Group-Wide USALI Financial Consolidation',
        'Standardized Brand SOPs & Quality Auditing',
      ],
      ar: [
        'نظام حجوزات مركزي وتحكم موحد بالأسعار',
        'مزامنة ملفات النزلاء والولاء بين جميع الفروع',
        'تقارير مالية مجمعة للمجموعة الفندقية بالكامل',
        'توحيد معايير التشغيل ومراقبة جودة العلامة التجارية',
      ],
    },
    impactStat: {
      value: '3.4x',
      label: {
        en: 'Faster Multi-Property Financial Closing & Reporting',
        ar: 'سرعة مضاعفة في الإغلاق المالي الموحد وإصدار تقارير المجموعة',
      },
    },
    recommendedProducts: [
      'aether-pms',
      'aether-channel-manager',
      'aether-finance',
      'aether-ai-analytics',
      'aether-hcm',
    ],
    subSolutions: [
      {
        id: 'multi-property-management',
        iconName: 'Network',
        title: {
          en: 'Multi-Property Management',
          ar: 'إدارة الفروع والمنشآت المتعددة',
        },
        description: {
          en: 'Centralized control of operations, inventory, and rates across all properties.',
          ar: 'تحكم مركزي كامل في العمليات والمخزون الفندقي والأسعار عبر جميع الفنادق التابعة.',
        },
        highlights: {
          en: [
            'Single sign-on switching across regional & city properties',
            'Central reservation spillover routing between sister hotels',
            'Clustered procurement & vendor contract management',
          ],
          ar: [
            'التنقل الفوري بين الفروع بحساب مركزي موحد',
            'تحويل الحجوزات الفائضة تلقائياً بين الفنادق الشقيقة',
            'إدارة مشتريات وعقود موردين مركزية للمجموعة',
          ],
        },
        metrics: {
          en: 'Zero Spillover Loss · Unified CRS Inventory',
          ar: 'صفر خسارة للحجوزات الفائضة · مخزون مركزي موحد',
        },
        relatedProductSlugs: ['aether-pms', 'aether-channel-manager', 'aether-finance'],
      },
      {
        id: 'centralized-analytics',
        iconName: 'BarChart3',
        title: {
          en: 'Centralized Analytics',
          ar: 'التحليلات المركزية ومؤشرات الأداء',
        },
        description: {
          en: 'Group-wide dashboards, KPIs, and AI-driven performance benchmarking.',
          ar: 'لوحات معلومات شاملة للمجموعة ومؤشرات أداء رئيسية ومقارنات معيارية بالذكاء الاصطناعي.',
        },
        highlights: {
          en: [
            'Live ADR, Occupancy, RevPAR, and GOPPAR side-by-side comparison',
            'AI anomaly detection for property cost spikes or rate leakage',
            'Automated daily executive briefing for board & owners',
          ],
          ar: [
            'مقارنة لحظية لمؤشرات الإشغال والعائد والربحية بين الفروع',
            'رصد ذكي لأي انحرافات في التكاليف أو تسرب في الأسعار',
            'تقارير تنفيذية يومية آلية لمجلس الإدارة والملاك',
          ],
        },
        metrics: {
          en: '+19% Group GOPPAR · Real-Time Portfolio BI',
          ar: 'زيادة صافي الربح التشغيلي 19% · ذكاء أعمال لحظي',
        },
        relatedProductSlugs: ['aether-ai-analytics', 'aether-finance'],
      },
      {
        id: 'brand-consistency',
        iconName: 'ShieldCheck',
        title: {
          en: 'Brand Consistency',
          ar: 'ثبات معايير العلامة التجارية',
        },
        description: {
          en: 'Standardize guest experience, communications, and service quality across the chain.',
          ar: 'توحيد تجربة النزيل والتواصل وجودة الخدمة الفندقية في كافة فروع السلسلة.',
        },
        highlights: {
          en: [
            'Shared VIP guest preferences & allergy history across all locations',
            'Unified omnichannel pre-arrival and post-stay messaging templates',
            'Real-time SLA tracking for housekeeping & maintenance requests',
          ],
          ar: [
            'مشاركة تفضيلات كبار الزوار وسجل الإقامات عبر كافة الفروع',
            'قوالب تواصل موحدة قبل الوصول وبعد المغادرة',
            'مراقبة لحظية لاتفاقيات مستوى الخدمة للصيانة والإشراف الداخلي',
          ],
        },
        metrics: {
          en: '4.8★ Avg Chain Guest Score · +28% Repeat Stays',
          ar: 'متوسط تقييم 4.8 نجوم · زيادة تكرار الإقامة 28%',
        },
        relatedProductSlugs: ['aether-pms', 'aether-booking-engine', 'aether-ems'],
      },
    ],
  },
  {
    slug: 'travel-agencies',
    path: '/solutions/travel-agencies',
    iconName: 'Plane',
    title: {
      en: 'Travel Agencies',
      ar: 'وكالات السفر والسياحة',
    },
    subtitle: {
      en: 'Smart booking platforms, personalized recommendations, and real-time inventory.',
      ar: 'منصات حجز ذكية، توصيات مخصصة للمسافرين، ووصول فوري للمخزون الفندقي.',
    },
    shortSummary: {
      en: 'Smart booking platforms, personalized recommendations, and real-time inventory access with seamless B2B/B2C checkout.',
      ar: 'منصات حجز ذكية وتوصيات مدعومة بالذكاء الاصطناعي ووصول لحظي للمخزون والأسعار المباشرة.',
    },
    fullDescription: {
      en: 'Connect your travel agency directly to hundreds of hotels, resorts, and Nile cruises across Egypt and the Middle East with instant confirmation, dynamic packaging, and AI-curated client proposals.',
      ar: 'اربط وكالة السفر الخاصة بك مباشرة بمئات الفنادق والمنتجعات والفنادق العائمة في مصر والشرق الأوسط مع تأكيد فوري وتصميم باقات ديناميكية وعروض مخصصة بالذكاء الاصطناعي.',
    },
    keyModules: {
      en: [
        'Unified B2B/B2C Hotel, Flight & Transfer Booking',
        'AI Traveler Preference Matching Engine',
        'Live Direct-Connect Hotel Inventory & Net Rates',
        'Automated Voucher, Invoice & Commission Tracking',
      ],
      ar: [
        'حجز موحد للفنادق والطيران والتنقلات B2B/B2C',
        'محرك ذكاء اصطناعي لمطابقة تفضيلات المسافرين',
        'ربط مباشر لحظي بالمخزون والأسعار الصافية للفنادق',
        'إصدار آلي للقسائم والفواتير وتتبع العمولات',
      ],
    },
    impactStat: {
      value: '+41%',
      label: {
        en: 'Higher Quote-to-Booking Conversion Rate',
        ar: 'ارتفاع في معدل تحويل العروض إلى حجوزات مؤكدة',
      },
    },
    recommendedProducts: [
      'aether-booking-engine',
      'aether-channel-manager',
      'aether-ai-analytics',
      'aether-finance',
    ],
    subSolutions: [
      {
        id: 'smart-booking-platform',
        iconName: 'CalendarCheck',
        title: {
          en: 'Smart Booking Platform',
          ar: 'منصة الحجز الذكية الموحدة',
        },
        description: {
          en: 'A unified platform for hotels, flights, and packages with seamless checkout.',
          ar: 'منصة موحدة لحجز الفنادق والطيران والباقات السياحية مع إجراءات دفع سلسة وفورية.',
        },
        highlights: {
          en: [
            'Dynamic bundling of rooms, airport transfers, and local excursions',
            'Multi-currency B2B sub-agent portals with custom markup rules',
            'Instant PDF/WhatsApp branded itinerary & voucher generation',
          ],
          ar: [
            'دمج ديناميكي للغرف والتنقلات والرحلات السياحية في باقة واحدة',
            'بوابات فرعية للوكلاء بعملات متعددة وقواعد هامش ربح مرنة',
            'إصدار فوري لقسائم الحجز وعروض الأسعار بهوية الوكالة',
          ],
        },
        metrics: {
          en: '< 45s Quote Generation · Multi-Currency Checkout',
          ar: 'إصدار العرض في أقل من 45 ثانية · دفع متعدد العملات',
        },
        relatedProductSlugs: ['aether-booking-engine', 'aether-finance'],
      },
      {
        id: 'personalized-recommendations',
        iconName: 'Sparkles',
        title: {
          en: 'Personalized Recommendations',
          ar: 'توصيات مخصصة بالذكاء الاصطناعي',
        },
        description: {
          en: 'AI-powered suggestions tailored to each traveler’s preferences and history.',
          ar: 'اقتراحات ذكية مصممة خصيصاً لتفضيلات كل مسافر وسجل رحلاته السابقة.',
        },
        highlights: {
          en: [
            'Smart matching for family resorts, honeymoon suites, or corporate stays',
            'Automated room upgrade and excursion upsell prompts at checkout',
            'Historical guest sentiment analysis across verified stays',
          ],
          ar: [
            'ترشيح ذكي للمنتجعات العائلية أو أجنحة شهر العسل أو رحلات الأعمال',
            'اقتراحات تلقائية لترقية الغرف والأنشطة الإضافية عند الحجز',
            'تحليل تقييمات المسافرين السابقة لضمان أعلى توافق',
          ],
        },
        metrics: {
          en: '+26% Average Basket Value · 3x Repeat Bookings',
          ar: 'زيادة متوسط قيمة الحجز 26% · 3 أضعاف تكرار الحجز',
        },
        relatedProductSlugs: ['aether-ai-analytics', 'aether-booking-engine'],
      },
      {
        id: 'real-time-inventory-access',
        iconName: 'Boxes',
        title: {
          en: 'Real-Time Inventory Access',
          ar: 'وصول لحظي للمخزون والأسعار',
        },
        description: {
          en: 'Live availability and pricing from suppliers, all in one place.',
          ar: 'توافر الغرف والأسعار اللحظية من الفنادق والموردين مباشرة في شاشة واحدة.',
        },
        highlights: {
          en: [
            'Direct two-way XML/API connection to Aether PMS & Channel Manager',
            'Real-time last-room availability & instant allotment confirmation',
            'Eliminates manual email/phone reconfirmation delays',
          ],
          ar: [
            'ربط ثنائي الاتجاه عبر API مع أنظمة الفنادق مباشرة',
            'إتاحة لحظية لآخر الغرف المتوفرة وتأكيد فوري للحصص',
            'القضاء التام على تأخيرات التأكيد اليدوي عبر البريد أو الهاتف',
          ],
        },
        metrics: {
          en: '0% Overbooking Rate · <120ms API Latency',
          ar: '0% تضارب حجوزات · استجابة فورية أقل من 120 ملي ثانية',
        },
        relatedProductSlugs: ['aether-channel-manager', 'aether-pms'],
      },
    ],
  },
  {
    slug: 'tour-operators',
    path: '/solutions/tour-operators',
    iconName: 'Map',
    title: {
      en: 'Tour Operators',
      ar: 'منظمو الرحلات السياحية',
    },
    subtitle: {
      en: 'End-to-end tour management with AI itinerary planning and demand forecasting.',
      ar: 'إدارة شاملة للرحلات والأفواج السياحية مع تخطيط المسارات وتوقع الطلب بالذكاء الاصطناعي.',
    },
    shortSummary: {
      en: 'End-to-end tour management with AI itinerary planning, supplier & guide dispatch, and seasonal demand forecasting.',
      ar: 'إدارة متكاملة للأفواج السياحية وتخطيط المسارات بالذكاء الاصطناعي وإدارة المرشدين والتنبؤ بالطلب الموسمي.',
    },
    fullDescription: {
      en: 'Built for inbound and outbound tour operators managing complex multi-city circuits across Cairo, Luxor, Aswan, Hurghada, and Sharm El-Sheikh. Coordinate allotments, fleet logistics, multilingual guides, and dynamic group costing effortlessly.',
      ar: 'مصمم لمنظمي الرحلات السياحية الذين يديرون برامج متعددة المدن في القاهرة والأقصر وأسوان والغردقة وشرم الشيخ. نسق الحصص الفندقية وحركة الأسطول والمرشدين وحساب تكاليف المجموعات بدقة متناهية.',
    },
    keyModules: {
      en: [
        'Group Allotment, Charter & Fleet Dispatch Hub',
        'AI Multi-City Circuit & Itinerary Optimizer',
        'Seasonal Demand & Allotment Forecasting',
        'Guide Scheduling & Supplier Settlement Engine',
      ],
      ar: [
        'إدارة حصص المجموعات وحركة أسطول النقل السياحي',
        'مخطط المسارات المتعددة المدن بالذكاء الاصطناعي',
        'التنبؤ الموسمي بالطلب وإدارة العقود الفندقية',
        'جدولة المرشدين السياحيين وتسوية حسابات الموردين',
      ],
    },
    impactStat: {
      value: '+29%',
      label: {
        en: 'Improvement in Seasonal Allotment Utilization & Margin',
        ar: 'تحسن في استغلال الحصص الموسمية وهامش ربح البرامج السياحية',
      },
    },
    recommendedProducts: [
      'aether-ai-analytics',
      'aether-channel-manager',
      'aether-booking-engine',
      'aether-finance',
    ],
    subSolutions: [
      {
        id: 'end-to-end-tour-management',
        iconName: 'GitCommitHorizontal',
        title: {
          en: 'End-to-End Tour Management',
          ar: 'إدارة شاملة للعمليات والأفواج',
        },
        description: {
          en: 'Manage bookings, suppliers, guides, and operations from a single dashboard.',
          ar: 'إدارة الحجوزات والموردين والمرشدين السياحيين والتشغيل الميداني من لوحة تحكم واحدة.',
        },
        highlights: {
          en: [
            'Centralized rooming lists, flight manifests, and VIP transfer dispatch',
            'Multilingual tour guide assignment with live mobile status updates',
            'Automated supplier contract tiers, stop-sales, and release periods',
          ],
          ar: [
            'قوائم تسكين المجموعات وكشوف الرحلات وتوجيه حافلات النقل',
            'تعيين المرشدين السياحيين حسب اللغة مع تحديثات ميدانية لحظية',
            'إدارة آلية لعقود الفنادق وفترات السماح وإيقاف البيع',
          ],
        },
        metrics: {
          en: '-60% Manual Manifest Prep · 100% Live Dispatch',
          ar: 'تقليل وقت إعداد الكشوف 60% · متابعة ميدانية 100%',
        },
        relatedProductSlugs: ['aether-channel-manager', 'aether-finance'],
      },
      {
        id: 'ai-itinerary-planning',
        iconName: 'BrainCircuit',
        title: {
          en: 'AI Itinerary Planning',
          ar: 'تخطيط البرامج بالذكاء الاصطناعي',
        },
        description: {
          en: 'Auto-generate optimized itineraries based on traveler interests and logistics.',
          ar: 'إنشاء برامج سياحية مثالية تلقائياً بناءً على اهتمامات المسافرين والجدوى اللوجستية.',
        },
        highlights: {
          en: [
            'Intelligent routing combining Cairo heritage, Nile cruises & Red Sea stays',
            'Real-time transfer time, museum opening hours & flight connection validation',
            'Instant group vs. FIT dynamic costing with margin protection',
          ],
          ar: [
            'ربط ذكي بين معالم القاهرة والرحلات النيلية ومنتجعات البحر الأحمر',
            'التحقق الآلي من أوقات الانتقال ومواعيد المزارات وربط الطيران',
            'حساب فوري لتكلفة الفرد والمجموعة مع حماية هامش الربح',
          ],
        },
        metrics: {
          en: '5x Faster Custom Program Design · Zero Schedule Conflicts',
          ar: 'تصميم البرامج أسرع 5 مرات · صفر تعارض في المواعيد',
        },
        relatedProductSlugs: ['aether-ai-analytics', 'aether-booking-engine'],
      },
      {
        id: 'demand-forecasting',
        iconName: 'TrendingUp',
        title: {
          en: 'Demand Forecasting',
          ar: 'التنبؤ بالطلب والمواسم السياحية',
        },
        description: {
          en: 'Predict seasonal trends and capacity needs to maximize occupancy and margins.',
          ar: 'توقع اتجاهات المواسم السياحية واحتياجات السعة الفندقية لتعظيم الإشغال والربحية.',
        },
        highlights: {
          en: [
            'Source-market search & flight capacity trend analysis (Europe, GCC, Asia)',
            'Optimal hotel allotment commitment recommendations before high season',
            'Early-bird vs. last-minute dynamic package pricing simulations',
          ],
          ar: [
            'تحليل اتجاهات الأسواق المصدرة للسياحة وسعة الطيران الوافد',
            'توصيات دقيقة لحجم الحصص الفندقية المتعاقد عليها قبل ذروة الموسم',
            'محاكاة تسعير العروض المبكرة وعروض اللحظة الأخيرة',
          ],
        },
        metrics: {
          en: '94% Seasonal Forecast Accuracy · +22% Net Margin',
          ar: 'دقة تنبؤ موسمي 94% · زيادة صافي الهامش 22%',
        },
        relatedProductSlugs: ['aether-ai-analytics', 'aether-channel-manager'],
      },
    ],
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    slug: 'aether-pms',
    path: '/products/aether-pms',
    code: 'AETHER-PMS',
    category: 'core-operations',
    categoryLabel: { en: 'Core Operations', ar: 'العمليات الفندقية الأساسية' },
    iconName: 'BedDouble',
    name: {
      en: 'Aether PMS — Property Management System',
      ar: 'نظام Aether PMS — إدارة المنشآت الفندقية',
    },
    tagline: {
      en: 'Cloud-native front desk, reservations, housekeeping, and guest lifecycle management.',
      ar: 'نظام سحابي متكامل لإدارة الاستقبال والحجوزات والإشراف الداخلي وتجربة النزلاء.',
    },
    description: {
      en: 'The core operating system of the Aether suite. Engineered for resorts, city hotels, and multi-property groups to manage reservations, room assignments, automated night audits, folio split billing, and mobile housekeeping in real time.',
      ar: 'القلب النابض لمنظومة Aether السحابية. مصمم للفنادق والمنتجعات والمجموعات الفندقية لإدارة الحجوزات وتسكين الغرف والتدقيق الليلي الآلي والفواتير المتعددة والإشراف الداخلي عبر الهواتف الذكية لحظياً.',
    },
    targetSegments: ['hotels-resorts', 'hotel-chains'],
    keyFeatures: {
      en: [
        'Drag-and-drop tape chart with AI room-assignment optimization',
        'Express QR / Kiosk check-in & digital mobile room keys',
        'Live housekeeping mobile app with minibar & maintenance triggers',
        'Multi-folio split routing for corporate, travel agent & group masters',
      ],
      ar: [
        'مخطط غرف تفاعلي بالسحب والإفلات مع تسكين ذكي بالذكاء الاصطناعي',
        'تسجيل دخول سريع عبر QR والأكشاك الذاتية ومفاتيح الغرف الرقمية',
        'تطبيق فوري للإشراف الداخلي مع تنبيهات الميني بار والصيانة',
        'تقسيم وتوجيه الفواتير للشركات ووكالات السفر والمجموعات السياحية',
      ],
    },
    technicalSpecs: {
      deployment: { en: 'Multi-tenant Cloud + Offline Edge Resilience', ar: 'سحابي متعدد الفروع مع دعم العمل دون اتصال' },
      integrations: { en: 'Keycard locks (Assa Abloy, Salto), Passport Scanners, Fiscal E-Receipt', ar: 'أقفال الغرف الذكية، قارئات الجوازات، والفاتورة الإلكترونية' },
      slaUptime: '99.98%',
      compliance: 'PCI-DSS Level 1 · GDPR · Egyptian E-Tax Ready',
    },
    kpiImpact: {
      metric: '-45%',
      detail: { en: 'Reduction in guest check-in time & front-desk queue bottlenecks', ar: 'انخفاض في وقت تسجيل دخول النزلاء والانتظار بالاستقبال' },
    },
  },
  {
    slug: 'aether-pos',
    path: '/products/aether-pos',
    code: 'AETHER-POS',
    category: 'core-operations',
    categoryLabel: { en: 'Core Operations', ar: 'العمليات الفندقية الأساسية' },
    iconName: 'Utensils',
    name: {
      en: 'Aether POS — Restaurants & F&B Point of Sale',
      ar: 'نظام Aether POS — نقاط البيع والمطاعم والضيافة',
    },
    tagline: {
      en: 'High-speed touchscreen & tablet POS for hotel restaurants, pool bars, room service, and banquets.',
      ar: 'نقاط بيع فائقة السرعة للمطاعم الفندقية وخدمة الغرف والكافيهات والحفلات.',
    },
    description: {
      en: 'Purpose-built for high-volume hospitality outlets. Aether POS connects table ordering, Kitchen Display Systems (KDS), recipe-level inventory depletion, meal-plan verification (BB/HB/FB/All-Inclusive), and instant PMS room-charge posting.',
      ar: 'مصمم خصيصاً للمطاعم والمنافذ الفندقية عالية الكثافة. يربط طلبات الطاولات وشاشات المطبخ (KDS) وخصم مكونات الوصفات والتحقق من الوجبات المشمولة (إفطار/نصف إقامة/إقامة شاملة) والترحيل الفوري لغرفة النزيل.',
    },
    targetSegments: ['hotels-resorts', 'hotel-chains'],
    keyFeatures: {
      en: [
        'Instant guest room-charge lookup & All-Inclusive wristband/meal-plan validation',
        'Interactive floor plan, course firing, and Kitchen Display System (KDS)',
        'QR table ordering & poolside digital menu with dynamic modifiers',
        'Real-time recipe cost tracking and automated warehouse stock deduction',
      ],
      ar: [
        'ترحيل فوري لحساب الغرفة والتحقق الآلي من باقات الإقامة الشاملة',
        'مخطط طاولات تفاعلي وشاشات مطبخ ذكية لمتابعة تحضير الطلبات',
        'قوائم طعام رقمية عبر QR للغرف وحمامات السباحة والشاطئ',
        'حساب تكلفة الوصفات لحظياً والخصم التلقائي من مخازن الأغذية',
      ],
    },
    technicalSpecs: {
      deployment: { en: 'Web, iOS/Android Waiter Tablets & POS Terminals', ar: 'أجهزة الكاشير والأجهزة اللوحية للمضيفين (iOS / Android)' },
      integrations: { en: 'Aether PMS, Aether Finance, Payment Terminals, Thermal/KDS Displays', ar: 'نظام الفندق PMS، النظام المالي، ماكينات الدفع وشاشات المطبخ' },
      slaUptime: '99.99%',
      compliance: 'ETA E-Receipt · EMV Contactless · ISO 27001',
    },
    kpiImpact: {
      metric: '+24%',
      detail: { en: 'Increase in F&B outlet table turnover and average guest check size', ar: 'زيادة في سرعة دوران الطاولات ومتوسط إنفاق النزيل بالمطاعم' },
    },
  },
  {
    slug: 'aether-channel-manager',
    path: '/products/aether-channel-manager',
    code: 'AETHER-CM',
    category: 'distribution-revenue',
    categoryLabel: { en: 'Distribution & Revenue', ar: 'التوزيع وإدارة الإيرادات' },
    iconName: 'Globe',
    name: {
      en: 'Aether Channel Manager — Global OTA Distribution',
      ar: 'نظام Aether Channel Manager — إدارة قنوات التوزيع العالمية',
    },
    tagline: {
      en: 'Real-time two-way synchronization across 200+ global OTAs, GDS, bedbanks, and tour operators.',
      ar: 'مزامنة ثنائية لحظية مع أكثر من 200 قناة حجز عالمية ووكالات سفر ومنظمي رحلات.',
    },
    description: {
      en: 'Eliminate overbookings and manual extranet updates. Aether Channel Manager pushes rate, restriction (MinLOS, CTA, CTD), and inventory changes across Booking.com, Expedia, Agoda, Airbnb, Hotelbeds, and regional B2B wholesalers in under 2 seconds.',
      ar: 'تخلص نهائياً من تضارب الحجوزات والتحديث اليدوي. يقوم مدير القنوات بتحديث الأسعار والقيود والمخزون عبر Booking.com وExpedia وAgoda وبنوك الأسرة ووكالات السفر الإقليمية في أقل من ثانيتين.',
    },
    targetSegments: ['hotels-resorts', 'hotel-chains', 'travel-agencies', 'tour-operators'],
    keyFeatures: {
      en: [
        'Pooled inventory sync across 200+ OTAs, GDS, and B2B bedbanks (< 2s latency)',
        'Automated rate parity monitoring and competitor price-undercut alerts',
        'Dynamic derived rates, stop-sell rules, and B2B tour operator allotment pools',
        'Reservation auto-delivery directly into Aether PMS with zero manual entry',
      ],
      ar: [
        'مزامنة موحدة للمخزون عبر أكثر من 200 منصة حجز عالمية في أقل من ثانيتين',
        'مراقبة آلية لتكافؤ الأسعار وتنبيهات فورية عند تغير أسعار المنافسين',
        'إدارة مرنة للأسعار المشتقة وقواعد إيقاف البيع وحصص منظمي الرحلات',
        'إدراج تلقائي للحجوزات داخل نظام Aether PMS دون أي تدخل يدوي',
      ],
    },
    technicalSpecs: {
      deployment: { en: 'High-Throughput Cloud XML/JSON Distribution Bus', ar: 'ناقل سحابي فائق السرعة ببروتوكولات XML/JSON' },
      integrations: { en: 'Booking.com, Expedia, Agoda, Amadeus/Sabre GDS, Hotelbeds, WebBeds', ar: 'Booking.com, Expedia, Agoda, أنظمة GDS وبنوك الأسرة العالمية' },
      slaUptime: '99.99%',
      compliance: 'OTA OpenTravel Alliance Certified · PCI-DSS',
    },
    kpiImpact: {
      metric: '0%',
      detail: { en: 'Overbooking incidents while expanding active distribution channels by 3x', ar: 'حالات تضارب حجوزات مع مضاعفة قنوات البيع النشطة 3 مرات' },
    },
  },
  {
    slug: 'aether-booking-engine',
    path: '/products/aether-booking-engine',
    code: 'AETHER-IBE',
    category: 'distribution-revenue',
    categoryLabel: { en: 'Distribution & Revenue', ar: 'التوزيع وإدارة الإيرادات' },
    iconName: 'CalendarCheck',
    name: {
      en: 'Aether Booking Engine — Direct Commission-Free Reservations',
      ar: 'نظام Aether Booking Engine — محرك الحجز المباشر',
    },
    tagline: {
      en: 'Convert website visitors into high-margin direct guests with AI upsells and multi-currency checkout.',
      ar: 'حوّل زوار موقعك الإلكتروني إلى حجوزات مباشرة عالية الربحية بدون عمولات وسيطة.',
    },
    description: {
      en: 'A mobile-first, ultra-fast booking engine that embeds seamlessly into your hotel, chain, or agency website. Features live OTA price comparison widgets, promo-code campaigns, corporate/B2B login rates, and integrated Egyptian & international payment gateways.',
      ar: 'محرك حجز فائق السرعة ومتوافق مع الهواتف الذكية يندمج بسلاسة في موقع فندقك أو مجموعتك. يتضمن أداة مقارنة الأسعار المباشرة مع منصات الحجز، أكواد الخصم، أسعار الشركات، وبوابات الدفع المصرية والعالمية.',
    },
    targetSegments: ['hotels-resorts', 'hotel-chains', 'travel-agencies', 'tour-operators'],
    keyFeatures: {
      en: [
        '3-step mobile checkout with live OTA rate-comparison trust widget',
        'AI smart add-ons (airport pickup, spa packages, late check-out, sea-view upgrade)',
        'Dedicated corporate negotiated rate codes & travel agency B2B portal login',
        'Multi-language & multi-currency support (EGP, USD, EUR, SAR, AED, GBP)',
      ],
      ar: [
        'إتمام الحجز في 3 خطوات مع أداة إظهار أفضلية السعر المباشر أمام المنصات',
        'إضافات ذكية أثناء الحجز (استقبال المطار، السبا، ترقية الإطلالة، مغادرة متأخرة)',
        'أكواد أسعار خاصة للشركات وبوابة دخول مباشرة لوكالات السفر',
        'دعم متعدد اللغات والعملات (الجنيه المصري، الدولار، اليورو، الريال، الدرهم)',
      ],
    },
    technicalSpecs: {
      deployment: { en: 'Headless Widget / Custom Domain White-Label', ar: 'أداة مدمجة بهوية الفندق على نطاقك الخاص' },
      integrations: { en: 'Paymob, Fawry, Stripe, Network International, Google Hotel Ads, Meta Pixel', ar: 'بوابات الدفع (Paymob, Stripe, Fawry) وإعلانات Google للفنادق' },
      slaUptime: '99.99%',
      compliance: '3D Secure 2.0 · PCI-DSS Level 1 · WCAG 2.1 AA',
    },
    kpiImpact: {
      metric: '+38%',
      detail: { en: 'Growth in commission-free direct website bookings within 90 days', ar: 'نمو في الحجوزات المباشرة المعفاة من العمولات خلال 90 يوماً' },
    },
  },
  {
    slug: 'aether-hcm',
    path: '/products/aether-hcm',
    code: 'AETHER-HCM',
    category: 'back-office-hr',
    categoryLabel: { en: 'Back Office & HR', ar: 'المكاتب الخلفية والموارد البشرية' },
    iconName: 'Users',
    name: {
      en: 'Aether HCM — Hospitality Human Capital Management',
      ar: 'نظام Aether HCM — إدارة رأس المال البشري للضيافة',
    },
    tagline: {
      en: 'Occupancy-driven shift scheduling, attendance biometrics, payroll, and 12% service-charge distribution.',
      ar: 'جدولة الورديات حسب نسب الإشغال، البصمة والحضور، الرواتب، وتوزيع حصيلة الـ 12% خدمة.',
    },
    description: {
      en: 'General HR software fails in hospitality. Aether HCM is tailored specifically for hotels and resorts: linking forecasted room occupancy and banquet events directly to department staffing rosters, biometric attendance, staff housing, and Egyptian labor/tax & service-charge rules.',
      ar: 'برامج الموارد البشرية التقليدية لا تناسب طبيعة الفنادق. صُمم Aether HCM خصيصاً لقطاع الضيافة ليربط توقعات إشغال الغرف والحفلات بجدولة ورديات الأقسام، أجهزة البصمة، سكن العاملين، وقوانين العمل وتوزيع نسبة الخدمة.',
    },
    targetSegments: ['hotels-resorts', 'hotel-chains'],
    keyFeatures: {
      en: [
        'AI staffing roster generator linked to forecasted PMS occupancy & events',
        'Automated hospitality service-charge (12%) pool calculation & points distribution',
        'Biometric & geo-fenced mobile attendance with split-shift & overtime rules',
        'Employee housing, uniform tracking, medical certificates, and seasonal contracts',
      ],
      ar: [
        'جدولة ذكية للورديات مرتبطة بتوقعات إشغال الفندق والمناسبات',
        'حساب وتوزيع آلي لحصيلة خدمة الضيافة (12%) بنظام النقاط والأقسام',
        'ربط مباشر بأجهزة البصمة وتطبيق الحضور الجغرافي والورديات المقسمة',
        'إدارة سكن العاملين، الزي الرسمي، الشهادات الصحية، والعقود الموسمية',
      ],
    },
    technicalSpecs: {
      deployment: { en: 'Cloud Web Portal + Employee Self-Service Mobile App', ar: 'منصة سحابية + تطبيق الخدمة الذاتية للموظفين' },
      integrations: { en: 'ZKTeco / Hikvision Biometrics, Aether Finance GL, Bank Payrollwps', ar: 'أجهزة بصمة ZKTeco وHikvision، النظام المالي، وتحويلات البنوك' },
      slaUptime: '99.95%',
      compliance: 'Egyptian Labor Law & Social Insurance · Multi-Country GCC Payroll',
    },
    kpiImpact: {
      metric: '-16%',
      detail: { en: 'Reduction in unscheduled overtime and payroll processing overhead', ar: 'خفض في تكاليف العمل الإضافي غير المخطط ووقت إعداد الرواتب' },
    },
  },
  {
    slug: 'aether-ems',
    path: '/products/aether-ems',
    code: 'AETHER-EMS',
    category: 'ai-infrastructure',
    categoryLabel: { en: 'AI & Smart Infrastructure', ar: 'الذكاء الاصطناعي والبنية الذكية' },
    iconName: 'Cpu',
    name: {
      en: 'Aether EMS — Engineering & Energy Management System',
      ar: 'نظام Aether EMS — إدارة الطاقة والصيانة الهندسية',
    },
    tagline: {
      en: 'IoT smart-room climate automation, preventive asset maintenance, and utility telemetry.',
      ar: 'أتمتة تكييف وإضاءة الغرف بإنترنت الأشياء، الصيانة الوقائية، ومراقبة استهلاك الطاقة والمياه.',
    },
    description: {
      en: 'Connects PMS check-in/check-out status directly to in-room thermostats and smart BMS panels. When a room becomes vacant or checks out, Aether EMS automatically shifts HVAC to eco-setback mode while dispatching preventive maintenance tickets to engineering teams.',
      ar: 'يربط حالة الغرفة في نظام PMS مباشرة بأنظمة التكييف والعدادات الذكية. عند مغادرة النزيل أو خلو الغرفة، يحول النظام التكييف تلقائياً لوضع توفير الطاقة مع إدارة أوامر الصيانة الوقائية والفورية لفريق الهندسة.',
    },
    targetSegments: ['hotels-resorts', 'hotel-chains'],
    keyFeatures: {
      en: [
        'Automatic HVAC & lighting setback upon PMS checkout or room vacancy',
        'Preventive maintenance schedules for chillers, boilers, elevators & generators',
        'Real-time utility sub-metering (electricity, water, solar, LPG) per building/wing',
        'Mobile engineering technician app with spare-parts inventory deduction',
      ],
      ar: [
        'ضبط تلقائي للتكييف والإضاءة عند مغادرة النزيل لتوفير الطاقة',
        'جداول صيانة وقائية للمبردات والغلايات والمصاعد والمولدات',
        'قراءة لحظية لعدادات الكهرباء والمياه والطاقة الشمسية لكل مبنى',
        'تطبيق ميداني لفريق الصيانة مع خصم قطع الغيار من المخزن آلياً',
      ],
    },
    technicalSpecs: {
      deployment: { en: 'Cloud IoT Hub + BACnet / Modbus / Zigbee Gateway', ar: 'منصة إنترنت الأشياء مع دعم بروتوكولات BACnet / Modbus / Zigbee' },
      integrations: { en: 'Honeywell, Schneider Electric, Siemens BMS, Aether PMS & Finance', ar: 'أنظمة تحكم المباني BMS العالمية ونظام الفندق والمالية' },
      slaUptime: '99.98%',
      compliance: 'Green Star Hotel Certification · ISO 50001 Energy Reporting',
    },
    kpiImpact: {
      metric: '-27%',
      detail: { en: 'Savings in property HVAC & electricity consumption without guest discomfort', ar: 'توفير في استهلاك الكهرباء والتكييف دون المساس براحة النزيل' },
    },
  },
  {
    slug: 'aether-finance',
    path: '/products/aether-finance',
    code: 'AETHER-FIN',
    category: 'back-office-hr',
    categoryLabel: { en: 'Back Office & HR', ar: 'المكاتب الخلفية والموارد البشرية' },
    iconName: 'Wallet',
    name: {
      en: 'Aether Finance — USALI Accounting & Revenue Control',
      ar: 'نظام Aether Finance — المحاسبة الفندقية ومراقبة الإيرادات',
    },
    tagline: {
      en: 'Unified hospitality general ledger, procurement, cost control, and multi-property consolidation.',
      ar: 'الأستاذ العام الفندقي، المشتريات، مراقبة التكاليف، والتقارير المالية الموحدة بمعايير USALI.',
    },
    description: {
      en: 'Built around the Uniform System of Accounts for the Lodging Industry (USALI 12th Edition). Automates daily revenue journals from PMS/POS, food & beverage flash cost reconciliation, purchasing approvals, accounts payable/receivable, and Egyptian Tax Authority (ETA) e-invoicing.',
      ar: 'مبني وفق النظام الموحد لحسابات صناعة الضيافة (USALI). يؤتمت قيود الإيرادات اليومية من الاستقبال والمطاعم، ومطابقة تكاليف الأغذية والمشروبات، ودورات اعتماد المشتريات، وحسابات العملاء والموردين، والربط المباشر مع منظومة الفاتورة الإلكترونية المصرية.',
    },
    targetSegments: ['hotels-resorts', 'hotel-chains', 'travel-agencies', 'tour-operators'],
    keyFeatures: {
      en: [
        'Out-of-the-box USALI departmental P&L (Rooms, F&B, Spa, Minor Operated, GOP)',
        'Automated daily income audit matching PMS folios, POS checks & payment gateways',
        'End-to-end procurement: PR -> RFQ -> PO -> Receiving -> Three-way invoice match',
        'Direct integration with Egyptian Tax Authority (ETA) E-Invoice & E-Receipt APIs',
      ],
      ar: [
        'قوائم دخل تفصيلية للأقسام الفندقية وفق معيار USALI العالمي',
        'مطابقة آلية لمراجعة الإيرادات اليومية بين الاستقبال والمطاعم وبوابات الدفع',
        'دورة مشتريات ومخازن متكاملة من طلب الشراء حتى استلام البضاعة ومطابقة الفاتورة',
        'ربط مباشر ومعتمد مع منظومة الفاتورة والإيصال الإلكتروني بمصلحة الضرائب',
      ],
    },
    technicalSpecs: {
      deployment: { en: 'Cloud Enterprise ERP with Multi-Company Consolidation', ar: 'نظام مالي سحابي يدعم تعدد الشركات والعملات' },
      integrations: { en: 'ETA E-Invoicing, SWIFT/Bank Feeds, Aether PMS, POS, HCM & EMS', ar: 'مصلحة الضرائب المصرية، البنوك، وكافة أنظمة Aether' },
      slaUptime: '99.99%',
      compliance: 'USALI 12th Ed · IFRS · Egyptian Tax Authority (ETA) Certified',
    },
    kpiImpact: {
      metric: '5 Days -> 1 Day',
      detail: { en: 'Reduction in month-end financial closing cycle across properties', ar: 'تقليص دورة الإغلاق المالي الشهري من 5 أيام إلى يوم واحد' },
    },
  },
  {
    slug: 'aether-ai-analytics',
    path: '/products/aether-ai-analytics',
    code: 'AETHER-AI',
    category: 'ai-infrastructure',
    categoryLabel: { en: 'AI & Smart Infrastructure', ar: 'الذكاء الاصطناعي والبنية الذكية' },
    iconName: 'BrainCircuit',
    name: {
      en: 'Aether AI Analytics — Predictive Revenue & BI Engine',
      ar: 'نظام Aether AI Analytics — التحليلات التنبؤية وإدارة الإيرادات',
    },
    tagline: {
      en: 'Machine learning occupancy forecasting, dynamic room pricing, and executive intelligence.',
      ar: 'التنبؤ بالإشغال عبر تعلم الآلة، التسعير الديناميكي للغرف، ولوحات ذكاء الأعمال التنفيذية.',
    },
    description: {
      en: 'Transforms raw hospitality data into profitable decisions. Aether AI Analytics analyzes historical booking pace, local Cairo/Red Sea events, flight arrivals, and competitor OTA rates to recommend optimal room pricing 365 days ahead.',
      ar: 'يحول البيانات الفندقية إلى قرارات تزيد الربحية. يقوم النظام بتحليل سرعة الحجوزات التاريخية، الفعاليات المحلية، حركة الطيران، وأسعار المنافسين لاقتراح السعر الأمثل للغرف لمدة 365 يوماً قادمة.',
    },
    targetSegments: ['hotels-resorts', 'hotel-chains', 'travel-agencies', 'tour-operators'],
    keyFeatures: {
      en: [
        '365-day ML occupancy & ADR forecasting with autopilot or one-click rate push',
        'Real-time pickup & pace analysis by market segment, channel, and source country',
        'Cancellation probability scoring & smart overbooking safety recommendations',
        'Natural-language executive KPI insights across single or multi-property portfolios',
      ],
      ar: [
        'تنبؤ ذكي بالإشغال والأسعار لمدة 365 يوماً مع تحديث تلقائي للقنوات',
        'تحليل لحظي لسرعة تدفق الحجوزات حسب الشريحة السوقية والدولة المصدرة',
        'حساب احتمالات الإلغاء وتوصيات الأمان لتعظيم الإشغال الكامل',
        'رؤى تنفيذية فورية لمؤشرات الأداء عبر فندق واحد أو سلسلة كاملة',
      ],
    },
    technicalSpecs: {
      deployment: { en: 'Cloud AI Lakehouse + Real-Time Streaming Pipeline', ar: 'منصة ذكاء اصطناعي سحابية بتحديث بيانات لحظي' },
      integrations: { en: 'Aether PMS, Channel Manager, STR Benchmarking, OTA Rate Shoppers', ar: 'نظام الفندق، مدير القنوات، ومؤشرات السوق التنافسية' },
      slaUptime: '99.98%',
      compliance: 'SOC2 Type II · Anonymized Training Models',
    },
    kpiImpact: {
      metric: '+18.5%',
      detail: { en: 'Average RevPAR uplift achieved via AI dynamic pricing recommendations', ar: 'متوسط زيادة عائد الغرفة المتاحة (RevPAR) عبر التسعير الديناميكي' },
    },
  },
  {
    slug: 'aether-vision',
    path: '/products/aether-vision',
    code: 'AETHER-VISION',
    category: 'ai-infrastructure',
    categoryLabel: { en: 'AI & Smart Infrastructure', ar: 'الذكاء الاصطناعي والبنية الذكية' },
    iconName: 'Eye',
    name: {
      en: 'Aether Vision — AI Computer Vision & Guest Flow',
      ar: 'نظام Aether Vision — الرؤية الحاسوبية وتحليل تدفق النزلاء',
    },
    tagline: {
      en: 'Intelligent video analytics for lobby queues, restaurant occupancy, security, and guest flow.',
      ar: 'تحليلات مرئية ذكية لطوابير الاستقبال، إشغال المطاعم، الأمن، وانسيابية حركة النزلاء.',
    },
    description: {
      en: 'Upgrades existing hotel IP cameras into smart operational sensors. Aether Vision measures front-desk wait times, buffet crowd density, pool/beach chair occupancy, and perimeter safety without storing invasive biometric data.',
      ar: 'يحول كاميرات المراقبة الحالية في الفندق إلى مستشعرات تشغيلية ذكية. يقيس أوقات الانتظار في الاستقبال، وكثافة الإشغال في البوفيه والمطاعم، وإشغال الشاطئ وحمامات السباحة، وأمن المداخل مع الحفاظ التام على الخصوصية.',
    },
    targetSegments: ['hotels-resorts', 'hotel-chains'],
    keyFeatures: {
      en: [
        'Instant alert to Duty Manager when front-desk queue exceeds 4 guests or 3 minutes',
        'Live breakfast/dinner restaurant occupancy meter displayed on guest room TVs & app',
        'License plate recognition (ANPR) for VIP arrival greeting at hotel gate',
        'Automated perimeter intrusion & unattended object safety notifications',
      ],
      ar: [
        'تنبيه فوري للمدير المناوب عند تجاوز انتظار الاستقبال 3 دقائق',
        'عرض نسبة ازدحام مطعم الإفطار لحظياً للنزل على شاشات الغرف والتطبيق',
        'التعرف الذكي على لوحات السيارات لاستقبال كبار الزوار فور وصولهم للبوابة',
        'تنبيهات أمنية ذكية لحماية أسوار المنشأة والمناطق الحيوية',
      ],
    },
    technicalSpecs: {
      deployment: { en: 'Edge AI Appliance + Cloud Analytics Dashboard', ar: 'معالجة ذكية محلية فائقة السرعة + لوحة تحكم سحابية' },
      integrations: { en: 'ONVIF IP Cameras (Hikvision, Axis, Dahua), Aether PMS & EMS', ar: 'كاميرات الشبكة القياسية ONVIF ونظام الفندق والطاقة' },
      slaUptime: '99.95%',
      compliance: 'Privacy-First Edge Blurring · GDPR Compliant',
    },
    kpiImpact: {
      metric: '-52%',
      detail: { en: 'Reduction in peak-hour lobby & restaurant congestion complaints', ar: 'انخفاض في شكاوى الازدحام أوقات الذروة في الاستقبال والمطاعم' },
    },
  },
];

export const CORE_SERVICES_DATA: CoreServiceItem[] = [
  {
    id: 'ai-analytics',
    slug: 'aether-ai-analytics',
    iconName: 'BrainCircuit',
    colorVariant: 'blue',
    title: {
      en: 'AI Analytics',
      ar: 'تحليلات الذكاء الاصطناعي',
    },
    description: {
      en: 'Predictive analytics and machine learning models for smarter decisions.',
      ar: 'تحليلات تنبؤية ونماذج تعلم آلة لاتخاذ قرارات تشغيلية وتسعيرية أذكى.',
    },
    deliverables: {
      en: ['Dynamic Pricing Models', '365-Day Demand Forecasting', 'Guest Sentiment & Churn Scoring'],
      ar: ['نماذج التسعير الديناميكي', 'توقع الطلب لمدة 365 يوماً', 'تحليل رضا وسلوك النزلاء'],
    },
  },
  {
    id: 'cloud-platform',
    slug: 'aether-pms',
    iconName: 'Cloud',
    colorVariant: 'amber',
    title: {
      en: 'Cloud Platform',
      ar: 'المنصة السحابية الموحدة',
    },
    description: {
      en: 'Scalable, secure cloud infrastructure designed for hospitality operations.',
      ar: 'بنية تحتية سحابية آمنة وقابلة للتوسع مصممة خصيصاً لعمليات الضيافة والفنادق.',
    },
    deliverables: {
      en: ['99.98% High-Availability Architecture', 'Multi-Property Sync', 'Zero-Hardware Maintenance'],
      ar: ['توافر تشغيلي بنسبة 99.98%', 'مزامنة الفروع المتعددة', 'صفر تكاليف خوادم محلية'],
    },
  },
  {
    id: 'api-integration',
    slug: 'aether-channel-manager',
    iconName: 'Plug',
    colorVariant: 'blue',
    title: {
      en: 'API Integration',
      ar: 'الربط البرمجي والتكامل (API)',
    },
    description: {
      en: 'Seamless connectivity with existing PMS, CRS, and distribution channels.',
      ar: 'ربط سلس وفوري مع أنظمة الفنادق والحجوزات المركزية وقنوات التوزيع العالمية.',
    },
    deliverables: {
      en: ['200+ Pre-Built OTA & GDS Connectors', 'REST & GraphQL Open APIs', 'ETA E-Invoice & Payment Gateways'],
      ar: ['أكثر من 200 قناة حجز عالمية جاهزة', 'واجهات برمجية مفتوحة وموثقة', 'ربط الفاتورة الإلكترونية وبوابات الدفع'],
    },
  },
  {
    id: 'managed-services',
    slug: 'aether-finance',
    iconName: 'Headphones',
    colorVariant: 'amber',
    title: {
      en: 'Managed Services',
      ar: 'الخدمات المدارة والدعم الفني',
    },
    description: {
      en: '24/7 expert support with dedicated account management.',
      ar: 'دعم فني متخصص على مدار الساعة 24/7 مع مدير حساب مخصص لمنشأتك.',
    },
    deliverables: {
      en: ['On-Site Cairo & Red Sea Implementation', '24/7 Bilingual Helpdesk', 'Staff Training & Revenue Coaching'],
      ar: ['تنفيذ ميداني في القاهرة والبحر الأحمر', 'دعم فني باللغتين العربية والإنجليزية 24/7', 'تدريب الفرق واستشارات نمو الإيرادات'],
    },
  },
];

export const WHY_US_DATA: WhyUsItem[] = [
  {
    id: 'tech-core',
    image: '/assets/extracted/why-tech-core.jpg',
    title: {
      en: 'Technology at Our Core',
      ar: 'التكنولوجيا في صميم عملنا',
    },
    description: {
      en: 'Best-in-class AI with fast, robust systems. Easy integration with our award-winning API.',
      ar: 'أحدث تقنيات الذكاء الاصطناعي مع أنظمة سريعة وعالية الاعتمادية، وتكامل سلس عبر واجهات برمجية متطورة.',
    },
    metric: {
      en: '<120ms API Response · 99.98% Uptime SLA',
      ar: 'استجابة أقل من 120ms · توافر 99.98%',
    },
  },
  {
    id: 'data-craftsmanship',
    image: '/assets/extracted/why-data-craft.jpg',
    title: {
      en: 'Data Craftsmanship',
      ar: 'إتقان هندسة وتحليل البيانات',
    },
    description: {
      en: 'Data-driven decision making. Exploit & leverage analytics as a strategic asset.',
      ar: 'صناعة قرارات مبنية على البيانات الدقيقة، وتحويل التحليلات إلى أصل استراتيجي يعظم ربحية منشأتك.',
    },
    metric: {
      en: '365-Day Predictive Revenue & Cost Visibility',
      ar: 'رؤية تنبؤية للإيرادات والتكاليف طوال العام',
    },
  },
  {
    id: 'powered-by-people',
    image: '/assets/extracted/why-our-people.jpg',
    title: {
      en: 'Powered by Our People',
      ar: 'مدعومون بخبراء الضيافة',
    },
    description: {
      en: 'Global experts with deep knowledge of the hospitality market and multilingual support.',
      ar: 'فريق من الخبراء المتخصصين بمعرفة عميقة بسوق الضيافة والسياحة ودعم فني متعدد اللغات 24/7.',
    },
    metric: {
      en: '24/7 Bilingual Support · On-Site Onboarding',
      ar: 'دعم 24/7 بالعربية والإنجليزية · تدريب ميداني',
    },
  },
  {
    id: 'product-innovation',
    image: '/assets/extracted/why-product-innovation.jpg',
    title: {
      en: 'Product Innovation',
      ar: 'الابتكار المستمر في المنتجات',
    },
    description: {
      en: 'A comprehensive portfolio of intelligent solutions at your fingertips.',
      ar: 'محفظة متكاملة من الحلول الذكية السحابية (نظام Aether) بين يديك لإدارة كل تفصيلة في فندقك.',
    },
    metric: {
      en: '9 Unified Aether Modules · Continuous Updates',
      ar: '9 أنظمة متكاملة في منصة Aether · تحديثات مستمرة',
    },
  },
];

export const INSPIRATION_CARDS: InspirationCard[] = [
  {
    id: 'hotel-inspiration',
    image: '/assets/extracted/card-hotel-inspiration.jpg',
    title: {
      en: 'HOTEL INSPIRATION',
      ar: 'إلهام الفنادق الذكية',
    },
    subtitle: {
      en: 'UNLOCK UNBEATABLE RATES, EXCLUSIVE OFFERS AND GLOBAL HOTEL PARTNERSHIPS',
      ar: 'اكتشف حلول الغرف الذكية وأنظمة التسعير والشراكات الفندقية العالمية',
    },
    targetRoute: '/solutions/hotels-resorts',
  },
  {
    id: 'destination-inspiration',
    image: '/assets/extracted/card-destination-inspiration.jpg',
    title: {
      en: 'DESTINATION INSPIRATION',
      ar: 'إلهام الوجهات السياحية',
    },
    subtitle: {
      en: 'GET INSPIRED BY THE BEST HOLIDAY DESTINATIONS WORLDWIDE',
      ar: 'حلول متكاملة للمنتجعات الساحلية ووجهات العطلات في مصر والعالم',
    },
    targetRoute: '/solutions/tour-operators',
  },
  {
    id: 'new-additions',
    image: '/assets/extracted/card-new-additions.jpg',
    title: {
      en: 'NEW ADDITIONS',
      ar: 'أحدث إضافات منصة AETHER',
    },
    subtitle: {
      en: 'BE THE FIRST TO EXPLORE WHAT’S NEW, REFRESHED, OR JUST ADDED TO OUR PORTFOLIO',
      ar: 'كن أول من يستكشف أحدث أنظمة Aether للرؤية الذكية والتحليلات التنبؤية',
    },
    targetRoute: '/products-services',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'what-is-aihc',
    question: {
      en: 'What is AI Hospitality Cloud?',
      ar: 'ما هي منصة AI Hospitality Cloud ونظام Aether؟',
    },
    answer: {
      en: 'AI Hospitality Cloud is a comprehensive technology platform that leverages artificial intelligence and cloud computing through our flagship system Aether (PMS, POS, HCM, Channel Manager, Booking Engine, EMS, Finance, and Vision AI) to transform hospitality operations, enhance guest experiences, and drive revenue growth for hotels, resorts, and travel businesses worldwide.',
      ar: 'شركة ومنصة تقنية رائدة تقدم حلولاً رقمية سحابية متكاملة لقطاعات الضيافة والفنادق والمطاعم عبر نظامنا المبتكر Aether (الذي يشمل أنظمة PMS وPOS وHCM ومدير القنوات ومحرك الحجز وإدارة الطاقة EMS والمالية والرؤية الذكية) لرفع كفاءة التشغيل وتعظيم الربحية.',
    },
  },
  {
    id: 'how-ai-pricing-works',
    question: {
      en: 'How does the AI-powered pricing work?',
      ar: 'كيف يعمل محرك التسعير الديناميكي المدعوم بالذكاء الاصطناعي؟',
    },
    answer: {
      en: 'Aether AI Analytics continuously evaluates your property booking pace, historical seasonal curves, competitor OTA rates, local events, and flight arrivals across Egypt and the region. It generates daily room-type price recommendations that can be pushed automatically or approved with one click via the Aether Channel Manager.',
      ar: 'يقوم نظام Aether AI Analytics بتحليل سرعة الحجوزات الحالية والبيانات التاريخية وأسعار المنافسين على منصات الحجز والفعاليات المحلية، ويصدر توصيات تسعير يومية لكل فئة من الغرف يمكن تطبيقها تلقائياً أو بضغطة زر عبر مدير القنوات.',
    },
  },
  {
    id: 'existing-pms-integration',
    question: {
      en: 'Can I integrate with my existing PMS system?',
      ar: 'هل يمكن ربط الحلول مع نظام الفندق (PMS) الحالي لدينا؟',
    },
    answer: {
      en: 'Yes. While our unified Aether PMS delivers the fastest end-to-end experience, our API Integration hub supports two-way connectivity with legacy and third-party PMS, CRS, ERP, and smart door-lock systems via open REST/XML standards.',
      ar: 'نعم بالتأكيد. يمكنك اعتماد منظومة Aether PMS الكاملة أو ربط وحداتنا الفردية (مثل مدير القنوات، التحليلات الذكية، الموارد البشرية، أو النظام المالي) مع أنظمتك الحالية عبر واجهات API القياسية ثنائية الاتجاه.',
    },
  },
  {
    id: 'support-offered',
    question: {
      en: 'What kind of support do you offer?',
      ar: 'ما نوع الدعم الفني والتدريب الذي تقدمونه؟',
    },
    answer: {
      en: 'We provide 24/7 bilingual (Arabic & English) technical support, dedicated account managers, on-site implementation teams across Cairo, the Red Sea, Luxor/Aswan, and the North Coast, plus structured certification training for front-desk, F&B, and finance staff.',
      ar: 'نوفر دعماً فنياً متخصصاً على مدار الساعة 24/7 باللغتين العربية والإنجليزية، مع مدير حساب مخصص، وفرق تنفيذ وتدريب ميداني في القاهرة والبحر الأحمر والأقصر وأسوان والساحل الشمالي.',
    },
  },
  {
    id: 'data-security',
    question: {
      en: 'Is my data secure on your platform?',
      ar: 'هل بيانات الفندق والنزلاء آمنة على منصتكم السحابية؟',
    },
    answer: {
      en: 'Absolutely. All data is encrypted in transit (TLS 1.3) and at rest (AES-256), with automated multi-region backups, strict role-based access control (RBAC), full audit logs, and compliance with PCI-DSS, GDPR, and Egyptian Tax Authority (ETA) security standards.',
      ar: 'بكل تأكيد. يتم تشفير كافة البيانات بأعلى المعايير العالمية (AES-256 وTLS 1.3) مع نسخ احتياطي سحابي آلي، وصلاحيات دقيقة للمستخدمين، وتوافق كامل مع معايير أمن المدفوعات PCI-DSS والفاتورة الإلكترونية المصرية.',
    },
  },
  {
    id: 'implementation-time',
    question: {
      en: 'How long does implementation take?',
      ar: 'كم يستغرق تنفيذ وتشغيل النظام في الفندق؟',
    },
    answer: {
      en: 'A single boutique hotel or travel agency can go live in 5 to 10 business days. Full enterprise resort or multi-property chain rollouts (including PMS, POS, HCM, EMS, and Finance historical migration) typically complete within 2 to 4 weeks with zero operational downtime.',
      ar: 'يمكن تشغيل الفنادق المتوسطة ووكالات السفر خلال 5 إلى 10 أيام عمل. أما المنتجعات الكبرى والسلاسل الفندقية (شاملة نقل البيانات وتدريب كافة الأقسام) فيتم إنجازها خلال 2 إلى 4 أسابيع دون أي توقف للعمليات.',
    },
  },
];

export const GATEWAY_SLIDES: GatewaySlide[] = [
  {
    id: 'egypt-gateway',
    title: {
      en: 'Your Gateway to Egypt. Where History Meets Innovation.',
      ar: 'بوابتك إلى مصر.. حيث يلتقي التاريخ بالابتكار التكنولوجي.',
    },
    subtitle: {
      en: 'Discover extraordinary hospitality experiences across Egypt — connect now!',
      ar: 'اكتشف حلول الضيافة الذكية الفريدة للفنادق والمنتجعات في جميع أنحاء مصر — تواصل معنا الآن!',
    },
    locationTag: {
      en: 'Cairo · Giza · New Administrative Capital',
      ar: 'القاهرة · الجيزة · العاصمة الإدارية الجديدة',
    },
    ctaLabel: {
      en: 'Explore Egypt Solutions',
      ar: 'استكشف حلولنا في مصر',
    },
    ctaRoute: '/solutions',
  },
  {
    id: 'red-sea-resorts',
    title: {
      en: 'Powering Red Sea & North Coast Mega-Resorts with Aether Cloud.',
      ar: 'تشغيل كبرى منتجعات البحر الأحمر والساحل الشمالي بنظام Aether السحابي.',
    },
    subtitle: {
      en: 'Unified All-Inclusive POS, Smart EMS Energy Savings, and Global OTA Channel Management.',
      ar: 'إدارة متكاملة لمنتجعات الإقامة الشاملة، ترشيد الطاقة الذكي، والربط الفوري مع قنوات الحجز العالمية.',
    },
    locationTag: {
      en: 'Hurghada · El Gouna · Sharm El-Sheikh · North Coast',
      ar: 'الغردقة · الجونة · شرم الشيخ · الساحل الشمالي',
    },
    ctaLabel: {
      en: 'View Hotels & Resorts Suite',
      ar: 'عرض حلول الفنادق والمنتجعات',
    },
    ctaRoute: '/solutions/hotels-resorts',
  },
  {
    id: 'nile-heritage-tours',
    title: {
      en: 'Intelligent Cultural Circuits & Nile Cruise Management.',
      ar: 'إدارة ذكية للبرامج السياحية الثقافية والفنادق العائمة بنهر النيل.',
    },
    subtitle: {
      en: 'Connecting tour operators, DMCs, and heritage hotels from Luxor to Aswan.',
      ar: 'ربط منظمي الرحلات ووكالات السفر والفنادق العائمة والتراثية من الأقصر إلى أسوان.',
    },
    locationTag: {
      en: 'Luxor · Aswan · Nile Valley',
      ar: 'الأقصر · أسوان · وادي النيل',
    },
    ctaLabel: {
      en: 'Tour Operator Solutions',
      ar: 'حلول منظمي الرحلات',
    },
    ctaRoute: '/solutions/tour-operators',
  },
  {
    id: 'enterprise-aether-suite',
    title: {
      en: 'One Unified Aether Platform: PMS, POS, HCM, Channel Manager & AI.',
      ar: 'منصة Aether الموحدة: إدارة الفنادق، نقاط البيع، الموارد البشرية، القنوات والذكاء الاصطناعي.',
    },
    subtitle: {
      en: 'Transform guest satisfaction and operational profitability across your entire hospitality portfolio.',
      ar: 'أحدث نقلة نوعية في تجربة النزلاء والربحية التشغيلية عبر كامل محفظتك الفندقية.',
    },
    locationTag: {
      en: 'Enterprise Cloud · MENA & Global',
      ar: 'سحابة مؤسسية · مصر والشرق الأوسط',
    },
    ctaLabel: {
      en: 'Browse All 9 Aether Products',
      ar: 'تصفح جميع منتجات Aether التسعة',
    },
    ctaRoute: '/products-services',
  },
];

export const CONTACT_INFO = {
  email: 'chairman@aihospitalitycloud.com',
  phone: '+20 1001979748',
  location: {
    en: 'Cairo, Egypt',
    ar: 'القاهرة، جمهورية مصر العربية',
  },
  workingHours: {
    en: '24/7 Enterprise Support · Sun–Thu 9:00 AM – 6:00 PM (Cairo GMT+2)',
    ar: 'دعم فني 24/7 · الأحد – الخميس 9:00 ص – 6:00 م (بتوقيت القاهرة)',
  },
};
