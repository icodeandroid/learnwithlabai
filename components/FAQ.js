"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { FAQ_ITEMS as ITEMS } from "@/lib/faq";


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
