import {
  Language,
  ProductCategory,
  ProductItem,
   PRODUCTS_DATA,
  SolutionPageData,
  SOLUTIONS_DATA,
  SolutionSlug,
} from '../data/hospitalityData';

export type PageType =
  | 'home'
  | 'solutions'
  | 'solution-detail'
  | 'products-services'
  | 'product-detail'
  | 'about'
  | 'contact'
  | 'become-client'
  | 'login';

export interface BreadcrumbItem {
  label: { en: string; ar: string };
  path: string;
}

export interface ResolvedRoute {
  pageType: PageType;
  canonicalPath: string;
  fullDisplayUrl: string;
  title: { en: string; ar: string };
  breadcrumbs: BreadcrumbItem[];
  solution?: SolutionPageData;
  product?: ProductItem;
}

const BASE_DOMAIN = 'https://aihospitalitycloud.com';

export function normalizePathname(rawPath: string): string {
  if (!rawPath || rawPath === '/') return '/';
  const cleaned = rawPath.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return cleaned.startsWith('/') ? cleaned : `/${cleaned}`;
}

export function resolveRoute(rawPathname: string): ResolvedRoute {
  const path = normalizePathname(rawPathname);
  const homeCrumb: BreadcrumbItem = {
    label: { en: 'Home', ar: 'الرئيسية' },
    path: '/',
  };

  if (path === '/' || path === '/index' || path === '/home') {
    return {
      pageType: 'home',
      canonicalPath: '/',
      fullDisplayUrl: `${BASE_DOMAIN}/`,
      title: {
        en: 'AI Hospitality Cloud — The Leading AI-Powered Hospitality Solutions Provider',
        ar: 'AI Hospitality Cloud — المزود الرائد لحلول الضيافة المدعومة بالذكاء الاصطناعي',
      },
      breadcrumbs: [homeCrumb],
    };
  }

  if (path === '/solutions') {
    return {
      pageType: 'solutions',
      canonicalPath: '/solutions',
      fullDisplayUrl: `${BASE_DOMAIN}/solutions`,
      title: {
        en: 'Solutions — AI Hospitality Cloud',
        ar: 'الحلول القطاعية — AI Hospitality Cloud',
      },
      breadcrumbs: [
        homeCrumb,
        { label: { en: 'Solutions', ar: 'الحلول' }, path: '/solutions' },
      ],
    };
  }

  if (path.startsWith('/solutions/')) {
    const slug = path.replace('/solutions/', '') as SolutionSlug;
    const matched = SOLUTIONS_DATA.find((s) => s.slug === slug);
    if (matched) {
      return {
        pageType: 'solution-detail',
        canonicalPath: matched.path,
        fullDisplayUrl: `${BASE_DOMAIN}${matched.path}`,
        title: {
          en: `${matched.title.en} — Solutions | AI Hospitality Cloud`,
          ar: `${matched.title.ar} — الحلول | AI Hospitality Cloud`,
        },
        breadcrumbs: [
          homeCrumb,
          { label: { en: 'Solutions', ar: 'الحلول' }, path: '/solutions' },
          { label: matched.title, path: matched.path },
        ],
        solution: matched,
      };
    }
  }

  if (path === '/products-services' || path === '/services' || path === '/products') {
    return {
      pageType: 'products-services',
      canonicalPath: '/products-services',
      fullDisplayUrl: `${BASE_DOMAIN}/products-services`,
      title: {
        en: 'Products & Services — Aether Enterprise Suite | AI Hospitality Cloud',
        ar: 'المنتجات والخدمات — منظومة Aether السحابية | AI Hospitality Cloud',
      },
      breadcrumbs: [
        homeCrumb,
        {
          label: { en: 'Products & Services', ar: 'المنتجات والخدمات' },
          path: '/products-services',
        },
      ],
    };
  }

  if (path.startsWith('/products/')) {
    const slug = path.replace('/products/', '');
    const matched = PRODUCTS_DATA.find((p) => p.slug === slug);
    if (matched) {
      return {
        pageType: 'product-detail',
        canonicalPath: matched.path,
        fullDisplayUrl: `${BASE_DOMAIN}${matched.path}`,
        title: {
          en: `${matched.name.en} | AI Hospitality Cloud`,
          ar: `${matched.name.ar} | AI Hospitality Cloud`,
        },
        breadcrumbs: [
          homeCrumb,
          {
            label: { en: 'Products & Services', ar: 'المنتجات والخدمات' },
            path: '/products-services',
          },
          { label: matched.name, path: matched.path },
        ],
        product: matched,
      };
    }
  }

  if (path === '/about' || path === '/about-us') {
    return {
      pageType: 'about',
      canonicalPath: '/about',
      fullDisplayUrl: `${BASE_DOMAIN}/about`,
      title: {
        en: 'About Us — Mission, Vision & Aether Architecture | AI Hospitality Cloud',
        ar: 'من نحن — رسالتنا ورؤيتنا ومنظومة Aether | AI Hospitality Cloud',
      },
      breadcrumbs: [
        homeCrumb,
        { label: { en: 'About Us', ar: 'من نحن' }, path: '/about' },
      ],
    };
  }

  if (path === '/contact' || path === '/contact-us') {
    return {
      pageType: 'contact',
      canonicalPath: '/contact',
      fullDisplayUrl: `${BASE_DOMAIN}/contact`,
      title: {
        en: 'Get In Touch — Contact AI Hospitality Cloud Cairo',
        ar: 'تواصل معنا — AI Hospitality Cloud القاهرة',
      },
      breadcrumbs: [
        homeCrumb,
        { label: { en: 'Contact Us', ar: 'تواصل معنا' }, path: '/contact' },
      ],
    };
  }

  if (path === '/become-client') {
    return {
      pageType: 'become-client',
      canonicalPath: '/become-client',
      fullDisplayUrl: `${BASE_DOMAIN}/become-client`,
      title: {
        en: 'Become a Client — Request Aether Deployment | AI Hospitality Cloud',
        ar: 'انضم كعميل — اطلب تشغيل منظومة Aether | AI Hospitality Cloud',
      },
      breadcrumbs: [
        homeCrumb,
        { label: { en: 'Become a Client', ar: 'انضم كعميل' }, path: '/become-client' },
      ],
    };
  }

  if (path === '/login') {
    return {
      pageType: 'login',
      canonicalPath: '/login',
      fullDisplayUrl: `${BASE_DOMAIN}/login`,
      title: {
        en: 'Aether Cloud Portal Login — AI Hospitality Cloud',
        ar: 'تسجيل الدخول لبوابة Aether السحابية — AI Hospitality Cloud',
      },
      breadcrumbs: [
        homeCrumb,
        { label: { en: 'Client Login', ar: 'دخول العملاء' }, path: '/login' },
      ],
    };
  }

  // Fallback to Home
  return {
    pageType: 'home',
    canonicalPath: '/',
    fullDisplayUrl: `${BASE_DOMAIN}/`,
    title: {
      en: 'AI Hospitality Cloud — The Leading AI-Powered Hospitality Solutions Provider',
      ar: 'AI Hospitality Cloud — المزود الرائد لحلول الضيافة المدعومة بالذكاء الاصطناعي',
    },
    breadcrumbs: [homeCrumb],
  };
}

