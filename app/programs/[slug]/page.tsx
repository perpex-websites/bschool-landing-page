"use client";

import { use, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { programsData } from "../data";

export default function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const searchParams = useSearchParams();
  const userName = searchParams.get("name") || "";
  const userTime = searchParams.get("time") || "5–7 Hours / Week";
  const userStatus = searchParams.get("status") || "Early Stage Builder";
  const userGoal = searchParams.get("goal") || "Launch & Scale Business";
  const slug = resolvedParams.slug || "growthx";
  
  const program = programsData[slug] || programsData.growthx;

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [enrolled, setEnrolled] = useState(false);
  const [form, setForm] = useState({
    name: userName,
    phone: "",
    email: "",
    note: ""
  });

  function handleEnroll(e: React.FormEvent) {
    e.preventDefault();
    setEnrolled(true);
  }

  return (
    <div className="program-page">
      {/* Sticky Header */}
      <header className="nav">
        <div className="nav-inner">
          <Link href="/" className="logo">
            perpe<span>x</span>
          </Link>
          <div className="nav-prog-title">
            <span className="badge-pill">{program.badge}</span>
          </div>
          <a href="#enroll" className="nav-cta">
            Reserve Seat <span>→</span>
          </a>
        </div>
      </header>

      {/* SECTION 01: Landing Page Style Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="user-greeting-pill">
            🎯 Personalized Path for <strong>{userName || "You"}</strong>
          </div>

          <h1>
            YOUR CUSTOM PATH TO
            <em>build & scale.</em>
          </h1>

          <p className="hero-copy">
            Based on your diagnostic profile, here is your custom business recommendation.
          </p>

          <a className="hero-pill-btn" href="#matched-program">
            <span>See Your Matched Program</span>
            <div className="hero-pill-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </div>
          </a>

          <div className="hero-trust-line">
            <span className="star">⭐ 4.9 / 5</span>
            <span className="dot">•</span>
            <span>Delta Batch 2026</span>
            <span className="dot">•</span>
            <span>KSUM Grant Guidance</span>
            <span className="dot">•</span>
            <span className="seats-left">{program.seatsLeft} Seats Left</span>
          </div>
        </div>
      </section>

      {/* SECTION 02: Matched Program Showcase */}
      <section className="section prog-showcase-section" id="matched-program">
        <div className="section-label">01 — YOUR MATCHED PROGRAM</div>
        <div className="split" style={{ marginBottom: "40px" }}>
          <h2>
            Recommended Path:<br />
            <span>{program.name}</span>
          </h2>
          <div>
            <p className="lead">{program.description}</p>
          </div>
        </div>

        {/* Clean Showcase Container */}
        <div className="unified-showcase-card">
          {/* Horizontal Specs Hairline Row */}
          <div className="specs-hairline-row">
            <div className="hairline-col">
              <span className="col-label">Format</span>
              <strong className="col-val">{program.format}</strong>
            </div>
            <div className="col-divider" />
            <div className="hairline-col">
              <span className="col-label">Duration</span>
              <strong className="col-val">{program.duration}</strong>
            </div>
            <div className="col-divider" />
            <div className="hairline-col">
              <span className="col-label">Commitment</span>
              <strong className="col-val">{program.weeklyCommitment}</strong>
            </div>
            <div className="col-divider" />
            <div className="hairline-col highlight-col">
              <span className="col-label">Investment</span>
              <strong className="col-val">{program.price}</strong>
            </div>
          </div>

          {/* Diagnostic Fit Accent Banner */}
          <div className="diag-accent-banner">
            <div className="banner-top">
              <span className="match-tag-pill">✓ {program.matchScore}% Diagnostic Match</span>
              <div className="banner-tags">
                <span>⏱️ {userTime}</span>
                <span className="tag-dot">•</span>
                <span>🚀 {userStatus}</span>
                <span className="tag-dot">•</span>
                <span>🎯 {userGoal}</span>
              </div>
            </div>
            <p className="banner-text">
              Your diagnostic commitment level and business objectives directly align with the <strong>{program.name}</strong> curriculum.
            </p>
          </div>

          {/* Action Row */}
          <div className="showcase-action-row">
            <a href="#enroll" className="primary-btn wide-btn">
              Apply For {program.name} <span>→</span>
            </a>
            <a href="#curriculum" className="text-btn">
              Explore 6-Module Roadmap <span>↓</span>
            </a>
            <span className="seats-text">
              🔥 <strong>{program.seatsLeft} Seats Left</strong> for {program.batchStarts}
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 03: Why Fit Section */}
      <section className="section prog-fit-section">
        <div className="section-label">02 — WHY THIS FITS YOU</div>
        <div className="split">
          <h2>
            Tailored to your<br />
            <span>stage & goals.</span>
          </h2>
          <div>
            <p className="lead">{program.whyFitReason}</p>
          </div>
        </div>

        <div className="fit-bullets-grid">
          {program.fitBullets.map((bullet, idx) => (
            <div className="fit-bullet-card" key={idx}>
              <div className="check-icon">✓</div>
              <p>{bullet}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 04: Curriculum Roadmap Section */}
      <section className="section dark-section" id="curriculum">
        <div className="section-label light">03 — THE ROADMAP</div>
        <div className="big-statement" style={{ margin: "30px 0 60px" }}>
          Structured 6-Module<br />
          <em>action-oriented</em> <strong>curriculum.</strong>
        </div>

        <div className="roadmap-grid">
          {program.modules.map((mod) => (
            <div className="module-card" key={mod.number}>
              <div className="module-num">{mod.number}</div>
              <h3>{mod.title}</h3>
              <p className="mod-desc">{mod.description}</p>
              <div className="topics-list">
                {mod.topics.map((t, i) => (
                  <span className="topic-tag" key={i}>• {t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 05: Outcomes Section */}
      <section className="section prog-outcomes">
        <div className="section-label">04 — YOUR TANGIBLE OUTCOMES</div>
        <div className="split">
          <h2>What you’ll exit<br /><span>this program with.</span></h2>
          <p className="lead">Education is measured by what you can actually execute when you finish.</p>
        </div>

        <div className="outcomes-grid">
          {program.outcomes.map((outcome, idx) => (
            <div className="outcome-card" key={idx}>
              <span className="out-num">0{idx + 1}</span>
              <h4>{outcome}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 06: Mentors Section */}
      <section className="section mentors">
        <div className="section-label">05 — MENTORS & OPERATORS</div>
        <div className="split">
          <h2>Learn alongside<br /><span>proven practitioners.</span></h2>
          <p className="lead">Direct guidance from founders and venture builders who bring field-tested insights.</p>
        </div>

        <div className="mentor-track" style={{ overflow: "visible", flexWrap: "wrap" }}>
          {program.mentors.map((m, idx) => (
            <div className="mentor-card" key={idx} style={{ minWidth: "320px", flex: "1" }}>
              <div className="avatar">{m.avatar}</div>
              <div>
                <span>{m.company.toUpperCase()}</span>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 07: Enrollment Form Section */}
      <section className="section enroll-section" id="enroll">
        <div className="enroll-box">
          <div className="enroll-info">
            <div className="section-label light">06 — NEXT STEP</div>
            <h2>Ready to start your<br /><em>{program.name}?</em></h2>
            <p>
              Reserve your seat for <strong>{program.batchStarts}</strong>. Our admissions team will get in touch within 24 hours to confirm your fit and answer any questions.
            </p>
            <div className="price-tag-big">
              <span>Program Fee:</span>
              <strong>{program.price}</strong>
            </div>
          </div>

          <div className="enroll-form-card">
            {enrolled ? (
              <div className="enrolled-success">
                <div className="success-icon">✓</div>
                <h3>Seat Reserved!</h3>
                <p>
                  Thank you, <strong>{form.name || "Founder"}</strong>! We have received your application for <strong>{program.name}</strong>. Our admissions counselor will call you at <strong>{form.phone}</strong> shortly.
                </p>
                <Link href="/" className="primary-btn wide-btn" style={{ marginTop: "20px", display: "inline-block", textAlign: "center" }}>
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleEnroll}>
                <h3>Confirm Your Application</h3>
                <p className="form-sub">No immediate payment required. Secure your spot in the batch.</p>

                <label>
                  Full Name
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                  />
                </label>

                <label>
                  Phone / WhatsApp Number
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                  />
                </label>

                <label>
                  Email Address
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                </label>

                <button type="submit" className="primary-btn wide-btn">
                  Reserve My Seat Now <span>→</span>
                </button>
                <small className="form-disclaimer">
                  🔒 100% Privacy. We respect your data.
                </small>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 08: Program FAQs */}
      <section className="section faq">
        <div className="section-label">07 — FREQUENTLY ASKED QUESTIONS</div>
        <div className="split">
          <h2>Program specific<br /><span>details.</span></h2>
          <p className="lead">Common questions about {program.name}.</p>
        </div>

        <div className="faq-list">
          {program.faqs.map((faq, idx) => (
            <div
              className="faq-row"
              key={idx}
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
            >
              <span>0{idx + 1}</span>
              <h3>{faq.question}</h3>
              <b>{activeFaq === idx ? "−" : "+"}</b>
              {activeFaq === idx && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="logo">
          perpe<span>x</span>
        </div>
        <p>Practical business learning for people building what’s next.</p>
        <small>© 2026 PerpeX Practical B-School</small>
      </footer>
    </div>
  );
}
