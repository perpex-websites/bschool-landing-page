'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

interface FloatingBottomBarProps {
  onOpenQuiz: () => void;
}

export const FloatingBottomBar: React.FC<FloatingBottomBarProps> = ({ onOpenQuiz }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl animate-fade-in-up">
      <div className="glass-card-dark rounded-2xl p-3 sm:px-6 sm:py-3.5 shadow-2xl border border-white/15 flex items-center justify-between gap-4 text-white">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0866ff] text-white flex items-center justify-center font-bold shrink-0 shadow-md shadow-[#0866ff]/40">
            <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xs sm:text-sm text-white">Delta Batch Admissions Active</span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                35 Seats Left
              </span>
            </div>
            <p className="text-[11px] text-slate-300 hidden md:block">
              Take the 20-second quiz to unlock your course match & KSUM grant feasibility report.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenQuiz}
          className="shrink-0 bg-[#0866ff] hover:bg-[#0052cc] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-[#0866ff]/30 transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95"
        >
          <span>Find My Track</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
