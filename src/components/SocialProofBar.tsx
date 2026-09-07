'use client';

import React from 'react';
import { Award, DollarSign, Rocket, Star, ShieldCheck, Users } from 'lucide-react';

export const SocialProofBar: React.FC = () => {
  return (
    <section id="outcomes" className="bg-[#06142d] text-white py-12 border-y border-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Metric 1 */}
          <div className="pt-4 md:pt-0 md:px-6 space-y-2">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0866ff]/20 text-[#0866ff] mb-1">
              <Award className="w-5 h-5 text-[#0866ff]" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              ₹1.2 Cr+
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-300">
              KSUM Grants & Angel Capital Raised
            </p>
            <p className="text-[11px] text-slate-400">By previous cohort founders</p>
          </div>

          {/* Metric 2 */}
          <div className="pt-4 md:pt-0 md:px-6 space-y-2">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 mb-1">
              <Rocket className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              140+
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-300">
              Active Businesses Launched
            </p>
            <p className="text-[11px] text-slate-400">From idea to revenue</p>
          </div>

          {/* Metric 3 */}
          <div className="pt-4 md:pt-0 md:px-6 space-y-2">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 mb-1">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              4.9 / 5
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-300">
              Student Satisfaction Rating
            </p>
            <p className="text-[11px] text-slate-400">Based on 5,200+ evaluations</p>
          </div>

          {/* Metric 4 */}
          <div className="pt-4 md:pt-0 md:px-6 space-y-2">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 mb-1">
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              98.4%
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-300">
              Cohort Completion Rate
            </p>
            <p className="text-[11px] text-slate-400">High accountability structure</p>
          </div>

        </div>

      </div>
    </section>
  );
};
