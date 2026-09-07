'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Sparkles, Clock, Target, Rocket, User, Mail, Phone, Award, ShieldCheck, Loader2 } from 'lucide-react';

export interface QuizResult {
  name: string;
  email: string;
  phone: string;
  timeAllocation: string;
  businessKnowledge: string;
  startupStatus: string;
  expectation: string;
  matchedTrack: 'growthx' | 'hybrid' | 'executive';
}

interface InteractiveQuizProps {
  onComplete: (result: QuizResult) => void;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  onComplete,
  isModal = false,
  onCloseModal
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const totalSteps = 5;

  // Form State
  const [name, setName] = useState('');
  const [timeAllocation, setTimeAllocation] = useState('');
  const [businessKnowledge, setBusinessKnowledge] = useState('');
  const [startupStatus, setStartupStatus] = useState('');
  const [expectation, setExpectation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDropdown, setPreferredDropdown] = useState('auto');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSelectTime = (val: string) => {
    setTimeAllocation(val);
    setErrorMsg('');
  };

  const handleSelectKnowledge = (val: string) => {
    setBusinessKnowledge(val);
    setErrorMsg('');
  };

  const handleSelectStatus = (val: string) => {
    setStartupStatus(val);
    setErrorMsg('');
  };

  const handleSelectExpectation = (val: string) => {
    setExpectation(val);
    setErrorMsg('');
  };

