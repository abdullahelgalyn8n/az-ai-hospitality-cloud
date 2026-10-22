import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import {
  CONTACT_INFO,
  Language,
  PRODUCTS_DATA,
  SOLUTIONS_DATA,
} from '../data/hospitalityData';

interface FooterProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  return (
    <footer className="bg-[#0B1623] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Summary */}
          <div>
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="flex items-baseline gap-2 text-left mb-4 cursor-pointer group"
            >
              <span className="font-serif italic text-3xl font-bold text-white group-hover:text-amber-400 transition-colors">
                ai
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-slate-300 font-semibold">
                Hospitality Solution
              </span>
            </button>
            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              {lang === 'ar'
                ? 'تحويل قطاع الضيافة والفنادق من خلال الذكاء الاصطناعي والتكنولوجيا السحابية المتكاملة عبر نظام Aether.'
                : 'Transforming hospitality through artificial intelligence and cloud technology via our unified Aether enterprise platform.'}
            </p>
            <p className="text-xs text-slate-400">
              {lang === 'ar'
                ? 'نظام Aether: PMS · POS · HCM · Channel Manager · EMS'
                : 'Aether Suite: PMS · POS · HCM · Channel Manager · EMS'}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/');
                  }}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {lang === 'ar' ? 'الرئيسية (/)' : 'Home (/)'}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/about');
                  }}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {lang === 'ar' ? 'من نحن (/about)' : 'About Us (/about)'}
                </a>
              </li>
              <li>
                <a
                  href="/solutions"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/solutions');
                  }}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {lang === 'ar' ? 'الحلول (/solutions)' : 'Solutions (/solutions)'}
                </a>
              </li>
              <li>
                <a
                  href="/products-services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/products-services');
                  }}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {lang === 'ar'
                    ? 'المنتجات والخدمات (/products-services)'
                    : 'Products & Services (/products-services)'}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact');
                  }}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {lang === 'ar' ? 'تواصل معنا (/contact)' : 'Contact Us (/contact)'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Dedicated Solution & Product Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {lang === 'ar' ? 'روابط الحلول والمنتجات' : 'Solutions & Aether Suite'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SOLUTIONS_DATA.map((sol) => (
                <li key={sol.slug}>
                  <a
                    href={sol.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(sol.path);
                    }}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {sol.title[lang]}
                  </a>
                </li>
              ))}
              {PRODUCTS_DATA.slice(0, 3).map((prod) => (
                <li key={prod.slug}>
                  <a
                    href={prod.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(prod.path);
                    }}
                    className="text-slate-400 hover:text-amber-300 transition-colors text-xs"
                  >
                    {prod.code} — {prod.name[lang].split('—')[0].trim()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {lang === 'ar' ? 'معلومات التواصل' : 'Contact Info'}
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors tabular-nums"
                  dir="ltr"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{CONTACT_INFO.location[lang]}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>جميع الحقوق محفوظة. <a href="https://azagency.online/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">A.Z Agency</a> 2026 ©</p>
          <p>
            {lang === 'ar'
              ? 'منظومة Aether السحابية المتكاملة للضيافة والفنادق — القاهرة، مصر'
              : 'Powered by Aether Enterprise Hospitality Cloud — Cairo, Egypt'}
          </p>
        </div>
      </div>
    </footer>
  );
};
