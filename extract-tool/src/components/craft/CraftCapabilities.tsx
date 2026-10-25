'use client';

import React, { useState } from 'react';
import { Terminal, Layers, Sparkles, Activity, CheckCircle2 } from 'lucide-react';

interface Capability {
  id: string;
  category: 'Design Engineering' | 'Interactive WebGL' | 'Design Systems' | 'AI & Agentic Systems';
  title: string;
  tagline: string;
  deliverables: string[];
  techStack: string[];
}

const CAPABILITIES: Capability[] = [
  {
    id: 'cap-1',
    category: 'Design Engineering',
    title: 'High-Consequence Web Applications',
    tagline: 'Production web apps engineered with locked 60fps micro-physics and zero layout shifts.',
    deliverables: ['Custom Next.js & React Architectures', 'Hardware-Accelerated Animation Orchestration', 'Micro-Interaction Spring Physics'],
    techStack: ['Next.js App Router', 'React 19', 'Tailwind v4', 'Framer Motion'],
  },
  {
    id: 'cap-2',
    category: 'Interactive WebGL',
    title: 'Volumetric Shaders & 3D Realtime Canvas',
    tagline: 'Immersive browser experiences with low draw-call overhead and progressive fallbacks.',
    deliverables: ['Custom GLSL Vertex & Fragment Shaders', 'Interactive Product 3D Configurators', 'Device Capability Adaptive LODs'],
    techStack: ['Three.js', 'React Three Fiber', 'GLSL', 'WebGL 2.0'],
  },
  {
    id: 'cap-3',
    category: 'Design Systems',
    title: 'W3C DTCG Token Architectures',
    tagline: 'Token-driven design systems syncing engineering codebases with multi-brand design tokens.',
    deliverables: ['WCAG AAA/AA Contrast Audited Color Ladders', 'Fluid Typography & Spacing Clamp Algorithms', 'Reusable Component Showrooms'],
    techStack: ['CSS Variables', 'Style Dictionary', 'Radix UI', 'Tailwind CSS'],
  },
  {
    id: 'cap-4',
    category: 'AI & Agentic Systems',
    title: 'Agentic SEO & Real-time Generative UI',
    tagline: 'Integrating multi-provider streaming and machine discoverability into modern frontends.',
    deliverables: ['Dual llms.txt & llms-full.txt Registries', 'Linked Schema.org Knowledge Graphs', 'Server-Sent Events (SSE) Streaming Hooks'],
    techStack: ['Vercel AI SDK', 'Schema.org JSON-LD', 'SSE Web Streams', 'Zod'],
  },
];

const CATEGORIES = ['All', 'Design Engineering', 'Interactive WebGL', 'Design Systems', 'AI & Agentic Systems'] as const;

export function CraftCapabilities() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filtered = selectedCategory === 'All'
    ? CAPABILITIES
    : CAPABILITIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="capabilities" className="relative py-28 px-4 sm:px-8 bg-[#0c0d0e] border-t border-white/10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#D4FF00]">
              [ 03 // STUDIO COMPETENCIES ]
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#f5f4f0] mt-3">
              CORE CAPABILITIES.
            </h2>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#D4FF00] text-[#0c0d0e] font-bold shadow-[0_0_16px_rgba(212,255,0,0.3)]'
                    : 'bg-white/5 border border-white/10 text-[#9c9b97] hover:text-[#f5f4f0] hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {filtered.map((cap) => (
            <div
              key={cap.id}
              className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#121316]/60 backdrop-blur-sm flex flex-col justify-between hover:border-white/20 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-[#D4FF00] uppercase tracking-wider">
                    {cap.category}
                  </span>
                  <Activity className="w-4 h-4 text-[#71717a] group-hover:text-[#D4FF00] transition-colors" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#f5f4f0] mt-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-[#9c9b97] font-sans mt-2 leading-relaxed">
                  {cap.tagline}
                </p>

                <div className="mt-6 space-y-2.5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#71717a]">Key Deliverables:</p>
                  {cap.deliverables.map((del) => (
                    <div key={del} className="flex items-start gap-2 text-xs text-[#f5f4f0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF00] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                {cap.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[10px] uppercase text-[#9c9b97]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
