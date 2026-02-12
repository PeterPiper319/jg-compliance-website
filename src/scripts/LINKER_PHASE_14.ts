// src/scripts/LINKER_PHASE_14.ts
import { ABOUT_CONTENT } from '../config/content';

export function validatePhase14(): boolean {
  console.log("Initiating Phase 14 Narrative Check...");
  
  let isValid = true;
  const errors: string[] = [];

  // 1. Strategic Keyword Check (The "Why")
  if (!ABOUT_CONTENT.mission.title.includes("Strategic Asset")) {
    isValid = false;
    errors.push("CRITICAL: Mission title missing 'Strategic Asset' positioning.");
  }

  // 2. Scope Check (The "Who")
  if (ABOUT_CONTENT.expertise.entities.length < 4) {
    isValid = false;
    errors.push("CRITICAL: Expertise list incomplete. Must cover CIPC, Labour, POPIA, BEE.");
  }

  // 3. Methodology Check (The "How")
  if (ABOUT_CONTENT.methodology.steps.length !== 3) {
    isValid = false;
    errors.push("CRITICAL: Methodology steps mismatch. Expected 3 (Audit -> Gap -> Remediation).");
  }

  if (isValid) {
    console.log("✅ Phase 14 Institutional Identity: VERIFIED");
    console.log("   - Narrative Architecture: LOCKED");
    console.log("   - Compliance Equation: ACTIVE");
  } else {
    console.error("❌ Phase 14 Validation FAILED:");
    errors.forEach(err => console.error(`   - ${err}`));
  }

  return isValid;
}

// Manual execution
if (import.meta.url === `file://${process.argv[1]}`) {
  validatePhase14();
}