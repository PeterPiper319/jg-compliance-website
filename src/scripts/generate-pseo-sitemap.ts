import fs from 'fs';
import path from 'path';

const industries = [
  "information-technology-telecommunications",
  "construction-civil-engineering",
  "medical-health-services",
  "security-guarding-services",
  "professional-consulting-services",
  "agriculture-forestry-fishing",
  "manufacturing-industrial",
  "energy-water-waste-management",
  "transport-storage-logistics",
  "education-training",
  "media-advertising-marketing",
  "tourism-hospitality-catering",
  "legal-regulatory-services",
  "real-estate-property-management"
];

const provinces = [
  "gauteng",
  "western-cape",
  "kwazulu-natal",
  "eastern-cape",
  "free-state",
  "limpopo",
  "mpumalanga",
  "north-west",
  "northern-cape"
];

const baseUrl = 'https://jgcompliance.co.za';
const currentDate = new Date().toISOString().split('T')[0];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Append baseline structural marketing routes from your core configuration
const baseRoutes = [
  '',
  '/services',
  '/services/cipc/new-company',
  '/services/cipc/restoration',
  '/services/cipc/beneficial-ownership',
  '/services/cipc/annual-returns',
  '/services/cipc/director-changes',
  '/services/cipc/company-name-change',
  '/services/bee-affidavit',
  '/services/popia/information-officer',
  '/services/popia/paia-manual',
  '/about',
  '/contact',
  '/tools',
  '/tools/bee-calculator',
  '/tools/popia-audit',
  '/tenders'
];

baseRoutes.forEach(route => {
  sitemapXml += `  <url>\n    <loc>${baseUrl}${route}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
});

// Programmatically build and insert all 126 pSEO landing matrices
industries.forEach(ind => {
  provinces.forEach(prov => {
    const pSeoPath = `/tenders/${ind}-tenders-in-${prov}`;
    sitemapXml += `  <url>\n    <loc>${baseUrl}${pSeoPath}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  });
});

sitemapXml += `</urlset>`;

// Write the complete, valid sitemap asset back directly to your public container folder
fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemapXml, 'utf8');
console.log('✅ Strategic pSEO Sitemap Matrix: 126 Programmatic URLs Generated successfully inside public/sitemap.xml');
