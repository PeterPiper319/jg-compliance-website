# PHASE 12 MASTER LOG: Analytics Architecture
Status: COMPLETED

## OBJECTIVE
Implement a centralized, "Source of Truth" driven Google Analytics 4 (GA4) configuration.
Ensure the system handles the "Pending ID" state gracefully without causing build errors.

## MICRO-LAYER SEQUENCE
| ID | File | Function | Status |
| :--- | :--- | :--- | :--- |
| 12-01 | src/config/brand.ts | **Data:** Centralized `ANALYTICS_CONFIG` export. | LOCKED |
| 12-02 | src/components/GoogleAnalytics.astro | **Logic:** Component updated to consume `brand.ts` and warn on placeholder. | LOCKED |

## ARCHITECTURAL OUTCOME
- **Single Source of Truth:** The GA4 ID is now managed in `brand.ts`, alongside colors and pricing.
- **Safety Valve:** The component checks for the placeholder string `G-MEASUREMENT_ID`.
- **Developer Experience:** A console warning alerts the developer if the ID is missing, preventing "silent failures" in production.

## HOW TO ACTIVATE TRACKING (FUTURE)
1. Open `src/config/brand.ts`.
2. Locate `export const ANALYTICS_CONFIG`.
3. Replace `'G-MEASUREMENT_ID'` with your real tag (e.g., `'G-K29SL38...'`).
4. Re-deploy. The console warning will vanish, and data will flow.

## VALIDATION GATES
- [x] 12-01 Locked
- [x] 12-02 Locked
- [x] Console Warning Verified (Proof: `(index):12 GA4 STATUS: Pending...`)