  const calculateMatch = (): 'growthx' | 'hybrid' | 'executive' => {
    if (preferredDropdown !== 'auto') {
      if (preferredDropdown === 'growthx') return 'growthx';
      if (preferredDropdown === 'hybrid') return 'hybrid';
      if (preferredDropdown === 'executive') return 'executive';
    }

    let score = 0;
    if (timeAllocation.includes('15+')) score += 3;
    else if (timeAllocation.includes('6–12')) score += 2;
    else score += 1;

    if (expectation.includes('Grants') || expectation.includes('Launch')) score += 3;
    else if (expectation.includes('Scale')) score += 2;
    else score += 1;

    if (startupStatus.includes('Active') || startupStatus.includes('Ideation')) score += 2;

    if (score >= 6) return 'executive'; // Executive Delta Cohort ₹95,000
    if (score >= 4) return 'hybrid';    // Hybrid Track
    return 'growthx';                   // GrowthX Base Track
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!name.trim()) {
        setErrorMsg('Please enter your full name to proceed.');
        return;
      }
    } else if (currentStep === 2) {
      if (!timeAllocation) {
        setErrorMsg('Please select your weekly time allocation.');
        return;
      }
    } else if (currentStep === 3) {
      if (!businessKnowledge) {
        setErrorMsg('Please select your current level of business knowledge.');
        return;
      }
    } else if (currentStep === 4) {
      if (!startupStatus || !expectation) {
        setErrorMsg('Please answer both questions to unlock your course match.');
        return;
      }
    }

    setErrorMsg('');
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone) {
      setErrorMsg('Please enter both your email address and mobile number.');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate 1.2-second high-value analysis calculation
    setTimeout(() => {
      const matchedTrack = calculateMatch();
      const result: QuizResult = {
        name,
        email,
        phone,
        timeAllocation,
        businessKnowledge,
        startupStatus,
        expectation,
        matchedTrack
      };

      setIsAnalyzing(false);
      onComplete(result);
      if (onCloseModal) onCloseModal();
    }, 1200);
  };

  return (
    <div id="assessment" className={`w-full ${isModal ? 'p-2 sm:p-6' : 'py-12 bg-[#f4f8ff]'}`}>
      <div className={`mx-auto ${isModal ? 'max-w-2xl' : 'max-w-3xl px-4 sm:px-6'}`}>
        
        <div className="bg-white rounded-3xl shadow-2xl border border-[#e5eaf1] overflow-hidden transition-all">
          
          {/* Header Banner */}
          <div className="bg-[#06142d] text-white p-6 sm:p-8 relative">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0866ff]/20 text-[#0866ff] text-xs font-bold border border-[#0866ff]/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  Delta Program Finder & Diagnostic
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                  Find Your Ideal Delta Track
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Answer 5 brief questions to reveal your matched course tier & grant report.
                </p>
              </div>
              <div className="hidden sm:block text-right">
                <div className="text-xs text-slate-400 font-semibold">Step {currentStep} of {totalSteps}</div>
                <div className="text-xl font-extrabold text-[#0866ff]">{Math.round((currentStep / totalSteps) * 100)}%</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/10 h-2.5 rounded-full mt-6 overflow-hidden p-0.5">
              <div
                className="bg-gradient-to-r from-[#0866ff] via-cyan-400 to-[#0866ff] h-full rounded-full transition-all duration-500 ease-out shadow-xs"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8">
            
            {/* Animated Diagnostic Analyzing Screen */}
            {isAnalyzing ? (
              <div className="py-12 text-center space-y-4 animate-fade-in-up">
                <div className="w-16 h-16 rounded-2xl bg-[#f4f8ff] text-[#0866ff] flex items-center justify-center mx-auto shadow-md">
                  <Loader2 className="w-8 h-8 animate-spin" />
                </div>
                <h4 className="text-xl font-bold text-[#06142d]">
                  Analyzing Your Profile, {name}...
                </h4>
                <p className="text-xs sm:text-sm text-[#617087] max-w-sm mx-auto">
                  Calculating time commitment score, goal alignment & KSUM grant eligibility...
                </p>
              </div>
            ) : (
              <>
                {errorMsg && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                    {errorMsg}
                  </div>
                )}

                {/* STEP 1: Name */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in-up">
                    <div>
                      <label className="block text-sm font-extrabold text-[#06142d] mb-1">
                        What is your full name?
                      </label>
                      <p className="text-xs text-[#617087] mb-4">
                        We use this to personalize your diagnostic report & course recommendation.
                      </p>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#617087]" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => { setName(e.target.value); setErrorMsg(''); }}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#e5eaf1] focus:border-[#0866ff] focus:ring-2 focus:ring-[#0866ff]/20 text-[#06142d] text-base font-medium outline-none transition-all"
                          autoFocus
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#f4f8ff] border border-[#0866ff]/15 flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#0866ff] shrink-0" />
                      <p className="text-xs text-[#617087]">Your information is strictly kept confidential and used solely for admissions evaluation.</p>
                    </div>
                  </div>
                )}

                {/* STEP 2: Time Allocation */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in-up">
                    <div>
                      <h4 className="text-base sm:text-lg font-extrabold text-[#06142d] mb-1">
                        Possible time allocation per week?
                      </h4>
                      <p className="text-xs text-[#617087] mb-4">
                        Select how many hours you can commit towards learning, execution & mentorship.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3.5">
                      {[
                        {
                          id: '3-5',
                          title: '⚡ 3–5 Hours / Week',
                          subtitle: 'Flexible Self-Paced Learning',
                          desc: 'Ideal for working professionals looking for foundational concepts at their own pace.'
                        },
                        {
                          id: '6-12',
                          title: '🚀 6–12 Hours / Week',
                          subtitle: 'Balanced Live Cohort + Projects',
                          desc: 'Great for active entrepreneurs and professionals scaling skills alongside work.'
                        },
                        {
                          id: '15+',
                          title: '🔥 15+ Hours / Week',
                          subtitle: 'Intense Execution & Grant Mentorship',
                          desc: 'Full dedication to launch business, raise KSUM grants & pitch to angel investors.'
                        }
                      ].map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => handleSelectTime(option.title)}
                          className={`text-left p-4 rounded-2xl border transition-all flex items-start justify-between gap-4 ${
                            timeAllocation === option.title
                              ? 'bg-[#f4f8ff] border-[#0866ff] ring-2 ring-[#0866ff]/20 shadow-md'
                              : 'border-[#e5eaf1] hover:border-[#0866ff]/40 bg-white'
                          }`}
                        >
                          <div>
                            <div className="font-extrabold text-sm text-[#06142d]">{option.title}</div>
                            <div className="text-xs font-bold text-[#0866ff] mt-0.5">{option.subtitle}</div>
                            <div className="text-xs text-[#617087] mt-1">{option.desc}</div>
                          </div>
                          <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-all ${
                            timeAllocation === option.title ? 'bg-[#0866ff] border-[#0866ff] text-white shadow-sm' : 'border-[#cbd5e1]'
                          }`}>
                            {timeAllocation === option.title && <CheckCircle className="w-4 h-4" />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 3: Business Knowledge */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in-up">
                    <div>
                      <h4 className="text-base sm:text-lg font-extrabold text-[#06142d] mb-1">
                        Current level of business knowledge?
                      </h4>
                      <p className="text-xs text-[#617087] mb-4">
                        Help us customize your learning path from beginner modules to advanced venture scaling.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3.5">
                      {[
                        {
                          id: 'beginner',
                          title: '🟢 Beginner (New to Business)',
                          desc: 'I have an idea or curiosity, but need core business & marketing fundamentals.'
                        },
                        {
                          id: 'intermediate',
                          title: '🟡 Intermediate (Know Concepts, Need Execution)',
                          desc: 'I understand marketing & business, but need practical frameworks & mentor guidance.'
                        },
                        {
                          id: 'advanced',
                          title: '🔴 Advanced (Founder / Executive)',
                          desc: 'I have business experience and want to scale revenue, raise grants & get investor ready.'
                        }
                      ].map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => handleSelectKnowledge(option.title)}
                          className={`text-left p-4 rounded-2xl border transition-all flex items-start justify-between gap-4 ${
                            businessKnowledge === option.title
                              ? 'bg-[#f4f8ff] border-[#0866ff] ring-2 ring-[#0866ff]/20 shadow-md'
                              : 'border-[#e5eaf1] hover:border-[#0866ff]/40 bg-white'
                          }`}
                        >
                          <div>
                            <div className="font-extrabold text-sm text-[#06142d]">{option.title}</div>
                            <div className="text-xs text-[#617087] mt-1">{option.desc}</div>
                          </div>
                          <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-all ${
                            businessKnowledge === option.title ? 'bg-[#0866ff] border-[#0866ff] text-white shadow-sm' : 'border-[#cbd5e1]'
                          }`}>
                            {businessKnowledge === option.title && <CheckCircle className="w-4 h-4" />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 4: Startup Status & Expectation */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-fade-in-up">
                    
                    {/* Part A */}
                    <div>
                      <label className="block text-sm font-extrabold text-[#06142d] mb-2">
                        Are you currently running any business or startup?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          '💡 Ideation Phase / Aspiring Founder',
                          '🚀 Active Startup (Early Stage)',
                          '🏢 Scaled Business / Family Venture',
                          '💼 Working Professional / Employee'
                        ].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => handleSelectStatus(item)}
                            className={`text-left p-3.5 rounded-xl text-xs font-bold border transition-all ${
                              startupStatus === item
                                ? 'bg-[#0866ff] text-white border-[#0866ff] shadow-sm'
                                : 'bg-white text-[#06142d] border-[#e5eaf1] hover:border-[#0866ff]/40'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Part B */}
                    <div className="pt-3 border-t border-[#e5eaf1]">
                      <label className="block text-sm font-extrabold text-[#06142d] mb-2">
                        What are you expecting most from Delta Batch?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          '💰 Secure KSUM Grants & Investor Funding',
                          '🚀 Launch a Validated Business from Scratch',
                          '📈 Scale Revenue & Growth Marketing Funnels',
                          '🤝 High-Value Founder Network & Mentorship'
                        ].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => handleSelectExpectation(item)}
                            className={`text-left p-3.5 rounded-xl text-xs font-bold border transition-all ${
                              expectation === item
                                ? 'bg-[#06142d] text-white border-[#06142d] shadow-sm'
                                : 'bg-white text-[#06142d] border-[#e5eaf1] hover:border-[#06142d]/40'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* STEP 5: Contact Details */}
                {currentStep === 5 && (
                  <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in-up">
                    
                    <div className="text-center pb-2">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 mb-2">
                        <Sparkles className="w-6 h-6 animate-pulse" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-extrabold text-[#06142d]">
                        Almost Done, {name || 'Future Founder'}!
                      </h4>
                      <p className="text-xs text-[#617087]">
                        Enter your details to unlock your custom diagnostic report & course match.
                      </p>
                    </div>

                    {/* Dropdown Preference */}
                    <div>
                      <label className="block text-xs font-bold text-[#06142d] uppercase tracking-wider mb-1">
                        Program Interest Preference
                      </label>
                      <select
                        value={preferredDropdown}
                        onChange={(e) => setPreferredDropdown(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#e5eaf1] focus:border-[#0866ff] text-sm text-[#06142d] font-bold outline-none bg-white shadow-xs"
                      >
                        <option value="auto">✨ Auto-Calculate Best Match (Recommended)</option>
                        <option value="growthx">GrowthX Track (Online Base Price)</option>
                        <option value="hybrid">Hybrid Track (Online + Live Mentorship)</option>
                        <option value="executive">Delta Executive B-School Cohort (₹95,000 Premium Tier)</option>
                      </select>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-[#06142d] uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#617087]" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); setErrorMsg(''); }}
                          placeholder="name@company.com"
                          required
                          className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#e5eaf1] focus:border-[#0866ff] text-sm outline-none font-medium"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-[#06142d] uppercase tracking-wider mb-1">
                        Mobile Number / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#617087]" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => { setPhone(e.target.value); setErrorMsg(''); }}
                          placeholder="+91 98765 43210"
                          required
                          className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#e5eaf1] focus:border-[#0866ff] text-sm outline-none font-medium"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#0866ff] hover:bg-[#0052cc] text-white font-extrabold text-base shadow-xl shadow-[#0866ff]/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                    >
                      <Sparkles className="w-5 h-5 text-amber-300" />
                      <span>Reveal My Matched Delta Course →</span>
                    </button>

                    <p className="text-[11px] text-center text-[#617087]">
                      By submitting, you agree to receive Delta Cohort admissions counseling & grant information.
                    </p>

                  </form>
                )}

                {/* Footer Step Controls */}
                {currentStep < 5 && (
                  <div className="mt-8 pt-6 border-t border-[#e5eaf1] flex items-center justify-between">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={() => setCurrentStep(prev => prev - 1)}
                        className="flex items-center gap-1.5 text-xs font-bold text-[#617087] hover:text-[#06142d] transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Previous</span>
                      </button>
                    ) : <div />}

                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0866ff] hover:bg-[#0052cc] text-white font-extrabold text-sm shadow-md shadow-[#0866ff]/20 transition-all"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
