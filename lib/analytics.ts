export function track(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("byob-analytics", { detail: { event, ...payload } }));
  }
  console.info("[BYOB]", event, payload);
}