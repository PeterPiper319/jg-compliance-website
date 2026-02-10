# PHASE 04-B MASTER LOG: Routing Integrity Repair
Status: CRITICAL_FIX

## OBJECTIVE
Eliminate 404 errors by creating Service Index Hubs and updating Component Links to match the physical file structure.

## MICRO-LAYER SEQUENCE
| ID | File | Function | Status |
| :--- | :--- | :--- | :--- |
| 04B-01 | src/pages/services/cipc/annual-returns.astro | **NEW:** The missing "Annual Returns" page (Revenue Driver) to resolve the TrustBanner 404. | LOCKED |
| 04B-02 | src/pages/services/index.astro | **NEW:** A central "Services Hub" to resolve the `/services` 404. | LOCKED |
| 04B-03 | src/components/HeroSection.astro | **EDIT:** Update "Start Registration" CTA to point to `/services/cipc/new-company`. | LOCKED |
| 04B-04 | src/components/TrustBanner.astro | **EDIT:** Update "Urgent Deadline" link to `/services/cipc/annual-returns`. | LOCKED |
| 04B-05 | src/components/ComplianceMatrix.astro | **EDIT:** Update Matrix cards to point to specific service entry points. | LOCKED |

## VALIDATION GATES
- [x] 04B-01 Locked
- [x] 04B-02 Locked
- [x] 04B-03 Locked
- [x] 04B-04 Locked
- [x] 04B-05 Locked (Repair Complete)
