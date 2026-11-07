import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "You tell me where you are",
    time: "Before you start",
    desc: "A WhatsApp message is enough: your background, what you already know, and what you want to be able to do. That is what I set your first task from.",
  },
  {
    n: "02",
    title: "You choose your slot once",
    time: "Before you start",
    desc: "Pick the weekend window that fits your life. It stays yours from then on, so the time never has to be arranged again.",
  },
  {
    n: "03",
    title: "I set the task, you build it",
    time: "During the slot",
    desc: "The task is waiting when you arrive, sized to the slot and to your level. Your screen, your keyboard. I explain the why as you go and catch mistakes early rather than taking over.",
  },
  {
    n: "04",
    title: "It runs before you leave",
    time: "End of the slot",
    desc: "The session doesn't end on a slide. It ends with the workflow, agent or script working, and you understanding every piece of it.",
  },
  {
    n: "05",
    title: "I set homework that matters",
    time: "During the week",
    desc: "A follow-up task to do on your own, so the skill sticks. Message me when you are stuck, and we review it at the start of your next slot.",
  },
  {
    n: "06",
    title: "It becomes portfolio work",
    time: "Over time",
    desc: "Tasks stack up into real, demonstrable builds, the kind you can show an employer or charge a client for.",
  },
];

export default function LearningPath() {
  return (
    <section id="how" className="section relative overflow-hidden bg-deep">
      <span className="mesh-blob animate-blob" style={{ width: 460, height: 460, top: 180, left: -190, background: "radial-gradient(circle,#C6A664,#C6A66400 70%)" }} />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="label-eyebrow">How a session works</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-section">
              A task in, <span className="grad-text italic">a working build out.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 text-[16px] leading-relaxed text-muted">
              The same shape every week, in the same slot, from your first session to your last.
            </p>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <span className="absolute left-[27px] top-4 hidden h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-gold via-lilac to-transparent sm:block" />

          <div className="space-y-5">
            {STEPS.map((s, idx) => (
              <Reveal key={s.n} delay={idx * 85}>
                <div className="relative flex gap-5 sm:gap-7">
                  <div className="z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-gold/30 bg-surface font-display text-[16px] font-medium text-gold">
                    {s.n}
                  </div>
                  <div className="card flex-1 !p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-[19px] font-medium text-ink sm:text-[21px]">{s.title}</h3>
                      <span className="rounded-full border border-lilac/25 bg-lilac/10 px-3 py-1 text-[11px] font-bold text-lilaclt">
                        {s.time}
                      </span>
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
