import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ATELIER VORTEX // High-Consequence Digital Craft',
  description: 'Independent design engineering atelier. We craft hardware-accelerated digital identities, 60fps micro-physics, and bespoke WebGL experiences for category-defining entities.',
  keywords: ['Design Engineering', 'Awwwards SOTD', 'WebGL', 'Creative Development', 'Bespoke UI/UX'],
  openGraph: {
    title: 'ATELIER VORTEX // High-Consequence Digital Craft',
    description: 'Hardware-accelerated web experiences, kinetic brand systems, and pure code craftsmanship.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ATELIER VORTEX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATELIER VORTEX // High-Consequence Digital Craft',
    description: 'Hardware-accelerated web experiences, kinetic brand systems, and pure code craftsmanship.',
  },
};

export default function CraftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://atelier-vortex.internal/#organization',
        name: 'ATELIER VORTEX',
        url: 'https://atelier-vortex.internal',
        logo: 'https://atelier-vortex.internal/logo.svg',
        description: 'Elite Design Engineering Atelier & Creative Production Studio',
        sameAs: ['https://awwwards.com', 'https://github.com/rajairfanahmed/irfanlovefront'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://atelier-vortex.internal/#website',
        url: 'https://atelier-vortex.internal',
        name: 'ATELIER VORTEX',
        publisher: {
          '@id': 'https://atelier-vortex.internal/#organization',
        },
      },
    ],
  };

  return (
    <div className="w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+4rem)] -mx-4 sm:-mx-6 md:-mx-8 -my-8 min-h-screen bg-[#0c0d0e] text-[#f5f4f0] overflow-x-hidden selection:bg-[#D4FF00] selection:text-[#0c0d0e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
}
