 "use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Answer = string;
type Answers = Record<number, Answer>;

const questions = [
  {
    title: "Where are you right now in your business journey?",
    subtitle: "There is no right or wrong answer.",
    options: [
      ["idea", "I have an idea but haven’t started."],
      ["planning", "I’m planning to start a business."],
      ["business", "I’m already running a business."],
      ["startup", "I’m building or growing a startup."]
    ]
  },
  {
    title: "How much time can you realistically dedicate each week?",
    subtitle: "Choose what you can sustain — not your ideal.",
    options: [
      ["low", "2–4 hours"],
      ["mid", "5–7 hours"],
      ["high", "8–12 hours"],
      ["deep", "12+ hours"]
    ]
  },
  {
    title: "How would you describe your current business knowledge?",
    subtitle: "Think about what you can confidently apply.",
    options: [
      ["beginner", "I’m completely new to business."],
      ["basic", "I understand the basics."],
      ["practical", "I have some practical experience."],
      ["advanced", "I have strong business experience."]
    ]
  },
  {
    title: "What best describes your current situation?",
    subtitle: "This helps us understand your context.",
    options: [
      ["student", "Student"],
      ["professional", "Working professional"],
      ["entrepreneur", "Entrepreneur / business owner"],
      ["founder", "Startup founder / team member"]
    ]
  },
  {
    title: "What is your primary goal right now?",
    subtitle: "Choose the outcome that matters most.",
    options: [
      ["learn", "Understand business fundamentals."],
      ["start", "Start my own business."],
      ["grow", "Grow my existing business."],
      ["scale", "Build and scale a startup."]
    ]
  },
  {
    title: "What are you mainly looking for from PerpeX?",
    subtitle: "Pick the experience you value most.",
    options: [
      ["structure", "Structured business learning"],
      ["execution", "Practical execution"],
      ["mentorship", "Mentorship and feedback"],
      ["community", "Community and networking"]
    ]
  }
];

const programs = {
  growthx: {
    name: "GrowthX",
    eyebrow: "Your recommended path",
    format: "Online",
    price: "Accessible entry path",
    description: "A focused online path for building your business foundations, understanding the essentials and developing a practical entrepreneurial mindset.",
    bullets: ["Structured online learning", "Business fundamentals", "Practical frameworks", "Flexible weekly commitment"],
  },
  hybrid: {
    name: "Online + Hybrid",
    eyebrow: "Your recommended path",
    format: "Online + Hybrid",
    price: "Middle-tier experience",
    description: "A deeper learning experience that combines online structure with richer interaction, application and guided learning.",
    bullets: ["Online learning", "Hybrid interaction", "Practical application", "More guided support"],
  },
  cohort: {
    name: "PerpeX Cohort B-School",
    eyebrow: "Your recommended path",
    format: "Premium cohort experience",
    price: "₹95,000",
    description: "An immersive cohort-based business experience for people ready to go deeper into business thinking, execution, mentorship and community.",
    bullets: ["Cohort-based learning", "Mentorship & feedback", "Practical execution", "Premium peer community"],
  }
};

