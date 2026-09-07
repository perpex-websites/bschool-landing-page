'use client';

import React from 'react';
import { Award, ShieldCheck, FileText, ExternalLink, Cpu, Leaf, Globe, Rocket, CreditCard, Activity, Building2 } from 'lucide-react';

export const GrantAndOutcomeWall: React.FC = () => {
  // Alumni Launched Startups for Light Marquee Track
  const alumniStartups = [
    {
      name: 'NexaFlow AI',
      tag: '₹12L KSUM Grant',
      type: 'SaaS / AI',
      icon: Cpu,
      iconBg: 'bg-[#0866ff]',
    },
    {
      name: 'EcoPack India',
      tag: '₹45L Seed Funded',
      type: 'Sustainable D2C',
      icon: Leaf,
      iconBg: 'bg-emerald-600',
    },
    {
      name: 'AgriSense IoT',
      tag: 'KSUM Incubated',
      type: 'AgriTech',
      icon: Globe,
      iconBg: 'bg-amber-500',
    },
    {
      name: 'LogiQuick',
      tag: '₹18L MRR',
      type: 'Logistics Tech',
      icon: Rocket,
      iconBg: 'bg-indigo-600',
    },
    {
      name: 'PayCraft',
      tag: 'Angel Funded',
      type: 'FinTech',
      icon: CreditCard,
      iconBg: 'bg-purple-600',
    },
    {
      name: 'HealthPulse',
      tag: 'KSUM Idea Grant',
      type: 'HealthTech',
      icon: Activity,
      iconBg: 'bg-rose-600',
    },
  ];

  const doubleStartups = [...alumniStartups, ...alumniStartups];

  // 3 High-Trust Featured Alumni Venture Cards
  const featuredVentures = [
    {
      name: 'NexaFlow Systems',
      founder: 'Arun Kumar & Rahul V.',
      role: 'Co-Founders',
      cohort: 'Delta Cohort 1',
      achievement: 'KSUM Product Innovation Grant',
      amount: '₹12 Lakhs Grant',
      sanctionNo: 'KSUM/2025/GRANT-104',
      sector: 'AI & Logistics',
      icon: Cpu,
      iconBg: 'bg-[#0866ff]',
      tag: '🏆 KSUM Grant Won',
      tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200 font-extrabold',
      quote: 'The Delta Batch capstone guided us line-by-line to draft our Detailed Project Report (DPR) and unit economics. We passed the KSUM evaluation panel on our first attempt.'
    },
    {
      name: 'EcoPack India',
      founder: 'Sneha Mohan',
      role: 'Founder & CEO',
      cohort: 'Delta Cohort 2',
      achievement: 'Angel Seed Funding Round',
      amount: '₹45 Lakhs Seed',
      sanctionNo: 'ANGEL-SEED-RND2',
      sector: 'Sustainable D2C',
      icon: Leaf,
      iconBg: 'bg-emerald-600',
      tag: '💰 Seed Funded',
      tagBg: 'bg-blue-50 text-[#0866ff] border-[#0866ff]/20 font-extrabold',
      quote: 'We scaled our MRR from zero to ₹4.2 Lakhs during the 12-week program. The pitch deck roasting sessions by Delta mentors made our investor demo day pitch effortless.'
    },
    {
      name: 'LogiQuick Express',
      founder: 'Fahad Basheer',
      role: 'Founder',
      cohort: 'Delta Cohort 1',
      achievement: 'Bootstrapped Business Launch',
      amount: '₹18 Lakhs MRR',
      sanctionNo: 'BOOTSTRAP-SCALE-2025',
      sector: 'B2B Logistics',
      icon: Rocket,
      iconBg: 'bg-indigo-600',
      tag: '🚀 Revenue Scaled',
      tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-200 font-extrabold',
      quote: 'We built customer acquisition funnels using Delta performance marketing strategies. Reached ₹18 Lakhs monthly revenue in under 6 months without taking outside debt.'
    }
  ];

  return (
    <section id="outcomes" className="py-16 md:py-24 bg-white border-b border-[#e5eaf1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f4f8ff] text-[#0866ff] text-xs font-extrabold uppercase tracking-wider border border-[#0866ff]/20">
            <Award className="w-4 h-4 text-amber-500" />
            Verified Alumni Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#06142d] tracking-tight">
            Startups Built By <span className="text-[#0866ff]">Previous Cohort Students</span>
          </h2>
          <p className="text-sm sm:text-base text-[#617087] leading-relaxed">
            Real ventures built by Perpex alumni — from winning KSUM innovation grants to scaling monthly recurring revenue.
          </p>
        </div>

        {/* 1. Modern Light Marquee Track */}
        <div className="relative w-full overflow-hidden py-6 bg-[#f4f8ff] rounded-3xl border border-[#e5eaf1] shadow-xs">
          {/* Fade Out Edge Overlays */}
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#f4f8ff] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#f4f8ff] to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee flex gap-6">
            {doubleStartups.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-[#e5eaf1] shadow-sm hover:shadow-md hover:border-[#0866ff] transition-all shrink-0 group"
                >
                  <div className={`w-11 h-11 rounded-xl ${item.iconBg} text-white flex items-center justify-center font-extrabold text-sm shadow-md group-hover:scale-105 transition-transform`}>
                    <IconComp className="w-5 h-5 text-white" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-extrabold text-base text-[#06142d] group-hover:text-[#0866ff] transition-colors leading-tight">
                      {item.name}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-extrabold text-[#0866ff] bg-[#0866ff]/10 px-2.5 py-0.5 rounded-md border border-[#0866ff]/20">
                        {item.tag}
                      </span>
                      <span className="text-[10px] text-[#617087] font-semibold">{item.type}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. 3 Featured Alumni Founder Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {featuredVentures.map((venture, idx) => {
            const IconComp = venture.icon;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-3xl bg-white border border-[#e5eaf1] shadow-lg hover:shadow-xl hover:border-[#0866ff] transition-all space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl ${venture.iconBg} text-white flex items-center justify-center shadow-md shrink-0`}>
                        <IconComp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-base sm:text-lg text-[#06142d] group-hover:text-[#0866ff] transition-colors leading-tight">
                          {venture.name}
                        </h3>
                        <p className="text-xs text-[#617087] font-semibold mt-0.5">
                          {venture.founder} • <span className="text-[#0866ff] font-extrabold">{venture.cohort}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Achievement Highlight */}
                  <div className="p-3.5 rounded-2xl bg-[#f4f8ff] border border-[#0866ff]/15 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-extrabold text-[#0866ff] uppercase tracking-wider block">
                        {venture.achievement}
                      </span>
                      <span className="text-[11px] text-[#617087] block font-medium">Ref: {venture.sanctionNo}</span>
                    </div>
                    <span className="text-base font-extrabold text-[#0866ff] shrink-0">
                      {venture.amount}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-[#617087] leading-relaxed italic font-normal bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    "{venture.quote}"
                  </p>

                </div>

                {/* Footer */}
                <div className="pt-3 border-t border-[#e5eaf1] flex items-center justify-between text-xs font-bold">
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Delta Venture
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
