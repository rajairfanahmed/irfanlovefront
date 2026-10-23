'use client';

import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { siteData } from '../data/siteData';

export async function generateAndDownloadZip(domain: string = siteData.domain) {
  const zip = new JSZip();
  const rootFolder = zip.folder(domain) || zip;

  // Create mock SVG image content for each section
  const createMockPngSvg = (sectionName: string, dims: string) => {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="800" viewBox="0 0 1440 800">
      <rect width="1440" height="800" fill="#FFFFFF"/>
      <rect x="20" y="20" width="1400" height="760" rx="16" fill="#F8F9FA" stroke="#E5E7EB" stroke-width="2"/>
      <text x="720" y="380" font-family="sans-serif" font-size="32" font-weight="bold" fill="#111827" text-anchor="middle">
        Section Snapshot: ${sectionName}
      </text>
      <text x="720" y="430" font-family="monospace" font-size="18" fill="#6B7280" text-anchor="middle">
        Viewport: ${dims} • Captured from ${domain}
      </text>
      <circle cx="720" cy="490" r="12" fill="#EA4335" />
    </svg>`;
  };

  // Add files for each page
  siteData.pages.forEach((page) => {
    const pageFolder = rootFolder.folder(page.name) || rootFolder;
    page.sections.forEach((sec) => {
      const svgContent = createMockPngSvg(`${page.name}/${sec.name}`, sec.dimensions);
      pageFolder.file(sec.name, svgContent);
    });
  });

  // Add manifest.json
  const manifest = {
    domain,
    extractedAt: new Date().toISOString(),
    pagesCount: siteData.pages.length,
    totalSections: siteData.totalSections,
    totalSize: siteData.totalSize,
    generator: 'SiteRip v1.0 - Section Extractor',
  };
  rootFolder.file('extraction-manifest.json', JSON.stringify(manifest, null, 2));

  // Generate and save
  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, `${domain}-design.zip`);
}
