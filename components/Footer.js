import Icon from "./Icons";
import { SITE } from "@/lib/site";

const COLS = [
  {
    title: "Tracks",
    links: [
      { l: "n8n Automation", h: "#tracks" },
      { l: "Make & Zapier", h: "#tracks" },
      { l: "Agentic AI", h: "#tracks" },
      { l: "RAG & Vector DBs", h: "#tracks" },
      { l: "Prompt Engineering", h: "#tracks" },
    ],
  },
  {
    title: "Sessions",
    links: [
      { l: "How it works", h: "#how" },
      { l: "Weekend slots", h: "#slots" },
      { l: "Why one-to-one", h: "#why" },
      { l: "FAQ", h: "#faq" },
      { l: "Request a slot", h: "#connect" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-deep">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,0.8fr))]">
          <div>
            <a href="#home" className="inline-block" aria-label="LearnWithLabAI home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="./brand/logo-stacked-dark.svg"
                alt="LearnWithLabAI"
                width="138"
                height="90"
                className="h-[90px] w-auto"
              />
            </a>
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-muted">
              One-to-one, task-based AI and automation mentoring. A fixed weekend slot, a task
              set for you, and something working by the end of every session.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl border border-gold/30 bg-surface/60 px-4 py-3 text-[14px] font-semibold text-goldlt transition-all duration-300 hover:-translate-y-1 hover:border-gold/60"
              >
                <Icon name="chat" className="h-4 w-4" />
                {SITE.whatsappDisplay}
              </a>
              {SITE.linkedin && (
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-2xl border border-lilac/30 bg-surface/60 px-4 py-3 text-[14px] font-semibold text-lilaclt transition-all duration-300 hover:-translate-y-1 hover:border-lilac/60"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21h-4V9Z" />
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-[11.5px] font-bold uppercase tracking-[0.2em] text-gold">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((x) => (
                  <li key={x.l}>
                    <a href={x.h} className="text-[14.5px] font-medium text-muted transition-colors duration-300 hover:text-goldlt">
                      {x.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/12 pt-7 sm:flex-row">
          <p className="text-[13px] font-medium text-muted">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-[13px] font-medium text-muted">
            Saturday 9 AM – 1 PM · Sunday 8 AM – 1 PM · {SITE.timezone}
          </p>
        </div>
      </div>
    </footer>
  );
}
