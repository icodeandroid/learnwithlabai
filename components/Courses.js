import Reveal from "./Reveal";
import Icon from "./Icons";
import { waLink } from "@/lib/site";
import { COURSES } from "@/lib/courses";

export default function Courses() {
  return (
    <section id="tracks" className="section">
      <span className="mesh-blob animate-blob" style={{ width: 420, height: 420, top: 140, right: -170, background: "radial-gradient(circle,#B98CD8,#B98CD800 70%)" }} />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="label-eyebrow">Courses</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-section">
              Seven courses. <span className="grad-text italic">Every one is a build.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 text-[16px] leading-relaxed text-muted">
              Each course breaks into modules, and each session covers one task from a module.
              I set the task and the order, matched to what you can already do.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 space-y-6">
          {COURSES.map((c, idx) => (
            <Reveal key={c.id} delay={idx * 50}>
              <article className="card group">
                {/* header */}
                <div className="flex flex-wrap items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold to-lilac text-[#231527] transition-transform duration-500 group-hover:scale-110">
                    <Icon name={c.icon} className="h-7 w-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-[15px] font-medium text-gold">{c.num}</span>
                      <span className="rounded-full border border-lilac/25 bg-lilac/10 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-lilaclt">
                        {c.tag}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-[23px] font-medium leading-snug text-ink sm:text-[26px]">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.14em] text-gold/80">
                      {c.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mt-5 max-w-3xl text-[14.5px] leading-relaxed text-muted">{c.summary}</p>

                <div className="mt-5 rounded-2xl border border-gold/20 bg-gold/[0.06] px-4 py-3.5">
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-gold">
                    By the end you can
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink">{c.outcome}</p>
                </div>

                {/* modules */}
                <p className="mt-7 text-[10.5px] font-bold uppercase tracking-[0.18em] text-gold">
                  What this course includes
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {c.modules.map((m, mi) => (
                    <div
                      key={m.name}
                      className="rounded-2xl border border-gold/12 bg-base/40 p-4"
                    >
                      <p className="flex items-center gap-2 font-display text-[15px] font-medium text-ink">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-lilac/15 text-[10px] font-bold text-lilaclt">
                          {mi + 1}
                        </span>
                        {m.name}
                      </p>
                      <ul className="mt-2.5 space-y-1.5">
                        {m.points.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-muted">
                            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* footer */}
                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-gold/12 pt-5">
                  <span className="rounded-full border border-gold/20 px-3 py-1 text-[12px] font-bold text-muted">
                    {c.sessions}
                  </span>
                  <span className="rounded-full border border-gold/20 px-3 py-1 text-[12px] font-bold text-muted">
                    {c.needs}
                  </span>
                  <a
                    href={waLink(
                      `Hi, I'd like to start the "${c.title}" course on LearnWithLabAI.\n\nMy background: \nWhat I want to be able to do: \nSlot I'd prefer: `
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary ml-auto !px-6 !py-3 text-[13.5px]"
                  >
                    <Icon name="chat" className="h-4 w-4" />
                    Choose this course
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
