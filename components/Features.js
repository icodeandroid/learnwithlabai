import Reveal from "./Reveal";
import Icon from "./Icons";
import { waLink } from "@/lib/site";

const FEATURES = [
  {
    icon: "mentor",
    title: "It is only ever you",
    desc: "No cohort, no classmates, nobody to wait for. The whole slot is spent on your problem, at your speed.",
  },
  {
    icon: "project",
    title: "You keep the keyboard",
    desc: "I don't demo while you watch. You type, you break things, you fix them. That is the only way it sticks.",
  },
  {
    icon: "calendar",
    title: "One fixed slot, kept",
    desc: "You choose your weekend window once at the start. It is yours from then on. Same time, every week, no rebooking.",
  },
  {
    icon: "flow",
    title: "Tasks chosen for you",
    desc: "I decide what you build and when, based on what you can already do. No guessing what to learn next, and no toy examples.",
  },
  {
    icon: "chat",
    title: "Stuck during the week? Message me",
    desc: "Homework between slots is part of it, and so is getting unstuck on WhatsApp when something refuses to run.",
  },
  {
    icon: "career",
    title: "Work you can show",
    desc: "Finished tasks become portfolio pieces and, if you want it, the start of charging clients for the same work.",
  },
];

export default function Features() {
  return (
    <section id="why" className="section overflow-hidden">
      <div className="container-x relative">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <span className="label-eyebrow">Why one-to-one</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="h-section">
                Nobody ever learned this <span className="grad-text italic">by watching.</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="rule" />
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-md text-[16px] leading-relaxed text-muted">
                Recorded courses hand you a video and hope. Here you get a task I set, a
                deadline of ninety minutes, and someone watching your screen who already knows
                where it breaks.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8 rounded-3xl border border-gold/25 bg-surface/70 p-6">
                <p className="font-display text-[19px] font-medium text-ink">Not sure where to start?</p>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">
                  Send me your background and what you want to be able to do. I&apos;ll tell you
                  which track you start on and what your first task will be.
                </p>
                <a
                  href={waLink("Hi, I'm not sure which track suits me.\n\nMy background: \nWhat I want to be able to do: ")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full !py-3 text-[13.5px]"
                >
                  <Icon name="chat" className="h-4 w-4" />
                  Ask on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {FEATURES.map((f, idx) => (
              <Reveal key={f.title} delay={idx * 80}>
                <div className="card group h-full">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-gold/25 bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-[18px] font-medium text-ink">{f.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
