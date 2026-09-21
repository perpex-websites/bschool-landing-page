 "use client";

import { useEffect, useMemo, useState } from "react";
import ChoiceCard from "./ChoiceCard";
import { Challenge, recommendation, Stage, Time, videoByChallenge } from "../lib/recommendation";
import { track } from "../lib/analytics";

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

const stageOptions: { value: Stage; title: string; description: string }[] = [
  { value: "idea", title: "I HAVE AN IDEA", description: "I want to start something." },
  { value: "building", title: "I’M ALREADY BUILDING", description: "I’m already working on something." },
  { value: "learn", title: "I WANT TO LEARN BUSINESS", description: "I want to understand business better." },
  { value: "figuring", title: "I’M FIGURING IT OUT", description: "I know I want to do more, but I’m not sure what yet." }
];

const timeOptions: { value: Time; title: string }[] = [
  { value: "2-3", title: "2–3 HOURS" },
  { value: "4-6", title: "4–6 HOURS" },
  { value: "7-10", title: "7–10 HOURS" },
  { value: "10+", title: "10+ HOURS" }
];

const challengeOptions: { value: Challenge; title: string }[] = [
  { value: "start", title: "I DON’T KNOW WHERE TO START" },
  { value: "overthink", title: "I KEEP OVERTHINKING" },
  { value: "customers", title: "I CAN’T GET CUSTOMERS" },
  { value: "structure", title: "I NEED STRUCTURE" },
  { value: "grow", title: "I WANT TO GROW" }
];

