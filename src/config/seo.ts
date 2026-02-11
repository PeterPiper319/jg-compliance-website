// src/config/seo.ts
import { PRICING_2026, BRAND_COLORS, SOCIAL_LINKS } from './brand';

export const SITE_METADATA = {
  name: "JG Business Compliance",
  legalName: "JG Business Compliance (Pty) Ltd",
  siteUrl: "https://jgcompliance.co.za",
  description: "South African CIPC and Labour compliance specialists. Architecture for Excellence.",
  contactPoint: {
    "@type": "ContactPoint",
    "telephone": "+27 81 287 6540",
    "contactType": "customer service",
    "areaServed": "ZA",
    "availableLanguage": ["English", "Afrikaans"]
  }
};

/**
 * STRATEGIC SEO DICTIONARY
 * Aligned with "Integrated Strategic Architecture" PDF
 * Logic: Hard-Stop Triggers & Tender Compliance
 */
export const ROUTE_SEO = {
  // ROOT
  home: {
    title: "South African Business Compliance | CIPC & Labour Services",
    description: "Navigate CIPC and Labour regulations with precision. We handle Company Registration, Restoration, and COIDA compliance for South African entrepreneurs."
  },

  // PILLAR I: CIPC IDENTITY
  newCompany: {
    title: "New Company Registration (Pty) Ltd | Turnkey Launch | JG", // [cite: 20]
    description: "Full launch package: Name Reservation, MoI filing, and Income Tax generation. Start your legally operational business today with our turnkey solution." // [cite: 18, 20, 21]
  },
  restoration: {
    title: "CIPC Company Restoration South Africa | Recovery Experts | JG Business Compliance", // [cite: 68]
    description: "Your company is a 'legal brick wall' if deregistered. JG Business Compliance provides strategic restoration (CoR 40.5) to restore your trade status. Private expert intermediary." // [cite: 76, 77]
  },
  beeAffidavit: {
    title: "BEE Affidavit (EME) | Same-Day Certificate | JG Business Compliance",
    description: "Official B-BBEE Sworn Affidavit for Exempted Micro Enterprises (Turnover < R10m). Instant download for tender compliance."
  },

  // PILLAR II: CORPORATE MAINTENANCE (HARD-STOP)
  beneficialOwnership: {
    title: "Beneficial Ownership Filing (BO) | CIPC Hard-Stop Solutions | JG Business Compliance", // [cite: 69]
    description: "Avoid the July 2024 CIPC Hard-Stop. We manage Beneficial Ownership (BO) declarations to unblock your Annual Returns. Stay compliant and tender-ready. Professional fees apply." // [cite: 78, 79]
  },
  annualReturns: {
    title: "CIPC Annual Returns | Avoid Deregistration & Penalties | JG Business Compliance",
    description: "Mandatory annual filing to prevent final deregistration. We calculate turnover fees and link with BO filing to clear CIPC Hard-Stops." // [cite: 40, 41]
  },

  // PILLAR III: LABOUR & COIDA
  coida: {
    title: "COIDA Letter of Good Standing | Fast-Track Tender Compliance | JG Business Compliance", // [cite: 70]
    description: "Secure your tender eligibility. We retrieve your valid Letter of Good Standing directly from the Compensation Fund. April 30th renewal cycle managed." // [cite: 48, 51, 52]
  },
  domestic: {
    title: "Protect Your Home: Domestic Worker UIF & COIDA Registration", // [cite: 59]
    description: "Mitigate CCMA risk and personal liability. Mandatory UIF and COIDA registration for all private households employing staff > 24 hours/month." // [cite: 57, 60]
  },
  letterGoodStanding: {
    title: "Letter of Good Standing (LOGS) | Tender Documents | JG Business Compliance",
    description: "Essential documentation for state tenders and construction contracts. Verify your good standing with the Compensation Commissioner today." // [cite: 48]
  }
};

// JSON-LD GENERATORS
export const JSON_LD = {
  organization: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // [cite: 117]
    "name": SITE_METADATA.legalName,
    "image": `${SITE_METADATA.siteUrl}/logo1.png`,
    "url": SITE_METADATA.siteUrl,
    "telephone": SITE_METADATA.contactPoint.telephone,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ZA"
    },
    "priceRange": "R390 - R8800",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "15:45"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "08:00",
        "closes": "13:00"
      }
    ],
    "sameAs": [
      SOCIAL_LINKS.facebook
    ]
  }
};