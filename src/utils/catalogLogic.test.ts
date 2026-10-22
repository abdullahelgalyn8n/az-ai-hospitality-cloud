import test from 'node:test';
import assert from 'node:assert/strict';
import {
  resolveRoute,
  filterProducts,
  calculateHospitalityRoi,
  validateContactForm,
} from './catalogLogic';
import { PRODUCTS_DATA } from '../data/hospitalityData';

test('resolveRoute maps all primary and sub-solution URLs accurately', () => {
  const home = resolveRoute('/');
  assert.equal(home.pageType, 'home');
  assert.equal(home.canonicalPath, '/');

  const hotels = resolveRoute('/solutions/hotels-resorts');
  assert.equal(hotels.pageType, 'solution-detail');
  assert.equal(hotels.solution?.slug, 'hotels-resorts');
  assert.equal(hotels.breadcrumbs.length, 3);

  const chains = resolveRoute('/solutions/hotel-chains/');
  assert.equal(chains.pageType, 'solution-detail');
  assert.equal(chains.solution?.slug, 'hotel-chains');

  const agencies = resolveRoute('/solutions/travel-agencies');
  assert.equal(agencies.pageType, 'solution-detail');
  assert.equal(agencies.solution?.slug, 'travel-agencies');

  const operators = resolveRoute('/solutions/tour-operators');
  assert.equal(operators.pageType, 'solution-detail');
  assert.equal(operators.solution?.slug, 'tour-operators');

  const servicesAlias = resolveRoute('/services');
  assert.equal(servicesAlias.pageType, 'products-services');
  assert.equal(servicesAlias.canonicalPath, '/products-services');

  const pmsProduct = resolveRoute('/products/aether-pms');
  assert.equal(pmsProduct.pageType, 'product-detail');
  assert.equal(pmsProduct.product?.code, 'AETHER-PMS');
});

test('filterProducts filters by category, segment, and bilingual query', () => {
  const all = filterProducts(PRODUCTS_DATA, { category: 'all' });
  assert.equal(all.length, 9);

  const coreOps = filterProducts(PRODUCTS_DATA, { category: 'core-operations' });
  assert.equal(coreOps.length, 2);

  const tourOperatorProducts = filterProducts(PRODUCTS_DATA, {
    segment: 'tour-operators',
  });
  assert.ok(tourOperatorProducts.length >= 3);

  const arabicSearch = filterProducts(PRODUCTS_DATA, {
    searchQuery: 'USALI',
  });
  assert.equal(arabicSearch.length, 1);
  assert.equal(arabicSearch[0].slug, 'aether-finance');
});

test('calculateHospitalityRoi produces deterministic positive savings', () => {
  const roi = calculateHospitalityRoi({
    rooms: 150,
    properties: 2,
    avgDailyRateUsd: 140,
    occupancyPct: 75,
  });

  assert.ok(roi.annualGrossRoomRevenueUsd > 10000000);
  assert.equal(
    roi.totalAnnualBenefitUsd,
    roi.directBookingSavingsUsd + roi.aiRevParUpliftUsd + roi.emsEnergySavingsUsd
  );
});

test('validateContactForm rejects empty or invalid fields and accepts valid input', () => {
  const invalid = validateContactForm(
    {
      fullName: '',
      email: 'not-an-email',
      companyName: '',
      message: 'short',
    },
    'en'
  );
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.companyName);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm(
    {
      fullName: 'Ahmed Hassan',
      email: 'ahmed@nileresorts.com',
      companyName: 'Nile Palace Resort & Spa',
      message: 'We would like a demo of Aether PMS and Channel Manager for our 240-room property.',
    },
    'en'
  );
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});
