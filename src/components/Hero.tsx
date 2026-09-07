'use client';

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center overflow-hidden gradient-bg-hero py-6">
      
      {/* Soft Ambient Primary Blue Glow Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#0866ff]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 my-auto">
        
        {/* Brand Overline in Uniform Primary Blue */}
        <div className="text-[#0866ff] font-extrabold text-xs sm:text-sm tracking-[0.3em] uppercase inline-block">
          PERPEX
        </div>

        {/* Headline Container */}
        <div className="space-y-1 sm:space-y-2 max-w-5xl mx-auto">
          {/* Line 1: YOU KNOW YOU CAN */}
          <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#06142d] leading-none uppercase whitespace-nowrap">
            YOU KNOW YOU CAN
          </h1>
          
          {/* Line 2: do more. - Uniform Signature Brand Blue (#0866ff) */}
          <div className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic text-[#0866ff] font-normal leading-[1.05] tracking-tight">
            do more.
          </div>
        </div>

        {/* Sub-headline Hook */}
        <p className="text-base sm:text-2xl md:text-3xl text-[#617087] font-medium leading-relaxed max-w-2xl mx-auto">
          But somehow, you’re still here.
        </p>

        {/* Distinctive Dark Pill Capsule CTA Bar with Uniform Primary Blue Circle */}
        <div className="pt-2 sm:pt-4 flex justify-center">
          <button
            onClick={onOpenQuiz}
            className="w-full sm:w-auto min-w-[320px] sm:min-w-[500px] max-w-xl group flex items-center justify-between gap-6 bg-[#06142d] hover:bg-[#0a1628] text-white px-7 sm:px-9 py-4 sm:py-5 rounded-full shadow-2xl hover:shadow-[#0866ff]/25 transition-all border border-[#0a1628] transform hover:-translate-y-0.5"
          >
            <span className="font-extrabold text-base sm:text-xl text-white group-hover:text-blue-100 transition-colors tracking-tight text-left">
              Yes, we can help you get that
            </span>
            
            {/* Arrow Circle in Signature Brand Blue #0866ff */}
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0866ff] group-hover:bg-[#0052cc] text-white flex items-center justify-center shrink-0 transition-all shadow-md group-hover:scale-110">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </button>
        </div>

        {/* Trust & Batch Status Row */}
        <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-[#617087]">
          <div className="flex items-center gap-1.5 text-[#0866ff]">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-extrabold text-[#06142d]">4.9 / 5</span>
          </div>
          <span>•</span>
          <span className="text-[#06142d] font-bold">Delta Batch 2026</span>
          <span>•</span>
          <span>KSUM Grant Guidance & Pitch Desk</span>
          <span>•</span>
          <span className="text-[#0866ff] font-bold">35 Seats Left</span>
        </div>

      </div>
    </section>
  );
};