export default function InteractiveExperience() {
  const [step, setStep] = useState<Step>(0);
  const [name, setName] = useState("");
  const [stage, setStage] = useState<Stage | null>(null);
  const [time, setTime] = useState<Time | null>(null);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [showPath, setShowPath] = useState(false);

  useEffect(() => track("lp_start"), []);

  const rec = useMemo(() => recommendation(stage || "idea", time || "4-6", challenge || "start"), [stage, time, challenge]);
  const video = videoByChallenge[challenge || "start"];

  const advance = (next: Step) => setStep(next);

  const selectStage = (value: Stage) => {
    setStage(value);
    track("stage_selected", { value });
    setTimeout(() => advance(4), 260);
  };

  const selectTime = (value: Time) => {
    setTime(value);
    track("time_selected", { value });
    setTimeout(() => advance(5), 260);
  };

  const selectChallenge = (value: Challenge) => {
    setChallenge(value);
    track("challenge_selected", { value });
    setTimeout(() => advance(6), 300);
  };

  if (showPath || step === 7) return <PostRecommendation name={name} rec={rec} video={video} />;

  return (
    <main className="min-h-screen bg-white">
      {/* Top progress bar (only active during steps 1-7) */}
      {step > 0 && (
        <div className="fixed left-0 top-0 z-50 h-1 bg-slate-100 w-full">
          <div
            className="h-full bg-gradient-to-r from-[#8A98AA] via-[#2B66FF] to-[#38bdf8] transition-all duration-500"
            style={{ width: `${Math.max(10, ((step + 1) / 7) * 100)}%` }}
          />
        </div>
      )}

      {/* Top right PerpeX mark matching reference image */}
      <div className="fixed top-4 right-5 sm:top-5 sm:right-6 z-40">
        <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#0D121A] shadow-md">
          <span className="text-[#FACC15] text-2xl font-black leading-none select-none">✻</span>
        </div>
      </div>

      <section className="min-h-screen px-5 py-6 sm:px-8 flex items-center justify-center">
        <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-5xl items-center justify-center">
          <div key={step} className="animate-enter w-full">
            {step === 0 && (
              <div className="relative mx-auto flex flex-col items-center justify-center text-center py-6">
                {/* Perpex Tag */}
                <div className="mb-4 sm:mb-6 text-[12px] sm:text-[13px] font-bold tracking-[0.55em] text-[#2B66FF] uppercase select-none">
                  P E R P E X
                </div>

                {/* Hero Title with exact font, size, leading & color from reference image */}
                <h1 className="flex flex-col items-center justify-center select-none tracking-normal">
                  <span className="text-[clamp(2.75rem,6.2vw,5.5rem)] font-extrabold tracking-[-0.02em] text-[#8A98AA] leading-[0.98]">
                    YOU KNOW YOU CAN
                  </span>
                  <span className="font-editorial text-[clamp(3.5rem,8vw,7rem)] font-normal italic tracking-normal text-[#2B66FF] lowercase leading-[0.92] mt-1 sm:mt-2">
                    do more.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-5 sm:mt-6 text-[16px] sm:text-[19px] font-normal text-slate-500 max-w-xl">
                  But somehow, you’re still here.
                </p>

                {/* Pill CTA Button */}
                <div className="mt-8 sm:mt-9 flex justify-center">
                  <button
                    onClick={() => advance(1)}
                    className="group inline-flex items-center gap-4 rounded-full bg-[#0D121A] pl-7 pr-2.5 py-2.5 text-[15px] font-medium text-white shadow-[0_12px_28px_rgba(13,18,26,0.18)] transition-all duration-200 hover:scale-[1.02] hover:bg-slate-900 cursor-pointer"
                  >
                    <span>Yes, we can help you get that</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2B66FF] text-white shadow-sm transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </button>
                </div>

                {/* Social Proof & Urgency Bar */}
                <div className="mt-9 sm:mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[12px] sm:text-[13.5px] text-slate-500 font-medium">
                  <span className="inline-flex items-center gap-1.5 text-[#EAB308]">
                    <span>★</span>
                    <span className="font-bold text-slate-700">4.9 / 5</span>
                  </span>
                  <span className="text-slate-300">•</span>
                  <span>Delta Batch 2026</span>
                  <span className="text-slate-300">•</span>
                  <span>KSUM Grant Guidance & Pitch Desk</span>
                  <span className="text-slate-300">•</span>
                  <span className="font-semibold text-[#2B66FF]">35 Seats Left</span>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="mx-auto max-w-xl">
                <StepLabel current={1} />
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-[#8A98AA]">What’s your name?</h2>
                <p className="mt-4 text-slate-500 text-base sm:text-lg">We’ll use it naturally throughout your journey.</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!name.trim()) return;
                    track("name_submitted", { name: name.trim() });
                    advance(2);
                  }}
                  className="mt-10"
                >
                  <input
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full border-b-2 border-slate-200 bg-transparent py-4 text-2xl font-semibold text-slate-800 outline-none transition focus:border-[#2563eb] placeholder:text-slate-300"
                  />
                  <button className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#0b1118] py-5 text-sm font-bold tracking-[0.15em] text-white hover:bg-slate-900 transition shadow-lg cursor-pointer">
                    <span>CONTINUE</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="mx-auto max-w-3xl text-center">
                <StepLabel current={2} />
                <div className="mb-4 text-sm font-bold text-[#2563eb]">Nice to meet you, {name || "there"}.</div>
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-[#8A98AA]">Let’s see where you are.</h2>
                <button
                  onClick={() => advance(3)}
                  className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#0b1118] px-9 py-4 text-sm font-bold tracking-wider text-white hover:bg-slate-900 transition shadow-lg cursor-pointer"
                >
                  <span>CONTINUE</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            )}

            {step === 3 && (
              <Question stepNumber={3} title="So, where are you right now?" subtitle="Choose the one that feels most like you.">
                {stageOptions.map((o) => (
                  <ChoiceCard
                    key={o.value}
                    title={o.title}
                    description={o.description}
                    selected={stage === o.value}
                    onClick={() => selectStage(o.value)}
                  />
                ))}
              </Question>
            )}

            {step === 4 && (
              <Question stepNumber={4} title="How much time can you give each week to learn business by doing business?" subtitle="Be realistic. There’s no right answer.">
                {timeOptions.map((o) => (
                  <ChoiceCard
                    key={o.value}
                    title={o.title}
                    selected={time === o.value}
                    onClick={() => selectTime(o.value)}
                  />
                ))}
              </Question>
            )}

            {step === 5 && (
              <Question stepNumber={5} title="What’s holding you back right now?" subtitle="Pick the biggest thing.">
                {challengeOptions.map((o) => (
                  <ChoiceCard
                    key={o.value}
                    title={o.title}
                    selected={challenge === o.value}
                    onClick={() => selectChallenge(o.value)}
                  />
                ))}
              </Question>
            )}

            {step === 6 && (
              <div className="mx-auto max-w-2xl">
                <StepLabel current={6} />
                <div className="mb-4 text-sm font-bold text-[#2563eb]">Okay. That tells us something.</div>
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-[#8A98AA]">Someone’s been where you are.</h2>
                <div className="mt-8 overflow-hidden rounded-3xl bg-slate-950 p-3 shadow-2xl">
                  <div className="relative aspect-[9/14] overflow-hidden rounded-2xl bg-gradient-to-br from-[#2563eb] via-[#102d48] to-slate-950">
                    <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                      <div>
                        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-white text-[#2563eb] shadow-lg">▶</div>
                        <p className="text-2xl font-black text-white">{video.title}</p>
                        <p className="mt-2 text-sm text-white/70">{video.role}</p>
                        <p className="mt-6 text-xs uppercase tracking-[.18em] text-white/50">Replace this block with your 10–20 sec vertical video</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => { track("human_video_viewed", { challenge }); advance(7); }}
                  className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#0b1118] py-5 text-sm font-bold tracking-[0.15em] text-white hover:bg-slate-900 transition shadow-lg cursor-pointer"
                >
                  <span>CONTINUE</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}

function StepLabel({ current }: { current: number }) {
  return <div className="mb-6 text-xs font-extrabold uppercase tracking-[0.25em] text-[#8A98AA]">STEP {current} / 7</div>;
}

function Question({
  stepNumber,
  title,
  subtitle,
  children
}: {
  stepNumber: number;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <StepLabel current={stepNumber} />
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-[#8A98AA] leading-tight">{title}</h2>
      <p className="mt-3 text-slate-500 text-base sm:text-lg">{subtitle}</p>
      <div className="mt-8 grid gap-3">{children}</div>
    </div>
  );
}

function PostRecommendation({ name, rec, video }: { name: string; rec: ReturnType<typeof recommendation>; video: { title: string; role: string } }) {
  return (
    <div className="bg-white">
      <section className="min-h-screen px-5 py-16 sm:px-8">
        <div className="mx-auto flex min-h-[80vh] max-w-4xl items-center">
          <div className="w-full animate-enter">
            <div className="mb-6 text-xs sm:text-sm font-extrabold tracking-[0.35em] text-[#2563eb] uppercase">P E R P E X</div>
            <div className="mb-4 text-sm font-bold text-[#2563eb]">Putting it together…</div>
            <h1 className="max-w-3xl text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.04em] text-[#8A98AA]">
              {name || "You"}, <span className="text-slate-800">HERE’S WHERE WE’D START.</span>
            </h1>
            <div className="mt-10 max-w-2xl rounded-3xl border border-blue-100 bg-[#f5fbff] p-7 sm:p-10 shadow-sm">
              <div className="text-xs font-black tracking-[.25em] text-[#2563eb] uppercase">{rec.title}</div>
              <h2 className="mt-3 text-3xl font-black text-slate-800">{rec.subtitle}</h2>
              <p className="mt-2 font-semibold text-[#2563eb]">{rec.promise}</p>
              <p className="mt-5 text-lg leading-8 text-slate-600">{rec.body}</p>
            </div>
            <a
              href="#path"
              onClick={() => track("programme_details_clicked")}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0b1118] px-8 py-4 text-sm font-bold tracking-[.12em] text-white hover:bg-slate-900 shadow-xl transition"
            >
              <span>SEE YOUR PATH</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="path" className="border-t border-slate-100 bg-[#f8fbfd] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-black tracking-[.25em] text-[#2563eb] uppercase">BYOB</p>
          <h2 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight text-[#8A98AA]">YOU DON’T JUST LEARN.</h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-4">
            {["LEARN", "DO", "GET FEEDBACK", "IMPROVE"].map((x, i) => (
              <div key={x} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:shadow-md">
                <span className="text-xs font-black text-[#2563eb]">0{i + 1}</span>
                <div className="mt-8 text-xl font-extrabold text-slate-800">{x}</div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-2xl font-bold text-slate-800">Learn Business by Doing Business.</p>
          <p className="mt-2 text-slate-500">Work on a real business journey — yours.</p>
          <div className="mt-12 flex flex-wrap gap-3 text-sm font-bold">
            {["FIND", "VALIDATE", "BUILD", "SELL", "GROW"].map((x) => (
              <span key={x} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-slate-700 shadow-sm">{x}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#8A98AA]">PEOPLE WHO’VE DONE IT.</h2>
          <p className="mt-4 max-w-xl text-slate-500">Replace these placeholders with 3–4 real alumni vertical videos.</p>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {["Alumni Story 01", "Alumni Story 02", "Alumni Story 03"].map((x) => (
              <div key={x} className="overflow-hidden rounded-3xl bg-slate-950 p-3 shadow-xl">
                <div className="aspect-[9/14] rounded-2xl bg-gradient-to-br from-[#2563eb] to-slate-900 p-6 text-white flex items-end">
                  <div><p className="text-xl font-black">{x}</p><p className="mt-1 text-sm text-white/60">BYOB Alumni / Founder</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-24 text-white sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-black tracking-[.25em] text-[#38bdf8] uppercase">THE JOURNEY</p>
          <h2 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight text-[#8A98AA]">FROM IDEA TO ACTION.</h2>
          <div className="mt-12 space-y-3">
            {["FIND A PROBLEM", "TALK TO CUSTOMERS", "BUILD YOUR OFFER", "TEST & SELL", "UNDERSTAND THE NUMBERS", "BUILD WHAT WORKS"].map((x, i) => (
              <div key={x} className="flex items-center gap-5 border-b border-white/10 py-5">
                <span className="text-sm font-black text-[#38bdf8]">0{i + 1}</span><span className="text-xl font-bold text-white">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#f4f9fc] p-8 sm:p-14 border border-blue-50 shadow-sm">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#8A98AA]">STILL FIGURING IT OUT?</h2>
          <p className="mt-5 max-w-xl text-lg text-slate-500">Talk to someone from PerpeX. Tell us where you’re at. We’ll help you figure out what makes sense.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="https://wa.me/" onClick={() => track("whatsapp_clicked")} className="rounded-full bg-[#2563eb] px-7 py-4 text-center text-sm font-bold tracking-wider text-white hover:bg-blue-600 transition shadow-md">TALK TO US ON WHATSAPP</a>
            <a href="#apply" onClick={() => track("application_started")} className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center text-sm font-bold tracking-wider text-slate-700 hover:bg-slate-50 transition">APPLY FOR BYOB</a>
          </div>
        </div>
      </section>

      <section id="apply" className="bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#0f172a] px-5 py-28 text-center text-white sm:px-8">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[-.04em] text-white/95">
          YOU KNOW YOU CAN <span className="font-editorial lowercase font-normal italic text-[#60a5fa]">do more.</span>
        </h2>
        <p className="mt-4 text-xl font-medium text-white/80">NOW, DO SOMETHING WITH IT.</p>
        <p className="mt-8 text-lg font-bold">Learn Business by Doing Business.</p>
        <a href="#" onClick={() => track("application_completed")} className="mt-9 inline-flex rounded-full bg-white px-9 py-4 text-sm font-black tracking-[.15em] text-[#2563eb] hover:bg-slate-100 shadow-xl transition hover:scale-105">APPLY FOR BYOB →</a>
      </section>
    </div>
  );
}