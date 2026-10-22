import React, { useState } from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Lock,
  Building2,
} from 'lucide-react';
import {
  Language,
  PRODUCTS_DATA,
  SOLUTIONS_DATA,
} from '../data/hospitalityData';
import { IconRenderer } from '../components/IconRenderer';
import { ContactSection } from '../components/ContactSection';

interface PageProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<PageProps> = ({ lang, onNavigate }) => {
  return (
    <div className="bg-slate-50">
      {/* Royal Blue Banner Header (Matching screencapture-aihospitalitycloud-com-about_edfa1d42.png) */}
      <section className="bg-gradient-to-r from-[#1D4B7D] via-[#275A91] to-[#3469A3] text-white py-16 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5">
              {lang === 'ar' ? 'من نحن (About Us)' : 'About Us'}
            </h1>
            <p className="text-sm sm:text-base text-blue-50 leading-relaxed mb-4">
              {lang === 'ar'
                ? 'شركة AI Hospitality Cloud هي شركة رائدة في تقديم الحلول الرقمية المتكاملة لقطاعات الضيافة والفنادق والمطاعم والإدارة. تتمثل مهمتنا في تمكين المؤسسات من إدارة عملياتها بكفاءة أعلى من خلال نظامنا المبتكر الجديد Aether، الذي يقدم خدمات سحابية متقدمة تشمل: PMS، POS، HCM، Channel Manager، Booking Engine، EMS، والنظام المالي Finance، وجميعها معززة بالذكاء الاصطناعي والتحليلات الذكية.'
                : 'AI Hospitality Cloud — We are a leading company providing fully integrated digital solutions for the hospitality, hotel, restaurant, and management sectors. Our mission is to empower organizations to manage their operations more efficiently through our brand-new system Aether, offering advanced cloud-based services including: PMS, POS, HCM, Channel Manager, Booking Engine, EMS, and Finance, all enhanced with artificial intelligence and smart analytics.'}
            </p>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              {lang === 'ar'
                ? 'رؤيتنا هي إحداث نقلة نوعية في تجربة النزيل وربحية الأعمال من خلال تقديم منصة موحدة تجمع بين الابتكار والأمان والمرونة — مما يجعلنا الشريك الاستراتيجي الأول في رحلة التحول الرقمي لعملائنا محلياً وإقليمياً.'
                : 'Our vision is to create a transformative leap in guest experience and business profitability by delivering a unified platform that combines innovation, security, and flexibility—positioning us as a strategic partner in the digital transformation journey of our clients locally and regionally.'}
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Our Vision Cards (High-Contrast Fixed Light Mode) */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-white rounded-2xl border border-slate-300 p-8 shadow-xs">
            <div className="w-10 h-1 bg-[#184E8D] mb-4 rounded-full" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {lang === 'ar' ? 'رسالتنا (Our Mission)' : 'Our Mission'}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {lang === 'ar'
                ? 'رسالتنا في AI Hospitality Cloud هي إحداث ثورة في قطاعات الضيافة والفنادق والمطاعم والإدارة من خلال تمكين المؤسسات من تحقيق كفاءة تشغيلية غير مسبوقة عبر نظامنا الجديد Aether. نحن نقدم خدمات سحابية متطورة تشمل أنظمة PMS وPOS وHCM ومدير القنوات ومحرك الحجز المباشر وإدارة الطاقة EMS والنظام المالي، مدعومة بالكامل بالذكاء الاصطناعي والتحليلات الذكية.'
                : 'Our mission at AI Hospitality Cloud is to revolutionize the hospitality, hotel, restaurant, and management sectors by empowering organizations to achieve higher efficiency through our brand-new system Aether. We deliver advanced cloud-based services including PMS, POS, HCM, Channel Manager, Booking Engine, EMS, and Finance, all powered by Artificial Intelligence and smart analytics.'}
            </p>
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#184E8D]">
              <span>
                {lang === 'ar'
                  ? 'كفاءة تشغيلية · أتمتة شاملة · ذكاء اصطناعي'
                  : 'Operational Efficiency · Full Automation · AI Native'}
              </span>
            </div>
          </article>

          <article className="bg-white rounded-2xl border border-slate-300 p-8 shadow-xs">
            <div className="w-10 h-1 bg-amber-500 mb-4 rounded-full" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {lang === 'ar' ? 'رؤيتنا (Our Vision)' : 'Our Vision'}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {lang === 'ar'
                ? 'رؤيتنا في AI Hospitality Cloud هي أن نكون المنصة السحابية الرائدة في صناعة الضيافة والفنادق والمطاعم من خلال نظام Aether، عبر دمج أنظمة PMS وPOS وHCM ومدير القنوات ومحرك الحجز وإدارة الطاقة EMS والمالية في بيئة واحدة ذكية، لتقديم تجارب ضيافة مبتكرة ترفع رضا النزلاء وتعظم ربحية الفنادق والشركات السياحية.'
                : 'Our Vision at AI Hospitality Cloud is to be the leading cloud platform in the hospitality, hotel, and restaurant industry through Aether, integrating PMS, POS, HCM, Channel Manager, Booking Engine, EMS, and Finance, powered by Artificial Intelligence and smart analytics. Our vision is to deliver innovative hospitality experiences that boost guest satisfaction and maximize business profitability.'}
            </p>
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-amber-700">
              <span>
                {lang === 'ar'
                  ? 'ريادة إقليمية · تجربة نزيل استثنائية · تعظيم الربحية'
                  : 'Regional Leadership · Guest Satisfaction · Max Profitability'}
              </span>
            </div>
          </article>
        </div>

        {/* Complete Aether System Architecture Matrix */}
        <div className="mt-14 bg-white rounded-2xl border border-slate-300 p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#184E8D] mb-1">
                {lang === 'ar' ? 'منظومة AETHER الموحدة' : 'THE AETHER ECOSYSTEM'}
              </p>
              <h2 className="text-2xl font-bold text-slate-900">
                {lang === 'ar'
                  ? 'الأنظمة التسعة المكونة لمنصة Aether السحابية'
                  : 'All 9 Integrated Modules of the Aether Cloud Platform'}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/products-services')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#184E8D] text-white text-xs font-bold cursor-pointer self-start md:self-auto"
            >
              <span>
                {lang === 'ar' ? 'فتح كتالوج المنتجات' : 'Open Full Product Catalog'}
              </span>
              <ArrowRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRODUCTS_DATA.map((prod) => (
              <a
                key={prod.slug}
                href={prod.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(prod.path);
                }}
                className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-300 hover:border-[#184E8D] transition-all flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-lg bg-[#184E8D] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <IconRenderer name={prod.iconName} className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#184E8D]">
                    {prod.code}
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    {prod.name[lang].split('—')[0].trim()}
                  </div>
                  <div className="text-xs text-slate-700 mt-0.5">
                    {prod.tagline[lang]}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const ClientPortalPage: React.FC<
  PageProps & { mode: 'login' | 'become-client' }
> = ({ lang, onNavigate, mode }) => {
  const [email, setEmail] = useState('');
  const [propertyCode, setPropertyCode] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState<string | null>(null);

  const handlePortalLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !propertyCode.trim()) {
      setLoginStatus(
        lang === 'ar'
          ? 'يرجى إدخال كود المنشأة الفندقية والبريد الإلكتروني.'
          : 'Please enter your Aether Property Code and work email.'
      );
      return;
    }
    setLoginStatus(
      lang === 'ar'
        ? `تم التحقق من نطاق المنشأة (${propertyCode.toUpperCase()}). جاري توجيهك إلى خادم الفندق المخصص...`
        : `Verified tenant workspace (${propertyCode.toUpperCase()}). Provisioning SSO session for ${email}...`
    );
  };

  if (mode === 'become-client') {
    return (
      <div className="bg-slate-50">
        <section className="bg-gradient-to-r from-[#183B66] to-[#2B5F98] text-white py-14">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              {lang === 'ar'
                ? 'انضم كعميل — ابدأ التحول الرقمي مع Aether'
                : 'Become a Client — Deploy Aether in Your Property'}
            </h1>
            <p className="text-sm sm:text-base text-blue-100 max-w-2xl">
              {lang === 'ar'
                ? 'اختر باقة الأنظمة المناسبة لفندقك أو شركتك السياحية وسيتولى فريقنا الهندسي في القاهرة إعداد بيئتك السحابية.'
                : 'Select your hospitality segment below and request your dedicated Aether Cloud sandbox and onboarding schedule.'}
            </p>
          </div>
        </section>

        <ContactSection lang={lang} />
      </div>
    );
  }

  return (
    <div className="py-16 bg-slate-100 min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-300 p-8 shadow-sm">
        <div className="flex items-center gap-2 text-[#184E8D] mb-2">
          <Lock className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Aether Cloud SSO
          </span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          {lang === 'ar'
            ? 'تسجيل دخول العملاء — بوابة Aether'
            : 'Aether Enterprise Client Login'}
        </h1>
        <p className="text-xs text-slate-700 mb-6">
          {lang === 'ar'
            ? 'أدخل كود الفندق أو المجموعة للوصول إلى لوحة تحكم PMS وPOS والتحليلات.'
            : 'Sign in with your property tenant code to access Aether PMS, POS, Channel Manager, and BI dashboards.'}
        </p>

        <form onSubmit={handlePortalLogin} className="space-y-4" noValidate>
          <div>
            <label
              htmlFor="portal-prop-code"
              className="block text-xs font-bold text-slate-900 mb-1"
            >
              {lang === 'ar' ? 'كود المنشأة / الفندق *' : 'Aether Property / Chain Code *'}
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="portal-prop-code"
                type="text"
                value={propertyCode}
                onChange={(e) => setPropertyCode(e.target.value)}
                placeholder="e.g. CAIRO-NILE-01"
                className="w-full pl-9 pr-3.5 py-2.5 text-sm font-mono text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#184E8D] outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="portal-email"
              className="block text-xs font-bold text-slate-900 mb-1"
            >
              {lang === 'ar' ? 'البريد الإلكتروني الوظيفي *' : 'Work Email *'}
            </label>
            <input
              id="portal-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="gm@hotel.com"
              className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#184E8D] outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="portal-password"
              className="block text-xs font-bold text-slate-900 mb-1"
            >
              {lang === 'ar' ? 'كلمة المرور' : 'Password'}
            </label>
            <input
              id="portal-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#184E8D] outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#184E8D] hover:bg-[#123d70] text-white font-bold text-sm transition-colors cursor-pointer"
          >
            {lang === 'ar' ? 'دخول إلى منصة Aether' : 'Sign In to Aether Cloud'}
          </button>
        </form>

        {loginStatus && (
          <div
            role="status"
            className="mt-4 p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-medium text-slate-900"
          >
            {loginStatus}
          </div>
        )}

        <div className="mt-6 pt-5 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-700 mb-2">
            {lang === 'ar'
              ? 'ليس لديك حساب منشأة حتى الآن؟'
              : "Don't have an active Aether property account yet?"}
          </p>
          <button
            type="button"
            onClick={() => onNavigate('/become-client')}
            className="text-xs font-bold text-[#184E8D] hover:underline cursor-pointer"
          >
            {lang === 'ar'
              ? 'اطلب حساب تجريبي لمنشأتك الفندقية ←'
              : 'Request a New Client Onboarding Account →'}
          </button>
        </div>
      </div>
    </div>
  );
};
