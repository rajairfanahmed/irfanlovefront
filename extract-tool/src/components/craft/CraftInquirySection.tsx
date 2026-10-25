'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle, Sparkles, Clock, ShieldCheck } from 'lucide-react';

const BUDGETS = ['$25k - $50k', '$50k - $100k', '$100k - $250k', '$250k+'];
const SCOPES = ['Flagship Web Experience', '3D / WebGL Architecture', 'Design System & Tokens', 'Enterprise Redesign'];

export function CraftInquirySection() {
  const [selectedBudget, setSelectedBudget] = useState('$50k - $100k');
  const [selectedScope, setSelectedScope] = useState('Flagship Web Experience');
  const [email, setEmail] = useState('');
  const [briefDetails, setBriefDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#D4FF00', '#FFFFFF', '#60A5FA'],
    });

    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="relative py-28 px-4 sm:px-8 bg-[#090a0b] border-t border-white/10">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center space-y-4 pb-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#D4FF00]">
            [ 04 // INITIATE DIALOGUE ]
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#f5f4f0]">
            COMMISSION A PROJECT.
          </h2>
          <p className="text-sm sm:text-base text-[#9c9b97] font-sans max-w-xl mx-auto">
            We partner with a maximum of two client engagements per quarter to maintain rigorous, obsessive craftsmanship.
          </p>
        </div>

        {/* Interactive Inquiry Card */}
        <div className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#121316]/70 backdrop-blur-xl shadow-[0_24px_48px_rgba(0,0,0,0.5)]">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/30 flex items-center justify-center text-[#D4FF00] mx-auto animate-bounce">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#f5f4f0] tracking-tight">
                Brief Registered.
              </h3>
              <p className="text-sm text-[#9c9b97] max-w-md mx-auto">
                Thank you. Our principal architects will review your parameters and dispatch an executive availability dossier within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="font-mono text-xs uppercase tracking-wider text-[#D4FF00] underline underline-offset-4 hover:text-white transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Scope Selection */}
              <div className="space-y-3">
                <label className="block font-mono text-xs uppercase tracking-wider text-[#f5f4f0]">
                  Project Scope:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SCOPES.map((scope) => (
                    <button
                      key={scope}
                      type="button"
                      onClick={() => setSelectedScope(scope)}
                      className={`px-4 py-3 rounded-xl border text-left font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-between ${
                        selectedScope === scope
                          ? 'bg-[#D4FF00] text-[#0c0d0e] font-bold border-[#D4FF00] shadow-[0_0_20px_rgba(212,255,0,0.2)]'
                          : 'bg-white/5 border-white/10 text-[#9c9b97] hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <span>{scope}</span>
                      {selectedScope === scope && <Sparkles className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Tier Selection */}
              <div className="space-y-3">
                <label className="block font-mono text-xs uppercase tracking-wider text-[#f5f4f0]">
                  Anticipated Capital Allocation (USD):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {BUDGETS.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={`px-3 py-2.5 rounded-xl border text-center font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
                        selectedBudget === budget
                          ? 'bg-[#f5f4f0] text-[#0c0d0e] border-[#f5f4f0] shadow-[0_0_16px_rgba(255,255,255,0.2)]'
                          : 'bg-white/5 border-white/10 text-[#9c9b97] hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="inquiry-email" className="block font-mono text-xs uppercase tracking-wider text-[#f5f4f0]">
                    Direct Corporate Email:
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@institution.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0d0e] border border-white/15 text-[#f5f4f0] font-mono text-sm placeholder-[#52525b] focus:outline-none focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiry-details" className="block font-mono text-xs uppercase tracking-wider text-[#f5f4f0]">
                    Project Objectives & Timeline:
                  </label>
                  <input
                    id="inquiry-details"
                    type="text"
                    value={briefDetails}
                    onChange={(e) => setBriefDetails(e.target.value)}
                    placeholder="Launching Q4, seeking custom WebGL..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0d0e] border border-white/15 text-[#f5f4f0] font-mono text-sm placeholder-[#52525b] focus:outline-none focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00] transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA & Reassurance */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs font-mono text-[#71717a]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Strict NDA Enforced</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#D4FF00]" />
                    <span>24h Response SLA</span>
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4FF00] text-[#0c0d0e] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#e2ff42] hover:scale-105 active:scale-95 transition-all shadow-[0_0_28px_rgba(212,255,0,0.3)] flex items-center justify-center gap-2"
                >
                  <span>Transmit Commission Brief</span>
                  <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
