import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Calculator } from 'lucide-react';
import {
  FAQ_DATA,
  INSPIRATION_CARDS,
  Language,
  WHY_US_DATA,
} from '../data/hospitalityData';
import { calculateHospitalityRoi } from '../utils/catalogLogic';

interface WhyUsAndFaqSectionProps {
  lang: Language;
  onNavigate: (path: string) => void;
  showInspiration?: boolean;
  showFaq?: boolean;
  showRoiCalculator?: boolean;
}

export const WhyUsAndFaqSection: React.FC<WhyUsAndFaqSectionProps> = ({
  lang,
  onNavigate,
  showInspiration = true,
  showFaq = true,
  showRoiCalculator = true,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_DATA[0].id);

  // Interactive ROI Calculator State
  const [rooms, setRooms] = useState(180);
  const [properties, setProperties] = useState(2);
  const [adr, setAdr] = useState(135);
  const [occupancy, setOccupancy] = useState(74);

  const roiResult = calculateHospitalityRoi({
    rooms,
    properties,
    avgDailyRateUsd: adr,
    occupancyPct: occupancy,
  });

  return (
    <div className="bg-white">
      {/* 1. WHY AI HOSPITALITY CLOUD (With verified local cropped images) */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#184E8D] mb-2">
              {lang === 'ar' ? 'لماذا تختارنا' : 'ENTERPRISE ADVANTAGE'}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {lang === 'ar'
                ? 'لماذا AI HOSPITALITY CLOUD؟'
                : 'WHY AI HOSPITALITY CLOUD'}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/about')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-[#184E8D] text-[#184E8D] hover:bg-[#184E8D] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer self-start md:self-auto whitespace-nowrap shrink-0"
          >
            <span>{lang === 'ar' ? 'اقرأ المزيد عنا' : 'READ MORE'}</span>
            <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_US_DATA.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-5 rounded-2xl bg-slate-50 border border-slate-300 hover:border-[#184E8D] transition-all"
            >
              <div className="w-full sm:w-48 h-36 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-300">
                <img
                  src={item.image}
                  alt={item.title.en}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                  {item.title[lang]}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  {item.description[lang]}
                </p>
                <p className="text-xs font-mono font-semibold text-[#184E8D]">
                  {item.metric[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 3 INSPIRATION CARDS (Hotel Inspiration, Destination Inspiration, New Additions) */}
      {showInspiration && (
        <section className="pb-20 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSPIRATION_CARDS.map((card) => (
              <a
                key={card.id}
                href={card.targetRoute}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(card.targetRoute);
                }}
                className="group rounded-2xl overflow-hidden border border-slate-300 bg-slate-950 shadow-sm flex flex-col justify-between hover:border-[#184E8D] transition-all"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={card.image}
                    alt={card.title.en}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                </div>

                <div className="p-6 pt-3 bg-slate-950 text-white flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold tracking-wide text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                      {card.title[lang]}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">
                      {card.subtitle[lang]}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* 3. INTERACTIVE HOSPITALITY ROI & SAVINGS CALCULATOR */}
      {showRoiCalculator && (
        <section className="py-16 bg-slate-900 text-white border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Calculator className="w-4 h-4" />
                  <span>
                    {lang === 'ar'
                      ? 'حاسبة العائد السنوي لمنظومة Aether'
                      : 'Aether Hospitality ROI Simulator'}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight text-balance">
                  {lang === 'ar'
                    ? 'احسب العائد المالي المتوقع لفندقك أو مجموعتك الفندقية'
                    : 'Estimate Your Annual Revenue Uplift & Cost Savings'}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {lang === 'ar'
                    ? 'اضبط عدد الغرف والفروع ومتوسط السعر اليومي لمعرفة حجم التوفير من الحجز المباشر والتسعير الذكي وترشيد الطاقة.'
                    : 'Adjust your room count, properties, and average daily rate (ADR) to see projected direct booking commission savings, AI RevPAR lift, and smart EMS energy reductions.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                      <label htmlFor="roi-rooms">
                        {lang === 'ar' ? 'عدد الغرف لكل فندق' : 'Rooms per Property'}
                      </label>
                      <span className="font-mono font-bold text-amber-400 tabular-nums">
                        {rooms}
                      </span>
                    </div>
                    <input
                      id="roi-rooms"
                      type="range"
                      min={20}
                      max={1000}
                      step={10}
                      value={rooms}
                      onChange={(e) => setRooms(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                      <label htmlFor="roi-props">
                        {lang === 'ar' ? 'عدد الفنادق / الفروع' : 'Number of Properties'}
                      </label>
                      <span className="font-mono font-bold text-amber-400 tabular-nums">
                        {properties}
                      </span>
                    </div>
                    <input
                      id="roi-props"
                      type="range"
                      min={1}
                      max={30}
                      step={1}
                      value={properties}
                      onChange={(e) => setProperties(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                      <label htmlFor="roi-adr">
                        {lang === 'ar' ? 'متوسط سعر الغرفة ($ ADR)' : 'Avg Daily Rate ($ USD)'}
                      </label>
                      <span className="font-mono font-bold text-amber-400 tabular-nums">
                        ${adr}
                      </span>
                    </div>
                    <input
                      id="roi-adr"
                      type="range"
                      min={40}
                      max={600}
                      step={5}
                      value={adr}
                      onChange={(e) => setAdr(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                      <label htmlFor="roi-occ">
                        {lang === 'ar' ? 'نسبة الإشغال السنوي (%)' : 'Avg Occupancy (%)'}
                      </label>
                      <span className="font-mono font-bold text-amber-400 tabular-nums">
                        {occupancy}%
                      </span>
                    </div>
                    <input
                      id="roi-occ"
                      type="range"
                      min={35}
                      max={95}
                      step={1}
                      value={occupancy}
                      onChange={(e) => setOccupancy(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* ROI Output Card */}
              <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
                <div className="border-b border-slate-800 pb-5">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {lang === 'ar'
                      ? 'إجمالي العائد والتوفير السنوي المقدر'
                      : 'Estimated Total Annual Net Benefit'}
                  </p>
                  <div
                    className="text-3xl sm:text-4xl font-mono font-bold text-amber-400 tabular-nums"
                    data-testid="roi-total-benefit"
                  >
                    ${roiResult.totalAnnualBenefitUsd.toLocaleString()}
                    <span className="text-sm font-sans font-normal text-slate-400 ml-2">
                      / {lang === 'ar' ? 'سنوياً' : 'year'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-xs text-slate-400 mb-1">
                      {lang === 'ar' ? 'توفير عمولات الحجز المباشر' : 'Direct Booking Commission Saved'}
                    </p>
                    <p className="text-lg font-mono font-bold text-white tabular-nums">
                      +${roiResult.directBookingSavingsUsd.toLocaleString()}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-xs text-slate-400 mb-1">
                      {lang === 'ar' ? 'عائد التسعير الذكي AI' : 'AI Dynamic Pricing Uplift'}
                    </p>
                    <p className="text-lg font-mono font-bold text-emerald-400 tabular-nums">
                      +${roiResult.aiRevParUpliftUsd.toLocaleString()}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-xs text-slate-400 mb-1">
                      {lang === 'ar' ? 'توفير الطاقة (Aether EMS)' : 'Smart EMS Energy Savings'}
                    </p>
                    <p className="text-lg font-mono font-bold text-blue-400 tabular-nums">
                      +${roiResult.emsEnergySavingsUsd.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <span className="text-xs text-slate-400 font-mono tabular-nums">
                    {lang === 'ar'
                      ? `إجمالي الغرف: ${rooms * properties} غرفة`
                      : `Portfolio Size: ${rooms * properties} Total Rooms`}
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate('/contact')}
                    className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {lang === 'ar'
                      ? 'اطلب دراسة جدوى مفصلة لفندقك'
                      : 'Request Custom Property ROI Audit'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. FREQUENTLY ASKED QUESTIONS (FAQ Accordion) */}
      {showFaq && (
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="w-10 h-1 bg-[#184E8D] mx-auto mb-3 rounded-full" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#184E8D] mb-2">
                {lang === 'ar' ? 'الأسئلة الشائعة' : 'FREQUENTLY ASKED QUESTIONS'}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {lang === 'ar'
                  ? 'كل ما تحتاج معرفته حول منصتنا وخدماتنا السحابية'
                  : 'Everything you need to know about our platform and services.'}
              </h2>
            </div>

            <div className="space-y-3">
              {FAQ_DATA.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-xl border border-slate-300 bg-white overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 bg-slate-50/70 hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <span className="text-sm font-bold text-slate-900">
                        {faq.question[lang]}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#184E8D] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 py-4 text-sm text-slate-700 leading-relaxed border-t border-slate-200 bg-white">
                        {faq.answer[lang]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
