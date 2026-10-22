import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language, SOLUTIONS_DATA } from '../data/hospitalityData';
import { IconRenderer } from './IconRenderer';

interface SolutionsGridSectionProps {
  lang: Language;
  onNavigate: (path: string) => void;
  showHeader?: boolean;
}

export const SolutionsGridSection: React.FC<SolutionsGridSectionProps> = ({
  lang,
  onNavigate,
  showHeader = true,
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {showHeader && (
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="w-10 h-1 bg-[#184E8D] mx-auto mb-3 rounded-full" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#184E8D] mb-2">
              {lang === 'ar' ? 'الحلول القطاعية' : 'SOLUTIONS'}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3 text-balance">
              {lang === 'ar'
                ? 'تمكين كل قطاع في منظومة الضيافة والسياحة بحلول ذكية قابلة للتوسع'
                : 'Empowering every segment of the hospitality ecosystem with intelligent, scalable solutions.'}
            </h2>
            <p className="text-sm text-slate-700">
              {lang === 'ar'
                ? 'اختر القطاع الخاص بك لاستكشاف الحلول الفرعية والأنظمة المخصصة له.'
                : 'Select your hospitality segment to explore tailored Aether modules and sub-solutions.'}
            </p>
          </div>
        )}

        {/* Balanced 4-Column Solution Cards with High-Contrast Light Mode Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SOLUTIONS_DATA.map((sol) => (
            <article
              key={sol.slug}
              className="group bg-white rounded-2xl border border-slate-300 hover:border-[#184E8D] shadow-xs hover:shadow-md transition-all p-6 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Route Path Kicker */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-[#184E8D] flex items-center justify-center group-hover:bg-[#184E8D] group-hover:text-white transition-colors">
                    <IconRenderer name={sol.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-600">
                    {sol.path}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#184E8D] transition-colors">
                  {sol.title[lang]}
                </h3>

                {/* Clean Concise Description (Replacing the unformatted raw asterisk dump) */}
                <p className="text-sm text-slate-700 leading-relaxed mb-5">
                  {sol.shortSummary[lang]}
                </p>

                {/* Structured Key Modules List */}
                <div className="pt-4 border-t border-slate-200 mb-6">
                  <p className="text-xs font-bold text-slate-900 mb-2.5">
                    {lang === 'ar' ? 'أبرز الوحدات المشمولة:' : 'Included Aether Modules:'}
                  </p>
                  <ul className="space-y-2">
                    {sol.keyModules[lang].map((mod, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#184E8D] shrink-0 mt-0.5" />
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Metric & Dedicated Page Link */}
              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs text-slate-700 mb-3 flex items-baseline gap-1.5 leading-snug">
                  <span className="font-mono font-bold text-sm text-[#184E8D] tabular-nums shrink-0">
                    {sol.impactStat.value}
                  </span>
                  <span>{sol.impactStat.label[lang]}</span>
                </div>

                <a
                  href={sol.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(sol.path);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-[#184E8D] text-slate-900 hover:text-white font-bold text-xs transition-colors whitespace-nowrap shrink-0"
                >
                  <span>
                    {lang === 'ar'
                      ? `استكشف ${sol.title.ar}`
                      : `Explore ${sol.title.en}`}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`}
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
