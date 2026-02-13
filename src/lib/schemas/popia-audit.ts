import { z } from "zod";

/**
 * PHASE 15: REGULATORY LOGIC (POPIA)
 * Source: Strategy PDF [Page 3, Lines 41-49]
 * Implements the 8 Conditions for Lawful Processing.
 */

export const POPIA_QUESTIONS = [
  { id: "accountability", label: "Have you appointed an Information Officer and registered them with the Regulator?", condition: 1 },
  { id: "processingLimitation", label: "Do you only process personal information with the consent of the data subject?", condition: 2 },
  { id: "purposeSpecification", label: "Is personal data collected for a specific, explicitly defined and lawful purpose?", condition: 3 },
  { id: "furtherProcessing", label: "Is any secondary use of data compatible with the original purpose of collection?", condition: 4 },
  { id: "infoQuality", label: "Do you take steps to ensure data is complete, accurate, and not misleading?", condition: 5 },
  { id: "openness", label: "Do you maintain documentation of all processing operations?", condition: 6 },
  { id: "securitySafeguards", label: "Are appropriate technical measures (firewalls, encryption) in place?", condition: 7 },
  { id: "subjectParticipation", label: "Do you have a process for data subjects to request access to their information?", condition: 8 },
] as const;

// Schema validates that every question is answered (boolean)
export const popiaSchema = z.object({
  accountability: z.boolean({ required_error: "Required" }),
  processingLimitation: z.boolean({ required_error: "Required" }),
  purposeSpecification: z.boolean({ required_error: "Required" }),
  furtherProcessing: z.boolean({ required_error: "Required" }),
  infoQuality: z.boolean({ required_error: "Required" }),
  openness: z.boolean({ required_error: "Required" }),
  securitySafeguards: z.boolean({ required_error: "Required" }),
  subjectParticipation: z.boolean({ required_error: "Required" }),
});

export type POPIAInput = z.infer<typeof popiaSchema>;

// Logic: Calculate Compliance Score (Percentage)
export function calculatePOPIAScore(data: POPIAInput): number {
  const totalQuestions = 8;
  const compliant = Object.values(data).filter(v => v === true).length;
  return Math.round((compliant / totalQuestions) * 100);
}