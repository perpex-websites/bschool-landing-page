'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SocialProofBar } from '@/components/SocialProofBar';
import { GrantAndOutcomeWall } from '@/components/GrantAndOutcomeWall';
import { InteractiveQuiz, QuizResult } from '@/components/InteractiveQuiz';
import { CourseRecommendationResult } from '@/components/CourseRecommendationResult';
import { MentorCarousel } from '@/components/MentorCarousel';
import { CurriculumBreakdown } from '@/components/CurriculumBreakdown';
import { FAQSection } from '@/components/FAQSection';
import { UrgentCTA } from '@/components/UrgentCTA';
import { Footer } from '@/components/Footer';
import { FloatingBottomBar } from '@/components/FloatingBottomBar';
import { X } from 'lucide-react';

export default function Home() {
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState<boolean>(false);

  const handleOpenQuiz = () => {
    const elem = document.getElementById('assessment');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsQuizModalOpen(true);
    }
  };

  const handleQuizComplete = (result: QuizResult) => {
    setQuizResult(result);
    setTimeout(() => {
      const resultElem = document.getElementById('matched-result');
      if (resultElem) {
        resultElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleResetQuiz = () => {
    setQuizResult(null);
    handleOpenQuiz();
  };

  return (
    <main className="min-h-screen bg-white text-[#06142d] selection:bg-[#0866ff] selection:text-white relative">
      
      {/* 1. Sticky Navigation Header */}
      <Header onOpenQuiz={handleOpenQuiz} />

      {/* 2. Enhanced Hero Section */}
      <Hero onOpenQuiz={handleOpenQuiz} />

      {/* 3. Social Proof & KSUM Metrics Bar */}
      <SocialProofBar />

      {/* 4. Student Outcomes & KSUM Grants Wall of Fame */}
      <GrantAndOutcomeWall />

      {/* 5. Dynamic Quiz Diagnostic or Single Course Result */}
      {quizResult ? (
        <CourseRecommendationResult
          result={quizResult}
          onResetQuiz={handleResetQuiz}
        />
      ) : (
        <InteractiveQuiz
          onComplete={handleQuizComplete}
        />
      )}

      {/* 6. Auto-Scrolling Mentor Carousel */}
      <MentorCarousel />

      {/* 7. Delta Batch Curriculum Modules */}
      <CurriculumBreakdown />

      {/* 8. FAQ Accordion */}
      <FAQSection />

      {/* 9. Urgent Batch Closing CTA */}
      <UrgentCTA onOpenQuiz={handleOpenQuiz} />

      {/* 10. Footer */}
      <Footer />

      {/* 11. Floating Sticky Bottom Action Bar (Appears on scroll) */}
      <FloatingBottomBar onOpenQuiz={handleOpenQuiz} />

      {/* Optional Quick Popup Modal Quiz Trigger */}
      {isQuizModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">
            <button
              onClick={() => setIsQuizModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-[#06142d] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <InteractiveQuiz
              onComplete={handleQuizComplete}
              isModal={true}
              onCloseModal={() => setIsQuizModalOpen(false)}
            />
          </div>
        </div>
      )}

    </main>
  );
}
