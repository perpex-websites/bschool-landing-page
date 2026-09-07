'use client';

import React from 'react';
import { ExternalLink, Sparkles, Star, Award, ShieldCheck, CheckCircle2, TrendingUp, Users } from 'lucide-react';

export const MentorCarousel: React.FC = () => {
  const mentors = [
    {
      name: 'Vikramaditya Nair',
      role: 'Strategy Consultant & Venture Advisor',
      company: 'Ex-McKinsey',
      expertise: 'Business Scaling & KSUM Grants',
      impact: 'Guided 40+ KSUM Grant Applications',
      bio: 'Ex-McKinsey strategist specializing in structuring financial unit economics and government innovation grant proposals.',
      badge: 'Senior Advisor',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      name: 'Dr. Meera Pillai',
      role: 'Angel Investor & Former Incubator Director',
      company: 'Angel Network',
      expertise: 'Investor Pitch Decks & Valuation',
      impact: 'Evaluated 500+ Founder Pitch Decks',
      bio: 'Active angel investor who coaches Delta Cohort founders through live mock investor defenses and valuation negotiation.',
      badge: 'Investor Mentor',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      name: 'Siddharth Menon',
      role: 'Growth Strategist & Serial Founder',
      company: 'Ex-GrowthX',
      expertise: 'Performance Ads & Funnel Scaling',
      impact: 'Scaled Ad Spend to ₹50L/mo with 4.8x ROAS',
      bio: 'Growth lead who teaches performance advertising, ad copy psychology, and high-converting customer acquisition funnels.',
      badge: 'Growth Lead',
      badgeBg: 'bg-blue-50 text-[#0866ff] border-[#0866ff]/20'
    },
    {
      name: 'Ananya Raghavan',
      role: 'Product Specialist & Startup Advisor',
      company: 'Ex-Google',
      expertise: 'MVP Acceleration & Product-Market Fit',
      impact: 'Ex-Google Product Lead',
      bio: 'Helps early-stage founders rapidly test MVPs, establish user feedback loops, and iterate product features.',
      badge: 'Product Advisor',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      name: 'Karthik Varma',
      role: 'Corporate Lawyer & IP Compliance Expert',
      company: 'LegalTech Founder',
      expertise: 'KSUM Grant Compliance & IP Filing',
      bio: 'Legal advisor specializing in government grant compliance, patent filings, and founder cap table equity structures.',
      badge: 'Legal & IP Expert',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    }
  ];

  const doubleMentors = [...mentors, ...mentors];

  return (
    <section id="mentors" className="py-16 md:py-24 bg-[#f4f8ff] text-[#06142d] overflow-hidden border-b border-[#e5eaf1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center space-y-4">
        
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#0866ff] text-xs font-extrabold uppercase tracking-wider border border-[#0866ff]/20">
          <Sparkles className="w-4 h-4 text-amber-500" />
          Industry Mentors & Practitioners
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#06142d]">
          Learn Directly From <span className="text-[#0866ff]">World-Class Founders & Strategists</span>
        </h2>
        <p className="text-sm sm:text-base text-[#617087] max-w-2xl mx-auto leading-relaxed font-normal">
          No pure academics. Our Delta Batch mentors have built companies, raised venture capital, and led growth teams.
        </p>
      </div>

      {/* Auto Scrolling Marquee Track Container */}
      <div className="relative w-full overflow-hidden py-6">
        
        {/* Soft edge blur overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#f4f8ff] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#f4f8ff] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="animate-marquee flex gap-6">
          {doubleMentors.map((mentor, idx) => (
            <div
              key={idx}
              className="w-[330px] sm:w-[370px] shrink-0 p-6 sm:p-7 rounded-3xl bg-white border border-[#e5eaf1] shadow-xl hover:shadow-2xl hover:border-[#0866ff] transition-all duration-300 group space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Mentor Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    {/* Avatar Badge */}
                    <div className="w-13 h-13 rounded-2xl bg-[#0866ff] text-white font-extrabold text-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform shrink-0">
                      {mentor.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base sm:text-lg text-[#06142d] group-hover:text-[#0866ff] transition-colors leading-tight">
                        {mentor.name}
                      </h3>
                      <span className="text-[11px] font-extrabold text-[#0866ff] bg-[#0866ff]/10 px-2.5 py-0.5 rounded-md border border-[#0866ff]/20 inline-block mt-1">
                        {mentor.company}
                      </span>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full border text-[10px] font-extrabold shrink-0 ${mentor.badgeBg}`}>
                    {mentor.badge}
                  </span>
                </div>

                {/* Mentor Role */}
                <p className="text-xs font-semibold text-[#617087]">
                  {mentor.role}
                </p>

                {/* Impact Highlight Box */}
                <div className="p-3 rounded-2xl bg-[#f4f8ff] border border-[#0866ff]/15 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#0866ff] shrink-0" />
                  <span className="text-xs font-extrabold text-[#06142d]">
                    {mentor.impact}
                  </span>
                </div>

                {/* Bio Quote */}
                <p className="text-xs sm:text-sm text-[#617087] leading-relaxed italic font-normal bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  "{mentor.bio}"
                </p>

              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#e5eaf1] flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Verified Mentor
                </span>

                <span className="text-[#0866ff] group-hover:underline flex items-center gap-1 font-extrabold cursor-pointer">
                  Profile <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
