'use client';

import React, { useState } from 'react';
import { ChevronDown, BookOpen, Rocket, Award, Target, CheckCircle2, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const CurriculumBreakdown: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const modules = [
    {
      num: '01',
      title: 'Business Idea Validation & Market Sizing',
      duration: 'Weeks 1–3',
      icon: Target,
      tag: 'Foundation Phase',
      tagBg: 'bg-blue-50 text-[#0866ff] border-[#0866ff]/20',
      summary: 'Identify profitable startup opportunities, execute structured customer discovery interviews, and calculate total addressable market (TAM).',
      deliverable: 'Validated Business Concept & TAM Matrix',
      topics: [
        'Problem-Solution Fit Frameworks & TAM/SAM Calculation',
        'Competitor Differentiation & Blue Ocean Positioning',
        'Customer Discovery Interview Scripts & Pain Extraction',
        'No-Code Landing Page Validation Experiments'
      ]
    },
    {
      num: '02',
      title: 'Business Model Canvas & Unit Economics',
      duration: 'Weeks 4–6',
      icon: BookOpen,
      tag: 'Monetization Phase',
      tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      summary: 'Structure scalable revenue models, calculate LTV:CAC ratios, and build financial projections required for grant applications and investor pitches.',
      deliverable: '3-Year Financial Model & Canvas',
      topics: [
        'SaaS, D2C & Marketplace Monetization Models',
        'Financial Projections (P&L, Cash Flow, Burn Rate)',
        'Pricing Psychology & Tiered Revenue Architecture',
        'Cap Table Basics & Founder Equity Structuring'
      ]
    },
    {
      num: '03',
      title: 'KSUM Grant Writing & Pitch Defense',
      duration: 'Weeks 7–9',
      icon: Award,
      tag: '🏆 High Grant Priority Module',
      tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-300 font-extrabold shadow-xs',
      highlight: true,
      summary: 'Master the exact Detailed Project Report (DPR) format and pitch defense required by Kerala Startup Mission (KSUM) & government schemes.',
      deliverable: 'Approved KSUM DPR & Pitch Proposal',
      topics: [
        'Decoding KSUM Idea & Product Grant Criteria',
        'Writing Winning Grant Proposals & Milestone Budgets',
        'Detailed Project Report (DPR) Formatting & Defense',
        'Mock Evaluation Panel Defense Sessions'
      ]
    },
    {
      num: '04',
      title: 'Performance Growth Marketing & Funnel Scaling',
      duration: 'Weeks 10–12',
      icon: Rocket,
      tag: 'Revenue Scaling Phase',
      tagBg: 'bg-purple-50 text-purple-700 border-purple-200',
      summary: 'Build high-converting Meta and Google ad funnels, write persuasive ad copy, and automate lead nurturing sequences.',
      deliverable: 'Live Paid Ad Campaign & Funnel',
      topics: [
        'Ad Creative Psychology & Copywriting Masterclass',
        'Meta Ads & Google Ads Campaign Setup & Scaling',
        'Conversion Rate Optimization (CRO) & A/B Testing',
        'Marketing Automation & Lead Nurturing'
      ]
    },
    {
      num: '05',
      title: 'Investor Pitch Deck & Demo Day Defense',
      duration: 'Weeks 13–16',
      icon: Sparkles,
      tag: 'Executive Cohort Exclusive',
      tagBg: 'bg-amber-50 text-amber-700 border-amber-200',
      summary: 'Finalize 10-slide investor pitch decks, practice Q&A defense, and pitch live to accredited angel investor networks at Demo Day.',
      deliverable: '10-Slide Investor Deck & Pitch Defense',
      topics: [
        'The 10-Slide Sequoia/YC Pitch Deck Template',
        'Investor Valuation Models & Term Sheet Negotiation',
        'Live Mock Investor Q&A & Pitch Defense',
        'Perpex Angel Demo Day Presentation'
      ]
    }
  ];

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-white border-b border-[#e5eaf1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f4f8ff] text-[#0866ff] text-xs font-extrabold uppercase tracking-wider border border-[#0866ff]/20">
            <Layers className="w-4 h-4 text-[#0866ff]" />
            Structured Capstone Program
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#06142d] tracking-tight">
            Delta Batch <span className="text-[#0866ff]">Curriculum Modules</span>
          </h2>
          <p className="text-sm sm:text-base text-[#617087] leading-relaxed">
            From zero business background to launching validated startups and winning KSUM innovation grants.
          </p>
        </div>

        {/* Modern Module Cards Stack */}
        <div className="space-y-5">
          {modules.map((item, idx) => {
            const IconComp = item.icon;
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`group rounded-3xl border transition-all overflow-hidden ${
                  item.highlight
                    ? 'border-[#0866ff] bg-[#f4f8ff]/60 shadow-xl ring-2 ring-[#0866ff]/15'
                    : isOpen
                    ? 'border-[#0866ff] bg-white shadow-xl'
                    : 'border-[#e5eaf1] bg-white hover:border-[#0866ff]/50 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Module Header Bar */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-8 text-left flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Big Module Number */}
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#0866ff] opacity-80 shrink-0 font-mono">
                      {item.num}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-extrabold text-lg sm:text-xl text-[#06142d] group-hover:text-[#0866ff] transition-colors">
                          {item.title}
                        </h3>
                        
                        <span className={`px-3 py-0.5 rounded-full text-xs font-bold border ${item.tagBg}`}>
                          {item.tag}
                        </span>

                        <span className="px-3 py-0.5 rounded-full bg-slate-100 text-[#06142d] text-xs font-extrabold border border-slate-200">
                          {item.duration}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#617087] leading-relaxed font-normal">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 bg-[#0866ff] text-white border-[#0866ff]' : 'border-[#cbd5e1] text-[#617087]'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Expanded Details Panel */}
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-[#e5eaf1] bg-white space-y-6 animate-fade-in-up">
                    
                    {/* Key Topics Grid */}
                    <div>
                      <h4 className="text-xs font-extrabold text-[#06142d] uppercase tracking-wider mb-3">
                        Execution Topics Covered:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.topics.map((topic, i) => (
                          <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-semibold text-[#06142d]">
                            <CheckCircle2 className="w-4 h-4 text-[#0866ff] shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Deliverable Pill */}
                    <div className="p-4 rounded-2xl bg-[#f4f8ff] border border-[#0866ff]/20 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#06142d]">
                        <ShieldCheck className="w-4 h-4 text-[#0866ff]" />
                        <span>Module Deliverable:</span>
                        <span className="text-[#0866ff] font-extrabold">{item.deliverable}</span>
                      </div>
                      <span className="text-[11px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        100% Practical
                      </span>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
