import React, { useState } from 'react';
import {
  ChevronDown,
  Globe,
  Link2,
  Check,
  Menu,
  X,
  ArrowUpRight,
} from 'lucide-react';
import {
  Language,
  PRODUCTS_DATA,
  SOLUTIONS_DATA,
} from '../data/hospitalityData';
import { ResolvedRoute } from '../utils/catalogLogic';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  currentRoute: ResolvedRoute;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  currentRoute,
  onNavigate,
}) => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handleCopyLink = () => {
    const shareUrl = `${window.location.origin}${currentRoute.canonicalPath}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).catch(() => {});
    }
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const navigateAndClose = (path: string) => {
    setSolutionsOpen(false);
    setProductsOpen(false);
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      {/* Main 3-Zone Top Bar */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigateAndClose('/');
          }}
          className="flex items-baseline gap-1.5 whitespace-nowrap shrink-0 group"
          aria-label="AI Hospitality Cloud Home"
        >
          <span className="font-serif italic text-3xl font-bold text-[#DC2626] tracking-tight">
            ai
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-800 group-hover:text-[#184E8D] transition-colors">
            Hospitality Solution
          </span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 text-xs font-bold tracking-wider text-slate-800"
        >
          {/* SOLUTIONS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              onClick={() => navigateAndClose('/solutions')}
              aria-expanded={solutionsOpen}
              className={`inline-flex items-center gap-1 py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentRoute.pageType === 'solutions' ||
                currentRoute.pageType === 'solution-detail'
                  ? 'text-[#184E8D]'
                  : 'text-slate-800 hover:text-[#184E8D]'
              }`}
            >
              <span>{lang === 'ar' ? 'الحلول' : 'SOLUTIONS'}</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {solutionsOpen && (
              <div className="absolute left-0 top-full pt-1 w-72 z-50">
                <div className="bg-white rounded-xl border border-slate-300 shadow-lg p-2 space-y-1">
                  <a
                    href="/solutions"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateAndClose('/solutions');
                    }}
                    className="block px-3 py-2 rounded-lg text-xs font-bold text-[#184E8D] bg-blue-50/70 hover:bg-blue-100/80 transition-colors"
                  >
                    {lang === 'ar'
                      ? 'جميع الحلول القطاعية (/solutions)'
                      : 'All Solutions Overview (/solutions)'}
                  </a>
                  {SOLUTIONS_DATA.map((sol) => (
                    <a
                      key={sol.slug}
                      href={sol.path}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateAndClose(sol.path);
                      }}
                      className="block px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <div className="text-xs font-bold text-slate-900">
                        {sol.title[lang]}
                      </div>
                      <div className="text-[11px] font-mono text-slate-600">
                        {sol.path}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* PRODUCTS & SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              onClick={() => navigateAndClose('/products-services')}
              aria-expanded={productsOpen}
              className={`inline-flex items-center gap-1 py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentRoute.pageType === 'products-services' ||
                currentRoute.pageType === 'product-detail'
                  ? 'text-[#184E8D]'
                  : 'text-slate-800 hover:text-[#184E8D]'
              }`}
            >
              <span>
                {lang === 'ar' ? 'المنتجات والخدمات' : 'PRODUCTS & SERVICES'}
              </span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {productsOpen && (
              <div className="absolute left-0 top-full pt-1 w-80 z-50">
                <div className="bg-white rounded-xl border border-slate-300 shadow-lg p-2.5 space-y-1 max-h-[420px] overflow-y-auto">
                  <a
                    href="/products-services"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateAndClose('/products-services');
                    }}
                    className="block px-3 py-2 rounded-lg text-xs font-bold text-[#184E8D] bg-blue-50/70 hover:bg-blue-100/80 transition-colors"
                  >
                    {lang === 'ar'
                      ? 'كتالوج منتجات Aether الكامل (/products-services)'
                      : 'Full Aether Products & Services (/products-services)'}
                  </a>
                  <div className="px-3 pt-1.5 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {lang === 'ar' ? 'أنظمة Aether التسعة' : 'Aether Enterprise Modules'}
                  </div>
                  {PRODUCTS_DATA.map((prod) => (
                    <a
                      key={prod.slug}
                      href={prod.path}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateAndClose(prod.path);
                      }}
                      className="flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <span className="text-xs font-semibold text-slate-900 truncate">
                        {prod.name[lang].split('—')[0].trim()}
                      </span>
                      <span className="text-[10px] font-mono text-[#184E8D] font-bold shrink-0">
                        {prod.code}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              navigateAndClose('/about');
            }}
            className={`py-2 transition-colors whitespace-nowrap shrink-0 ${
              currentRoute.pageType === 'about'
                ? 'text-[#184E8D]'
                : 'text-slate-800 hover:text-[#184E8D]'
            }`}
          >
            {lang === 'ar' ? 'من نحن' : 'ABOUT US'}
          </a>

          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              navigateAndClose('/contact');
            }}
            className={`py-2 transition-colors whitespace-nowrap shrink-0 ${
              currentRoute.pageType === 'contact'
                ? 'text-[#184E8D]'
                : 'text-slate-800 hover:text-[#184E8D]'
            }`}
          >
            {lang === 'ar' ? 'تواصل معنا' : 'CONTACT US'}
          </a>
        </nav>

        {/* Zone 3: Language & Primary Client Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label={
              lang === 'ar' ? 'Switch language to English' : 'تغيير اللغة إلى العربية'
            }
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-800 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <Globe className="w-3.5 h-3.5 text-[#184E8D]" />
            <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
          </button>

          <button
            type="button"
            onClick={() => navigateAndClose('/become-client')}
            className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs font-bold text-slate-900 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            {lang === 'ar' ? 'انضم كعميل' : 'Become a client'}
          </button>

          <button
            type="button"
            onClick={() => navigateAndClose('/login')}
            className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-lg bg-[#184E8D] hover:bg-[#123d70] text-xs font-bold text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            {lang === 'ar' ? 'تسجيل الدخول' : 'Login'}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden p-2 rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-100 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-300 px-6 py-4 space-y-3">
          <div className="grid grid-cols-1 gap-1.5 text-sm font-bold text-slate-900">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateAndClose('/');
              }}
              className="py-2 px-3 rounded-lg hover:bg-slate-100"
            >
              {lang === 'ar' ? 'الرئيسية (/)' : 'Home (/)'}
            </a>
            <a
              href="/solutions"
              onClick={(e) => {
                e.preventDefault();
                navigateAndClose('/solutions');
              }}
              className="py-2 px-3 rounded-lg hover:bg-slate-100"
            >
              {lang === 'ar' ? 'جميع الحلول (/solutions)' : 'Solutions (/solutions)'}
            </a>
            <div className="pl-4 space-y-1 border-l-2 border-slate-200">
              {SOLUTIONS_DATA.map((sol) => (
                <a
                  key={sol.slug}
                  href={sol.path}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateAndClose(sol.path);
                  }}
                  className="block py-1.5 px-3 text-xs font-semibold text-slate-700 hover:text-[#184E8D]"
                >
                  {sol.title[lang]} ({sol.path})
                </a>
              ))}
            </div>
            <a
              href="/products-services"
              onClick={(e) => {
                e.preventDefault();
                navigateAndClose('/products-services');
              }}
              className="py-2 px-3 rounded-lg hover:bg-slate-100"
            >
              {lang === 'ar'
                ? 'المنتجات والخدمات (/products-services)'
                : 'Products & Services (/products-services)'}
            </a>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                navigateAndClose('/about');
              }}
              className="py-2 px-3 rounded-lg hover:bg-slate-100"
            >
              {lang === 'ar' ? 'من نحن (/about)' : 'About Us (/about)'}
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigateAndClose('/contact');
              }}
              className="py-2 px-3 rounded-lg hover:bg-slate-100"
            >
              {lang === 'ar' ? 'تواصل معنا (/contact)' : 'Contact Us (/contact)'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
