"use client";

import { useEffect, useRef, useState } from "react";
import { SITE, waLink } from "@/lib/site";
import BotAvatar from "./BotAvatar";

const GREETING = {
  role: "assistant",
  content: `Hi! I'm ${SITE.bot}, the ${SITE.name} assistant. Ask me about our ${SITE.offering.many}, how sessions work, weekend slots — or any AI and automation question.`,
};

const SUGGESTIONS = [
  `Which ${SITE.offering.one} should I start with?`,
  "How do the sessions work?",
  "What are the weekend slots?",
  "What is RAG?",
];

// Turn URLs in a reply into links.
function Linkified({ text }) {
  const parts = text.split(/(https?:\/\/[^\s)]+)/g);
  return parts.map((p, i) =>
    /^https?:\/\//.test(p) ? (
      <a
        key={i}
        href={p}
        target="_blank"
        rel="noopener noreferrer"
        className="break-words text-goldlt underline underline-offset-2"
      >
        {p.includes("wa.me") ? "Open WhatsApp" : p}
      </a>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, busy, open]);

  // little "Hi!" bubble next to the robot, a few seconds after the page loads
  useEffect(() => {
    const t = setTimeout(() => setTeaser(true), 3500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) setTeaser(false);
  }, [open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  async function send(text) {
    const content = (text ?? input).trim();
    if (!content || busy) return;
    setInput("");

    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // the greeting is UI only, so it is not sent to the model
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      const data = await res.json().catch(() => ({}));
      const reply =
        data.reply ||
        data.error ||
        `Sorry, something went wrong. Message us on WhatsApp: ${SITE.whatsappDisplay}`;
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: `I couldn't connect just now. Message us on WhatsApp: ${SITE.whatsappDisplay} — ${SITE.whatsappLink}`,
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  const showSuggestions = messages.length === 1 && !busy;

  return (
    <>
      {/* teaser bubble */}
      {teaser && !open && (
        <div
          className="bot-pop fixed z-[70] flex max-w-[230px] items-start gap-2 rounded-2xl rounded-br-md border border-gold/30 bg-surface px-3.5 py-2.5 text-[13px] leading-snug text-ink shadow-soft"
          style={{
            right: "calc(max(16px, env(safe-area-inset-right, 0px)) + 76px)",
            bottom: "calc(max(16px, env(safe-area-inset-bottom, 0px)) + 30px)",
          }}
        >
          <button type="button" onClick={() => setOpen(true)} className="text-left">
            Hi, I&apos;m <span className="font-semibold text-goldlt">{SITE.bot}</span>! Questions about AI or our {SITE.offering.many}? Ask me.
          </button>
          <button
            type="button"
            onClick={() => setTeaser(false)}
            aria-label="Dismiss"
            className="-mr-1 -mt-0.5 shrink-0 px-1 text-muted hover:text-ink"
          >
            ×
          </button>
        </div>
      )}

      {/* launcher: the robot */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : `Chat with ${SITE.bot}`}
        aria-expanded={open}
        className="group fixed z-[70] grid h-[66px] w-[66px] place-items-center rounded-full border border-gold/40 bg-surface shadow-glow transition-transform duration-300 hover:scale-105"
        style={{
          right: "max(16px, env(safe-area-inset-right, 0px))",
          bottom: "max(16px, env(safe-area-inset-bottom, 0px))",
        }}
      >
        {!open && <span className="absolute inset-0 animate-ping rounded-full border border-gold/30 [animation-duration:2.6s]" />}
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-goldlt" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        ) : (
          <BotAvatar size={54} wave />
        )}
      </button>

      {/* panel */}
      <div
        role="dialog"
        aria-label={`${SITE.bot}, ${SITE.name} assistant`}
        className={`fixed z-[69] flex flex-col overflow-hidden rounded-3xl border border-gold/25 bg-base shadow-soft transition-all duration-300 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        style={{
          right: "max(16px, env(safe-area-inset-right, 0px))",
          bottom: "calc(max(16px, env(safe-area-inset-bottom, 0px)) + 68px)",
          width: "min(380px, calc(100vw - 32px))",
          height: "min(560px, calc(100dvh - 120px))",
        }}
      >
        {/* header */}
        <div className="flex items-center gap-3 border-b border-gold/15 bg-surface px-4 py-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-gold/25 bg-deep">
            <BotAvatar size={38} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-display text-[15px] font-medium text-ink">{SITE.bot}</p>
            <p className="flex items-center gap-1.5 text-[11.5px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {SITE.name} assistant
            </p>
          </div>
          <a
            href={waLink("Hi, I was chatting with the assistant on your website and have a question.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gold/30 px-2.5 py-1.5 text-[11.5px] font-semibold text-goldlt transition-colors hover:bg-gold/10"
          >
            WhatsApp
          </a>
        </div>

        {/* messages */}
        <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
          {messages.map((m, i) => (
            <div key={i} className={`flex items-end gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              {m.role === "assistant" && <BotAvatar size={26} animated={false} className="shrink-0" />}
              <div
                className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
                  m.role === "user"
                    ? "rounded-br-md bg-gradient-to-br from-gold to-goldlt text-[#231527]"
                    : "rounded-bl-md border border-gold/15 bg-surface text-ink"
                }`}
              >
                {m.role === "assistant" ? <Linkified text={m.content} /> : m.content}
              </div>
            </div>
          ))}

          {busy && (
            <div className="flex items-end gap-2 justify-start">
              <BotAvatar size={26} className="shrink-0" />
              <div className="flex gap-1 rounded-2xl rounded-bl-md border border-gold/15 bg-surface px-4 py-3">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold"
                    style={{ animationDelay: `${d * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          )}

          {showSuggestions && (
            <div className="flex flex-wrap gap-2 pt-1">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="rounded-full border border-lilac/30 bg-lilac/10 px-3 py-1.5 text-left text-[12px] font-medium text-lilaclt transition-colors hover:bg-lilac/20"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
          className="flex items-end gap-2 border-t border-gold/15 bg-surface px-3 py-3"
        >
          <label htmlFor="chat-input" className="sr-only">
            Your message
          </label>
          <textarea
            id="chat-input"
            ref={inputRef}
            rows={1}
            value={input}
            maxLength={1000}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            placeholder={`Ask ${SITE.bot}…`}
            className="max-h-28 min-h-[42px] flex-1 resize-none rounded-2xl border border-gold/20 bg-deep/60 px-3.5 py-2.5 text-[13.5px] text-ink outline-none placeholder:text-muted/60 focus:border-gold"
          />
          <button
            type="submit"
            disabled={busy || !input.trim()}
            aria-label="Send"
            className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold to-lilac text-[#231527] transition-opacity disabled:opacity-40"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
