import { z } from "zod";

/**
 * PHASE 15: REGULATORY LOGIC
 * Source: Strategy PDF [Page 3, Table 35]
 */

export const BEE_WEIGHTS = {
  ownership: 25,
  management: 19,
  skills: 20,
  esd: 42,
  sed: 5
} as const;

// Zod Schema for strict input validation
export const beeSchema = z.object({
  ownership: z.number().min(0).max(BEE_WEIGHTS.ownership, "Max score is 25"),
  management: z.number().min(0).max(BEE_WEIGHTS.management, "Max score is 19"),
  skills: z.number().min(0).max(BEE_WEIGHTS.skills, "Max score is 20"),
  esd: z.number().min(0).max(BEE_WEIGHTS.esd, "Max score is 42"),
  sed: z.number().min(0).max(BEE_WEIGHTS.sed, "Max score is 5"),
});

export type BEEInput = z.infer<typeof beeSchema>;

// Legislative logic for Level conversion
export function calculateBEELevel(score: number): string {
  if (score >= 100) return "Level 1";
  if (score >= 95) return "Level 2";
  if (score >= 90) return "Level 3";
  if (score >= 80) return "Level 4";
  if (score >= 75) return "Level 5";
  if (score >= 70) return "Level 6";
  if (score >= 55) return "Level 7";
  if (score >= 40) return "Level 8";
  return "Non-Compliant";
}