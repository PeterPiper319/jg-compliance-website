// src/config/content.ts

/**
 * PHASE 14 MASTER LOG: 14-02
 * Centralized Content Store for Institutional Narrative.
 * Derived from "Strategic Technical and Regulatory Evolution" (PDF).
 */

export const ABOUT_CONTENT = {
  mission: {
    title: "Governance as a Strategic Asset",
    statement: "We do not view compliance as a 'check-the-box' burden. Our mission is to embed compliance into the operational DNA of your business, shifting the focus from penalty avoidance to operational excellence.",
    pillars: [
      {
        title: "Risk",
        description: "Mitigating legal and financial exposure in Africa's most regulated market."
      },
      {
        title: "Regulation",
        description: "Navigating the complex frameworks of CIPC and the Department of Labour with precision."
      },
      {
        title: "Reputation",
        description: "Building trust with stakeholders through transparent, accountable governance."
      }
    ]
  },
  expertise: {
    title: "Local Execution, Global Standards",
    description: "South Africa represents the most advanced and stringently regulated market on the African continent. We provide the mastery of local realities required to navigate this landscape.",
    entities: [
      "Companies and Intellectual Property Commission (CIPC)",
      "Department of Employment and Labour",
      "Information Regulator (POPIA)",
      "Broad-Based Black Economic Empowerment (B-BBEE)"
    ]
  },
  methodology: {
    title: "The Compliance Equation",
    description: "We employ a 'Governance-as-a-Service' (GaaS) model, acting as your centralized repository for regulatory management.",
    steps: [
      {
        step: 1,
        title: "Legal Auditing",
        description: "We conduct a deep-dive analysis of your current standing against statutory requirements."
      },
      {
        step: 2,
        title: "Gap Analysis",
        description: "We identify specific vulnerabilities in your compliance architecture, from missing filings to outdated manuals."
      },
      {
        step: 3,
        title: "Strategic Remediation",
        description: "We execute the necessary filings and restructuring to close gaps and restore full good standing."
      }
    ]
  }
} as const;