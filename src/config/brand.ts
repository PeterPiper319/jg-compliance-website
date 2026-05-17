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
// UPDATED: Phase 18 - 2026 Strategic Price Logic
export const PRICING_2026 = {
  ptyRegistration: 1250,
  annualReturn: 1250, // Updated: Includes Section 216 Verification
  annualReturnSmall: 1250, // Updated: Consolidated Pricing
  boFiling: 1850, // Updated: Hard-Stop Security Bundle
  foreignDirectorBO: 2450, // New service: Foreign Director BO Compliance
  // COIDA pricing removed
  restoration: 9000, // Professional Fee Only (Resurrection Pack)
  beeAffidavit: 390,
  letterGoodStanding: 850,
  // Domestic UIF pricing removed
  paiaManual: 1450,
  roeSubmission: 950,
  informationOfficerReg: 850,
} as const;

// Regulatory Constants: Critical threshold data aligned with CIPC requirements
export const COMPLIANCE_CONSTANTS = {
  boHardStopDate: 'July 2024',
  restorationProof: '12-month bank statements',
  roeDeadline: '30 April',
  paiaRequirement: 'Mandatory PAIA Manual',
} as const;

// Social Connectivity
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61587491532935', 
} as const;

// Analytics Configuration
export const ANALYTICS_CONFIG = {
  measurementId: 'G-CY0H2HYLWY', 
} as const;

// Regulatory Identity
export const SITE_IDENTITY = {
  registrationNumber: '2026/118416/07',
} as const;
