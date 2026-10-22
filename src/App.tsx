import React, { useEffect, useState } from 'react';
import { Language } from './data/hospitalityData';
import { resolveRoute } from './utils/catalogLogic';
import { Header } from './components/Header';
import { EgyptGatewayBanner } from './components/EgyptGatewayBanner';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage, ClientPortalPage } from './pages/AboutAndPortalPages';
import { SolutionsGridSection } from './components/SolutionsGridSection';
import { ProductsShowcaseSection } from './components/ProductsShowcaseSection';
import { WhyUsAndFaqSection } from './components/WhyUsAndFaqSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [pathname, setPathname] = useState<string>(() => window.location.pathname || '/');
  const [lang, setLang] = useState<Language>('en');

  const currentRoute = resolveRoute(pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title = currentRoute.title[lang];
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [currentRoute, lang]);

  const handleNavigate = (targetPath: string) => {
    const resolved = resolveRoute(targetPath);
    if (window.location.pathname !== resolved.canonicalPath) {
      window.history.pushState({}, '', resolved.canonicalPath);
    }
    setPathname(resolved.canonicalPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-slate-50 text-slate-900"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Top Navigation & Dedicated Page URL Bar */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
      />

      {/* Main Route View */}
      <main className="flex-1">
        {currentRoute.pageType === 'home' && (
          <HomePage lang={lang} onNavigate={handleNavigate} />
        )}

        {currentRoute.pageType === 'solutions' && (
          <div>
            {/* Solutions Overview Royal Blue Banner (Matching screencapture-aihospitalitycloud-com-solutions_01a7effa.png) */}
            <section className="bg-gradient-to-r from-[#1D4B7D] via-[#275A91] to-[#3469A3] text-white py-16 border-b border-blue-900">
              <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
                  {lang === 'ar' ? 'الحلول (Solutions)' : 'Solutions'}
                </h1>
                <p className="text-base sm:text-lg text-blue-100 max-w-2xl">
                  {lang === 'ar'
                    ? 'تمكين كل قطاع في منظومة الضيافة والسياحة بحلول ذكية قابلة للتوسع.'
                    : 'Empowering every segment of the hospitality ecosystem with intelligent, scalable solutions.'}
                </p>
              </div>
            </section>
            <SolutionsGridSection lang={lang} onNavigate={handleNavigate} />
            <ProductsShowcaseSection lang={lang} onNavigate={handleNavigate} />
          </div>
        )}

        {currentRoute.pageType === 'solution-detail' && currentRoute.solution && (
          <SolutionDetailPage
            solution={currentRoute.solution}
            lang={lang}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute.pageType === 'products-services' && (
          <div>
            {/* Products & Services Royal Blue Banner (Matching screencapture-aihospitalitycloud-com-services_dad6dae7.png) */}
            <section className="bg-gradient-to-r from-[#1D4B7D] via-[#275A91] to-[#3469A3] text-white py-16 border-b border-blue-900">
              <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
                  {lang === 'ar' ? 'المنتجات والخدمات' : 'Products & Services'}
                </h1>
                <p className="text-base sm:text-lg text-blue-100 max-w-2xl">
                  {lang === 'ar'
                    ? 'ارتقِ بأعمال الضيافة الخاصة بك إلى آفاق جديدة عبر منظومة Aether السحابية المتكاملة.'
                    : 'Take your hospitality business to new heights with our 4 core services and 9 Aether cloud products.'}
                </p>
              </div>
            </section>
            <ProductsShowcaseSection lang={lang} onNavigate={handleNavigate} />
            <WhyUsAndFaqSection
              lang={lang}
              onNavigate={handleNavigate}
              showInspiration={false}
              showFaq={true}
              showRoiCalculator={true}
            />
          </div>
        )}

        {currentRoute.pageType === 'product-detail' && currentRoute.product && (
          <ProductDetailPage
            product={currentRoute.product}
            lang={lang}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute.pageType === 'about' && (
          <AboutPage lang={lang} onNavigate={handleNavigate} />
        )}

        {currentRoute.pageType === 'contact' && (
          <div>
            {/* Contact Us Royal Blue Banner (Matching screencapture-aihospitalitycloud-com-contact_42dd2b83.png) */}
            <section className="bg-gradient-to-r from-[#1D4B7D] via-[#275A91] to-[#3469A3] text-white py-16 border-b border-blue-900">
              <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
                  {lang === 'ar' ? 'تواصل معنا (Get In Touch)' : 'Get In Touch'}
                </h1>
                <p className="text-base sm:text-lg text-blue-100 max-w-2xl">
                  {lang === 'ar'
                    ? 'هل أنت مستعد لتطوير أعمال الضيافة الخاصة بك؟ دعنا نتحدث.'
                    : "Ready to transform your hospitality business? Let's talk."}
                </p>
              </div>
            </section>
            <ContactSection lang={lang} />
          </div>
        )}

        {currentRoute.pageType === 'become-client' && (
          <ClientPortalPage
            lang={lang}
            onNavigate={handleNavigate}
            mode="become-client"
          />
        )}

        {currentRoute.pageType === 'login' && (
          <ClientPortalPage lang={lang} onNavigate={handleNavigate} mode="login" />
        )}
      </main>

      {/* Signature Egypt Gateway Pre-Footer Carousel (Present across all pages as in the 9 screenshots) */}
      <EgyptGatewayBanner lang={lang} onNavigate={handleNavigate} />

      {/* Dark Navy Footer */}
      <Footer lang={lang} onNavigate={handleNavigate} />
    </div>
  );
}
