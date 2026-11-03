import Reveal from "./Reveal";
import Icon from "./Icons";
import { SITE, waLink } from "@/lib/site";

const WHO = [
  {
    title: "Working professionals",
    desc: "Developers, marketers, analysts and ops people who want the skill without taking leave for it.",
  },
  {
    title: "Fresh graduates",
    desc: "Recent grads who need real builds to show, not another certificate nobody reads.",
  },
  {
    title: "Freelancers",
    desc: "People already selling services who want to add automation and AI work to what they charge for.",
  },
  {
    title: "Founders & small teams",
    desc: "Owners automating their own operations instead of hiring someone for repetitive work.",
  },
];

const DAYS = [
  {
    day: "Saturday",
    window: "9:00 AM – 1:00 PM",
    starts: ["9:00", "10:00", "11:00", "11:30"],
  },
  {
    day: "Sunday",
    window: "8:00 AM – 1:00 PM",
    starts: ["8:00", "9:00", "10:00", "11:00", "11:30"],
  },
];

export default function Schedule() {
  return (
    <section id="slots" className="section bg-deep">
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="label-eyebrow">Your weekly slot</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-section">
              Choose it once. <span className="grad-text italic">Then it&apos;s yours.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 text-[16px] leading-relaxed text-muted">
              You pick one weekend window when you start, and it stays yours for the whole
              programme — same day, same time, every week. Sessions run {SITE.sessionLengths}.
              All times {SITE.timezone}.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {DAYS.map((d, idx) => (
            <Reveal key={d.day} delay={idx * 110}>
              <div className="card h-full">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[26px] font-medium text-ink">{d.day}</h3>
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[12px] font-bold text-goldlt">
                    {d.window}
                  </span>
                </div>
                <div className="rule" />

                <p className="mt-6 text-[10.5px] font-bold uppercase tracking-[0.18em] text-gold">
                  Start times
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {d.starts.map((s) => (
                    <span
                      key={s}
                      className="rounded-xl border border-lilac/25 bg-lilac/[0.08] px-3.5 py-2 text-[13.5px] font-semibold text-lilaclt"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-[13.5px] leading-relaxed text-muted">
                  Pick a start time and whether you want 90 minutes or 2 hours. That becomes your
                  fixed {d.day} slot.
                </p>

                <a
                  href={waLink(
                    `Hi, I'd like to claim a ${d.day} slot on LearnWithLabAI (${d.window}).\n\nStart time I want: \nLength: 90 minutes / 2 hours\nMy background: `
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-6 w-full !py-3 text-[13.5px]"
                >
                  Claim a {d.day} slot
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-6 flex max-w-2xl items-start gap-3 rounded-2xl border border-gold/20 bg-surface/50 px-5 py-4">
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
              <Icon name="calendar" className="h-3.5 w-3.5" />
            </span>
            <p className="text-[13.5px] leading-relaxed text-muted">
              Slots are one per student and are held for you week to week, so once a time is
              taken it stays taken. Message me to check what&apos;s still open.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-24 max-w-2xl text-center">
          <Reveal>
            <span className="label-eyebrow">Who this suits</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-section">
              People with <span className="grad-text italic">full calendars.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHO.map((a, idx) => (
            <Reveal key={a.title} delay={idx * 80}>
              <div className="card h-full text-center">
                <div className="mx-auto grid h-11 w-11 place-items-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">
                  <Icon name="mentor" className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-[17px] font-medium text-ink">{a.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
