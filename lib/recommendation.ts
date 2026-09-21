export type Stage =
  | "idea"
  | "building"
  | "learn"
  | "figuring";

export type Time = "2-3" | "4-6" | "7-10" | "10+";

export type Challenge =
  | "start"
  | "overthink"
  | "customers"
  | "structure"
  | "grow";

export function recommendation(stage: Stage, time: Time, challenge: Challenge) {
  const sentences: Record<Stage, string> = {
    idea: "You have something you want to build, and you’re ready to start working on it.",
    building: "You’re already building. You need structure, feedback and a clearer path forward.",
    learn: "You want to understand business better, and the best way to do that is through practical action.",
    figuring: "You know you want to do more, and a practical business journey can help you find your direction."
  };

  const challengeLine: Record<Challenge, string> = {
    start: "BYOB gives you a structured way to turn uncertainty into action.",
    overthink: "BYOB gives you a practical environment to stop thinking endlessly and start testing.",
    customers: "BYOB helps you put customer conversations, validation and selling into practice.",
    structure: "BYOB gives you a clear path, feedback and accountability while you execute.",
    grow: "BYOB gives you a practical framework to understand what works and build from there."
  };

  return {
    title: "BYOB",
    subtitle: "BUILD YOUR OWN BUSINESS",
    promise: "Learn Business by Doing Business.",
    body: `${sentences[stage]} ${challengeLine[challenge]}`,
    time
  };
}

export const videoByChallenge: Record<Challenge, { title: string; role: string }> = {
  start: { title: "Starting before you feel ready", role: "BYOB Alumni / Founder" },
  overthink: { title: "From overthinking to action", role: "BYOB Alumni / Founder" },
  customers: { title: "Finding the first customer", role: "BYOB Alumni / Founder" },
  structure: { title: "Building with structure", role: "BYOB Alumni / Founder" },
  grow: { title: "Learning how to grow", role: "BYOB Alumni / Founder" }
};