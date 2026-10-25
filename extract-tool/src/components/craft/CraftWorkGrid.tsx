'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Award, ExternalLink, Layers, Eye } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  metric: string;
  award: string;
  description: string;
  gradient: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'aura-os',
    title: 'Aura Spatial OS',
    client: 'Aura Systems Inc.',
    category: 'Spatial WebGL Engine',
    year: '2026',
    metric: '+480% Developer Adoption',
    award: 'Awwwards Site of the Month',
    description: 'Hardware-accelerated web engine rendering 60fps volumetric shaders and spatial UI in pure browser runtime.',
    gradient: 'from-blue-600/20 via-indigo-900/10 to-transparent',
    tags: ['WebGL', 'Custom Shaders', 'Design System'],
  },
  {
    id: 'monolith-auto',
    title: 'Monolith Automata',
    client: 'Monolith Performance Group',
    category: 'Interactive 3D Configurator',
    year: '2026',
    metric: '0.4s Time-to-Interactive',
    award: 'FWA of the Day · SOTD',
    description: 'Autonomous hypercar configurator with specular ray-tracing approximations and bespoke acoustic engine sound design.',
    gradient: 'from-amber-500/20 via-neutral-900/10 to-transparent',
    tags: ['Three.js', 'Spatial Audio', 'Configurator'],
  },
  {
    id: 'verbum-journal',
    title: 'Verbum Review',
    client: 'Institute of Contemporary Thought',
    category: 'Editorial Platform',
    year: '2025',
    metric: '8m 42s Avg Reading Session',
    award: 'Type Directors Club · SOTD',
    description: 'Experimental digital monograph pairing kinetic variable typography with zero-CLS fluid layout algorithms.',
    gradient: 'from-emerald-600/20 via-teal-950/10 to-transparent',
    tags: ['Variable Fonts', 'Editorial UX', 'Zero-CLS'],
  },
  {
    id: 'synapse-core',
    title: 'Synapse Telemetry',
    client: 'Synapse Financial Technologies',
    category: 'High-Frequency Dashboard',
    year: '2025',
    metric: '12ms Stream Latency',
    award: 'Awwwards Developer Award',
    description: 'Dense financial execution terminal processing 100,000 order ticks per second with zero browser thread locking.',
    gradient: 'from-red-600/20 via-purple-950/10 to-transparent',
    tags: ['WebSocket', 'Canvas Charting', 'High Density'],
  },
];

export function CraftWorkGrid() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="works" className="relative py-28 px-4 sm:px-8 bg-[#0c0d0e] border-t border-white/10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-white/10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#D4FF00]">
              [ 01 // SELECTED ARCHITECTURE ]
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#f5f4f0] mt-3">
              FLAGSHIP WORKS.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#9c9b97] font-sans max-w-md">
            Each project is custom-engineered from raw source code. Zero outsourced themes, zero boilerplate frameworks, and zero visual compromises.
          </p>
        </div>

        {/* Asymmetrical Bento Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mt-12">
          {PROJECTS.map((project, idx) => {
            const isLarge = idx === 0 || idx === 3;
            return (
              <article
                key={project.id}
                className={`relative group rounded-3xl border border-white/10 bg-[#121316]/60 backdrop-blur-sm overflow-hidden flex flex-col justify-between p-6 sm:p-10 transition-all duration-300 hover:border-[#D4FF00]/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] ${
                  isLarge ? 'md:col-span-7' : 'md:col-span-5'
                }`}
              >
                {/* Ambient Specular Background on Card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-75 transition-opacity duration-500`} />
                <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-5 text-white font-mono text-8xl font-black select-none">
                  0{idx + 1}
                </div>

                {/* Card Top Meta */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs tracking-wider uppercase text-[#D4FF00] flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>{project.award}</span>
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#f5f4f0] mt-2 group-hover:text-[#D4FF00] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[#9c9b97] mt-1">{project.client} · {project.year}</p>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-[#f5f4f0] group-hover:bg-[#D4FF00] group-hover:text-[#0c0d0e] group-hover:border-[#D4FF00] transition-all">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                {/* Card Center Visual Representation */}
                <div className="relative z-10 my-10 min-h-[160px] sm:min-h-[220px] rounded-2xl border border-white/10 bg-[#0c0d0e]/80 flex flex-col items-center justify-center p-6 text-center group-hover:border-white/20 transition-all overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4FF00_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="relative z-10 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-[#f5f4f0]">
                      <Layers className="w-3 h-3 text-[#D4FF00]" />
                      <span>{project.category}</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-[#9c9b97] max-w-sm">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Bottom Metrics & Tags */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs font-semibold text-[#f5f4f0] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4FF00]" />
                    <span>{project.metric}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[10px] uppercase tracking-wider text-[#9c9b97]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
