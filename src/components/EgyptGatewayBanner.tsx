import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { GATEWAY_SLIDES, Language } from '../data/hospitalityData';

interface EgyptGatewayBannerProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

export const EgyptGatewayBanner: React.FC<EgyptGatewayBannerProps> = ({
  lang,
  onNavigate,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = GATEWAY_SLIDES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? GATEWAY_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === GATEWAY_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      aria-label={lang === 'ar' ? 'بوابتك إلى مصر' : 'Your Gateway to Egypt'}
      className="relative w-full h-[420px] md:h-[480px] overflow-hidden bg-slate-900 border-b-4 border-amber-500"
    >
      {/* Background image with fallback */}
      <img
        src="/assets/extracted/egypt-gateway-banner.jpg"
        alt="Giza Pyramids and modern Cairo skyline at golden hour"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
      />
      {/* High-contrast scrim + center shield for guaranteed legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/65 to-slate-900/50" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-3xl h-[290px] rounded-full bg-slate-950 blur-2xl opacity-95"
      />

      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto h-full px-6 flex flex-col items-center justify-center text-center text-white">
        {/* Brand Script Mark */}
        <div className="mb-3 flex items-baseline gap-2">
          <span className="font-serif italic text-3xl md:text-4xl font-bold tracking-tight text-white">
            ai
          </span>
          <span className="text-[11px] uppercase tracking-[0.22em] text-amber-300 font-semibold">
            Hospitality Solution
          </span>
        </div>

        {/* Location metadata (unboxed clean text with separator) */}
        <p className="text-xs md:text-sm font-medium text-amber-200/95 mb-2 tracking-wide">
          {slide.locationTag[lang]}
        </p>

        {/* Main Slide Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white max-w-3xl text-balance leading-tight mb-3">
          {slide.title[lang]}
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-200 max-w-2xl mb-6 leading-relaxed">
          {slide.subtitle[lang]}
        </p>

        {/* Action Button */}
        <button
          type="button"
          onClick={() => onNavigate(slide.ctaRoute)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-colors shadow-md cursor-pointer whitespace-nowrap shrink-0"
        >
          <span>{slide.ctaLabel[lang]}</span>
          <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2 mt-7" role="tablist" aria-label="Gateway slides">
          {GATEWAY_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={idx === activeIndex}
              aria-label={`Slide ${idx + 1}: ${s.title.en}`}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === activeIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/45 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Left / Right Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label={lang === 'ar' ? 'الشريحة السابقة' : 'Previous gateway slide'}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/90 border border-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label={lang === 'ar' ? 'الشريحة التالية' : 'Next gateway slide'}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900/90 border border-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
};
