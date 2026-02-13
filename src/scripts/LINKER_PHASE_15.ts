// src/scripts/LINKER_PHASE_15.ts
import { beeSchema, calculateBEELevel } from '../lib/schemas/bee-calculator';
import { popiaSchema } from '../lib/schemas/popia-audit';

export function validatePhase15(): boolean {
  console.log("Initiating Phase 15 Logic Check...");
  
  let isValid = true;
  const errors: string[] = [];

  // 1. Test B-BBEE Level Logic (The "Level 1" Test)
  const testLevel1 = calculateBEELevel(100);
  if (testLevel1 !== "Level 1") {
    isValid = false;
    errors.push(`CRITICAL: B-BBEE Level 1 Logic Failed. Expected 'Level 1', got '${testLevel1}'`);
  }

  // 2. Test B-BBEE Non-Compliant Logic
  const testFail = calculateBEELevel(30);
  if (testFail !== "Non-Compliant") {
    isValid = false;
    errors.push(`CRITICAL: B-BBEE Compliance Floor Logic Failed. Expected 'Non-Compliant', got '${testFail}'`);
  }

  // 3. Schema Integrity
  if (!beeSchema || !popiaSchema) {
    isValid = false;
    errors.push("CRITICAL: Zod Schemas not exported correctly.");
  }

  if (isValid) {
    console.log("✅ Phase 15 Regulatory Logic: VERIFIED");
    console.log("   - B-BBEE Engine: ACTIVE");
    console.log("   - POPIA Engine: ACTIVE");
  } else {
    console.error("❌ Phase 15 Validation FAILED:");
    errors.forEach(err => console.error(`   - ${err}`));
  }

  return isValid;
}

// Manual execution
if (import.meta.url === `file://${process.argv[1]}`) {
  validatePhase15();
}