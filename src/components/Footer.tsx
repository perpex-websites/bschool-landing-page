'use client';

import React from 'react';
import { ShieldCheck, Award, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#06142d] text-white pt-16 pb-12 border-t border-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-[#0866ff] flex items-center justify-center text-white font-extrabold text-xl">
                P
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                PERPEX <span className="text-[#0866ff]">B-SCHOOL</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              The next-generation practical business school for entrepreneurs, founders, and ambitious leaders. Empowering Delta Batch students to launch, raise grants, and scale.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <span className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#0866ff]" />
                100% Practical Capstone
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Award className="w-4 h-4 text-amber-400" />
                KSUM & Investor Mentorship
              </span>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">Program Tracks</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#assessment" className="hover:text-[#0866ff] transition-colors">GrowthX Online Base</a></li>
              <li><a href="#assessment" className="hover:text-[#0866ff] transition-colors">Hybrid Mentorship Track</a></li>
              <li><a href="#assessment" className="hover:text-[#0866ff] transition-colors">Executive Delta Cohort (₹95,000)</a></li>
              <li><a href="#outcomes" className="hover:text-[#0866ff] transition-colors">KSUM Grant Guidance</a></li>
            </ul>
          </div>

          {/* Social Proof & Outcomes */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">Batch Outcomes</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><span className="text-white font-medium">140+</span> Business Launches</li>
              <li><span className="text-white font-medium">₹1.2 Cr+</span> Grants & Seed Funding</li>
              <li><span className="text-white font-medium">98.4%</span> Completion Rate</li>
              <li><span className="text-white font-medium">4.9 / 5</span> Student Rating</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">Admissions Desk</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0866ff]" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0866ff]" />
                <span>admissions@perpexbschool.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0866ff] shrink-0 mt-0.5" />
                <span>Perpex Innovation Hub, Startup Village / KSUM Zone</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Perpex B-School. Delta Batch Admissions. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Admissions Guidelines</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
