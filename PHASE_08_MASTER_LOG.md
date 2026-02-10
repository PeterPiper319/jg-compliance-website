# PHASE 08 MASTER LOG: Mobile Remediation & Social Integration
Status: COMPLETED

## OBJECTIVE
Refactor the frontend CSS architecture to fix mobile layout collisions and integrate the Facebook social anchor.

## MICRO-LAYER SEQUENCE
| ID | File | Function | Status |
| :--- | :--- | :--- | :--- |
| 08-01 | src/config/brand.ts | **Data:** Add `SOCIAL_LINKS` constant to the Source of Truth. | COMPLETED |
| 08-02 | src/components/GlobalFooter.astro | **UI:** Inject the Facebook Icon and link connected to 08-01. | COMPLETED |
| 08-03 | src/components/TrustBanner.astro | **Fix:** Implement `flex-col` mobile stack to prevent text squashing. | COMPLETED |
| 08-04 | src/components/ComplianceMatrix.astro | **Fix:** Reset negative margin on mobile to prevent Hero collision. | COMPLETED |
| 08-05 | src/components/HeroSection.astro | **Fix:** Downscale Typography (H1) for mobile viewports. | COMPLETED |

## VALIDATION GATES
- [x] 08-01 Locked
- [x] 08-02 Locked
- [x] 08-03 Locked
- [x] 08-04 Locked
- [x] 08-05 Locked (Phase Completion)
MICRO-LAYER 08-01: Source of Truth Update
We begin by establishing the data constant for the Facebook link. This ensures if the link changes later, we change it in one place only.

SYSTEM COMMAND: CREATE MICRO-FILE 08-01

Master Log Entry: 08-01

File: src/config/brand.ts

Purpose: Add SOCIAL_LINKS export.

Instruction to User: Copy the code below to update your brand configuration.

TypeScript
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
  facebook: 'https://www.facebook.com/profile.php?id=61571587948256', // Replace with actual if different
} as const;