'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Users, CheckCircle2 } from 'lucide-react';

interface UrgentCTAProps {
  onOpenQuiz: () => void;
}

export const UrgentCTA: React.FC<UrgentCTAProps> = ({ onOpenQuiz }) => {
  // Countdown Timer State (Simulated deadline)
  const [timeLeft, setTimeLeft] = useState({ hours: 48, minutes: 24, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="direct-enroll" className="py-16 md:py-24 bg-gradient-to-br from-[#06142d] via-[#0a1628] to-[#06142d] text-white relative overflow-hidden">
      
      {/* Glow background circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0866ff]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Urgent Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Delta Cohort Batch Closing Soon</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Ready to Build Your Business & <span className="gradient-text-blue">Secure KSUM Grants?</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
          Seats for the flagship Delta Batch are capped at 35 students per cohort to ensure 1-on-1 grant review & mentorship quality.
        </p>

        {/* Countdown Timer Cards */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 pt-2">
          <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 sm:px-6 py-3 rounded-2xl text-center min-w-[75px]">
            <div className="text-2xl sm:text-4xl font-extrabold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Hours</div>
          </div>
          <span className="text-2xl font-bold text-[#0866ff]">:</span>
          <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 sm:px-6 py-3 rounded-2xl text-center min-w-[75px]">
            <div className="text-2xl sm:text-4xl font-extrabold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Mins</div>
          </div>
          <span className="text-2xl font-bold text-[#0866ff]">:</span>
          <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 sm:px-6 py-3 rounded-2xl text-center min-w-[75px]">
            <div className="text-2xl sm:text-4xl font-extrabold text-amber-400">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Secs</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenQuiz}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0866ff] hover:bg-[#0052cc] text-white font-bold text-base shadow-xl shadow-[#0866ff]/40 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>Find My Track & Apply Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Zero Risk Admissions Assessment
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#0866ff]" />
            Admissions Desk Available
          </span>
        </div>

      </div>
    </section>
  );
};
