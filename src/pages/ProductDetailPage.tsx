import React from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Server,
  Plug,
  Link2,
} from 'lucide-react';
import {
  Language,
  ProductItem,
  PRODUCTS_DATA,
  SOLUTIONS_DATA,
} from '../data/hospitalityData';
import { IconRenderer } from '../components/IconRenderer';
import { ContactSection } from '../components/ContactSection';

interface ProductDetailPageProps {
  product: ProductItem;
  lang: Language;
  onNavigate: (path: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  lang,
  onNavigate,
}) => {
  const matchedSegments = SOLUTIONS_DATA.filter((s) =>
    product.targetSegments.includes(s.slug)
  );

  return (
    <div className="bg-slate-50">
      {/* Product Hero Banner */}
      <section className="bg-gradient-to-r from-[#183B66] via-[#224F81] to-[#2B5F98] text-white py-16 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <button
              type="button"
              onClick={() => onNavigate('/products-services')}
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-100 hover:text-white cursor-pointer"
            >
              <ArrowLeft className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              <span>
                {lang === 'ar'
                  ? 'العودة إلى جميع المنتجات والخدمات (/products-services)'
                  : 'Back to All Products & Services (/products-services)'}
              </span>
            </button>

            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-300">
              <Link2 className="w-3.5 h-3.5" />
              <span>aihospitalitycloud.com{product.path}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-amber-300">
                  <IconRenderer name={product.iconName} className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-amber-300 block">
                    {product.code}
                  </span>
                  <span className="text-xs text-blue-100">
                    {product.categoryLabel[lang]}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                {product.name[lang]}
              </h1>

              <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-6">
                {product.tagline[lang]}
              </p>

              <p className="text-sm text-blue-50/90 leading-relaxed">
                {product.description[lang]}
              </p>
            </div>

            {/* KPI Highlight Box */}
            <div className="lg:col-span-4 bg-slate-950/60 border border-white/20 rounded-2xl p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
                {lang === 'ar' ? 'الأثر التشغيلي الموثق' : 'Verified Operational Impact'}
              </p>
              <div className="text-4xl font-mono font-bold text-white tabular-nums mb-2">
                {product.kpiImpact.metric}
              </div>
              <p className="text-xs text-slate-200 leading-relaxed mb-6">
                {product.kpiImpact.detail[lang]}
              </p>
              <a
                href="#contact-section"
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
              >
                {lang === 'ar'
                  ? `اطلب عرضاً عملياً لـ ${product.code}`
                  : `Schedule Live Demo for ${product.code}`}
              </a>
            </div>
          </div>

          {/* Quick Module Switcher Bar */}
          <div className="mt-10 pt-6 border-t border-white/15 flex items-center gap-2 overflow-x-auto pb-1">
            {PRODUCTS_DATA.map((p) => (
              <a
                key={p.slug}
                href={p.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(p.path);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors whitespace-nowrap shrink-0 ${
                  p.slug === product.slug
                    ? 'bg-amber-400 text-slate-950'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {p.code}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Features & Technical Specifications */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Key Capabilities */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-300 p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              {lang === 'ar'
                ? 'المميزات والقدرات التشغيلية الرئيسية'
                : 'Core Capabilities & Functional Modules'}
            </h2>
            <div className="space-y-4">
              {product.keyFeatures[lang].map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                    {feat}
                  </p>
                </div>
              ))}
            </div>

            {/* Compatible Hospitality Segments */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                {lang === 'ar'
                  ? 'القطاعات المستفيدة من هذا النظام:'
                  : 'Designed for Hospitality Segments:'}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {matchedSegments.map((seg) => (
                  <a
                    key={seg.slug}
                    href={seg.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(seg.path);
                    }}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-[#184E8D] text-slate-900 hover:text-white text-xs font-bold border border-slate-300 transition-colors"
                  >
                    <IconRenderer name={seg.iconName} className="w-4 h-4" />
                    <span>{seg.title[lang]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Architecture Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-300 p-6 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-slate-900">
              {lang === 'ar'
                ? 'المواصفات الفنية والتكامل القياسي'
                : 'Technical Specifications & SLA'}
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-[#184E8D] mb-1">
                  <Server className="w-4 h-4" />
                  <span>
                    {lang === 'ar' ? 'بيئة التشغيل السحابي' : 'Cloud Deployment Model'}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  {product.technicalSpecs.deployment[lang]}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-[#184E8D] mb-1">
                  <Plug className="w-4 h-4" />
                  <span>
                    {lang === 'ar' ? 'الربط والتكامل (Integrations)' : 'Hardware & API Integrations'}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  {product.technicalSpecs.integrations[lang]}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>
                    {lang === 'ar'
                      ? 'الاعتماد والأمان والتوافر'
                      : 'Security, Compliance & SLA'}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  {product.technicalSpecs.compliance}
                </p>
                <p className="text-xs font-mono text-slate-600 tabular-nums">
                  Guaranteed Uptime SLA: {product.technicalSpecs.slaUptime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form pre-filled with this product */}
      <ContactSection lang={lang} initialProduct={product.name.en} />
    </div>
  );
};