function recommend(a: Answers) {
  let score = { growthx: 0, hybrid: 0, cohort: 0 };
  const add = (p: keyof typeof score, n: number) => (score[p] += n);

  if (["idea", "planning"].includes(a[0])) add("growthx", 4);
  if (a[0] === "business") { add("hybrid", 4); add("cohort", 2); }
  if (a[0] === "startup") { add("cohort", 5); add("hybrid", 2); }

  if (["low"].includes(a[1])) add("growthx", 4);
  if (a[1] === "mid") add("hybrid", 4);
  if (["high", "deep"].includes(a[1])) add("cohort", 4);

  if (a[2] === "beginner") add("growthx", 4);
  if (a[2] === "basic") { add("growthx", 2); add("hybrid", 2); }
  if (a[2] === "practical") { add("hybrid", 3); add("cohort", 2); }
  if (a[2] === "advanced") add("cohort", 5);

  if (["student", "professional"].includes(a[3])) add("growthx", 2);
  if (a[3] === "entrepreneur") add("hybrid", 3);
  if (a[3] === "founder") add("cohort", 4);

  if (a[4] === "learn") add("growthx", 3);
  if (a[4] === "start") { add("growthx", 2); add("hybrid", 2); }
  if (a[4] === "grow") add("hybrid", 4);
  if (a[4] === "scale") add("cohort", 5);

  if (a[5] === "structure") add("growthx", 2);
  if (a[5] === "execution") { add("hybrid", 3); add("cohort", 2); }
  if (a[5] === "mentorship") add("cohort", 5);
  if (a[5] === "community") { add("hybrid", 2); add("cohort", 4); }

  return (Object.entries(score).sort((x, y) => y[1] - x[1])[0]?.[0] || "growthx") as keyof typeof programs;
}

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [lead, setLead] = useState({ name: "", phone: "", email: "" });
  const [result, setResult] = useState<keyof typeof programs | null>(null);
  const [faq, setFaq] = useState<number | null>(null);

  const program = useMemo(() => result ? programs[result] : null, [result]);

  function startQuiz() {
    setOpen(true);
    setStep(0);
    setResult(null);
  }

  function choose(value: string) {
    const next = { ...answers, [step]: value };
    setAnswers(next);
    if (step < questions.length - 1) setTimeout(() => setStep(step + 1), 180);
    else setTimeout(() => setStep(questions.length), 180);
  }

  function submitLead(e: React.FormEvent) {
    e.preventDefault();
    const recommended = recommend(answers);
    
    const timeMap: Record<string, string> = {
      low: "2–4 Hours / Week",
      mid: "5–7 Hours / Week",
      high: "8–12 Hours / Week",
      deep: "12+ Hours / Week"
    };
    const statusMap: Record<string, string> = {
      student: "Student",
      professional: "Working Professional",
      entrepreneur: "Entrepreneur / Business Owner",
      founder: "Startup Founder"
    };
    const goalMap: Record<string, string> = {
      learn: "Understand Business Fundamentals",
      start: "Launch a Business from Scratch",
      grow: "Grow Existing Venture",
      scale: "Build & Scale Startup"
    };

    const timeLabel = timeMap[answers[1]] || "5–7 Hours / Week";
    const statusLabel = statusMap[answers[3]] || "Aspiring Entrepreneur";
    const goalLabel = goalMap[answers[4]] || "Build & Scale Business";

    setOpen(false);
    router.push(
      `/programs/${recommended}?name=${encodeURIComponent(lead.name)}&time=${encodeURIComponent(timeLabel)}&status=${encodeURIComponent(statusLabel)}&goal=${encodeURIComponent(goalLabel)}`
    );
  }

  function closeQuiz() {
    setOpen(false);
    setStep(0);
  }

  return (
    <main>
      <header className="nav">
        <div className="nav-inner">
          <a className="logo" href="#">perpe<span>x</span></a>
          <nav>
            <a href="#why">Why PerpeX</a>
            <a href="#learn">What you’ll learn</a>
            <a href="#mentors">Mentors</a>
            <a href="#faq">FAQ</a>
          </nav>
          <button className="nav-cta" onClick={startQuiz}>Find My Best Program <span>↗</span></button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-ref-brand">P E R P E X</div>
          <h1>
            YOU KNOW YOU CAN
            <em>do more.</em>
          </h1>
          <p className="hero-copy">But somehow, you’re still here.</p>
          
          <button className="hero-pill-btn" onClick={startQuiz}>
            <span>Yes, we can help you get that</span>
            <div className="hero-pill-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </button>

          <div className="hero-trust-line">
            <span className="star">⭐ 4.9 / 5</span>
            <span className="dot">•</span>
            <span>Delta Batch 2026</span>
            <span className="dot">•</span>
            <span>KSUM Grant Guidance & Pitch Desk</span>
            <span className="dot">•</span>
            <span className="seats-left">35 Seats Left</span>
          </div>
        </div>
      </section>

      <section className="marquee"><div>LEARN WITH PURPOSE&nbsp;&nbsp; • &nbsp;&nbsp;APPLY WITH CONFIDENCE&nbsp;&nbsp; • &nbsp;&nbsp;BUILD WHAT’S NEXT&nbsp;&nbsp; • &nbsp;&nbsp;</div></section>

      <section className="section intro" id="why">
        <div className="section-label">01 — START WHERE YOU ARE</div>
        <div className="split">
          <h2>Business learning<br /><span>should fit the person.</span></h2>
          <div><p>Not everyone needs the same depth, format or pace. Your starting point matters.</p><p>PerpeX is designed to meet you where you are — then give you a structured path to move forward.</p></div>
        </div>
        <div className="identity-grid">
          {[
            ["01", "I have an idea.", "But I don’t know what to do first."],
            ["02", "I want to start.", "I need structure, not more random content."],
            ["03", "I run a business.", "I want stronger decisions and growth."],
            ["04", "I’m building a startup.", "I want deeper execution and perspective."]
          ].map(x => <div className="identity-card" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-label light">02 — THE GAP</div>
        <div className="big-statement">Knowing business concepts<br /><em>isn’t the same as</em><br /><strong>knowing how to build.</strong></div>
        <div className="gap-grid">
          {["Too much information", "Theory without application", "No feedback loop", "Learning without accountability"].map((x,i)=><div key={x}><span>0{i+1}</span><p>{x}</p></div>)}
        </div>
      </section>

      <section className="section method" id="learn">
        <div className="section-label">03 — THE PERPEX METHOD</div>
        <div className="split"><h2>Learn.<br />Apply.<br /><span>Build.</span></h2><p className="lead">We believe business education becomes valuable when knowledge moves out of your notebook and into the real world.</p></div>
        <div className="method-line">
          {["LEARN", "APPLY", "DISCUSS", "BUILD", "FEEDBACK", "IMPROVE"].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong>{i<5 && <i>→</i>}</div>)}
        </div>
      </section>

      <section className="section curriculum">
        <div className="section-label">04 — WHAT YOU’LL LEARN</div>
        <div className="split"><h2>From business<br /><span>basics to growth.</span></h2><p className="lead">A connected learning journey across the fundamentals that help entrepreneurs think, decide and execute better.</p></div>
        <div className="pillars">
          {[
            ["01","Business Foundations","Understand how businesses work and how entrepreneurs think."],
            ["02","Market & Customer","Find opportunities, understand customers and solve real problems."],
            ["03","Business Models","Design, test and improve a sustainable business model."],
            ["04","Marketing & Sales","Learn how businesses attract, convert and retain customers."],
            ["05","Finance","Understand pricing, profitability and business economics."],
            ["06","Strategy & Growth","Make better decisions and build a path for sustainable growth."]
          ].map(x=><div className="pillar" key={x[0]}><span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div><b>↗</b></div>)}
        </div>
      </section>

      <section className="assessment-band">
        <div><div className="section-label">05 — YOUR PATH</div><h2>Don’t choose a course.<br /><em>Find your fit.</em></h2><p>Answer six simple questions about your stage, goals, knowledge and time. We’ll recommend the PerpeX path that fits you best.</p></div>
        <button className="light-btn" onClick={startQuiz}>Start My Assessment <span>→</span></button>
      </section>

      <section className="section mentors" id="mentors">
        <div className="section-label">06 — THE PEOPLE</div>
        <div className="split"><h2>Learn from people<br /><span>who’ve been there.</span></h2><p className="lead">Mentors, operators and practitioners who bring real-world context into the learning experience.</p></div>
        <div className="mentor-track">
          {["MENTOR PROFILE", "MENTOR PROFILE", "MENTOR PROFILE"].map((x,i)=><div className="mentor-card" key={i}><div className="avatar">P</div><div><span>EXPERTISE / EXPERIENCE</span><h3>{x}</h3><p>Verified mentor details will appear here.</p></div></div>)}
        </div>
      </section>

      <section className="section proof">
        <div className="section-label">07 — SOCIAL PROOF</div>
        <div className="quote">“The goal isn’t to collect more information.<br /><span>It’s to become better at making business decisions.</span>”</div>
        <p className="proof-note">Real student stories and verified outcomes can be placed here as they become available.</p>
      </section>

      <section className="section faq" id="faq">
        <div className="section-label">08 — QUESTIONS</div>
        <div className="split"><h2>Before you<br /><span>take the next step.</span></h2><p className="lead">A few things people usually want to know before choosing their learning path.</p></div>
        <div className="faq-list">
          {[
            "Who is PerpeX for?",
            "Do I need to already have a business?",
            "Can complete beginners join?",
            "How much time do I need each week?",
            "What is the difference between the learning paths?",
            "How does the recommendation work?",
            "Is mentorship included?"
          ].map((q,i)=><div className="faq-row" key={q} onClick={()=>setFaq(faq===i?null:i)}><span>0{i+1}</span><h3>{q}</h3><b>{faq===i?"−":"+"}</b>{faq===i&&<p>PerpeX is designed to meet people at different stages. The assessment considers your current situation, knowledge, goals and available time before recommending one path.</p>}</div>)}
        </div>
      </section>

      <section className="final-cta">
        <div className="section-label light">09 — YOUR NEXT MOVE</div>
        <h2>Not sure where<br /><em>you belong?</em></h2>
        <p>Tell us where you are. We’ll help you find the PerpeX path that makes the most sense for you.</p>
        <button className="light-btn" onClick={startQuiz}>Find My Best Program <span>↗</span></button>
      </section>

      <footer><div className="logo">perpe<span>x</span></div><p>Practical business learning for people building what’s next.</p><small>© 2026 PerpeX Practical B-School</small></footer>

      {open && <div className="modal-backdrop">
        <div className="quiz-modal">
          <button className="close" onClick={closeQuiz}>×</button>
          {result && program ? (
            <div className="result">
              <div className="result-check">✓</div>
              <div className="eyebrow">YOUR RECOMMENDATION</div>
              <h2>{program.name}</h2>
              <p className="result-lead">Based on your current stage, goals, experience and available time, this is the PerpeX path we believe fits you best.</p>
              <div className="fit-card"><span>WHY THIS FITS YOU</span><strong>{program.format}</strong><p>{program.description}</p><div className="bullets">{program.bullets.map(b=><span key={b}>✓ {b}</span>)}</div><div className="price">{program.price}</div></div>
              <button className="primary-btn wide" onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}>Talk to PerpeX <span>→</span></button>
            </div>
          ) : step < questions.length ? (
            <div className="quiz">
              <div className="quiz-top"><span>BUSINESS FIT ASSESSMENT</span><strong>{step+1} / {questions.length}</strong></div>
              <div className="progress"><i style={{width:`${((step+1)/questions.length)*100}%`}} /></div>
              <div className="quiz-copy"><div className="eyebrow">QUESTION {String(step+1).padStart(2,"0")}</div><h2>{questions[step].title}</h2><p>{questions[step].subtitle}</p></div>
              <div className="answer-grid">{questions[step].options.map(([value,label])=><button className="answer" key={value} onClick={()=>choose(value)}><span>{label}</span><b>→</b></button>)}</div>
              {step>0 && <button className="back" onClick={()=>setStep(step-1)}>← Back</button>}
            </div>
          ) : (
            <form className="lead-form" onSubmit={submitLead}>
              <div className="eyebrow">ALMOST THERE</div><h2>Your recommendation is ready.</h2><p>Where should we send your personalized learning path?</p>
              <label>Name<input required value={lead.name} onChange={e=>setLead({...lead,name:e.target.value})} placeholder="Your name" /></label>
              <label>Phone number<input required value={lead.phone} onChange={e=>setLead({...lead,phone:e.target.value})} placeholder="+91" /></label>
              <label>Email<input required type="email" value={lead.email} onChange={e=>setLead({...lead,email:e.target.value})} placeholder="you@example.com" /></label>
              <button className="primary-btn wide" type="submit">Show My Recommendation <span>→</span></button>
              <small>No commitment. Your answers simply help us understand which path fits you.</small>
            </form>
          )}
        </div>
      </div>}
      <div id="contact" />
    </main>
  );
}