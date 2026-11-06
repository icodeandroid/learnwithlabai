"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";

const LINKS = [
  { href: "#tracks", label: "Skill Tracks" },
  { href: "#how", label: "How It Works" },
  { href: "#why", label: "Why 1-on-1" },
  { href: "#slots", label: "Slots" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2.5" : "py-4"}`}>
      <div className="container-x">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled ? "glass shadow-soft" : "border border-transparent"
          }`}
        >
          <a href="#home" className="flex items-center" onClick={() => setOpen(false)} aria-label="LearnWithLabAI home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="./brand/logo-stacked-dark.svg"
              alt="LearnWithLabAI"
              width="94"
              height="61"
              className="h-[61px] w-auto"
            />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-xl px-4 py-2 text-[14px] font-semibold text-muted transition-colors duration-300 hover:bg-gold/10 hover:text-goldlt"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={waLink("Hi, I'd like to book a one-to-one slot with LearnWithLabAI.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden !px-6 !py-3 text-[13.5px] sm:inline-flex"
            >
              Book a Slot
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-gold/30 bg-surface/60 text-goldlt transition-colors hover:bg-gold/15 lg:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <div className={`fixed inset-0 top-0 z-40 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-deep/80 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute inset-x-4 top-24 rounded-3xl glass p-5 shadow-soft transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3.5 font-display text-[17px] font-medium text-ink transition-colors hover:bg-gold/10 hover:text-goldlt"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink("Hi, I'd like to book a one-to-one slot with LearnWithLabAI.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 w-full"
          >
            Book a Slot on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
