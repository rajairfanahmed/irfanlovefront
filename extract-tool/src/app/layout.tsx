import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const fontDisplay = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SiteRip — Full HD Website Capture Tool',
  description:
    'Extract every section of any website as Full HD images. Choose viewports, tune extraction options, and download a structured ZIP in seconds.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans flex flex-col items-center justify-center selection:bg-red-500/20 overflow-x-hidden">
        {/* Ambient glow */}
        <div className="ambient-glow" />
        {/* Noise texture */}
        <div className="noise-overlay" />
        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
