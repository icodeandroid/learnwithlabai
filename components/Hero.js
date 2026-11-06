"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import Icon from "./Icons";
import { SITE, waLink } from "@/lib/site";

const ROTATING = [
  "an n8n workflow",
  "a RAG chatbot",
  "an AI agent",
  "a Make scenario",
  "a prompt system",
];

const FLOATERS = [
  { label: "n8n", top: "18%", left: "4%", delay: "0s" },
  { label: "LangChain", top: "32%", right: "5%", delay: "1.2s" },
  { label: "Make", bottom: "26%", left: "7%", delay: "2.3s" },
  { label: "Pinecone", bottom: "18%", right: "8%", delay: "0.7s" },
];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROTATING.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2A1B33] via-[#1E1324] to-[#170E1C]" />
        <div className="absolute inset-0 grid-lines" />
        <span className="mesh-blob animate-blob" style={{ width: 520, height: 520, top: -150, left: -130, background: "radial-gradient(circle,#B98CD8,#B98CD800 70%)" }} />
        <span className="mesh-blob animate-blob" style={{ width: 440, height: 440, top: 60, right: -120, background: "radial-gradient(circle,#C6A664,#C6A66400 70%)", animationDelay: "4s" }} />
        <span className="mesh-blob animate-blob" style={{ width: 380, height: 380, bottom: -140, left: "40%", background: "radial-gradient(circle,#8E5FB0,#8E5FB000 70%)", animationDelay: "8s" }} />
      </div>

      {FLOATERS.map((f) => (
        <div
          key={f.label}
          className="pointer-events-none absolute hidden animate-float xl:block"
          style={{ top: f.top, left: f.left, right: f.right, bottom: f.bottom, animationDelay: f.delay }}
        >
          <div className="rounded-2xl border border-gold/25 bg-surface/70 px-5 py-3 font-sans text-sm font-bold text-goldlt backdrop-blur">
            {f.label}
          </div>
        </div>
      ))}

      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="pill">
              <span className="relative inline-flex h-2 w-2">
                <span className="ring-dot absolute inset-0 rounded-full" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              One-to-one · Weekend slots open
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 font-display text-[2.7rem] font-medium leading-[1.08] tracking-tight sm:text-[4rem] lg:text-[4.5rem]">
              You don&apos;t sit in a class.
              <br className="hidden sm:block" />{" "}
              <span className="grad-text italic">You build the thing.</span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-[17px] text-muted sm:text-[21px]">
              <span>This Saturday you&apos;ll ship</span>
              <span
                key={ROTATING[i]}
                className="animate-wordin rounded-xl border border-lilac/30 bg-lilac/10 px-3 py-1 font-display italic text-lilaclt"
              >
                {ROTATING[i]}
              </span>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-7 max-w-xl text-[16px] leading-relaxed text-muted">
              One-to-one AI and automation mentoring. I set you a task, you build it hands-on
              with me beside you, and it runs before the session ends. No lectures, no cohort, no
              recordings of someone else&apos;s screen.
            </p>
          </Reveal>

          <Reveal delay={310}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={waLink("Hi, I'm interested in one-to-one AI & automation sessions.\n\nMy background: \nWhat I want to learn: \nSlot I'd prefer: ")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <Icon name="chat" className="h-[18px] w-[18px]" />
                Message on WhatsApp
              </a>
              <a href="#slots" className="btn-ghost w-full sm:w-auto">
                See weekend slots
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[13px] font-semibold text-muted">
              {["A task set for you", "90 minutes or 2 hours", "Saturday & Sunday only"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-gold/15 text-gold">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={450}>
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {[
              { n: "1:1", l: "Never a group" },
              { n: "90", l: "Minutes per slot" },
              { n: "7", l: "Skill Mastery Tracks" },
              { n: "100%", l: "Hands on keyboard" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl glass px-4 py-5 text-center transition-transform duration-500 hover:-translate-y-1.5">
                <div className="font-display text-[28px] font-medium text-gold sm:text-[32px]">{s.n}</div>
                <div className="mt-1.5 text-[12px] font-semibold leading-snug text-muted">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
