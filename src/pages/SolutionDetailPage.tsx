import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Link2,
  Layers,
} from 'lucide-react';
import {
  Language,
  PRODUCTS_DATA,
  SolutionPageData,
  SOLUTIONS_DATA,
} from '../data/hospitalityData';
import { IconRenderer } from '../components/IconRenderer';

interface SolutionDetailPageProps {
  solution: SolutionPageData;
  lang: Language;
  onNavigate: (path: string) => void;
}

export const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({
  solution,
  lang,
  onNavigate,
}) => {
  const [selectedSubId, setSelectedSubId] = useState<string>(
    solution.subSolutions[0]?.id || ''
  );

  // Sync active sub-solution if route changes
  const activeSub =
    solution.subSolutions.find((s) => s.id === selectedSubId) ||
    solution.subSolutions[0];

  const recommendedProductItems = PRODUCTS_DATA.filter((p) =>
    solution.recommendedProducts.includes(p.slug)
  );

  return (
    <div className="bg-slate-50">
      {/* Royal Blue Banner Header (Matching Hotels & Resorts, Hotel Chains, Travel Agencies, Tour Operators screenshots) */}
      <section className="bg-gradient-to-r from-[#224F81] via-[#2B5F98] to-[#3B71AC] text-white py-16 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Segment Switcher Pills so user can easily jump between all 4 solution routes */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {SOLUTIONS_DATA.map((s) => {
              const isCurrent = s.slug === solution.slug;
              return (
                <a
                  key={s.slug}
                  href={s.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(s.path);
                  }}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                    isCurrent
                      ? 'bg-white text-[#184E8D] shadow-sm'
                      : 'bg-blue-950/40 text-blue-100 hover:bg-blue-950/70 border border-blue-400/30'
                  }`}
                >
                  <IconRenderer name={s.iconName} className="w-3.5 h-3.5" />
                  <span>{s.title[lang]}</span>
                </a>
              );
            })}
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-300 mb-2">
              <Link2 className="w-3.5 h-3.5" />
              <span>aihospitalitycloud.com{solution.path}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              {solution.title[lang]}
            </h1>
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-6">
              {solution.subtitle[lang]}
            </p>
            <p className="text-sm text-blue-50/90 leading-relaxed">
              {solution.fullDescription[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* 3 Sub-Solution Cards (Matching the 3-card layout in the uploaded screenshots with High Contrast) */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {solution.subSolutions.map((sub) => {
            const isSelected = activeSub?.id === sub.id;
            return (
              <article
                key={sub.id}
                className={`rounded-2xl bg-white p-7 border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#184E8D] ring-2 ring-[#184E8D]/15 shadow-md'
                    : 'border-slate-300 hover:border-[#184E8D] shadow-xs'
                }`}
              >
                <div className="text-center">
                  {/* Centered Icon Box */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-[#184E8D] flex items-center justify-center mx-auto mb-5">
                    <IconRenderer name={sub.iconName} className="w-7 h-7" />
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 mb-2.5">
                    {sub.title[lang]}
                  </h2>

                  <p className="text-sm text-slate-700 leading-relaxed mb-5">
                    {sub.description[lang]}
                  </p>

                  {/* Sub-solution operational highlights */}
                  <ul className="text-left space-y-2 pt-4 border-t border-slate-200 mb-6">
                    {sub.highlights[lang].map((hl, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-800 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#184E8D] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 text-center">
                  <p className="text-xs font-mono font-semibold text-slate-700 mb-3">
                    {sub.metrics[lang]}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedSubId(sub.id)}
                    className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-[#184E8D] text-white'
                        : 'text-[#184E8D] bg-blue-50 hover:bg-blue-100'
                    }`}
                  >
                    <span>
                      {lang === 'ar'
                        ? 'استكشف المواصفات والمنتجات ←'
                        : 'Read More →'}
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Deep-Dive Spotlight for Selected Sub-Solution */}
        {activeSub && (
          <div className="mt-10 bg-white rounded-2xl border border-slate-300 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#184E8D] mb-1">
                  {lang === 'ar'
                    ? 'تفاصيل الحل الفرعي والأنظمة المرتبطة'
                    : 'Sub-Solution Architecture & Linked Aether Modules'}
                </p>
                <h3 className="text-xl font-bold text-slate-900">
                  {solution.title[lang]} — {activeSub.title[lang]}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/contact')}
                className="px-5 py-2.5 rounded-lg bg-[#184E8D] hover:bg-[#123d70] text-white font-bold text-xs transition-colors cursor-pointer self-start lg:self-auto whitespace-nowrap shrink-0"
              >
                {lang === 'ar'
                  ? `اطلب عرضاً لـ ${activeSub.title.ar}`
                  : `Request Live Demo of ${activeSub.title.en}`}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
              {activeSub.relatedProductSlugs.map((prodSlug) => {
                const prod = PRODUCTS_DATA.find((p) => p.slug === prodSlug);
                if (!prod) return null;
                return (
                  <div
                    key={prod.slug}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-bold text-[#184E8D]">
                          {prod.code}
                        </span>
                        <span className="text-[11px] font-mono text-slate-600">
                          {prod.path}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">
                        {prod.name[lang]}
                      </h4>
                      <p className="text-xs text-slate-700 mb-3">
                        {prod.tagline[lang]}
                      </p>
                    </div>
                    <a
                      href={prod.path}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(prod.path);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#184E8D] hover:underline"
                    >
                      <span>
                        {lang === 'ar' ? 'فتح صفحة المنتج' : 'Open Product Page'}
                      </span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Recommended Aether Suite Modules for This Segment */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#184E8D] mb-1.5">
                <Layers className="w-4 h-4" />
                <span>
                  {lang === 'ar'
                    ? 'الأنظمة الموصى بها لهذا القطاع'
                    : 'Recommended Aether Suite Modules'}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                {lang === 'ar'
                  ? `منتجات Aether المتوافقة مع ${solution.title.ar}`
                  : `Aether Products Engineered for ${solution.title.en}`}
              </h2>
            </div>

            <a
              href="/products-services"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/products-services');
              }}
              className="text-xs font-bold text-[#184E8D] hover:underline"
            >
              {lang === 'ar'
                ? 'عرض جميع المنتجات التسعة ←'
                : 'View All 9 Aether Products →'}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProductItems.map((prod) => (
              <div
                key={prod.slug}
                className="p-5 rounded-xl bg-slate-50 border border-slate-300 hover:border-[#184E8D] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#184E8D] text-white flex items-center justify-center">
                      <IconRenderer name={prod.iconName} className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#184E8D]">
                      {prod.code}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {prod.name[lang]}
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4">
                    {prod.tagline[lang]}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-700 tabular-nums">
                    {prod.kpiImpact.metric}
                  </span>
                  <a
                    href={prod.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(prod.path);
                    }}
                    className="text-xs font-bold text-[#184E8D] hover:underline"
                  >
                    {lang === 'ar' ? 'صفحة المنتج ←' : 'View Details →'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
