"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

const ITEMS = [
  {
    q: "Is this a course or a class?",
    a: "Neither. It is one-to-one mentoring built around tasks I set you. Every session you work on a real build with me beside you — there is no group, no syllabus you sit through, and no recorded lectures.",
  },
  {
    q: "How does the slot work?",
    a: `You choose one window when you start — inside Saturday 9:00 AM – 1:00 PM or Sunday 8:00 AM – 1:00 PM, ${SITE.timezone} — and it stays yours every week for the whole programme. Sessions are ninety minutes, or two hours if you want the longer slot.`,
  },
  {
    q: "Do I need coding experience?",
    a: "No. The automation, prompt and AI-tools tracks are no-code friendly. Some JavaScript helps for advanced n8n and API work, and we cover exactly what your task needs as it comes up.",
  },
  {
    q: "What happens in a session?",
    a: "Your task is ready when you arrive. You share your screen and do the work; I guide, explain the reasoning, catch mistakes early and step in when you are properly stuck. The task is finished and running before we stop.",
  },
  {
    q: "Who decides what I work on?",
    a: "I do. I set each task based on your level and what you have already finished, so the difficulty moves at the right pace and nothing important gets skipped. Tell me your goal and it shapes which track you go down.",
  },
  {
    q: "How many sessions is the programme?",
    a: "A fixed number, agreed before you start, so you know exactly what you are committing to. Message me and I'll confirm the current programme length and what it covers.",
  },
  {
    q: "What if I get stuck during the week?",
    a: "Message me on WhatsApp. Homework between slots is part of how this works, and so is getting unstuck when something refuses to run.",
  },
  {
    q: "How do I book?",
    a: `Message ${SITE.whatsappDisplay} on WhatsApp, or send the form on this page. Tell me your background, your goal and which weekend window suits you, and I'll confirm whether that slot is free.`,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section bg-deep">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="label-eyebrow">Questions</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-section">
              Before you <span className="grad-text italic">message me.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {ITEMS.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <Reveal key={item.q} delay={idx * 55}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                    isOpen ? "border-gold/45 bg-surface" : "border-gold/15 bg-surface/50 hover:border-gold/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-display text-[16.5px] font-medium text-ink sm:text-[18px]">
                      {item.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-500 ${
                        isOpen ? "rotate-45 bg-gradient-to-br from-gold to-lilac text-[#231527]" : "border border-gold/25 text-gold"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className="grid transition-all duration-500 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-muted sm:px-6 sm:pb-6">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
