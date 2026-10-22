import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../data/hospitalityData';
import { SolutionsGridSection } from '../components/SolutionsGridSection';
import { ProductsShowcaseSection } from '../components/ProductsShowcaseSection';
import { WhyUsAndFaqSection } from '../components/WhyUsAndFaqSection';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

const HERO_SLIDES = [
  {
    id: 'slide-1',
    title: {
      en: 'The Leading AI-Powered Hospitality Solutions Provider',
      ar: 'المزود الرائد لحلول الضيافة والفنادق المدعومة بالذكاء الاصطناعي',
    },
    subtitle: {
      en: 'Transforming the hospitality industry with cutting-edge artificial intelligence, Aether cloud technology, and data-driven insights.',
      ar: 'نحدث نقلة نوعية في صناعة الضيافة والسياحة من خلال الذكاء الاصطناعي المتقدم وتقنيات سحابة Aether والرؤى المبنية على البيانات.',
    },
    primaryCta: { en: 'Discover Our Solutions', ar: 'اكتشف حلولنا المتكاملة' },
    primaryPath: '/solutions',
  },
  {
    id: 'slide-2',
    title: {
      en: 'Meet Aether: 9 Unified Cloud Systems for Modern Hotels & Resorts',
      ar: 'تعرف على نظام Aether: تسعة أنظمة سحابية موحدة للفنادق والمنتجعات الحديثة',
    },
    subtitle: {
      en: 'From Front-Desk PMS, Restaurant POS, and Global Channel Manager to Smart EMS Energy Control and USALI Finance.',
      ar: 'من إدارة الغرف ونقاط البيع ومدير القنوات العالمي إلى ترشيد الطاقة الذكي والمحاسبة الفندقية المعتمدة.',
    },
    primaryCta: { en: 'Explore Aether Products', ar: 'تصفح منتجات Aether' },
    primaryPath: '/products-services',
  },
  {
    id: 'slide-3',
    title: {
      en: 'Built for Hotel Chains, Travel Agencies & Tour Operators Across MENA',
      ar: 'مصمم لسلاسل الفنادق ووكالات السفر ومنظمي الرحلات في مصر والشرق الأوسط',
    },
    subtitle: {
      en: 'Real-time B2B/B2C inventory, AI itinerary planning, and multi-property executive analytics from one platform.',
      ar: 'ربط لحظي بالمخزون الفندقي، تخطيط مسارات الرحلات بالذكاء الاصطناعي، وتحليلات مركزية للمجموعات الفندقية.',
    },
    primaryCta: { en: 'View Segment Solutions', ar: 'عرض الحلول القطاعية' },
    primaryPath: '/solutions/hotel-chains',
  },
];

export const HomePage: React.FC<HomePageProps> = ({ lang, onNavigate }) => {
  const [heroIdx, setHeroIdx] = useState(0);
  const currentHero = HERO_SLIDES[heroIdx];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[540px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        <img
          src="/assets/extracted/hero-resort-raw.jpg"
          alt="Luxury tropical resort and villas at twilight"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-bottom opacity-75"
        />
        {/* High-contrast dark gradient scrim + solid center shield */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950/90" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-4xl h-[430px] rounded-full bg-slate-950 blur-2xl opacity-95"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-amber-400 mb-4">
            {lang === 'ar'
              ? 'منظومة AETHER السحابية للضيافة الذكية · القاهرة، مصر'
              : 'AETHER ENTERPRISE HOSPITALITY CLOUD · CAIRO & MENA'}
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-[54px] font-bold tracking-tight text-white leading-[1.12] text-balance mb-6">
            {currentHero.title[lang]}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-9">
            {currentHero.subtitle[lang]}
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate(currentHero.primaryPath)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#E59819] hover:bg-[#d4880f] text-slate-950 font-bold text-sm transition-colors shadow-md cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>{currentHero.primaryCta[lang]}</span>
              <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/35 text-white font-bold text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </button>
          </div>

          {/* Slide Dots */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Hero slide ${idx + 1}`}
                onClick={() => setHeroIdx(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === heroIdx ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Hero Prev/Next Arrows */}
        <button
          type="button"
          onClick={() =>
            setHeroIdx((p) => (p === 0 ? HERO_SLIDES.length - 1 : p - 1))
          }
          aria-label="Previous hero slide"
          className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/90 border border-white/25 text-white items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() =>
            setHeroIdx((p) => (p === HERO_SLIDES.length - 1 ? 0 : p + 1))
          }
          aria-label="Next hero slide"
          className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/90 border border-white/25 text-white items-center justify-center transition-colors cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </section>

      {/* Full-Width 4-Column Quantitative Proof Strip Below Hero */}
      <section className="bg-[#184E8D] text-white border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-blue-700/60">
          <div className="pt-2 sm:pt-0 sm:px-4 first:pl-0">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-amber-300 tabular-nums">
              9 Modules
            </div>
            <div className="text-xs text-blue-100 mt-0.5 font-medium">
              {lang === 'ar'
                ? 'أنظمة Aether السحابية الموحدة (PMS إلى AI)'
                : 'Unified Aether Cloud Suite (PMS to Vision AI)'}
            </div>
          </div>
          <div className="pt-2 sm:pt-0 sm:px-4">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tabular-nums">
              200+ OTAs
            </div>
            <div className="text-xs text-blue-100 mt-0.5 font-medium">
              {lang === 'ar'
                ? 'ربط لحظي ثنائي الاتجاه مع قنوات التوزيع العالمية'
                : 'Real-Time Two-Way Global Channel Sync (<2s)'}
            </div>
          </div>
          <div className="pt-2 sm:pt-0 sm:px-4">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-amber-300 tabular-nums">
              +32% RevPAR
            </div>
            <div className="text-xs text-blue-100 mt-0.5 font-medium">
              {lang === 'ar'
                ? 'متوسط نمو عائد الغرف والحجوزات المباشرة خلال 6 أشهر'
                : 'Average Direct Booking & AI Pricing Uplift in 6 Months'}
            </div>
          </div>
          <div className="pt-2 sm:pt-0 sm:px-4">
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tabular-nums">
              99.98% SLA
            </div>
            <div className="text-xs text-blue-100 mt-0.5 font-medium">
              {lang === 'ar'
                ? 'اعتمادية سحابية ودعم فني متخصص 24/7 في مصر'
                : 'Enterprise Cloud Uptime & 24/7 Cairo Support'}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid (4 Segment Cards) */}
      <SolutionsGridSection lang={lang} onNavigate={onNavigate} />

      {/* Organized Products & Services (4 Core Pillars + 9 Aether Products Catalog) */}
      <ProductsShowcaseSection lang={lang} onNavigate={onNavigate} />

      {/* Why AI Hospitality Cloud + 3 Inspiration Cards + ROI Calculator + FAQ */}
      <WhyUsAndFaqSection lang={lang} onNavigate={onNavigate} />

      {/* Get In Touch Form */}
      <ContactSection lang={lang} />
    </div>
  );
};
