import React, { useState } from 'react';
import {
  ArrowRight,
  Search,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';
import {
  CORE_SERVICES_DATA,
  Language,
  ProductCategory,
  PRODUCTS_DATA,
  SOLUTIONS_DATA,
  SolutionSlug,
} from '../data/hospitalityData';
import { filterProducts } from '../utils/catalogLogic';
import { IconRenderer } from './IconRenderer';

interface ProductsShowcaseSectionProps {
  lang: Language;
  onNavigate: (path: string) => void;
  initialCategory?: ProductCategory;
  initialSegment?: SolutionSlug | 'all';
}

export const ProductsShowcaseSection: React.FC<ProductsShowcaseSectionProps> = ({
  lang,
  onNavigate,
  initialCategory = 'all',
  initialSegment = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>(initialCategory);
  const [selectedSegment, setSelectedSegment] = useState<SolutionSlug | 'all'>(
    initialSegment
  );
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = filterProducts(PRODUCTS_DATA, {
    category: selectedCategory,
    segment: selectedSegment,
    searchQuery,
  });

  const categories: { id: ProductCategory; label: { en: string; ar: string } }[] = [
    { id: 'all', label: { en: 'All 9 Aether Products', ar: 'جميع منتجات Aether (9)' } },
    {
      id: 'core-operations',
      label: { en: 'Core Operations (PMS & POS)', ar: 'العمليات الأساسية (PMS & POS)' },
    },
    {
      id: 'distribution-revenue',
      label: { en: 'Distribution & Booking', ar: 'التوزيع والحجز المباشر' },
    },
    {
      id: 'back-office-hr',
      label: { en: 'Finance & HCM', ar: 'المالية والموارد البشرية' },
    },
    {
      id: 'ai-infrastructure',
      label: { en: 'AI, Vision & Smart EMS', ar: 'الذكاء الاصطناعي والطاقة والرؤية' },
    },
  ];

  return (
    <section className="py-20 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Part 1: 4 Core Services (Matching Products & Services Screenshot with Improved Contrast) */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-10 h-1 bg-[#184E8D] mx-auto mb-3 rounded-full" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#184E8D] mb-2">
            {lang === 'ar' ? 'المنتجات والخدمات' : 'PRODUCTS & SERVICES'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            {lang === 'ar'
              ? 'ارتقِ بأعمال الضيافة الخاصة بك إلى آفاق جديدة'
              : 'Take your hospitality business to new heights'}
          </h2>
          <p className="text-sm text-slate-700">
            {lang === 'ar'
              ? 'ركائزنا التقنية الأربع مدعومة بمنظومة Aether السحابية المتكاملة المكونة من 9 أنظمة متخصصة.'
              : 'Four foundational technology pillars paired with our 9-module Aether enterprise software suite.'}
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {CORE_SERVICES_DATA.map((service) => {
            const isBlue = service.colorVariant === 'blue';
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-300 p-6 flex items-start gap-5 shadow-xs hover:border-[#184E8D] transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white shadow-xs ${
                    isBlue ? 'bg-[#184E8D]' : 'bg-amber-600'
                  }`}
                >
                  <IconRenderer name={service.iconName} className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-base font-bold text-slate-900">
                      {service.title[lang]}
                    </h3>
                    <a
                      href={`/products/${service.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(`/products/${service.slug}`);
                      }}
                      className="text-xs font-bold text-[#184E8D] hover:underline whitespace-nowrap shrink-0"
                    >
                      {lang === 'ar' ? 'عرض النظام ←' : 'View Module →'}
                    </a>
                  </div>
                  <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                    {service.description[lang]}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600 font-medium">
                    {service.deliverables[lang].map((deliv, idx) => (
                      <React.Fragment key={deliv}>
                        {idx > 0 && <span aria-hidden="true">·</span>}
                        <span>{deliv}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Part 2: Complete Organized Aether Product Catalog (9 Products) */}
        <div className="bg-white rounded-2xl border border-slate-300 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {lang === 'ar'
                  ? 'كتالوج أنظمة ومنتجات Aether السحابية (9 أنظمة متكاملة)'
                  : 'The Aether Enterprise Product Suite (9 Integrated Modules)'}
              </h3>
              <p className="text-sm text-slate-700">
                {lang === 'ar'
                  ? 'كل منتج له صفحة مستقلة ورابط خاص به مع المواصفات الفنية وحاسبة العائد.'
                  : 'Every product features a dedicated URL route, technical specifications, and live integration details.'}
              </p>
            </div>

            {/* Search & Segment Filter */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label={
                    lang === 'ar' ? 'ابحث في منتجات Aether' : 'Search Aether products'
                  }
                  placeholder={
                    lang === 'ar'
                      ? 'ابحث (PMS, POS, USALI...)'
                      : 'Search (PMS, POS, USALI...)'
                  }
                  className="pl-9 pr-3.5 py-2 text-xs text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#184E8D] outline-none w-52 sm:w-60"
                />
              </div>

              <div className="flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4 text-slate-600 shrink-0" />
                <select
                  aria-label={
                    lang === 'ar' ? 'تصفية حسب القطاع' : 'Filter by hospitality segment'
                  }
                  value={selectedSegment}
                  onChange={(e) =>
                    setSelectedSegment(e.target.value as SolutionSlug | 'all')
                  }
                  className="px-3 py-2 text-xs font-semibold text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:border-[#184E8D] outline-none cursor-pointer"
                >
                  <option value="all">
                    {lang === 'ar' ? 'جميع القطاعات' : 'All Segments'}
                  </option>
                  {SOLUTIONS_DATA.map((sol) => (
                    <option key={sol.slug} value={sol.slug}>
                      {sol.title[lang]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl my-6 border border-slate-200"
            role="tablist"
            aria-label="Product categories"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#184E8D] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {cat.label[lang]}
                </button>
              );
            })}
          </div>

          {/* Filtered Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-sm font-bold text-slate-800 mb-2">
                {lang === 'ar'
                  ? 'لا توجد منتجات مطابقة لبحثك الحالي.'
                  : 'No Aether products match your current filter.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSegment('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-lg bg-[#184E8D] text-white text-xs font-bold cursor-pointer"
              >
                {lang === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <article
                  key={product.slug}
                  className="bg-slate-50/70 hover:bg-white rounded-xl border border-slate-300 hover:border-[#184E8D] p-5 flex flex-col justify-between transition-all shadow-2xs hover:shadow-md"
                >
                  <div>
                    {/* Top Row: Icon + Code + Dedicated URL */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#184E8D] text-white flex items-center justify-center shrink-0">
                        <IconRenderer name={product.iconName} className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono font-bold text-[#184E8D]">
                          {product.code}
                        </div>
                        <div className="text-[11px] font-mono text-slate-600">
                          {product.path}
                        </div>
                      </div>
                    </div>

                    {/* Category Metadata (Unboxed clean text) */}
                    <div className="text-xs font-semibold text-slate-600 mb-1">
                      <span>{product.categoryLabel[lang]}</span>
                      <span aria-hidden="true"> · </span>
                      <span className="font-mono tabular-nums">
                        SLA {product.technicalSpecs.slaUptime}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {product.name[lang]}
                    </h4>

                    {/* Tagline */}
                    <p className="text-xs text-slate-700 leading-relaxed mb-4">
                      {product.tagline[lang]}
                    </p>

                    {/* Key Features */}
                    <ul className="space-y-1.5 mb-5 pt-3 border-t border-slate-200">
                      {product.keyFeatures[lang].slice(0, 3).map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-800 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact & Dedicated Product Link */}
                  <div className="pt-3.5 border-t border-slate-200 flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-mono font-bold text-[#184E8D] tabular-nums">
                        {product.kpiImpact.metric}
                      </span>
                      <span className="block text-[11px] text-slate-700 leading-snug">
                        {product.kpiImpact.detail[lang]}
                      </span>
                    </div>

                    <a
                      href={product.path}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(product.path);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#184E8D] hover:bg-[#123d70] text-white font-bold text-xs transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>{lang === 'ar' ? 'تفاصيل المنتج' : 'Product Page'}</span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`}
                      />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
