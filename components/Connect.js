"use client";

import { COURSES } from "@/lib/courses";
import { useState } from "react";
import Reveal from "./Reveal";
import Icon from "./Icons";
import { SITE } from "@/lib/site";

const TRACKS = [...COURSES.map((c) => c.title), "Not sure yet — pick a track for me"];

const WINDOWS = [
  "Saturday 9:00 – 10:30",
  "Saturday 10:30 – 12:00",
  "Saturday 11:00 – 1:00 (2 hrs)",
  "Sunday 8:00 – 9:30",
  "Sunday 9:30 – 11:00",
  "Sunday 11:00 – 1:00 (2 hrs)",
  "Flexible — tell me which slots are open",
];

const LEVELS = ["Complete beginner", "Some no-code experience", "Developer / technical", "Already automating"];

const initial = {
  name: "",
  email: "",
  phone: "",
  track: TRACKS[0],
  slot: WINDOWS[0],
  level: LEVELS[0],
  goal: "",
  company: "", // honeypot
};

export default function Connect() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    if (status.state === "loading") return;

    if (!form.name.trim() || !form.email.trim()) {
      setStatus({ state: "error", msg: "Please add your name and email." });
      return;
    }

    setStatus({ state: "loading", msg: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");

      setStatus({
        state: "success",
        msg: "Got it. I'll reply with your track, your first task and your slot.",
      });
      setForm(initial);
    } catch (err) {
      setStatus({
        state: "error",
        msg: err.message || `Couldn't send that. Message ${SITE.whatsappDisplay} on WhatsApp instead.`,
      });
    }
  }

  return (
    <section id="connect" className="section relative overflow-hidden">
      <span className="mesh-blob animate-blob" style={{ width: 460, height: 460, top: -130, left: "8%", background: "radial-gradient(circle,#C6A664,#C6A66400 70%)" }} />
      <span className="mesh-blob animate-blob" style={{ width: 400, height: 400, bottom: -150, right: "6%", background: "radial-gradient(circle,#B98CD8,#B98CD800 70%)", animationDelay: "5s" }} />

      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <div>
            <Reveal>
              <span className="label-eyebrow">Get in touch</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="h-section">
                Tell me what you <span className="grad-text italic">want to build.</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="rule" />
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-md text-[16px] leading-relaxed text-muted">
                WhatsApp is fastest — a sentence about your background is enough to start. I&apos;ll
                tell you which track you begin on and which weekly slots are still open.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center gap-4 rounded-3xl border border-gold/30 bg-surface/70 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold to-lilac text-[#231527]">
                  <Icon name="chat" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
                    WhatsApp
                  </span>
                  <span className="block font-display text-[21px] font-medium text-ink">
                    {SITE.whatsappDisplay}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={310}>
              <div className="mt-4 space-y-3">
                {SITE.availability.map((a) => (
                  <div key={a.day} className="flex items-center gap-4 rounded-2xl border border-gold/15 bg-surface/40 px-5 py-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-lilac/25 bg-lilac/10 text-lilaclt">
                      <Icon name="calendar" className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-display text-[16px] font-medium text-ink">
                        {a.day} · {a.window}
                      </span>
                      <span className="block text-[12.5px] text-muted">{a.slots}</span>
                    </span>
                  </div>
                ))}
                {SITE.linkedin && (
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-lilac/20 bg-surface/40 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-lilac/50"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-lilac/25 bg-lilac/10 text-lilaclt">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21h-4V9Z" />
                      </svg>
                    </span>
                    <span>
                      <span className="block font-display text-[16px] font-medium text-ink">
                        Check my background on LinkedIn
                      </span>
                      <span className="block text-[12.5px] text-muted">
                        Who you&apos;ll actually be learning from
                      </span>
                    </span>
                  </a>
                )}
                <p className="pt-1 text-[12.5px] text-muted">
                  All times {SITE.timezone}. Sessions run {SITE.sessionLengths}.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="rounded-4xl border border-gold/25 bg-gradient-to-br from-surface to-base p-6 sm:p-9">
              <form onSubmit={onSubmit}>
                <h3 className="font-display text-[24px] font-medium text-ink">Claim your slot</h3>
                <p className="mt-2 text-[14px] text-muted">Under a minute. I reply within a day.</p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-[12.5px] font-bold text-ink">Full name *</label>
                    <input id="name" name="name" className="field" placeholder="Your name" value={form.name} onChange={update("name")} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-[12.5px] font-bold text-ink">Email *</label>
                    <input id="email" name="email" type="email" className="field" placeholder="you@example.com" value={form.email} onChange={update("email")} required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-[12.5px] font-bold text-ink">WhatsApp number</label>
                    <input id="phone" name="phone" className="field" placeholder="03XX XXXXXXX" value={form.phone} onChange={update("phone")} />
                  </div>
                  <div>
                    <label htmlFor="level" className="mb-1.5 block text-[12.5px] font-bold text-ink">Current level</label>
                    <select id="level" name="level" className="field" value={form.level} onChange={update("level")}>
                      {LEVELS.map((x) => <option key={x}>{x}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="track" className="mb-1.5 block text-[12.5px] font-bold text-ink">Skill Mastery Track</label>
                    <select id="track" name="track" className="field" value={form.track} onChange={update("track")}>
                      {TRACKS.map((x) => <option key={x}>{x}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="slot" className="mb-1.5 block text-[12.5px] font-bold text-ink">Slot you want (yours weekly)</label>
                    <select id="slot" name="slot" className="field" value={form.slot} onChange={update("slot")}>
                      {WINDOWS.map((x) => <option key={x}>{x}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="goal" className="mb-1.5 block text-[12.5px] font-bold text-ink">
                      Your background and what you want to be able to do
                    </label>
                    <textarea
                      id="goal"
                      name="goal"
                      rows={4}
                      className="field resize-none"
                      placeholder="e.g. I can write basic Python, no automation experience. I want to be able to build client workflows in n8n and charge for them."
                      value={form.goal}
                      onChange={update("goal")}
                    />
                  </div>

                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={form.company}
                    onChange={update("company")}
                    className="pointer-events-none absolute h-0 w-0 opacity-0"
                  />
                </div>

                <button type="submit" disabled={status.state === "loading"} className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70">
                  {status.state === "loading" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#231527]/40 border-t-[#231527]" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Claim my slot
                      <Icon name="arrow" className="h-[18px] w-[18px]" />
                    </>
                  )}
                </button>

                {status.state === "success" && (
                  <div className="mt-4 flex items-start gap-3 rounded-2xl border border-gold/35 bg-gold/10 px-4 py-3.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold text-[#231527]">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    <p className="text-[14px] font-semibold text-goldlt">{status.msg}</p>
                  </div>
                )}
                {status.state === "error" && (
                  <div className="mt-4 rounded-2xl border border-lilac/40 bg-lilac/10 px-4 py-3.5">
                    <p className="text-[14px] font-semibold text-lilaclt">{status.msg}</p>
                  </div>
                )}

                <p className="mt-4 text-center text-[12px] text-muted">
                  Your details are used only to arrange sessions.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
