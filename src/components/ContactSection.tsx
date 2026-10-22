import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { CONTACT_INFO, Language, SOLUTIONS_DATA } from '../data/hospitalityData';
import { validateContactForm } from '../utils/catalogLogic';

interface ContactSectionProps {
  lang: Language;
  initialSegment?: string;
  initialProduct?: string;
}

export interface SubmittedInquiry {
  id: string;
  fullName: string;
  email: string;
  companyName: string;
  segment: string;
  message: string;
  submittedAt: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  initialSegment = 'hotels-resorts',
  initialProduct = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [segment, setSegment] = useState(initialSegment);
  const [message, setMessage] = useState(
    initialProduct
      ? `Interested in deploying ${initialProduct} for our hospitality operations.`
      : ''
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedInquiries, setSubmittedInquiries] = useState<SubmittedInquiry[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(
      { fullName, email, companyName, message, phone, segment },
      lang
    );

    if (!validation.valid) {
      setErrors(validation.errors as Record<string, string>);
      return;
    }

    setErrors({});
    const newInquiry: SubmittedInquiry = {
      id: `AIHC-${1040 + submittedInquiries.length + 1}`,
      fullName: fullName.trim(),
      email: email.trim(),
      companyName: companyName.trim(),
      segment,
      message: message.trim(),
      submittedAt: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setSubmittedInquiries((prev) => [newInquiry, ...prev]);
    setFullName('');
    setEmail('');
    setCompanyName('');
    setPhone('');
    setMessage('');
  };

  return (
    <section
      id="contact-section"
      className="py-20 bg-slate-100 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with high contrast */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-10 h-1 bg-[#184E8D] mx-auto mb-3 rounded-full" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#184E8D] mb-2">
            {lang === 'ar' ? 'تواصل معنا الآن' : 'Get In Touch'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            {lang === 'ar'
              ? 'هل أنت مستعد لتطوير أعمال الضيافة الخاصة بك؟ دعنا نتحدث.'
              : "Ready to transform your hospitality business? Let's talk."}
          </h2>
          <p className="text-sm text-slate-700">
            {lang === 'ar'
              ? 'فريقنا في القاهرة جاهز لتقديم عرض عملي مخصص لمنظومة Aether السحابية.'
              : 'Request a tailored live demonstration or architectural consultation with our Cairo enterprise team.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Card - Fixed White Mode Contrast with strong borders and clear labels */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-300 shadow-sm p-6 sm:p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-full-name"
                    className="block text-xs font-bold text-slate-900 mb-1.5"
                  >
                    {lang === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                  </label>
                  <input
                    id="contact-full-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={lang === 'ar' ? 'أحمد حسن' : 'e.g. Ahmed Hassan'}
                    className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#184E8D] focus:ring-2 focus:ring-[#184E8D]/20 outline-none transition-all placeholder:text-slate-400"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs font-medium text-red-600" role="alert">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold text-slate-900 mb-1.5"
                  >
                    {lang === 'ar' ? 'البريد الإلكتروني الرسمي *' : 'Email Address *'}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@hotelgroup.com"
                    className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#184E8D] focus:ring-2 focus:ring-[#184E8D]/20 outline-none transition-all placeholder:text-slate-400"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs font-medium text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-xs font-bold text-slate-900 mb-1.5"
                  >
                    {lang === 'ar' ? 'اسم الفندق أو الشركة *' : 'Company Name *'}
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder={
                      lang === 'ar'
                        ? 'منتجع النيل السياحي'
                        : 'e.g. Nile Horizon Resort & Spa'
                    }
                    className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#184E8D] focus:ring-2 focus:ring-[#184E8D]/20 outline-none transition-all placeholder:text-slate-400"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-xs font-medium text-red-600" role="alert">
                      {errors.companyName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-segment"
                    className="block text-xs font-bold text-slate-900 mb-1.5"
                  >
                    {lang === 'ar' ? 'قطاع الأعمال' : 'Hospitality Segment'}
                  </label>
                  <select
                    id="contact-segment"
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#184E8D] focus:ring-2 focus:ring-[#184E8D]/20 outline-none transition-all"
                  >
                    {SOLUTIONS_DATA.map((sol) => (
                      <option key={sol.slug} value={sol.slug}>
                        {sol.title[lang]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold text-slate-900 mb-1.5"
                >
                  {lang === 'ar' ? 'رسالتك أو تفاصيل طلبك *' : 'Your Message *'}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === 'ar'
                      ? 'اذكر عدد الغرف أو الفروع والأنظمة المطلوبة (PMS, POS, Channel Manager...)'
                      : 'Tell us about your property count, room inventory, and which Aether modules you would like to see in action...'
                  }
                  className="w-full px-3.5 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#184E8D] focus:ring-2 focus:ring-[#184E8D]/20 outline-none transition-all placeholder:text-slate-400"
                />
                {errors.message && (
                  <p className="mt-1 text-xs font-medium text-red-600" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#184E8D] hover:bg-[#123d70] text-white font-semibold text-sm transition-colors shadow-sm cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'إرسال الرسالة' : 'Send Message'}</span>
                </button>
                <span className="text-xs text-slate-600">
                  {lang === 'ar'
                    ? 'متوسط وقت الرد: أقل من ساعتين خلال أيام العمل'
                    : 'Direct response from Cairo solutions engineering within 2 hours'}
                </span>
              </div>
            </form>

            {/* Submitted Inquiries Confirmation Log */}
            {submittedInquiries.length > 0 && (
              <div
                className="mt-6 pt-6 border-t border-slate-200 space-y-3"
                aria-live="polite"
              >
                {submittedInquiries.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-slate-900"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>
                          {lang === 'ar'
                            ? `تم استلام طلبك بنجاح (${item.id})`
                            : `Inquiry Received (${item.id})`}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-emerald-700 tabular-nums">
                        {item.submittedAt}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700">
                      {lang === 'ar'
                        ? `شكراً ${item.fullName} (${item.companyName}). سيتواصل معك فريقنا عبر ${item.email}.`
                        : `Thank you, ${item.fullName} (${item.companyName}). Our team has logged your request and will reach out to ${item.email}.`}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: High-Contrast Direct Contact Details */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-2xl border border-slate-300 p-6 space-y-5 shadow-sm">
              <h3 className="text-base font-bold text-slate-900">
                {lang === 'ar'
                  ? 'قنوات التواصل المباشر — المقر الرئيسي'
                  : 'Direct Enterprise Channels — Cairo HQ'}
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-[#184E8D] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-600 mb-0.5">
                    {lang === 'ar' ? 'البريد الإلكتروني الرسمي' : 'Executive & Sales Email'}
                  </p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-[#184E8D] transition-colors break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-[#184E8D] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-600 mb-0.5">
                    {lang === 'ar' ? 'الهاتف والواتساب المباشر' : 'Direct Phone & WhatsApp'}
                  </p>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                    dir="ltr"
                    className="text-sm font-bold text-slate-900 hover:text-[#184E8D] transition-colors tabular-nums"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-[#184E8D] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-600 mb-0.5">
                    {lang === 'ar' ? 'المقر الإقليمي' : 'Regional Headquarters'}
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    {CONTACT_INFO.location[lang]}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-2 border-t border-slate-200">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-600 mb-0.5">
                    {lang === 'ar' ? 'ساعات العمل والدعم' : 'Support & Onboarding SLA'}
                  </p>
                  <p className="text-xs font-medium text-slate-800">
                    {CONTACT_INFO.workingHours[lang]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
