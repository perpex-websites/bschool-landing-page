'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuiz }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-[#e5eaf1] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Delta Badge */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-[#0866ff] flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-[#0866ff]/30 group-hover:scale-105 transition-transform">
              P
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-[#06142d] block leading-none">
                PERPEX <span className="text-[#0866ff]">B-SCHOOL</span>
              </span>
              <span className="text-[11px] font-semibold text-[#617087] tracking-wider uppercase">
                Delta Batch 2026
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f8ff] border border-[#0866ff]/20 text-xs font-bold text-[#0866ff]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            Admissions Open
          </div>
        </div>

        {/* Action CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-2 bg-[#0866ff] hover:bg-[#0052cc] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-[#0866ff]/25 hover:shadow-xl hover:shadow-[#0866ff]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Find My Track</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
