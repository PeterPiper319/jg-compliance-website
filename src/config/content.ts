// src/config/content.ts

/**
 * PHASE 14 MASTER LOG: 14-02
 * Centralized Content Store for Institutional Narrative.
 * Derived from "Strategic Technical and Regulatory Evolution" (PDF).
 */

export const ABOUT_CONTENT = {
  mission: {
    title: "Business Growth Without the Compliance Headache",
    statement: "We believe keeping your business up to date shouldn’t feel like a burden. Our mission is to handle the administrative heavy lifting and system tracking so you can focus on what you do best: running your operations and winning contracts.",
    pillars: [
      {
        title: "Peace of Mind",
        description: "Protecting your hard work by catching missed annual filings or registration drops before they cause interruptions to your business."
      },
      {
        title: "Simple Tracking",
        description: "Making it easy to keep up with CIPC and Department of Labour requirements without needing a corporate law degree to understand them."
      },
      {
        title: "Tender-Ready Status",
        description: "Building immediate trust with your clients and procurement officers by keeping your business in perfect, active standing."
      }
    ]
  },
  expertise: {
    title: "Real Support for South African Business Owners",
    description: "Running a business in South Africa means managing a lot of moving parts. We provide the practical, local guidance you need to stay on top of your admin without the stress.",
    entities: [
      "Keeping your CIPC profile active and up to date.",
      "Simplifying Department of Employment and Labour requirements.",
      "Practical guidance for basic POPIA and B-BBEE admin."
    ]
  },
  methodology: {
    title: "Your 3-Step Path to Stress-Free Admin",
    description: "We employ a simple, transparent process to make sure your business stays in perfect standing from day one.",
    steps: [
      {
        step: 1,
        title: "A Friendly Check-Up",
        description: "We take a close look at where your business currently stands with your annual returns and basic company registries."
      },
      {
        step: 2,
        title: "Spotting the Gaps",
        description: "We find exactly what’s missing—whether it’s a forgotten annual filing or an outdated registration—before it can cause any issues."
      },
      {
        step: 3,
        title: "Sorting the Paperwork",
        description: "We handle the necessary updates and filings for you, quickly getting your business back into perfect, active standing with zero fuss."
      }
    ]
  }
} as const;