'use client';

import React from 'react';
import { CraftNavbar } from '@/components/craft/CraftNavbar';
import { CraftHero } from '@/components/craft/CraftHero';
import { CraftAwardsTicker } from '@/components/craft/CraftAwardsTicker';
import { CraftWorkGrid } from '@/components/craft/CraftWorkGrid';
import { CraftManifesto } from '@/components/craft/CraftManifesto';
import { CraftCapabilities } from '@/components/craft/CraftCapabilities';
import { CraftInquirySection } from '@/components/craft/CraftInquirySection';
import { CraftFooter } from '@/components/craft/CraftFooter';

export default function CraftPage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0c0d0e] text-[#f5f4f0] font-sans antialiased">
      {/* Fixed Studio Navbar */}
      <CraftNavbar onOpenInquiry={() => scrollToSection('inquiry')} />

      {/* Main Experience Flow */}
      <main>
        {/* Hero Section */}
        <CraftHero
          onScrollToWorks={() => scrollToSection('works')}
          onOpenInquiry={() => scrollToSection('inquiry')}
        />

        {/* Continuous Awards & Accolades Marquee */}
        <CraftAwardsTicker />

        {/* Selected Works Bento Grid */}
        <CraftWorkGrid />

        {/* Studio Manifesto & Philosophy */}
        <CraftManifesto />

        {/* Core Capabilities & Competencies */}
        <CraftCapabilities />

        {/* Project Commission Inquiry */}
        <CraftInquirySection />
      </main>

      {/* Interactive Watermark Footer */}
      <CraftFooter />
    </div>
  );
}
