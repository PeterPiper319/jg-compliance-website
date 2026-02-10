// src/scripts/LINKER_PHASE_01.ts
import { BRAND_COLORS, PRICING_2026 } from '../config/brand';

/**
 * PHASE 01 INTEGRITY CHECK
 * Validates that the Source of Truth (brand.ts) is correctly established
 * and matches the Blueprint constants before UI construction begins.
 */
export function validatePhase01(): boolean {
  console.log("Initiating Phase 01 Integrity Check...");
  
  let isValid = true;
  const errors: string[] = [];

  // Validation 1: Visual Identity - Primary Blue
  if (BRAND_COLORS.primaryBlue !== '#1E4D8C') {
    isValid = false;
    errors.push(`CRITICAL: BRAND_COLORS.primaryBlue mismatch. Expected '#1E4D8C', got '${BRAND_COLORS.primaryBlue}'`);
  }

  // Validation 2: Pricing Logic - Restoration Fee
  if (PRICING_2026.restoration !== 8800) {
    isValid = false;
    errors.push(`CRITICAL: PRICING_2026.restoration mismatch. Expected 8800, got ${PRICING_2026.restoration}`);
  }

  if (isValid) {
    console.log("✅ Phase 01 Structural Integrity: VERIFIED");
    console.log("   - Brand Constants: LOCKED");
    console.log("   - Pricing Engine: LOCKED");
  } else {
    console.error("❌ Phase 01 Integrity Check FAILED:");
    errors.forEach(err => console.error(`   - ${err}`));
    throw new Error("Phase 01 Validation Failed. Halting pipeline.");
  }

  return isValid;
}

// Allow for manual execution if needed
if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    validatePhase01();
  } catch (e) {
    process.exit(1);
  }
}