export interface ProductFilterOptions {
  category?: ProductCategory;
  segment?: SolutionSlug | 'all';
  searchQuery?: string;
}

export function filterProducts(
  products: ProductItem[],
  options: ProductFilterOptions
): ProductItem[] {
  const { category = 'all', segment = 'all', searchQuery = '' } = options;
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return products.filter((item) => {
    if (category !== 'all' && item.category !== category) {
      return false;
    }
    if (segment !== 'all' && !item.targetSegments.includes(segment)) {
      return false;
    }
    if (normalizedQuery.length > 0) {
      const searchable = [
        item.code,
        item.name.en,
        item.name.ar,
        item.tagline.en,
        item.tagline.ar,
        item.description.en,
        item.description.ar,
        ...item.keyFeatures.en,
        ...item.keyFeatures.ar,
      ]
        .join(' ')
        .toLowerCase();

      if (!searchable.includes(normalizedQuery)) {
        return false;
      }
    }
    return true;
  });
}

export interface RoiInput {
  rooms: number;
  properties: number;
  avgDailyRateUsd: number;
  occupancyPct: number;
}

export interface RoiResult {
  annualGrossRoomRevenueUsd: number;
  directBookingSavingsUsd: number;
  aiRevParUpliftUsd: number;
  emsEnergySavingsUsd: number;
  totalAnnualBenefitUsd: number;
}

export function calculateHospitalityRoi(input: RoiInput): RoiResult {
  const safeRooms = Math.max(10, Math.min(10000, Math.round(input.rooms || 100)));
  const safeProps = Math.max(1, Math.min(200, Math.round(input.properties || 1)));
  const safeAdr = Math.max(25, Math.min(2000, input.avgDailyRateUsd || 120));
  const safeOcc = Math.max(20, Math.min(98, input.occupancyPct || 72)) / 100;

  const totalRooms = safeRooms * safeProps;
  const occupiedRoomNights = totalRooms * 365 * safeOcc;
  const annualGrossRoomRevenueUsd = Math.round(occupiedRoomNights * safeAdr);

  // Shifting 18% of OTA share to Direct Booking Engine saves ~16% commission on that slice (~2.88% of gross)
  const directBookingSavingsUsd = Math.round(annualGrossRoomRevenueUsd * 0.029);
  // AI Dynamic pricing & channel optimization adds ~8.5% conservative RevPAR lift
  const aiRevParUpliftUsd = Math.round(annualGrossRoomRevenueUsd * 0.085);
  // Smart EMS saves ~$340 per room per year on HVAC & electricity
  const emsEnergySavingsUsd = Math.round(totalRooms * 340);

  const totalAnnualBenefitUsd =
    directBookingSavingsUsd + aiRevParUpliftUsd + emsEnergySavingsUsd;

  return {
    annualGrossRoomRevenueUsd,
    directBookingSavingsUsd,
    aiRevParUpliftUsd,
    emsEnergySavingsUsd,
    totalAnnualBenefitUsd,
  };
}

export interface ContactFormInput {
  fullName: string;
  email: string;
  companyName: string;
  message: string;
  phone?: string;
  segment?: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
}

export function validateContactForm(
  input: ContactFormInput,
  lang: Language = 'en'
): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};

  if (!input.fullName || input.fullName.trim().length < 2) {
    errors.fullName =
      lang === 'ar'
        ? 'يرجى إدخال الاسم الكامل (حرفين على الأقل).'
        : 'Please enter your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email || !emailRegex.test(input.email.trim())) {
    errors.email =
      lang === 'ar'
        ? 'يرجى إدخال بريد إلكتروني صحيح.'
        : 'Please enter a valid work email address.';
  }

  if (!input.companyName || input.companyName.trim().length < 2) {
    errors.companyName =
      lang === 'ar'
        ? 'يرجى إدخال اسم الفندق أو الشركة.'
        : 'Please enter your hotel, resort, or company name.';
  }

  if (!input.message || input.message.trim().length < 10) {
    errors.message =
      lang === 'ar'
        ? 'يرجى كتابة رسالتك أو تفاصيل طلبك (10 أحرف على الأقل).'
        : 'Please enter your message (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
