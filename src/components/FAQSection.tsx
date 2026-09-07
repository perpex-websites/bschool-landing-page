'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does the KSUM Grant guidance work in Delta Batch?',
      answer: 'For students enrolled in the Executive Delta Cohort (₹95,000) or Hybrid Track, our mentors provide direct assistance in drafting pitch decks, structuring financial projections, and defending business models according to Kerala Startup Mission (KSUM) Idea & Product grant standards.'
    },
    {
      question: 'I have zero prior business background. Can I join?',
      answer: 'Yes! The Delta program starts from absolute fundamentals in Module 1. We guide you step-by-step from problem validation to marketing execution. Our diagnostic quiz will also help match you to the right track level.'
    },
    {
      question: 'How do the 3 program tiers (GrowthX, Hybrid, Executive) differ?',
      answer: 'GrowthX is our self-paced online foundation program. Hybrid includes live weekly weekend strategy sessions and group case studies. The Executive Delta Cohort (₹95,000) is our flagship program with 1-on-1 mentor access, KSUM grant guidance, and direct angel investor pitch desks.'
    },
    {
      question: 'What is the weekly time commitment required?',
      answer: 'It depends on your track preference: GrowthX requires 3–5 hours/week, Hybrid requires 6–12 hours/week, and the Executive Delta Cohort requires 15+ hours/week for intensive execution.'
    },
    {
      question: 'Will I get assistance if I want to pitch to angel investors?',
      answer: 'Yes. At the end of the Executive Delta Batch, eligible founders participate in Perpex Angel Demo Day, where they present their validated business model to active angel investors and venture networks.'
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#f4f8ff] border-b border-[#e5eaf1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#0866ff] text-xs font-bold uppercase tracking-wider border border-[#0866ff]/20">
            <HelpCircle className="w-4 h-4 text-[#0866ff]" />
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06142d] tracking-tight">
            Have Questions About <span className="gradient-text">Delta Batch?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#617087]">
            Everything you need to know about enrollment, grants, and cohort structure.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#e5eaf1] shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-bold text-base sm:text-lg text-[#06142d]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 bg-[#0866ff] text-white border-[#0866ff]' : 'border-[#cbd5e1] text-[#617087]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#617087] leading-relaxed border-t border-slate-100">
                    {faq.answer}
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
