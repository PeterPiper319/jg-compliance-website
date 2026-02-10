// src/config/brand.ts

/**
 * PHASE 01 MASTER LOG: 01-01
 * Source of Truth (SoT) for Brand Identity, Pricing, and Regulatory Constants.
 * All derived components (Tailwind config, Pricing Cards) must consume this file.
 */

// Visual Identity: Geometric Monogram, #1E4D8C (Primary), #707070 (Secondary).
export const BRAND_COLORS = {
  primaryBlue: '#1E4D8C',
  secondaryGrey: '#707070',
  accentGrey: '#A9A9A9',
  background: '#F8F9FA',
} as const;

// Pricing Data: JG Professional Fee (Total) derived from Competitive Pricing Structure
export const PRICING_2026 = {
  ptyRegistration: 1250,
  annualReturn: 590,
  annualReturnSmall: 590,
  boFiling: 690,
  coidRegistration: 1850,
  coidaRegistration: 1850, // Alias for consistency
  restoration: 8800,
  beeAffidavit: 390,
  letterGoodStanding: 850,
  uifDomestic: 850,
} as const;

// Regulatory Constants: Critical threshold data aligned with CIPC requirements
export const COMPLIANCE_CONSTANTS = {
  boHardStopDate: 'July 2024',
  restorationProof: '12-month bank statements',
} as const;

// Social Connectivity
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61587491532935', 
} as const;
