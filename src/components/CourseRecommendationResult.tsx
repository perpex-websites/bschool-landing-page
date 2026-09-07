'use client';

import React from 'react';
import { QuizResult } from './InteractiveQuiz';
import { Sparkles, CheckCircle2, Award, ArrowRight, ShieldCheck, Clock, Users, Zap, DollarSign, Calendar } from 'lucide-react';

interface CourseRecommendationResultProps {
  result: QuizResult;
  onResetQuiz: () => void;
}

export const CourseRecommendationResult: React.FC<CourseRecommendationResultProps> = ({
  result,
  onResetQuiz
}) => {
  const { name, timeAllocation, startupStatus, expectation, matchedTrack } = result;

  // Track Data Definitions
  const tracksData = {
    growthx: {
      tag: 'Base Online Tier',
      title: 'Perpex GrowthX Track',
      price: '₹18,500',
      period: 'Self-Paced / 6 Weeks Access',
      badgeBg: 'bg-blue-50 text-[#0866ff] border-[#0866ff]/20',
      description: 'Ideal for self-starters and working professionals who want foundational frameworks for growth marketing, business model validation, and digital execution.',
      highlights: [
        'Complete Self-Paced Video Module Library (60+ Hours)',
        'Delta Business Model Canvas & Validation Templates',
        'Growth Marketing & Ad Funnel Masterclasses',
        'Access to Perpex Community Discord & Founder Forum',
        'Certificate of Completion from Perpex B-School'
      ],
      suitableFor: 'People looking for flexible self-learning with zero live pressure.'
    },
    hybrid: {
      tag: 'Most Popular Mid-Tier',
      title: 'Perpex Hybrid Mentorship Track',
      price: '₹45,000',
      period: '12 Weeks Hybrid Program',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      description: 'Combines structured online curriculum with weekend live strategy sessions, group case studies, and live marketing funnel builds.',
      highlights: [
        'Everything in GrowthX + 12 Live Weekend Strategy Labs',
        'Weekly Group Mentorship with Serial Entrepreneurs',
        'Live Campaign Feedback & Landing Page Reviews',
        'KSUM Grant Readiness Essentials Masterclass',
        'Cap-stone Project Defense & Direct Review'
      ],
      suitableFor: 'Aspiring founders & professionals needing structure & weekly accountability.'
    },
    executive: {
      tag: 'Flagship Premium Tier',
      title: 'Executive Delta B-School Cohort',
      price: '₹95,000',
      period: '16 Weeks Intensive Founder Accelerator',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-300 font-bold',
      description: 'The ultimate immersive program for serious founders & executives. Includes dedicated 1-on-1 KSUM grant writing support, direct angel investor pitch desk, and 1-on-1 mentorship.',
      highlights: [
        'Dedicated 1-on-1 KSUM Grant Writing & Guidance (Lakhs in Potential Funding)',
        'Direct Investor Pitch Desk & Angel Network Introductions',
        '1-on-1 Advisory Sessions with Venture Builders & Marketing Strategists',
        'Unlimited Campaign Audit & Business Plan Fine-Tuning',
        'Lifetime Access to Exclusive Delta Founder Alumni Network',
        'VIP Access to Physical Incubation & KSUM Demo Days'
      ],
      suitableFor: 'Founders, startups & leaders aiming to raise grants, launch fast & scale revenue.'
    }
  };

  const currentCourse = tracksData[matchedTrack];

  return (
    <section id="matched-result" className="py-12 md:py-20 bg-[#f4f8ff] border-y border-[#e5eaf1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step 1: "We Understand You" Diagnostic Card */}
        <div className="bg-[#06142d] text-white rounded-3xl p-8 sm:p-10 shadow-2xl mb-12 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0866ff]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0866ff]/20 border border-[#0866ff]/40 text-xs font-semibold text-blue-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Personalized Diagnostic Analysis Completed</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              We Understand Your Path, <span className="text-[#0866ff]">{name}</span>!
            </h2>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
              <h3 className="font-bold text-base text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Diagnostic Assessment Breakdown:</span>
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0866ff]"></span>
                  <span>Time Allocated: <strong className="text-white">{timeAllocation || 'Flexible'}</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0866ff]"></span>
                  <span>Current Status: <strong className="text-white">{startupStatus || 'Evaluating'}</strong></span>
                </li>
                <li className="flex items-center gap-2 sm:col-span-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0866ff]"></span>
                  <span>Primary Expectation: <strong className="text-white">{expectation || 'Business Scale'}</strong></span>
                </li>
              </ul>

              <div className="pt-2 border-t border-white/10 text-xs sm:text-sm text-blue-200 leading-relaxed font-normal">
                💡 <em>Based on your diagnostic profile, your commitment level and business objectives perfectly align with the <strong>{currentCourse.title}</strong>.</em>
              </div>
            </div>

          </div>
        </div>

        {/* Step 2: The Matched Course Details Card (ONLY 1 COURSE SHOWN) */}
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#0866ff] overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#0866ff] to-[#0052cc] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider mb-2">
                YOUR RECOMMENDED MATCH
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">{currentCourse.title}</h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-1">{currentCourse.period}</p>
            </div>
            
            <div className="bg-white text-[#06142d] px-6 py-4 rounded-2xl shadow-lg text-center sm:text-right shrink-0">
              <div className="text-xs font-semibold text-[#617087] uppercase">Tuition Fee</div>
              <div className="text-3xl font-extrabold text-[#0866ff]">{currentCourse.price}</div>
              <div className="text-[11px] text-slate-500 font-medium">Inclusive of all modules</div>
            </div>
          </div>

          {/* Body Details */}
          <div className="p-6 sm:p-10 space-y-8">
            
            <div>
              <h4 className="font-bold text-lg text-[#06142d] mb-2">Track Overview</h4>
              <p className="text-sm sm:text-base text-[#617087] leading-relaxed">
                {currentCourse.description}
              </p>
            </div>

            {/* What's Included */}
            <div className="space-y-4">
              <h4 className="font-bold text-base text-[#06142d] uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#0866ff]" />
                <span>What's Included in Your Matched Delta Track:</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {currentCourse.highlights.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#f4f8ff] border border-[#0866ff]/15 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0866ff] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-[#06142d]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Highlight for Executive Cohort (KSUM Grant guidance) */}
            {matchedTrack === 'executive' && (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950 to-[#06142d] text-white space-y-3 border border-emerald-500/30">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Award className="w-5 h-5" />
                  <span>KSUM (Kerala Startup Mission) Grant Guidance Included</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Students in the Executive Delta Cohort receive dedicated assistance to structure their business proposals for KSUM Idea Grants, Innovation Funding & Angel Investor pitching.
                </p>
              </div>
            )}

            {/* CTA & Actions */}
            <div className="pt-4 border-t border-[#e5eaf1] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={onResetQuiz}
                className="text-xs font-semibold text-[#617087] hover:text-[#06142d] underline transition-colors"
              >
                ← Retake Assessment Quiz
              </button>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <a
                  href="#direct-enroll"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-[#0866ff] hover:bg-[#0052cc] text-white font-bold text-base shadow-xl shadow-[#0866ff]/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <span>Reserve Seat in {currentCourse.title}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
